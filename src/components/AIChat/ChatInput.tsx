import React from 'react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isProcessing: boolean;
}

export function ChatInput({ input, setInput, handleSubmit, isProcessing }: ChatInputProps) {
  return (
    <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-black/30 rounded px-3 py-2 outline-none"
          placeholder={isProcessing ? "Processing..." : "Ask me anything about blockchain security..."}
          disabled={isProcessing}
          spellCheck="false"
        />
        <button 
          type="submit"
          disabled={isProcessing}
          className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 disabled:opacity-50 disabled:hover:bg-emerald-600/20 rounded transition-colors"
        >
          Send
        </button>
      </div>
    </form>
  );
}