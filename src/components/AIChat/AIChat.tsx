import React from 'react';
import { Brain } from 'lucide-react';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { useAIChat } from '../../hooks/useAIChat';

interface AIChatProps {
  onProcessingChange?: (isProcessing: boolean) => void;
}

export function AIChat({ onProcessingChange }: AIChatProps) {
  const { messages, input, setInput, handleSubmit, isProcessing } = useAIChat(onProcessingChange);

  return (
    <div className="h-full flex flex-col">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isProcessing={isProcessing}
      />
    </div>
  );
}