import { analyzeMarketSentiment, generateAlphaInsights } from '../services/analysis';
import { scanToken } from '../services/scanner';
import { getSolanaTokenInfo, getSolanaPriceData } from '../services/solana';
import { PERSONALITY_TRAITS, getRandomElement } from './aiPersonality';

// Format helpers
function formatSentiment(sentiment: string): string {
  const icons = {
    bullish: '📈',
    neutral: '↔️',
    bearish: '📉'
  };
  return `${icons[sentiment]} ${sentiment.toUpperCase()}`;
}

function formatInsightType(type: string): string {
  const icons = {
    opportunity: '💎',
    warning: '⚠️',
    info: 'ℹ️'
  };
  return icons[type];
}

export async function generateAIResponse(input: string): Promise<string> {
  const lowercaseInput = input.toLowerCase();
  
  // Handle token analysis
  const tokenMatch = input.match(/0x[a-fA-F0-9]{40}|[1-9A-HJ-NP-Za-km-z]{32,44}/);
  if (tokenMatch) {
    try {
      const [tokenInfo, priceData, security] = await Promise.all([
        getSolanaTokenInfo(tokenMatch[0]),
        getSolanaPriceData(tokenMatch[0]),
        scanToken(tokenMatch[0])
      ]);

      const sentiment = analyzeMarketSentiment(security, tokenInfo, priceData);
      const insights = generateAlphaInsights(security, tokenInfo, priceData);

      return `${getRandomElement(PERSONALITY_TRAITS.analytical)}

🎯 Market Analysis for ${tokenInfo.name}:

Market Sentiment: ${formatSentiment(sentiment.sentiment)} (${sentiment.confidence}% confidence)
${sentiment.reasons.map(r => `• ${r}`).join('\n')}

🔮 Alpha Insights:
${insights.map(insight => `${formatInsightType(insight.type)} ${insight.description} (${insight.confidence}% confidence)`).join('\n')}

Remember: This is not financial advice! Always DYOR! 🧠`;
    } catch (error) {
      return `${getRandomElement(PERSONALITY_TRAITS.witty)}
Oops! My quantum circuits got a bit tangled there. Are you sure that's a valid token address? 🤔`;
    }
  }

  // Handle general queries
  if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
    return `${getRandomElement(PERSONALITY_TRAITS.witty)} Ready to analyze some blockchain data? Drop me a token address and I'll show you what I can do! 🚀`;
  }

  return `${getRandomElement(PERSONALITY_TRAITS.analytical)} I'm here to help with blockchain analysis! Share a token address with me to get started. 🔍`;
}