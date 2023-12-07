import NavBarHome from '@/components/NavBarHome'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'


export default function BodyInfo() {
    return(
      <main className= "min-h-screen flex flex-col items-center bg-black animate-fade-in-p7">
        <NavBarHome/>         
        
        <div className="relative h-1/2 w-full inset-y-0 my-8 bg-rusty-black">
        <div className="flex w-full h-full text-green-blueish-dark font-Hardigan text-5xl font-extrabold items-center justify-center">Tristan&apos;s Website</div>          
        <div className = "w-full place-content-center ">
          <ThreeJS/>
        </div>         
        </div>
                
        <FootBar/>           
      </main>
    )
}



