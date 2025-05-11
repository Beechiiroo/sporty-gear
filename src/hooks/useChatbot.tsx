
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Message } from '@/types/chatbot';

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

  const generateResponse = (userMessage: string): string => {
    // Enhanced responses based on keywords in the user's question
    const userMessageLower = userMessage.toLowerCase();
    
    // Define expanded e-commerce responses in both languages
    const responses = {
      fr: {
        greeting: "Bonjour ! Je suis l'assistant virtuel de SportyGear. Comment puis-je vous aider aujourd'hui ?",
        products: "Nous proposons une large gamme d'équipements sportifs de qualité professionnelle. Vous pouvez parcourir nos catégories sur la page d'accueil et utiliser les filtres pour affiner votre recherche.",
        categories: "Nos catégories principales sont: Fitness, Sports d'équipe, Sports d'hiver, Sports aquatiques, et Accessoires. Chaque catégorie contient des produits adaptés à tous les niveaux, du débutant au professionnel.",
        shipping: "Nous livrons dans le monde entier. Les délais de livraison varient entre 3 et 7 jours ouvrables selon votre emplacement. La livraison est gratuite pour toute commande supérieure à 50€.",
        returns: "Nous acceptons les retours dans les 30 jours suivant l'achat. Les articles doivent être dans leur état d'origine. Les frais de retour sont à la charge de l'acheteur sauf en cas de défaut du produit.",
        contact: "Vous pouvez nous contacter par email à support@sportygear.com ou par téléphone au +33 1 23 45 67 89. Notre service client est à votre disposition du lundi au vendredi de 9h à 18h.",
        hours: "Notre service client est disponible du lundi au vendredi de 9h à 18h. Notre boutique en ligne est disponible 24h/24 et 7j/7.",
        price: "Nos prix varient selon les produits. Nous proposons des options pour tous les budgets avec un excellent rapport qualité-prix. Nous offrons régulièrement des promotions saisonnières.",
        discount: "Inscrivez-vous à notre newsletter pour recevoir un code de réduction de 10% sur votre première commande. Nous proposons également des remises pour les achats en volume et les clubs sportifs.",
        payment: "Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, Apple Pay et les virements bancaires. Tous les paiements sont sécurisés par un système de cryptage SSL.",
        size: "Nos tailles sont standards européennes. Nous proposons un guide des tailles détaillé sur chaque page de produit. Si vous avez des doutes, n'hésitez pas à nous contacter pour obtenir des conseils personnalisés.",
        material: "Nous utilisons des matériaux de haute qualité, durables et respectueux de l'environnement dans la mesure du possible. Chaque description de produit détaille les matériaux utilisés et leurs propriétés.",
        warranty: "Tous nos produits sont garantis pendant 2 ans contre les défauts de fabrication. Certains produits haut de gamme bénéficient d'une garantie étendue jusqu'à 5 ans.",
        stock: "La disponibilité des stocks est indiquée sur chaque page produit et mise à jour en temps réel. Vous pouvez également vous inscrire pour être alerté lorsqu'un produit en rupture de stock est à nouveau disponible.",
        customization: "Certains de nos produits peuvent être personnalisés. Veuillez consulter la page du produit pour les options disponibles. Les délais de livraison peuvent être plus longs pour les produits personnalisés.",
        maintenance: "Des conseils d'entretien spécifiques sont fournis avec chaque produit pour prolonger sa durée de vie. Nous proposons également des produits d'entretien adaptés à nos équipements.",
        bestseller: "Nos produits les plus populaires sont les chaussures de course Marathon Pro, les raquettes de tennis Elite Series et notre collection de vêtements de fitness Performance. Vous pouvez les trouver dans la section 'Les Mieux Notés'.",
        newArrivals: "Nos nouveaux produits sont ajoutés chaque semaine. Consultez la section 'Nouveautés' pour découvrir nos dernières innovations et tendances.",
        promotions: "Nous organisons régulièrement des promotions saisonnières. Inscrivez-vous à notre newsletter pour être informé en premier des remises et offres spéciales.",
        giftCard: "Oui, nous proposons des cartes cadeaux de différentes valeurs. C'est une excellente option si vous ne connaissez pas les préférences exactes de la personne à qui vous offrez un cadeau.",
        loyaltyProgram: "Notre programme de fidélité vous permet de gagner des points à chaque achat. Ces points peuvent ensuite être convertis en remises sur vos prochains achats.",
        ecofriendly: "Nous nous engageons dans une démarche éco-responsable. Nous utilisons des emballages recyclables et soutenons plusieurs initiatives environnementales.",
        sponsored: "Oui, nous sponsorisons plusieurs équipes sportives locales et athlètes professionnels. Découvrez-les dans la section 'À Propos' de notre site.",
        covid: "Notre service continue de fonctionner normalement pendant la crise sanitaire. Nous avons mis en place des mesures supplémentaires de désinfection pour tous nos colis.",
        default: "Merci pour votre question sur notre boutique SportyGear. Je n'ai pas toutes les informations nécessaires pour y répondre précisément. Pourriez-vous reformuler ou me donner plus de détails ? Vous pouvez également contacter notre service client pour une assistance personnalisée."
      },
      en: {
        greeting: "Hello! I'm SportyGear's virtual assistant. How may I help you today?",
        products: "We offer a wide range of professional quality sports equipment. You can browse our categories on the homepage and use filters to refine your search.",
        categories: "Our main categories are: Fitness, Team Sports, Winter Sports, Water Sports, and Accessories. Each category contains products suitable for all levels, from beginner to professional.",
        shipping: "We ship worldwide. Delivery times range from 3 to 7 business days depending on your location. Shipping is free for orders over $50.",
        returns: "We accept returns within 30 days of purchase. Items must be in their original condition. Return shipping costs are the buyer's responsibility unless the product is defective.",
        contact: "You can contact us by email at support@sportygear.com or by phone at +1 234 567 8900. Our customer service is available Monday to Friday from 9am to 6pm.",
        hours: "Our customer service is available Monday to Friday from 9am to 6pm. Our online store is available 24/7.",
        price: "Our prices vary depending on the products. We offer options for all budgets with excellent value for money. We regularly offer seasonal promotions.",
        discount: "Sign up for our newsletter to receive a 10% discount code on your first order. We also offer discounts for bulk purchases and sports clubs.",
        payment: "We accept credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and bank transfers. All payments are secured by SSL encryption.",
        size: "Our sizes are standard US sizes. We provide a detailed size guide on each product page. If you have any doubts, don't hesitate to contact us for personalized advice.",
        material: "We use high-quality, durable, and environmentally friendly materials whenever possible. Each product description details the materials used and their properties.",
        warranty: "All our products are guaranteed for 2 years against manufacturing defects. Some high-end products benefit from an extended warranty of up to 5 years.",
        stock: "Stock availability is shown on each product page and updated in real-time. You can also sign up to be notified when an out-of-stock product becomes available again.",
        customization: "Some of our products can be customized. Please check the product page for available options. Delivery times may be longer for customized products.",
        maintenance: "Specific care instructions are provided with each product to extend its lifespan. We also offer maintenance products suitable for our equipment.",
        bestseller: "Our most popular products are the Marathon Pro running shoes, the Elite Series tennis rackets, and our Performance fitness clothing collection. You can find them in the 'Best Rated' section.",
        newArrivals: "Our new products are added every week. Check out the 'New Items' section to discover our latest innovations and trends.",
        promotions: "We regularly organize seasonal promotions. Sign up for our newsletter to be the first to know about discounts and special offers.",
        giftCard: "Yes, we offer gift cards of various values. It's a great option if you don't know the exact preferences of the person you're giving a gift to.",
        loyaltyProgram: "Our loyalty program allows you to earn points with each purchase. These points can then be converted into discounts on your future purchases.",
        ecofriendly: "We are committed to an eco-friendly approach. We use recyclable packaging and support several environmental initiatives.",
        sponsored: "Yes, we sponsor several local sports teams and professional athletes. Discover them in the 'About' section of our website.",
        covid: "Our service continues to operate normally during the health crisis. We have implemented additional disinfection measures for all our packages.",
        default: "Thank you for your question about our SportyGear store. I don't have all the necessary information to answer precisely. Could you rephrase or give me more details? You can also contact our customer service for personalized assistance."
      }
    };

    const currentResponses = language === 'fr' ? responses.fr : responses.en;
    
    // Enhanced keyword matching system with more specific e-commerce responses
    if (userMessageLower.includes('bonjour') || userMessageLower.includes('salut') || 
        userMessageLower.includes('hello') || userMessageLower.includes('hi')) {
      return currentResponses.greeting;
    } else if (userMessageLower.includes('produit') || userMessageLower.includes('product') || 
               userMessageLower.includes('article') || userMessageLower.includes('item') ||
               userMessageLower.includes('équipement') || userMessageLower.includes('equipment')) {
      return currentResponses.products;
    } else if (userMessageLower.includes('catégorie') || userMessageLower.includes('category') ||
               userMessageLower.includes('type') || userMessageLower.includes('genre') ||
               userMessageLower.includes('section') || userMessageLower.includes('département')) {
      return currentResponses.categories;
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
               userMessageLower.includes('tarif') || userMessageLower.includes('rate') ||
               userMessageLower.includes('cher') || userMessageLower.includes('expensive')) {
      return currentResponses.price;
    } else if (userMessageLower.includes('réduction') || userMessageLower.includes('discount') || 
               userMessageLower.includes('promo') || userMessageLower.includes('coupon') ||
               userMessageLower.includes('offre') || userMessageLower.includes('offer') ||
               userMessageLower.includes('rabais') || userMessageLower.includes('sale')) {
      return currentResponses.discount;
    } else if (userMessageLower.includes('paiement') || userMessageLower.includes('payment') || 
               userMessageLower.includes('carte') || userMessageLower.includes('card') ||
               userMessageLower.includes('facture') || userMessageLower.includes('invoice') ||
               userMessageLower.includes('transaction') || userMessageLower.includes('paypal')) {
      return currentResponses.payment;
    } else if (userMessageLower.includes('taille') || userMessageLower.includes('size') || 
               userMessageLower.includes('dimension') || userMessageLower.includes('mesure') ||
               userMessageLower.includes('grandeur') || userMessageLower.includes('fit')) {
      return currentResponses.size;
    } else if (userMessageLower.includes('matériau') || userMessageLower.includes('material') || 
               userMessageLower.includes('tissu') || userMessageLower.includes('fabric') ||
               userMessageLower.includes('composition') || userMessageLower.includes('texture') ||
               userMessageLower.includes('qualité') || userMessageLower.includes('quality')) {
      return currentResponses.material;
    } else if (userMessageLower.includes('garantie') || userMessageLower.includes('warranty') || 
               userMessageLower.includes('assurance') || userMessageLower.includes('insurance') ||
               userMessageLower.includes('protection')) {
      return currentResponses.warranty;
    } else if (userMessageLower.includes('stock') || userMessageLower.includes('disponible') || 
               userMessageLower.includes('available') || userMessageLower.includes('inventaire') ||
               userMessageLower.includes('inventory') || userMessageLower.includes('rupture')) {
      return currentResponses.stock;
    } else if (userMessageLower.includes('personnalisation') || userMessageLower.includes('customization') || 
               userMessageLower.includes('personnalisé') || userMessageLower.includes('custom') ||
               userMessageLower.includes('sur mesure') || userMessageLower.includes('tailor')) {
      return currentResponses.customization;
    } else if (userMessageLower.includes('entretien') || userMessageLower.includes('maintenance') || 
               userMessageLower.includes('nettoyage') || userMessageLower.includes('cleaning') ||
               userMessageLower.includes('soin') || userMessageLower.includes('care')) {
      return currentResponses.maintenance;
    } else if (userMessageLower.includes('meilleur') || userMessageLower.includes('best') || 
               userMessageLower.includes('populaire') || userMessageLower.includes('popular') ||
               userMessageLower.includes('vendu') || userMessageLower.includes('bestseller')) {
      return currentResponses.bestseller;
    } else if (userMessageLower.includes('nouveau') || userMessageLower.includes('new') || 
               userMessageLower.includes('récent') || userMessageLower.includes('recent') ||
               userMessageLower.includes('dernier') || userMessageLower.includes('latest')) {
      return currentResponses.newArrivals;
    } else if (userMessageLower.includes('promotion') || userMessageLower.includes('promo') || 
               userMessageLower.includes('solde') || userMessageLower.includes('sale') ||
               userMessageLower.includes('remise') || userMessageLower.includes('discount')) {
      return currentResponses.promotions;
    } else if (userMessageLower.includes('carte cadeau') || userMessageLower.includes('gift card') || 
               userMessageLower.includes('chèque cadeau') || userMessageLower.includes('gift certificate')) {
      return currentResponses.giftCard;
    } else if (userMessageLower.includes('fidélité') || userMessageLower.includes('loyalty') || 
               userMessageLower.includes('point') || userMessageLower.includes('reward') ||
               userMessageLower.includes('avantage') || userMessageLower.includes('benefit')) {
      return currentResponses.loyaltyProgram;
    } else if (userMessageLower.includes('écologique') || userMessageLower.includes('eco') || 
               userMessageLower.includes('environnement') || userMessageLower.includes('environment') ||
               userMessageLower.includes('durable') || userMessageLower.includes('sustainable')) {
      return currentResponses.ecofriendly;
    } else if (userMessageLower.includes('sponsor') || userMessageLower.includes('équipe') || 
               userMessageLower.includes('team') || userMessageLower.includes('athlète') ||
               userMessageLower.includes('athlete')) {
      return currentResponses.sponsored;
    } else if (userMessageLower.includes('covid') || userMessageLower.includes('pandémie') || 
               userMessageLower.includes('pandemic') || userMessageLower.includes('sanitaire') ||
               userMessageLower.includes('health')) {
      return currentResponses.covid;
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
