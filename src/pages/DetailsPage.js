import React, { useEffect } from 'react'
import { useHistory,Link } from "react-router-dom"
import Button from '../components/Button';

import { useStateContext } from '../context/Context';

import {MdOutlineTouchApp} from 'react-icons/md';

const DetailsPage = () => {

    const history = useHistory();
    const {setActionsBar, setActionsBarChildren, user} = useStateContext();

    const actionButtons = <>
                            <div onClick={()=>history.push('/')}>
                              <Button btnText={'Go Back'}/>
                            </div>
                          </>

    useEffect(()=>{
      user ? 
      setActionsBarChildren(
        <>
          <div onClick={()=>history.push('/')}>
            <Button btnText={'Go Back'}/>
          </div>
          <Link to=''>
            <Button btnText={'Update Course'}/>
          </Link>
        </>
      )
      :
      setActionsBarChildren(<div onClick={()=>history.push('/')}>
      <Button btnText={'Go Back'}/>
    </div>)
    }, [user])

    useEffect(()=>{
      setActionsBar(true);
    },[])

  return (
    <div>
        {
          user ? '' : <p className='text-lg text-red-500 flex items-center'>You must be logged in to update course information. 
                        <Link to='/signIn'>
                          <span className='text-sky-700 flex items-center px-2'>Sign in.. <MdOutlineTouchApp/></span>
                        </Link>
                      </p>
        }
        <h2 className='text-3xl font-semibold py-4'>Details Page</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem repudiandae unde eveniet, sequi sit ratione? Ab odit dolore asperiores fuga corrupti deleniti tempora ratione praesentium maxime, dolorem temporibus ex excepturi!</p>
    </div>
  )
}

export default DetailsPage