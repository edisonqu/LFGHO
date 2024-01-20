import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import { WagmiConfig, createClient, chain } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const client = createClient(
  getDefaultClient({
    appName: 'Face2GHO',
    //infuraId: process.env.REACT_APP_INFURA_ID,
    //alchemyId:  process.env.REACT_APP_ALCHEMY_ID,
    chains: [chain.sepolia],
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider 
      theme="rounded"
      mode="auto"

      options={{
        
       hideNoWalletCTA: true}}>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
