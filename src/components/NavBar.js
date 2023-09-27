import { FaBeer, FaBars } from 'react-icons/fa'
import { AiOutlineHome , AiFillCustomerService, AiFillAudio} from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io";
import Link from 'next/link'

const NavBar = (bgColor) => {
    return (
      <>
      <div className="justify-center items-center sticky top-0 h-20 w-full bg-faint-grey ">
        <div className="flex h-full">
          <Link href="/" className="flex w-25% h-full items-center justify-items-start ">
            <NavBarIcon icon={<AiOutlineHome size="28" />} text={"Home!"} />
          </Link>
            <div className="flex w-50% h-full text-green-blueish-dark font-Hardigan text-2xl font-extrabold items-center justify-center">Tristan&apos;s Website</div>
          <div className="flex relative h-full justify-center items-center">
            <Link href="/threejspage" className="flex px-0 items-center w-25% md:hidden">
              <NavBarIcon icon={<FaBars size="20" />} text={''} />
            </Link>
            <div className=" items-center text-base leading-5 hidden md:flex">
              <Link className="px-2 font-Hardigan font-bold text-green-blueish-dark  hover:text-green-dark" href="/threejspage">Blog</Link>
              <Link className="px-2 font-Hardigan font-bold text-green-blueish-dark hover:text-green-dark" href="/about">About</Link>
              <Link className="px-2 font-Hardigan font-bold text-green-blueish-dark hover:text-green-dark" href="/contact">Contact</Link>
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