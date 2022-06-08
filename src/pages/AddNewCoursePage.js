import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useStateContext } from '../context/Context';

import Button from '../components/Button';
import FormCreate from '../components/FormCreate';
import Data from '../apiData/data';

export default function AddNewCoursePage() {
    const history = useHistory();
    const {setActionsBar, setActionsBarChildren, user} = useStateContext();
    const [course, setCourse] = useState({
      course_name: '',
      department: '',
      title: '',
      professor: '',
      estimated_time:'',
      materials_needed:'',
      description: '',
    });

    const [errors, setErrors] = useState({
      courseError: '',
      departmentError: '',
      titleError: '',
      professorError: '',
      estimatedTimeError: '',
      materialsNeededError: '',
      descriptionError: '',
    })

    const goHome = () => {
      history.push("/");
    };

    const changeHandle = (e) => {
      let obj = e.target;
  
      if(obj.id === 'courseName'){
          setCourse((prev) => ({ ...prev, course_name: obj.value.trim() }));
      }else if(obj.id === 'department'){
          setCourse((prev) => ({ ...prev, department: obj.value.trim() }));
      }else if(obj.id === "courseTitle"){
          setCourse((prev) => ({...prev, title: obj.value.trim() }));
      }else if(obj.id === "professor"){
          setCourse((prev) => ({...prev, professor: obj.value.trim() }));
      }else if(obj.id === "durration"){
          setCourse((prev) => ({...prev, estimated_time: obj.value.trim() }));
      }else if(obj.id === "prerequisites"){
          setCourse((prev) => ({...prev, materials_needed: obj.value.trim() }));
      }else if(obj.id === "description"){
          setCourse((prev) => ({...prev, description: obj.value.trim() }));
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
      if(course.title === ''){
        setErrors((prev)=>({...prev, titleError: "Course Title cannot be empty"}))
      }else{
        setErrors((prev)=>({...prev, titleError: ""}))
      }
      if(course.professor === ''){
        setErrors((prev)=>({...prev, professorError: "Professor Name cannot be empty"}))
      }else{
        setErrors((prev)=>({...prev, professorError: ""}))
      }
      if(course.estimated_time === ''){
        setErrors((prev)=>({...prev, estimatedTimeErorr: "Course durration cannot be empty"}))
      }else{
        setErrors((prev)=>({...prev, estimatedTimeErorr: ""}))
      }
      if(course.materials_needed === ''){
        setErrors((prev)=>({...prev, materialsNeededError: "Prerequisites  cannot be empty"}))
      }else{
        setErrors((prev)=>({...prev, materialsNeededError: ""}))
      }
      if(course.description === ''){
        setErrors((prev)=>({...prev, descriptionError: "Description cannot be empty"}))
      }else{
        setErrors((prev)=>({...prev, descriptionError: ""}))
      }

    }

    const submitFunction = async () => {
      let totalErrors = Object.values(errors).filter(e=>e!=='').length
      if(totalErrors === 0){
        let data = new Data();
        await data.newCourse(course,user.token);
        goHome();
      }
    };

    const actionButtons = <>
      <div onClick={submitFunction}>
          <Button
          btnText={"Add Course"}
          btnCss={"bg-sky-800 hover:bg-sky-700"}
          />
      </div>
      <div onClick={goHome}>
        <Button btnText={'Go Back'} btnCss={'bg-emerald-600'}/>
      </div>
    </>

    useEffect(()=>{
      setActionsBar(true);
      setActionsBarChildren(actionButtons);
      errorsHandle();
    },[course])

  return (
    <div className="sm:p-6 pb-20 px-4 bg-white ">
      <div className="text-gray-900">
        <h2 className="text-center lg:text-left text-3xl font-semibold py-2">
          Create a new course
        </h2>
        <p className="text-center lg:text-left">
          Please verify the information before you submit the modifications
        </p>
      </div>
      <FormCreate hanndleChange={changeHandle} course={course} errors={errors} />
    </div>
  )
}
