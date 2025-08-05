import React from 'react'

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-gray-100 dark:bg-gray-950" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <ul className="space-y-4 max-w-3xl mx-auto">
          <li>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">B.Tech in Computer Science Engineering</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                Sister Nivedita University, 2022 – 2026
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                CGPA: 8.4
                </p>
            </div>
          </li>
          <li>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">Class XII (CBSE)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                Abhinav BHarati High School, 2020 – 2022
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                90%
                </p>
            </div>
          </li>
          <li>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold">Class X (ICSE)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                Ram Mohan Mission High School, 2008 – 2020
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                93%
                </p>
            </div>
          </li>
        </ul>
        </section>
  );
}
