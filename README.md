# LFGHO

We used Family's ConnectKit with React.js to facilitate a user's connection to the DApp with their browser wallet as well as for its simple UX and eye-catching themes.
From there we used web3.js Node Plugin, using the user's connected wallet as the Web3 provider for the DApp to support querying addresses for information, and for sending GHO to other users.
Since GHO is an ERC-20 token, we had to find the token's ABI which is required for Web3.js plugin to call the token's methods.
We also used the Sepolia Ethereum Testnet to test my application without incurring costs.
We used AAVE's Sepolia faucet to borrow ERC-20 tokens which we used to collateralize my loan of GHO to use for testing.