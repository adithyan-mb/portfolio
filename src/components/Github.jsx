import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import Profile from '../images/Profile.svg?react'
const Github = () => {

  const handleResume=()=>{
    window.open("https://drive.google.com/file/d/1H4Ild4eJsSjZqrP6jKDQq1msfszEFI9l/view?usp=sharing","blank")
  }
  const handleProfile=()=>{
    window.open("https://github.com/adithyan-mb","blank")

  }
  return (
    <div className='bg-[#1E1E1E] w-full h-screen overflow-hidden '>
       <div className='px-20   text-6xl text-start pt-10'>Github Profile</div>
     < div className="grid grid-cols-2 items-center gap-8 min-h-[70vh] flex items-center justify-center">
        <div className='flex  space-y-4  ' onClick={handleProfile}>
          <Profile className="h-110 cursor-pointer"/>
          <FaExternalLinkAlt size="0.75rem" color= "#6027C3 " className='cursor-pointer'/>
        </div>
        <div className='flex flex-col items-center space-y-4 text-xl  justify-center '>
         <div className='flex flex-col gap-5 mr-12'>
              <div className='flex gap-2'>
                <p className='font-bold'>User_name : </p>
                <a href="https://github.com/adithyan-mb" target="_blank"  > adithyan_mb </a> 
                <FaExternalLinkAlt size="0.75rem" color= "#6027C3"/>
              </div>
              <div className='flex gap-2 '>
                <p className='font-bold'>Bio:</p>
                <p className='text-pretty'>An aspiring software developer with a strong passion for web development, constantly learning and refining skills to build innovative and efficient digital experiences. Dedicated to continuous improvement, striving each day to be better than yesterday.</p>
              </div>
              <div className='flex gap-2'>
                <p className='font-bold'>Role :</p>
                <p>Front End Developer</p>
              </div>
              <div className='flex gap-2'>
                <p className='font-bold'>Tech Stack : </p>
                <p>React.js, JavaScript, Tailwind, C++</p>
              </div>
              <div className='flex gap-2'>
                <p className='font-bold'>Public repos : </p>
                <p> 4</p>
              </div>
              <div className='flex gap-2'>
                <p className='font-bold'>Location : </p>
                <p> Kerala ,India</p>
              </div>
              <button  onClick={handleResume} className=' h-10 w-50 p-1 bg-[#6027C3]  rounded-lg cursor-pointer '>Download Resume </button>
              
       
          
       
          
         </div>
        </div>

      </div>
    </div>
  )
}

export default Github
