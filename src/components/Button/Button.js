import React from 'react'

export default function Button({px,py,classes}) {
    return (
        <>
          <button className={`${classes} bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300	ease-in-out	font-mono px-${px} py-${py} text-white text-xs rounded-sm focus:outline-none  `} >Create Sandbox</button>  
        </>
    )

}
