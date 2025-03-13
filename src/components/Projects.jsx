import React from 'react'
import Website from '../images/Website.svg?react'
import Card from '../components/ReusableCard.jsx'
import amazon from '../images/projeectIcons/amazon.png'
import weather from '../images/projeectIcons/weatherApp.png'
import tictactoe from'../images/projeectIcons/tic_tac_toe.png'
import todo from '../images/projeectIcons/todo.png'
import  portfolio from '../images/projeectIcons/portfolio.png'
import notfound from '../images/projeectIcons/notfound.png'

const Projects = () => {
  return (
    <div className='bg-[#1E1E1E] w-full h-screen overflow-hidden '>
      <div className='px-20   text-6xl text-start pt-10'>Projects</div>
      
      <div className='p-5'>
         <div className='grid grid-cols-3 p-2 grid-rows-2 items-center gap-y-7 justify-items-center w-3/5'> 
           <Card 
           src={todo} 
           title={"Todo" } 
           description={"A Todo App created using React. uses context Api to manage states. with Local storage support ."} 
           tech={"React.js · Context Api · Tailwind CSS"}
           handleClick={()=>{window.open("https://adithyanmb-todo.vercel.app/","blank")}}
           />

           <Card src={weather}
            title={"Weather App" } 
           description={"A web tool that prvoides current temperature, wind speed & humidity of any place ."} 
           tech={"React.js · REST Api · Tailwind CSS"}
           handleClick={()=>{window.open("https://adithyanmb-weather.vercel.app/","blank")}}
           />

           <Card src={tictactoe} 
           title={"Tic Tac Toe game" }
            description={"A simple TIC TAC TOE game , using Vanilla JavasScript ans styled using Bootstrap."}
             tech={"JavaScript · Bootstrap (Framework)"}
             handleClick={()=>{window.open("https://adithyan-mb.github.io/tic_tac_toe/","blank")}}
             />

           <Card src={amazon}
            title={"Amazon clone" }
             description={"Amazon clone (UI clone) using HTML and CSS only"} 
             tech={"HTML5 · Vanilla CSS"}
             handleClick={()=>{window.open("https://adithyan-mb.github.io/amazon-clone/","blank")}}
             />
          
           <Card src={portfolio} 
           title={"Portfolio" } 
           description={"A minimalist portfolio site"} 
           tech={"Figma · React.js · Redux Toolkit · Tailwind CSS · Api"}
           handleClick={()=>{window.open("https://www.figma.com/design/Fy1EAM74YTKGdP9N5xdHPR/portfolio?node-id=0-1&t=qS6Oh66tlYotuYeM-1","blank")}}
           />

          <Card src={notfound} 
           title={"Movieinfo.com" } 
           description={"Get upates, reviews and trailers of latest movies (work in Progress...)"} 
           tech={"React.js · Api · Tailwind CSS"}
           />


         </div>
         <Website className="fixed h-3/4 w-2/5  bottom-0 right-0 "/>

      </div>
    </div>
  )
}

export default Projects
