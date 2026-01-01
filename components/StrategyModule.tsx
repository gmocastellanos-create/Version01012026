
import React, { useState } from 'react';
import { NetworkStrategy, Section } from '../types';

interface StrategyModuleProps {
  strategy: NetworkStrategy;
}

const StrategyModule: React.FC<StrategyModuleProps> = ({ strategy }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showGoldenRule, setShowGoldenRule] = useState(false);

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700 relative">
      {/* Background Life - Subtle colorful aura */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4169e108] rounded-full blur-[120px] pointer-events-none" />

      {/* Header Image Section - Grayscale to Color Transition */}
      <div className="relative w-full h-56 lg:h-72 rounded-[40px] overflow-hidden shadow-neu-flat border border-[#ffffff05] group/header bg-[#1e2127]">
        <img 
          src={strategy.imageUrl} 
          alt={strategy.name} 
          className="w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/header:grayscale-0 group-hover/header:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2127] via-[#1e212740] to-transparent opacity-90 group-hover/header:opacity-60 transition-opacity duration-1000" />
        <div className="absolute bottom-10 left-10 transition-all duration-700 group-hover/header:translate-x-4">
          <p className="text-[#7da6ff] font-black text-sm tracking-[0.4em] uppercase mb-2 drop-shadow-[0_0_8px_rgba(125,166,255,0.4)]">Protocolo de Red</p>
          <h2 className="text-5xl font-black text-white tracking-tighter drop-shadow-2xl uppercase">{strategy.name}</h2>
        </div>
        {/* Animated scanning line effect for "life" */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7da6ff30] to-transparent -translate-y-full group-hover/header:translate-y-[72vh] transition-all duration-[3000ms] ease-linear pointer-events-none" />
      </div>

      {/* Grid 2x2 with Colorful Glow on Hover */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {strategy.cards.map((card, idx) => (
          <div 
            key={idx}
            className={`
              p-10 rounded-[40px] transition-all duration-500 relative border border-[#ffffff05] flex flex-col group
              ${expandedCard === idx 
                ? 'shadow-neu-pressed bg-[#00000020] border-[#7da6ff40]' 
                : 'shadow-neu-flat hover:shadow-neu-pressed hover:border-[#7da6ff20]'}
            `}
          >
            {/* Colorful accent - Subtle blue glow corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#7da6ff05] to-transparent rounded-tr-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <h3 className="text-[#7da6ff] text-[15px] font-black mb-6 tracking-[0.2em] uppercase border-l-4 border-[#7da6ff] pl-4 relative z-10">
              {card.title}
            </h3>
            
            <p className="text-white text-[18px] leading-relaxed mb-8 font-medium opacity-90 relative z-10">
              {card.content}
            </p>
            
            {expandedCard === idx && card.extendedContent && (
              <div className="mt-2 pt-6 border-t border-[#ffffff10] animate-in slide-in-from-top-4 duration-500 relative z-10">
                <div className="text-white opacity-100 text-[16px] leading-loose italic bg-[#ffffff03] p-6 rounded-3xl border border-[#ffffff05] shadow-inner">
                  <span className="text-[#7da6ff] font-black block mb-2 uppercase text-xs tracking-widest">Desglose Técnico:</span>
                  {card.extendedContent}
                </div>
              </div>
            )}

            <button 
              onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
              className="mt-auto pt-6 flex items-center gap-3 text-[#7da6ff] hover:text-white transition-all text-xs font-black uppercase tracking-widest group/btn relative z-10"
            >
              <span className="w-10 h-10 rounded-full shadow-neu-flat flex items-center justify-center bg-[#1e2127] group-hover/btn:shadow-neu-pressed group-hover/btn:text-[#22c55e] transition-all border border-transparent hover:border-[#7da6ff40]">
                {expandedCard === idx ? '−' : '+'}
              </span>
              <span className="group-hover/btn:tracking-widest transition-all">{expandedCard === idx ? 'Cerrar Detalles' : 'Ver Detalles Técnicos'}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Special CTA for Triggers */}
      {strategy.id === Section.TRIGGERS && (
        <div className="p-12 rounded-[40px] shadow-neu-flat bg-[#1e2127] border-2 border-[#22c55e30] flex flex-col items-center gap-6 animate-in zoom-in duration-500 relative overflow-hidden group/trigger-cta">
          <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e0a] to-transparent animate-pulse pointer-events-none" />
          <h4 className="text-white font-black text-2xl uppercase tracking-tighter relative z-10 text-center">¿Deseas dominar los 23 disparadores?</h4>
          <p className="text-white opacity-70 text-center max-w-xl relative z-10 font-semibold">Obtén la guía completa con ejemplos reales y scripts listos para usar en tus cierres de venta.</p>
          <a 
            href="https://wa.me/573115893220?text=Hola,%20QUIERO%20EL%20LIBRO%2023%20DISPARADORES%20MENTALES"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-[#22c55e] text-[#1e2127] rounded-3xl font-black text-lg hover:scale-105 hover:bg-white transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] uppercase tracking-widest relative z-10"
          >
            QUIERO EL LIBRO 23 DISPARADORES MENTALES
          </a>
        </div>
      )}

      {/* Special CTA for IA DESIGN */}
      {strategy.id === Section.IA_DESIGN && (
        <div className="p-12 rounded-[40px] shadow-neu-flat bg-[#1e2127] border-2 border-[#7da6ff40] flex flex-col items-center gap-6 animate-in zoom-in duration-500 relative overflow-hidden group/ia-cta">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7da6ff0a] to-transparent animate-pulse pointer-events-none" />
          <h4 className="text-white font-black text-2xl uppercase tracking-tighter relative z-10 text-center">IA DE DISEÑO (ESTILO CANVA)</h4>
          <p className="text-white opacity-70 text-center max-w-xl relative z-10 font-semibold">Crea tus propios assets visuales con la herramienta de diseño más potente basada en IA de Microsoft.</p>
          <a 
            href="https://designer.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-[#7da6ff] text-[#1e2127] rounded-3xl font-black text-lg hover:scale-105 hover:bg-white transition-all shadow-[0_0_30px_rgba(125,166,255,0.3)] uppercase tracking-widest relative z-10"
          >
            ACCEDER A MICROSOFT DESIGNER
          </a>
        </div>
      )}

      {/* Full Width Golden Rule */}
      <div className={`
        p-12 rounded-[40px] transition-all duration-700 relative border-2 border-[#7da6ff20] bg-gradient-to-br from-[#7da6ff08] to-transparent
        ${showGoldenRule ? 'shadow-neu-pressed border-[#7da6ff50]' : 'shadow-neu-flat hover:shadow-neu-pressed hover:border-[#7da6ff40]'}
      `}>
        <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
            <div className="w-20 h-20 rounded-full border-2 border-[#7da6ff] animate-ping [animation-duration:4s]" />
        </div>

        <h3 className="text-[#7da6ff] text-[15px] font-black mb-6 tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(125,166,255,0.2)]">{strategy.goldenRule.title}</h3>
        <p className="text-white text-2xl lg:text-3xl leading-tight mb-8 font-black tracking-tight drop-shadow-md">
          "{strategy.goldenRule.content}"
        </p>

        {showGoldenRule && (
          <div className="mt-2 pt-8 border-t border-[#ffffff10] animate-in slide-in-from-top-4 duration-500">
             <p className="text-white text-[19px] leading-relaxed opacity-90 max-w-4xl font-semibold border-l-2 border-[#7da6ff40] pl-6">
               {strategy.goldenRule.extendedContent}
             </p>
          </div>
        )}

        <button 
          onClick={() => setShowGoldenRule(!showGoldenRule)}
          className="flex items-center gap-3 text-[#7da6ff] hover:text-white transition-all text-xs font-black uppercase tracking-widest group/btn"
        >
          <span className="w-10 h-10 rounded-full shadow-neu-flat flex items-center justify-center bg-[#1e2127] group-hover/btn:shadow-neu-pressed border border-transparent group-hover/btn:border-[#7da6ff40] transition-all">
            {showGoldenRule ? '−' : '+'}
          </span>
          <span className="group-hover/btn:tracking-widest transition-all">{showGoldenRule ? 'Contraer Investigación' : 'Expandir Análisis de Oro'}</span>
        </button>
      </div>

      {/* Community CTA */}
      <div className="mt-10 p-12 rounded-[50px] shadow-neu-flat border-2 border-[#7da6ff40] flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#1e2127] relative group/cta overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7da6ff0c] via-transparent to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000" />
        <div className="max-w-2xl text-center lg:text-left relative z-10">
          <h4 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic drop-shadow-sm">COMUNIDAD ELITE 2024</h4>
          <p className="text-white opacity-80 text-xl font-bold leading-snug">
            Actualizaciones diarias de algoritmos, scripts de cierre probados y acceso a herramientas de automatización.
          </p>
        </div>
        <a 
          href="https://wa.me/573115893220?text=Quiero%20unirme%20al%20grupo%20y%20aprender%20marketing%20orgánico"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#7da6ff] text-[#1e2127] rounded-[30px] font-black text-xl shadow-[0_0_40px_rgba(125,166,255,0.3)] hover:bg-white hover:scale-105 transition-all duration-500 whitespace-nowrap uppercase tracking-tighter relative z-10"
        >
          UNIRME AL CLAN
        </a>
      </div>
      
      <div className="mt-6 text-center pb-12">
        <p className="text-white opacity-20 text-[10px] uppercase tracking-[1em] font-black">
          SOLUCIONES DIGITALES • EXCELENCIA OPERATIVA
        </p>
      </div>
    </div>
  );
};

export default StrategyModule;
