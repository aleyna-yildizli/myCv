import React from 'react'
import { Link } from 'react-router-dom';


export default function ProjectItem({name, title, description, image}) {
    
  return (
      <div className='my-10 border border-solid border-1 border-[#3730A3]'>
        <img className=' w-[300px] h-[180px] object-cover ' src={image} alt=""/>
        <h3 className='text-lg font-medium leading-7 text-[#4338CA] my-5'>{title}</h3>
        <p className='text-[14px]  w-[300px] h-[180px]  text-gray-800'>{description}</p>
        <div className='flex flex-row items-center gap-2 my-5'>
            <Link className='border border-purple-900 p-2 rounded' to="/">react</Link>
            <Link className='border border-purple-900 p-2 rounded' to="/">redux</Link>
            <Link className='border border-purple-900 p-2 rounded' to="/">axios</Link>
        </div>
        <div className="flex justify-between">
            <Link to={"/"}><button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] text-base"> Github</button></Link>
            <Link to={"/"}><button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] text-base">View Site</button></Link>
        </div>
    </div>
  )
}
