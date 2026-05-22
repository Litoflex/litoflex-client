'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePriceQuiz } from '@/components/PriceQuizContext';

export default function GibkijKamenPage() {
  const { open: openPriceQuiz } = usePriceQuiz();
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

  const stoneProducts = [
    { id: 1, art: 'KGS-01', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c16ed91f06f29a7fdc05aaaebe0c84f.png' },
    { id: 2, art: 'KGS-02', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c0850d2f2933f3fbac98a7bc0a2121c3.png' },
    { id: 3, art: 'KGS-03', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1167e04643ae79cb6904fab30cd433b6.png' },
    { id: 4, art: 'KGS-04', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/0f5337ce2c0d2245279631f862a0b6b3.png' },
    { id: 5, art: 'KGS-05', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7ed06c207598bc2fde8f969294ff379b.png' },
    { id: 6, art: 'KGS-06', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1cdd55208b89c1a2c77db57b470b731d.png' },
    { id: 7, art: 'KGS-07', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/97b661b66a385e185a5a62b8dd991c56.png' },
    { id: 8, art: 'KGS-08', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/25a5ab0ce02e37065df69db80a93ba21.png' },
    { id: 9, art: 'KMK-01', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c874cbae68a83f16817107eb129de61.png' },
    { id: 10, art: 'KMK-02', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c7a60d8bf52d9b9175d913a5e0027238.png' },
    { id: 11, art: 'KMK-03', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/101a4d888dbee04bddffd921ff154ec1.png' },
    { id: 12, art: 'KNT-01', size: '950×550 мм', thickness: '1.5 - 2 мм', price: 28, unit: 'BYN/модуль', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/87e3f19afd056103a03d9e6d5e653e94.png' },
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
              <li><Link href="/gibkij-kamen">Гибкий камень</Link></li>
              <li><Link href="/gibkij-kirpich">Гибкий кирпич</Link></li>
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
            <Link href="/gibkij-kamen" onClick={() => setMenuOpen(false)}>Гибкий камень</Link>
            <Link href="/gibkij-kirpich" onClick={() => setMenuOpen(false)}>Гибкий кирпич</Link>
            <Link href="/#contacts" onClick={() => setMenuOpen(false)}>Контакты</Link>
          </nav>
          <div className="burger-menu-phones">
            <a href="tel:+375296613842">+375 (29) 661-38-42</a>
            <a href="tel:+375293027435">+375 (29) 302-74-35</a>
          </div>
        </div>
      </header>
      {menuOpen && <div className="burger-overlay" onClick={() => setMenuOpen(false)} />}

      <main>
        <section className="catalogue" style={{ paddingTop: '2.5rem' }}>
          <div className="section-container">
            {/* Breadcrumbs */}
            <nav aria-label="Хлебные крошки" style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
              <Link href="/" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Главная</Link>
              <span style={{ margin: '0 0.5rem' }}>›</span>
              <span>Гибкий камень</span>
            </nav>

            {/* H1 + intro */}
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1.2 }}>
              Гибкий камень в Минске
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem' }}>
              ООО «ЛитоФлекс» — производитель гибкого камня в Минске. Гибкий камень это тонкий слой натурального песчаника, перенесённый на гибкую основу: он повторяет фактуру и рисунок настоящего камня, но весит в разы меньше и легко монтируется как на фасад здания, так и на стены внутри помещения. Продаём напрямую от производства, без посредников — цена от 28 BYN за модуль, доставка по всей Беларуси.
            </p>

            {/* Block: Что такое */}
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, margin: '0 0 1rem' }}>
              Что такое гибкий камень
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 1rem' }}>
              Гибкий камень получают из натурального песчаника: тонкий каменный срез закрепляют на эластичной основе из стеклохолста и полимеров. В результате каждый лист сохраняет уникальный природный рисунок — двух одинаковых модулей не бывает, как и в природе. Толщина листа всего 1,5–2 мм, поэтому материал гнётся и облицовывает не только ровные стены, но и колонны, арки, углы и другие сложные поверхности, где обычная плитка или натуральный камень не подойдут.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem' }}>
              Размер одного модуля — 950×550 мм. В отличие от тяжёлого натурального камня, гибкий камень не нагружает несущие конструкции и подходит даже для тех оснований, которые не выдержали бы вес плитки или клинкера.
            </p>

            {/* Block: Где применяют */}
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, margin: '0 0 1rem' }}>
              Где применяют
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 1rem' }}>
              <strong>Фасад.</strong> Гибкий камень используют для наружной отделки частных домов, коттеджей, цоколей и фасадов коммерческих зданий. Он морозостоек и рассчитан на эксплуатацию в белорусском климате — от летней жары до зимних морозов. Поверхность не выгорает на солнце и сохраняет цвет годами.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem' }}>
              <strong>Интерьер.</strong> Внутри помещений гибким камнем отделывают стены в гостиных и прихожих, рабочие зоны на кухне, ниши, камины, колонны и акцентные участки. Материал негорючий, не боится влаги, поэтому подходит и для ванных комнат. За счёт малого веса и гибкости им можно облицевать поверхность практически любой формы.
            </p>

            {/* Block: Преимущества */}
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, margin: '0 0 1rem' }}>
              Преимущества
            </h2>
            <ul style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem', paddingLeft: '1.25rem' }}>
              <li><strong>Натуральный камень, а не имитация.</strong> Это настоящий срез песчаника, а не печать рисунка — фактура и рисунок природные.</li>
              <li><strong>Малый вес.</strong> В разы легче плитки и натурального камня, не нагружает конструкцию.</li>
              <li><strong>Гибкость.</strong> Облицовка колонн, арок, углов и неровных поверхностей.</li>
              <li><strong>Для улицы и для дома.</strong> Морозостойкий и негорючий — один материал для фасада и интерьера.</li>
              <li><strong>Цена напрямую от производителя.</strong> От 28 BYN за модуль 950×550 мм, без наценки посредников.</li>
              <li><strong>Доставка по всей Беларуси.</strong> Из Минска в любой город.</li>
            </ul>

            {/* Block: Цена и как заказать */}
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, margin: '0 0 1rem' }}>
              Цена и как заказать
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 1rem' }}>
              Гибкий камень ЛитоФлекс — от 28 BYN за модуль размером 950×550 мм. Точная стоимость зависит от коллекции и площади облицовки. Чтобы узнать, сколько материала нужно именно на ваш объект, и рассчитать итоговую сумму — воспользуйтесь калькулятором на сайте или свяжитесь с нами по телефону, мы поможем с расчётом бесплатно.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem' }}>
              Телефоны:{' '}
              <a href="tel:+375296613842" style={{ color: 'var(--brand)', fontWeight: 600 }}>+375 (29) 661-38-42</a>
              {', '}
              <a href="tel:+375293027435" style={{ color: 'var(--brand)', fontWeight: 600 }}>+375 (29) 302-74-35</a>
            </p>

            {/* Catalog section heading + calculator trigger */}
            <div className="catalogue-section-heading">
              <h2 className="catalogue-section-label">коллекции гибкого камня</h2>
              <button
                type="button"
                className="pcq-trigger"
                onClick={openPriceQuiz}
              >
                Рассчитать стоимость
              </button>
            </div>
            <div className="products-grid">
              {stoneProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.art} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <span className="product-article">{product.art}</span>
                    <div className="product-details">
                      <span className="product-size">{product.size}</span>
                      <span className="product-size">Толщина: {product.thickness}</span>
                      <span className="product-price">{product.price} {product.unit}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Back to main */}
            <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
              <Link href="/" className="btn btn-large back-btn">← Вернуться на главную</Link>
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
              <li><Link href="/gibkij-kamen">Гибкий камень</Link></li>
              <li><Link href="/gibkij-kirpich">Гибкий кирпич</Link></li>
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
