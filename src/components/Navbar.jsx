import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoIosFolder } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (

                <div className='bg-[#1E1E1E] h-1/10 w-full pt-5 pb-5'> 
                    <nav className='flex  w-full h-full justify-between '> 
                        <div className='  flex   items-center pl-15 w-1/10'>
                       <NavLink to='home'>{({ isActive }) => <FaHome size="1.75rem" color={isActive ? "#ffffff" : "#444444"} />}</NavLink> 
                        </div>

                        <div className=' flex   items-center justify-evenly w-1/3' > 
                   
                     <NavLink to='contact'>{({ isActive }) => <IoCallSharp size="1.75rem" color={isActive ? "#ffffff" : "444444"} />}</NavLink>
                     <NavLink to='github'>{({ isActive }) => <FaGithub size="1.75rem" color={isActive ? "#ffffff" : "444444"} />}</NavLink>
                     <NavLink to='projects'>{({ isActive }) => <IoIosFolder size="1.75rem" color={isActive ? "#ffffff" : "444444"} />}</NavLink>
                   

                        </div>
                    </nav>
               
                </div>

   
  )
}

export default Navbar
