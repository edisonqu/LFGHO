import {React, useState} from 'react'
import Web3 from 'web3'
import ERC20_ABI from "../abis/erc20_abi.json"
import { BigNumber} from "@ethersproject/bignumber";

const Explorer = (props) => {
    const web3 = new Web3(window.ethereum);
    console.log(window.ethereum)
    const CONTRACT_ADDRESS = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60" // the address of GHO on Sepolia
    const [balance, setBalance] = useState(0);
    const getBalance = async () => {
        const erc20Contract = new web3.eth.Contract(ERC20_ABI, CONTRACT_ADDRESS)
        try {
            const response = await erc20Contract.methods.balanceOf(props.address).call();
            const tokensDecimals = BigNumber.from(response);
            const decimals = 18; // Change depending on the ERC20 token
            const divisor = Math.pow(10, decimals); 
            const tokens = tokensDecimals / divisor;
            setBalance(tokens);
            return tokens;
        } catch (error) {
            console.error('Error fetching balance:', error);
            throw error;
        }
    }
    getBalance();

  return (
    <div>The balance of {props.address} is {balance} GHO</div>
  )
}

export default Explorer