import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function GastronomicPortal() {
  return (
    <div className="relative min-h-[100dvh] bg-[#050505] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Decorativo e Atmosférico */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110 blur-xl opacity-20" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80")' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full px-6 text-center"
      >
        <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-12 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.253 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h2 className="text-red-500 text-xs font-black uppercase tracking-[0.4rem] mb-4">Funcionalidade Opcional</h2>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight font-heading">Portal Gastronômico Digital</h1>
            
            <div className="h-[1px] w-12 bg-neutral-800 mx-auto mb-8" />
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-10 font-light italic">
              Esta sofisticada ferramenta de cardápio digital encontra-se preparada para implementação neste projeto. 
              <span className="block mt-4 not-italic font-normal text-neutral-300">
                Para oferecer a experiência gastronômica completa e interativa para seu negócio, entre em contato com o desenvolvedor.
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
                className="bg-red-600 hover:bg-red-500 text-white font-black py-4 px-10 rounded-full text-[0.65rem] uppercase tracking-[0.2rem] transition-all shadow-[0_10px_25px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95"
              >
                Solicitar Implementação
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Ornamentos de Luxo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
    </div>
  );
}
