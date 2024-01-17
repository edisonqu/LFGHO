import { ConnectKitButton } from 'connectkit';
import Explorer from "./components/Explorer"
import Transaction from "./components/Transaction"
import ImageUpload from "./components/ImageUpload"
import Random from "./components/Random"
import { useAccount } from 'wagmi';


function App() {
  const { address, isConnecting, isDisconnected } = useAccount();
  // left isConnecting and isDisconnected for Ed incase he wants to do something with them for styling

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      
      <ConnectKitButton />
      {address && <Explorer address={address}/>}
      {address && <Transaction account={address} subjectAddress={"0xA523A3C9313573B0FfeEA947939d78d16E69d52b"} />}
      {/* account should be the user's account address for signing purposes
          subjectAddress should be the person the user is trying to pay
      */}
      <ImageUpload />
      
    </div>
  );
}

export default App;
