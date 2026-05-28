'use client';

import { PROMO } from '@/lib/promo';

/**
 * Inline-полоса акции для блока каталога.
 * Используется на главной, /gibkij-kamen, /gibkij-kirpich — над секцией товаров.
 * На страницах без каталога (FAQ, certificates, privacy-policy) не подключается.
 */
export default function AnnouncementBar() {
  if (!PROMO.enabled) return null;

  return (
    <div className="promo-inline" role="region" aria-label="Акция">
      <span className="promo-inline-text">{PROMO.text}</span>
    </div>
  );
}
