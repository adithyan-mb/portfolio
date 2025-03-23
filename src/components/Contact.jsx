import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Mail from '../images/Mail.svg?react'

const Contact = () => {
  return (
    <div className='bg-[#1E1E1E]  overflow-hidden w-full   text-white h-screen '>
        <div className='text-white text-5xl text-center pt-10'>Let's Connect</div>


        <div className="grid grid-cols-5 items-center gap-8 min-h-[70vh] flex items-center justify-center">
       <div className="col-span-2 flex flex-col items-start space-y-4  px-36 justify-center">
              <div className='flex gap-10 justify-center items-center'>
                  <FaLinkedin size="3rem"/>
                  <a href="https://linkedin.com/in/adithyan-mb" target="_blank"  >linkedin.com/in/adithyan-mb</a>
              </div>
              <div className='flex gap-10 justify-center items-center '>
                  <FaInstagram size="3rem"/>
                  <a href="https://www.instagram.com/adithyan_mb/" target="_blank" >adithyan_mb</a>
                
              </div>
              <div className='flex gap-10 justify-center items-center' >
              <MdEmail size="3rem"/>
              <a  href="mailto:adithyanmbdev@gmail.com" target="_blank">adithyanmbdev@gmail.com</a>
              </div>
  </div>

  <div className="col-span-1 flex flex-col justify-center  pt-20">
  <div className='text-3xl italic self-center font-allison  text-3xl'>OR</div>
  <Mail className=" h-120"/>
  </div>

  <div className="col-span-2 flex flex-col items-center">
  <div className='flex flex-col justify-center items-center gap-5'>
            <input type="text" className='h-15 w-70 bg-white rounded-lg text-black pl-5' placeholder='Name: '/>
            <input type="email" className='h-15 w-70 bg-white rounded-lg text-black pl-5' placeholder='Email:'/>
            <input type="textarea" className='h-40 w-70 bg-white rounded-lg text-black pl-5' placeholder ="description"/>
            <button className='self-end h-10 w-20 p-2 bg-[#6027C3]  rounded-lg  '>Submit </button>
          </div>
  </div>
</div>

      
    </div>
  )
}

export default Contact
