import NavBarTitle from '@/components/NavBarTitle'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaArrowAltCircleDown } from "react-icons/fa";


export default function BodyInfo() {
    return(
      <main className= "min-h-screen flex flex-col items-center  bg-coral animate-fade-in-p7">
        <NavBarTitle/>
        <div className="flex h-[80vh] w-full bg-vivid-red justify-center items-center">
          <div className="h-[40%] w-[80%] bg-coral">
            <div className="flex flex-col justify-top items-center w-full h-full pt-10">
              <h1 className="font-Helvetica font-bold text-5xl text-dark-grayish-blue">Lets Stay In Touch!</h1>
              <button className="flex col-span-1 h-[50px] w-[50%] bg-[#585800] justify-center items-center text-white my-10">
                Email
              </button>
              <p className="font-Helvetica font-bold text-xl text-dark-grayish-blue">See what inspires me</p>
              <FaArrowAltCircleDown className="size-10 mt-5 animate-bounce"/>
            </div>
          </div>
        </div>
        <div className="h-[50vh] w-full items-center justify-evenly bg-coral">
          <div className='grid grid-cols-8 grid-rows-2 place-content-evenly gap-4 w-full h-full p-20'>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-col border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue">Pinterest</h1>
                <p className='font-Helvetica font-bold text-sm text-dark-grayish-blue'>Where I get my graphics inspo</p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-col border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue">Substack</h1>
                <p className='font-Helvetica font-bold text-sm text-dark-grayish-blue'>Where I get my journaling inspo</p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-col border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10"></h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-col border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Substack</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10"></h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
            <div className="flex row-span-1 col-span-1 items-center justify-center text-white px-3">
              <button className='flex flex-cols border-solid border-2 rounded-xl border-white items-center justify-center w-full h-full'>
                <h1 className="font-Helvetica font-bold text-xl text-dark-grayish-blue mb-10">Pinterest</h1>
                <p className='font-Helvetica font-bold text-xl text-dark-grayish-blue'></p>
              </button> 
            </div>
          </div>
        </div>
        
        
        

        <div className="justify-center items-center sticky bottom-5% h-20 w-full rounded-12px">
          <FootBar/>    
        </div>
      </main>
    )
}



