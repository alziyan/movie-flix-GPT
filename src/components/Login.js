import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="">
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>

      <form className="absolute text-white px-12 py-4 md:py-8 bg-black my-32 mx-auto right-0 left-0 w-[85%] md:w-3/12  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-[26px] md:text-3xl py-3 md:py-4 text-start">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700"
        />
        <button className="p-3 md:p-4 my-3 md:my-6 bg-red-700 w-full rounded-lg">
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
