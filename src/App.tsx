import React, { useState } from 'react';
import { Terminal } from './components/Terminal';
import { AIChat } from './components/AIChat';
import { SystemStatus } from './components/SystemStatus/SystemStatus';

export default function App() {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800">
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto p-6 space-y-6">
        {/* System Status Section */}
        <div className="h-[140px] rounded-2xl overflow-hidden backdrop-blur-lg bg-black/20">
          <SystemStatus isProcessing={isProcessing} />
        </div>

        {/* Terminal and Chat Section */}
        <div className="grid grid-cols-2 gap-6 h-[calc(100vh-240px)]">
          <div className="rounded-2xl overflow-hidden backdrop-blur-lg bg-black/20">
            <Terminal />
          </div>
          <div className="rounded-2xl overflow-hidden backdrop-blur-lg bg-black/20">
            <AIChat onProcessingChange={setIsProcessing} />
          </div>
        </div>
      </div>
    </div>
  );
}