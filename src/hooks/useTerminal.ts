import { useState, useEffect } from 'react';
import { Command } from '../types';
import { processCommand } from '../utils/commands';

export function useTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Add welcome message
    setHistory([{
      input: 'system',
      output: '🔒 TORUS Security Terminal v1.0.0\nType \'help\' for available commands.',
      timestamp: new Date().toISOString()
    }]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    try {
      const output = await processCommand(input.trim());
      setHistory(prev => [...prev, {
        input: input.trim(),
        output,
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      setHistory(prev => [...prev, {
        input: input.trim(),
        output: '❌ Error: Command execution failed',
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setInput('');
      setIsProcessing(false);
    }
  };

  return {
    input,
    setInput,
    history,
    handleSubmit,
    isProcessing
  };
}