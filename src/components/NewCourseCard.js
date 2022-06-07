import React from 'react'

export default function NewCourseCard() {
  return (
    <div className="cursor-pointer active:scale-[0.99] w-56 h-80 md:w-72 lg:w-80 items-center justify-center overflow-hidden rounded-2xl bg-emerald-100 shadow-lg">
      <div className="h-24 bg-emerald-900"></div>
      <div className="-mt-12 flex justify-center">
        <img
          className="h-24 rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/000/443/115/original/vector-add-icon.jpg"
        />
      </div>
      <div className="my-14 text-center font-semibold text-xl md:text-3xl text-gray-800">
        Add New Course
      </div>
    </div>
  )
}
