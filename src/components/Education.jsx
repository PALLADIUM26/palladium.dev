import React from 'react'

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">B.Tech in Computer Science Engineering</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
            [Your College Name], 2021 – 2025
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            CGPA: [Your CGPA if you want to show it]
            </p>
        </div>
        </section>
  );
}
