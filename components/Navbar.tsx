"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import MobileNav from './MobileNav';
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

// no need interface specific
// interface menuItems {
//     title: string;
//     href: string;
// }

// interface MenuProps {
//     items: menuItems[];
// }


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

    return (
        <div className="sticky top-0 z-50 w-full shadow bg-primary-dark h-20">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Image width={100}
                                height={50}
                                alt="Picture of the author"
                                className='-my-2 xl:mr-32'
                                src={"/rdm_logo.png"} />
                        </Link>

                        {/* <!-- Mobile menu button --> */}
                        <div className="flex lg:hidden"
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                        >
                            <div className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400" aria-label="toggle menu">
                                {showMobileMenu ? <HiX size={30} />
                                    : <HiOutlineMenuAlt4 size={30} />}
                            </div>
                        </div>
                    </div>
                    {showMobileMenu && (
                        <MobileNav />
                    )}

                    <div className="relative inset-x-0 z-20 flex-1 mt-0 p-0 top-0  w-auto flex items-center justify-between">
                       
                        <div className="hidden capitalize text-gray-300 lg:flex pl-20 xl:pl-72  flex-row lg:items-center">

                            {menuItems?.map((item, index) => (
                                <Link
                                    className="mt-0 lg:mx-4 hover:text-gray-200"
                                    key={index}
                                    href={item.href}
                                >
                                    {item.title}
                                </Link>
                            ))}
                            <SocialIcon/>

                            <div className="flex justify-center mt-0 xl:-mr-10 w-52 ">

                                <Link
                                    href="/contact"
                                    className=" px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"                                >
                                    Inquire now!
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

