import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header>
        <div className='container py-3'>
            {/* Logo Section */}
            <div>
                <img src={Logo} alt='' className='w-36'/>
            </div>
            {/* Navlinks Section */}
            <ul>
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
            <button>Get In Touch</button>
        </div>
    </header>
  )
}

export default Navbar