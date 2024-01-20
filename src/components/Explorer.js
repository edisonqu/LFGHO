import Web3 from 'web3';
import ERC20_ABI from "../abis/erc20_abi.json";
import { BigNumber } from "@ethersproject/bignumber";

const getBalance = async (address) => {
    const web3 = new Web3(window.ethereum);
    const CONTRACT_ADDRESS = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60"; // the address of GHO on Sepolia
    const erc20Contract = new web3.eth.Contract(ERC20_ABI, CONTRACT_ADDRESS);

    try {
        const response = await erc20Contract.methods.balanceOf(address).call();
        const tokensDecimals = BigNumber.from(response);
        const decimals = BigNumber.from(10).pow(18); // Assuming 18 decimals for the ERC20 token
        const tokens = tokensDecimals.div(decimals);
        return tokens.toNumber(); // Convert back to a JavaScript number, if it's within a safe range
    } catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
    }
};

export default getBalance;
