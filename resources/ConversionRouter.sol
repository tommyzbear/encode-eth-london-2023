// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// UniSwap router interface

contract ConversionRouter is OwnableUpgradeable {
    using SafeERC20 for IERC20;

    ISwapRouter private immutable uniswapRouter;

    //**************************************************************************
    //                              EVENTS
    //**************************************************************************

    event SwapSucceeded(
        address indexed inputToken,
        address indexed outputToken,
        uint256 inputAmount,
        uint256 outputAmount
    );
    event SwapFailed(
        address indexed inputToken,
        address indexed outputToken,
        uint256 inputAmount
    );

    //**************************************************************************
    //                              CONSTRUCTOR
    //**************************************************************************

    constructor(ISwapRouter _uniswapRouter) {
        __Ownable_init(); // Initialize OwnableUpgradeable
        uniswapRouter = _uniswapRouter;
    }

    //**************************************************************************
    //                          CONTRACT FUNCTIONS
    //**************************************************************************

    function convertViaUniswap(
        uint256 m_amount,
        address m_inputToken,
        address m_outputToken,
        address m_recipient,
        uint24 pool_fee,
        address m_sender
    ) internal {
        // Transfer the tokens from the calling contract to this contract
        IERC20(m_inputToken).safeTransferFrom(
            m_sender,
            address(this),
            m_amount
        );

        // Approve the Uniswap router to spend the input tokens
        IERC20(m_inputToken).approve(address(uniswapRouter), m_amount);

        // Set the parameters
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: m_inputToken,
                tokenOut: m_outputToken,
                fee: pool_fee,
                recipient: m_recipient,
                deadline: block.timestamp,
                amountIn: m_amount,
                amountOutMinimum: 0, // Naively set amountOutMinimum to 0. In production, use an oracle or other data source to choose a safer value for amountOutMinimum.
                sqrtPriceLimitX96: 0 // used to limit the price of the swap. If set it to 0, the swap will be executed at any price. In production set this parameter to a value that ensures the swap won't be executed if the price is too unfavorable.
            });

        // Execute the swap
        try uniswapRouter.exactInputSingle(params) returns (uint256 amountOut) {
            // Swap succeeded, `amountOut` is the amount of output tokens received
            emit SwapSucceeded(
                m_inputToken,
                m_outputToken,
                m_amount,
                amountOut
            );
        } catch {
            // Swap failed, handle the failure
            emit SwapFailed(m_inputToken, m_outputToken, m_amount);
        }
    }
}
