export interface Command {
  input: string;
  output: string;
  timestamp: string;
}

export interface Message {
  content: string;
  isAI: boolean;
}