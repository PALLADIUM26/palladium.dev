import React from 'react'

export default function Certifications() {
  return (

    // <section id="certifications" className="py-16 px-6 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
    <section id="certifications" className="py-16 px-6 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-700" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { title: "Applied Machine Learning in Python", platform: "Coursera", link: "https://coursera.org/share/dbe72a2b7479af7860ccceccb5fba978" },
          { title: "Applied Plotting, Charting & Data Representation in Python", platform: "Coursera", link: "https://coursera.org/share/de873c6f82d2d093f593666e6a31acae" },
          { title: "The Structured Query Language (SQL)", platform: "Coursera", link: "https://coursera.org/share/01defdf273c1bebd6ce64df0b286061a" },
          { title: "Advanced Topics and Future Trends in Database Technologies", platform: "Coursera", link: "https://coursera.org/share/b1685b361fb71d0f711018dec80eca93" },
          { title: "Introduction to Software Engineering", platform: "Coursera", link: "https://coursera.org/share/45a039d84b838ce00c9d5ba2153e7bc3" },
          { title: "People and Soft Skills for Professional and Personal Success", platform: "Coursera", link: "https://coursera.org/share/a6e255980285e44ebc1061bdc93c8e4a" },
        ].map((cert, index) => (
          <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="h-full">
            <div className="flex flex-col justify-between h-full bg-gray-800 p-4 rounded-xl shadow transform transition duration-300 hover:rotate-[2deg] hover:shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.platform}</p>
            </div>
          </a>
          // <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          //   <a href={cert.link}><div>
          //   <h3 className="text-lg font-semibold">{cert.title}</h3>
          //   <p className="text-sm text-gray-500 dark:text-gray-400">{cert.platform}</p>
          //   </div></a>
          // </div>
        ))}
      </div>
    </section>
  );
}