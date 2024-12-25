import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button>Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
