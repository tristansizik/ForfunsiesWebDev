import Link from 'next/link'
import {FaBars } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const NavBarHome = (bgColor) => {
  const [click, setClick] = useState(false);
    return (
      <>
      <div className="justify-center items-center sticky h-20 w-full bg-faint-grey ">
        <div className="flex h-full items-center font-Hardigan font-bold text-green-blueish-dark">
          <Link href="/" className="flex w-25% px-10 hover:text-green-dark ">Home</Link>
          <div className="flex w-50% h-full font-extrabold items-center"></div>
          <div className="w-25% h-full ">                        
            <div className="absolute sm:relative flex-col md:flex-row gap-10 top-[-100%] sm:top-[inherit]"
                 id="menu">
              <Link className="hover:text-green-dark" href="/threejspage">Blog</Link>
              <Link className="hover:text-green-dark" href="/about">About</Link>
              <Link className="hover:text-green-dark" href="/contact">Contact</Link>             
            </div>
            <div className='sm:hidden items-center'>
              <NavBarIcon icon={<FaBars size="20" />}/>
            </div>
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
    menu.classList.toggle("top-[50px]");
  }

  export default NavBarHome;