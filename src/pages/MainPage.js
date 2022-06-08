import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import { useStateContext } from "../context/Context";
import Data from '../apiData/data'

import Card from "../components/Card";
import NewCourseCard from "../components/NewCourseCard";
import Spinner from "../components/Spinner";

import { TbInfoSquare } from "react-icons/tb";

export default function MainPage() {
  const { setActionsBar, user } = useStateContext();
  useEffect(() => {
    setActionsBar(false);
  }, []);

  const [loaded, setLoaded] = useState(true);
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const courseApi = new Data();
    let d = await courseApi.getCourses();
    setCourses(d);
  };
  
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold px-7 py-5 text-gray-800">
        Available Courses
      </h2>
      {user ? (
        ""
      ) : (
        <div className="px-6 flex flex-wrap items-center text-lg text-red-500">
          <span className="text-3xl pr-2"><TbInfoSquare /></span>
          <p className="px-1">Please sign in order to start editing the courses.</p>
          <p className="px-1">Username: <small className="text-gray-600 px-1">jim@email.com</small></p>
          <p className="px-1">Password: <small className="text-gray-600 px-1">pass1234</small></p>
        </div>
      )}

      {courses.length !== 0 ? (
        <div className="cards-container py-10 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 ">
          {
            courses.map((el, index)=>(
              <Link key={el.id} to={`/details/${el.id}`}>
                <Card
                  department={el.department}
                  name={el.course_name}
                  date={`${el.createdAt.split('-')[0]}/${el.createdAt.split('-')[1]}`}
                />
            </Link>
            ))
          }
          {
            user && 
            <Link to="/newCourse">
            <NewCourseCard />
            </Link>
          }
          
        </div>
      ) : (
        <div>
          <div className="py-10 px-7 pb-10 flex items-center">
            <Spinner />
            <p>No Courses to show at the moment</p>
          </div>
          {
            user && 
            <Link to="/newCourse">
            <NewCourseCard />
            </Link>
          }
        </div>
      )}
    </div>
  );
}
