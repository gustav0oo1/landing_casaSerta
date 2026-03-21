import React from 'react';
import { motion } from 'framer-motion';

export default function Events() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const eventos = [
    {
      titulo: 'Feijoada da Paioça',
      desc: 'O clássico encontro com muita música boa, comida tropeira e os maiores artistas.',
      img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop' // Placeholder Feijoada/Comida
    },
    {
      titulo: 'Festa do Branco',
      desc: 'Tradição e elegância na noite mais clara e animada de Joaquim Egídio.',
      img: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop' // Placeholder Party
    },
    {
      titulo: 'Paiocinha do Amor',
      desc: 'O clima perfeito de romance e alegria com as melhores duplas sertanejas.',
      img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop' // Placeholder Romance/Show
    }
  ];

  return (
    <section id="eventos" className="relative py-24 px-6 md:px-12 bg-neutral-950 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-[0.65rem] font-bold tracking-[0.3em] text-red-500 uppercase mb-4 block">
            Nossos Clássicos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white tracking-wide">
            Eventos <span className="text-red-500 italic">Temáticos</span>
          </h2>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A Paioça do Caboclo firmou sua característica de lugar versátil e se consagra com eventos temáticos lendários que já fazem parte do calendário dos apaixonados pelo sertanejo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {eventos.map((evento, idx) => (
            <motion.div
              key={evento.titulo}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.15 } }
              }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-900/50 transition-colors duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={evento.img} 
                  alt={evento.titulo} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{evento.titulo}</h3>
                <p className="text-xs text-neutral-400 line-clamp-2">{evento.desc}</p>
                
                <div className="mt-4 flex items-center gap-2 text-red-500 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Ver Fotos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
