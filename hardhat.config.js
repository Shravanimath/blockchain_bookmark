require("@nomicfoundation/hardhat-toolbox"); // Hardhat plugins
require("dotenv").config();                   // Load .env

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
