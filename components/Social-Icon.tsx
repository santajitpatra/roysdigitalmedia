import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

interface customIcon {
    size?: number;

}
const SocialIcon: React.FC<customIcon> = (props) => {
  return (
      <div className="flex justify-center lg:mt-0 lg:mx-2  ">

          <a href="https://www.instagram.com/roysdigitalmedia" target="_blank" rel="noopener noreferrer" className="mx-2 transition-colors duration-300 transform" >
              <FaInstagram size={props.size} />

          </a>
          <a href="https://www.facebook.com/RoysDigitalMedia" target="_blank" rel="noopener noreferrer" className="mx-2 transition-colors duration-300 transform" >
              <FaFacebookF size={props.size} />

          </a>
          <a href="https://www.linkedin.com/company/roys-digital-media/about" target="_blank" rel="noopener noreferrer" className="mx-2 transition-colors duration-300 transform " >

              <FaLinkedinIn size={props.size}  />
          </a>
          <a href="https://www.tiktok.com/@roysdigitalmedia" target="_blank" rel="noopener noreferrer" className="mx-2 transition-colors duration-300 transform " >

              <FaTiktok size={props.size} />
          </a>

      </div>
  )
}

export default SocialIcon