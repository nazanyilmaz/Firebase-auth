import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, emailVerification } from "../firebase";
import { logout as logoutHandle } from "../firebase";
import UpdateProfile from "../component/UpdateProfile";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };
  const handleVerification = async () => {
    await emailVerification();
  };

  if (user) {
    return (
      <div className="flex justify-center bg-black h-screen items-center gap-5 p-8">
        <div>
          <h1 className="flex gap-x-4 items-center justify-center mb-4 text-white">
            {user.photoURL && (
              <img src={user.photoURL} className="w-10 h-10 rounded-full" />
            )}
            You are logged in ({user.email})
          </h1>
          <button
            onClick={handleLogout}
            className="h-8 rounded px-4 text-sm text-white bg-indigo-700 my-5 mx-5"
          >
            Log Out
          </button>
          {!user.emailVerified && (
            <button
              onClick={handleVerification}
              className="h-8 rounded px-4 text-sm text-white bg-indigo-700"
            >
              Confrim Email
            </button>
          )}

          <UpdateProfile />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center bg-black h-screen items-center gap-5">
      <h1 className="text-indigo-600 text-4xl fw-bold">
        Welcome to Firebase Project
      </h1>
      <Link
        to="/register"
        className="w-40 h-10 inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-40 justify-center "
      >
        Sing Up
      </Link>
      <Link
        to="/login"
        className="w-40 h-10 inline-flex items-center px-4 py-2 border border-transparent text-md font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-40 justify-center "
      >
        Sing In
      </Link>
    </div>
  );
};

export default Home;
