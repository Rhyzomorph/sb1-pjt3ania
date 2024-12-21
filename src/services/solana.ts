import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com');
const PUMP_API = 'https://pump.fun/api';

export async function getSolanaTokenInfo(address: string) {
  try {
    const response = await fetch(`${PUMP_API}/token/${address}`);
    if (!response.ok) throw new Error('Token not found');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch token info');
  }
}

export async function getSolanaPriceData(address: string) {
  try {
    const response = await fetch(`${PUMP_API}/price/${address}`);
    if (!response.ok) throw new Error('Price data not found');
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch price data');
  }
}

export async function getAccountBalance(address: string): Promise<number> {
  try {
    const publicKey = new PublicKey(address);
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL;
  } catch (error) {
    throw new Error('Invalid Solana address');
  }
}