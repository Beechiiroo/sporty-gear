
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  isTyping: boolean;
  placeholder: string;
}

const ChatInput = ({ 
  message, 
  setMessage, 
  handleSendMessage, 
  handleKeyPress, 
  inputRef,
  isTyping,
  placeholder 
}: ChatInputProps) => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} flex`}>
      <Input
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className={`flex-grow mr-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
        disabled={isTyping}
      />
      <Button onClick={handleSendMessage} size="icon" disabled={isTyping}>
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatInput;
