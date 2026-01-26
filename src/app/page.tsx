'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('stone');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', privacy: false });
  const [phoneFlag, setPhoneFlag] = useState('BY');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 100);
      setBackToTopVisible(window.scrollY > 500);
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
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Phone formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, '');
    let flag = 'BY';
    
    if (digits.startsWith('375')) flag = 'BY';
    else if (digits.startsWith('380')) flag = 'UA';
    else if (digits.startsWith('370')) flag = 'LT';
    else if (digits.startsWith('371')) flag = 'LV';
    else if (digits.startsWith('372')) flag = 'EE';
    else if (digits.startsWith('48')) flag = 'PL';
    else if (digits.startsWith('49')) flag = 'DE';
    else if (digits.startsWith('7')) flag = 'RU';
    else if (digits.startsWith('1')) flag = 'US';
    
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

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', privacy: false });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Order via Telegram
  const orderViaTelegram = (product: typeof products[0]) => {
    const message = `Здравствуйте! Интересует товар:\n\n📦 ${product.name}\n🔢 Артикул: ${product.art}\n📐 Размер: ${product.size}\n💰 Цена: ${product.price} BYN/м²`;
    window.open(`https://t.me/litoflexby?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Categories
  const categories = [
    { id: 'stone', name: 'Гибкий камень', icon: '🪨', price: 45 },
    { id: 'brick', name: 'Гибкий кирпич', icon: '🧱', price: 52 },
  ];

  // Products data - расширенный каталог с novakdecor.ru
  const products = [
    // ==================== ГИБКИЙ КАМЕНЬ (45 BYN/м²) ====================
    { id: 1, category: 'stone', art: 'KGS-01', name: 'Песчаник Сахара', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c16ed91f06f29a7fdc05aaaebe0c84f.png' },
    { id: 2, category: 'stone', art: 'KGS-02', name: 'Песчаник Терра', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c0850d2f2933f3fbac98a7bc0a2121c3.png' },
    { id: 3, category: 'stone', art: 'KGS-03', name: 'Песчаник Охра', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1167e04643ae79cb6904fab30cd433b6.png' },
    { id: 4, category: 'stone', art: 'KGS-04', name: 'Песчаник Беж', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/0f5337ce2c0d2245279631f862a0b6b3.png' },
    { id: 5, category: 'stone', art: 'KGS-05', name: 'Песчаник Крем', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7ed06c207598bc2fde8f969294ff379b.png' },
    { id: 6, category: 'stone', art: 'KGS-06', name: 'Песчаник Слоновая кость', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1cdd55208b89c1a2c77db57b470b731d.png' },
    { id: 7, category: 'stone', art: 'KGS-07', name: 'Песчаник Серый', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/97b661b66a385e185a5a62b8dd991c56.png' },
    { id: 8, category: 'stone', art: 'KGS-08', name: 'Песчаник Графит', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/25a5ab0ce02e37065df69db80a93ba21.png' },
    { id: 9, category: 'stone', art: 'KMK-01', name: 'Кварц Белый', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c874cbae68a83f16817107eb129de61.png' },
    { id: 10, category: 'stone', art: 'KMK-02', name: 'Кварц Жемчуг', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c7a60d8bf52d9b9175d913a5e0027238.png' },
    { id: 11, category: 'stone', art: 'KMK-03', name: 'Кварц Персик', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/101a4d888dbee04bddffd921ff154ec1.png' },
    { id: 12, category: 'stone', art: 'KNT-01', name: 'Сланец Натуральный', size: '950×550 мм', price: 45, image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/87e3f19afd056103a03d9e6d5e653e94.png' },

    // ==================== ГИБКИЙ КИРПИЧ (52 BYN/м²) ====================
    { id: 13, category: 'brick', art: 'GK-0100', name: 'Кирпич Классик Белый', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e2280423b208482f3fccc5a87dd56a68.png' },
    { id: 14, category: 'brick', art: 'GK-0200', name: 'Кирпич Классик Айвори', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/626af35c4a6381931d76b25027af1f1d.png' },
    { id: 15, category: 'brick', art: 'GK-0300', name: 'Кирпич Классик Песочный', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e1455447f13802de034ce68b8612e9c2.png' },
    { id: 16, category: 'brick', art: 'GK-0400', name: 'Кирпич Классик Терракот', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/428baf7f0e063c9712966f2f13d77040.png' },
    { id: 17, category: 'brick', art: 'GK-0500', name: 'Кирпич Классик Красный', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/1a89e213471caa73b28d1591a425cac8.png' },
    { id: 18, category: 'brick', art: 'GK-0600', name: 'Кирпич Классик Бордо', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/604b02a68ea7eeeb300f9a00db92c15f.png' },
    { id: 19, category: 'brick', art: 'GK-0700', name: 'Кирпич Классик Коричневый', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/dbab54b7377c5721e5cdaa956057b75c.png' },
    { id: 20, category: 'brick', art: 'GK-0800', name: 'Кирпич Классик Серый', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/37b5a89d21df3bc3ee580031cd3ebcd6.png' },
    { id: 21, category: 'brick', art: 'GR-0100', name: 'Кирпич Рустик Белый', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/ecc6b9b08072800e87c070b409d7002c.png' },
    { id: 22, category: 'brick', art: 'GR-0400', name: 'Кирпич Рустик Терракот', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/c70a59edc6255953b39e09950880e594.png' },
    { id: 23, category: 'brick', art: 'GB-0100', name: 'Кирпич Баварский Микс', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/3f8c728bffc3c6b1279533808a2f5858.png' },
    { id: 24, category: 'brick', art: 'GB-0300', name: 'Кирпич Баварский Классик', size: '1000×600 мм', price: 52, image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/514bbba1609bb42442da922ec919925b.png' },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Header */}
      <header id="header" className={headerScrolled ? 'scrolled' : ''}>
        <div className="header-content">
          <a href="#main" className="logo">
            <img src="https://www.litoflex.by/logo.png" alt="LITOFLEX логотип" className="logo-img" width={50} height={50} />
            <div className="logo-text">
              <h1>LITOFLEX</h1>
              <span>Гибкие решения для твёрдых идей</span>
            </div>
          </a>
          
          <nav>
            <ul>
              <li><a href="#main">Главная</a></li>
              <li><a href="#catalogue">Каталог</a></li>
              <li><a href="#about">О нас</a></li>
              <li><a href="#chars">Характеристики</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li><Link href="/certificates">Сертификаты</Link></li>
            </ul>
          </nav>
          
          <div className="header-cta">
            <div className="header-phones">
              <a href="tel:+375296613842" className="phone-link">А1 +375 (29) 661-38-42</a>
              <a href="tel:+375293027435" className="phone-link">А1 +375 (29) 302-74-35</a>
            </div>
            <a href="#contact" className="btn">Консультация</a>
          </div>

          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#main" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Главная</a></li>
          <li><a href="#catalogue" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Каталог</a></li>
          <li><a href="#about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>О нас</a></li>
          <li><a href="#chars" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Характеристики</a></li>
          <li><a href="#contacts" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Контакты</a></li>
          <li><Link href="/certificates" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Сертификаты</Link></li>
        </ul>
      </div>

      <main id="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          <div className="brick-particle"></div>
          
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span></span>
                Производство в Беларуси
              </div>
              <h2>
                Превращаем песок в <span className="highlight">искусство</span>
              </h2>
              <p>Натуральный песок и мраморная крошка в современных композитных материалах. Подлинная красота природы в технологичных решениях для любого проекта.</p>
              <div className="hero-buttons">
                <a href="#catalogue" className="btn btn-large">Смотреть каталог</a>
                <a href="#contact" className="btn btn-large btn-outline">Связаться с нами</a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="number">30+</div>
                    <div className="label">Лет службы</div>
                  </div>
                  <div className="stat-item">
                    <div className="number">100+</div>
                    <div className="label">Циклов морозостойкости</div>
                  </div>
                  <div className="stat-item">
                    <div className="number">Г1</div>
                    <div className="label">Класс горючести</div>
                  </div>
                  <div className="stat-item">
                    <div className="number">-60°</div>
                    <div className="label">До +150°C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <span>Листайте вниз</span>
            <div className="arrow"></div>
          </div>
        </section>

        {/* Catalogue Section - NEW DESIGN */}
        <section className="catalogue" id="catalogue">
          <div className="section-container">
            <header className="section-header animate-on-scroll">
              <div className="section-tag">Продукция</div>
              <h2 className="section-title">Каталог материалов</h2>
              <p className="section-subtitle">Выберите категорию и ознакомьтесь с ассортиментом</p>
            </header>

            {/* Category Buttons */}
            <div className="catalogue-categories animate-on-scroll">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="category-icon">{cat.icon}</span>
                  <span className="category-name">{cat.name}</span>
                  <span className="category-price">от {cat.price} BYN/м²</span>
                </button>
              ))}
            </div>

            {/* Disclaimer */}
            <aside className="catalogue-disclaimer animate-on-scroll">
              <strong>⚠️ Важно:</strong> Изображения носят ознакомительный характер. Оттенок и текстура материала могут незначительно отличаться от представленных на фото ввиду использования натуральных компонентов.
            </aside>

            {/* Products Grid */}
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article 
                  key={product.id} 
                  className="product-card"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <span className="product-article">{product.art}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-details">
                      <span className="product-size">{product.size}</span>
                      <span className="product-price">{product.price} BYN/м²</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>


          </div>
        </section>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="product-modal" onClick={() => setSelectedProduct(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProduct(null)}>✕</button>
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-info">
                <span className="modal-article">{selectedProduct.art}</span>
                <h3 className="modal-name">{selectedProduct.name}</h3>
                <div className="modal-specs">
                  <div className="spec-row">
                    <span className="spec-label">Размер:</span>
                    <span className="spec-value">{selectedProduct.size}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Цена:</span>
                    <span className="spec-value price">{selectedProduct.price} BYN/м²</span>
                  </div>
                </div>
                <button className="btn btn-large btn-full" onClick={() => orderViaTelegram(selectedProduct)}>
                  Заказать в Telegram
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        <section className="benefits" id="benefits">
          <div className="section-container">
            <header className="section-header animate-on-scroll">
              <div className="section-tag">Преимущества</div>
              <h2 className="section-title">Почему выбирают <strong>нас</strong></h2>
              <p className="section-subtitle">Работаем напрямую от производителя</p>
            </header>
            <div className="benefits-grid">
              {[
                { num: '01', title: 'Собственное производство', desc: 'Работаем без посредников — честные цены напрямую от завода' },
                { num: '02', title: 'Любой объём', desc: 'От 1 м² для ремонта до крупных партий для застройщиков' },
                { num: '03', title: 'Сложные формы', desc: 'Углы, арки, колонны — материал гнётся как вам нужно' },
                { num: '04', title: 'Полный сервис', desc: 'Консультация и доставка по всей Беларуси' },
              ].map((benefit, i) => (
                <article key={i} className={`benefit-card animate-on-scroll animate-delay-${i + 1}`}>
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
            <header className="section-header animate-on-scroll">
              <div className="section-tag">О компании</div>
              <h2 className="section-title">Философия Litoflex</h2>
              <p className="section-subtitle">Сохраняем и преумножаем эстетику естественного мира</p>
            </header>
            <div className="about-content">
              <div className="about-text animate-on-scroll">
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
                  <article key={i} className={`about-feature animate-on-scroll animate-delay-${i + 1}`}>
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
            <header className="section-header animate-on-scroll">
              <div className="section-tag">Спецификации</div>
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
                { value: '2-4 мм', label: 'Толщина материала' },
                { value: '3-5 кг/м²', label: 'Вес на м²' },
                { value: '30+ лет', label: 'Срок службы' },
              ].map((char, i) => (
                <article key={i} className={`char-card animate-on-scroll animate-delay-${(i % 4) + 1}`}>
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
            <header className="section-header animate-on-scroll">
              <div className="section-tag">Контакты</div>
              <h2 className="section-title">Свяжитесь с нами</h2>
              <p className="section-subtitle">Мы всегда готовы помочь с выбором материалов</p>
            </header>
            <div className="contacts-grid">
              <article className="contact-card animate-on-scroll animate-delay-1">
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
              <article className="contact-card animate-on-scroll animate-delay-2">
                <div className="icon">📞</div>
                <h3>Телефон</h3>
                <p><a href="tel:+375296613842">А1 +375 (29) 661-38-42</a><br /><a href="tel:+375293027435">А1 +375 (29) 302-74-35</a></p>
              </article>
              <article className="contact-card animate-on-scroll animate-delay-3">
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
            <header className="section-header animate-on-scroll">
              <div className="section-tag">Заявка</div>
              <h2 className="section-title">Получить консультацию</h2>
              <p className="section-subtitle">Задайте вопрос об услугах, ценах и заказах материалов</p>
            </header>
            <div className="form-wrapper">
              <div className="form-info animate-on-scroll">
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
              <div className="form-container animate-on-scroll">
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
                    <div className="phone-input-wrapper">
                      <div className="phone-flag-container">
                        <span className="phone-flag">{phoneFlag}</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+375 (29) 123-45-67"
                        required
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onFocus={handlePhoneFocus}
                      />
                    </div>
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
            <p>Внешняя и внутренняя отделка и утепление фасадов в Республике Беларусь и странах СНГ.</p>
          </div>
          <nav className="footer-column">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#main">Главная</a></li>
              <li><a href="#catalogue">Каталог</a></li>
              <li><a href="#about">О нас</a></li>
              <li><a href="#contacts">Контакты</a></li>
              <li><Link href="/certificates">Сертификаты</Link></li>
            </ul>
          </nav>
          <nav className="footer-column">
            <h4>Продукция</h4>
            <ul>
              <li><a href="#catalogue">Гибкий камень</a></li>
              <li><a href="#catalogue">Гибкий кирпич</a></li>
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
        </div>
        <div className="footer-bottom">
          <p>© 2025 Litoflex. Все права защищены.</p>
          <Link href="/privacy-policy">Политика конфиденциальности</Link>
        </div>
      </footer>

      {/* Back to Top */}
      <a href="#main" className={`back-to-top ${backToTopVisible ? 'visible' : ''}`}>↑</a>
    </>
  );
}
