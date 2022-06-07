import React, {useContext} from 'react'

import { useStateContext } from '../context/Context'

export default function ActionsBar() {

const {actionsBarChildren} = useStateContext();

  return (
    <div className='flex justify-start flex-wrap mt-14 px-8 py-2 bg-emerald-100'>
        {actionsBarChildren}
    </div>
  )
}
