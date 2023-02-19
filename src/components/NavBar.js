import { FaBeer, } from 'react-icons/fa'
import { AiOutlineHome , AiFillCustomerService, AiFillAudio} from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io";

const NavBar = () => {
    return (
      <>
        <div className="flex h-full">
        <div className="flex w-25% h-full px-0 items-center justify-items-start ">
          <NavBarIcon icon={<AiOutlineHome size="28" />} text={"Home!"} />
        </div>
        <div className="flex w-50% h-full px-0 justify-center items-center">
          <div className="flex px-10 text-xlg text-slate-700 hover:text-white">Tristan's Website</div>
        </div>
        <div className="flex relative w-25% justify-">
          <div className="flex relative text-right right-10% w-25%">
            <NavBarIcon icon={<AiFillCustomerService size="20" />} text={"My Music"} />
          </div>
          <div className="flex relative text-right right-10% w-25%">
            <NavBarIcon icon={<AiFillAudio size="20" />} text={"My Music"} />
          </div>
          <div className="relative text-right right-10% w-25%">
            <NavBarIcon icon={<AiFillAudio size="20" />} text={"My Music"} />
          </div>
          <input className="relative text-left right-10% w-full rounded-12px" type='search' id='name' placeholder='Search' ></input>
          </div>
          </div>
       </>
    );
  }
  
  const NavBarIcon = ({icon, text = 'tooltip'}) => {
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