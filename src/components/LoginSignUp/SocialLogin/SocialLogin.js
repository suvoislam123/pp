import React from "react";
import "../Form.css";
import facebookicon from "../../../images/icons/facebookicon.png";
import googleicon from "../../../images/icons/gogleicon.png";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithFacebook, fbuser, fbloading, fberror] =
    useSignInWithFacebook(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (fberror) {
  }
  if (fbloading) {
    return <p>Loading...</p>;
  }
  if (fbuser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="mt-2 social-login-container">
      <div className="d-flex align-items-center">
        <div className="line"></div>
        <div className="p-2">Or</div>
        <div className="line"></div>
      </div>
      <div
        onClick={() => signInWithFacebook()}
        className="facebook d-flex align-items-center justify-content-center mb-4"
      >
        <div>
          <img src={facebookicon} alt="" />
        </div>
        <div>
          <p className="mt-2 ms-3 text-white">Login with facebook</p>
        </div>
      </div>
      <div
        onClick={() => signInWithGoogle()}
        className="github d-flex align-items-center justify-content-center mb-4"
      >
        <div>
          <img src={googleicon} alt="" />
        </div>
        <div>
          <p className="mt-2 ms-3 text-white">Login with Google</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
