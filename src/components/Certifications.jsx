import React from 'react'

export default function Certifications() {
  return (

<section id="certifications" className="py-16 px-6 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { title: "Applied Machine Learning in Python", platform: "Coursera" },
      { title: "Introduction to Software Engineering", platform: "Coursera" },
      { title: "Advanced Topics in Databases", platform: "Coursera" },
      { title: "Soft Skills for Professional Success", platform: "Coursera" },
      { title: "SQL for Data Science", platform: "Coursera" },
    ].map((cert, index) => (
      <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold">{cert.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.platform}</p>
      </div>
    ))}
  </div>
</section>
  );
    }