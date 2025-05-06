
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Message } from '@/types/chatbot';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
  scrollAreaRef: React.RefObject<HTMLDivElement>;
}

const ChatMessages = ({ messages, isTyping, scrollAreaRef }: ChatMessagesProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <ScrollArea className={`flex-grow p-4 ${isDarkMode ? 'text-white' : ''}`} ref={scrollAreaRef}>
      <div className="space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.isUser
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : isDarkMode 
                    ? 'bg-gray-700 text-white rounded-tl-none' 
                    : 'bg-gray-100 rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className={`max-w-[80%] p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} rounded-tl-none`}>
              <span className="flex gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce animation-delay-200">.</span>
                <span className="animate-bounce animation-delay-400">.</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
