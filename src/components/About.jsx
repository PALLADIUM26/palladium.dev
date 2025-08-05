export default function About() {
    return (
      // <section id="about" className="py-20 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100" data-aos="fade-up">
      // <section id="about" className="py-20 bg-gray-950 text-gray-100" data-aos="fade-up">
      <section id="about" className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-100" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          {/* <p className="text-lg">
            Final-year B. Tech CSE student with a growing interest in software development, competitive programming, and the dynamic field of AI/ML. Experienced as a backend developer in collaborative team projects, and actively involved in college technical clubs - fueling my drive to learn, build, and innovate.  I love building projects that solve real problems and learning new tech along the way.
          </p> */}
          <p className="text-lg leading-relaxed tracking-wide">
            <span className="block mb-4">
              I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400">final-year B. Tech CSE student</span> with a deep curiosity for all things tech — especially software development, competitive programming, and the ever-evolving world of <span className="font-semibold text-purple-600 dark:text-purple-400">AI/ML</span>.
            </span>
            <span className="block mb-4">
              I’ve worked as a <span className="font-semibold text-green-600 dark:text-green-400">backend developer</span> in team projects and have actively contributed to technical clubs in college — experiences that shaped my love for collaboration and continuous learning.
            </span>
            <span className="block">
              I enjoy building projects that solve real-world problems and love exploring new tech stacks along the way. <span className="italic text-sm text-gray-500 dark:text-gray-400">("Twerks" is my debugging victory cry.)</span>
            </span>
          </p>
        </div>
      </section>
    );
  }
