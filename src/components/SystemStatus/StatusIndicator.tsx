import React from 'react';

interface StatusIndicatorProps {
  label: string;
  status: 'active' | 'inactive';
  pulseColor?: string;
}

export function StatusIndicator({ label, status, pulseColor = 'emerald' }: StatusIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${
        status === 'active' 
          ? `bg-${pulseColor}-400 animate-pulse` 
          : 'bg-gray-500'
      }`} />
      <span className="text-sm">{label}</span>
    </div>
  );
}