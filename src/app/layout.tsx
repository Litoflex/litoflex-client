import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import CookieBanner from '@/components/CookieBanner';
import { PriceQuizProvider } from '@/components/PriceQuizContext';
import PriceCalculator from '@/components/PriceCalculator';
import AnnouncementBar from '@/components/AnnouncementBar';
import './globals.css';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f2137' },
  ],
};

export const metadata: Metadata = {
  // Основные мета теги
  title: {
    default: 'LITOFLEX — Гибкий камень и гибкий кирпич для вашего дома | Минск',
    template: '%s | LITOFLEX',
  },
  description: 'LITOFLEX. Гибкий камень и кирпич для вашего дома - фасад, забор, интерьер. Производство в Беларуси. Телефон: +375(29)661-38-42',
  keywords: [
    'гибкий камень',
    'гибкий камень Минск',
    'гибкий камень Беларусь',
    'гибкий кирпич',
    'отделочные материалы',
    'фасадные панели',
    'декоративная отделка',
    'гибкий камень купить',
    'гибкий кирпич Минск',
    'гибкий кирпич Беларусь',
    'фасадная плитка',
    'декоративный камень',
    'облицовочные материалы',
    'litoflex',
    'литофлекс',
    'Минск',
    'Беларусь',
    'РБ',
    'Республика Беларусь',
    'отделка фасада',
    'внутренняя отделка',
    'наружная отделка',
    'гибкий песчаник',
    'гибкий сланец',
    'фасадный декор',
  ],
  authors: [{ name: 'LITOFLEX', url: 'https://www.litoflex.by' }],
  creator: 'LITOFLEX',
  publisher: 'ООО «ЛитоФлекс»',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph (Facebook, VK, Telegram)
  openGraph: {
    type: 'website',
    url: 'https://www.litoflex.by/',
    title: 'LITOFLEX — Гибкий камень и гибкий кирпич для вашего дома',
    description: 'LITOFLEX. Гибкий камень и кирпич для вашего дома - фасад, забор, интерьер. Производство в Беларуси. Телефон: +375(29)661-38-42',
    images: [
      {
        url: 'https://www.litoflex.by/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LITOFLEX - Гибкий камень и термопанели',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.litoflex.by/logo.png',
        width: 500,
        height: 500,
        alt: 'LITOFLEX логотип',
      },
    ],
    locale: 'ru_RU',
    siteName: 'LITOFLEX',
    countryName: 'Belarus',
    emails: ['info@litoflex.by'],
    phoneNumbers: ['+375296613842', '+375293027435'],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'LITOFLEX — Гибкий камень и гибкий кирпич для вашего дома',
    description: 'LITOFLEX. Гибкий камень и кирпич для вашего дома - фасад, забор, интерьер. Производство в Беларуси. +375(29)661-38-42',
    images: ['https://www.litoflex.by/og-image.jpg'],
    creator: '@litoflex',
    site: '@litoflex',
  },
  
  // Иконки
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Manifest для PWA
  manifest: '/manifest.json',
  
  // Канонический URL
  alternates: {
    canonical: 'https://www.litoflex.by/',
    languages: {
      'ru-BY': 'https://www.litoflex.by/',
      'ru-RU': 'https://www.litoflex.by/',
    },
  },
  
  // Категория сайта
  category: 'construction',
  
  // Дополнительно
  applicationName: 'LITOFLEX',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        {/* Preconnect для ускорения загрузки */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.litoflex.by/#organization",
              "name": "LITOFLEX",
              "alternateName": ["Литофлекс", "ЛитоФлекс", "ООО ЛитоФлекс"],
              "url": "https://www.litoflex.by/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.litoflex.by/logo.png",
                "width": 500,
                "height": 500
              },
              "description": "Производство и продажа гибкого камня и гибкого кирпича в Беларуси. Натуральные отделочные материалы.",
              "foundingDate": "2015",
              "founders": [{ "@type": "Person", "name": "LITOFLEX Team" }],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Ольшевского, 10",
                "addressLocality": "Минск",
                "addressRegion": "Минская область",
                "postalCode": "220073",
                "addressCountry": "BY"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+375-29-661-38-42",
                  "contactType": "sales",
                  "areaServed": ["BY", "RU", "UA", "KZ"],
                  "availableLanguage": ["Russian", "Belarusian"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+375-29-302-74-35",
                  "contactType": "customer service",
                  "areaServed": ["BY", "RU", "UA", "KZ"],
                  "availableLanguage": ["Russian", "Belarusian"]
                }
              ],
              "sameAs": [
                "https://www.instagram.com/litoflex.by/",
                "https://vk.com/litoflex"
              ],
              "email": "info@litoflex.by"
            })
          }}
        />
        
        {/* JSON-LD: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://www.litoflex.by/#localbusiness",
              "name": "LITOFLEX - Гибкий камень и кирпич",
              "image": "https://www.litoflex.by/logo.png",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Ольшевского, 10",
                "addressLocality": "Минск",
                "addressRegion": "Минская область",
                "postalCode": "220073",
                "addressCountry": "BY"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.914033,
                "longitude": 27.507298
              },
              "url": "https://www.litoflex.by/",
              "telephone": "+375296613842",
              "email": "info@litoflex.by",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "15:00"
                }
              ],
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "currenciesAccepted": "BYN, RUB, USD, EUR"
            })
          }}
        />
        
        {/* JSON-LD: WebSite с поиском */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.litoflex.by/#website",
              "url": "https://www.litoflex.by/",
              "name": "LITOFLEX",
              "description": "Официальный сайт производителя гибкого камня и термопанелей в Беларуси",
              "publisher": { "@id": "https://www.litoflex.by/#organization" },
              "inLanguage": "ru-RU"
            })
          }}
        />

      </head>
      <body className={inter.className}>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=107094158', 'ym');
            ym(107094158, 'init', {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/107094158" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        <AnnouncementBar />
        <PriceQuizProvider>
          {children}
          <PriceCalculator />
        </PriceQuizProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
