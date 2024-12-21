import { ethers } from 'ethers';

export type NetworkStatus = {
  isConnected: boolean;
  network: string;
  latency: number;
};

export async function checkNetworkStatus(): Promise<NetworkStatus> {
  try {
    const provider = new ethers.JsonRpcProvider(
      'https://eth-mainnet.g.alchemy.com/v2/demo'
    );
    
    const startTime = Date.now();
    const network = await provider.getNetwork();
    const latency = Date.now() - startTime;

    return {
      isConnected: true,
      network: network.name,
      latency
    };
  } catch (error) {
    return {
      isConnected: false,
      network: 'disconnected',
      latency: 0
    };
  }
}