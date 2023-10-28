import { ethers } from "ethers";

// Set up the provider
if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
} else {
    console.error('No Ethereum provider found. Install MetaMask or another Ethereum wallet.');
}

// Request permission to access accounts (if using MetaMask)
await provider.send("eth_requestAccounts", []);

// Set up the contract instance
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractAbi = "YOUR_CONTRACT_ABI";
const contract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());

export { provider, contract };
