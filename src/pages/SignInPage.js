import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useStateContext } from "../context/Context";
import Cookies from 'js-cookie';

import Data from '../apiData/data'


export default function SignInPage() {

  const { setActionsBar,user,setUser } = useStateContext();
  
  const history = useHistory();
  
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    setActionsBar(false);
  }, []);

  const authentificate = async ()=>{
    const d = new Data();
    
    try {
      if (email) {
        const auth = await d.authentificate({ email, password });
        if (auth != "Username or Password is invalid") {
          setEmail(auth.email);
          setUser(auth);
          Cookies.set("authUser", JSON.stringify(auth));
          returnHome();
        } else {
          setError(auth)
        }
      }else{
        setError('Username or Password is incorrect')
      }
    } catch (e) {
      console.log(e);
    }
  }

  const regExVerifyer = (email) => {
    const emailRegEx = /\S+@\S+\.\S+/;
    return emailRegEx.test(String(email).toLowerCase());
  };

  const changeHandler = (e) => {
    let obj = e.target;
    if (obj.classList.contains("username")) {
      if (regExVerifyer(obj.value)) setEmail(obj.value);
      else setEmail(false);
    } else if (obj.classList.contains("password")) {
      setPassword(obj.value);
    }
  };

  const returnHome = ()=>{
    history.push("/");
  }
  return (
    <div className="flex justify-center">
      <div className="md:w-7/12 lg:w-5/12 lg:ml-20 md:py-10">
          <h1 className="pt-10 md:pt-20 text-gray-800 text-3xl font-bold">Sign In</h1>
          <p className="pt-3 pb-10 md:pb-16 text-red-600">{error}</p>
          <form onChange={changeHandler}>
            <div className="mb-6">
              <input
                type="text"
                className="username form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                placeholder="Username"
              />
            </div>
  
            <div className="mb-6">
              <input
                type="password"
                className="password form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                placeholder="Password"
              />
            </div>

            <button
              onClick={authentificate}
              type="button"
              className="inline-block mb-3 px-7 py-3 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Sign in
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
