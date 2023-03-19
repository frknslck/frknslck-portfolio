import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
// import logo2 from "../assets/logo2.png"

const Navbar = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-[12rem] bg-main-second">
    <div className="overflow-hidden">
      <img src={logo} alt="Logo" className='scale-150'/>
    </div>
    <div className="py-4 flex-col justify-between gap-5">
      <Link
        to="/"
        className="block px-4 py-2 text-white hover:text-black hover:bg-bright transition-[transform, colors] duration-200 ease-in-out hover:translate-x-2">
        Home
      </Link>
      <Link
        to="/about"
        className="block px-4 py-2 text-white hover:text-black hover:bg-bright transition-[transform, colors] duration-200 ease-in-out hover:translate-x-2">
        About Me
      </Link>
      <Link
        to="/projects"
        className="block px-4 py-2 text-white hover:text-black hover:bg-bright transition-[transform, colors] duration-200 ease-in-out hover:translate-x-2">
        My Projects
      </Link>
      <Link
        to="/contact"
        className="block px-4 py-2 text-white hover:text-black hover:bg-bright transition-[transform, colors] duration-200 ease-in-out hover:translate-x-2">
        Contact
      </Link>
    </div>
  </div>
  )
}

export default Navbar