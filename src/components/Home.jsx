import React, { useEffect, useState } from 'react'
import Vip from '../images/Vip.svg?react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) setShowAlert(true)
  }, [])

  return (
    <div className="bg-[#1E1E1E] flex items-center justify-center h-screen overflow-hidden">

      {showAlert && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6">
          <div className="bg-[#2a2a2a] border border-white/10 rounded-2xl p-6 max-w-sm w-full text-white text-center flex flex-col gap-4">
            <p className="text-2xl">🖥️</p>
            <p className="text-lg font-bold font-Helvetica">Best viewed on Desktop</p>
            <p className="text-sm text-white/60">
              This portfolio is optimized for desktop. Please switch to Desktop mode for better exprience 
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="mt-2 bg-white text-black font-semibold rounded-xl py-2 px-6 hover:bg-white/90 transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      <div className="text-white flex flex-col items-center gap-10 text-center">
        <p
          onClick={() => navigate('/github')}
          className="text-8xl font-Helvetica font-bold cursor-pointer"
        >
          I'm Adithyan MB
        </p>
        <p className="text-lg">
          Engineer from INDIA with interest in Embedded software and IOT
        </p>
        <p className="font-allison text-3xl">Being Better Than Yesterday</p>
      </div>

      <Vip className="h-120" />
    </div>
  )
}

export default Home