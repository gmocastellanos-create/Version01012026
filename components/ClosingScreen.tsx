
import React from 'react';

const ClosingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#1e2127] z-[9999] flex flex-col items-center justify-center p-8 animate-in fade-in duration-1000">
      <div className="w-full max-w-xl p-12 rounded-[40px] shadow-neu-flat text-center border border-[#ffffff05]">
        <div className="w-24 h-24 rounded-full shadow-neu-pressed mx-auto mb-10 flex items-center justify-center">
          <span className="text-4xl">🛡️</span>
        </div>
        
        <h2 className="text-white text-3xl font-bold mb-6 tracking-tight">SESIÓN FINALIZADA</h2>
        
        <p className="text-white opacity-80 text-[18px] mb-10 leading-relaxed">
          Para validar su acceso permanente a la plataforma educativa y recibir soporte técnico, envíe sus datos ahora mismo.
        </p>

        <a 
          href="https://wa.me/573115893220?text=Hola,%20SOLICITO%20VALIDACION%20DE%20MI%20ACCESO%20A%20LA%20PLATAFORMA%20EDUCATIVA"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-6 bg-[#1e2127] text-[#4169e1] rounded-3xl shadow-neu-flat font-bold text-xl hover:shadow-neu-pressed hover:text-white transition-all duration-300"
        >
          SOLICITO VALIDACIÓN DE MI ACCESO
        </a>
        
        <p className="mt-8 text-[10px] text-white opacity-20 uppercase tracking-widest">
          Terminal ID: SD-OS-PRO-2024
        </p>
      </div>
    </div>
  );
};

export default ClosingScreen;
