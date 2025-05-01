import Link from 'next/link'
import {FaBars,FaAdjust } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import OffCampusMenu from '@/components/OffCanvasMenu'

const NavBarTitle = (bgColor) => {
  const [click, setClick] = useState(false);

  const showMenu = () => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setClick(!click);
  }
    return (
      <>
      <div className="flex flex-row justify-between items-center h-20 w-full font-Helvetica font-bold text-dark-grayish-blue bg-coral">
          <div className='left h-full me-[100px] w-1/3 md:w-[120px]'>
            <Link href="/" className="flex h-full items-center justify-center hover:text-green-dark">Home</Link>
          </div> 
          <div className="flex flex-row w-2/3 h-full justify-center items-center text-2xl font-Helvetica font-bold">
            TRISTAN&apos;S WEBSITE
          </div>  
          <div className="right grid grid-cols-7 right items-center justify-center h-full w-[360px] font-bold text-dark-grayish-blue">  
            <div className='md:flex items-center justify-center col-span-2 hidden'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/portfolio">Portfolio</Link>
            </div>
            <div className='md:flex items-center justify-center col-span-2 hidden'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/about">About</Link>
            </div>
            <div className='md:flex items-center justify-center col-span-2 hidden'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/contact">Contact</Link>
            </div>
            <div className='flex items-center justify-center md:col-span-1 col-span-7 md:hidden'>
              <OffCampusMenu></OffCampusMenu>  
            </div>
          </div>    
      </div>
      </>
    );
  }
  export default NavBarTitle;