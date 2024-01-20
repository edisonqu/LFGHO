import { ConnectKitButton } from "connectkit";
import Explorer from "./components/Explorer";
import ImageUpload from "./components/ImageUpload";
import { useAccount } from "wagmi";

// @ts-ignore
// import faceIO from "@faceio/fiojs";
// import handleError from "./helpers/errorHandling";
import LandingHero from "./components/LandingHero";
import Navbar from "./components/Navbar";
import TransactionCard from "./components/TransactionCard";

// initialize faceio here
// const faceio = new faceIO("fioa0b08");

function App() {
  const { address, isConnecting } = useAccount();

  const account = address;
  // const enrollNewUser = async () => {
  //   try {
  //     console.log("Starting to enroll user");

  //     const response = await faceio.enroll({
  //       locale: "auto",
  //       userConsent: false,
  //       payload: {
  //         name: account,
  //         walletAddress: account,
  //       },
  //     });

  //     console.log(response);
  //   } catch (error) {
  //     // Set error state if enrollment fails
  //     handleError(error);
  //     console.log("failed !!");
  //     faceio.restartSession();
  //   }
  // };

  // const authenticateUser = async () => {
  //   try {
  //     console.log("starting to authenticate user");

  //     const userData = await faceio.authenticate({ locale: "auto" });
  //     console.log("Success, user recognized");
  //     console.log("Linked facial Id: " + userData.facialId);
  //     console.log("Associated Payload: " + JSON.stringify(userData.payload));
  //   } catch (errCode) {
  //     // handle authentication failure
  //     console.log("failed !!!!!!!");

  //     console.log(handleError(errCode));

  //     faceio.restartSession();
  //   }
  // };

  return (
    <div className="min-h-screen max-w-full">
      <Navbar />

      {address && !isConnecting && (
        <div className="mt-20">
          
          <div className="text-4xl text-center mb-8">
            Scan the receipient's face to send them <span className="text-[#cbb7f4]">$GHO</span>
          </div>

          <TransactionCard/>
          {/* <Explorer address={address} />
          <Transaction
          account={address}
          subjectAddress={"0xA523A3C9313573B0FfeEA947939d78d16E69d52b"}
        /> */}
        </div>
      )}



      {isConnecting && (
        <div className="flex justify-center ">
        <span className="loading loading-ring loading-lg text-center text-5xl h-80 w-80"></span>
        </div>
      )}
      {!address && !isConnecting && <LandingHero />}

      {/* <div>
        <button onClick={enrollNewUser}>Enroll New User</button>
        <button onClick={authenticateUser}>Authenticate User</button>
      </div> */}
    </div>
  );
}

export default App;
