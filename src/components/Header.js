import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { ICON, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { updateShowGptSlice } from "../utils/gptSlice";
import useAuthStateChange from "../hooks/useAuthStateChange";
import { changeDetails, changeLang } from "../utils/configSlice";

const Header = ({ error = false }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showBrowse = useSelector((store) => store.config.details);
  useAuthStateChange();
  const handleGptAction = () => {
    dispatch(updateShowGptSlice());
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {});
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const handleBrowse = () => {
    dispatch(changeDetails(false));
    navigate('/browse');
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 md:flex md:justify-between">
      <img className="w-52" src={LOGO} alt="logo" />

      {user && (
        <div className="flex">
          {!error && !showBrowse && showGptSearch && (
            <select
              className="m-4 bg-gray-700 rounded-lg text-white px-10 py-1"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {!error && !showBrowse && (
            <button
              onClick={handleGptAction}
              className="font-bold pr-4 p-2 px-6 m-4 rounded-md bg-purple-700 text-white"
            >
              {!showGptSearch ? "GPT Search" : "Home page"}
            </button>
          )}
          {(error || showBrowse)  && (

            <button
              onClick={handleBrowse}
              className="font-bold pr-4 p-2 px-6 m-4 rounded-md bg-purple-700 text-white"
            >
              Browse
            </button>

          )}
          <div onClick={signOutUser} className="flex cursor-pointer">
            <img
              className="w-20 p-4"
              src={ICON}
              alt="signout"
              title={user.email}
            />
            <button className="font-bold pr-4 text-white">SignOut</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
