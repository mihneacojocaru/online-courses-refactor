import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../components/Button";

import { useStateContext } from "../context/Context";
import Data from "../apiData/data";

export default function SignUpPage() {

const { setActionsBar } = useStateContext();
const history = useHistory();
const [userData, setUserData] = useState({});
const [error, setError] = useState('');

const returnHome = () => {
  history.push("/");
};

  useEffect(() => {
    setActionsBar(false);
  }, []);

  useEffect(()=>{
    setError('');
  },[userData])

  

  const regExNameVerifyer = (obj) => {
    const nameRegEx = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return nameRegEx.test(String(obj).trim());
  };
  const regExEmailVerifyer = (email) => {
    const emailRegEx = /\S+@\S+\.\S+/;
    return emailRegEx.test(String(email).toLowerCase());
  };

  const onChange = (e) => {
    let obj = e.target;
    if (obj.id === 'fullName') {
      if (regExNameVerifyer(obj.value)) {
        setUserData((prev) => ({
          ...prev,
          username: obj.value,
        }));
      }
    } else if (obj.id === 'email') {
      if (regExEmailVerifyer(obj.value)) {
        setUserData((prev) => ({
          ...prev,
          email: obj.value,
        }));
      }
    } else if (obj.id === 'password') {
      setUserData((prev) => ({
        ...prev,
        password: obj.value,
        confirmedPassword: obj.value,
      }));
    }
  };

  const onSignUp = async () => {
    const d = new Data();

    try {
      if (userData.username && userData.email && userData.password) {
        const signUp = await d.signUp(userData);
        if (signUp) returnHome();
      } else {
        setError('Please verify your info and try again.')
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center">
    <div className="md:w-7/12 lg:w-5/12 lg:ml-20 md:py-10">
        <h1 className="pt-10 md:pt-20 text-gray-800 text-3xl font-bold">Sign Up</h1>
        <p className="pt-3 pb-10 md:pb-16 text-red-600">{error}</p>
        <form onChange={onChange}>
          <div className="mb-6">
            <input
              id="fullName"
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
              placeholder="Full Name - ex: John Mayer"
            />
          </div>

          <div className="mb-6">
            <input
              id="email"
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
              placeholder="Email - ex: john@jm.com"
            />
          </div>

          <div className="mb-6">
            <input
              id="password"
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <button
          onClick={onSignUp}
            type="button"
            className="inline-block mb-3 px-7 py-3 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          >
            Sign Up
          </button>
          <button
            onClick={returnHome}
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
