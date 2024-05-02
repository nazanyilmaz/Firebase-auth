import React, { useState } from "react";
import { update, auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
    });
    dispatch(login(auth.currentUser));
  };

  return (
    <div className="flex justify-center bg-black h-screen items-center gap-5 ">
      <h3 className="text-indigo-600 text-4xl fw-bold mr-6">Update Area</h3>
      <form onSubmit={handleSubmit} className="grid gap-y-4">
        <h1 className="text-xl font-bold mb-4">Profile Update</h1>
        <div>
          <label className="block text-md font-medium text-indigo-600">
            Full Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray rounded-md"
              placeholder="type your full name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block text-md font-medium text-indigo-600">
            Photo
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray rounded-md"
              placeholder="choose a new photo"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-40"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
