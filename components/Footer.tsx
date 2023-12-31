import Image from 'next/image';
import React from 'react'
import SocialIcon from './Social-Icon';


export default function Footer() {

    return (
        <footer className="bg-primary-dark">
            <div className="container px-6 py-12 mx-auto">
               
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {/* 1st column */}
                   
                    <div>
                        <p className="text-lg text-primary-text">
                            Contact Us
                        </p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a
                                href="mailto:emma@roysdigitalmedia.com?subject=Inquiry"
                                className=" transition-colors duration-300 text-primary-text  hover:underline hover:text-primary-text_h"
                            >
                                emma@roysdigitalmedia.com
                            </a>
                            <a
                                href="tel:8323160798"
                                className=" transition-colors duration-300 text-primary-text  hover:underline hover:text-primary-text_h"
                            >
                                832.316.0798
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg  text-primary-text">
                            Office Location
                        </p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a
                                href="#"
                                className=" transition-colors duration-300 text-primary-text  hover:underline hover:text-primary-text_h"
                            >
                                1334 Brittmoore Road<br />
                                Houston, TX 77043
                            </a>
                        </div>
                    </div>
                    <div className="sm:col-span-2 lg:px-10">
                        <h1 className="max-w-lg text-4xl  tracking-tight  xl:text-2xl text-primary-text pb-6">
                            The Roys Review
                        </h1>
                        <p className='text-primary-text '>Join our monthly newsletter to get the inside scoop on all things marketing & social media!
                        </p>
                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input
                                id="email"
                                type="text"
                                className="px-4 py-2  border rounded-md bg-primary-dark_l text-gray-300 border-primary-dark_lh focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Email Address"
                            />
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-primary-dark_l rounded-lg hover:bg-primary-dark_lh focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-6 md:my-8 border-primary-dark_l" />
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
                    <div className="flex -mx-2 text-primary-light">
                        <SocialIcon />
                    </div>
                </div>
            </div>
        </footer>

    )
}
