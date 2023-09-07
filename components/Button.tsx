import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
      <Link
          href="/login"
          className=" px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"                                >
          Inquire now!
      </Link>
  )
}

export default Button