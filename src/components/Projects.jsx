const projects = [
    {
      title: "GyanLedger",
      description: "Developed a Tuition Tracker web app using React, Rest, Django and MySQL with MongoDB. Users can manage students, track payments, check monthly summaries and send reminders.",
      link: "https://github.com/PALLADIUM26/GyanLedger",
    },
    {
      title: "LoginSystem 3.0",
      description: "This is a Java-ANT-based software, with simple GUI made using JavaFX, Python and MySQL. User authentication with various integrated features- Number System Conversion and AIML.",
      link: "https://github.com/PALLADIUM26/LoginSystem3.0",
    },
    {
      title: "e-motion2.0",
      description: "Used JavaScript, Flask, TensorFlow for developing web app for facial emotion recognition. Using Deep Learning model to extract facial features and detect emotions.",
      link: "https://github.com/PALLADIUM26/e-motion2.0",
    },
    {
      title: "psy-geek",
      description: "Used JavaScript, Flask, scikit-learn for making web app for personality analysis. Using Random Forest Classifier, trained on 16pf dataset, for personality classification.",
      link: "https://github.com/PALLADIUM26/psy-geek",
    },
    {
      title: "FinTracer",
      description: "Built a web-based Finance Tracker using JavaScript, Flask and MySQL. Authenticated users track expenseincome with interactive charts and downloadable statements.",
      link: "https://github.com/PALLADIUM26/FinTracer",
    },
    {
      title: "Cork",
      description: "Cork is a lightweight, no-code platform built to streamline machine learning model creation. It removes the need for writing boilerplate code—letting users focus on building and training models using intuitive configuration steps rather than typing scripts.",
      link: "https://github.com/skwasimrazzak/Cork",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 text-gray-100" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 ">
            {projects.map((proj, i) => (
              <div key={i} className="bg-gray-700 shadow-md rounded-2xl p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-l-4 hover:border-purple-500">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="mb-3">{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-400 underline">
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  