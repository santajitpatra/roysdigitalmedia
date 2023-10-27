import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'

const HeroSection = () => {
  return (
    <div className="bg-primary">
      <div className='flex m-auto py-16 justify-center md:mb-16'>
        <div className='flex md:flex-row flex-col-reverse'>
          <div className='md:w-1/2 px-10 lg:px-20'>
            <h2 className='text-3xl md:text-4xl py-10'>The solution to your marketing 	&amp; media needs.</h2>

            <p className='text-sm lg:text-lg pb-5 font-thin'>In an increasingly digital era, a business&apos;s online presence is now an essential tool for reaching the world around them. At Roys Digital Media, we excel in elevating brands through effective digital marketing, empowering business owners to focus on their passion without concerns about their online image.
            </p>
            <p className='text-sm lg:text-lg pb-5 font-thin'>
              Our comprehensive marketing strategies ignite consumer interest and attract attention to your business. As the world rapidly embraces digital advancements, Roys Digital Media ensures your business seamlessly integrates into the online landscape, preventing it from falling behind the curve.
            </p>
            <div className='pt-5'>
              <Button name='About Us' url='/about' />
            </div>         
             </div>
          <div className='md:w-1/2 px-10 lg:px-20'>
            <Image width={500} height={500} src="/images/emma_about.jpg" alt="" className='rounded-t-full w-full' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroSection