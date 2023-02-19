import { FaBeer, } from 'react-icons/fa'
import { AiOutlineHome , AiFillCustomerService, AiFillAudio, AiOutlineTwitter, AiFillInstagram, AiOutlineGithub} from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io";

const FootBar = () => {
    return (
      <>
        <div className="flex h-full items-center">
          <div className="flex relative text-right w-full">
            <FootBarIcon icon={<AiOutlineTwitter size="20" />} text={"My Twitter"} />
          </div>
          <div className="flex relative text-right w-full">
            <FootBarIcon icon={<AiFillInstagram size="20" />} text={"My Instagram"} />
          </div>
          <div className="relative text-right w-full">
            <FootBarIcon icon={<AiOutlineGithub size="20" />} text={"My Github"} />
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