import React from 'react'
import Logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* brand info */}
        <div className='space-y-4'>
          <img src={Logo} alt="" className='w-40'/>
          <p className='text-gray-400 md:max-w-[400px]'>Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Mollitia blanditiis fugiat vitae corporis.
          </p>
        </div>
        {/* social icons */}
        <div className='flex space-x-6'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className='text-blue-600 hover:text-blue-800 duration-300 text-2xl'/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-pink-600 hover:text-pink-800 duration-300 text-2xl'/>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-blue-700 hover:text-blue-900 duration-300 text-2xl'/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer