
import React from 'react';
import { Section } from '../types';

interface SidebarProps {
  currentSection: Section;
  onSelectSection: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, onSelectSection }) => {
  const menuItems = [
    { id: Section.HOME, label: 'INICIO' },
    { id: Section.WHATSAPP, label: 'WHATSAPP' },
    { id: Section.FACEBOOK, label: 'FACEBOOK' },
    { id: Section.INSTAGRAM_TIKTOK, label: 'INSTAGRAM & TIKTOK' },
    { id: Section.LINKEDIN, label: 'LINKEDIN' },
    { id: Section.TRIGGERS, label: '23 DISPARADORES' },
    { id: Section.NICHOS_OSCUROS, label: 'NICHOS OSCUROS' },
    { id: Section.IA_DESIGN, label: 'IA DESIGN' },
  ];

  return (
    <aside className="w-full lg:w-72 lg:fixed h-full bg-[#1e2127] p-6 flex flex-col gap-6 z-10 border-r border-[#ffffff10]">
      <div className="mb-8">
        <h1 className="text-2xl font-black tracking-tighter text-white uppercase leading-none">
          SOLUCIONES<br/><span className="text-[#7da6ff]">DIGITALES</span>
        </h1>
        <p className="text-[10px] text-white opacity-40 mt-2 tracking-[0.3em] font-bold">ELITE V2.2 PRO</p>
      </div>

      <nav className="flex flex-col gap-5 overflow-y-auto pr-2">
        {menuItems.map((item) => {
          const isActive = currentSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`
                w-full text-left p-4 rounded-2xl transition-all duration-300 text-[13px] font-black flex items-center gap-4 group
                ${isActive 
                  ? 'shadow-neu-pressed bg-[#ffffff02] text-[#7da6ff]' 
                  : 'shadow-neu-flat text-white opacity-70 hover:opacity-100 hover:text-[#7da6ff]'
                }
              `}
            >
              {/* Radio Indicator */}
              <div className={`
                w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 shrink-0
                ${isActive 
                  ? 'shadow-neu-pressed border-2 border-[#7da6ff40] bg-[#1e2127]' 
                  : 'shadow-neu-flat border border-[#ffffff05] bg-[#1e2127]'
                }
              `}>
                {isActive && (
                  <span className="text-[#22c55e] text-lg font-black animate-in zoom-in duration-300">
                    ✓
                  </span>
                )}
              </div>
              
              <span className="tracking-tight uppercase">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6">
        <div className="p-5 rounded-2xl shadow-neu-flat border border-[#ffffff05] bg-[#ffffff02] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7da6ff10] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <p className="text-[10px] text-white opacity-30 uppercase tracking-[0.2em] mb-1 font-bold">Soporte Técnico</p>
          <p className="text-[15px] font-black text-[#7da6ff] tracking-tight relative z-10">311 589 3220</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
