import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ActionsBar from './ActionsBar'

import { useStateContext } from '../context/Context';

export default function Layout({actionBarChildren, children}) {

  const {actionsBar} = useStateContext();

  return (
    <div>
        <Navbar/>
        {actionsBar ? <ActionsBar/> : <div className='mt-14'></div>}
        <div className='w-full container mx-auto py-5 overflowY-scrol min-h-[70vh]'>
            {children}
        </div>
        <Footer/>
    </div> 
  )
}
