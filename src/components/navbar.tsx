import React, { useState } from 'react';
import logo from '../assets/logo.png';
import logo2 from '../assets/shopping_bag.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-24 h-auto" />
            </div>

            {/* Hamburger menu */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Navigation Links */}
            <div className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-16 items-center ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                <a href="#" className="text-gray-700 hover:text-brown-800">About us</a>
                <a href="#" className="text-gray-700 hover:text-brown-800">Furniture</a>
                <a href="#" className="text-gray-700 hover:text-brown-800">Partnerships</a>
                <a href="#" className="text-gray-700 hover:text-brown-800">Contact</a>
            </div>

            <div className="hidden md:flex items-center space-x-2">
                <button className="text-black px-4 py-2 rounded-md hover:bg-green-400" style={{ backgroundColor:'#E5F0B6' }}>Sign Up</button>
                <button className="bg-brown p-2 rounded-md">
                    <img src={logo2} alt="Cart" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;