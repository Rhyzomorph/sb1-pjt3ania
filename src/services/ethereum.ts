import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/demo');

export async function getContractCode(address: string): Promise<string> {
  return await provider.getCode(address);
}

export async function getTokenInfo(address: string) {
  const erc20Abi = ['function name() view returns (string)', 'function symbol() view returns (string)', 'function totalSupply() view returns (uint256)'];
  const contract = new ethers.Contract(address, erc20Abi, provider);
  
  try {
    const [name, symbol, totalSupply] = await Promise.all([
      contract.name(),
      contract.symbol(),
      contract.totalSupply()
    ]);
    
    return { name, symbol, totalSupply: totalSupply.toString() };
  } catch (error) {
    throw new Error('Invalid token contract');
  }
}

export async function getGasPrice(): Promise<string> {
  const gasPrice = await provider.getFeeData();
  return ethers.formatUnits(gasPrice.gasPrice || 0, 'gwei');
}

export async function getBlockNumber(): Promise<number> {
  return await provider.getBlockNumber();
}