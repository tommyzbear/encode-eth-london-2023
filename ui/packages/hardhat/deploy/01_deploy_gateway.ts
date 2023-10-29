import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { getContract } from "ethers";
import * as fs from "fs";
import { log } from "console";

// Hardcode an address here if you like;
const initializer = "";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployGateway: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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

  console.log('About to deploy Gateway');
  await deploy("Gateway", {
    from: deployer,
    args: [], // No constructor arguments, only initialize
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });
  console.log('should have deployed Gateway');
  const gateway = await hre.ethers.getContract("Gateway", deployer);
  console.log('at:', gateway.address);

  fs.appendFileSync(addysFile, `GATEWAY=${gateway.address}\n`);

  // console.log('About to deploy PersonalAccountImplementationV1');

  // await deploy("PersonalAccountImplementationV1", {
  //   from: deployer,
  //   // No constructor arguments but
  //   // args: [initializer || deployer],
  //   // to initializer
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // // @ts-ignore
  // const abstractedAccount = await hre.ethers.getContract('PersonalAccountImplementationV1');
  // const initTx = await abstractedAccount.initialize(([initializer || deployer]).toString());
  

  // Get the deployed contract
  // const yourContract = await hre.ethers.getContract("YourContract", deployer);
};

export default deployGateway;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployGateway.tags = ["Gateway"];
