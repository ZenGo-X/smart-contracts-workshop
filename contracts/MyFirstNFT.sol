// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

import "hardhat/console.sol";

contract MyFirstNFT is ERC721A {
    string public BASE_URI;
    uint128 public constant MAX_SUPPLY;
    uint128 public constant MAX_MINT_PER_TX;
    uint256 mintPrice = 0.01 ether;

    constructor() ERC721A("", "") {}

    function mint(uint8 quantity) public payable {
        _safeMint(msg.sender, quantity);
    }

    function _startTokenId() internal view override returns (uint256) {
        return 1;
    }

    function setBaseURI(string memory _baseURI) public onlyOwner {}

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return string(abi.encodePacked(BASE_URI, _tokenId));
    }

    function withdraw() public onlyOwner {}
}
