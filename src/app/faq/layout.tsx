import type { Metadata } from 'next'
import { faqData } from './faqData'

export const metadata: Metadata = {
  title: 'Вопросы и ответы про гибкий камень и гибкий кирпич — LITOFLEX',
  description: 'Ответы на популярные вопросы про гибкий камень и гибкий кирпич LITOFLEX: монтаж, цена, доставка, характеристики, срок службы.',
  alternates: {
    canonical: 'https://www.litoflex.by/faq',
  },
  openGraph: {
    title: 'Вопросы и ответы — LITOFLEX',
    description: 'Ответы на популярные вопросы про гибкий камень и гибкий кирпич',
    url: 'https://www.litoflex.by/faq',
    siteName: 'LITOFLEX',
    locale: 'ru_BY',
    type: 'website',
  },
}

const stripHtml = (s: string) =>
  s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

type FaqCategory = { category: string; questions: { q: string; a: string }[] }

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  const faqItems = (faqData as FaqCategory[]).flatMap((cat) =>
    cat.questions.map((q) => ({
      question: stripHtml(q.q),
      answer: stripHtml(q.a),
    }))
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
