const projects = [
    {
      title: "GyanLedger",
      description: "Tuition manager app with React + Django + MongoDB.",
      link: "https://github.com/yourusername/gyanledger",
    },
    {
      title: "LoginSystem 3.0",
      description: "JavaFX + ML-powered login and profile management.",
      link: "https://github.com/yourusername/loginsystem",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 ">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-l-4 hover:border-purple-500">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="mb-3">{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  