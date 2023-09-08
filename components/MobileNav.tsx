"use client"
import Link from 'next/link'
import React from 'react'
import SocialIcon from './Social-Icon';


const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]
export default function MobileNav() {

  return (
    <div className="absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 mt-4 transition-all duration-300 ease-in-out bg-gray-900 h-screen">
      <div className="flex flex-col capitalize text-gray-300 ">

        {menuItems?.map((item, index) => (
          <Link
            className="mt-2 transition-colors duration-300 transform  hover:text-gray-200"
            key={index}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}

       <div className='mt-10'>
          <SocialIcon />
       </div>

        <div className="flex justify-center mt-6  ">

          <Link
            href="/contact"
            className="w-auto px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Inquire now!
          </Link>
        </div>
      </div>


    </div>
  )
}
