const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("MyFirstContract", function () {
    async function deployMyFirstContract() {
      const MyFirstContract = await ethers.getContractFactory("MyFirstContract");
      const myFirstContract = await MyFirstContract.deploy();
      await myFirstContract.deployed();
      [deployer, address1, address2] = await ethers.getSigners();
      return {myFirstContract, deployer};
    }

    it("getLastCallerAddress should return 0x000", async function () {
        const { myFirstContract, deployer} = await loadFixture(deployMyFirstContract);
        expect(await myFirstContract.getLastSetter()).to.equal("0x0000000000000000000000000000000000000000");
    });

    it("getLastCallerAddress should return deployer address, print last message", async function () {
      const { myFirstContract, deployer} = await loadFixture(deployMyFirstContract);
      await myFirstContract.set("Hello World");
      expect(await myFirstContract.getLastSetter()).to.equal(deployer.address);
      console.log(deployer.address);
      const lastMessage = await myFirstContract.message();
      console.log(lastMessage);
  });

});
