import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    name?: string;
    url?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
      <Link
          href={`${props.url}`}
          className=" px-6 py-2.5 text-sm font-medium tracking-wider text-primary-text transition-colors duration-300 transform md:w-auto focus:outline-none bg-primary-dark_l rounded-lg hover:bg-primary-dark_lh focus:ring focus:ring-gray-300 focus:ring-opacity-80"                                >
          {props.name}
      </Link>  )
}

export default Button