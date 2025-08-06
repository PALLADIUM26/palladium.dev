// const skills = ['Java', 'Python', 'React', 'MySQL', 'MongoDB', 'Flask', 'Django', 'Git', 'TailwindCSS'];
const skills = [
  '💻 Java',
  '🐍 Python',
  '⚛️ React',
  '🛢 MySQL',
  '🍃 MongoDB',
  '🌶 Flask',
  '🕸 Django',
  '🔧 Git'
];

export default function Skills() {
  return (
    // <section id="skills" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" data-aos="fade-up">
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-100" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full shadow-md transform transition duration-300 hover:scale-105 hover:rotate-[1deg]"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
            >
              {skill}
            </span>
            // <span key={i} className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full">
            //   {skill}
            // </span>
          ))}
        </div>
      </div>
    </section>
  );
}
