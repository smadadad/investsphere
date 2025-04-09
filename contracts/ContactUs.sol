//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ContactUs {
    UserRegistry public userRegistry;

    struct Message {
        address sender;
        string content;
        uint256 timestamp;
    }

    Message[] public messages;

    event MessageSent(address indexed sender, string content);

    constructor(address _userRegistry) {
        userRegistry = UserRegistry(_userRegistry);
    }

    function sendMessage(string memory _content) external {
        require(userRegistry.isUserRegistered(msg.sender), "User not registered");
        messages.push(Message(msg.sender, _content, block.timestamp));
        emit MessageSent(msg.sender, _content);
    }

    function getMessages() external view returns (Message[] memory) {
        return messages;
    }
}