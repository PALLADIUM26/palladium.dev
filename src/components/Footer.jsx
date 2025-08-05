import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white dark:bg-black py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                
                {/* Left: Signature */}
                <p className="text-sm text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Pranith Dutta — All systems stable.
                </p>

                {/* Middle: Gamer status */}
                <p className="text-sm text-blue-400 mt-2 md:mt-0 text-center">
                Status: Grinding XP | Leveling Up 🎮
                </p>

                {/* Right: Socials */}
                <div className="flex gap-6 mt-2 md:mt-0 text-xl">
                    <a href="https://github.com/PALLADIUM26" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/pranithdutta/e" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:pranithdutta26@gmail.com" className="hover:text-red-400 transition">
                        <FaEnvelope />
                    </a>
                    <a href="https://x.com/PALLADIUM_62" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                        <FaTwitter />
                    </a>
                </div>

            </div>
        </footer>
    );
}
