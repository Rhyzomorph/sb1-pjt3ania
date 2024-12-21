import { useState, useEffect } from 'react';
import { MemoryStats, calculateMemoryUsage } from '../services/memoryMonitor';

export function useMemoryMonitor(isProcessing: boolean) {
  const [memoryStats, setMemoryStats] = useState<MemoryStats>(() => 
    calculateMemoryUsage(0)
  );
  
  useEffect(() => {
    // Simulate memory usage changes based on processing state
    const activeContexts = isProcessing ? 8 : 2; // More contexts when processing
    setMemoryStats(calculateMemoryUsage(activeContexts));
  }, [isProcessing]);

  return memoryStats;
}