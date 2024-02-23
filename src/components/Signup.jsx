import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-white w-[350px] items-center absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] p-7 flex flex-col rounded-md m-auto">
      <h1 className="text-2xl font-semibold m-3 text-center">
        Create an Account
      </h1>
      <div className="flex flex-col items-start my-2 w-full">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="px-2 py-1 w-full border-solid border-slate-500 border-2 rounded-md"
          placeholder="Name"
        />
      </div>
      <div className="flex flex-col items-start my-2 w-full">
        <label htmlFor="password">Email</label>
        <input
          type="email"
          id="email"
          className="px-2 py-1 w-full border-solid border-slate-500 border-2 rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col items-start my-2 w-full">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="px-2 py-1 w-full border-solid border-slate-500 border-2 rounded-md"
          placeholder="Password"
        />
      </div>
      <div className="py-2 w-full">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="mx-2">
          Remember Me
        </label>
      </div>
      <button className="mx-auto w-full text-white font-semibold p-2 bg-[#1e4d91] rounded-md">
        SignUp
      </button>
      <div className="text-center my-2 text-sm">
        Already have an Account?{" "}
        <Link to="/" className="text-[#1e4d91]">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
