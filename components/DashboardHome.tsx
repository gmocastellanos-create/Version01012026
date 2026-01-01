
import React from 'react';

const DashboardHome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in zoom-in duration-1000">
      <div className="w-32 h-32 rounded-full shadow-neu-flat mb-12 flex items-center justify-center border border-[#4169e120]">
         <span className="text-6xl">🔊</span>
      </div>
      
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tighter">SISTEMA ONLINE</h2>
      <p className="text-xl lg:text-2xl text-[#4169e1] font-light max-w-2xl leading-relaxed italic">
        "Bienvenido a Soluciones Digitales. Seleccione su red objetivo para desplegar la estrategia orgánica."
      </p>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {[
          { icon: '🚀', title: 'Velocidad', desc: 'Implementación inmediata' },
          { icon: '🛡️', title: 'Seguridad', desc: 'Protocolos anti-baneo' },
          { icon: '💎', title: 'Calidad', desc: 'Investigación técnica real' }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl shadow-neu-flat border border-[#ffffff05] hover:shadow-neu-pressed transition-all duration-500">
            <div className="text-3xl mb-4">{item.icon}</div>
            <h4 className="text-white font-bold mb-2">{item.title}</h4>
            <p className="text-white opacity-40 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-white opacity-10 font-bold text-9xl absolute bottom-0 right-0 pointer-events-none select-none">
        SOLUCIONES
      </div>
    </div>
  );
};

export default DashboardHome;
