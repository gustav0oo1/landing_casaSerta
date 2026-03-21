import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <footer id="contato" className="relative bg-[#050505] pt-20 pb-10 px-6 md:px-12 border-t border-neutral-900 overflow-hidden">
        
        {/* Glow Dourado de Fundo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-yellow-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Bloco 1: Marca */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-4">
              <div className="flex flex-col drop-shadow-md cursor-pointer group w-max">
                <span className="font-serif font-bold text-2xl tracking-widest text-white group-hover:text-yellow-500 transition-colors duration-300">
                  PAIOÇA
                </span>
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-neutral-400 -mt-1 group-hover:text-neutral-300">
                  do Caboclo
                </span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mt-2">
                O Cenário Perfeito para Eventos em Campinas. A melhor Casa Sertaneja do interior de SP.
              </p>
            </motion.div>

            {/* Bloco 2: Contatos */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } } }} className="flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">Contato</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-sm text-neutral-400 group cursor-pointer">
                  <span className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-yellow-600 group-hover:border-yellow-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <span className="group-hover:text-white transition-colors">(19) 98458-2142</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-400 group cursor-pointer">
                  <span className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-yellow-600 group-hover:border-yellow-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <span className="group-hover:text-white transition-colors">eventos@paioca.com.br</span>
                </li>
              </ul>
            </motion.div>

            {/* Bloco 3: Endereço */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }} className="flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">Endereço</h3>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Paio%C3%A7a+do+Caboclo+Estrada+das+Cabras+Km+5.5+Joaquim+Eg%C3%ADdio+Campinas+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-neutral-400 group focus:outline-none"
              >
                <span className="w-8 h-8 shrink-0 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-yellow-600 group-hover:border-yellow-600 transition-colors mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <p className="leading-relaxed group-hover:text-white transition-colors">
                  Estrada das Cabras Km 5,5<br />Joaquim Egídio,<br />Campinas - SP
                </p>
              </a>
            </motion.div>

            {/* Bloco 4: Redes Sociais */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } } }} className="flex flex-col gap-6 lg:items-end">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide lg:text-right w-full">Siga-nos</h3>
              <div className="flex gap-4">
                {[
                  { id: 'instagram', url: 'https://www.instagram.com/paiocadocaboclo/' },
                  { id: 'facebook', url: 'https://www.facebook.com/paiocadocaboclo' },
                  { id: 'youtube', url: 'https://www.youtube.com/@PaiocadoCabocloOficial' }
                ].map((social) => (
                  <a 
                    key={social.id} 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-yellow-600 hover:bg-neutral-800 transition-all hover:-translate-y-1 overflow-hidden p-2"
                    title={`Acesse nosso ${social.id}`}
                  >
                    <img 
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social.id}.svg`} 
                      alt={social.id} 
                      className="w-full h-full object-contain filter invert opacity-70 hover:opacity-100 transition-opacity" 
                    />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Sub Footer */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } } }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-900/50 text-[#555] text-xs font-bold tracking-widest uppercase"
          >
            <p>© Copyright 2024 – Paioça do Caboclo.</p>
            <p>
              Feito por <a href="#" className="text-neutral-400 hover:text-white transition-colors">Gustavo Pedroso</a>
            </p>
          </motion.div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Global) */}
      <a 
        href="https://wa.me/5519997928263" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-[0_10px_20px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto"
      >
        {/* Radar Pulse Sutil e Contínuo ("não apagado") */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-[ping_2s_ease-out_infinite] opacity-30 pointer-events-none" />
        <span className="absolute inset-0 rounded-full border border-green-400 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
        </svg>
      </a>
    </>
  );
}
