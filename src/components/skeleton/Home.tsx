import NavBarHome from '@/components/NavBarHome'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'


export default function BodyInfo() {
    return(
      <main className="flex flex-col justify-center items-center h-screen w-full pt-24 px-4 bg-[#de9151] ">
        <NavBarHome></NavBarHome>    
        <div className= "flex flex-row h-1/2 w-2/3 px-4 py-4 mb-10 bg-[#f34213] text-center">
          <img className=" h-full mx-10 bg-[white] z-20 mb-2" src='./images/1.jpg' alt="Me :)" />
          <div className="flex flex-col justify-center items-center w-2/3 h-full mx-10  z-10 ">
            <h1 className="font-Helvetica font-bold text-6xl text-[#2e2e3a]">TRISTAN SIZIK –</h1>
            <p className='font-Helvetica font-bold text-xl text-[#2e2e3a]'>A passionate, eclectic creative sharing his adventures in this cozy digital nook</p>
            <p className='font-Helvetica font-bold text-sm text-[#2e2e3a] mt-5'>Currently In My Orbit:<br/>Event Production<br/>Music Production<br/>DJing<br/>Running </p>
          </div>
        </div>
        <FootBar></FootBar>
      </main>
    )
}



