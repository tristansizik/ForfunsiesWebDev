import NavBarHome from '@/components/NavBarHome'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'


export default function BodyInfo() {
    return(
      <main className="flex flex-col justify-center items-center h-screen w-full pt-24 px-4 bg-coral ">
        <NavBarHome></NavBarHome>    
        <div className= "flex md:flex-row flex-col h-4/5 md:h-1/2 w-2/3 px-4 py-4 md:mb-10 bg-vivid-red text-center">
          <img className=" h-full mx-10 bg-[white] z-20 mb-2" src='./images/1.jpg' alt="Me :)" />
          <div className="flex flex-col justify-center items-center w-2/3 h-full mx-10  z-10 ">
            <h1 className="font-Helvetica font-bold text-lg md:text-6xl text-dark-grayish-blue">TRISTAN SIZIK –</h1>
            <p className='font-Helvetica font-bold text-sm md:text-xl text-dark-grayish-blue'>A passionate, eclectic creative sharing his adventures in this cozy digital nook</p>
            <p className='font-Helvetica font-bold hidden md:block md:text-sm text-dark-grayish-blue mt-5'>Currently In My Orbit:<br/>Event Production<br/>Music Production<br/>DJing<br/>Running </p>
          </div>
        </div>
        <FootBar></FootBar>
      </main>
    )
}



