// src/components/Contact.jsx
export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="mb-4">Want to collaborate or just say hi? Drop me a message!</p>
          <a
            href="mailto:your@email.com"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Say Hello
          </a>
        </div>
      </section>
    );
  }
  