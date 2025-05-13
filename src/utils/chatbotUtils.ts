
import { chatbotResponses } from './chatbotResponses';

export const generateResponse = (userMessage: string, language: string = 'en') => {
  // Convert to lowercase for easier matching
  const message = userMessage.toLowerCase();
  
  // Select language-specific responses (fallback to English if not available)
  const responses = chatbotResponses[language] || chatbotResponses.en;
  
  // Check for keywords to determine the response type
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || 
      message.includes('bonjour') || message.includes('salut') || 
      message.includes('مرحبا') || message.includes('السلام عليكم')) {
    return responses.greeting;
  } 
  
  else if (message.includes('product') || message.includes('item') || message.includes('produit') || 
           message.includes('article') || message.includes('منتج') || message.includes('سلعة')) {
    return responses.products;
  } 
  
  else if (message.includes('categor') || message.includes('catégor') || message.includes('فئات')) {
    return responses.categories;
  } 
  
  else if (message.includes('ship') || message.includes('delivery') || message.includes('livraison') || 
           message.includes('شحن') || message.includes('توصيل')) {
    return responses.shipping;
  } 
  
  else if (message.includes('return') || message.includes('refund') || message.includes('retour') ||
           message.includes('remboursement') || message.includes('إرجاع') || message.includes('استرداد')) {
    return responses.returns;
  } 
  
  else if (message.includes('contact') || message.includes('اتصل')) {
    return responses.contact;
  } 
  
  else if (message.includes('hour') || message.includes('time') || message.includes('heure') ||
           message.includes('temps') || message.includes('ساعة') || message.includes('وقت')) {
    return responses.hours;
  } 
  
  else if (message.includes('price') || message.includes('cost') || message.includes('prix') || 
           message.includes('coût') || message.includes('سعر') || message.includes('تكلفة')) {
    return responses.price;
  } 
  
  else if (message.includes('discount') || message.includes('promo') || message.includes('réduction') ||
           message.includes('خصم') || message.includes('ترويج')) {
    return responses.discount;
  } 
  
  else if (message.includes('payment') || message.includes('paiement') || message.includes('دفع')) {
    return responses.payment;
  } 
  
  else if (message.includes('size') || message.includes('taille') || message.includes('حجم')) {
    return responses.size;
  } 
  
  else if (message.includes('material') || message.includes('matériau') || message.includes('مواد')) {
    return responses.material;
  } 
  
  else if (message.includes('warranty') || message.includes('garantie') || message.includes('ضمان')) {
    return responses.warranty;
  } 
  
  else if (message.includes('stock') || message.includes('inventory') || message.includes('inventaire') || 
           message.includes('مخزون')) {
    return responses.stock;
  } 
  
  else if (message.includes('custom') || message.includes('personnalis') || message.includes('تخصيص')) {
    return responses.customization;
  } 
  
  else if (message.includes('care') || message.includes('maintenance') || message.includes('entretien') || 
           message.includes('maintenance') || message.includes('رعاية') || message.includes('صيانة')) {
    return responses.maintenance;
  } 
  
  else if (message.includes('best') || message.includes('popular') || message.includes('meilleur') || 
           message.includes('populaire') || message.includes('أفضل') || message.includes('شعبية')) {
    return responses.bestseller;
  } 
  
  else if (message.includes('new') || message.includes('recent') || message.includes('nouveau') ||
           message.includes('récent') || message.includes('جديد') || message.includes('حديث')) {
    return responses.newArrivals;
  } 
  
  else if (message.includes('promotion') || message.includes('deal') || message.includes('offre') ||
           message.includes('عرض') || message.includes('صفقة')) {
    return responses.promotions;
  } 
  
  else if (message.includes('gift') || message.includes('cadeau') || message.includes('هدية')) {
    return responses.giftCard;
  } 
  
  else if (message.includes('loyal') || message.includes('reward') || message.includes('fidélité') || 
           message.includes('récompense') || message.includes('ولاء') || message.includes('مكافأة')) {
    return responses.loyaltyProgram;
  } 
  
  else if (message.includes('eco') || message.includes('environment') || message.includes('environnement') || 
           message.includes('بيئة') || message.includes('إيكو')) {
    return responses.ecofriendly;
  } 
  
  else if (message.includes('spons') || message.includes('partner') || message.includes('partenaire') ||
           message.includes('راعي') || message.includes('شريك')) {
    return responses.sponsored;
  } 
  
  else if (message.includes('covid') || message.includes('pandemic') || message.includes('pandémie') || 
           message.includes('كوفيد') || message.includes('جائحة')) {
    return responses.covid;
  }
  
  // Default response if no keywords match
  return responses.default;
};
