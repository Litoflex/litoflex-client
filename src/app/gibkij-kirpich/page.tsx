'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePriceQuiz } from '@/components/PriceQuizContext';
import BynSymbol from '@/components/BynSymbol';
import AnnouncementBar from '@/components/AnnouncementBar';
import ProductModal, { type ProductForModal } from '@/components/ProductModal';

export default function GibkijKirpichPage() {
  const { open: openPriceQuiz } = usePriceQuiz();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductForModal | null>(null);
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

  const brickProducts = [
    { id: 1, art: 'GK-0100', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e2280423b208482f3fccc5a87dd56a68.png' },
    { id: 2, art: 'GK-0200', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/626af35c4a6381931d76b25027af1f1d.png' },
    { id: 3, art: 'GK-0300', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e1455447f13802de034ce68b8612e9c2.png' },
    { id: 4, art: 'GK-0400', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/428baf7f0e063c9712966f2f13d77040.png' },
    { id: 5, art: 'GK-0500', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/1a89e213471caa73b28d1591a425cac8.png' },
    { id: 6, art: 'GK-0600', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/604b02a68ea7eeeb300f9a00db92c15f.png' },
    { id: 7, art: 'GK-0700', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/dbab54b7377c5721e5cdaa956057b75c.png' },
    { id: 8, art: 'GK-0800', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/37b5a89d21df3bc3ee580031cd3ebcd6.png' },
    { id: 9, art: 'GK-0900', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/af77e4626bbefc24d66e3b97c1f58057.png' },
    { id: 10, art: 'GK-1101', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/529d4fd9b15f0cd1678a6c719e09b6e1.png' },
    { id: 11, art: 'GK-1200', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/3a17052edb1f5cacbf8a662689cc55e7.png' },
    { id: 12, art: 'GK-1400', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/5b98eda6cc189c62685acf46a653c5c6.png' },
    { id: 13, art: 'GK-1402', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/d4df50ec4eab85f7db7fc39faf6e8f4e.png' },
    { id: 14, art: 'GK-1503', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/d211d12b167d1584157630e6643bfaf6.png' },
    { id: 15, art: 'GK-1800', size: '1100×550 мм', thickness: '3-4 мм', price: 30, unit: '/модуль', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/be1d4590baa5e51034dad239b8507afe.png' },
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
              <span>Гибкий кирпич</span>
            </nav>

            {/* H1 + intro */}
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1.2 }}>
              Гибкий кирпич в Минске
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem' }}>
              ООО «ЛитоФлекс» — производитель гибкого кирпича в Минске. Гибкий кирпич это тонкие гибкие плитки, имитирующие кладку из настоящего кирпича: они выглядят как клинкерная или ручной формовки кладка, но при этом тонкие, лёгкие и монтируются в разы проще. Подходят и для фасада, и для отделки стен внутри помещения. Продаём напрямую от производителя — цена от 30 <BynSymbol /> за модуль, доставка по всей Беларуси.
            </p>

            {/* Block: Что такое */}
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, margin: '0 0 1rem' }}>
              Что такое гибкий кирпич
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 1rem' }}>
              Гибкий кирпич — это современная альтернатива тяжёлому облицовочному и клинкерному кирпичу. Каждый модуль повторяет форму, фактуру и цвет кирпичной кладки, но имеет толщину всего около 3-4 мм и легко гнётся. Размер модуля — 1100×550 мм, что ускоряет монтаж: одним листом закрывается сразу участок «кладки», а не отдельные кирпичики.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem' }}>
              Благодаря гибкости материал ложится не только на прямые стены, но и на углы, колонны и закруглённые поверхности — там, где настоящий кирпич потребовал бы сложной и дорогой кладки. Внешне готовая поверхность практически неотличима от классической кирпичной стены.
            </p>

            {/* Block: Где применяют */}
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, margin: '0 0 1rem' }}>
              Где применяют
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 1rem' }}>
              <strong>Фасад.</strong> Гибким кирпичом отделывают фасады домов, коттеджей, цоколи, входные группы и коммерческие здания. Материал морозостоек и подходит для белорусского климата — не трескается на морозе и не выгорает на солнце. Это способ получить вид дорогой кирпичной кладки без нагрузки на фундамент и без затрат на полноценную кладку.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem' }}>
              <strong>Интерьер.</strong> Внутри помещений гибкий кирпич создаёт популярный «лофт»-эффект: им оформляют стены в гостиных, кухнях, прихожих, кафе и студиях. Материал лёгкий, негорючий и не боится влаги. За счёт гибкости им можно облицевать арки, ниши и углы, сохранив аккуратный вид кладки без швов в неудобных местах.
            </p>

            {/* Block: Преимущества */}
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, margin: '0 0 1rem' }}>
              Преимущества
            </h2>
            <ul style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem', paddingLeft: '1.25rem' }}>
              <li><strong>Вид настоящей кирпичной кладки</strong> без веса и стоимости клинкера.</li>
              <li><strong>Тонкий и лёгкий.</strong> Около 3-4 мм, не нагружает стены и фундамент.</li>
              <li><strong>Быстрый монтаж.</strong> Модуль 1100×550 мм закрывает большую площадь за раз.</li>
              <li><strong>Гибкость.</strong> Облицовка углов, колонн и закруглений без подрезки кирпичиков.</li>
              <li><strong>Для фасада и интерьера.</strong> Морозостойкий снаружи, негорючий внутри.</li>
              <li><strong>Цена напрямую от производителя.</strong> От 30 <BynSymbol /> за модуль, без посредников.</li>
              <li><strong>Доставка по всей Беларуси</strong> из Минска.</li>
            </ul>

            {/* Block: Цена и как заказать */}
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 700, margin: '0 0 1rem' }}>
              Цена и как заказать
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 1rem' }}>
              Гибкий кирпич ЛитоФлекс — от 30 <BynSymbol /> за модуль размером 1100×550 мм. Итоговая стоимость зависит от коллекции и площади. Рассчитать количество материала на ваш объект и узнать точную сумму можно через калькулятор на сайте или по телефону — поможем с расчётом бесплатно.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--gray-700)', maxWidth: '900px', margin: '0 0 2.5rem' }}>
              Телефоны:{' '}
              <a href="tel:+375296613842" style={{ color: 'var(--brand)', fontWeight: 600 }}>+375 (29) 661-38-42</a>
              {', '}
              <a href="tel:+375293027435" style={{ color: 'var(--brand)', fontWeight: 600 }}>+375 (29) 302-74-35</a>
            </p>

            {/* Promo bar над каталогом */}
            <AnnouncementBar />

            {/* Catalog section heading + calculator trigger */}
            <div className="catalogue-section-heading catalogue-section-heading--stack">
              <h2 className="catalogue-section-label">коллекции гибкого кирпича</h2>
              <button
                type="button"
                className="pcq-trigger"
                onClick={openPriceQuiz}
              >
                Рассчитать стоимость
              </button>
            </div>
            <div className="products-grid">
              {brickProducts.map((product) => (
                <article
                  key={product.id}
                  className="product-card"
                  onClick={() => setSelectedProduct({ ...product, category: 'brick' })}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.art} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <span className="product-price">{product.price} <BynSymbol />{product.unit}<span className="product-price-area"><span className="product-price-area-dash">—</span>0,6 м²</span></span>
                    <span className="product-article">{product.art}</span>
                    <div className="product-details">
                      <span className="product-size"><span className="size-label">Размер:</span> {product.size}</span>
                      <span className="product-size"><span className="size-label">Толщина:</span> {product.thickness}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

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
