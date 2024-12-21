import { PERSONALITY_TRAITS, getRandomElement } from '../utils/aiPersonality';

export async function generateAIResponse(input: string): Promise<string> {
  // Simulate AI processing time
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lowercaseInput = input.toLowerCase();
  
  // Handle greetings
  if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
    return `${getRandomElement(PERSONALITY_TRAITS.witty)} Ready to analyze some blockchain data? Drop me a token address and I'll show you what I can do! 🚀`;
  }

  // Default response
  return `${getRandomElement(PERSONALITY_TRAITS.analytical)} I'm here to help with blockchain analysis! Share a token address with me to get started. 🔍`;
}