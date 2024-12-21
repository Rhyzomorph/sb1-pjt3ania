export interface TokenInfo {
  name: string;
  symbol: string;
  supply: number;
  holders: number;
  createdAt: string;
}

export interface PriceData {
  price: number;
  priceChange24h: number;
  volume24h: number;
  liquidityUSD: number;
}

export interface SecurityReport {
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  warnings: string[];
  metrics: {
    holders: number;
    volume24h: number;
    liquidityUSD: number;
    creationDate: string;
  };
  recommendations: string[];
}