import {React, useRef, useState} from 'react';
import ERC20_ABI from "../abis/erc20_abi.json";
import Web3 from 'web3';

const Transaction = (props) => {
    const web3 = new Web3(window.ethereum);
    const CONTRACT_ADDRESS = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60";
    const numTokensRef = useRef(null);
    const subjectAddressRef = useRef(null);


    const sendERC20 = async (toAddress) => {
        const myContract = new web3.eth.Contract(ERC20_ABI, CONTRACT_ADDRESS);
        const tokenAmount = parseFloat(numTokensRef.current.value);

        if (!tokenAmount || tokenAmount <= 0) {
            console.log("bno good", tokenAmount)
            return;

        }
      
        const amountToSend = web3.utils.toWei(tokenAmount.toString(), 'ether');

        try {
            const transaction = myContract.methods.transfer(toAddress, amountToSend);

            // Estimate gas and set gas limit algorithmically on behalf of the user
            const estimatedGas = await transaction.estimateGas({ from: props.account });
            const gasLimit = estimatedGas + (estimatedGas / 5n); // Adding 20% buffer

            // Go ahead and send the transaction
            const receipt = await transaction.send({
                from: props.account,
                gas: gasLimit,
            });

            console.log(receipt);
            return receipt;
        } catch (err) {
            console.error(err);
            return err;
        }
    };

    return (
        <div>Transaction <br />
            <label>Enter how much you want to send!</label>
            <input ref={numTokensRef} type="number"></input>
            <label>Can't find someone? Enter their address</label>
            <input ref={subjectAddressRef} type="string"></input>
            <button onClick={(e) => { 
                console.log(subjectAddressRef.current.value)
                if(!subjectAddressRef.current || !subjectAddressRef.current.value || subjectAddressRef.current.value.trim() == "") {
                    console.log("no")
                sendERC20(props.subjectAddress)
                } else {
                    console.log("yes")

                sendERC20(subjectAddressRef.current.value)
                }
                }}>Send</button>
            
            

        </div>
    )
}



export default Transaction;
