import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { address } = useAccount();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="h-20 w-20">
        <img src="Face2GHO_logo.png" alt='face2gho logo'/>
        </div>
        <a className="btn btn-ghost text-xl" href="/">Face2GHO</a>
      </div>
      <div className="flex-none mr-8">
        {address && <ConnectKitButton />}
      </div>
    </div>
  );
};

export default Navbar