import { useAccount } from "wagmi";

// import handleError from "../helpers/errorHandling";

// @ts-ignore
import faceIO from "@faceio/fiojs";
import { useState } from "react";

const faceio = new faceIO("fioa0b08");

const TransactionCard = () => {
  const { address } = useAccount();
  const [receipient, setRecipient] = useState<string | undefined>(undefined);
  const [faceWallet, setFaceWallet] = useState<string | undefined>(undefined);
  const [faceInfo, setFaceInfo] = useState<string | undefined>(undefined);

  // getting lazy now, bad coding practice for these two states
  const [faceAge, setFaceAge] = useState<string | undefined>(undefined);
  const [faceGender, setFaceGender] = useState<string | undefined>(undefined);


  const enrollNewUser = async () => {
    try {
      (document.getElementById("my_modal_4") as HTMLDialogElement).close();
      console.log("Starting to enroll user");

      const response = await faceio.enroll({
        locale: "auto",
        userConsent: false,
        payload: {
          walletAddress: receipient,
        },
      });
      console.log(response);

      setFaceInfo(response.details as string);
      setFaceAge(response.details.age);
      setFaceGender(response.details.gender);
      setFaceWallet(receipient);

      (document.getElementById("my_modal_4") as HTMLDialogElement).showModal();
    } catch (error) {
      // Set error state if enrollment fails
      //   handleError(error);
      console.log("failed !!");
      faceio.restartSession();
    }
  };

  const authenticateUser = async () => {
    try {
      console.log("starting to authenticate user");

      const userData = await faceio.authenticate({ locale: "auto" });
      console.log("Success, user recognized");
      console.log(userData);

      console.log("Linked facial Id: " + userData.facialId);
      console.log("Associated Payload: " + JSON.stringify(userData.payload));
    } catch (errCode) {
      //   console.log(handleError(errCode));

      faceio.restartSession();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center outline m-auto rounded-3xl gap-4">
      <div className="flex flex-row w-full justify-center mt-5">
        <div className="flex justify-center items-center text-2xl mr-4">
          Sender:{" "}
        </div>
        <input
          type="text"
          placeholder={address}
          className="input input-bordered w-full max-w-md"
          disabled
        />
      </div>

      <div className="flex flex-row w-full justify-center items-center mt-5">
        <div className="flex justify-center items-center text-2xl mr-4">
          Recipient:{" "}
        </div>

        {!faceWallet && (
          <div className="flex flex-row gap-8">
            <button
              className="btn btn-active btn-ghost"
              onClick={() =>
                (
                  document.getElementById("my_modal_4") as HTMLDialogElement
                ).showModal()
              }
            >
              Register face
            </button>

            <button className="btn btn-active btn-ghost">Scan face</button>
          </div>
        )}
        {faceWallet && (
          <div className="w-full flex flex-row justify-center">
            {" "}
            <input
              type="text"
              placeholder={faceWallet}
              className="input input-bordered w-full max-w-md"
              disabled
            />
          </div>
        )}

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">
              Register Face in order to scan
            </h3>
            <p className="py-4 text-lg">
              In order for your friends to send you $GHO, you must register your
              face and link your wallet.{" "}
            </p>
            <p className="py-2 text-sm text-gray-500">
              If you already have registered your face and wallet, please exit
              and press the scan button.{" "}
            </p>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder={"Your wallet address"}
                id="walletAddress"
                className="input input-bordered w-full max-w-md"
                onChange={(e) => {
                  setRecipient(e.target.value);
                }}
              />

              <button
                className="btn btn-active btn-neutral"
                disabled={!receipient || !!faceInfo}
                onClick={enrollNewUser}
              >
                {faceInfo ? "Already registered" : `Register your face`}
              </button>
 
            </div>
            {faceAge && faceGender && (
                <div>
                  {`Faceio has identified you as a ${faceAge} ${faceGender}.`}
                </div>
              )}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* <input
          type="text"
          placeholder={address}
          className="input input-bordered w-full max-w-md"
          disabled
        /> */}
      </div>

      <div className="h-80">hello</div>
    </div>
  );
};

export default TransactionCard;
