import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-icon">🧱</div>
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>К сожалению, запрашиваемая страница не существует или была перемещена.</p>
        <div className="not-found-actions">
          <Link href="/" className="btn btn-primary">
            На главную
          </Link>
          <Link href="/#catalogue" className="btn btn-secondary">
            Смотреть каталог
          </Link>
        </div>
        <div className="not-found-contacts">
          <p>Нужна помощь? Свяжитесь с нами:</p>
          <a href="tel:+375296613842">А1 +375 (29) 661-38-42</a>
        </div>
      </div>
    </div>
  );
}
