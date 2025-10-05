# Blockchain Bookmark DApp

A decentralized application (DApp) that allows users to securely save, manage, and share bookmarks on the Ethereum blockchain. The app leverages smart contracts for immutable and trustless storage.

## Features

- **Add Bookmarks** – Save your favorite websites with a title and URL.
- **View Bookmarks** – See all bookmarks stored on the blockchain.
- **Secure Storage** – All bookmarks are stored on the Ethereum blockchain.
- **Wallet Integration** – Connect your MetaMask wallet to interact with the DApp.

## Tech Stack

- **Frontend**: React.js  
- **Blockchain**: Ethereum (Sepolia/Testnet)  
- **Smart Contracts**: Solidity  
- **Web3 Library**: Ethers.js  
- **Deployment**: Hardhat / Alchemy  

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/blockchain-bookmark.git
   cd blockchain-bookmark

2. **Install dependencies**
   ```bash
   pm install

3. *Configure environment variables**  
Create a `.env` file with your Alchemy URL and wallet private key:

ALCHEMY_SEPOLIA_URL=YOUR_ALCHEMY_API_URL
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY


4. **Run the frontend**  

```bash
npm run dev

## Usage

- Open the DApp in your browser.
- Connect your MetaMask wallet.
- Add and view bookmarks.
- All interactions are recorded on the blockchain.
