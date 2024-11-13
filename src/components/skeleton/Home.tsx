import NavBarHome from '@/components/NavBarHome'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'


export default function BodyInfo() {
    return(
      <main className="">
        <section className= "flex items-center justify-center h-screen w-full bg-black text-white animate-fade-in-p7 grid grid-flow-row grid-col-1">
          <NavBarHome/>         
        
        
          <div className="relative h-1/2 w-full inset-y-0 my-8">
            <div className="flex text-green-blueish-dark font-Hardigan sm:text-5xl text-xl font-extrabold items-center justify-center">Tristan&apos;s Website</div>          
            <div className = "w-full place-content-center ">
            <ThreeJS/>
            </div>         
          </div>
                
          <FootBar/>           
          </section>
      </main>
      
      
    )
}



