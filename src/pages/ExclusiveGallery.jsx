import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ExclusiveGallery() {
  return (
    <div className="relative min-h-[100dvh] bg-[#050505] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Decorativo e Atmosférico */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110 blur-xl opacity-30" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80")' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full px-6 text-center"
      >
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-yellow-500 text-xs font-black uppercase tracking-[0.4rem] mb-4">Módulo de Expansão</h2>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Acervo de Momentos Premium</h1>
            
            <div className="h-[1px] w-12 bg-neutral-700 mx-auto mb-8" />
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-10 font-light italic">
              Este módulo exclusivo de visualização em alta resolução encontra-se disponível para ativação imediata. 
              <span className="block mt-4 not-italic font-normal text-neutral-300">
                Para incluir a galeria completa e otimizada em seu projeto, sinta-se à vontade para contatar o desenvolvedor.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/"
                className="text-neutral-500 hover:text-white transition-colors duration-300 text-xs uppercase tracking-[0.25rem] font-bold py-4 px-8"
              >
                Retornar
              </Link>
              
              <a 
                href="https://wa.me/5519997928263"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-600 hover:bg-yellow-500 text-black font-black py-4 px-10 rounded-full text-[0.65rem] uppercase tracking-[0.2rem] transition-all shadow-[0_10px_25px_rgba(202,138,4,0.3)] hover:scale-105 active:scale-95"
              >
                Solicitar Ativação
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Ornamentos de Luxo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
    </div>
  );
}
