import React from 'react'
import { Link } from 'react-router-dom';


export default function ProjectItem({title, description, image}) {
    
  return (
    <div className='w-full h-[200px] flex flex-col gap-2'>
        <img className='w-[80%]  h-[100px] object-cover' src={image} alt=""/>
        <h3 className='text-xl font-semibold text-purple-900'>{title}</h3>
        <p className='text-[13px] text-gray-800'>{description}</p>
        <div className='flex flex-row items-center gap-2'>
            <Link className='border border-purple-900 p-2 rounded' to="/">react</Link>
            <Link className='border border-purple-900 p-2 rounded' to="/">redux</Link>
            <Link className='border border-purple-900 p-2 rounded' to="/">axios</Link>
        </div>
    </div>
  )
}
