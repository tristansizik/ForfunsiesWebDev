import NavBar from '@/components/NavBar'
import FootBar from '@/components/FootBar'

import { Inter } from '@next/font/google'
import React, { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })


export default function BodyInfo() {
    return(
      <main className= "flex flex-col justify-between items-center px-3% py-1% min-h-screen space-y-1 animate-fade-in-p7">
        <NavBar color={'bg-red-cedar-chest'}/>         
        <div className="items-center justify-center flex md:min-h-3/4 min-h-1/2 w-full bg-brown-pastel rounded-12px">
          <p className="font-montserrat font-bold md:text-7xl text-3xl md:tracking-normal md:leading-snug md:pl-5 md:w-1/2 w-3/4 text-green-dark">Hi! I&apos;m Tristan Sizik, a Software Developer who tries his Best</p>
        </div>

        <div className="grid grid-cols-3 gap-2 place-items-center min-h-screen w-full bg-blue-pastel rounded-12px">
          <div className="items-center justify-center flex md:w-40 md:h-4/5 h-50% w-25% bg-pink-100 rounded-12px">1</div>
          <div className="items-center justify-center flex w-40 h-4/5 bg-pink-300 rounded-12px">1</div>
          <div className="items-center justify-center flex w-40 h-4/5 bg-pink-100 rounded-12px">1</div>
          <div className="items-center justify-center flex w-40 h-4/5 bg-pink-100 rounded-12px">2</div>
          <div className="items-center justify-center flex w-40 h-4/5 bg-pink-300 rounded-12px">2</div>
          <div className="items-center justify-center flex w-40 h-4/5 bg-pink-100 rounded-12px">2</div>
        </div>

        <div className="justify-center items-center sticky bottom-5% h-24 w-full rounded-12px">
          <FootBar/>    
        </div>
      </main>
    )
}



