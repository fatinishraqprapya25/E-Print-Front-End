import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { NavLink } from "react-router-dom"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [userDropdownOpen, setUserDropdownOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen)

    return (
        <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between relative">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2">
                <div className="bg-blue-500 p-2 rounded">
                    <MdOutlineScreenshotMonitor className="text-white font-bold" />
                </div>
                <h1 className="font-bold text-lg">E-Print</h1>
            </div>

            {/* Nav links - Desktop */}
            <nav className="hidden md:flex gap-6 font-medium">
                <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
                <NavLink to="/shop" className="hover:text-blue-500">Shop</NavLink>
                <NavLink to="/about" className="hover:text-blue-500">About</NavLink>
                <NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink>
            </nav>

            {/* Right: Hamburger + User */}
            <div className="flex items-center gap-4">
                {/* Hamburger for mobile */}
                <button className="md:hidden text-2xl" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Profile dropdown */}
                <div className="relative">
                    <button
                        onClick={toggleUserDropdown}
                        className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300"
                    >
                        <FaUserCircle className="text-xl" />
                        <span className="font-medium hidden sm:inline">User</span>
                        <span className="text-sm hidden sm:inline">▼</span>
                    </button>

                    {userDropdownOpen && (
                        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50">
                            <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setUserDropdownOpen(false)}>Profile</NavLink>
                            <NavLink to="/dashboard" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setUserDropdownOpen(false)}>Dashboard</NavLink>
                            <NavLink to="/orders" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setUserDropdownOpen(false)}>Orders</NavLink>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Nav Links */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-40">
                    <NavLink to="/" className="hover:text-blue-500" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/shop" className="hover:text-blue-500" onClick={toggleMenu}>Shop</NavLink>
                    <NavLink to="/about" className="hover:text-blue-500" onClick={toggleMenu}>About</NavLink>
                    <NavLink to="/contact" className="hover:text-blue-500" onClick={toggleMenu}>Contact</NavLink>
                </div>
            )}
        </header>
    )
}

export default Header
