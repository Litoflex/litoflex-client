import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сертификаты качества',
  description: 'Сертификаты соответствия и качества продукции LITOFLEX. Гибкий камень и кирпич прошли все необходимые испытания и соответствуют стандартам Республики Беларусь.',
  keywords: [
    'сертификаты LITOFLEX',
    'сертификат гибкий камень',
    'сертификат качества',
    'пожарный сертификат',
    'санитарный сертификат',
    'документы на гибкий камень',
  ],
  openGraph: {
    title: 'Сертификаты качества | LITOFLEX',
    description: 'Сертификаты соответствия и качества продукции LITOFLEX. Все материалы сертифицированы.',
    url: 'https://www.litoflex.by/certificates',
    images: [
      {
        url: 'https://www.litoflex.by/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LITOFLEX - Сертификаты качества',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.litoflex.by/certificates',
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://www.litoflex.by/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Сертификаты",
        "item": "https://www.litoflex.by/certificates"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
