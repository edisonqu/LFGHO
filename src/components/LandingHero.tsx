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
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-center">
            {!address && <ConnectKitButton />}
          </div>
        </div>
      </div>
    </div>
  );
}
