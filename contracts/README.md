# Blockchain Bookmark DApp

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Ethereum](https://img.shields.io/badge/Network-Sepolia-orange)](https://sepolia.etherscan.io/)

A **decentralized bookmark manager** built on **Ethereum**, allowing users to securely save, manage, and retrieve website bookmarks using **smart contracts**. Leveraging **Solidity**, **Ethers.js**, and **React**, this DApp ensures immutability, transparency, and full user control over data.

---

## 🚀 Features
- Add, view, and delete bookmarks directly on-chain  
- Connect with **MetaMask** for wallet integration  
- Fully decentralized, no central server  
- Real-time retrieval of bookmarks  
- Secure and immutable storage  

---

## 🛠 Tech Stack
- **Frontend:** React, Vite, CSS  
- **Smart Contracts:** Solidity  
- **Blockchain Interaction:** Ethers.js  
- **Wallet Integration:** MetaMask  
- **Testing:** Hardhat, Mocha, Chai  
- **Deployment:** Ethereum Sepolia Testnet  

---

## 📁 Project Structure

blockchain-bookmark/
├─ contracts/ # Solidity smart contracts
├─ frontend/ # React frontend
├─ scripts/ # Deployment scripts
├─ test/ # Smart contract tests
├─ hardhat.config.js
├─ package.json
└─ README.md


---

## ⚡ Installation & Usage
1. Clone the repo:
```bash
git clone https://github.com/Shravanimath/blockchain_bookmark.git
cd blockchain_bookmark
2. Install dependencies:

npm install


Start frontend:

cd frontend
npm run dev

Connect MetaMask to Sepolia Testnet and interact with the DApp.

🔧 Deployment

Compile and deploy contracts:

npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia


Update frontend with deployed contract address.

🧪 Testing
npx hardhat test

👨‍💻 Author

Shravani Math – GitHub

📄 License

MIT License


This is **all-in-one, ready-to-use**, and GitHub-ready.  

If you want, I can also make a **slightly shorter, “minimalist techie” version with badges and repo stats** so it looks extra sleek on GitHub. Do you want me to do that?
