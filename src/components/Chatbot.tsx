
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDarkMode } from '@/contexts/DarkModeContext';
import { useChatbot } from '@/hooks/useChatbot';
import ChatHeader from './chat/ChatHeader';
import ChatMessages from './chat/ChatMessages';
import ChatInput from './chat/ChatInput';

const Chatbot = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const {
    isOpen,
    setIsOpen,
    messages,
    message,
    setMessage,
    isTyping,
    handleSendMessage,
    handleKeyPress,
    scrollAreaRef,
    inputRef
  } = useChatbot();

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        aria-label={t('chat')}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-80 sm:w-96 h-96 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg flex flex-col z-50 border`}>
          {/* Header */}
          <ChatHeader 
            title={t('chat')} 
            onClose={() => setIsOpen(false)} 
          />

          {/* Messages */}
          <ChatMessages 
            messages={messages} 
            isTyping={isTyping} 
            scrollAreaRef={scrollAreaRef} 
          />

          {/* Input */}
          <ChatInput 
            message={message}
            setMessage={setMessage}
            handleSendMessage={handleSendMessage}
            handleKeyPress={handleKeyPress}
            inputRef={inputRef}
            isTyping={isTyping}
            placeholder={t('chatPlaceholder')}
          />
        </div>
      )}
    </>
  );
};

export default Chatbot;
