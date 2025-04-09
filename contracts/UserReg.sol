//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract UserRegistry {
    struct User {
        address userAddress;
        string username;
        uint256 signupDate;
        bool isRegistered;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, string username);

    function register(string memory _username) external {
        require(!users[msg.sender].isRegistered, "User already registered");
        users[msg.sender] = User(msg.sender, _username, block.timestamp, true);
        emit UserRegistered(msg.sender, _username);
    }

    function isUserRegistered(address _user) external view returns (bool) {
        return users[_user].isRegistered;
    }
}