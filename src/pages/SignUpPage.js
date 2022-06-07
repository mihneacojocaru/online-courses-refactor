import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../components/Button";

import { useStateContext } from "../context/Context";

export default function SignUpPage() {

const history = useHistory();
  const { setActionsBar } = useStateContext();


  useEffect(() => {
    setActionsBar(false);
  }, []);

  return (
    <div className="flex justify-center">
    <div className="md:w-7/12 lg:w-5/12 lg:ml-20 md:py-10">
        <h1 className="pt-10 md:pt-20 text-gray-800 text-3xl font-bold">Sign Up</h1>
        <p className="pt-3 pb-10 md:pb-16 text-red-600">Username or Password are incorrect</p>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            className="inline-block mb-3 px-7 py-3 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          >
            Sign Up
          </button>
          <button
            onClick={() => history.push("/")}
            type="button"
            className="inline-block mb-3 px-7 py-3 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          >
              Cancel
          </button>          
        </form>
      </div>
  </div>
  );
}
