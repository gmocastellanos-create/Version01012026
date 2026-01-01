
import React from 'react';

const ClosingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#1e2127] z-[9999] flex flex-col items-center justify-center p-8 animate-in fade-in duration-1000">
      <div className="w-full max-w-xl p-12 rounded-[40px] shadow-neu-flat text-center border border-[#ffffff05] relative overflow-hidden">
        {/* Glow effect for life */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7da6ff05] rounded-full blur-2xl pointer-events-none" />
        
        <div className="w-24 h-24 rounded-full shadow-neu-pressed mx-auto mb-10 flex items-center justify-center border border-[#ffffff05]">
          <span className="text-4xl">🛡️</span>
        </div>
        
        <h2 className="text-white text-3xl font-black mb-6 tracking-tighter uppercase italic">SESIÓN FINALIZADA</h2>
        
        <p className="text-white opacity-80 text-[18px] mb-10 leading-relaxed font-medium">
          Ingresa a nuestra comunidad y permanece actualizado con información y herramientas que te ayudarán en tu crecimiento en redes y aumentar tus ventas.
        </p>

        <a 
          href="https://wa.me/573115893220?text=Hola,%20QUIERO%20SER%20PARTE%20DE%20LA%20COMUNIDAD"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-6 bg-[#1e2127] text-[#7da6ff] rounded-3xl shadow-neu-flat font-black text-xl hover:shadow-neu-pressed hover:text-white transition-all duration-500 border border-transparent hover:border-[#7da6ff20] uppercase tracking-tighter"
        >
          QUIERO SER PARTE DE LA COMUNIDAD
        </a>
        
        <p className="mt-10 text-[10px] text-white opacity-20 uppercase tracking-[0.4em] font-black">
          Terminal ID: SD-OS-PRO-2024
        </p>
      </div>
    </div>
  );
};

export default ClosingScreen;
