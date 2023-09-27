import { FaBeer, FaBars } from 'react-icons/fa'
import { AiOutlineHome , AiFillCustomerService, AiFillAudio} from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io";
import Link from 'next/link'

const NavBar = (bgColor) => {
    return (
      <>
      <div className="justify-center items-center sticky top-0 h-20 w-full bg-faint-grey ">
        <div className="flex h-full">
          <Link href="/" className="flex w-25% h-full px-0 items-center justify-items-start ">
            <NavBarIcon icon={<AiOutlineHome size="28" />} text={"Home!"} />
          </Link>
            <div className="flex w-50% h-full text-green-blueish-dark font-Hardigan text-2xl font-extrabold items-center justify-center">Tristan&apos;s Website</div>
          <div className="flex relative w-25% h-full justify-center items-center">      
            {/* <Link href="/creativecode" className="flex relative text-right right-10%"> */}
            {/* <Link href="/threejspage" className="flex relative text-right right-10%">
              <NavBarIcon icon={<FaBars size="20" />} text={''} />
            </Link> */}
            <div className="flex items-center text-base leading-5">
              <a className="px-3 font-Hardigan font-bold text-green-blueish-dark  hover:text-green-dark" href="/threejspage">Blog</a>
              <a className="px-3 font-Hardigan font-bold text-green-blueish-dark hover:text-green-dark" href="/about">About</a>
              <a className="px-3 font-Hardigan font-bold text-green-blueish-dark hover:text-green-dark" href="/contact">Contact</a>
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
      
      <span className="navbar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
    );
  }

  export default NavBar;