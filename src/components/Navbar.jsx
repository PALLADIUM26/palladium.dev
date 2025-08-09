import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  // const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <>
      <li><a onClick={() => setMenuOpen(false)} href="#about" className="mx-2 hover:text-blue-400 transition hover:underline">About</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#skills" className="mx-2 hover:text-blue-400 transition hover:underline">Skills</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#projects" className="mx-2 hover:text-blue-400 transition hover:underline">Projects</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#contact" className="mx-2 hover:text-blue-400 transition hover:underline">Contact</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#mini-projects" className="mx-2 hover:text-blue-400 transition hover:underline">MiniProjects</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#certifications" className="mx-2 hover:text-blue-400 transition hover:underline">Certifications</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#achievements" className="mx-2 hover:text-blue-400 transition hover:underline">Achievements</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#education" className="mx-2 hover:text-blue-400 transition hover:underline">Education</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#now-exploring" className="mx-2 hover:text-blue-400 transition hover:underline">Now Exploring</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#gallery" className="mx-2 hover:text-blue-400 transition hover:underline">Gallery</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="#interests" className="mx-2 hover:text-blue-400 transition hover:underline">Interests</a></li>
      <li><a onClick={() => setMenuOpen(false)} href="http://palladium-batcave.netlify.app" className="mx-2 hover:text-blue-400 transition hover:underline">Enter BatMode</a></li>
    </>
  )
  // ="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-black bg-opacity-80 fixed top-0 z-50">
      <h1 className="text-2xl font-bold tracking-tight">Pranith Dutta</h1>
      
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-sm uppercase font-semibold">
        {navLinks}
      </ul>

      {/* Hamburger Icon */}
      <div className={`md:hidden text-2xl cursor-pointer ${
        menuOpen ? 'fixed top-4 right-6 z-[999]' : 'z-50'
      }`}onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-white text-lg font-semibold uppercase transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks}
      </div>
      {/* {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-4 py-6 text-sm uppercase font-semibold z-40">
          {navLinks}
        </ul>
      )} */}
    </nav>
  )
}
