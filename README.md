# Never enter a wallet address again!

## Welcome to Face2GHO
### DApp that allows you to send GHO to anybody with a pic of their face!

Face2GHO is a web dapp designed to link users' faces to their GHO cryptocurrency wallet addresses. It enables users to send GHO tokens to others, provided they have a picture of the recipient and that person has linked their face to their wallet address in the system. The core functionality involves facial recognition for secure and user-friendly GHO token transactions on the web.

## Techs Used

We used Family's ConnectKit with React.js to facilitate a user's connection to the DApp with their browser wallet as well as for its simple UX and eye-catching themes. We also used its peer dependency WAGMI to dynamically access the connect wallet's address to call methods that interact with the blockchain.

From there we used web3.js Node Plugin, using the user's connected wallet as the Web3 provider for the DApp to support querying addresses for their balance of GHO which is more difficult than querying a network's native token, and for sending GHO to other users. 

Since GHO is an ERC-20 token, we had to find the token's ABI which is required for Web3.js plugin to call the token's methods.

We also used the Sepolia Ethereum Testnet to test my application without incurring costs.

We used AAVE's Sepolia faucet to borrow ERC-20 tokens which we used to collateralize my loan of GHO to use for testing.

To implement AI-based facial biometric encoding and recognition, we integrated FaceIO's fio.js library. fio.js provides robust facial recognition capabilities, allowing us to securely match users' faces to their registered images. 
