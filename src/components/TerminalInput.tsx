import React from 'react';

interface TerminalInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isProcessing?: boolean;
}

export function TerminalInput({ input, setInput, handleSubmit, isProcessing }: TerminalInputProps) {
  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-700/30 p-4">
      <div className="flex items-center gap-2">
        <span className="text-emerald-400">➜</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 terminal-input outline-none rounded px-3 py-2 text-white placeholder-gray-400"
          placeholder={isProcessing ? "Processing..." : "Type a command..."}
          disabled={isProcessing}
          spellCheck="false"
        />
      </div>
    </form>
  );
}