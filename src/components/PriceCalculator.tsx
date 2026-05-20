'use client';

import { useEffect, useRef, useState } from 'react';
import { usePriceQuiz } from './PriceQuizContext';

type Category = 'stone' | 'brick';

type Series = {
  art: string;
  image: string;
};

// Image sources mirror those in src/app/page.tsx `products` array.
// If page.tsx products list changes, update here too.
const STONE_SERIES: Series[] = [
  { art: 'KGS-01', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c16ed91f06f29a7fdc05aaaebe0c84f.png' },
  { art: 'KGS-02', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c0850d2f2933f3fbac98a7bc0a2121c3.png' },
  { art: 'KGS-03', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1167e04643ae79cb6904fab30cd433b6.png' },
  { art: 'KGS-04', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/0f5337ce2c0d2245279631f862a0b6b3.png' },
  { art: 'KGS-05', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7ed06c207598bc2fde8f969294ff379b.png' },
  { art: 'KGS-06', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1cdd55208b89c1a2c77db57b470b731d.png' },
  { art: 'KGS-07', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/97b661b66a385e185a5a62b8dd991c56.png' },
  { art: 'KGS-08', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/25a5ab0ce02e37065df69db80a93ba21.png' },
  { art: 'KMK-01', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c874cbae68a83f16817107eb129de61.png' },
  { art: 'KMK-02', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c7a60d8bf52d9b9175d913a5e0027238.png' },
  { art: 'KMK-03', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/101a4d888dbee04bddffd921ff154ec1.png' },
  { art: 'KNT-01', image: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/87e3f19afd056103a03d9e6d5e653e94.png' },
];

const BRICK_SERIES: Series[] = [
  { art: 'GK-0100', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e2280423b208482f3fccc5a87dd56a68.png' },
  { art: 'GK-0200', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/626af35c4a6381931d76b25027af1f1d.png' },
  { art: 'GK-0300', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e1455447f13802de034ce68b8612e9c2.png' },
  { art: 'GK-0400', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/428baf7f0e063c9712966f2f13d77040.png' },
  { art: 'GK-0500', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/1a89e213471caa73b28d1591a425cac8.png' },
  { art: 'GK-0600', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/604b02a68ea7eeeb300f9a00db92c15f.png' },
  { art: 'GK-0700', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/dbab54b7377c5721e5cdaa956057b75c.png' },
  { art: 'GK-0800', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/37b5a89d21df3bc3ee580031cd3ebcd6.png' },
  { art: 'GK-0900', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/af77e4626bbefc24d66e3b97c1f58057.png' },
  { art: 'GK-1101', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/529d4fd9b15f0cd1678a6c719e09b6e1.png' },
  { art: 'GK-1200', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/3a17052edb1f5cacbf8a662689cc55e7.png' },
  { art: 'GK-1400', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/5b98eda6cc189c62685acf46a653c5c6.png' },
  { art: 'GK-1402', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/d4df50ec4eab85f7db7fc39faf6e8f4e.png' },
  { art: 'GK-1503', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/d211d12b167d1584157630e6643bfaf6.png' },
  { art: 'GK-1800', image: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/be1d4590baa5e51034dad239b8507afe.png' },
];

const CONFIG = {
  stone: {
    label: 'Гибкий камень',
    pricePerSqm: 54,
    moduleSqm: 0.5225,
    series: STONE_SERIES,
  },
  brick: {
    label: 'Гибкий кирпич',
    pricePerSqm: 50,
    moduleSqm: 0.605,
    series: BRICK_SERIES,
  },
} as const;

function formatWithSpaces(n: number): string {
  return n.toLocaleString('ru-RU').replace(/\u00A0/g, ' ');
}

export default function PriceCalculator() {
  const { isOpen, close, setPendingMessage } = usePriceQuiz();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [category, setCategory] = useState<Category | null>(null);
  const [series, setSeries] = useState<Series | null>(null);
  const [areaInput, setAreaInput] = useState('');
  const [area, setArea] = useState<number | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset state when reopened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setCategory(null);
      setSeries(null);
      setAreaInput('');
      setArea(null);
    }
  }, [isOpen]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const pickCategory = (c: Category) => {
    setCategory(c);
    setStep(2);
  };

  const pickSeries = (s: Series) => {
    setSeries(s);
    setStep(3);
  };

  const onAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // allow digits and a single dot/comma
    let v = e.target.value.replace(',', '.').replace(/[^\d.]/g, '');
    const firstDot = v.indexOf('.');
    if (firstDot !== -1) {
      v = v.slice(0, firstDot + 1) + v.slice(firstDot + 1).replace(/\./g, '');
    }
    setAreaInput(v);
  };

  const areaNumber = parseFloat(areaInput);
  const areaValid = !isNaN(areaNumber) && areaNumber > 0;

  const doCalculate = () => {
    if (!areaValid) return;
    setArea(areaNumber);
    setStep(4);
  };

  const goBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
  };

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) close();
  };

  // Step-4 calculation
  let cost = 0;
  let modules = 0;
  if (step === 4 && category && area !== null) {
    const cfg = CONFIG[category];
    cost = Math.round(area * cfg.pricePerSqm);
    modules = Math.ceil(area / cfg.moduleSqm);
  }

  const goToContactForm = () => {
    if (!category || !series || area === null) return;
    const text = `Здравствуйте! Меня интересует материал ${series.art} на ${formatWithSpaces(area)} м² (≈${formatWithSpaces(modules)} модулей). Свяжитесь со мной!`;
    setPendingMessage(text);
    close();
  };

  const titles: Record<1 | 2 | 3 | 4, string> = {
    1: 'Что вас интересует?',
    2: 'Выберите материал',
    3: 'Сколько м² нужно?',
    4: 'Ваш расчёт',
  };

  return (
    <div
      ref={overlayRef}
      className="pcq-overlay"
      onClick={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Калькулятор стоимости"
    >
      <div className="pcq-modal">
        <header className="pcq-header">
          {step > 1 ? (
            <button
              type="button"
              className="pcq-back"
              onClick={goBack}
              aria-label="Назад"
            >
              ← Назад
            </button>
          ) : (
            <span className="pcq-back-placeholder" aria-hidden="true" />
          )}
          <h2 className="pcq-title">{titles[step]}</h2>
          <button
            type="button"
            className="pcq-close"
            onClick={close}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </header>

        <div className="pcq-progress" aria-hidden="true">
          {[1, 2, 3, 4].map((n) => (
            <span
              key={n}
              className={`pcq-progress-bar ${n <= step ? 'is-active' : ''}`}
            />
          ))}
        </div>

        <div className="pcq-body">
          {step === 1 && (
            <div className="pcq-cat-cards">
              <button
                type="button"
                className="pcq-cat-card"
                onClick={() => pickCategory('stone')}
              >
                <span className="pcq-cat-name">Гибкий камень</span>
              </button>
              <button
                type="button"
                className="pcq-cat-card"
                onClick={() => pickCategory('brick')}
              >
                <span className="pcq-cat-name">Гибкий кирпич</span>
              </button>
            </div>
          )}

          {step === 2 && category && (
            <div className="pcq-series-grid">
              {CONFIG[category].series.map((s) => (
                <button
                  key={s.art}
                  type="button"
                  className="pcq-series-card"
                  onClick={() => pickSeries(s)}
                >
                  <span className="pcq-series-image">
                    <img src={s.image} alt={s.art} loading="lazy" />
                  </span>
                  <span className="pcq-series-art">{s.art}</span>
                </button>
              ))}
            </div>
          )}

          {step === 3 && series && (
            <div className="pcq-area-step">
              <label htmlFor="pcq-area-input" className="pcq-area-label">
                Введите площадь в квадратных метрах
              </label>
              <input
                id="pcq-area-input"
                type="text"
                inputMode="decimal"
                className="pcq-area-input"
                value={areaInput}
                onChange={onAreaChange}
                placeholder="например, 150"
                autoFocus
              />
              <button
                type="button"
                className="pcq-primary-btn"
                onClick={doCalculate}
                disabled={!areaValid}
              >
                Рассчитать
              </button>
            </div>
          )}

          {step === 4 && category && series && area !== null && (
            <div className="pcq-result-step">
              <div className="pcq-result-card">
                <div className="pcq-result-row">
                  <span className="pcq-result-label">Материал:</span>
                  <span className="pcq-result-value">
                    {CONFIG[category].label} {series.art}
                  </span>
                </div>
                <div className="pcq-result-row">
                  <span className="pcq-result-label">Площадь:</span>
                  <span className="pcq-result-value">
                    {formatWithSpaces(area)} м²
                  </span>
                </div>
                <div className="pcq-result-row">
                  <span className="pcq-result-label">Примерное количество:</span>
                  <span className="pcq-result-value">
                    {formatWithSpaces(modules)} модулей
                  </span>
                </div>
                <div className="pcq-result-row pcq-result-row--total">
                  <span className="pcq-result-label">Стоимость:</span>
                  <span className="pcq-result-value pcq-result-value--total">
                    {formatWithSpaces(cost)} Br
                  </span>
                </div>
                <div className="pcq-result-pricehint">
                  Цена указана за {formatWithSpaces(area)} м²
                </div>
              </div>
              <button
                type="button"
                className="pcq-primary-btn pcq-primary-btn--cta"
                onClick={goToContactForm}
              >
                Связаться с менеджером
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
