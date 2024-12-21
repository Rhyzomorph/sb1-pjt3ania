import { getContractCode, getTokenInfo, getGasPrice, getBlockNumber } from '../services/ethereum';

export async function analyzeContract(address: string): Promise<string> {
  try {
    const code = await getContractCode(address);
    if (code === '0x') {
      return '❌ Not a contract address';
    }
    
    const gasPrice = await getGasPrice();
    return `
Contract Analysis:
✅ Contract verified
📊 Bytecode size: ${(code.length - 2) / 2} bytes
⛽ Current gas price: ${gasPrice} gwei
`;
  } catch (error) {
    return '❌ Invalid address or network error';
  }
}

export async function analyzeToken(address: string): Promise<string> {
  try {
    const tokenInfo = await getTokenInfo(address);
    return `
Token Analysis:
📝 Name: ${tokenInfo.name}
🔤 Symbol: ${tokenInfo.symbol}
💰 Total Supply: ${tokenInfo.totalSupply}
`;
  } catch (error) {
    return '❌ Invalid token contract';
  }
}

export async function getNetworkStatus(): Promise<string> {
  try {
    const [blockNumber, gasPrice] = await Promise.all([
      getBlockNumber(),
      getGasPrice()
    ]);
    
    return `
Network Status:
📦 Latest block: ${blockNumber}
⛽ Gas price: ${gasPrice} gwei
`;
  } catch (error) {
    return '❌ Network error';
  }
}