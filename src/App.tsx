
import { useAccount } from "wagmi";
import LandingHero from "./components/LandingHero";
import Navbar from "./components/Navbar";
import TransactionCard from "./components/TransactionCard";

function App() {
  const { address, isConnecting } = useAccount();

  return (
    <div className="max-h-screen max-w-full">
      <Navbar />

      {address && !isConnecting && (
        <div className="mt-8">
          <div className="text-4xl text-center mb-8 font-bold">
            Scan the receipient's face to send them{" "}
            <span className="text-[#cbb7f4]">$GHO</span>
          </div>

          <TransactionCard />
        </div>
      )}

      {isConnecting && (
        <div className="flex justify-center ">
          <span className="loading loading-ring loading-lg text-center text-5xl h-80 w-80"></span>
        </div>
      )}
      {!address && !isConnecting && <LandingHero />}
    </div>
  );
}

export default App;
