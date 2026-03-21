import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Importações estáticas relativas para o Vite garantir o carregamento
import imgBackground from '/img/background_paioça.jpg';
import imgQuadroTransparente from '/img/quadro_paioça_transparente.png';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 8, minutes: 50, seconds: 26 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else { hours = 23; if (days > 0) days--; }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <section id="home" className="min-h-[100dvh] relative overflow-hidden flex flex-col justify-center items-center pt-16 pb-2 md:pt-20 md:pb-4 font-sans text-white">

      {/* BACKGROUND DA HERO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${imgBackground}")` }} />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-0 md:px-2 z-10 drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] -mt-4 md:-mt-8"
      >
        <div className="relative w-full aspect-[4/3] sm:aspect-[1.5] md:aspect-[1.65] max-h-[52vh] md:max-h-[58vh] lg:max-h-[65vh]">

          {/* ✅ Usa % para apontar exatamente na borda do frame */}
          <p
            style={{
              position: 'absolute',
              left: '55%',
              transform: 'translateX(-50%)',
              zIndex: 30,
              textAlign: 'center',
            }}
            className="
              top-[23%] 
              md:top-[21%]
              lg:top-[19%]
              xl:top-[21%]
              font-bold tracking-[0.2em] uppercase 
              text-yellow-500/90 drop-shadow-md px-2
              text-[6px] xl:text-[14px] lg:text-[12px] sm:text-[10px] md:text-xs lg:text-sm
              w-[50%] sm:w-auto sm:whitespace-nowrap whitespace-nowrap"
          >
            ✦ Há mais de 18 anos no coração do interior
          </p>

          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{ containerType: 'inline-size' }}
          >
            {/* ✅ IMG DO QUADRO — não remova */}
            <img
              src={imgQuadroTransparente}
              alt="Moldura Rústica"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-2xl"
              style={{ zIndex: -1 }}
            />

            <div className="
              absolute inset-0 z-10
              flex flex-col items-center justify-center text-center
              min-h-0 w-full h-full
              px-[10%]   pt-[12%]   pb-[6%]
              sm:px-[11%] sm:pt-[10%] sm:pb-[7%]
              md:px-[17%] md:pt-[10%] md:pb-[6%]
              lg:px-[17%] lg:pt-[10%] lg:pb-[7%]
              xl:px-[17%] xl:pt-[10%]  xl:pb-[4%]
            ">
              <h1 className="font-serif font-bold leading-[1.05] drop-shadow-[0_5px_15px_rgba(0,0,0,1)] flex flex-col items-center justify-center flex-1 w-full min-h-0 gap-0 overflow-hidden">
                <span className="text-[4.2cqw] tracking-wide text-white">A Noite que Você</span>
                <span className="text-[5.8cqw] italic font-normal bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Nunca Vai</span>
                <span className="text-[4.2cqw] tracking-wide text-white">
                  Esquecer. <span className="italic font-normal bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">A Lenda</span>
                </span>
                <span className="text-[5.8cqw] italic font-normal bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Sertaneja de</span>
                <span className="text-[5cqw] font-black text-white tracking-wider">Campinas.</span>
              </h1>
            </div>
          </div>
        </div>
    </motion.div>

      {/* RODAPÉ DA HERO (CTA e Contador) */ }
  <motion.footer
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-40 mt-4 md:mt-6 flex flex-col items-center gap-3 md:gap-4 shrink-0"
  >
    <div className="flex flex-col items-center gap-3 text-center px-4 relative">
      <p className="text-[0.6rem] md:text-[0.65rem] text-neutral-300 drop-shadow-md tracking-widest uppercase">
        Garanta seu lugar na história.<br /><strong className="text-red-500 mt-0.5 inline-block">Ingressos limitados.</strong>
      </p>

      <div className="relative group">
        <div className="absolute -inset-1 bg-red-600 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />

        <a
          href="https://wa.me/5519997928263"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden bg-gradient-to-b from-red-600 to-red-900 border border-red-500/50 text-white font-bold py-3 px-10 text-[0.7rem] md:text-[0.85rem] uppercase tracking-[0.25em] rounded-full shadow-[0_5px_0_#7f1d1d,0_10px_20px_rgba(220,38,38,0.5)] active:translate-y-1 active:shadow-[0_2px_0_#7f1d1d,0_5px_10px_rgba(220,38,38,0.4)] transition-all flex items-center justify-center transform hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2.5">
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            Adquira seu Ingresso
          </span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine pointer-events-none" />
        </a>
      </div>
    </div>

    {/* Contador */}
    <div className="flex flex-col items-center gap-2 mt-1">
      <div className="flex items-center gap-2 mb-0.5">
        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[0.5rem] md:text-[0.55rem] font-bold tracking-[0.25em] text-neutral-400 uppercase drop-shadow-sm">
          Últimos Ingressos Para:
        </span>
      </div>

      <div className="flex gap-2.5 text-red md:gap-4">
        {[
          { value: timeLeft.days, label: 'DIAS' },
          { value: timeLeft.hours, label: 'HRS' },
          { value: timeLeft.minutes, label: 'MIN' },
          { value: timeLeft.seconds, label: 'SEG' }
        ].map((item, idx) => (
          <div
            key={idx}
            className="backdrop-blur-md bg-black/40 border border-yellow-600/30 rounded-xl p-2 md:p-3 flex flex-col items-center justify-center min-w-[65px] md:min-w-[80px] shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-yellow-500/50 transition-colors"
          >
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black opacity-80" />
            <span className="text-yellow-500 font-serif font-bold text-xl md:text-3xl leading-none drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] relative z-10 mb-1">
              {pad(item.value)}
            </span>
            <span className="text-[0.45rem] md:text-[0.5rem] text-neutral-500 font-bold uppercase tracking-[0.2em] relative z-10">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Chevron Scroll Indicator */}
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="flex flex-col items-center gap-1 text-neutral-600 mt-1"
    >
      <span className="text-[0.45rem] md:text-[0.5rem] uppercase font-bold tracking-[0.2em]">Deslize</span>
      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>
  </motion.footer>
    </section >
  );
}
