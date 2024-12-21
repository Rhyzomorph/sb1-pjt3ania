import { Connection, PublicKey } from '@solana/web3.js';
import { getSolanaTokenInfo, getSolanaPriceData } from './solana';

const connection = new Connection('https://api.mainnet-beta.solana.com');

interface TokenMetrics {
  holders: number;
  volume24h: number;
  liquidityUSD: number;
  creationDate: string;
}

interface SecurityReport {
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  warnings: string[];
  metrics: TokenMetrics;
  recommendations: string[];
}

export async function scanToken(address: string): Promise<SecurityReport> {
  const [tokenInfo, priceData] = await Promise.all([
    getSolanaTokenInfo(address),
    getSolanaPriceData(address)
  ]);

  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Analyze liquidity
  if (priceData.liquidityUSD < 10000) {
    warnings.push('Low liquidity detected');
    recommendations.push('Exercise caution due to low liquidity');
  }

  // Check holder concentration
  if (tokenInfo.holders < 100) {
    warnings.push('Small number of holders');
    recommendations.push('High concentration risk - verify token distribution');
  }

  // Volume analysis
  if (priceData.volume24h < 1000) {
    warnings.push('Low trading volume');
    recommendations.push('Limited market activity - potential lack of interest');
  }

  // Age check
  const tokenAge = Date.now() - new Date(tokenInfo.createdAt).getTime();
  if (tokenAge < 7 * 24 * 60 * 60 * 1000) { // 7 days
    warnings.push('Recently created token');
    recommendations.push('New token - exercise additional caution');
  }

  const riskLevel = determineRiskLevel(warnings.length);

  return {
    riskLevel,
    warnings,
    metrics: {
      holders: tokenInfo.holders,
      volume24h: priceData.volume24h,
      liquidityUSD: priceData.liquidityUSD,
      creationDate: tokenInfo.createdAt
    },
    recommendations
  };
}

function determineRiskLevel(warningCount: number): SecurityReport['riskLevel'] {
  if (warningCount >= 3) return 'CRITICAL';
  if (warningCount === 2) return 'HIGH';
  if (warningCount === 1) return 'MEDIUM';
  return 'LOW';
}