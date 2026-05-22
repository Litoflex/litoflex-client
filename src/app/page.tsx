'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePriceQuiz } from '@/components/PriceQuizContext';
import BynSymbol from '@/components/BynSymbol';

export default function HomePage() {
  const { open: openPriceQuiz, pendingMessage, setPendingMessage } = usePriceQuiz();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('stone');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '', privacy: false });
  const [phoneFlag, setPhoneFlag] = useState('\u{1F1E7}\u{1F1FE}');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [galleryImage, setGalleryImage] = useState<string | null>(null);
  const [quickFormOpen, setQuickFormOpen] = useState(false);
  const [quickPhone, setQuickPhone] = useState('');
  const [quickSubmitting, setQuickSubmitting] = useState(false);
  const [quickStatus, setQuickStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [workStatus, setWorkStatus] = useState<{ isOpen: boolean; text: string } | null>(null);

  // Work hours status
  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const day = now.getDay();
      const cur = now.getHours() * 60 + now.getMinutes();
      let open = -1, close = -1;
      if (day >= 1 && day <= 5) { open = 9 * 60; close = 18 * 60; }
      if (open === -1) return { isOpen: false, text: 'Сегодня выходной · Пн с 9:00' };
      if (cur < open) return { isOpen: false, text: `Откроется в ${Math.floor(open / 60)}:00` };
      if (cur >= close) return { isOpen: false, text: 'Закрыто · откроется завтра' };
      const h = Math.floor(close / 60);
      return { isOpen: true, text: `Открыто до ${h}:00` };
    };
    setWorkStatus(compute());
    const t = setInterval(() => setWorkStatus(compute()), 60000);
    return () => clearInterval(t);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 200);
      setBackToTopVisible(window.scrollY > 500);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
        setGalleryImage(null);
        setQuickFormOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Price quiz → contact form prefill + scroll
  useEffect(() => {
    if (!pendingMessage) return;
    setFormData(prev => ({ ...prev, comment: pendingMessage }));
    setPendingMessage(null);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [pendingMessage, setPendingMessage]);

  // Phone formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, '');
    let flag = 'BY';
    
    if (digits.startsWith('375')) flag = '\u{1F1E7}\u{1F1FE}';
    else if (digits.startsWith('380')) flag = '\u{1F1FA}\u{1F1E6}';
    else if (digits.startsWith('370')) flag = '\u{1F1F1}\u{1F1F9}';
    else if (digits.startsWith('371')) flag = '\u{1F1F1}\u{1F1FB}';
    else if (digits.startsWith('372')) flag = '\u{1F1EA}\u{1F1EA}';
    else if (digits.startsWith('48')) flag = '\u{1F1F5}\u{1F1F1}';
    else if (digits.startsWith('49')) flag = '\u{1F1E9}\u{1F1EA}';
    else if (digits.startsWith('7')) flag = '\u{1F1F7}\u{1F1FA}';
    else if (digits.startsWith('1')) flag = '\u{1F1FA}\u{1F1F8}';
    
    setPhoneFlag(flag);

    let formatted = '';
    if (digits.length > 0) {
      if (digits.startsWith('375')) {
        formatted = '+' + digits.substring(0, 3);
        if (digits.length > 3) formatted += ' (' + digits.substring(3, 5);
        if (digits.length > 5) formatted += ') ' + digits.substring(5, 8);
        if (digits.length > 8) formatted += '-' + digits.substring(8, 10);
        if (digits.length > 10) formatted += '-' + digits.substring(10, 12);
      } else if (digits.startsWith('7')) {
        formatted = '+7';
        if (digits.length > 1) formatted += ' (' + digits.substring(1, 4);
        if (digits.length > 4) formatted += ') ' + digits.substring(4, 7);
        if (digits.length > 7) formatted += '-' + digits.substring(7, 9);
        if (digits.length > 9) formatted += '-' + digits.substring(9, 11);
      } else {
        formatted = '+' + digits;
      }
    }
    
    setFormData({ ...formData, phone: formatted });
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFormData({ ...formData, phone: '+375 (' });
    }
  };

  // Quick form phone handler
  const handleQuickPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, '');
    let formatted = '';
    if (digits.length > 0) {
      if (digits.startsWith('375')) {
        formatted = '+' + digits.substring(0, 3);
        if (digits.length > 3) formatted += ' (' + digits.substring(3, 5);
        if (digits.length > 5) formatted += ') ' + digits.substring(5, 8);
        if (digits.length > 8) formatted += '-' + digits.substring(8, 10);
        if (digits.length > 10) formatted += '-' + digits.substring(10, 12);
      } else if (digits.startsWith('7')) {
        formatted = '+7';
        if (digits.length > 1) formatted += ' (' + digits.substring(1, 4);
        if (digits.length > 4) formatted += ') ' + digits.substring(4, 7);
        if (digits.length > 7) formatted += '-' + digits.substring(7, 9);
        if (digits.length > 9) formatted += '-' + digits.substring(9, 11);
      } else {
        formatted = '+' + digits;
      }
    }
    setQuickPhone(formatted);
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuickSubmitting(true);
    setQuickStatus('idle');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '550ec955-d551-4eb3-a82b-f4ae3c23ebe5',
          subject: 'Быстрая заявка с сайта LITOFLEX',
          from_name: 'LITOFLEX Сайт (быстрая форма)',
          phone: quickPhone,
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setQuickStatus('success');
        setQuickPhone('');
      } else {
        setQuickStatus('error');
      }
    } catch {
      setQuickStatus('error');
    } finally {
      setQuickSubmitting(false);
    }
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '550ec955-d551-4eb3-a82b-f4ae3c23ebe5',
          subject: `Заявка с сайта LITOFLEX — ${formData.name}`,
          from_name: 'LITOFLEX Сайт',
          name: formData.name,
          phone: formData.phone,
          comment: formData.comment || '—',
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', comment: '', privacy: false });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Order — scroll to contact form with product info
  const orderProduct = (product: typeof products[0]) => {
    setFormData(prev => ({
      ...prev,
      comment: `Интересует товар: ${product.art}, ${product.size}, ${product.price} ${product.unit}`,
    }));
    setSelectedProduct(null);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Categories
  const categories = [
    { id: 'stone', name: 'Гибкий камень', icon: '🪨', price: 28 },
    { id: 'brick', name: 'Гибкий кирпич', icon: '🧱', price: 30 },
  ];

  // Products data
  const products = [
    // ==================== ГИБКИЙ КАМЕНЬ (28 Б/модуль) ====================
    { id: 1, category: 'stone', art: 'KGS-01', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c16ed91f06f29a7fdc05aaaebe0c84f.png' },
    { id: 2, category: 'stone', art: 'KGS-02', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c0850d2f2933f3fbac98a7bc0a2121c3.png' },
    { id: 3, category: 'stone', art: 'KGS-03', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1167e04643ae79cb6904fab30cd433b6.png' },
    { id: 4, category: 'stone', art: 'KGS-04', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/0f5337ce2c0d2245279631f862a0b6b3.png' },
    { id: 5, category: 'stone', art: 'KGS-05', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7ed06c207598bc2fde8f969294ff379b.png' },
    { id: 6, category: 'stone', art: 'KGS-06', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1cdd55208b89c1a2c77db57b470b731d.png' },
    { id: 7, category: 'stone', art: 'KGS-07', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/97b661b66a385e185a5a62b8dd991c56.png' },
    { id: 8, category: 'stone', art: 'KGS-08', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/25a5ab0ce02e37065df69db80a93ba21.png' },
    { id: 9, category: 'stone', art: 'KMK-01', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c874cbae68a83f16817107eb129de61.png' },
    { id: 10, category: 'stone', art: 'KMK-02', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c7a60d8bf52d9b9175d913a5e0027238.png' },
    { id: 11, category: 'stone', art: 'KMK-03', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/101a4d888dbee04bddffd921ff154ec1.png' },
    { id: 12, category: 'stone', art: 'KNT-01', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: '/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/87e3f19afd056103a03d9e6d5e653e94.png' },

    // ==================== ГИБКИЙ КИРПИЧ (30 Б/модуль) ====================
    { id: 13, category: 'brick', art: 'GK-0100', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e2280423b208482f3fccc5a87dd56a68.png' },
    { id: 14, category: 'brick', art: 'GK-0200', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/626af35c4a6381931d76b25027af1f1d.png' },
    { id: 15, category: 'brick', art: 'GK-0300', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e1455447f13802de034ce68b8612e9c2.png' },
    { id: 16, category: 'brick', art: 'GK-0400', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/428baf7f0e063c9712966f2f13d77040.png' },
    { id: 17, category: 'brick', art: 'GK-0500', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/1a89e213471caa73b28d1591a425cac8.png' },
    { id: 18, category: 'brick', art: 'GK-0600', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/604b02a68ea7eeeb300f9a00db92c15f.png' },
    { id: 19, category: 'brick', art: 'GK-0700', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/dbab54b7377c5721e5cdaa956057b75c.png' },
    { id: 20, category: 'brick', art: 'GK-0800', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/37b5a89d21df3bc3ee580031cd3ebcd6.png' },
    { id: 21, category: 'brick', art: 'GK-0900', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/af77e4626bbefc24d66e3b97c1f58057.png' },
    { id: 22, category: 'brick', art: 'GK-1101', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/529d4fd9b15f0cd1678a6c719e09b6e1.png' },
    { id: 23, category: 'brick', art: 'GK-1200', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/3a17052edb1f5cacbf8a662689cc55e7.png' },
    { id: 24, category: 'brick', art: 'GK-1400', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/5b98eda6cc189c62685acf46a653c5c6.png' },
    { id: 25, category: 'brick', art: 'GK-1402', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/d4df50ec4eab85f7db7fc39faf6e8f4e.png' },
    { id: 26, category: 'brick', art: 'GK-1503', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/d211d12b167d1584157630e6643bfaf6.png' },
    { id: 27, category: 'brick', art: 'GK-1800', size: '1100×550 мм', thickness: '3 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/be1d4590baa5e51034dad239b8507afe.png' },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* JSON-LD: Product KGS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Гибкий камень серия KGS",
            "description": "Гибкий камень с мраморными текстурами для облицовки фасадов и интерьеров. 8 цветов, размер модуля 950×550 мм, толщина 1,5-2 мм.",
            "brand": { "@type": "Brand", "name": "LITOFLEX" },
            "manufacturer": { "@type": "Organization", "name": "ООО ЛитоФлекс" },
            "category": "Облицовочные материалы",
            "offers": {
              "@type": "Offer",
              "price": "28",
              "priceCurrency": "BYN",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "LITOFLEX" }
            }
          })
        }}
      />

      {/* JSON-LD: Product KMK */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Гибкий камень серия KMK",
            "description": "Гибкий камень с выразительными мраморными узорами. 3 цвета, размер модуля 950×550 мм, толщина 1,5-2 мм.",
            "brand": { "@type": "Brand", "name": "LITOFLEX" },
            "manufacturer": { "@type": "Organization", "name": "ООО ЛитоФлекс" },
            "category": "Облицовочные материалы",
            "offers": {
              "@type": "Offer",
              "price": "28",
              "priceCurrency": "BYN",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "LITOFLEX" }
            }
          })
        }}
      />

      {/* JSON-LD: Product KNT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Гибкий камень серия KNT",
            "description": "Гибкий камень с натуральными природными оттенками. Размер модуля 950×550 мм, толщина 1,5-2 мм.",
            "brand": { "@type": "Brand", "name": "LITOFLEX" },
            "manufacturer": { "@type": "Organization", "name": "ООО ЛитоФлекс" },
            "category": "Облицовочные материалы",
            "offers": {
              "@type": "Offer",
              "price": "28",
              "priceCurrency": "BYN",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "LITOFLEX" }
            }
          })
        }}
      />

      {/* JSON-LD: Product GK */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Гибкий кирпич серия GK",
            "description": "Гибкий кирпич — альтернатива клинкеру. 15 цветов, размер модуля 1100×550×3 мм. В 15 раз легче кирпича.",
            "brand": { "@type": "Brand", "name": "LITOFLEX" },
            "manufacturer": { "@type": "Organization", "name": "ООО ЛитоФлекс" },
            "category": "Гибкий кирпич",
            "offers": {
              "@type": "Offer",
              "price": "30",
              "priceCurrency": "BYN",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "LITOFLEX" }
            }
          })
        }}
      />

      {/* JSON-LD: Product List (только на главной) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Каталог продукции LITOFLEX",
            "description": "Гибкий камень и гибкий кирпич от производителя",
            "numberOfItems": 2,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": "Гибкий камень Песчаник Сахара",
                  "description": "Натуральный гибкий камень для внутренней и наружной отделки",
                  "image": "https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c16ed91f06f29a7fdc05aaaebe0c84f.png",
                  "sku": "KGS-01",
                  "brand": { "@type": "Brand", "name": "LITOFLEX" },
                  "offers": {
                    "@type": "Offer",
                    "url": "https://www.litoflex.by/#catalogue",
                    "priceCurrency": "BYN",
                    "price": "28",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                    "seller": { "@type": "Organization", "name": "LITOFLEX" },
                    "hasMerchantReturnPolicy": {
                      "@type": "MerchantReturnPolicy",
                      "applicableCountry": "BY",
                      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                      "merchantReturnDays": 14,
                      "returnMethod": "https://schema.org/ReturnByMail",
                      "returnFees": "https://schema.org/FreeReturn"
                    },
                    "shippingDetails": {
                      "@type": "OfferShippingDetails",
                      "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "BY" },
                      "deliveryTime": {
                        "@type": "ShippingDeliveryTime",
                        "handlingTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitCode": "DAY" },
                        "transitTime": { "@type": "QuantitativeValue", "minValue": 3, "maxValue": 5, "unitCode": "DAY" }
                      },
                      "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "BYN" }
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "Гибкий кирпич Классик Белый",
                  "description": "Декоративный гибкий кирпич для отделки стен",
                  "image": "https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e2280423b208482f3fccc5a87dd56a68.png",
                  "sku": "GK-0100",
                  "brand": { "@type": "Brand", "name": "LITOFLEX" },
                  "offers": {
                    "@type": "Offer",
                    "url": "https://www.litoflex.by/#catalogue",
                    "priceCurrency": "BYN",
                    "price": "30",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                    "seller": { "@type": "Organization", "name": "LITOFLEX" },
                    "hasMerchantReturnPolicy": {
                      "@type": "MerchantReturnPolicy",
                      "applicableCountry": "BY",
                      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                      "merchantReturnDays": 14,
                      "returnMethod": "https://schema.org/ReturnByMail",
                      "returnFees": "https://schema.org/FreeReturn"
                    },
                    "shippingDetails": {
                      "@type": "OfferShippingDetails",
                      "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "BY" },
                      "deliveryTime": {
                        "@type": "ShippingDeliveryTime",
                        "handlingTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitCode": "DAY" },
                        "transitTime": { "@type": "QuantitativeValue", "minValue": 3, "maxValue": 5, "unitCode": "DAY" }
                      },
                      "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "BYN" }
                    }
                  }
                }
              }
            ]
          })
        }}
      />

      {/* JSON-LD: FAQ (только на главной) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Что такое гибкий камень?",
                "acceptedAnswer": { "@type": "Answer", "text": "Гибкий камень — это натуральный отделочный материал толщиной 2-4 мм, состоящий из тонкого слоя песчаника или мраморной крошки на гибкой основе. Он сохраняет текстуру и цвет натурального камня, но при этом гибкий и лёгкий." }
              },
              {
                "@type": "Question",
                "name": "Где можно использовать гибкий камень?",
                "acceptedAnswer": { "@type": "Answer", "text": "Гибкий камень подходит для внутренней и наружной отделки: стены, фасады, колонны, арки, камины, кухонные фартуки. Материал выдерживает температуры от -60°C до +150°C и более 100 циклов заморозки." }
              },
              {
                "@type": "Question",
                "name": "Какой срок службы гибкого камня?",
                "acceptedAnswer": { "@type": "Answer", "text": "Срок службы гибкого камня LITOFLEX составляет более 30 лет при правильной эксплуатации. Материал устойчив к УФ-излучению, влаге и механическим повреждениям." }
              },
              {
                "@type": "Question",
                "name": "Доставляете ли вы по Беларуси?",
                "acceptedAnswer": { "@type": "Answer", "text": "Да, мы осуществляем доставку по всей Республике Беларусь. Доставка в Минске — бесплатно при заказе от 50 м². Для уточнения стоимости доставки в ваш регион свяжитесь с нами по телефону +375 (29) 661-38-42." }
              }
            ]
          })
        }}
      />

      {/* JSON-LD: BreadcrumbList (только на главной) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.litoflex.by/" },
              { "@type": "ListItem", "position": 2, "name": "Каталог", "item": "https://www.litoflex.by/#catalogue" }
            ]
          })
        }}
      />

      {/* Header */}
      <header id="header" className={headerScrolled ? 'scrolled' : ''}>
        <div className="header-top">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>
            <img src="https://www.litoflex.by/logo.png" alt="LITOFLEX" className="logo-img" width={45} height={45} />
            <div>
              <span className="logo-title">LITOFLEX</span>
              <span className="logo-slogan">Гибкие решения для твёрдых идей!</span>
            </div>
          </a>
          
          {/* Desktop: default nav */}
          <nav className="nav-default nav-desktop">
            <ul>
              <li><a href="#benefits">О нас</a></li>
              <li className="hide-mobile"><a href="#chars">Характеристики</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li className="hide-mobile"><Link href="/certificates">Сертификаты</Link></li>
            </ul>
          </nav>

          {/* Desktop: scrolled nav */}
          <nav className="nav-scrolled nav-desktop">
            <ul>
              <li><a href="#stone">Гибкий камень</a></li>
              <li><a href="#brick">Гибкий кирпич</a></li>
            </ul>
          </nav>
          
          {/* Phones - desktop */}
          <div className="header-cta">
            <div className="header-phone-inline">
              <a href="tel:+375296613842">+375(29)661-38-42</a>
              <span className="phone-sep">|</span>
              <a href="tel:+375293027435">+375(29)302-74-35</a>
            </div>
          </div>

          {/* Phones - mobile */}
          <div className="header-mobile-phones">
            <a href="tel:+375296613842">661-38-42</a>
            <span className="phone-sep">|</span>
            <a href="tel:+375293027435">302-74-35</a>
          </div>

          {/* Burger button - mobile */}
          <button
            className={`burger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile burger menu */}
        <div className={`burger-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>О нас</a>
            <a href="#chars" onClick={() => setMobileMenuOpen(false)}>Характеристики</a>
            <a href="#contacts" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
            <Link href="/certificates" onClick={() => setMobileMenuOpen(false)}>Сертификаты</Link>
          </nav>
          <div className="burger-menu-phones">
            <a href="tel:+375296613842">+375 (29) 661-38-42</a>
            <a href="tel:+375293027435">+375 (29) 302-74-35</a>
          </div>
        </div>
      </header>

      {/* Burger overlay */}
      {mobileMenuOpen && <div className="burger-overlay" onClick={() => setMobileMenuOpen(false)} />}

      <main id="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Гибкий камень и гибкий кирпич в Минске<br />— производство ЛитоФлекс</h1>
              <p className="hero-summary" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--gray-600)', margin: '0 0 1.25rem', lineHeight: 1.5 }}>
                ООО «ЛитоФлекс» — производитель гибкого камня и гибкого кирпича в Минске. Доставка по всей Беларуси.
              </p>
              <div className="hero-phone-block">
                <a href="tel:+375296613842" className="hero-phone">+375 (29) 661-38-42</a>
                <a href="tel:+375293027435" className="hero-phone">+375 (29) 302-74-35</a>
              </div>
              <div className="hero-nav">
                <a href="#stone" className="hero-nav-link">гибкий камень</a>
                <a href="#brick" className="hero-nav-link">гибкий кирпич</a>
              </div>
            </div>
          </div>
        </section>

        {/* Catalogue Section */}
        <section className="catalogue" id="catalogue">
          <div className="section-container">

            {/* Stone products */}
            <div className="catalogue-section-heading">
              <h3 className="catalogue-section-label" id="stone">
                <Link href="/gibkij-kamen" style={{ color: 'inherit', textDecoration: 'none' }}>гибкий камень</Link>
              </h3>
              <button
                type="button"
                className="pcq-trigger"
                onClick={openPriceQuiz}
              >
                Рассчитать стоимость
              </button>
            </div>
            <div className="products-grid">
              {products.filter(p => p.category === 'stone').map((product) => (
                <article
                  key={product.id}
                  className="product-card"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.art} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <span className="product-price">{product.price} <BynSymbol />{product.unit}</span>
                    <span className="product-article">{product.art}</span>
                    <div className="product-details">
                      <span className="product-size"><span className="size-label">Размер:</span> {product.size}</span>
                      <span className="product-size"><span className="size-label">Толщина:</span> {product.thickness}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="catalogue-more">
              <Link href="/gibkij-kamen" className="catalogue-more-link">Подробнее о гибком камне →</Link>
            </div>

            {/* Brick products */}
            <div className="catalogue-section-heading">
              <h3 className="catalogue-section-label" id="brick">
                <Link href="/gibkij-kirpich" style={{ color: 'inherit', textDecoration: 'none' }}>гибкий кирпич</Link>
              </h3>
              <button
                type="button"
                className="pcq-trigger"
                onClick={openPriceQuiz}
              >
                Рассчитать стоимость
              </button>
            </div>
            <div className="products-grid">
              {products.filter(p => p.category === 'brick').map((product) => (
                <article
                  key={product.id}
                  className="product-card"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.art} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <span className="product-price">{product.price} <BynSymbol />{product.unit}<br /><span className="product-price-sub">1 <BynSymbol />/шт</span></span>
                    <span className="product-article">{product.art}</span>
                    <div className="product-details">
                      <span className="product-size"><span className="size-label">Размер:</span> {product.size}</span>
                      <span className="product-size"><span className="size-label">Толщина:</span> {product.thickness}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="catalogue-more">
              <Link href="/gibkij-kirpich" className="catalogue-more-link">Подробнее о гибком кирпиче →</Link>
            </div>

            <p className="catalogue-note">Применение: фасад, цоколь, забор, беседки, стены, арки, колонны, камины. В каталоге представлен не весь ассортимент — подберём практически любой цвет под ваш проект.</p>

          </div>
        </section>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="product-modal" onClick={() => setSelectedProduct(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProduct(null)}>✕</button>
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.art} />
              </div>
              <div className="modal-info">
                <span className="modal-article">{selectedProduct.art}</span>
                <div className="modal-specs">
                  <div className="spec-row">
                    <span className="spec-label">Размер:</span>
                    <span className="spec-value">{selectedProduct.size}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Толщина:</span>
                    <span className="spec-value">{selectedProduct.thickness}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Цена:</span>
                    <span className="spec-value price">{selectedProduct.price} <BynSymbol />{selectedProduct.unit}</span>
                  </div>
                  {selectedProduct.category === 'brick' && (
                    <div className="spec-row">
                      <span className="spec-label">Цена за 1 шт:</span>
                      <span className="spec-value price">1 <BynSymbol /></span>
                    </div>
                  )}
                </div>
                <button className="btn btn-large btn-full" onClick={() => orderProduct(selectedProduct)}>
                  Заказать
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Section */}
        <section className="gallery" id="gallery">
          <div className="section-container">
            <header className="section-header">
              <h2 className="section-title">Живые фото работ</h2>
              <p className="section-subtitle">Живые фото гибкого кирпича — текстура и цвет вблизи</p>
            </header>
            <div className="gallery-grid">
              {[
                { src: '/gallery/GK-10.jpg', label: 'GK-10' },
                { src: '/gallery/GK-11.jpg', label: 'GK-11' },
                { src: '/gallery/GK-12.jpg', label: 'GK-12' },
                { src: '/gallery/GK-13.jpg', label: 'GK-13' },
                { src: '/gallery/GK-14.jpg', label: 'GK-14' },
                { src: '/gallery/GK-15.jpg', label: 'GK-15' },
                { src: '/gallery/GK-16.jpg', label: 'GK-16' },
                { src: '/gallery/GK-18.jpg', label: 'GK-18' },
                { src: '/gallery/GK-19.jpg', label: 'GK-19' },
                { src: '/gallery/GK-20.jpg', label: 'GK-20' },
              ].map((photo) => (
                <div
                  key={photo.label}
                  className="gallery-item"
                  onClick={() => setGalleryImage(photo.src)}
                >
                  <img src={photo.src} alt={`Гибкий кирпич ${photo.label}, фото облицовки фасада — LITOFLEX`} loading="lazy" />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-label">{photo.label}</span>
                    <span className="gallery-item-zoom">Увеличить</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Lightbox */}
        {galleryImage && (
          <div className="gallery-lightbox" onClick={() => setGalleryImage(null)}>
            <button className="gallery-lightbox-close" onClick={() => setGalleryImage(null)}>✕</button>
            <img src={galleryImage} alt="Просмотр фото" onClick={(e) => e.stopPropagation()} />
          </div>
        )}

        {/* Benefits Section */}
        <section className="benefits" id="benefits">
          <div className="section-container">
            <header className="section-header">
              <h2 className="section-title">Почему выбирают <strong>нас</strong></h2>
              
            </header>
            <div className="benefits-grid">
              {[
                { num: '01', title: 'Собственное производство', desc: 'Работаем без посредников — честные цены напрямую от производителя' },
                { num: '02', title: 'Любой объём', desc: 'От 1 м² для ремонта до крупных партий для застройщиков' },
                { num: '03', title: 'Сложные формы', desc: 'Углы, арки, колонны — материал гнётся как вам нужно' },
                { num: '04', title: 'Удобный сервис', desc: 'Консультация и доставка по всей Беларуси' },
              ].map((benefit, i) => (
                <article key={i} className={`benefit-card animate-delay-${i + 1}`}>
                  <div className="benefit-number">{benefit.num}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="section-container">
            <header className="section-header">
              <h2 className="section-title">Философия Litoflex</h2>
              <p className="section-subtitle">Сохраняем и преумножаем эстетику естественного мира</p>
            </header>
            <div className="about-content">
              <div className="about-text">
                <p>Используя натуральный песок, мраморную крошку и инновационные связующие, мы производим композитные материалы, которые открывают новые возможности в дизайне интерьеров, фасадов и ландшафтов.</p>
                <br />
                <p>От декоративных панелей до напольных покрытий — каждое наше решение это диалог между природой и прогрессом.</p>
              </div>
              <div className="about-features">
                {[
                  { icon: '🌿', title: 'Экологичность', desc: 'Натуральные компоненты' },
                  { icon: '⚡', title: 'Технологичность', desc: 'Современное производство' },
                  { icon: '🎨', title: 'Эстетика', desc: 'Уникальные текстуры' },
                  { icon: '🛡️', title: 'Надёжность', desc: 'Гарантия качества' },
                ].map((feature, i) => (
                  <article key={i} className={`about-feature animate-delay-${i + 1}`}>
                    <div className="icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Characteristics Section */}
        <section className="characteristics" id="chars">
          <div className="section-container">
            <header className="section-header">
              <h2 className="section-title">Характеристики материала</h2>
              <p className="section-subtitle">Технические параметры наших материалов</p>
            </header>
            <div className="char-grid">
              {[
                { value: 'Высокая', label: 'Атмосферостойкость' },
                { value: 'УФ-стабильность', label: 'Устойчивость к солнцу' },
                { value: '<1%', label: 'Водопоглощение' },
                { value: '100+', label: 'Циклов морозостойкости' },
                { value: '-60°...+150°C', label: 'Диапазон температур' },
                { value: '1.5-4 мм', label: 'Толщина материала' },
                { value: '3-5 кг/м²', label: 'Вес на м²' },
                { value: '30+ лет', label: 'Срок службы' },
              ].map((char, i) => (
                <article key={i} className={`char-card animate-delay-${(i % 4) + 1}`}>
                  <div className="value">{char.value}</div>
                  <div className="label">{char.label}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="contacts" id="contacts">
          <div className="section-container">
            <header className="section-header">
              <h2 className="section-title">Свяжитесь с нами</h2>
              <p className="section-subtitle">Мы всегда готовы помочь с выбором материалов</p>
            </header>
            <div className="contacts-grid">
              <article className="contact-card">
                <div className="icon">📍</div>
                <h3>Адрес</h3>
                <address>
                  <p>Республика Беларусь<br />г. Минск, ул. Ольшевского, 10</p>
                </address>
                <div className="map-links">
                  <a href="https://yandex.ru/maps/?pt=27.507298,53.914033&z=17&l=map" target="_blank" rel="noopener noreferrer" className="map-link yandex">
                    <span>Я</span> Яндекс
                  </a>
                  <a href="https://maps.google.com/?q=53.914033,27.507298" target="_blank" rel="noopener noreferrer" className="map-link google">
                    <span>G</span> Google
                  </a>
                </div>
              </article>
              <article className="contact-card">
                <div className="icon">📞</div>
                <h3>Телефон</h3>
                <p><a href="tel:+375296613842">А1 +375 (29) 661-38-42</a><br /><a href="tel:+375293027435">А1 +375 (29) 302-74-35</a></p>
              </article>
              <article className="contact-card">
                <div className="icon">✉️</div>
                <h3>Email</h3>
                <p><a href="mailto:info@litoflex.by" className="email-link">info@litoflex.by</a></p>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form" id="contact">
          <div className="section-container">
            <header className="section-header">
              <h2 className="section-title">Получить консультацию</h2>
              <p className="section-subtitle">Задайте вопрос об услугах, ценах и заказах материалов</p>
            </header>
            <div className="form-wrapper">
              <div className="form-info">
                <h3>Наши контакты</h3>
                <div className="form-info-item">
                  <div className="icon">📞</div>
                  <div>
                    <p>А1 +375 (29) 661-38-42</p>
                    <p>А1 +375 (29) 302-74-35</p>
                  </div>
                </div>
                <div className="form-info-item">
                  <div className="icon">📍</div>
                  <div>
                    <span className="label-text">АДРЕС ПРОИЗВОДСТВА</span>
                    <p>г. Минск, ул. Ольшевского, 10</p>
                  </div>
                </div>
                <div className="form-info-item">
                  <div className="icon">✉️</div>
                  <p>info@litoflex.by</p>
                </div>
              </div>
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Ваше имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Введите ваше имя"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+375 (__) ___-__-__"
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onFocus={handlePhoneFocus}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="comment">Комментарий</label>
                    <textarea
                      id="comment"
                      name="comment"
                      placeholder="Пожелания к заказу (необязательно)"
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    />
                  </div>
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                    />
                    <label htmlFor="privacy">Я согласен(-а) с <Link href="/privacy-policy">политикой конфиденциальности</Link></label>
                  </div>
                  <button type="submit" className="btn btn-large btn-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="form-success">✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="form-error">❌ Ошибка отправки. Позвоните нам напрямую.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <h2>LITOFLEX</h2>
            <p>Внешняя и внутренняя отделка и утепление фасадов в Республике Беларусь.</p>
          </div>
          <nav className="footer-column">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Главная</a></li>
              <li><a href="#catalogue">Каталог</a></li>
              <li><a href="#benefits">О нас</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li><Link href="/certificates">Сертификаты</Link></li>
              <li><Link href="/faq">Вопросы и Ответы</Link></li>
            </ul>
          </nav>
          <nav className="footer-column">
            <h4>Продукция</h4>
            <ul>
              <li><a href="#stone">Гибкий камень</a></li>
              <li><a href="#brick">Гибкий кирпич</a></li>
            </ul>
          </nav>
          <div className="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+375296613842">А1 +375 (29) 661-38-42</a></li>
              <li><a href="tel:+375293027435">А1 +375 (29) 302-74-35</a></li>
              <li><a href="mailto:info@litoflex.by">info@litoflex.by</a></li>
              <li><a href="https://yandex.ru/maps/?pt=27.507298,53.914033&z=17&l=map" target="_blank" rel="noopener noreferrer">📍 Яндекс Карты</a></li>
              <li><a href="https://maps.google.com/?q=53.914033,27.507298" target="_blank" rel="noopener noreferrer">📍 Google Maps</a></li>
            </ul>
          </div>
          <div className="footer-column footer-schedule">
            <h4>Время работы</h4>
            {workStatus && (
              <div className={`footer-schedule-status ${workStatus.isOpen ? 'is-open' : 'is-closed'}`}>
                <span className="work-dot"></span>
                <span>{workStatus.text}</span>
              </div>
            )}
            <ul className="footer-schedule-list">
              <li><span>Пн — Пт</span><span>09:00 — 18:00</span></li>
              <li className="is-off"><span>Суббота</span><span>выходной</span></li>
              <li className="is-off"><span>Воскресенье</span><span>выходной</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-legal" style={{
          padding: '16px 24px',
          fontSize: '12px',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.65)',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          textAlign: 'center',
        }}>
          <div>ООО «ЛитоФлекс»</div>
          <div>УНП: 193903896</div>
          <div>Юр. адрес: 220073, г. Минск, ул. Ольшевского, 24, оф. 7А</div>
          <div>Тел: <a href="tel:+375296613842" style={{ color: 'inherit', textDecoration: 'none' }}>+375 (29) 661-38-42</a>, <a href="tel:+375293027435" style={{ color: 'inherit', textDecoration: 'none' }}>+375 (29) 302-74-35</a></div>
          <div>Email: info@litoflex.by</div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Litoflex. Все права защищены.</p>
          <Link href="/privacy-policy">Политика конфиденциальности</Link>
        </div>
      </footer>

      {/* Quick Contact Button */}
      <button
        className={`quick-contact-btn ${backToTopVisible ? 'visible' : ''}`}
        onClick={() => { setQuickFormOpen(true); setQuickStatus('idle'); }}
        aria-label="Оставить заявку"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
      </button>

      {/* Quick Form Modal */}
      {quickFormOpen && (
        <div className="quick-form-overlay" onClick={() => setQuickFormOpen(false)}>
          <div className="quick-form-card" onClick={(e) => e.stopPropagation()}>
            <button className="quick-form-close" onClick={() => setQuickFormOpen(false)}>&#10005;</button>
            <h3>Оставить заявку</h3>
            <p>Чтобы получить подробную информацию об объекте оставьте свой номер телефона</p>
            {quickStatus === 'success' ? (
              <p className="quick-form-success">Заявка отправлена! Мы перезвоним вам.</p>
            ) : (
              <form onSubmit={handleQuickSubmit}>
                <label>Ваш телефон для связи</label>
                <input
                  type="tel"
                  placeholder="+375(__) ___-__-__"
                  value={quickPhone}
                  onChange={handleQuickPhone}
                  onFocus={() => { if (!quickPhone) setQuickPhone('+375 ('); }}
                  required
                />
                <button type="submit" className="quick-form-submit" disabled={quickSubmitting}>
                  {quickSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
                {quickStatus === 'error' && (
                  <p className="quick-form-error">Ошибка отправки. Позвоните нам напрямую.</p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
