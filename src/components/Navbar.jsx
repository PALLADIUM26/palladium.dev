import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-black bg-opacity-80 fixed top-0 z-50">
      <h1 className="text-2xl font-bold tracking-tight">Pranith Dutta</h1>
      <ul className="flex gap-6 text-sm uppercase font-semibold">
        <li><a href="#about" className="mx-2 hover:text-blue-400 transition hover:underline">About</a></li>
        <li><a href="#projects" className="mx-2 hover:text-blue-400 transition hover:underline">Projects</a></li>
        <li><a href="#contact" className="mx-2 hover:text-blue-400 transition hover:underline">Contact</a></li>
        <li><a href="#certifications" className="mx-2 hover:text-blue-400 transition hover:underline">Certifications</a></li>
        <li><a href="#achievements" className="mx-2 hover:text-blue-400 transition hover:underline">Achievements</a></li>
        <li><a href="#education" className="mx-2 hover:text-blue-400 transition hover:underline">Education</a></li>
      </ul>
    </nav>
  )
}
