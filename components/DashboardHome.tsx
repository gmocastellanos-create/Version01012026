
import React from 'react';

const DashboardHome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-in fade-in zoom-in duration-1000 relative px-6 overflow-hidden">
      {/* Dynamic Background Glows for "Life" */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#7da6ff05] rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#7da6ff05] rounded-full blur-[100px] animate-pulse [animation-delay:2s] pointer-events-none" />

      <div className="w-44 h-44 rounded-full shadow-neu-flat mb-16 flex items-center justify-center border-4 border-[#7da6ff30] bg-[#1e2127] relative group">
         <div className="absolute inset-0 rounded-full bg-[#7da6ff08] animate-ping [animation-duration:3s]" />
         <div className="absolute inset-2 rounded-full border border-[#7da6ff10] animate-spin [animation-duration:10s]" />
         <div className="w-20 h-1 bg-[#7da6ff] rounded-full relative z-10 animate-pulse shadow-[0_0_15px_rgba(125,166,255,0.5)]" />
      </div>
      
      <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none drop-shadow-2xl">
        OPERACIÓN <span className="text-[#7da6ff] animate-pulse">ELITE</span>
      </h2>
      <p className="text-2xl lg:text-4xl text-[#7da6ff] font-extrabold max-w-4xl leading-tight italic mb-16 drop-shadow-sm tracking-tight">
        "Despliegue de inteligencia táctica para el dominio orgánico de redes sociales."
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-6xl mt-4 relative z-10">
        {[
          { label: 'VELOCIDAD', val: 'PROCESAMIENTO INMEDIATO', color: 'border-t-[#7da6ff40]' },
          { label: 'SEGURIDAD', val: 'SISTEMAS ANTI-META', color: 'border-t-[#22c55e40]' },
          { label: 'CALIDAD', val: 'AUTORIDAD DE MARCA', color: 'border-t-[#7da6ff40]' }
        ].map((item, i) => (
          <div key={i} className={`p-12 rounded-[40px] shadow-neu-flat border border-[#ffffff05] ${item.color} bg-[#ffffff02] hover:shadow-neu-pressed transition-all duration-700 flex flex-col items-center group overflow-hidden relative`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#7da6ff03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h4 className="text-[#7da6ff] font-black mb-3 tracking-[0.3em] text-xs uppercase group-hover:tracking-[0.5em] transition-all">{item.label}</h4>
            <p className="text-white opacity-60 text-sm font-black uppercase tracking-widest text-center drop-shadow-sm">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="mt-32 text-white opacity-[0.02] font-black text-[15vw] absolute -bottom-20 left-0 right-0 pointer-events-none select-none tracking-tighter text-center leading-none uppercase">
        DIGITALES
      </div>
    </div>
  );
};

export default DashboardHome;
