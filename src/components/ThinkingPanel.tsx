import React from 'react';
import { Brain } from 'lucide-react';

interface ThinkingPanelProps {
  isProcessing: boolean;
}

export function ThinkingPanel({ isProcessing }: ThinkingPanelProps) {
  return (
    <div className="glassmorphism rounded-lg p-4 text-white w-64 h-[calc(100vh-2rem)] mr-4">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-6 h-6 text-emerald-400" />
        <h2 className="text-lg font-bold">System Status</h2>
      </div>
      
      <div className="space-y-4">
        <div className="border border-gray-700/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-emerald-400 animate-pulse' : 'bg-gray-500'}`} />
            <span className="text-sm">Neural Core</span>
          </div>
          {isProcessing && (
            <div className="text-xs text-gray-400 animate-pulse">
              Processing request...
            </div>
          )}
        </div>

        <div className="border border-gray-700/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-sm">Memory Banks</span>
          </div>
          <div className="w-full bg-gray-700/30 rounded-full h-1">
            <div className="bg-blue-400 h-1 rounded-full w-3/4" />
          </div>
        </div>

        <div className="border border-gray-700/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-sm">Network Status</span>
          </div>
          <div className="text-xs text-gray-400">
            Connected to mainnet
          </div>
        </div>
      </div>
    </div>
  );
}