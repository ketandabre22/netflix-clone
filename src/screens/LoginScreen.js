import { useState } from "react";
import React from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
// import { auth } from "../firebase";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login_screen">
      <div className="LoginScreen_Background">
        <img
          className="LoginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix__logo"
        />
        <button onClick={() => setSignIn(true)} className="LoginScreen_Button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>

      <div className="login_screen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited Films, Tv Programs and More.</h1>
            <h3>Watch anywhere, Cancel at any Time.</h3>
            <p>
              Ready to watch? Enter Your Email to Create or Restart Your
              Membership
            </p>

            <div className="LoginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_gtStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
