import React from 'react';
import { Shield } from 'lucide-react';

export function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 mb-4 text-white">
      <Shield className="w-6 h-6" />
      <h1 className="text-xl font-bold">TORUS Security Agent</h1>
    </div>
  );
}