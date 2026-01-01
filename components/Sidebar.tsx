
import React from 'react';
import { Section } from '../types';

interface SidebarProps {
  currentSection: Section;
  onSelectSection: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, onSelectSection }) => {
  const menuItems = [
    { id: Section.HOME, label: 'INICIO', icon: '🏠' },
    { id: Section.WHATSAPP, label: 'WHATSAPP ELITE', icon: '🟢' },
    { id: Section.FACEBOOK, label: 'FACEBOOK MASTER', icon: '🔵' },
    { id: Section.INSTAGRAM_TIKTOK, label: 'INSTAGRAM & TIKTOK', icon: '🟣' },
    { id: Section.LINKEDIN, label: 'LINKEDIN PRO', icon: '💼' },
    { id: Section.TRIGGERS, label: '23 DISPARADORES', icon: '🧠' },
  ];

  return (
    <aside className="w-full lg:w-72 lg:fixed h-full bg-[#1e2127] p-6 flex flex-col gap-6 z-10 border-r border-[#ffffff10]">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tighter text-white">SOLUCIONES<br/><span className="text-[#4169e1]">DIGITALES</span></h1>
        <p className="text-[10px] text-white opacity-50 mt-1">ELITE V2.2 OFFICIAL</p>
      </div>

      <nav className="flex flex-col gap-4 overflow-y-auto pr-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectSection(item.id)}
            className={`
              w-full text-left p-4 rounded-xl transition-all duration-300 text-[14px] font-semibold flex items-center gap-3
              ${currentSection === item.id 
                ? 'shadow-neu-pressed text-[#4169e1] border border-[#4169e130]' 
                : 'shadow-neu-flat text-white hover:text-[#4169e1] hover:shadow-neu-pressed'
              }
            `}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6">
        <div className="p-4 rounded-xl shadow-neu-flat border border-[#ffffff05]">
          <p className="text-[12px] text-white opacity-70">Soporte Directo</p>
          <p className="text-[14px] font-bold text-[#4169e1]">3115893220</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
