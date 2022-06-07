import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { useStateContext } from '../context/Context';

import Button from '../components/Button';

export default function AddNewCoursePage() {
    const history = useHistory();
    const {setActionsBar, setActionsBarChildren} = useStateContext();

    const actionButtons = <>
        <Button btnText={'Add Course'}/>
      <div onClick={()=>history.push('/')}>
        <Button btnText={'Go Back'} btnCss={'bg-emerald-600'}/>
      </div>
    </>

    useEffect(()=>{
      setActionsBar(true);
      setActionsBarChildren(actionButtons)
    },[])

  return (
    <div>
        <h2 className='text-xl font-semibold py-4'>Details Page</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem repudiandae unde eveniet, sequi sit ratione? Ab odit dolore asperiores fuga corrupti deleniti tempora ratione praesentium maxime, dolorem temporibus ex excepturi!</p>
    </div>
  )
}
