import React from 'react';

export default function MiniProjects() {
  const projects = [
    {
      name: 'Sylvia',
      desc: 'Number System Converter',
      tools: ['HTML', 'JavaScript'],
    },
    {
      name: 'snaky',
      desc: 'Snake Game',
      tools: ['Python', 'PyGame'],
    },
    {
      name: 'translaTHOR',
      desc: 'English to Bengali Translator',
      tools: ['HuggingFace Transformers'],
    },
    {
      name: 'TicTacToe',
      desc: 'CLI based game',
      tools: ['Python3'],
    },
  ];

  return (
    // <section id="mini-projects" className="py-16 px-6 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white">
    <section id="mini-projects" className="py-16 px-6 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 text-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-center">Mini Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-sm text-gray-200">{proj.desc}</p>
            <p className="text-sm text-gray-200 mt-2">Built with: {proj.tools.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
