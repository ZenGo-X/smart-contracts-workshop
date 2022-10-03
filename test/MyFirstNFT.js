const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
const { ethers } = require("hardhat");
  
  describe("Deploy MYFirstNFT", function () {
      async function deployMyFirstNFT() {
        const MyFirstNFT = await ethers.getContractFactory("MyFirstNFT");
        const myFirstNFT = await MyFirstNFT.deploy("https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/");
        await myFirstNFT.deployed();
        [deployer, address1, address2] = await ethers.getSigners();
        return {myFirstNFT, deployer};
      }
      it("mint 5 NFTS & check the contract Balance", async function () {
          const { myFirstNFT, deployer} = await loadFixture(deployMyFirstNFT);
          await myFirstNFT.mint(5, {value: ethers.utils.parseEther("0.05")});
          expect(await myFirstNFT.balanceOf(deployer.address)).to.equal(5);
          expect(await ethers.provider.getBalance(myFirstNFT.address)).to.equal(ethers.utils.parseEther("0.05"));
      });
      it("mintNFT & transfer to another address", async function () {
        const { myFirstNFT, deployer} = await loadFixture(deployMyFirstNFT);
        await myFirstNFT.mint(1, {value: ethers.utils.parseEther("0.01")});
        await myFirstNFT.transferFrom(deployer.address, address1.address, 1);
        expect(await myFirstNFT.balanceOf(deployer.address)).to.equal(0);
        expect(await myFirstNFT.balanceOf(address1.address)).to.equal(1);
        
    });

    it("mint 5 NFT & Withdraw funds from the contract(using Withdraw)", async function () {
        const { myFirstNFT, deployer} = await loadFixture(deployMyFirstNFT);
        await myFirstNFT.mint(5, {value: ethers.utils.parseEther("0.05")});
        var contractBalance = await ethers.provider.getBalance(myFirstNFT.address);
        expect (contractBalance).to.equal(ethers.utils.parseEther("0.05"));
        await myFirstNFT.withdraw();
        var contractBalance = await ethers.provider.getBalance(myFirstNFT.address);
        expect (contractBalance).to.equal(0);

    });
  
  
  });
  
