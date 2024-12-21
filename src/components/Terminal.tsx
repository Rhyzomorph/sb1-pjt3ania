import React from 'react';
import { useTerminal } from '../hooks/useTerminal';

export function Terminal() {
  const {
    input,
    setInput,
    history,
    handleSubmit,
    isProcessing
  } = useTerminal();

  return (
    <div className="h-full flex flex-col">
      {/* Terminal Output */}
      <div className="flex-1 p-4 overflow-y-auto">
        {history.map((entry, i) => (
          <div key={i} className="mb-4">
            {entry.input !== 'system' && (
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <span className="text-emerald-400">➜</span>
                <span>{entry.input}</span>
              </div>
            )}
            <div className="text-gray-200 whitespace-pre-wrap">{entry.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">➜</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            placeholder={isProcessing ? "Processing..." : "Type a command..."}
            disabled={isProcessing}
            spellCheck="false"
          />
        </div>
      </form>
    </div>
  );
}