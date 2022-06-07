import React, { useEffect } from 'react'
import { useHistory,Link } from "react-router-dom"

import { useStateContext } from '../context/Context';
import Button from '../components/Button';

import {AiOutlineWarning} from 'react-icons/ai';

export default function PageNotFound() {

  const history = useHistory();
    const {setActionsBar, setActionsBarChildren} = useStateContext();

    const actionButtons = <>
      <div onClick={()=>history.push('/')}>
        <Button btnText={'Go Back'}/>
      </div>
    </>

    useEffect(()=>{
      setActionsBar(true);
      setActionsBarChildren(actionButtons)
    },[])

  return (
    <div className='w-100 flex flex-col items-center justify-center py-56 text-gray-700'>
      <p className='text-7xl md:text-9xl flex items-center'><AiOutlineWarning/><span className='px-2'>404</span></p>
      <p className='py-5 text-3xl text-gray-400'>Ooops! Page not found.</p>
      <div onClick={()=>history.push('/')}>
        <Button btnText={'Back to safety...'}/>
      </div>
    </div>
  )
}
