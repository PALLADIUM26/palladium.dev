// src/components/Skills.jsx
const skills = ['Java', 'Python', 'React', 'MySQL', 'MongoDB', 'Flask', 'Django', 'Git', 'TailwindCSS'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span key={i} className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
