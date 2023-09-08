import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
const SocialIcon = () => {
  return (
      <div className="flex justify-center lg:mt-0 lg:mx-2  ">

          <a href="https://www.instagram.com/roysdigitalmedia" target="_blank" rel="noopener noreferrer" className="mx-2 transition-colors duration-300 transform text-gray-300 hover:text-gray-300" >
              <FaInstagram />

          </a>
          <a href="https://www.facebook.com/RoysDigitalMedia" target="_blank" rel="noopener noreferrer" className="mx-2 transition-colors duration-300 transform text-gray-300 hover:text-gray-300" >
              <FaFacebookF />

          </a>
          <a href="https://www.linkedin.com/company/roys-digital-media/about" target="_blank" rel="noopener noreferrer" className="mx-2 transition-colors duration-300 transform text-gray-300 hover:text-gray-300" >

              <FaLinkedinIn />
          </a>
          <a href="https://www.tiktok.com/@roysdigitalmedia" target="_blank" rel="noopener noreferrer" className="mx-2 transition-colors duration-300 transform text-gray-300 hover:text-gray-300" >

              <FaTiktok />
          </a>

      </div>
  )
}

export default SocialIcon