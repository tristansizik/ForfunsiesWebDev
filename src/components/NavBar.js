import { FaBeer, FaBars } from 'react-icons/fa'
import { AiOutlineHome , AiFillCustomerService, AiFillAudio} from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io";
import Link from 'next/link'

const NavBar = () => {
    return (
      <>
        <div className="flex h-full">
          <Link href="/" className="flex w-25% h-full px-0 items-center justify-items-start ">
            <NavBarIcon icon={<AiOutlineHome size="28" />} text={"Home!"} />
          </Link>
          <div className="flex w-50% h-full px-0 justify-center items-center">
            <div className="flex  w-full h-full text-slate-700 font-montserrat text-2xl font-extrabold items-center justify-center">Tristan&apos;s Website</div>
            {/* <p className="relative bottom-0 text-slate-700 font-montserrat text-sm font-light h-50% w-full">Serial Hobbyist</p> */}
          </div>
          <div className="flex relative w-25% h-full justify-center items-center">      
            <Link href="/creativecode" className="flex relative text-right right-10%">
              <NavBarIcon icon={<FaBars size="20" />} text={''} />
            </Link>
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