
import React, { useState } from 'react';
import { NetworkStrategy } from '../types';

interface StrategyModuleProps {
  strategy: NetworkStrategy;
}

const StrategyModule: React.FC<StrategyModuleProps> = ({ strategy }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showGoldenRule, setShowGoldenRule] = useState(false);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-700">
      {/* Header Image Section */}
      <div className="relative w-full h-48 lg:h-64 rounded-3xl overflow-hidden shadow-neu-flat">
        <img 
          src={strategy.imageUrl} 
          alt={strategy.name} 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2127] to-transparent" />
        <div className="absolute bottom-6 left-8">
          <h2 className="text-4xl font-bold text-white tracking-tight">{strategy.name}</h2>
          <p className="text-[#4169e1] font-medium text-lg mt-1">Estrategia Orgánica Elite</p>
        </div>
        {/* Decor Icon Watermark */}
        <div className="absolute top-4 right-8 text-white opacity-[0.03] text-8xl">
          🤖
        </div>
      </div>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {strategy.cards.map((card, idx) => (
          <div 
            key={idx}
            className={`
              p-8 rounded-3xl transition-all duration-500 relative
              ${expandedCard === idx ? 'shadow-neu-pressed' : 'shadow-neu-flat hover:shadow-neu-pressed'}
            `}
          >
            {/* Watermark */}
            <div className="absolute top-4 right-4 text-white opacity-[0.03] text-4xl">
              🔹
            </div>
            
            <h3 className="text-[#4169e1] text-lg font-bold mb-4 tracking-wide uppercase">{card.title}</h3>
            <p className="text-white text-[18px] leading-relaxed mb-6 font-light">
              {card.content}
            </p>
            
            {expandedCard === idx && card.extendedContent && (
              <div className="mt-4 pt-4 border-t border-[#ffffff10] animate-in slide-in-from-top-4 duration-500">
                <p className="text-white opacity-80 text-[16px] leading-loose italic">
                  {card.extendedContent}
                </p>
              </div>
            )}

            <button 
              onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
              className="mt-4 flex items-center gap-2 text-[#4169e1] hover:text-white transition-colors text-[14px] font-bold"
            >
              <span>{expandedCard === idx ? '👁️ OCULTAR DETALLES' : '👁️ VER DETALLES Y EJEMPLOS'}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Full Width Golden Rule */}
      <div className={`
        p-10 rounded-3xl transition-all duration-500 relative border border-[#4169e130] bg-[#4169e105]
        ${showGoldenRule ? 'shadow-neu-pressed' : 'shadow-neu-flat'}
      `}>
        <div className="absolute top-4 right-6 text-white opacity-[0.05] text-6xl">
          🌐
        </div>
        <h3 className="text-[#4169e1] text-xl font-bold mb-4 tracking-widest uppercase">{strategy.goldenRule.title}</h3>
        <p className="text-white text-xl leading-relaxed mb-6 font-medium">
          {strategy.goldenRule.content}
        </p>

        {showGoldenRule && (
          <div className="mt-4 pt-4 border-t border-[#ffffff10] animate-in slide-in-from-top-4 duration-500">
             <p className="text-white text-[18px] leading-loose">
               {strategy.goldenRule.extendedContent}
             </p>
          </div>
        )}

        <button 
          onClick={() => setShowGoldenRule(!showGoldenRule)}
          className="flex items-center gap-2 text-[#4169e1] hover:text-white transition-colors text-[14px] font-bold"
        >
          <span>{showGoldenRule ? '👁️ OCULTAR INVESTIGACIÓN' : '👁️ VER INVESTIGACIÓN COMPLETA'}</span>
        </button>
      </div>

      {/* Community CTA */}
      <div className="mt-8 p-10 rounded-3xl shadow-neu-flat border-2 border-[#4169e1] flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-transparent to-[#4169e110]">
        <div className="max-w-2xl text-center lg:text-left">
          <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">SOLUCIONES DIGITALES: COMUNIDAD EXCLUSIVA</h4>
          <p className="text-white opacity-80 text-[18px]">
            Domina estas estrategias y accede a herramientas exclusivas, WASender y soporte personalizado en nuestra comunidad de WhatsApp.
          </p>
        </div>
        <a 
          href="https://wa.me/573115893220?text=Quiero%20unirme%20al%20grupo%20y%20aprender%20marketing%20orgánico"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#4169e1] text-white rounded-2xl font-bold text-lg shadow-neu-flat hover:shadow-neu-pressed transition-all duration-300 whitespace-nowrap"
        >
          🚀 UNIRME AL GRUPO
        </a>
      </div>
      
      <div className="mt-4 text-center pb-8">
        <p className="text-white opacity-30 text-[12px] uppercase tracking-widest">
          SOLUCIONES DIGITALES - Innovación Estratégica & Verdad Técnica.
        </p>
      </div>
    </div>
  );
};

export default StrategyModule;
