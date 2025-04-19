import {FaSoundcloud} from 'react-icons/fa'
import { AiOutlineHome , AiFillCustomerService, AiFillAudio, AiOutlineTwitter, AiFillInstagram, AiOutlineGithub} from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io";
import Link from 'next/link'

const FootBar = () => {
    return (
      <>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-3 flex space-x-4">
            <Link href="https://soundcloud.com/solacedotaif" className="flex relative text-right w-full">
              <FootBarIcon icon={<FaSoundcloud size="20" />} text={"My Twitter"} />
            </Link>        
            <Link href="https://www.instagram.com/treee.stone/" className="flex relative text-right w-full">
              <FootBarIcon icon={<AiFillInstagram size="20" />} text={"My Instagram"} />
            </Link>
            <Link href="https://github.com/tristansizik" className="relative text-right w-full">
              <FootBarIcon icon={<AiOutlineGithub size="20" />} text={"My Github"} />
            </Link>
          </div>
          <div className="mb-3 flex space-x-2 text-xl font-Helvetica text-[#2e2e3a]">
            <div>✫✫✫✫✫</div>
          </div>
          <div className="mb-8 flex space-x-2 text-sm font-Helvetica text-[#2e2e3a]">
            <div>Tristan Sizik</div>
            <div>❃</div>
            <div>© 2025</div>
          </div>
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