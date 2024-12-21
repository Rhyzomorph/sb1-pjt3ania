import React, { useRef, useEffect } from 'react';
import { Command } from '../types';

interface TerminalOutputProps {
  history: Command[];
}

export function TerminalOutput({ history }: TerminalOutputProps) {
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div 
      ref={outputRef}
      className="h-[60vh] overflow-y-auto p-4 space-y-4"
    >
      {history.map((entry, i) => (
        <div key={i} className="transition-opacity duration-200 ease-in-out">
          {entry.input !== 'system' && (
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <span className="text-emerald-400">➜</span>
              <span>{entry.input}</span>
            </div>
          )}
          <div className="whitespace-pre-wrap text-gray-200">{entry.output}</div>
        </div>
      ))}
    </div>
  );
}