import React from 'react';
import { Brain, Activity, Network } from 'lucide-react';
import { StatusIndicator } from './StatusIndicator';
import { ProgressBar } from './ProgressBar';
import { MetricCard } from './MetricCard';
import { useMemoryMonitor } from '../../hooks/useMemoryMonitor';
import { useNetworkStatus } from '../../hooks/useNetworkStatus';

interface SystemStatusProps {
  isProcessing: boolean;
}

export function SystemStatus({ isProcessing }: SystemStatusProps) {
  const memoryStats = useMemoryMonitor(isProcessing);
  const networkStatus = useNetworkStatus();
  
  return (
    <div className="h-full p-6">
      <div className="flex items-center justify-between h-full">
        {/* Neural Core Status */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold">Neural Core</h2>
          </div>
          <StatusIndicator 
            label="Processing Status" 
            status={isProcessing ? 'active' : 'inactive'} 
          />
        </div>

        {/* Memory Usage */}
        <div className="space-y-4">
          <MetricCard
            icon={Activity}
            label="Memory Usage"
            value={`${memoryStats.usagePercent}%`}
            subValue={`${(memoryStats.used / 1024).toFixed(1)}GB / ${(memoryStats.total / 1024).toFixed(1)}GB`}
          />
          <ProgressBar value={memoryStats.usagePercent} color="blue" />
        </div>

        {/* Network Status */}
        <div className="space-y-4">
          <MetricCard
            icon={Network}
            label="Network Status"
            value={networkStatus.isConnected ? 'Connected' : 'Disconnected'}
            subValue={`${networkStatus.network} (${networkStatus.latency}ms)`}
          />
          <StatusIndicator 
            label="Connection" 
            status={networkStatus.isConnected ? 'active' : 'inactive'} 
            pulseColor="purple" 
          />
        </div>
      </div>
    </div>
  );
}