import React from "react";

export default function Card({ department, name, date }) {
  return (
    <div className="cursor-pointer active:scale-[0.99] items-center justify-center overflow-hidden rounded-2xl bg-emerald-100 shadow-lg w-56 h-80 md:w-72 lg:w-80">
      <div className="h-24 bg-emerald-900"></div>
      <div className="-mt-16 flex justify-center">
        <img
          className="h-24 rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/000/559/915/original/open-book-isolated-vector-illustration-in-flat-style-icon-for-learning-and-education-university-and-school.jpg"
        />
      </div>
      <div className="flex flex-col py-2 justify-between h-[50%]">
        <div className=" text-center text-lg md:text-xl">
          {department}
        </div>
        <div className=" text-center font-semibold text-xl md:text-2xl text-gray-900">
          {name}
        </div>
        <blockquote>
          <p className=" text-center text-base text-gray-500">{date}</p>
        </blockquote>
      </div>
    </div>
  );
}
