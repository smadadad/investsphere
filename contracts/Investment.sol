//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Investment {
    UserRegistry public userRegistry;

    enum InvestmentType { MoneyMarket, Equity, Bonds }

    struct Transaction {
        address user;
        InvestmentType investmentType;
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => uint256) public totalInvested;
    Transaction[] public transactions;

    event Subscribed(address indexed user, InvestmentType investmentType, uint256 amount);

    constructor(address _userRegistry) {
        userRegistry = UserRegistry(_userRegistry);
    }

    function subscribe(InvestmentType _type) external payable {
        require(userRegistry.isUserRegistered(msg.sender), "User not registered");
        require(msg.value > 0, "Must send ETH to subscribe");

        totalInvested[msg.sender] += msg.value;
        transactions.push(Transaction(msg.sender, _type, msg.value, block.timestamp));
        emit Subscribed(msg.sender, _type, msg.value);
    }

    function getTransactionHistory() external view returns (Transaction[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < transactions.length; i++) {
            if (transactions[i].user == msg.sender) count++;
        }

        Transaction[] memory userTxs = new Transaction[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < transactions.length; i++) {
            if (transactions[i].user == msg.sender) {
                userTxs[index] = transactions[i];
                index++;
            }
        }
        return userTxs;
    }

    function getTotalInvested(address _user) external view returns (uint256) {
        return totalInvested[_user];
    }
}