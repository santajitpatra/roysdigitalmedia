import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-primary">
      <div className='flex m-auto p-20 justify-center'>
        <div className='flex md:flex-row flex-col-reverse'>
          <div className='md:w-1/2 '>
            <h2 className='text-3xl'>The solution to your marketing 	&amp; media needs.</h2>
            <p>In an increasingly digital era, a business&apos;s online presence is now an essential tool for reaching the world around them. At Roys Digital Media, we excel in elevating brands through effective digital marketing, empowering business owners to focus on their passion without concerns about their online image.
            </p>
            <p>
              Our comprehensive marketing strategies ignite consumer interest and attract attention to your business. As the world rapidly embraces digital advancements, Roys Digital Media ensures your business seamlessly integrates into the online landscape, preventing it from falling behind the curve.
            </p>
            <Link
              href="/about"
              className=" px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring focus:ring-gray-300 focus:ring-opacity-80"                                >
              about us
            </Link>
          </div>
          <div className='md:w-1/2'>
            <img src="/images/emma_about.jpg" alt="" className='rounded-t-full'/>
          </div>
        </div>
     
      </div>

    </div>
  )
}

export default HeroSection