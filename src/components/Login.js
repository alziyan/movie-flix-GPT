import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "./../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClickButton = () => {
    // Validate
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrorMessage(message);

    if (message) return null;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //Profile Update
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/52927838?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //SIgn In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="">
        <img
          className="absolute h-screen w-screen  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white px-12 py-4 md:py-8 bg-black my-32 mx-auto right-0 left-0 w-[85%] md:w-3/12  rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-[26px] md:text-3xl py-3 md:py-4 text-start">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            useRef={name}
            type="text"
            placeholder="Full Name"
            className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700"
        />
        <p className="text-red-700 font-bold ">{errorMessage}</p>
        <button
          className="p-3 md:p-4 my-3 md:my-6 bg-red-700 w-full rounded-lg"
          onClick={handleClickButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className=" cursor-pointer hover:underline text-gray-300"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? " New to Netflix? Sign up now."
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
