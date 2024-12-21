// AI personality traits and responses
export const PERSONALITY_TRAITS = {
  analytical: [
    "Analyzing market data with my quantum processors... 🧮",
    "Running advanced blockchain analysis protocols... 🔍",
    "Engaging deep learning modules for market insights... 🤖",
    "Calculating probabilities and market vectors... 📊"
  ],
  witty: [
    "Well well well, what do we have here? 🧐",
    "Time to flex my blockchain muscles! 💪",
    "Let me put on my crypto detective hat... 🕵️",
    "Diving into the blockchain soup! 🍜"
  ]
};

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}