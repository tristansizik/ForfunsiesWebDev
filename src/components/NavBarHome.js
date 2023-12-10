import Link from 'next/link'
import {FaBars } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const NavBarHome = (bgColor) => {
  const [click, setClick] = useState(false);
    return (
      <>
      <div className="justify-center items-center sticky top-0 h-20 w-full bg-faint-grey ">
        <div className="flex h-full items-center">
          <Link href="/" className="flex w-25% px-10 font-Hardigan font-bold text-green-blueish-dark hover:text-green-dark ">Home</Link>
          <div className="flex w-50% h-full text-green-blueish-dark font-Hardigan text-2xl font-extrabold justify-center"></div>
          <div className="flex w-25% font-Hardigan relative h-full justify-center">            
            <div className="text-base leading-1 sm:flex hidden items-center">
              <Link className="px-2 font-bold text-green-blueish-dark hover:text-green-dark" href="/threejspage">Blog</Link>
              <Link className="px-2 font-bold text-green-blueish-dark hover:text-green-dark" href="/about">About</Link>
              <Link className="px-2 font-bold text-green-blueish-dark hover:text-green-dark" href="/contact">Contact</Link>             
            </div>
            <div className='sm:hidden flex items-center'>
              <NavBarIcon icon={<FaBars size="20" />} text={''} onclick={ClickEvent()}/>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  const NavBarIcon = ({icon, text = ''}) => {
    return (
    <div className="navbar-icon group">
      {icon}
      
      <span className="navbar-tooltip">
      </span>
    </div>
    );
  }

  const ClickEvent = () => {
    console.log("hi");
  }

  export default NavBarHome;