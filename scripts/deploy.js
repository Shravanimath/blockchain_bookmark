const { ethers } = require("hardhat");

async function main() {
  const Bookmark = await ethers.getContractFactory("Bookmark");
  const bookmark = await Bookmark.deploy();
  await bookmark.waitForDeployment();
  console.log("Bookmark deployed to:", bookmark.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

