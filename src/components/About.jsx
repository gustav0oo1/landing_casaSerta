import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="sobre" className="relative py-24 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Coluna Vídeo */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-yellow-900/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <figure className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* O vídeo agora é nativo, forçado a tocar silenciosamente e bloqueado para cliques */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full aspect-video object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 pointer-events-none scale-[1.05]"
            >
              <source src="/img/video_about.mp4" type="video/mp4" />
            </video>
            {/* Overlay sutil estilo filme */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none mix-blend-overlay" />
          </figure>
        </motion.div>

        {/* Coluna Texto */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="h-[1px] w-12 bg-yellow-600 block" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white tracking-wide">
              Nossa <span className="text-yellow-500 italic">Essência</span>
            </h2>
          </div>

          <div className="text-neutral-300 space-y-5 leading-relaxed font-light text-sm md:text-base lg:text-lg">
            <p>
              A Paioça do Caboclo, em Joaquim Egídio, distrito de Campinas, se mantém como uma casa sertaneja de sucesso e tem orgulho de tantos momentos inesquecíveis nestes 16 anos de história.
            </p>
            <p>
              Inaugurada em 14 de setembro de 2007, é considerada uma das principais baladas sertanejas do interior de São Paulo e chama atenção pelo contato direto com a natureza e decoração rústica.
            </p>
            <p>
              Desde 2010 recebe grandes nomes da música sertaneja, como Chitãozinho e Xororó, Zezé di Camargo e Luciano, Bruno e Marrone, Jorge e Mateus, Luan Santana, entre outros. Além desses, artistas locais animam as tradicionais e estreladas noites de sexta-feira na rota turística de Joaquim Egídio.
            </p>
          </div>

          <Link 
            to="/cardapio" 
            className="mt-4 self-start relative overflow-hidden rounded-full border border-yellow-700 text-yellow-500 font-bold py-3 px-8 text-[0.65rem] uppercase tracking-[0.25em] transition-all hover:bg-yellow-700/10 active:scale-95 group flex items-center justify-center text-center"
          >
            Descobrir Experiência Gastronômica
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
