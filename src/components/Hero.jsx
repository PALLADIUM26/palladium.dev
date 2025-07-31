import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4" id="hero">
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I'm <span className="text-blue-400">Pranith</span>
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl max-w-2xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        I build full-stack projects, explore AI, and make things that twerk. Let’s create something awesome together.
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        View Projects
      </motion.a>
    </section>
  )
}
