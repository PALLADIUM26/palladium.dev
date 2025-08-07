
// import React, { useState } from 'react';

// const galleryImages = [
//   { src: '/hack.jpg', alt: 'Hackathon Event' },
//   { src: '/pic1.jpg', alt: 'Family 1' },
//   { src: '/pic2.jpg', alt: 'Family 2' },
//   { src: '/art1.jpg', alt: 'Art 1' },
//   { src: '/art2.jpg', alt: 'Art 2' },
//   { src: '/setup.jpg', alt: 'Setup' },
//   { src: '/photography.jpg', alt: 'Photography' },
// ];

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <section id="gallery" className="py-16 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
//       <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {galleryImages.map((img, idx) => (
//           <div
//             key={idx}
//             className="relative group cursor-pointer overflow-hidden rounded-xl border border-gray-700 shadow-md"
//             onClick={() => setSelectedImage(img)}
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               className="object-cover h-64 w-full transform group-hover:scale-110 group-hover:rotate-1 transition duration-500 ease-in-out"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
//               <p className="text-white text-sm font-medium">{img.alt}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
//           onClick={() => setSelectedImage(null)}
//         >
//           <img
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             className="max-w-full max-h-[90vh] rounded-lg border-4 border-white shadow-xl"
//           />
//         </div>
//       )}
//     </section>
//   );
// }

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const galleryImages = [
  { src: '/hack.jpg', alt: 'Hackathon Team' },
  { src: '/art1.jpg', alt: 'Sketch 1' },
  { src: '/pic1.jpg', alt: 'Parents' },
  { src: '/pic2.jpg', alt: 'Cousins' },
  { src: '/art2.jpg', alt: 'Sketch 2' },
  { src: '/setup.jpg', alt: 'Setup' },
  { src: '/photography.jpg', alt: 'Photography' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section id="gallery" className="py-16 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>

      <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="relative group overflow-hidden rounded-lg cursor-pointer break-inside-avoid"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-medium">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-lg border-4 border-white shadow-xl"
          />
        </div>
      )}
    </section>
  );
}

