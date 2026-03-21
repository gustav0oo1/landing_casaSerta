import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const images = [
    "img/gallery/1ga.webp",
    "img/gallery/2ga.webp",
    "img/gallery/3ga.webp",
    "img/gallery/4ga.webp",
    "img/gallery/5ga.webp",
    "img/gallery/6ga.webp",
    "img/gallery/7ga.webp",
    "img/gallery/8ga.webp",
  ];

  return (
    <section id="galeria" className="relative py-24 px-4 bg-black overflow-hidden border-t border-neutral-900">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="text-[0.65rem] font-bold tracking-[0.3em] text-neutral-500 uppercase mb-4 block">
            Nossa Casa
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white tracking-wide">
            A Magia da <span className="text-yellow-500 italic">Paioça</span>
          </h2>
        </motion.div>

        {/* CSS Masonry/Grid Aproximation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 w-full px-2">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: idx * 0.05 } }
              }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-900 cursor-zoom-in"
            >
              <img 
                src={src} 
                alt={`Momentos Paioça ${idx + 1}`} 
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transform scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <Link 
          to="/galeria" 
          className="mt-12 rounded-full border border-neutral-700 text-neutral-400 font-bold py-3 px-10 text-[0.65rem] uppercase tracking-[0.25em] transition-all hover:bg-neutral-800 hover:text-white hover:border-yellow-500/50 active:scale-95 text-center"
        >
          Acessar o Acervo de Momentos Exclusivos
        </Link>
      </div>
    </section>
  );
}
