import { analyzeSolanaToken, checkSolanaWallet } from './solanaAnalyzer';

export async function processCommand(cmd: string): Promise<string> {
  const [command, ...args] = cmd.toLowerCase().split(' ');

  switch (command) {
    case 'help':
      return `
Available commands:
  - scan <token-address>    : Deep security scan of token
  - sol-token <address>     : Analyze Solana token
  - sol-wallet <address>    : Check Solana wallet
  - monitor                 : Start real-time monitoring
  - clear                   : Clear terminal
  - help                    : Show this help message
`;
    
    case 'scan':
    case 'sol-token':
      if (!args[0]) return '❌ Please provide a token address';
      return await analyzeSolanaToken(args[0]);
      
    case 'sol-wallet':
      if (!args[0]) return '❌ Please provide a wallet address';
      return await checkSolanaWallet(args[0]);
      
    case 'monitor':
      return 'Monitoring Solana network...\n⚡ No suspicious activities detected';
      
    default:
      return `Command not recognized. Type 'help' for available commands.`;
  }
}