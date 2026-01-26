import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности LITOFLEX. Информация о сборе, использовании и защите персональных данных пользователей сайта.',
  keywords: [
    'политика конфиденциальности',
    'персональные данные',
    'LITOFLEX',
    'защита данных',
  ],
  openGraph: {
    title: 'Политика конфиденциальности | LITOFLEX',
    description: 'Политика конфиденциальности и защиты персональных данных LITOFLEX.',
    url: 'https://www.litoflex.by/privacy-policy',
  },
  alternates: {
    canonical: 'https://www.litoflex.by/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
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
        "name": "Политика конфиденциальности",
        "item": "https://www.litoflex.by/privacy-policy"
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
