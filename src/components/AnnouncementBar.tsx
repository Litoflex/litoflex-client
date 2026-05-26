'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { PROMO } from '@/lib/promo';

type Props = {
  /**
   * 'top'    — полноширинная полоса сверху страницы (по умолчанию),
   *            автоматически скрывается на главной (там полоса в hero, вариант 'inline').
   * 'inline' — компактная полоса в потоке контента (например, в hero перед каталогом),
   *            без крестика.
   */
  variant?: 'top' | 'inline';
};

export default function AnnouncementBar({ variant = 'top' }: Props) {
  const pathname = usePathname();
  const [closed, setClosed] = useState(false);

  if (!PROMO.enabled) return null;

  // На главной верхний баннер не показываем — там используется inline-вариант в hero.
  if (variant === 'top' && pathname === '/') return null;
  if (variant === 'top' && closed) return null;

  if (variant === 'inline') {
    return (
      <div className="promo-inline" role="region" aria-label="Акция">
        <span className="promo-inline-text">{PROMO.text}</span>
      </div>
    );
  }

  return (
    <div className="promo-bar" role="region" aria-label="Акция">
      <div className="promo-bar-inner">
        <span className="promo-bar-icon" aria-hidden="true">★</span>
        <span className="promo-bar-text promo-bar-text--full">{PROMO.text}</span>
        <span className="promo-bar-text promo-bar-text--short">{PROMO.shortText}</span>
        <button
          type="button"
          className="promo-bar-close"
          onClick={() => setClosed(true)}
          aria-label="Закрыть полосу акции"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
