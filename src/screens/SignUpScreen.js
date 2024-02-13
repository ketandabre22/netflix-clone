import React, { useRef } from "react";
import "./SignUpScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      alert(`${errorMessage}`);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const authUser = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      console.log(authUser);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorCode}: ${errorMessage}`);
    }
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
        <h4>
          <span className="signupScreen_gray">Already have an account? </span>
          <span className="signupScreen_link" onClick={signIn}>
            Sign In Here.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
