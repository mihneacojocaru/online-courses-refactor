import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import Button from "../components/Button";

import { useStateContext } from "../context/Context";
import Data from "../apiData/data";

import { MdOutlineTouchApp } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import img from "../img/time_management.png";

const DetailsPage = () => {
  const history = useHistory();
  const { setActionsBar, setActionsBarChildren, user } = useStateContext();

  let { id } = useParams();
  const [course, setCourse] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [prerequisites, setPrerequisites] = useState(null);

  const getCourse = async () => {
    const data = new Data();
    const course = await data.getOneCourse(id);
    if(!course){
      history.push('/404Page');
    }else{
      setCourse(course);
    }
  };
  const getCourseDetails = async () => {
    const courseApi = new Data();
    let d = await courseApi.getDetails(id);
    setCourseDetails(d);
    let prereq
    if(d){
     prereq = d.materials_needed;
     prereq = prereq.split('*').map(e=>e.trim()).filter(e=>e!=='');
    }
    setPrerequisites(prereq);
  };

  useEffect(()=>{
    getCourse()
    getCourseDetails()
  },[])

 
  useEffect(() => {
    user
      ? setActionsBarChildren(buttonsLoggedIn)
      : setActionsBarChildren(buttonsNotLoggedIn);
  }, [user]);

  const buttonsLoggedIn = (
    <>
      <Link to={`/updateCourse/${id}`}>
          <Button btnText={"Update Course"} />
      </Link>
      <div onClick={() => history.push("/")}>
        <Button btnText={"Go Back"} btnCss={'bg-emerald-600'}/>
      </div>
    </>
  );

  const buttonsNotLoggedIn = (
    <div onClick={() => history.push("/")}>
      <Button btnText={"Go Back"} />
    </div>
  );

  useEffect(() => {
    setActionsBar(true);
  }, []);

  return (
    <div className="pb-12">
      {user ? (
        ""
      ) : (
        <p className="text-lg text-red-500 flex items-center">
          You must be logged in to update course information.
          <Link to="/signIn">
            <span className="text-sky-700 flex items-center px-2">
              Sign in.. <MdOutlineTouchApp />
            </span>
          </Link>
        </p>
      )}
      {
        courseDetails &&
        <div className="lg:mt-10 mx-auto grid lg:grid-cols-2 md:gap-10">
        <img
          src={img}
          alt="time management picture"
          className="h-[300px] sm:h-[500px] mx-auto lg:mt-12"
        />
        <div className="content mx-auto w-3/4 sm:w-10/12 py-10 -my-10 md:-my-24 lg:-my-0">
          <h2 className="text-center lg:text-left text-3xl font-semibold py-4">
            {courseDetails.title}
          </h2>
          <div className="py-5 flex flex-col sm:flex-row items-center w-100 justify-around">
            <span className="mb-2 md:mb-0 py-1 px-2 bg-yellow-500 rounded text-gray-100 font-medium tracking-wide">
              Highest rated
            </span>
            <span className="mb-2 md:mb-0 flex items-center text-xl gap-1 text-yellow-500">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <FaStarHalf />
              4,7
            </span>
            <span>256,362 Students</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <h5>
              Created by{" "}
              <span className="text-green-900 underline">{courseDetails.professor}</span>
            </h5>
            <h5>
              Duration{" "}
              <span className="text-green-900 underline">{courseDetails.estimated_time}</span>
            </h5>
          </div>
          <h2 className="text-center md:text-left text-2xl font-semibold py-4">
            Description
          </h2>
          <p className="text-justify">
            {courseDetails.description}
          </p>
          <h2 className="text-center md:text-left text-2xl font-semibold py-4">
            Prerequisites
          </h2>
          <div className="flex flex-col items-start">
            {prerequisites ?
            prerequisites.map((item,index)=>(
              <span key={index} className="flex items-center text-2xl text-yellow-600 mb-2">
                <IoMdCheckmarkCircleOutline />
                <span className="mx-2 text-lg text-gray-800">{item}</span>
              </span>
            ))
            :
            <span className="flex items-center text-2xl text-yellow-600 mb-2">
              <IoMdCheckmarkCircleOutline />
              <span className="mx-2 text-lg text-gray-800">No prerequisites necessary</span>
            </span>
            }
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default DetailsPage;
