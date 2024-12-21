import { getSolanaTokenInfo, getSolanaPriceData, getAccountBalance } from '../services/solana';
import { scanToken } from '../services/scanner';
import { formatUSD, formatDate, formatRiskLevel } from './formatters';

export async function analyzeSolanaToken(address: string): Promise<string> {
  try {
    const [tokenInfo, priceData, securityReport] = await Promise.all([
      getSolanaTokenInfo(address),
      getSolanaPriceData(address),
      scanToken(address)
    ]);

    const warningsSection = securityReport.warnings.length > 0
      ? `\n⚠️ Warnings:\n${securityReport.warnings.map(w => `  • ${w}`).join('\n')}`
      : '\n✅ No immediate security concerns detected';

    const recommendationsSection = securityReport.recommendations.length > 0
      ? `\n📋 Recommendations:\n${securityReport.recommendations.map(r => `  • ${r}`).join('\n')}`
      : '';

    return `
Solana Token Analysis:
📝 Name: ${tokenInfo.name}
🔤 Symbol: ${tokenInfo.symbol}
💰 Supply: ${tokenInfo.supply.toLocaleString()}
💎 Price: ${formatUSD(priceData.price)}
📊 24h Volume: ${formatUSD(priceData.volume24h)}
📈 24h Change: ${priceData.priceChange24h.toFixed(2)}%

🛡️ Security Analysis:
Risk Level: ${formatRiskLevel(securityReport.riskLevel)}
👥 Holders: ${securityReport.metrics.holders.toLocaleString()}
💧 Liquidity: ${formatUSD(securityReport.metrics.liquidityUSD)}
📅 Created: ${formatDate(securityReport.metrics.creationDate)}
${warningsSection}
${recommendationsSection}
`;
  } catch (error) {
    return '❌ Invalid Solana token or API error';
  }
}

export async function checkSolanaWallet(address: string): Promise<string> {
  try {
    const balance = await getAccountBalance(address);
    return `
Wallet Analysis:
💰 SOL Balance: ${balance.toFixed(4)} SOL
`;
  } catch (error) {
    return '❌ Invalid Solana address';
  }
}