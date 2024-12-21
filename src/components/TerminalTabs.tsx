import React from 'react';
import { Terminal as TerminalIcon, Activity, Code2, AlertTriangle } from 'lucide-react';

interface TerminalTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TerminalTabs({ activeTab, setActiveTab }: TerminalTabsProps) {
  const tabs = [
    { id: 'terminal', icon: TerminalIcon, label: 'Terminal' },
    { id: 'monitor', icon: Activity, label: 'Monitor' },
    { id: 'contracts', icon: Code2, label: 'Contracts' },
    { id: 'alerts', icon: AlertTriangle, label: 'Alerts' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {tabs.map(({ id, icon: Icon, label }) => (
        <div 
          key={id}
          className={`p-3 border rounded cursor-pointer ${
            activeTab === id ? 'border-white bg-white/5' : 'border-gray-700'
          }`}
          onClick={() => setActiveTab(id)}
        >
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}