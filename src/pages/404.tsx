import NavBar from '@/components/NavBar'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import Image from 'next/image'

export default function Custom404() {        
    return(
      <main className= "min-h-screen flex flex-col items-center bg-black animate-fade-in-p7">
        <NavBar/> 
         <div className="relative w-full inset-y-0 my-8 bg-rusty-black">
            <p className="font-Saira text-xl md:tracking-normal text-neon-green text-center">Bro-ham, you&apos;re totally marshin my mellow.<br/>Look what you did! You made Kirby embarassed. Shame on you! </p>              
        </div>

        <div className="relative flex-col top-0 h-50% w-full flex flex-row place-content-center place-items-center bg-blue-pastel">
            <div className="font-Saira text-3xl font-bold text-green-blueish-dark">ERROR 404</div>
            <div className="font-Saira text-l font-bold text-green-blueish-dark">PAGE NOT FOUND</div>
            <div className="relative h-80 w-80">
                <Image src='./images/kirby-nintendo.gif' alt="Kirby :)" />
            </div>
        </div>

        <div className="justify-center items-center sticky bottom-5% h-24 w-full rounded-12px">
          <FootBar/>    
        </div>
      </main>
    )
}