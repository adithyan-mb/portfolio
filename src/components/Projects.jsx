import React from 'react'
import Website from '../images/Website.svg?react'
import Card from '../components/ReusableCard.jsx'
import amazon from '../images/projeectIcons/amazon.png'
import weather from '../images/projeectIcons/weatherApp.png'
import tictactoe from'../images/projeectIcons/cli_tic_tac_toe.png'
// import todo from '../images/projeectIcons/todo.png'
import home_automation from '../images/projeectIcons/automated-home.png'
import  portfolio from '../images/projeectIcons/portfolio.png'
import lex from  '../images/projeectIcons/lexical.png'
//import notfound from '../images/projeectIcons/notfound.png'
// import movieinfo from  '../images/projeectIcons/movieinfo.png'
// import address_book from '../images/projeectIcons/address_book.jpg'
import lsb from '../images/projeectIcons/lsb_image_steganography.png'
import mp3 from '../images/projeectIcons/mp3_tag_reader.jpg'

const Projects = () => {
  return (
    <div className='bg-[#1E1E1E] w-full h-screen overflow-hidden '>
      <div className='px-20   text-5xl text-start pt-10'>Projects</div>
      
      <div className='pt-3'>
         <div className='grid grid-cols-3 p-2 grid-rows-2 items-center gap-y-7 justify-items-center w-3/5'> 
           <Card src={tictactoe}
            title={"Multiplayer Tic Tac Toe game over LAN" } 
           description={"Two-player Tic Tac Toe game through CLI."} 
           tech={"Python · Python socket · Wi-Fi / local network· CLI "}
           handleClick={()=>{window.open("https://github.com/adithyan-mb/Tic-Tac-toe-with-sockets","blank")}}
           />

           <Card 
           src={home_automation} 
           title={"Home automation (HTTP)" }  
           description={"Home automation monitoring using HTTP."} 
           tech={"HTTP · Python flask · Arduino IDE · ESP32 · Wi-Fi / local network "}
           handleClick={()=>{window.open("https://github.com/adithyan-mb/Home-automation-using-HTTP","blank")}}
           />

          <Card src={lex} 
           title={"Lexical Analyzer" } 
           description={"Simple Lexical Analyzer which classifies each token into its corresponding type "} 
           tech={"C · File operations · Tokenization · CLI "}
           handleClick={()=>{window.open("https://github.com/adithyan-mb/lexical-analyzer","blank")}}
           />
         

           <Card src={mp3} 
           title={"MP3 Tag Reader/Editor" }
            description={"Read an MP3 file’s meta data and edit any specific data field."}
             tech={"C · File operations · Pointers · DMA · Command line arguments (CLA)"}
             handleClick={()=>{window.open("https://github.com/adithyan-mb/mp3_tag_reader_and_editor")}}
             />

           <Card src={lsb}
            title={"Image Steganography " }
             description={"Image Steganography using LSB Encoding and Decoding"} 
             tech={"C · File operations · Pointers · Bitwise operations · CLA"}
             handleClick={()=>{window.open("https://github.com/adithyan-mb/lsb_image_steganography","blank")}}
             />

             
          
           <Card src={portfolio} 
           title={"Portfolio" } 
           description={"A minimalist portfolio site"} 
           tech={"Figma · React.js · Redux Toolkit · Tailwind CSS · Api"}
           handleClick={()=>{window.open("https://www.figma.com/design/Fy1EAM74YTKGdP9N5xdHPR/portfolio?node-id=0-1&t=qS6Oh66tlYotuYeM-1","blank")}}
           />

         


         </div>
         <Website className="fixed h-3/4 w-2/5  bottom-0 right-0 "/>

      </div>
    </div>
  )
}

export default Projects
