'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

type PriceQuizContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  /** Set by the calculator when user clicks the final CTA. Consumed by the
   *  page that owns the contact form: prefills the comment and scrolls. */
  pendingMessage: string | null;
  setPendingMessage: (msg: string | null) => void;
};

const PriceQuizCtx = createContext<PriceQuizContextValue | null>(null);

export function PriceQuizProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <PriceQuizCtx.Provider
      value={{ isOpen, open, close, pendingMessage, setPendingMessage }}
    >
      {children}
    </PriceQuizCtx.Provider>
  );
}

export function usePriceQuiz(): PriceQuizContextValue {
  const ctx = useContext(PriceQuizCtx);
  if (!ctx) {
    throw new Error('usePriceQuiz must be used inside <PriceQuizProvider>');
  }
  return ctx;
}
