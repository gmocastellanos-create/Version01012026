
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Section } from '../types';
import DashboardHome from './DashboardHome';
import StrategyModule from './StrategyModule';
import { STRATEGIES } from '../constants';
import ClosingScreen from './ClosingScreen';

const DashboardLayout: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) {
    return <ClosingScreen />;
  }

  const renderContent = () => {
    if (currentSection === Section.HOME) {
      return <DashboardHome />;
    }
    
    // For specific strategies
    if (STRATEGIES[currentSection]) {
      return <StrategyModule strategy={STRATEGIES[currentSection]} />;
    }

    // Placeholder for Triggers or others
    return (
      <div className="p-12 rounded-3xl shadow-neu-flat text-center border border-[#ffffff05] bg-[#ffffff02] animate-in slide-in-from-bottom-4">
        <h2 className="text-3xl text-[#7da6ff] font-black mb-4 uppercase tracking-tighter">Módulo en Desarrollo</h2>
        <p className="text-white opacity-60 text-lg">Acceso exclusivo comunidad Elite. Contacto: 311 589 3220.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1e2127] flex flex-col lg:flex-row">
      <Sidebar currentSection={currentSection} onSelectSection={setCurrentSection} />
      
      <main className="flex-1 lg:ml-72 p-6 lg:p-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto pt-20 lg:pt-0">
          <div className="flex items-center justify-between mb-12 border-b border-[#ffffff10] pb-8">
            <div>
              <p className="text-[11px] text-[#7da6ff] font-black tracking-[0.4em] mb-2 uppercase">INTELIGENCIA ESTRATÉGICA</p>
              <h3 className="text-white text-2xl font-bold tracking-tight">Panel de Control <span className="text-[#7da6ff] opacity-40">| Orgánico V2.2</span></h3>
            </div>
            <button 
              onClick={() => setIsClosed(true)}
              className="px-8 py-3 rounded-2xl shadow-neu-flat text-white hover:text-[#ff4444] hover:shadow-neu-pressed transition-all duration-300 text-xs font-black tracking-widest flex items-center gap-3 border border-[#ffffff05] uppercase"
            >
              <span>🚪</span> SALIR
            </button>
          </div>
          
          <div className="relative">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
