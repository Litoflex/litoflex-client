"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { faqData } from "./faqData";

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: "transform 0.3s ease",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      flexShrink: 0
    }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const FAQItem = ({ question, answer, isOpen, onClick }: {
  question: string; answer: string; isOpen: boolean; onClick: () => void;
}) => (
  <div style={{ borderBottom: "1px solid #eee", overflow: "hidden" }}>
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "20px 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        textAlign: "left",
        color: isOpen ? "#E8651A" : "#231f20",
        transition: "color 0.3s ease"
      }}
    >
      <span style={{ fontSize: "17px", fontWeight: 500, lineHeight: 1.4, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {question}
      </span>
      <ChevronIcon isOpen={isOpen} />
    </button>
    <div
      style={{
        maxHeight: isOpen ? "500px" : "0",
        opacity: isOpen ? 1 : 0,
        transition: "max-height 0.4s ease, opacity 0.3s ease",
        overflow: "hidden"
      }}
    >
      <p style={{
        margin: "0 0 20px 0",
        padding: "0 40px 0 0",
        fontSize: "15px",
        lineHeight: 1.7,
        color: "#666",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
        {answer}
      </p>
    </div>
  </div>
);

const CategoryTab = ({ label, isActive, onClick }: {
  label: string; isActive: boolean; onClick: () => void;
}) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 24px",
      borderRadius: "100px",
      border: isActive ? "2px solid #E8651A" : "2px solid #ddd",
      background: isActive ? "rgba(232,101,26,0.1)" : "transparent",
      color: isActive ? "#E8651A" : "#666",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      whiteSpace: "nowrap",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}
  >
    {label}
  </button>
);

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
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

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allQuestions = faqData.flatMap((cat, ci) =>
    cat.questions.map((q, qi) => ({ ...q, key: `${ci}-${qi}` }))
  );

  const displayQuestions =
    activeCategory === 0
      ? allQuestions
      : faqData[activeCategory - 1].questions.map((q, qi) => ({
          ...q,
          key: `${activeCategory - 1}-${qi}`
        }));

  const categories = ["Все вопросы", ...faqData.map((c) => c.category)];

  return (
    <>
      {/* Header */}
      <header id="header" className="policy-header" style={{ background: '#ffefe6', boxShadow: 'none' }}>
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

      <div style={{ minHeight: "100vh", background: "#fff", color: "#231f20" }}>
        {/* Header */}
        <div style={{ padding: "60px 20px 40px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700,
            margin: "0 0 16px",
            lineHeight: 1.2,
            fontFamily: "system-ui, -apple-system, sans-serif"
          }}>
            Всё, что нужно знать о{" "}
            <span style={{ color: "#231f20" }}>гибком камне</span>
          </h1>

          <p style={{
            fontSize: "17px",
            color: "#777",
            margin: 0,
            lineHeight: 1.6,
            fontFamily: "system-ui, -apple-system, sans-serif"
          }}>
            Ответы на самые популярные вопросы о продукции компании LITOFLEX — от характеристик материала до монтажа и доставки
          </p>
        </div>

        {/* Category tabs */}
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 20px 32px",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {categories.map((cat, i) => (
            <CategoryTab
              key={cat}
              label={cat}
              isActive={activeCategory === i}
              onClick={() => setActiveCategory(i)}
            />
          ))}
        </div>

        {/* FAQ items */}
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px 40px" }}>
          <div style={{
            background: "#fafafa",
            borderRadius: "16px",
            padding: "8px 32px",
            border: "1px solid #eee"
          }}>
            {displayQuestions.map((item) => (
              <FAQItem
                key={item.key}
                question={item.q}
                answer={item.a}
                isOpen={!!openItems[item.key]}
                onClick={() => toggleItem(item.key)}
              />
            ))}
          </div>
        </div>

        {/* Back to main */}
        <div style={{ textAlign: 'center', padding: '0 20px 60px' }}>
          <Link href="/" className="btn btn-large back-btn">← Вернуться на главную</Link>
        </div>
      </div>

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
