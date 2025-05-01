import Link from 'next/link'
import {FaBars,FaAdjust } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import OffCampusMenu from '@/components/OffCanvasMenu'

const NavBarHome = (bgColor) => {
    return (
      <>
      <div className="flex flex-row justify-between items-center sticky h-12 md:h-20 w-2/3 font-Helvetica font-bold text-dark-grayish-blue">
          <div className='left h-full me-[100px] w-1/3 md:w-[120px]'>
            <Link href="/" className="flex h-full items-center justify-center hover:text-green-dark">Home</Link>
          </div>    
          <div className="right grid grid-cols-7 items-center justify-center h-full w-1/3 md:w-[360px] font-bold text-dark-grayish-blue">  
            <div className='md:flex items-center justify-center col-span-2 hidden'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/portfolio">Portfolio</Link>
            </div>
            <div className='md:flex items-center justify-center col-span-2 hidden'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/about">About</Link>
            </div>
            <div className='md:flex items-center justify-center col-span-2 hidden'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/contact">Contact</Link>
            </div>
            <div className='flex items-center justify-center md:col-span-1 col-span-7 h-full md:hidden'>
            <OffCampusMenu></OffCampusMenu>
            </div>           
          </div>                                    
      </div>
      </>
    );
  }
  export default NavBarHome;