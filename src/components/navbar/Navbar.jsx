import React from 'react'
import Logo from '../../assets/logo.png'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <motion.header
    initial={{opacity: 0, y: -100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.6}}
    >

        <div className='container mx-auto py-5 flex items-center justify-items-center justify-between'>
            {/* Logo Section */}
            <div>
                <img src={Logo} alt='' className='w-40'/>
            </div>
            {/* Navlinks Section */}
            <ul className='hidden md:flex items-center gap-5'>
                <li>
                    <a href='#'>Products</a>
                </li>
                <li>
                    <a href='#'>Custome Stories </a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Blogs</a>
                </li>
            </ul>
            {/* Button  Section */}
            <button className='border border-gray-500 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white transform duration-300 '>Get In Touch</button>
        </div>
    </motion.header>
  )
}

export default Navbar