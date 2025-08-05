// import React from 'react'
// import { motion } from 'framer-motion'

// export default function Hero() {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center text-center px-4" id="hero">
//       <motion.h1
//         className="text-5xl sm:text-6xl font-extrabold mb-4"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Hey, I'm <span className="text-blue-400">Pranith</span>
//       </motion.h1>
//       <motion.p
//         className="text-lg sm:text-xl max-w-2xl text-gray-300"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//       >
//         💻 CSE Junior 😎 Competitive Coder 🤖 AI/ML dev 🧑🏻‍💻 Backend dev at Shiftux ☕︎ Software dev using Java 🤩 Hack4Bengal- 2nd Runner Up in Solana track
//       </motion.p>
//       <motion.a
//         href="#projects"
//         className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//       >
//         View Projects
//       </motion.a>
//     </section>
//   )
// }

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="h-screen relative flex flex-col justify-center items-center text-center px-4 overflow-hidden"
      id="hero"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse animation-delay-300" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-white">
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
          💻 CSE Junior 😎 Competitive Coder 🤖 AI/ML dev 🧑🏻‍💻 Backend dev at Shiftux ☕︎ Software dev using Java 🤩 Hack4Bengal – 2nd Runner Up (Solana)
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
      </div>
    </section>
  )
}

