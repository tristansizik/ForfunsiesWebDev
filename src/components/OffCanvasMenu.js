import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';

const OffCanvasMenu = (bgColor) => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
  
    return (
      <>
      <div className="">
      <button
        onClick={toggleMenu}
        className="flex navbar-icon group w-10 h-5"><FaBars size="20" />
      
        {/* {isOpen ? 'Close' : 'Menu'} */}
        {/* <button onClick={showMenu} className="flex navbar-icon group w-10 h-5"><FaBars size="20" /></button> */}
      </button>

      <div
        className={`
        fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-40 transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
      >
        {/* Off-canvas content here */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <Link className="block p-2 hover:bg-gray-100" href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link className="block p-2 hover:bg-gray-100" href="/about">About</Link>
            </li>
            <li>
              <Link className="block p-2 hover:bg-gray-100" href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

       {/* Optional overlay for better user experience */}
      <div
        className={`
        fixed top-0 left-0 w-full h-full bg-black opacity-50 ${
          isOpen ? 'block' : 'hidden'
        } z-30 transition-opacity duration-300 ease-in-out`
        }
        onClick={toggleMenu}
      />
    </div>
      </>
    );
  }

  export default OffCanvasMenu;