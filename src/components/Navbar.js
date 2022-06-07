import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateContext } from "../context/Context";
import Cookies from "js-cookie";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SiCoursera } from "react-icons/si";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { user, setUser } = useStateContext();

  useEffect(() => {
    
    
  }, []);

  const navLinks = [
    {
      name: "Sign In",
      address: "/signIn",
    },
    {
      name: "Sign Up",
      address: "/signUp",
    },
  ];

  const signOutFunction = (e) => {
    e.preventDefault();
    setOpen(false)
    if (user) {
      Cookies.set("authUser", JSON.stringify(null));
      setUser(null);
    }
  };

  return (
    <div className="shaddow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-teal-800 text-white py-3 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins">
          <div
            onClick={() => history.push("/")}
            className="flex justify-center items-center"
          >
            <span className="px-1">Online</span>
            <SiCoursera />
            <span className="px-1">&trade;</span>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-4 cursor-pointer text-3xl md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`bg-teal-800 md:flex md:items-center md:pb-0 pb-5 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in opacity-0 md:opacity-100 ${
            open ? "top-14 opacity-100" : "top-[-300px]"
          }`}
        >
          {user ? (
            <>
              <li className="md:ml-8 md:my-0 my-5 text-xl top">
                {`Hello, ${user.username.split(' ')[0]}!`}
              </li>
              <li className="md:ml-8 md:my-0 my-5 text-xl top cursor-pointer" onClick={signOutFunction}>
                Sign Out
              </li>
            </>
          ) : (
            navLinks.map((item, index) => (
              <li
                key={index}
                className="md:ml-8 md:my-0 my-5 text-xl top cursor-pointer"
              >
                <Link onClick={() => setOpen(false)} to={item.address}>
                  <div className="text-white hover:text-gray-200">
                    {item.name}
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
