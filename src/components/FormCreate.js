import React from 'react'

const FormCreate = ({hanndleChange, course, errors}) => {
  return (
    <form onChange={hanndleChange} className="rounded-lg border-2 shadow-lg p-3 my-3 lg:my-10">
        <h3 className="text-center lg:text-left text-2xl py-2 text-green-900">
          New Course Information
        </h3>
        <div className="border-t-2 grid grid-cols-6 gap-1 lg:gap-6 my-5 pt-2">
          <div className="col-span-6 lg:col-span-3 self-center">
            <label htmlFor='courseName' className="py-1 text-xl text-gray-800 font-light">
              Course Name
            </label>
            <p className="text-gray-500 mt-1 font-light">
              This is the course name displayed on the main cards
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="text-red-500 py-1 lg:px-4 ">{errors.courseError}</p>
            <input
              type="text"
              placeholder="short course name"
              id='courseName'
              className="border border-solid border-emerald-900 py-2 px-4 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-base sm:text-xl rounded-md"
              defaultValue={course.course_name}
            />
          </div>
        </div>
        <div className="border-t-2 grid grid-cols-6 gap-1 lg:gap-6 my-5 pt-2">
          <div className="col-span-6 lg:col-span-3 self-center">
            <label htmlFor='department' className="py-1 text-xl text-gray-800 font-light">
              Department Name
            </label>
            <p className="text-gray-500 mt-1 font-light">
              This is the department name displayed on the main cards
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="text-red-500 py-1 lg:px-4 ">{errors.departmentError}</p>
            <input
              type="text"
              id='department'
              placeholder="studies department"
              className="border border-solid border-emerald-900 py-2 px-4 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-base sm:text-xl rounded-md"
              defaultValue={course.department}
            />
          </div>
        </div>
        <div className="border-t-2 grid grid-cols-6 gap-1 lg:gap-6 my-5 pt-2">
          <div className="col-span-6 lg:col-span-3 self-center">
            <label htmlFor='courseTitle' className="py-1 text-xl text-gray-800 font-light">
              Course Title
            </label>
            <p className="text-gray-500 mt-1 font-light">
              This is the long title displayed in the details section
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="text-red-500 py-1 lg:px-4 ">{errors.titleError}</p>
            <input
              type="text"
              id='courseTitle'
              placeholder="course title"
              className="border border-solid border-emerald-900 py-2 px-4 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-base sm:text-xl rounded-md"
              defaultValue={course.title}
            />
          </div>
        </div>
        <div className="border-t-2 grid grid-cols-6 gap-1 lg:gap-6 my-5 pt-2">
          <div className="col-span-6 lg:col-span-3 self-center">
            <label htmlFor='professor' className="py-1 text-xl text-gray-800 font-light">
              Professor Name
            </label>
            <p className="text-gray-500 mt-1 font-light">
              The name of the professor who created this course
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="text-red-500 py-1 lg:px-4 ">{errors.professorError}</p>
            <input
              type="text"
              id='professor'
              placeholder="professor"
              className="border border-solid border-emerald-900 py-2 px-4 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-base sm:text-xl rounded-md"
              defaultValue={course.professor}
            />
          </div>
        </div>
        <div className="border-t-2 grid grid-cols-6 gap-1 lg:gap-6 my-5 pt-2">
          <div className="col-span-6 lg:col-span-3 self-center">
            <label htmlFor='durration' className="py-1 text-xl text-gray-800 font-light">
              Course durration
            </label>
            <p className="text-gray-500 mt-1 font-light">
              The lengt of the course expressed in hours, days or months
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="text-red-500 py-1 lg:px-4 ">{errors.estimatedTimeErorr}</p>
            <input
              type="text"
              id='durration'
              placeholder="(Eg. 30 Days, 2 Months, etc.)"
              className="border border-solid border-emerald-900 py-2 px-4 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-base sm:text-xl rounded-md"
              defaultValue={course.estimated_time}
            />
          </div>
        </div>
        <div className="border-t-2 grid grid-cols-6 gap-1 lg:gap-6 my-5 pt-2">
          <div className="col-span-6 lg:col-span-3 self-center">
            <label htmlFor='prerequisites' className="py-1 text-xl text-gray-800 font-light">
              Prerequisites
            </label>
            <p className="text-gray-500 mt-1 font-light">
              Plese write the prerequisites in the same line separated by a *
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="text-red-500 py-1 lg:px-4 ">{errors.materialsNeededError}</p>
            <input
              type="text"
              id='prerequisites'
              placeholder="* Item1 * Item 2 * Item 3"
              className="border border-solid border-emerald-900 py-2 px-4 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-base sm:text-xl rounded-md"
              defaultValue={course.materials_needed}
            />
          </div>
        </div>
        <div className="border-t-2 grid grid-cols-6 gap-1 lg:gap-6 my-5 pt-2">
          <div className="col-span-6 lg:col-span-3 self-start">
            <label htmlFor='description' className="py-1 text-xl text-gray-800 font-light">
              Course Description
            </label>
            <p className="text-gray-500 mt-1 font-light">
              Please write the course description in one paragraph
            </p>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <p className="text-red-500 py-1 lg:px-4 ">{errors.descriptionError}</p>
            <textarea
              type="text"
              id='description'
              placeholder="course descirption text"
              className="border border-solid border-emerald-900 py-2 px-4 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm text-base sm:text-xl rounded-md h-44"
              defaultValue={course.description}  
            ></textarea>
          </div>
        </div>
      </form>
  )
}

export default FormCreate