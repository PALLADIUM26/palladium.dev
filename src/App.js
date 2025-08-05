import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Typewriter } from 'react-simple-typewriter';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,     // animation duration (ms)
      once: true,         // only animate once
    });
  }, []);

  useEffect(() => {
    // Simulate loading for 1.5 seconds (or until data is fetched)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Clean up
  }, []);

  return (
    <>
      {loading ? (
        // <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
        //   <div className="w-16 h-16 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
        // </div>

        <div className="flex flex-col items-center justify-center h-screen bg-black text-green-400 font-mono">
          <div className="relative w-20 h-20 mb-6">
            <div className="absolute inset-0 border-4 border-green-400 border-dashed rounded-full animate-spin"></div>
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <span className="text-2xl animate-pulse">⚡</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg animate-pulse tracking-wider">Booting up <span className="text-pink-500">Palladium.dev</span>...</p>
            <p className="text-sm mt-2 opacity-70">Initiating neural uplink | Please stand by</p>
            {/* <p className="text-lg tracking-wider">
              <Typewriter
                words={['Initializing...', 'Connecting to mainframe...', 'Launching portfolio...']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </p> */}
          </div>
        </div>

        
      ) : (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Certifications />
      <Achievements />
      <Education />
      <Footer />
    </div>
  )}
  </>
);
}

export default App;
