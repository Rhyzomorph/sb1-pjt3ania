import React from 'react';
import { Brain } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="flex items-center gap-2 p-4 border-b border-white/10">
      <Brain className="w-5 h-5 text-emerald-400" />
      <span className="font-bold">Torus AI</span>
    </div>
  );
}