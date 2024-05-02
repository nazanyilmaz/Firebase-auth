import React from "react";
import { useState } from "react";
import { register } from "../firebase";
//import { useDispatch } from "react-redux";
//import { login as loginHandle } from "../store/auth";

//const dispatch = useDispatch();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    //console.log(user);
    // dispatch(loginHandle(user));
  };
  return (
    <div className="flex justify-center bg-black h-screen items-center gap-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto grid gap-y-4 py-4"
      >
        <div>
          <label className="block text-md text-indigo-600 font-medium">
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray rounded-md"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block text-md text-indigo-600 font-medium">
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="password"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray rounded-md "
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            disabled={!email || !password}
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-40"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
