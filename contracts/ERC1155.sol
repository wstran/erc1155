// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyMultiToken is ERC1155, Ownable {
    uint256 public constant SWORD = 1;
    uint256 public constant SHIELD = 2;

    constructor() ERC1155("ipfs://Qm.../{id}.json") Ownable(msg.sender) {
        _mint(msg.sender, SWORD, 10, "");

        _mint(msg.sender, SHIELD, 5, "");
    }

    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external onlyOwner {
        _mint(to, id, amount, data);
    }
}
