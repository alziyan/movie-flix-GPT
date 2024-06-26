import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "./../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Sign In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when component Unmounts
    return () => unsubscribe();
  }, []);

  const handleSearchGptClick = () => {
    //toggle
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute px-32 w-screen  py-5 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <div className="flex w-full justify-between items-center text-start">
        <img
          className="w-36 h-full md:w-44"
          src={NETFLIX_LOGO}
          alt="movieFlixLogo"
        />
        {user && (
          <div className="flex space-x-20">
            <button
              className=" bg-white text-red-700  hover:bg-gray-300 border-red-900 font-bold py-2 px-8 rounded"
              onClick={handleSearchGptClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
