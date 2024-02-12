// import React, { useRef } from "react";
// import "./SignUpScreen.css";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const SignUpScreen = () => {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const register = (e) => {
//     e.preventDefault();

//     const auth = getAuth(); // Initialize auth
//     createUserWithEmailAndPassword(
//       auth,
//       emailRef.current.value,
//       passwordRef.current.value
//     )
//       .then((authUser) => {
//         console.log(authUser);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   const signIn = (e) => {
//     e.preventDefault();
//     // Add your sign-in logic if needed
//   };

//   return (
//     <div className="signupScreen">
//       <form>
//         <h1>Sign Up</h1>
//         <input ref={emailRef} placeholder="Email" type="email" />
//         <input ref={passwordRef} placeholder="Password" type="password" />
//         <button type="submit" onClick={register}>
//           Sign Up
//         </button>
//         <h4>
//           <span className="signupScreen_gray">I have account. </span>
//           <span className="signupScreen_link" onClick={signIn}>
//             Sign In Here.
//           </span>
//         </h4>
//       </form>
//     </div>
//   );
// };

// export default SignUpScreen;



import React, { useRef } from "react";
import "./SignUpScreen.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    const auth = getAuth(); // Initialize auth
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic if needed
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
          <span className="signupScreen_gray">I have account. </span>
          <span className="signupScreen_link" onClick={signIn}>
            Sign In Here.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
