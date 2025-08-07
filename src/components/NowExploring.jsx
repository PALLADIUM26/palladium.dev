import React from 'react';

export default function NowExploring() {
  return (
    <section id="now-exploring" className="py-16 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">What I’m Exploring Now</h2>
      <div className="max-w-3xl mx-auto text-lg space-y-4">
        <p>
          🧠 Currently researching about <strong>Continual Learning</strong> in <strong>Spiking Neural Networks</strong> reducing <strong>Catastrophic Forgetting</strong>.
        </p>
        <p>
          🔍 Also spending time learning <strong>React, TailwindCSS & MongoDB</strong> for project use.
        </p>
        <p>
          📚 Preparing for <strong>GATE</strong>.
        </p>
        {/* <p>
          🎮 On the creative side, experimenting with building small browser-based games using <strong>Pygame</strong> and <strong>Three.js</strong>.
        </p> */}
      </div>
    </section>
  );
}
