// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract market {
    address public owner;
    uint256 private counter;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    struct product {
        string url;
        string hdUrl;
        uint256 id;
        string name;
        uint256 cost;
        string category;
    }

    event productCreated(
        string url,
        string hdUrl,
        uint256 id,
        string name,
        uint256 cost,
        string category
    );

    event purchasedProduct(uint256 id, address owner);

    mapping(uint256 => product) products;

    function addProdut(
        string memory url,
        string memory hdUrl,
        string memory name,
        uint256 cost,
        string memory category
    ) public {
        require(
            msg.sender == owner,
            "Only owner of smart contract can put up rentals"
        );
        product storage newProduct = products[counter];
        newProduct.url = url;
        newProduct.hdUrl = hdUrl;
        newProduct.id = counter;
        newProduct.name = name;
        newProduct.cost = cost;
        newProduct.category = category;
        emit productCreated(url, hdUrl, counter, name, cost, category);
        counter++;
    }

    function buyProduct(uint256 id) public payable {
        require(id < counter, "No such Product");
        require(
            msg.value == (products[id].cost * 1 ether),
            "Please submit the asking price in order to complete the purchase"
        );
        payable(owner).transfer(msg.value);
        emit purchasedProduct(id, msg.sender);
    }

    function getProduct(uint256 id)
        public
        view
        returns (
            string memory,
            uint256,
            string memory
        )
    {
        require(id < counter, "No such Product");
        product storage productItem = products[id];
        return (productItem.name, productItem.cost, productItem.category);
    }
}
