'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certificates = [
    { id: 1, src: '/1.jpg', title: 'Сертификат соответствия', desc: 'Гибкий камень' },
    { id: 2, src: '/2.jpg', title: 'Сертификат качества', desc: 'Гибкий кирпич' },
    { id: 3, src: '/3.jpg', title: 'Санитарно-эпидемиологическое заключение', desc: 'Безопасность материалов' },
    { id: 4, src: '/4.jpg', title: 'Пожарный сертификат', desc: 'Класс горючести Г1' },
    { id: 5, src: '/5.jpg', title: 'Технические условия', desc: 'ТУ на продукцию' },
  ];

  return (
    <>
      {/* Header */}
      <header id="header" className="policy-header">
        <div className="header-content">
          <Link href="/" className="logo">
            <img src="https://www.litoflex.by/logo.png" alt="LITOFLEX логотип" className="logo-img" width={50} height={50} />
            <div className="logo-text">
              <h1>LITOFLEX</h1>
              <span>Гибкие решения для твёрдых идей</span>
            </div>
          </Link>
          
          <nav>
            <ul>
              <li><Link href="/#main">Главная</Link></li>
              <li><Link href="/#catalogue">Каталог</Link></li>
              <li><Link href="/#about">О нас</Link></li>
              <li><Link href="/#chars">Характеристики</Link></li>
              <li><Link href="/#contacts">Контакты</Link></li>
              <li><Link href="/certificates" className="active-link">Сертификаты</Link></li>
            </ul>
          </nav>
          
          <div className="header-cta">
            <div className="header-phones">
              <a href="tel:+375296613842" className="phone-link">А1 +375 (29) 661-38-42</a>
              <a href="tel:+375293027435" className="phone-link">А1 +375 (29) 302-74-35</a>
            </div>
            <Link href="/#contact" className="btn">Консультация</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="certificates-page">
        <div className="certificates-container">
          {/* Header */}
          <div className="certificates-header">
            <div className="section-tag">Документы</div>
            <h1 className="certificates-title">Сертификаты качества</h1>
            <p className="certificates-subtitle">
              Вся продукция LITOFLEX сертифицирована и соответствует стандартам качества Республики Беларусь
            </p>
          </div>

          {/* Info Block */}
          <div className="certificates-info">
            <div className="info-icon">🛡️</div>
            <div className="info-content">
              <h3>Гарантия качества</h3>
              <p>Наши материалы прошли все необходимые испытания и имеют полный пакет разрешительной документации. Мы гарантируем безопасность и долговечность каждого изделия.</p>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <article 
                key={cert.id} 
                className="certificate-card"
                onClick={() => setSelectedCert(cert.id)}
              >
                <div className="certificate-image">
                  <img src={cert.src} alt={cert.title} loading="lazy" />
                  <div className="certificate-zoom">
                    <span>🔍</span>
                  </div>
                </div>
                <div className="certificate-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Back Button */}
          <Link href="/" className="btn back-btn">← Вернуться на главную</Link>
        </div>
      </main>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="certificate-modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-wrapper">
            <button className="modal-close" onClick={() => setSelectedCert(null)}>✕</button>
            <img 
              src={certificates.find(c => c.id === selectedCert)?.src} 
              alt="Сертификат" 
              onClick={(e) => e.stopPropagation()}
            />
            <div className="modal-nav">
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedCert(prev => prev && prev > 1 ? prev - 1 : 5); }}
                className="nav-btn"
              >
                ←
              </button>
              <span>{selectedCert} / {certificates.length}</span>
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedCert(prev => prev && prev < 5 ? prev + 1 : 1); }}
                className="nav-btn"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

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
              <li><Link href="/#main">Главная</Link></li>
              <li><Link href="/#catalogue">Каталог</Link></li>
              <li><Link href="/#about">О нас</Link></li>
              <li><Link href="/#contacts">Контакты</Link></li>
              <li><Link href="/certificates">Сертификаты</Link></li>
            </ul>
          </nav>
          <nav className="footer-column">
            <h4>Продукция</h4>
            <ul>
              <li><Link href="/#catalogue">Гибкий камень</Link></li>
              <li><Link href="/#catalogue">Гибкий кирпич</Link></li>
            </ul>
          </nav>
          <div className="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+375296613842">А1 +375 (29) 661-38-42</a></li>
              <li><a href="tel:+375293027435">А1 +375 (29) 302-74-35</a></li>
              <li><a href="mailto:info@litoflex.by">info@litoflex.by</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Litoflex. Все права защищены.</p>
          <Link href="/privacy-policy">Политика конфиденциальности</Link>
        </div>
      </footer>
    </>
  );
}
