// @ts-ignore
import faceIO from "@faceio/fiojs";


export default function handleError(errCode: any) {
    // Log all possible error codes during user interaction..
    // Refer to: https://faceio.net/integration-guide#error-codes
    // for a detailed overview when these errors are triggered.
const faceio = new faceIO("fioa0b08");
    
    console.log(errCode);
  
    const fioErrs = faceio.fetchAllErrorCodes();
    switch (errCode) {
      case fioErrs.PERMISSION_REFUSED:
        console.log("Access to the Camera stream was denied by the end user");
        break;
      case fioErrs.NO_FACES_DETECTED:
        console.log(
          "No faces were detected during the enroll or authentication process"
        );
        break;
      case fioErrs.UNRECOGNIZED_FACE:
        console.log("Unrecognized face on this application's Facial Index");
        break;
      case fioErrs.MANY_FACES:
        console.log("Two or more faces were detected during the scan process");
        break;
      case fioErrs.FACE_DUPLICATION:
        console.log(
          "User enrolled previously (facial features already recorded). Cannot enroll again!"
        );
        break;
      case fioErrs.MINORS_NOT_ALLOWED:
        console.log("Minors are not allowed to enroll on this application!");
        break;
      case fioErrs.PAD_ATTACK:
        console.log(
          "Presentation (Spoof) Attack (PAD) detected during the scan process"
        );
        break;
      case fioErrs.FACE_MISMATCH:
        console.log(
          "Calculated Facial Vectors of the user being enrolled do not matches"
        );
        break;
      case fioErrs.WRONG_PIN_CODE:
        console.log("Wrong PIN code supplied by the user being authenticated");
        break;
    }
  }