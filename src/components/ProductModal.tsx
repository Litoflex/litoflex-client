'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePriceQuiz } from './PriceQuizContext';
import BynSymbol from './BynSymbol';

export type ProductForModal = {
  art: string;
  size: string;
  thickness: string;
  price: number;
  unit: string;
  image: string;
  category?: 'stone' | 'brick';
};

type Props = {
  product: ProductForModal | null;
  onClose: () => void;
  /**
   * Опционально. Если передан — кнопка «Заказать» вызовет его (как на главной).
   * Если не передан — кнопка установит pendingMessage и уведёт на /#contact
   *   (для каталоговых страниц /gibkij-kamen, /gibkij-kirpich).
   */
  onOrder?: (product: ProductForModal) => void;
};

export default function ProductModal({ product, onClose, onOrder }: Props) {
  const router = useRouter();
  const { setPendingMessage } = usePriceQuiz();

  // Esc to close, body scroll lock while open
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleOrder = () => {
    if (onOrder) {
      onOrder(product);
      return;
    }
    const text = `Здравствуйте! Меня интересует ${product.art}, ${product.size}, ${product.price} Б${product.unit}. Свяжитесь со мной.`;
    setPendingMessage(text);
    onClose();
    // scroll: false — отключаем дефолтный «scroll to top» Next App Router,
    // чтобы не было визуального прыжка наверх перед нашим скроллом к форме.
    // Без хеша — иначе будет конкурирующий скролл к section #contact.
    router.push('/', { scroll: false });
  };

  return (
    <div className="product-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">✕</button>
        <div className="modal-image">
          <img src={product.image} alt={product.art} />
        </div>
        <div className="modal-info">
          <span className="modal-article">{product.art}</span>
          <div className="modal-specs">
            <div className="spec-row">
              <span className="spec-label">Размер:</span>
              <span className="spec-value">{product.size}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Толщина:</span>
              <span className="spec-value">{product.thickness}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Площадь модуля:</span>
              <span className="spec-value">{product.category === 'brick' ? '0,6 м²' : '0,52 м²'}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Цена:</span>
              <span className="spec-value price">{product.price} <BynSymbol />{product.unit}</span>
            </div>
            {product.category === 'brick' && (
              <div className="spec-row">
                <span className="spec-label">Цена за 1 шт:</span>
                <span className="spec-value price">0,90 <BynSymbol /></span>
              </div>
            )}
          </div>
          <button className="btn btn-large btn-full" onClick={handleOrder}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
