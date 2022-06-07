import React from 'react'

export default function Button({btnText,btnCss}) {
  return (
    <button className={`leading-snug uppercase font-medium rounded shadow-md hover:shadow-lg focus:shadow-lg text-sm bg-emerald-900 hover:bg-emerald-800 ${btnCss} text-white m-1 font-bold py-2 px-4 rounded`}>
        {btnText}
    </button>
  )
}
