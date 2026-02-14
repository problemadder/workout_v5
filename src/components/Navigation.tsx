import React from 'react';
import { TABS } from '../constants/navigation';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-solarized-base3/95 border-t border-solarized-base2/30 px-2 pt-1 pb-7 z-50">
      <div className="overflow-x-auto">
        <div className="flex gap-1 min-w-max px-2 h-full">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex flex-col items-center pt-0 pb-1 px-3 rounded-lg transition-all duration-200 ease-in-out min-w-0 flex-shrink-0 ${activeTab === id
                ? 'text-solarized-blue bg-solarized-blue/20'
                : 'text-solarized-base01 hover:text-solarized-base00 hover:bg-solarized-base2/50'
                }`}
            >
              <Icon size={18} className="mb-0.5" />
              <span className="text-xs font-medium whitespace-nowrap">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}