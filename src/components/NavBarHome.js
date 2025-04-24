import Link from 'next/link'
import {FaBars,FaAdjust } from 'react-icons/fa'
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
      <div className="flex flex-row justify-between items-center sticky h-20 w-2/3 font-Helvetica font-bold text-dark-grayish-blue">
          <div className='left h-full me-[100px] w-[120px]'>
            <Link href="/" className="flex h-full items-center justify-center hover:text-green-dark">Home</Link>
          </div>    
          <div className="right grid grid-cols-7 items-center justify-center h-full w-[360px] font-bold text-dark-grayish-blue">  
            <div className='flex items-center justify-center col-span-2'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/portfolio">Portfolio</Link>
            </div>
            <div className='flex items-center justify-center col-span-2'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/about">About</Link>
            </div>
            <div className='flex items-center justify-center col-span-2'>
              <Link className="flex items-center justify-center col-span-1 hidden hover:text-green-dark sm:block" href="/contact">Contact</Link>
            </div>
            <div className='flex items-center justify-center col-span-1'>
            <button onClick={showMenu} className="navbar-icon group"><FaBars size="20" /></button>
            </div>
            
            <div className='sm:hidden flex h-full justify-center items-center'>
              <button onClick={showMenu} className="navbar-icon group"><FaBars size="20" /></button>
            </div>
            {/* <div className="fixed left-0 top-0 z-10 h-full w-full transform opacity-95 duration-300
                  ease-in-out translate-x-0">

            </div> */}
          </div>                                    
      </div>
      </>
    );
  }

  const NavBarIcon = ({icon}) => {
    return (
    <button onClick={ClickEvent} className="navbar-icon group">
      {icon}
    </button>
    );
  }

  const ClickEvent = () => {
    let menu = document.getElementById("menu");
    let icon = document.getElementById("icon");
    menu.classList.toggle("top-[50px]");
    menu.classList.toggle("opacity-100");
  }
  export default NavBarHome;