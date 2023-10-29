// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/utils/Context.sol";

contract TemporaryWallet is Context {
	address private _owner;

	constructor() {
		_owner = _msgSender();
	}

	modifier onlyOwner() {
		require(_owner == _msgSender(), "Wallet: caller is not the owner");
		_;
	}

	function execute(
		address to,
		uint256 value,
		bytes calldata data
	) external onlyOwner returns (bool, bytes memory) {
		// Forward the execution request to the target contract
		(bool success, bytes memory result) = to.call{ value: value }(data);
		require(success, "Wallet: execution failed");
		return (success, result);
	}

	function updateOwner(address newOwner) external onlyOwner {
		require(
			newOwner != address(0),
			"Wallet: new owner is the zero address"
		);
		_owner = newOwner;
	}

	function owner() external view returns (address) {
		return _owner;
	}
}
