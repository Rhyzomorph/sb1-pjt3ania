import React from 'react';
import { Message } from '../../types';
import { ChatMessage } from './ChatMessage';

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
}