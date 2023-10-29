import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import * as fs from "fs";
// import { getContract } from "ethers";
import { log } from "console";

// Hardcode an address here if you like;
const initializer = "";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployRegistry: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const addysFile = "./deployed_addresses.tmp";

  console.log(deployer)

  // await deploy("YourContract", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: [deployer],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  const contents = fs.readFileSync(addysFile, 'utf8');
  const [accountImplAddy, gatewayAddy] = contents
    .split('\n')
    .map(pair=> pair.split('='))
    .map(pair=> pair[1]);

  console.log([accountImplAddy, gatewayAddy]);

  console.log('About to deploy PersonalAccountRegistry');

  await deploy("PersonalAccountRegistry", {
    from: deployer,
    args: [], // No constructor arguments, only initialize
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // @ts-ignore
  const accountRegistry = await hre.ethers.getContract('PersonalAccountRegistry', deployer);
  const initTxReg = await accountRegistry.initialize(
    ["0x0"], accountImplAddy, gatewayAddy
  );
  
  const accountImplementation = await hre.ethers.getContract("AccountImplementationV1", accountImplAddy);
  const gateway = await hre.ethers.getContract("Gateway", gatewayAddy);
  fs.appendFileSync(addysFile, `REGISTRY=${accountRegistry.address}\n`);


  const initTxGw = await gateway.initialize(accountRegistry.address, accountRegistry.address);
  const initTxAccImpl = await gateway.initialize(accountRegistry.address);

  // Get the deployed contract
  // const yourContract = await hre.ethers.getContract("YourContract", deployer);
};

export default deployRegistry;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployRegistry.tags = ["PersonalAccountRegistry"];
