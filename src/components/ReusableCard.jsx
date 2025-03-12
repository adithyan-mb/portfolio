import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const  Card =({src,title,description,tech,handleClick})=>{


    return(<div className=' flex flex-col justify-evenly text-xs px-5 h-60 w-60 border-2 rounded-xl bg-[#EFF1F2]'> 
           <div className='flex justify-between'>
                <img  className=" h-25  w-35 rounded-xl"src={src} alt="project image" />
                <FaExternalLinkAlt className="cursor-pointer"color="6027C3" onClick={handleClick}/>
            </div> 
            <div className='flex  flex-col gap-1 text-black'>

            
            <p className='font-semibold text-xl '>{title}</p>
            <p>{description}</p>
            <p className='text-[#6027C3]'>{tech}</p>
            </div>

      </div>

)

}

export default Card 