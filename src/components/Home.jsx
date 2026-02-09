import React from 'react'
import Vip from '../images/Vip.svg?react'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate=useNavigate()
  return (
    <div className=" bg-[#1E1E1E] flex items-center justify-center h-screen overflow-hidden">
  <div className="text-white flex flex-col items-center gap-10 text-center">
    <p onClick={()=>{navigate('/github')}}className="text-8xl font-Helvetica font-bold cursor-pointer">I'm Adithyan MB</p>
    <p className="text-lg">
      Engineer from INDIA with interest in Embdedded software and IOT 
    </p>
    <p className='font-allison  text-3xl ' >Being Better Than Yesterday</p>
  </div>
   <Vip className="h-120"/>
</div>

  )
}

export default Home
