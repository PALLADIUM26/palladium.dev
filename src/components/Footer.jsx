import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaTelegram, FaDiscord, FaPinterest } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="text-white bg-black py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                
                {/* Left: Signature */}
                <p className="text-sm text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Pranith Dutta
                </p>

                {/* Middle: Gamer status */}
                <p className="text-sm text-blue-400 mt-2 md:mt-0 text-center">
                Status: Grinding XP in Witcher 3 Wild Hunt 🎮
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
                    <a href="https://discord.com/users/palladium5531" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
                        <FaDiscord />
                    </a>
                    <a href="https://t.me/pranithdutta" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
                        <FaTelegram />
                    </a>
                    <a href="https://pinterest.com/pranithdutta26" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
                        <FaPinterest />
                    </a>
                </div>

            </div>
        </footer>
    );
}
