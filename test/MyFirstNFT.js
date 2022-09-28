const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("Deploy MYFirstNFT", function () {
      async function deployMyFirstNFT() {
        const MyFirstNFT = await ethers.getContractFactory("MyFirstNFT");
        const myFirstNFT = await MyFirstNFT.deploy();
        await myFirstNFT.deployed();
        [deployer, address1, address2] = await ethers.getSigners();
        return {myFirstNFT, deployer};
      }
  
      it("mint 5 NFTS & check the contract Balance", async function () {
          const { myFirstNFT, deployer} = await loadFixture(deployMyFirstNFT);
          
      });


      it("mintNFT & transfer to another address", async function () {
        const { myFirstNFT, deployer} = await loadFixture(deployMyFirstNFT);
        
    });

    it("mint 5 NFT & Withdraw funds from the contract(using Withdraw)", async function () {
        const { myFirstNFT, deployer} = await loadFixture(deployMyFirstNFT);

    });
  
  
  });
  
