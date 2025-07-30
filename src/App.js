import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';

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
        <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
          <div className="w-16 h-16 border-4 border-purple-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Certifications />
      <Achievements />
      <Education />
    </div>
  )}
  </>
);
}

export default App;
