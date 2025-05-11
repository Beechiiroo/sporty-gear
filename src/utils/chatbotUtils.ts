
import { chatbotResponses } from './chatbotResponses';

/**
 * Generate a response based on user message and current language
 * @param userMessage - The message from the user
 * @param language - The current language ('en' or 'fr')
 * @returns A string response from the chatbot
 */
export const generateResponse = (userMessage: string, language: string): string => {
  const userMessageLower = userMessage.toLowerCase();
  
  // Get responses for current language
  const currentResponses = language === 'fr' ? chatbotResponses.fr : chatbotResponses.en;
  
  // Match keywords and return appropriate responses
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
