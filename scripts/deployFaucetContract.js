// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying Faucet contract with the account:", deployer.address); 
    SimpleFaucet = await ethers.getContractFactory("SimpleFaucet");
    simpleFaucet = await SimpleFaucet.deploy();
    await simpleFaucet.deployed(); 
    console.log("SimpleFaucet deployed to:", simpleFaucet.address);
    await simpleFaucet.deposit({value: ethers.utils.parseEther("1")});

  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
