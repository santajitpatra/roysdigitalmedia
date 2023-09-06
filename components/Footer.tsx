import Image from 'next/image';
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";


export default function Footer() {

    return (
        <footer className=" bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {/* 1st column */}
                    <div>
                        <p className="font-semibold text-white">
                            Quick Link
                        </p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a
                                href="#"
                                className=" transition-colors duration-300 text-gray-300 hover:underline hover:text-blue-500"
                            >
                                Home
                            </a>
                            
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold  text-white">
                            Industries
                        </p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a
                                href="#"
                                className=" transition-colors duration-300 text-gray-300  hover:underline hover:text-blue-500"
                            >
                                Retail &amp; E-Commerce
                            </a> 
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight  xl:text-2xl text-white">
                            The Roys Review
                        </h1>
                        <p className='text-white'>Join our monthly newsletter to get the inside scoop on all things marketing & social media!
                        </p>
                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input
                                id="email"
                                type="text"
                                className="px-4 py-2  border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Email Address"
                            />
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-6 md:my-8 border-gray-700" />
                <div className="flex items-center justify-between">
                    <a href="#">
                        <Image
                            className=""
                            src={"/rdm_logo.png"}
                            width={80}
                            height={50}
                            alt=""
                        />
                    </a>
                    <div className="flex -mx-2">
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
                </div>
            </div>
        </footer>

    )
}
