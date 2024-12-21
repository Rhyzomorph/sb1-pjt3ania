import React from 'react';
import { Shield } from 'lucide-react';
import { useTerminal } from '../hooks/useTerminal';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';

export function TerminalChat() {
  const {
    input,
    setInput,
    history,
    handleSubmit,
    isProcessing
  } = useTerminal();

  return (
    <div className="min-h-[500px] glassmorphism text-white p-4 font-mono rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-6 h-6 text-emerald-400" />
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
          TORUS Security Agent
        </h1>
      </div>
      <div className="border border-gray-700/50 rounded-lg">
        <TerminalOutput history={history} />
        <TerminalInput 
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  );
}