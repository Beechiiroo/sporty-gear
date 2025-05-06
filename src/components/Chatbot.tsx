
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const { isDarkMode } = useDarkMode();

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

  const generateResponse = (userMessage: string): string => {
    // Enhanced responses based on keywords in the user's question
    const userMessageLower = userMessage.toLowerCase();
    
    // Define common responses in both languages
    const responses = {
      fr: {
        greeting: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
        products: "Nous proposons une large gamme d'équipements sportifs de qualité professionnelle. Vous pouvez parcourir nos catégories sur la page d'accueil.",
        shipping: "Nous livrons dans le monde entier. Les délais de livraison varient entre 3 et 7 jours ouvrables selon votre emplacement.",
        returns: "Nous acceptons les retours dans les 30 jours suivant l'achat. Les articles doivent être dans leur état d'origine.",
        contact: "Vous pouvez nous contacter par email à support@sportify.com ou par téléphone au +33 1 23 45 67 89.",
        hours: "Notre service client est disponible du lundi au vendredi de 9h à 18h.",
        price: "Nos prix varient selon les produits. Nous proposons des options pour tous les budgets avec un excellent rapport qualité-prix.",
        discount: "Inscrivez-vous à notre newsletter pour recevoir un code de réduction de 10% sur votre première commande.",
        payment: "Nous acceptons les cartes de crédit, PayPal et les virements bancaires.",
        size: "Nos tailles sont standards européennes. Nous proposons un guide des tailles détaillé sur chaque page de produit.",
        material: "Nous utilisons des matériaux de haute qualité, durables et respectueux de l'environnement dans la mesure du possible.",
        warranty: "Tous nos produits sont garantis pendant 2 ans contre les défauts de fabrication.",
        stock: "La disponibilité des stocks est indiquée sur chaque page produit et mise à jour en temps réel.",
        customization: "Certains de nos produits peuvent être personnalisés. Veuillez consulter la page du produit pour les options disponibles.",
        maintenance: "Des conseils d'entretien spécifiques sont fournis avec chaque produit pour prolonger sa durée de vie.",
        default: "Merci pour votre question. Je n'ai pas toutes les informations nécessaires pour y répondre. Voulez-vous que je vous mette en contact avec notre service client ?"
      },
      en: {
        greeting: "Hello! How can I help you today?",
        products: "We offer a wide range of professional quality sports equipment. You can browse our categories on the homepage.",
        shipping: "We ship worldwide. Delivery times range from 3 to 7 business days depending on your location.",
        returns: "We accept returns within 30 days of purchase. Items must be in their original condition.",
        contact: "You can contact us by email at support@sportify.com or by phone at +1 234 567 8900.",
        hours: "Our customer service is available Monday to Friday from 9am to 6pm.",
        price: "Our prices vary depending on the products. We offer options for all budgets with excellent value for money.",
        discount: "Sign up for our newsletter to receive a 10% discount code on your first order.",
        payment: "We accept credit cards, PayPal, and bank transfers.",
        size: "Our sizes are standard European sizes. We provide a detailed size guide on each product page.",
        material: "We use high-quality, durable, and environmentally friendly materials whenever possible.",
        warranty: "All our products are guaranteed for 2 years against manufacturing defects.",
        stock: "Stock availability is shown on each product page and updated in real-time.",
        customization: "Some of our products can be customized. Please check the product page for available options.",
        maintenance: "Specific care instructions are provided with each product to extend its lifespan.",
        default: "Thank you for your question. I don't have all the necessary information to answer it. Would you like me to connect you with our customer service?"
      }
    };

    const currentResponses = language === 'fr' ? responses.fr : responses.en;
    
    // Enhanced keyword matching with more specific responses
    if (userMessageLower.includes('bonjour') || userMessageLower.includes('salut') || 
        userMessageLower.includes('hello') || userMessageLower.includes('hi')) {
      return currentResponses.greeting;
    } else if (userMessageLower.includes('produit') || userMessageLower.includes('product') || 
               userMessageLower.includes('article') || userMessageLower.includes('item') ||
               userMessageLower.includes('équipement') || userMessageLower.includes('equipment')) {
      return currentResponses.products;
    } else if (userMessageLower.includes('livraison') || userMessageLower.includes('shipping') || 
               userMessageLower.includes('délai') || userMessageLower.includes('delivery') ||
               userMessageLower.includes('envoi') || userMessageLower.includes('expédition')) {
      return currentResponses.shipping;
    } else if (userMessageLower.includes('retour') || userMessageLower.includes('return') || 
               userMessageLower.includes('rembourse') || userMessageLower.includes('refund') ||
               userMessageLower.includes('échange') || userMessageLower.includes('exchange')) {
      return currentResponses.returns;
    } else if (userMessageLower.includes('contact') || userMessageLower.includes('téléphone') || 
               userMessageLower.includes('email') || userMessageLower.includes('phone') ||
               userMessageLower.includes('joindre') || userMessageLower.includes('reach')) {
      return currentResponses.contact;
    } else if (userMessageLower.includes('horaire') || userMessageLower.includes('hour') || 
               userMessageLower.includes('ouverture') || userMessageLower.includes('open') ||
               userMessageLower.includes('fermé') || userMessageLower.includes('closed')) {
      return currentResponses.hours;
    } else if (userMessageLower.includes('prix') || userMessageLower.includes('price') || 
               userMessageLower.includes('coût') || userMessageLower.includes('cost') ||
               userMessageLower.includes('tarif') || userMessageLower.includes('rate')) {
      return currentResponses.price;
    } else if (userMessageLower.includes('réduction') || userMessageLower.includes('discount') || 
               userMessageLower.includes('promo') || userMessageLower.includes('coupon') ||
               userMessageLower.includes('offre') || userMessageLower.includes('offer')) {
      return currentResponses.discount;
    } else if (userMessageLower.includes('paiement') || userMessageLower.includes('payment') || 
               userMessageLower.includes('carte') || userMessageLower.includes('card') ||
               userMessageLower.includes('facture') || userMessageLower.includes('invoice')) {
      return currentResponses.payment;
    } else if (userMessageLower.includes('taille') || userMessageLower.includes('size') || 
               userMessageLower.includes('dimension') || userMessageLower.includes('mesure')) {
      return currentResponses.size;
    } else if (userMessageLower.includes('matériau') || userMessageLower.includes('material') || 
               userMessageLower.includes('tissu') || userMessageLower.includes('fabric') ||
               userMessageLower.includes('composition') || userMessageLower.includes('texture')) {
      return currentResponses.material;
    } else if (userMessageLower.includes('garantie') || userMessageLower.includes('warranty') || 
               userMessageLower.includes('assurance') || userMessageLower.includes('insurance')) {
      return currentResponses.warranty;
    } else if (userMessageLower.includes('stock') || userMessageLower.includes('disponible') || 
               userMessageLower.includes('available') || userMessageLower.includes('inventaire') ||
               userMessageLower.includes('inventory')) {
      return currentResponses.stock;
    } else if (userMessageLower.includes('personnalisation') || userMessageLower.includes('customization') || 
               userMessageLower.includes('personnalisé') || userMessageLower.includes('custom')) {
      return currentResponses.customization;
    } else if (userMessageLower.includes('entretien') || userMessageLower.includes('maintenance') || 
               userMessageLower.includes('nettoyage') || userMessageLower.includes('cleaning')) {
      return currentResponses.maintenance;
    } else {
      return currentResponses.default;
    }
  };

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
      const botResponse = generateResponse(userMessage);
      
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
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">{t('chat')}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 text-white hover:text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
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

          {/* Input */}
          <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} flex`}>
            <Input
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('chatPlaceholder')}
              className={`flex-grow mr-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : ''}`}
              disabled={isTyping}
            />
            <Button onClick={handleSendMessage} size="icon" disabled={isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
