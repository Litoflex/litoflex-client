'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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

      <main className="policy-page">
        <div className="policy-container">
          <h1 className="policy-title">ПОЛИТИКА<br />КОНФИДЕНЦИАЛЬНОСТИ</h1>
          <p className="policy-subtitle">в отношении обработки персональных данных пользователей сайта www.litoflex.by</p>

          <section className="policy-section">
            <h2>1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
            <p>1.1. Настоящая Политика конфиденциальности (далее — Политика) разработана в соответствии с Законом Республики Беларусь от 07.05.2021 № 99-З «О защите персональных данных» и определяет порядок обработки и защиты персональных данных пользователей сайта www.litoflex.by (далее — Сайт).</p>
            
            <p>1.2. Оператор персональных данных:</p>
            <div className="policy-info-block">
              <p><strong>Общество с ограниченной ответственностью «ЛитоФлекс»</strong></p>
              <p>УНП: 193903896</p>
              <p>Адрес: 220073, Республика Беларусь, г. Минск, ул. Ольшевского, дом 24, оф. 7А, пом. (каб. 7А-1-162)</p>
              <p>Электронная почта: <a href="mailto:info@litoflex.by">info@litoflex.by</a></p>
            </div>

            <p>1.3. Настоящая Политика действует в отношении всех персональных данных, которые Оператор получает от пользователей Сайта посредством заполнения формы заявки.</p>
            
            <p>1.4. Заполняя форму заявки на Сайте и проставляя отметку о согласии с настоящей Политикой, пользователь выражает своё свободное, однозначное, информированное согласие на обработку персональных данных на условиях, изложенных в настоящей Политике.</p>
          </section>

          <section className="policy-section">
            <h2>2. ПЕРСОНАЛЬНЫЕ ДАННЫЕ</h2>
            <p>2.1. Оператор осуществляет обработку следующих персональных данных, добровольно предоставленных пользователем через форму заявки на Сайте:</p>
            <ul>
              <li>имя пользователя;</li>
              <li>контактный номер телефона;</li>
              <li>содержание комментария (при наличии).</li>
            </ul>
            
            <p>2.2. Оператор не осуществляет сбор и обработку специальных персональных данных (сведения о расовой, национальной принадлежности, политических взглядах, членстве в профсоюзах, религиозных или иных убеждениях, здоровье, половой жизни, биометрические и генетические данные).</p>
          </section>

          <section className="policy-section">
            <h2>3. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>
            <p>3.1. Персональные данные обрабатываются в следующих целях:</p>
            <ul>
              <li>осуществление обратного звонка пользователю по оставленной заявке;</li>
              <li>консультирование пользователя по услугам и продукции Оператора;</li>
              <li>заключение и исполнение договоров с пользователем.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. ПРАВОВОЕ ОСНОВАНИЕ ОБРАБОТКИ</h2>
            <p>4.1. Обработка персональных данных осуществляется на основании согласия субъекта персональных данных в соответствии со статьёй 5 Закона Республики Беларусь от 07.05.2021 № 99-З «О защите персональных данных».</p>
          </section>

          <section className="policy-section">
            <h2>5. ПОРЯДОК И СПОСОБЫ ОБРАБОТКИ</h2>
            <p>5.1. Обработка персональных данных включает следующие действия: сбор, систематизацию, хранение, использование, удаление.</p>
            <p>5.2. Обработка персональных данных осуществляется с использованием средств автоматизации.</p>
            <p>5.3. Персональные данные не передаются третьим лицам, за исключением случаев, прямо предусмотренных законодательством Республики Беларусь.</p>
          </section>

          <section className="policy-section">
            <h2>6. СРОКИ ХРАНЕНИЯ ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>
            <p>6.1. Персональные данные хранятся в течение 1 (одного) года с момента их получения.</p>
            <p>6.2. По истечении указанного срока персональные данные подлежат удалению.</p>
            <p>6.3. В случае отзыва согласия на обработку персональных данных Оператор прекращает обработку и удаляет персональные данные в срок, установленный пунктом 8.2 настоящей Политики.</p>
          </section>

          <section className="policy-section">
            <h2>7. МЕРЫ ПО ЗАЩИТЕ ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>
            <p>7.1. Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий в отношении персональных данных.</p>
          </section>

          <section className="policy-section">
            <h2>8. ПРАВА СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>
            <p>8.1. Субъект персональных данных имеет право:</p>
            <ul>
              <li>получить информацию, касающуюся обработки своих персональных данных;</li>
              <li>требовать внесения изменений в свои персональные данные в случае, если они являются неполными, устаревшими или неточными;</li>
              <li>отозвать своё согласие на обработку персональных данных;</li>
              <li>требовать прекращения обработки персональных данных и (или) их удаления;</li>
              <li>получить информацию о предоставлении своих персональных данных третьим лицам;</li>
              <li>обжаловать действия (бездействие) Оператора в Национальный центр защиты персональных данных (cpd.by) или в суд.</li>
            </ul>

            <p>8.2. Сроки рассмотрения заявлений субъекта персональных данных:</p>
            <ul>
              <li>предоставление информации об обработке персональных данных — 5 (пять) рабочих дней;</li>
              <li>внесение изменений в персональные данные — 15 (пятнадцать) дней;</li>
              <li>прекращение обработки и удаление персональных данных — 15 (пятнадцать) дней;</li>
              <li>предоставление информации о передаче данных третьим лицам — 15 (пятнадцать) дней.</li>
            </ul>

            <p>8.3. Для реализации своих прав субъект персональных данных направляет заявление в письменной форме по адресу: 220073, Республика Беларусь, г. Минск, ул. Ольшевского, дом 24, оф. 7А, пом. (каб. 7А-1-162), или в форме электронного документа на адрес электронной почты: <a href="mailto:info@litoflex.by">info@litoflex.by</a>.</p>
          </section>

          <section className="policy-section">
            <h2>9. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h2>
            <p>9.1. Настоящая Политика является общедоступным документом и размещена в сети Интернет по адресу: www.litoflex.by</p>
            <p>9.2. Оператор вправе вносить изменения в настоящую Политику. Новая редакция Политики вступает в силу с момента её размещения на Сайте.</p>
            <p>9.3. К отношениям, не урегулированным настоящей Политикой, применяется законодательство Республики Беларусь о защите персональных данных.</p>
          </section>

          <p className="policy-date"><strong>Дата вступления в силу: 1 февраля 2026 г.</strong></p>

          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <Link href="/" className="btn btn-large back-btn">← Вернуться на главную</Link>
          </div>
        </div>
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
        <div className="footer-bottom">
          <p>© 2025 Litoflex. Все права защищены.</p>
          <Link href="/privacy-policy">Политика конфиденциальности</Link>
        </div>
      </footer>
    </>
  );
}
