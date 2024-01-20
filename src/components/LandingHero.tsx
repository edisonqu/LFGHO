import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

export default function LandingHero() {
  const { address, isConnecting, isDisconnected } = useAccount();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Send any friend <span className="text-[#cbb7f4]">$GHO</span> by just
            using your face!
          </h1>
          <p className="py-6">
          This project is a web dapp designed to link users' faces to their GHO cryptocurrency wallet addresses. It enables users to send GHO tokens to others, provided they have a picture of the recipient and that person has linked their face to their wallet address in the system. The core functionality involves facial recognition for secure and user-friendly GHO token transactions on the web.
          </p>
          <div className="flex justify-center">
            {!address && <ConnectKitButton />}
          </div>
        </div>
      </div>
    </div>
  );
}
