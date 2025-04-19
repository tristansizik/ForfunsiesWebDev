import Link from 'next/link'
import {FaBars } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const NavBarTitle = (bgColor) => {
  const [click, setClick] = useState(false);
    return (
      <>
      <div className="grid grid-cols-4 gap-4 justify-center sticky h-20 w-full bg-faint-grey font-Hardigan font-bold text-green-blueish-dark">
          <div className='col-span-1'>
            <Link href="/" className="flex h-full items-center justify-center hover:text-green-dark">Home</Link>
          </div>   
          <div className='col-span-2 flex  h-full w-full text-2xl items-center justify-center'>Tristan&apos;s Website
          </div>  
          <div className="col-span-1">  
           <div className="absolute sm:flex h-full items-center justify-center gap-2 flex-col md:flex-row top-[-100%] sm:top-[inherit]
                            ease-in duration-300"
                 id="menu">
              <Link className="hover:text-green-dark" href="/threejspage">Blog</Link>
              <Link className="hover:text-green-dark" href="/about">About</Link>
              <Link className="hover:text-green-dark" href="/contact">Contact</Link>             
            </div>
            <div className='sm:hidden flex h-full justify-center items-center'>
              <NavBarIcon icon={<FaBars size="20" />}/>
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
    console.log("I've been clicked");
    let menu = document.getElementById("menu");
    menu.classList.toggle("top-[100]");
  }

  export default NavBarTitle;