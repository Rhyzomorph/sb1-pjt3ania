import { SecurityReport } from './scanner';
import { TokenInfo, PriceData } from './types';

interface MarketSentiment {
  sentiment: 'bullish' | 'neutral' | 'bearish';
  confidence: number;
  reasons: string[];
}

interface AlphaInsight {
  type: 'opportunity' | 'warning' | 'info';
  description: string;
  confidence: number;
}

export function analyzeMarketSentiment(
  security: SecurityReport,
  tokenInfo: TokenInfo,
  priceData: PriceData
): MarketSentiment {
  const reasons: string[] = [];
  let sentimentScore = 0;

  // Analyze price momentum
  if (priceData.priceChange24h > 5) {
    sentimentScore += 2;
    reasons.push('Strong positive price action');
  } else if (priceData.priceChange24h < -5) {
    sentimentScore -= 2;
    reasons.push('Significant price decline');
  }

  // Volume analysis
  const volumeToMcap = priceData.volume24h / (tokenInfo.supply * priceData.price);
  if (volumeToMcap > 0.2) {
    sentimentScore += 1;
    reasons.push('Healthy trading volume');
  }

  // Holder analysis
  if (security.metrics.holders > 1000) {
    sentimentScore += 1;
    reasons.push('Strong holder base');
  }

  // Determine final sentiment
  const sentiment = 
    sentimentScore > 2 ? 'bullish' :
    sentimentScore < -1 ? 'bearish' : 
    'neutral';

  return {
    sentiment,
    confidence: Math.min(Math.abs(sentimentScore) * 20, 100),
    reasons
  };
}

export function generateAlphaInsights(
  security: SecurityReport,
  tokenInfo: TokenInfo,
  priceData: PriceData
): AlphaInsight[] {
  const insights: AlphaInsight[] = [];

  // Liquidity opportunities
  if (priceData.liquidityUSD < 50000 && security.riskLevel !== 'CRITICAL') {
    insights.push({
      type: 'opportunity',
      description: 'Low liquidity but solid fundamentals - potential for growth as liquidity improves',
      confidence: 70
    });
  }

  // Volume analysis
  if (priceData.volume24h > priceData.liquidityUSD * 2) {
    insights.push({
      type: 'info',
      description: 'High volume relative to liquidity - indicating strong market interest',
      confidence: 85
    });
  }

  // Holder concentration
  if (security.metrics.holders < 100 && priceData.liquidityUSD > 100000) {
    insights.push({
      type: 'warning',
      description: 'High liquidity but low holder count - potential whale manipulation risk',
      confidence: 75
    });
  }

  return insights;
}