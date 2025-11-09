import NavBarTitle from '@/components/NavBarTitle'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'
import Image from 'next/image'


export default function BodyInfo() {
    return(
      <main className= "min-h-screen flex flex-col items-center  bg-coral animate-fade-in-p7">
        <NavBarTitle/>
        <div className="flex h-screen w-full bg-vivid-red justify-center items-center"> 
          <div className="h-[80%] w-[80%] bg-coral">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1 className="font-Helvetica font-bold text-3xl md:text-8xl text-dark-grayish-blue mb-10">
                WELCOME TO MY WORLD
              </h1>
              <p className="font-Helvetica font-bold text-xl md:text-3xl text-dark-grayish-blue mb-10">
                Every craft I pursue adds a new color to my world.
              </p>
              {/* <h1 className="font-Helvetica font-bold text-6xl text-dark-grayish-blue mb-10">WELCOME TO MY WORLD</h1>
              <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'>My Slices of Life</p> */}
              {/* <div className='grid grid-cols-6 justify-evenly items-center h-[50px] w-[50%] bg-white mt-20'>
                <button className="flex col-span-1 h-full w-full bg-[#585800] justify-center items-center text-white">
                  Application Engineer
                </button>
                <button className="flex col-span-1 h-full w-full bg-[#585858] justify-center items-center text-white">
                  Music Producer
                </button>
                <button className="flex col-span-1 h-full w-full bg-[#585800] justify-center items-center text-white">
                  DJ
                </button>
                <button className="flex col-span-1 h-full w-full bg-[#585858] justify-center items-center text-white">
                  Graphic Designer
                </button>
                <button className="flex col-span-1 h-full w-full bg-[#585800] justify-center items-center text-white">
                  Photographer
                </button>
                <button className="flex col-span-1 h-full w-full bg-[#585858] justify-center items-center text-white">
                  Event Marketing
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="grid grid-rows-8 grid-cols-6 h-screen w-full items-center justify-evenly bg-black">
          <div className="row-span-1 col-span-4 w-full h-full bg-[#585858] items-center pl-10 text-white">
            <h1 className="row-span-1 font-Helvetica font-bold text-3xl text-dark-grayish-blue mb-10">APPLICATION ENGINEER BY DAY</h1>
            <p className='row-span-1 font-Helvetica font-bold text-xl text-dark-grayish-blue'>Software Engineer, Innovator, Professional Problem Solver</p>
          </div>
          <div className="row-span-2 col-span-3 h-full w-full bg-[#111111] items-center justify-center text-white">
            Hi
          </div>
          <div className="row-span-2 col-span-3 h-full w-full bg-[#111111] items-center justify-center text-white">
            Hi
          </div>
        </div>
        <div className="grid grid-cols-2 h-screen w-full items-center justify-evenly bg-black">
          <div className="flex col-span-1 h-full w-full bg-[#585800] justify-center items-center text-white">
            Hi
          </div>
          <div className="flex col-span-1 h-full w-full bg-[#111585] items-center justify-center text-white">
            Hi
          </div>
        </div>
        <div className="grid grid-cols-2 h-screen w-full items-center justify-evenly bg-black">
          <div className="flex col-span-1 h-full w-full bg-[#585858] justify-center items-center text-white">
            Hi
          </div>
          <div className="flex col-span-1 h-full w-full bg-[#111111] items-center justify-center text-white">
            Hi
          </div>
        </div>
        <div className="grid grid-cols-2 h-screen w-full items-center justify-evenly bg-black">
          <div className="flex col-span-1 h-full w-full bg-[#585800] justify-center items-center text-white">
            Hi
          </div>
          <div className="flex col-span-1 h-full w-full bg-[#111585] items-center justify-center text-white">
            Hi
          </div>
        </div>
        <div className="grid grid-cols-2 h-screen w-full items-center justify-evenly bg-black">
          <div className="flex col-span-1 h-full w-full bg-[#585858] justify-center items-center text-white">
            Hi
          </div>
          <div className="flex col-span-1 h-full w-full bg-[#111111] items-center justify-center text-white">
            Hi
          </div>
        </div>
        <div className="grid grid-cols-2 h-screen w-full items-center justify-evenly bg-black">
          <div className="flex col-span-1 h-full w-full bg-[#585800] justify-center items-center text-white">
            Hi
          </div>
          <div className="flex col-span-1 h-full w-full bg-[#111585] items-center justify-center text-white">
            Hi
          </div>
        </div>
        
        <div className="justify-center items-center sticky bottom-5% h-20 w-full rounded-12px">
          <FootBar/>    
        </div>
      </main>
    )
}



