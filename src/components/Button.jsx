import React from 'react'

export const Button = ({title,id,icon,containerClass,rightIcon}) => {
  return (
 <button id={id} className={`group relative overflow-hidden text-black cursor-pointer z-10 rounded-full px-7 py-3 w-fit bg-violet-50 ${containerClass}`} >{icon}
 <span className='text-xs font-general uppercase relative overflow-hidden incline-flex  '><div className='text-center justify-center items-center'>{title}</div></span>
 <rightIcon/>
 </button>
  )
}
