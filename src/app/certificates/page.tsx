'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workStatus, setWorkStatus] = useState<{ isOpen: boolean; text: string } | null>(null);

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
      return { isOpen: true, text: `Открыто до ${Math.floor(close / 60)}:00` };
    };
    setWorkStatus(compute());
    const t = setInterval(() => setWorkStatus(compute()), 60000);
    return () => clearInterval(t);
  }, []);

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
      <header id="header" className="policy-header" style={{ background: '#ffefe6' }}>
        <div className="header-top">
          <Link href="/" className="logo">
            <img src="https://www.litoflex.by/logo.png" alt="LITOFLEX" className="logo-img" width={45} height={45} />
            <div>
              <span className="logo-title">LITOFLEX</span>
              <span className="logo-slogan">Гибкие решения для твёрдых идей!</span>
            </div>
          </Link>

          <nav className="nav-default nav-desktop">
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/#stone">Гибкий камень</Link></li>
              <li><Link href="/#brick">Гибкий кирпич</Link></li>
              <li><Link href="/#contacts">Контакты</Link></li>
            </ul>
          </nav>

          <div className="header-cta">
            <div className="header-phone-inline">
              <a href="tel:+375296613842">+375(29)661-38-42</a>
              <span className="phone-sep">|</span>
              <a href="tel:+375293027435">+375(29)302-74-35</a>
            </div>
          </div>

          <button className={`burger-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
          <nav>
            <Link href="/" onClick={() => setMenuOpen(false)}>Главная</Link>
            <Link href="/#stone" onClick={() => setMenuOpen(false)}>Гибкий камень</Link>
            <Link href="/#brick" onClick={() => setMenuOpen(false)}>Гибкий кирпич</Link>
            <Link href="/#contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
          </nav>
          <div className="burger-menu-phones">
            <a href="tel:+375296613842">+375 (29) 661-38-42</a>
            <a href="tel:+375293027435">+375 (29) 302-74-35</a>
          </div>
        </div>
      </header>
      {menuOpen && <div className="burger-overlay" onClick={() => setMenuOpen(false)} />}

      {/* Main Content */}
      <main className="certificates-page">
        <div className="certificates-container">
          {/* Header */}
          <div className="certificates-header">
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
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <Link href="/" className="btn btn-large back-btn">← Вернуться на главную</Link>
          </div>
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
            <p>Внешняя и внутренняя отделка и утепление фасадов в Республике Беларусь.</p>
          </div>
          <nav className="footer-column">
            <h4>Навигация</h4>
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/#catalogue">Каталог</Link></li>
              <li><Link href="/#about">О нас</Link></li>
              <li><Link href="/#contacts">Контакты</Link></li>
              <li><Link href="/certificates">Сертификаты</Link></li>
              <li><Link href="/faq">Вопросы и Ответы</Link></li>
            </ul>
          </nav>
          <nav className="footer-column">
            <h4>Продукция</h4>
            <ul>
              <li><Link href="/#stone">Гибкий камень</Link></li>
              <li><Link href="/#brick">Гибкий кирпич</Link></li>
            </ul>
          </nav>
          <div className="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+375296613842">+375(29)661-38-42</a></li>
              <li><a href="tel:+375293027435">+375(29)302-74-35</a></li>
              <li><a href="mailto:info@litoflex.by">info@litoflex.by</a></li>
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
        <div style={{
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
    </>
  );
}
