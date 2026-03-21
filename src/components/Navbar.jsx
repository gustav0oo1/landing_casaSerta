import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: 'Home', href: '/#home', isHash: true },
    { name: 'Sobre', href: '/#sobre', isHash: true },
    { name: 'Cardápio', href: '/cardapio' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Eventos', href: '/#eventos', isHash: true },
    { name: 'Casa Paioça', href: 'https://casapaioca.com.br/', external: true },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full flex justify-between items-center p-5 md:p-6 lg:padding-x-10 lg:py-8 z-[100] bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px]"
      >
        {/* Esquerda: Logo Sagrado */}
        <Link to="/" className="flex flex-col drop-shadow-md cursor-pointer group z-[110]">
          <span className="font-serif font-bold text-lg md:text-2xl tracking-widest text-white group-hover:text-yellow-500 transition-colors duration-300">
            PAIOÇA
          </span>
          <span className="text-[0.5rem] md:text-[0.6rem] tracking-[0.3em] uppercase text-neutral-400 -mt-1 group-hover:text-neutral-300">
            do Caboclo
          </span>
        </Link>

        {/* Centro: Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-10">
          {menuLinks.map((item) => (
            <li key={item.name} className="relative group overflow-hidden">
              {item.external ? (
                <a 
                  href={item.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : item.isHash ? (
                <HashLink 
                  smooth 
                  to={item.href}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.name}
                </HashLink>
              ) : (
                <Link 
                  to={item.href}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </li>
          ))}
        </ul>

        {/* Direita: Botão de Ingressos e Hamburger */}
        <div className="flex items-center gap-4 z-[110]">
          {/* Botão Mobile/Desktop de Ingressos */}
          <a 
            href="https://wa.me/5519997928263"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-full bg-gradient-to-b from-red-600 to-red-800 text-white font-bold py-2 px-4 md:py-2.5 md:px-8 text-[0.6rem] md:text-xs uppercase tracking-widest shadow-[0_5px_15px_rgba(220,38,38,0.3)] transition-all hover:scale-105 active:scale-95 group flex items-center"
          >
            <span className="relative z-10">Ingressos</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine pointer-events-none" />
          </a>

          {/* Botão Hamburger (Apenas Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full block"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#0c0c0c] flex flex-col items-center justify-center lg:hidden"
          >
            {/* Background Texture Subtil */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
            
            <ul className="flex flex-col items-center gap-6 w-full max-w-[280px] relative z-10">
              {menuLinks.map((item, idx) => (
                <React.Fragment key={item.name}>
                  <motion.li 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className="w-full text-center"
                  >
                    {item.external ? (
                      <a 
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-serif font-bold tracking-[0.2em] uppercase text-white hover:text-yellow-500 transition-colors block py-2"
                      >
                        {item.name}
                      </a>
                    ) : item.isHash ? (
                      <HashLink 
                        smooth 
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-serif font-bold tracking-[0.2em] uppercase text-white hover:text-yellow-500 transition-colors block py-2"
                      >
                        {item.name}
                      </HashLink>
                    ) : (
                      <Link 
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-serif font-bold tracking-[0.2em] uppercase text-white hover:text-yellow-500 transition-colors block py-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                  {idx < menuLinks.length - 1 && (
                    <motion.div 
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.15 + idx * 0.1 }}
                      className="w-full h-[1px] bg-neutral-800/40"
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>

            {/* Redes Sociais no Menu */}
            <div className="absolute bottom-12 flex gap-6">
              {['instagram', 'facebook', 'youtube'].map((social, idx) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com/paiocadocaboclo`}
                  target="_blank"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center"
                >
                  <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social}.svg`} className="w-5 h-5 filter invert opacity-50" alt={social} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
