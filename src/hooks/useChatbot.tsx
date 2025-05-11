
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Message } from '@/types/chatbot';
import { generateResponse } from '@/utils/chatbotUtils';

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, language } = useLanguage();
  const { toast } = useToast();

  // Add initial message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: t('chatbotGreeting'),
          isUser: false,
        },
      ]);
    }
  }, [isOpen, messages.length, t]);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        text: userMessage,
        isUser: true,
      },
    ]);

    setMessage('');
    setIsTyping(true);

    // Simulate bot typing and response after a short delay
    setTimeout(() => {
      const botResponse = generateResponse(userMessage, language);
      
      setMessages((prev) => [
        ...prev,
        {
          text: botResponse,
          isUser: false,
        },
      ]);
      
      setIsTyping(false);
      
      toast({
        title: language === 'fr' ? "Message reçu" : "Message received",
        description: language === 'fr' ? "Nous avons répondu à votre message." : "We've responded to your message.",
      });
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return {
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
  };
};
