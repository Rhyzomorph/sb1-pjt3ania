import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subValue?: string;
}

export function MetricCard({ icon: Icon, label, value, subValue }: MetricCardProps) {
  return (
    <div className="border border-white/10 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-emerald-400" />
        <span className="text-sm text-gray-400">{label}</span>
      </div>
      <div className="text-lg font-bold">{value}</div>
      {subValue && (
        <div className="text-xs text-gray-400">{subValue}</div>
      )}
    </div>
  );
}