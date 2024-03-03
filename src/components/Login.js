import React, { useRef, useState } from "react";
import Header from "./Header";
import { validator } from "../utils/validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { errorMapper } from "../utils/constants";
import { BACKGROUND } from "../utils/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const fullname = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignIn = () => {
    if (fullname.current) fullname.current.value = "";
    email.current.value = "";
    password.current.value = "";
    setErrorMessage(null);
    setSignInForm(!signInForm);
  };

  const getErrorMessage = (code) => {
    const message = errorMapper.get(code);
    return message || code;
  };

  const submitUser = () => {
    const message = validator(
      email.current.value,
      password.current.value,
      !signInForm && fullname.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
        })
        .catch((error) => {
          setErrorMessage(getErrorMessage(error.code));
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
        })
        .catch((error) => {
          setErrorMessage(getErrorMessage(error.code));
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACKGROUND}
          alt="logo"
          className="w-screen"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute left-0 right-0 my-32 mx-auto bg-black p-8 bg-opacity-70 text-center"
      >
        <h1 className="text-white text-2xl m-2 p-2">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <input
            placeholder="Full Name"
            ref={fullname}
            type="text"
            className="p-4 my-4 bg-gray-700 text-white w-9/12"
          />
        )}
        <input
          placeholder="Email"
          ref={email}
          type="text"
          className="p-4 my-4 bg-gray-700 text-white w-9/12"
        />
        <input
          placeholder="Password"
          ref={password}
          type="password"
          className="p-4 my-4 bg-gray-700 text-white w-9/12"
        />
        <p className="text-red-700 font-bold ">{errorMessage}</p>
        <button
          className="p-4 my-4 w-9/12 bg-red-700 rounded-md text-white"
          onClick={submitUser}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white cursor-pointer font-bold"
          onClick={handleSignIn}
        >
          {signInForm
            ? "New to Netflix? Sign up now."
            : "Already a user? Login."}
        </p>
      </form>
    </div>
  );
};

export default Login;
