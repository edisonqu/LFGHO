import { ConnectKitButton } from 'connectkit';
import Explorer from "./components/Explorer"
import Transaction from "./components/Transaction"
import ImageUpload from "./components/ImageUpload"



function App() {
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
      <Explorer address={"0xAE6379173c8394d85Be76369590013820E78122a"}/>
      <Transaction account={"0xAE6379173c8394d85Be76369590013820E78122a"} subjectAddress={"0xA523A3C9313573B0FfeEA947939d78d16E69d52b"} />
      {/* account should be the user's account address for signing purposes
          subjectAddress should be the person the user is trying to pay
      */}
      <ImageUpload />
      
    </div>
  );
}

export default App;
