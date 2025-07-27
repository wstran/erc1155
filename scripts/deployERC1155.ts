import { ethers } from "hardhat"; // Import ethers.js from the Hardhat framework

async function main() {
    // Retrieve the current network information from the ethers provider
    const network = await ethers.provider.getNetwork();

    // Log the name of the network where the contract is being deployed (e.g., "sepolia" or "mainnet")
    console.log(`Deploying to network: ${network.name}`);

    console.log("Deploying ERC1155 contract...");

    // Get the contract factory for the ERC1155 token
    const MultiToken = await ethers.getContractFactory("MyMultiToken");

    // Deploy the contract with the specified name and symbol
    const contract = await MultiToken.deploy();

    console.log('------- Deployment successful -------');

    console.log(`Deployer address: ${contract.deployTransaction.from}`);

    console.log(`Token deployed to: ${contract.deployTransaction.hash}`);

    console.log(`Token name: ${await contract.name()}`);

    console.log(`Token symbol: ${await contract.symbol()}`);

    console.log(`Total supply: ${await contract.totalSupply()}`);

    console.log(`Deployed contract address: ${contract.address}`);
}

// Main entry point for the deployment script
main().catch((error) => {
    // Handle any errors that occur during deployment
    console.error("Error in deployment:", error);
    process.exitCode = 1; // Set the process exit code to indicate failure
});
