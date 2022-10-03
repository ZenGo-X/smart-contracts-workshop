// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

import "hardhat/console.sol";

contract MyFirstNFT is ERC721A, Ownable {
    string public BASE_URI;
    uint128 public constant MAX_SUPPLY = 10;
    uint128 public constant MAX_MINT_PER_TX = 5;
    uint256 mintPrice = 0.01 ether;

    constructor(string memory _baseUri) ERC721A("MyNFT", "MNFT") {
        BASE_URI = _baseUri;
    }

    function mint(uint8 quantity) public payable {
        require(quantity <= MAX_MINT_PER_TX, "Can't mint more than 3 tokens per transaction");
        require(totalSupply() + quantity <= MAX_SUPPLY, "Can't mint more than 10 tokens");
        require(msg.value == mintPrice * quantity, "Incorrect amount of ETH sent");
        _safeMint(msg.sender, quantity);
    }

    function _startTokenId() internal pure override returns (uint256) {
        return 1;
    }

    function setBaseURI(string memory _baseURI) public onlyOwner {
        BASE_URI = _baseURI;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return string(abi.encodePacked(BASE_URI, _toString(_tokenId)));
    }

    function withdraw() public onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }
}
