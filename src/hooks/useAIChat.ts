import { useState, useEffect } from 'react';
import { Message } from '../types';
import { generateAIResponse } from '../services/aiService';

export function useAIChat(onProcessingChange?: (isProcessing: boolean) => void) {
  const [messages, setMessages] = useState<Message[]>([{
    content: "Greetings, human! I am Torus, your blockchain security sentinel. I specialize in detecting digital anomalies and cryptocurrency shenanigans. How may I assist in your quest for blockchain enlightenment today? 🤖✨",
    isAI: true
  }]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    onProcessingChange?.(true);

    // Add user message
    setMessages(prev => [...prev, { content: input, isAI: false }]);
    const userInput = input;
    setInput('');

    try {
      const response = await generateAIResponse(userInput);
      setMessages(prev => [...prev, { content: response, isAI: true }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        content: "I apologize, but I encountered an error processing your request. Please try again.",
        isAI: true 
      }]);
    } finally {
      setIsProcessing(false);
      onProcessingChange?.(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    handleSubmit,
    isProcessing
  };
}