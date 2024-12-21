import React from 'react';
import { Brain } from 'lucide-react';
import { useAIChat } from '../hooks/useAIChat';

export function AIChat() {
  const { messages, input, setInput, handleSubmit } = useAIChat();

  return (
    <div className="border border-gray-700 rounded-lg bg-black p-4 text-white">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-white" />
        <span className="font-bold">Torus</span>
      </div>
      
      <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.isAI ? '' : 'pl-4'}`}>
            {msg.isAI && <span className="text-white">Torus:</span>}
            {!msg.isAI && <span className="text-gray-400">You:</span>}
            <div className="flex-1 whitespace-pre-wrap">{msg.content}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white placeholder-gray-400"
          placeholder="Ask me anything about blockchain security..."
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}