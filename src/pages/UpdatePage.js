import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useStateContext } from "../context/Context";

import Data from "../apiData/data";

import Button from "../components/Button";
import FormUpdate from "../components/FormUpdate";

const UpdatePage = () => {
  const history = useHistory();
  const { setActionsBar, setActionsBarChildren, user } = useStateContext();

  const [course, setCourse] = useState([]);
  const [details, setDetails] = useState([]);
  const [errors, setErrors] = useState({
    courseError: '',
    departmentError: '',
    titleError: '',
    professorError: '',
    estimatedTimeError: '',
    materialsNeededError: '',
    descriptionError: '',
  })
  const [totalErrors, setTotalErrors] = useState(null)

  const { id } = useParams();

  const goBack = () => {
    history.push(`/details/${id}`);
  };
  const goHome = () => {
    history.push("/");
  };

  const getCourse = async () => {
    const data = new Data();
    const course = await data.getOneCourse(id);
    setCourse(course);
  };

  const getDetails = async () => {
    const courseApi = new Data();
    let d = await courseApi.getDetails(id);
    setDetails(d);
  };

  useEffect(() => {
    getCourse();
    getDetails();
  }, []);

  useEffect(()=>{
    let x = Object.values(errors).filter(e=>e!=='').length
    console.log(x)
    setTotalErrors(x)
  },[errors])

  const changeHandle = (e) => {
    let obj = e.target;

    if(obj.id === 'courseName'){
        setCourse({ ...course, course_name: obj.value.trim() });
    }else if(obj.id === 'department'){
        setCourse({ ...course, department: obj.value.trim() });
    }else if(obj.id === "courseTitle"){
        setDetails({...details, title: obj.value.trim() });
    }else if(obj.id === "professor"){
        setDetails({...details, professor: obj.value.trim() });
    }else if(obj.id === "durration"){
        setDetails({...details, estimated_time: obj.value.trim() });
    }else if(obj.id === "prerequisites"){
        setDetails({...details, materials_needed: obj.value.trim() });
    }else if(obj.id === "description"){
        setDetails({...details, course_description: obj.value.trim() });
    }
  };

  const errorsHandle = ()=>{
    if(course.course_name === ''){
      setErrors((prev)=>({...prev, courseError: "Course Name cannot be empty"}))
    }else{
      setErrors((prev)=>({...prev, courseError: ""}))
    }
    if(course.department === ''){
      setErrors((prev)=>({...prev, departmentError: "Department Name cannot be empty"}))
    }else{
      setErrors((prev)=>({...prev, departmentError: ""}))
    }
    if(details.title === ''){
      setErrors((prev)=>({...prev, titleError: "Course Title cannot be empty"}))
    }else{
      setErrors((prev)=>({...prev, titleError: ""}))
    }
    if(details.professor === ''){
      setErrors((prev)=>({...prev, professorError: "Professor Name cannot be empty"}))
    }else{
      setErrors((prev)=>({...prev, professorError: ""}))
    }
    if(details.estimated_time === ''){
      setErrors((prev)=>({...prev, estimatedTimeErorr: "Course durration cannot be empty"}))
    }else{
      setErrors((prev)=>({...prev, estimatedTimeErorr: ""}))
    }
    if(details.materials_needed === ''){
      setErrors((prev)=>({...prev, materialsNeededError: "Prerequisites  cannot be empty"}))
    }else{
      setErrors((prev)=>({...prev, materialsNeededError: ""}))
    }
    if(details.course_description === ''){
      setErrors((prev)=>({...prev, descriptionError: "Description cannot be empty"}))
    }else{
      setErrors((prev)=>({...prev, descriptionError: ""}))
    }
  }

  const submitFunction = async () => { 
    console.log(totalErrors)
    
    if(totalErrors === 1230){
      const data = new Data();
      await data.updateCourseDetails(id, details, user.token);
      await data.updateCourse(id, course, user.token);
      goBack();
    }
  };

  const delCourse = async () => {
    const data = new Data();
    let answer = window.confirm('Are you sure you want to delete?')
    if(answer){
        await data.deleteCourse(id, user.token);
        goHome();
    }
    
  };

    const actionButtons = (
        <>
        <div onClick={submitFunction}>
            <Button
            btnText={"Save Updates"}
            btnCss={"bg-sky-800 hover:bg-sky-700"}
            />
        </div>
        <div onClick={delCourse}>
            <Button
            btnText={"Delete Course"}
            btnCss={"bg-red-600 hover:bg-red-500"}
            />
        </div>
        <div onClick={goBack}>
            <Button btnText={"Cancel"} />
        </div>
        </>
    );

    useEffect(() => {
        setActionsBar(true);
        setActionsBarChildren(actionButtons);
    }, [course,details]);
    

  return (
    <div className="sm:p-6 pb-20 px-4 bg-white ">
      <div className="text-gray-900">
        <h2 className="text-center lg:text-left text-3xl font-semibold py-2">
          Course Information Update
        </h2>
        <p className="text-center lg:text-left">
          Please verify the information before you submit the modifications
        </p>
      </div>
      <FormUpdate hanndleChange={changeHandle} course={course} details={details} errors={errors}/>
    </div>
  );
};

export default UpdatePage;
