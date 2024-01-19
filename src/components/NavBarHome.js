import Link from 'next/link'
import {FaBars,FaAdjust } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const NavBarHome = (bgColor) => {
  const [click, setClick] = useState(false);
    return (
      <>
      <div className="grid z-10 grid-cols-4 gap-4 justify-center sticky h-20 w-full bg-faint-grey">
          <div className='col-span-1 font-Hardigan font-bold text-green-blueish-dark'>
            <Link href="/" className="flex h-full items-center justify-center hover:text-green-dark">Home</Link>
          </div>   
          <div className='col-span-2 font-Hardigan font-bold text-green-blueish-dark'>
          </div>  
          <div className="col-span-1 font-Hardigan font-bold text-green-blueish-dark">  
           <ul className="md:flex items-center justify-center md:static absolute h-full w-auto 
           md:w-auto gap-2 flex-col md:flex-row transition-all opacity-0 md:opacity-100 top-[-200px] ease-in bg-faint-grey
           duration-400"
                 id="menu">
              <li className='md:my-0'>
                <Link className="hover:text-green-dark" href="/threejspage">Blog</Link>
              </li>
              <li className='md:my-0'>
                <Link className="hover:text-green-dark" href="/about">About</Link>
              </li>
              <li className='md:my-0'>
                <Link className="hover:text-green-dark" href="/contact">Contact</Link>    
              </li>                     
          </ul>
            <div className='md:hidden flex h-full justify-center items-center'>
              <NavBarIcon icon={<FaBars size="20" />}  id="icon"/>
            </div>
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