import React from 'react';
import { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex gap-2 ${message.isAI ? '' : 'pl-4'}`}>
      <span className={message.isAI ? 'text-white' : 'text-gray-400'}>
        {message.isAI ? 'Torus:' : 'You:'}
      </span>
      <div className="flex-1 whitespace-pre-wrap">{message.content}</div>
    </div>
  );
}