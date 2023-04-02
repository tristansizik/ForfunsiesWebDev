import {FaSoundcloud} from 'react-icons/fa'
import { AiOutlineHome , AiFillCustomerService, AiFillAudio, AiOutlineTwitter, AiFillInstagram, AiOutlineGithub} from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io";
import Link from 'next/link'

const FootBar = () => {
    return (
      <>
        <div className="flex h-full items-center">
            <Link href="https://soundcloud.com/mastless" className="flex relative text-right w-full">
              <FootBarIcon icon={<FaSoundcloud size="20" />} text={"My Twitter"} />
            </Link>        
            <Link href="https://www.instagram.com/mastless_/" className="flex relative text-right w-full">
              <FootBarIcon icon={<AiFillInstagram size="20" />} text={"My Instagram"} />
            </Link>
            <Link href="https://github.com/tristansizik" className="relative text-right w-full">
              <FootBarIcon icon={<AiOutlineGithub size="20" />} text={"My Github"} />
            </Link>
         </div>
      </>
    );
  }
  
  const FootBarIcon = ({icon, text = 'tooltip'}) => {
    return (
    <div className="footbar-icon ">
      {icon}
      {/* <ShowFootBar icon={icon}/> */}
      <span className="footbar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
    );
  }

  /* Maintenance !!
  */

  // const ShowFootBar = (icon) => {
  //   if(window.scrollY !=0) {
  //     icon={size="0"}
  //   }
  //   else {
  //     icon.size = "20";
  //   }
  // }

  export default FootBar;