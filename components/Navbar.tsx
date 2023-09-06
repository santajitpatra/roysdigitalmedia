"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

// no need interface specific
interface menuItems {
    title: string;
    href: string;
}

interface MenuProps {
    items: menuItems[];    
}


const Navbar: React.FC<MenuProps> = ({ items }) => {
    return (
        <div className=" shadow bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between">
                        <a href="/">
                            <Image width={80}
                                height={50}
                                alt="Picture of the author"
                                className='w-auto h-auto -my-2'
                                src={"/rdm_logo.png"} />
                        </a>

                        {/* <!-- Mobile menu button --> */}
                        <div className="flex md:hidden">
                            <div className="text-gray-500 dark:text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-label="toggle menu">
                                <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>

                                <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between">
                        <div className="flex flex-col capitalize text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">

                            
                            {menuItems?.map((item, index) => (
                                <Link
                                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                                    key={index}
                                    href={item.href}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                         
                            {/* <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
                                <img className='w-5 text-green-500 ' src="/svg/instagram.svg" alt="img" />
                            </a>   */}
                            
                            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#3f5a88", }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

