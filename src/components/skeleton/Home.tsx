import NavBarHome from '@/components/NavBarHome'
import FootBar from '@/components/FootBar'
import Hero from '@/components/BodyHero'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'


export default function BodyInfo() {
    return(
      <main className="flex flex-col justify-center items-center h-screen w-full pt-24 px-4 bg-coral ">
        <NavBarHome/>    
        <Hero/>
        <FootBar/>
      </main>
    )
}



