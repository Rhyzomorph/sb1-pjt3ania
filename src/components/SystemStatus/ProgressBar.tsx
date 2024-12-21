import React from 'react';

interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color = 'blue' }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-700/30 rounded-full h-1">
      <div 
        className={`bg-${color}-400 h-1 rounded-full transition-all duration-300 ease-out`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}