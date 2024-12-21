import { useState, useEffect } from 'react';
import { NetworkStatus, checkNetworkStatus } from '../services/networkMonitor';

export function useNetworkStatus() {
  const [status, setStatus] = useState<NetworkStatus>({
    isConnected: false,
    network: 'connecting...',
    latency: 0
  });

  useEffect(() => {
    const checkStatus = async () => {
      const networkStatus = await checkNetworkStatus();
      setStatus(networkStatus);
    };

    // Initial check
    checkStatus();

    // Check every 30 seconds
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return status;
}