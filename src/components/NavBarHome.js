import Link from 'next/link'
import {FaBars } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const NavBarHome = (bgColor) => {
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
      <div className="grid grid-cols-4 gap-4 justify-center sticky h-20 w-full font-Hardigan font-bold text-green-blueish-dark">
          <div className='col-span-1'>
            <Link href="/" className="flex h-full items-center justify-center hover:text-green-dark">Home</Link>
          </div>   
          <div className='col-span-2'>
          </div>  
          <div className="col-span-1 font-bold text-green-blueish-dark">  
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
              <Link className="hidden hover:text-green-dark sm:block" href="/threejspage">Blog</Link>
              <Link className="hidden hover:text-green-dark" href="/about">About</Link>
              <Link className="hidden hover:text-green-dark" href="/contact">Contact</Link>             
            </div>
            <div className='sm:hidden flex h-full justify-center items-center'>
              <button onClick={showMenu} className="navbar-icon group"><FaBars size="20" /></button>
            </div>
            <div className="fixed left-0 top-0 z-10 h-full w-full transform opacity-95 duration-300
                  ease-in-out translate-x-0">

            </div>
          </div>                                    
      </div>
      </>
    );
  }

  export default NavBarHome;