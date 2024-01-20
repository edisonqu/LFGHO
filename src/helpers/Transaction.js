import Web3 from 'web3';
import ERC20_ABI from "../abis/erc20_abi.json";

const sendERC20 = async (web3, account, toAddress, tokenAmount) => {
    const contractAddress = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60" // sepholia contract address for $GHO
    if (!tokenAmount || tokenAmount <= 0) {
        console.log("Invalid token amount", tokenAmount);
        return "failed";
    }

    const myContract = new web3.eth.Contract(ERC20_ABI, contractAddress);
    const amountToSend = web3.utils.toWei(tokenAmount.toString(), 'ether');

    try {
        const transaction = myContract.methods.transfer(toAddress, amountToSend);

        // Estimate gas and set gas limit algorithmically on behalf of the user
        const estimatedGas = await transaction.estimateGas({ from: account });
        const gasBuffer = estimatedGas / 5n; // Calculate the buffer as a BigInt
        const gasLimit = estimatedGas + gasBuffer; // Adding 20% buffer

        // Send the transaction
        const receipt = await transaction.send({
            from: account,
            gas: gasLimit.toString(), // Convert the BigInt gas limit to a string
        });

        console.log(receipt);
        return receipt.transactionHash; // Returning the transaction hash
    } catch (err) {
        console.error(err);
        return "failed";
    }
};


export default sendERC20;
