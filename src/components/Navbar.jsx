import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-[10rem] bg-gray-dark-second">
    <div className="p-4 bg-pinky">
      <img src="" alt="Logo" />
    </div>
    <div className="py-4 flex-col justify-between gap-5">
      <Link
        to="/"
        className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-pinky transition-[transform, colors] duration-200 ease-in-out hover:translate-x-2">
        Home
      </Link>
      <Link
        to="/about"
        className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-pinky transition-[transform, colors] duration-200 ease-in-out hover:translate-x-2">
        About Me
      </Link>
      <Link
        to="/projects"
        className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-pinky transition-[transform, colors] duration-200 ease-in-out hover:translate-x-2">
        My Projects
      </Link>
      <Link
        to="/contact"
        className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-pinky transition-[transform, colors] duration-200 ease-in-out hover:translate-x-2">
        Contact
      </Link>
    </div>
  </div>
  )
}

export default Navbar