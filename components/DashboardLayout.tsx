
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
      <div className="p-12 rounded-3xl shadow-neu-flat text-center">
        <h2 className="text-2xl text-white font-bold mb-4">Módulo en Desarrollo</h2>
        <p className="text-white opacity-50">Acceso exclusivo comunidad. Contacto 3115893220.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1e2127] flex flex-col lg:flex-row">
      <Sidebar currentSection={currentSection} onSelectSection={setCurrentSection} />
      
      <main className="flex-1 lg:ml-72 p-6 lg:p-12">
        <div className="max-w-7xl mx-auto pt-20 lg:pt-0">
          <div className="flex items-center justify-between mb-12 border-b border-[#ffffff05] pb-6">
            <div>
              <p className="text-[10px] text-[#4169e1] font-bold tracking-[0.2em] mb-1 uppercase">PLATAFORMA ESTRATÉGICA</p>
              <h3 className="text-white text-xl font-medium">Panel de Inteligencia Orgánica</h3>
            </div>
            <button 
              onClick={() => setIsClosed(true)}
              className="px-6 py-2 rounded-xl shadow-neu-flat text-white hover:text-[#ff4444] hover:shadow-neu-pressed transition-all duration-300 text-sm font-bold flex items-center gap-2"
            >
              <span>🚪</span> SALIR
            </button>
          </div>
          
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
