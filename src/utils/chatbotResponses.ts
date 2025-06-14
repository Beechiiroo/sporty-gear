
import { ChatbotResponses } from '@/types/chatbot';

// Define all the chatbot responses for both languages
export const chatbotResponses: Record<string, ChatbotResponses> = {
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
  },
  ar: {
    greeting: "مرحبًا! أنا المساعد الافتراضي لـ SportyGear. كيف يمكنني مساعدتك اليوم؟",
    products: "نقدم مجموعة واسعة من المعدات الرياضية ذات الجودة الاحترافية. يمكنك تصفح فئاتنا على الصفحة الرئيسية واستخدام الفلاتر لتحسين بحثك.",
    categories: "فئاتنا الرئيسية هي: اللياقة البدنية، الرياضات الجماعية، رياضات الشتاء، الرياضات المائية، والملحقات. تحتوي كل فئة على منتجات مناسبة لجميع المستويات، من المبتدئين إلى المحترفين.",
    shipping: "نشحن في جميع أنحاء العالم. تتراوح مواعيد التسليم من 3 إلى 7 أيام عمل حسب موقعك. الشحن مجاني للطلبات التي تزيد عن 50 دولارًا.",
    returns: "نقبل الإرجاع في غضون 30 يومًا من الشراء. يجب أن تكون العناصر بحالتها الأصلية. تكون تكاليف إعادة الشحن على مسؤولية المشتري ما لم يكن المنتج معيبًا.",
    contact: "يمكنك الاتصال بنا عبر البريد الإلكتروني على support@sportygear.com أو عبر الهاتف على الرقم 8900 567 234 1+. خدمة العملاء لدينا متاحة من الاثنين إلى الجمعة من الساعة 9 صباحًا حتى 6 مساءً.",
    hours: "خدمة العملاء لدينا متاحة من الاثنين إلى الجمعة من الساعة 9 صباحًا حتى 6 مساءً. متجرنا عبر الإنترنت متاح على مدار الساعة طوال أيام الأسبوع.",
    price: "تختلف أسعارنا حسب المنتجات. نقدم خيارات لجميع الميزانيات بقيمة ممتازة مقابل المال. نقدم بانتظام عروضًا موسمية.",
    discount: "اشترك في نشرتنا الإخبارية للحصول على رمز خصم بنسبة 10٪ على طلبك الأول. كما نقدم خصومات للمشتريات بالجملة والأندية الرياضية.",
    payment: "نقبل بطاقات الائتمان (فيزا، ماستركارد، أمريكان إكسبريس)، PayPal، Apple Pay، والتحويلات المصرفية. جميع المدفوعات مؤمنة بتشفير SSL.",
    size: "أحجامنا هي أحجام أمريكية قياسية. نوفر دليلًا مفصلاً للأحجام في كل صفحة منتج. إذا كان لديك أي شكوك، فلا تتردد في الاتصال بنا للحصول على نصيحة شخصية.",
    material: "نستخدم مواد عالية الجودة ومتينة وصديقة للبيئة كلما أمكن ذلك. يفصل وصف كل منتج المواد المستخدمة وخصائصها.",
    warranty: "جميع منتجاتنا مضمونة لمدة سنتين ضد عيوب التصنيع. تستفيد بعض المنتجات الفاخرة من ضمان ممتد يصل إلى 5 سنوات.",
    stock: "يتم عرض توافر المخزون على كل صفحة منتج ويتم تحديثه في الوقت الحقيقي. يمكنك أيضًا الاشتراك ليتم إخطارك عندما يصبح المنتج غير المتوفر متاحًا مرة أخرى.",
    customization: "يمكن تخصيص بعض منتجاتنا. يرجى التحقق من صفحة المنتج للخيارات المتاحة. قد تكون مواعيد التسليم أطول للمنتجات المخصصة.",
    maintenance: "يتم توفير تعليمات رعاية محددة مع كل منتج لإطالة عمره. نقدم أيضًا منتجات صيانة مناسبة لمعداتنا.",
    bestseller: "منتجاتنا الأكثر شعبية هي أحذية الجري Marathon Pro، ومضارب التنس Elite Series، ومجموعة ملابس اللياقة البدنية Performance. يمكنك العثور عليها في قسم 'الأعلى تقييمًا'.",
    newArrivals: "تتم إضافة منتجاتنا الجديدة كل أسبوع. تحقق من قسم 'العناصر الجديدة' لاكتشاف أحدث ابتكاراتنا واتجاهاتنا.",
    promotions: "ننظم بانتظام عروضات موسمية. اشترك في نشرتنا الإخبارية لتكون أول من يعرف عن الخصومات والعروض الخاصة.",
    giftCard: "نعم، نقدم بطاقات هدايا بقيم مختلفة. إنه خيار رائع إذا كنت لا تعرف التفضيلات الدقيقة للشخص الذي تقدم له هدية.",
    loyaltyProgram: "يتيح لك برنامج الولاء لدينا كسب نقاط مع كل عملية شراء. يمكن تحويل هذه النقاط بعد ذلك إلى خصومات على مشترياتك المستقبلية.",
    ecofriendly: "نحن ملتزمون بنهج صديق للبيئة. نستخدم عبوات قابلة لإعادة التدوير وندعم العديد من المبادرات البيئية.",
    sponsored: "نعم، نرعى العديد من الفرق الرياضية المحلية والرياضيين المحترفين. اكتشفهم في قسم 'حول' من موقعنا.",
    covid: "تستمر خدمتنا في العمل بشكل طبيعي خلال الأزمة الصحية. لقد نفذنا إجراءات تطهير إضافية لجميع طرودنا.",
    default: "شكرًا على سؤالك حول متجر SportyGear. ليس لدي كل المعلومات اللازمة للإجابة بدقة. هل يمكنك إعادة صياغة السؤال أو تقديم مزيد من التفاصيل؟ يمكنك أيضًا الاتصال بخدمة العملاء لدينا للحصول على مساعدة شخصية."
  }
};
