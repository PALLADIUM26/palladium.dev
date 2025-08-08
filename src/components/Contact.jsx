// export default function Contact() {
//     return (
      
//       // <section id="contact" className="py-20 bg-gray-700 text-gray-100">
//       <section id="contact" className="py-20 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 text-gray-100">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Say Hello</h2>
//           <p className="mb-4">Want to collaborate or just say hi? Drop me a message!</p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="mailto:pranithdutta26@gmail.com?subject=Let's Connect&body=Hey Pranith,"
//               className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
//             >
//               Open Mail App
//             </a>

//             <a
//               href="https://mail.google.com/mail/?view=cm&to=pranithdutta26@gmail.com&su=Let's Connect&body=Hey Pranith,"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
//             >
//               Use Gmail
//             </a>

//             {/* <a
//               href="#contact-form"
//               className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
//             >
//               Fill Contact Form
//             </a> */}
//           </div>
//         </div>
//       </section>
//     );
//   }

// import React from 'react';
// import { FaEnvelope, FaGoogle } from 'react-icons/fa';

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700 text-gray-100"
//     >
      
//       <div className="max-w-3xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">Say Hello</h2>
//         <div className="bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">
//           {/* Profile Image */}
//           <img
//             src="/dp.jpg"
//             alt="Pranith Dutta"
//             className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
//           />

//           {/* Info */}
//           <div className="text-center md:text-left flex-1">
//             <h3 className="text-2xl font-bold text-white mb-2">Pranith Dutta</h3>
//             <p className="text-indigo-400 mb-4">Full Stack Developer | AI/ML Developer | Tech Comrade</p>
//             <p className="text-gray-300 mb-6">
//               Want to collaborate or just say hi? Drop me a message!
//             </p>

//             <div className="flex flex-wrap justify-center md:justify-start gap-4">
//               <a
//                 href="mailto:pranithdutta26@gmail.com?subject=Let's Connect&body=Hey Pranith,"
//                 className="inline-flex items-center bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
//               >
//                 <FaEnvelope className="mr-2" /> Open Mail App
//               </a>

//               <a
//                 href="https://mail.google.com/mail/?view=cm&to=pranithdutta26@gmail.com&su=Let's Connect&body=Hey Pranith,"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
//               >
//                 <FaGoogle className="mr-2" /> Use Gmail
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGoogle } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-800 via-gray-500 to-gray-600 text-gray-100 flex flex-col items-center"
      data-aos="fade-up"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-white mb-10">
        Say Hello
      </h2>

      {/* Contact Card */}
      <motion.div
        initial={{ rotateX: 0, rotateY: 0 }}
        whileHover={{
          rotateX: 5,
          rotateY: -5,
          transition: { type: 'spring', stiffness: 100 },
        }}
        className="card-glassy backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-3xl p-6 sm:p-10 w-[95%] max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 hover:shadow-indigo-700"
        // className="card-glassy backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 w-[90%] sm:w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 hover:shadow-indigo-700"
        // className="card-glassy backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-4xl w-full mx-6 flex flex-col md:flex-row items-center gap-10 hover:shadow-indigo-700"
      >
        {/* Profile Image */}
        <motion.img
          whileHover={{ rotate: 6 }}
          transition={{ type: 'spring', stiffness: 100 }}
          src="/dp.jpg"
          alt="pd"
          className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
        />

        {/* Info */}
        <div className="text-center md:text-left flex-1">
          <h3 className="text-2xl font-bold text-indigo-950 mb-2">Pranith Dutta</h3>
          <p className="text-indigo-100 text-lg mb-4">
            Full Stack Developer | AI/ML Developer | Tech Comrade
          </p>
          <p className="text-gray-950 mb-6">
            Want to collaborate or just say hi? Drop me a message!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="mailto:pranithdutta26@gmail.com?subject=Let's Connect&body=Hey Pranith,"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full shadow-md transition"
            >
              <FaEnvelope /> Open Mail App
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=pranithdutta26@gmail.com&su=Let's Connect&body=Hey Pranith,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full shadow-md transition"
            >
              <FaGoogle /> Use Gmail
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
