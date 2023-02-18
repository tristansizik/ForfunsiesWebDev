import { FaBeer, } from 'react-icons/fa'
import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
    return (
      <><NavBarIcon icon={<AiOutlineHome size="28" />} text={"rocket!"} />
      <div className="flex w-25% justify-items-start"></div>
      <div className="flex w-50% justify-center items-center">
            <div className="flex px-10 text-xlg text-slate-700 hover:text-white">Tristan's Website</div>
        </div><div className="flex w-25% justify-">
                <div className="relative text-right right-10% w-25%">PI1</div>
                <div className="relative text-right right-10% w-25%">PI2</div>
                <div className="relative text-right right-10% w-25%">PI3</div>
                <div className="relative text-right right-10% w-full">Search box</div>
            </div></>
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