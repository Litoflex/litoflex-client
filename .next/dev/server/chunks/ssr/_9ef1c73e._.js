module.exports = [
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
;
;
;
const viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    themeColor: [
        {
            media: '(prefers-color-scheme: light)',
            color: '#ffffff'
        },
        {
            media: '(prefers-color-scheme: dark)',
            color: '#0f2137'
        }
    ]
};
const metadata = {
    // Основные мета теги
    title: {
        default: 'LITOFLEX — Гибкий камень и гибкий кирпич для вашего дома | Минск',
        template: '%s | LITOFLEX'
    },
    description: 'LITOFLEX. Гибкий камень и кирпич для вашего дома - фасад, забор, интерьер. Производство в Беларуси. Телефон: +375(29)661-38-42',
    keywords: [
        'гибкий камень',
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
        'фасадный декор'
    ],
    authors: [
        {
            name: 'LITOFLEX',
            url: 'https://www.litoflex.by'
        }
    ],
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
            'max-snippet': -1
        }
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
                type: 'image/jpeg'
            },
            {
                url: 'https://www.litoflex.by/logo.png',
                width: 500,
                height: 500,
                alt: 'LITOFLEX логотип'
            }
        ],
        locale: 'ru_RU',
        siteName: 'LITOFLEX',
        countryName: 'Belarus',
        emails: [
            'info@litoflex.by'
        ],
        phoneNumbers: [
            '+375296613842',
            '+375293027435'
        ]
    },
    // Twitter Cards
    twitter: {
        card: 'summary_large_image',
        title: 'LITOFLEX — Гибкий камень и гибкий кирпич для вашего дома',
        description: 'LITOFLEX. Гибкий камень и кирпич для вашего дома - фасад, забор, интерьер. Производство в Беларуси. +375(29)661-38-42',
        images: [
            'https://www.litoflex.by/og-image.jpg'
        ],
        creator: '@litoflex',
        site: '@litoflex'
    },
    // Иконки
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                sizes: 'any'
            },
            {
                url: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png'
            },
            {
                url: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            }
        ],
        apple: [
            {
                url: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png'
            }
        ],
        other: [
            {
                rel: 'mask-icon',
                url: '/safari-pinned-tab.svg',
                color: '#ff6b35'
            }
        ]
    },
    // Manifest для PWA
    manifest: '/manifest.json',
    // Канонический URL
    alternates: {
        canonical: 'https://www.litoflex.by/',
        languages: {
            'ru-BY': 'https://www.litoflex.by/',
            'ru-RU': 'https://www.litoflex.by/'
        }
    },
    // Верификация
    verification: {
        google: 'ваш-google-verification-code',
        yandex: 'ваш-yandex-verification-code'
    },
    // Категория сайта
    category: 'construction',
    // Дополнительно
    applicationName: 'LITOFLEX',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
        email: true,
        address: true,
        telephone: true
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "ru",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "dns-prefetch",
                        href: "https://www.google-analytics.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "dns-prefetch",
                        href: "https://mc.yandex.ru"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "@id": "https://www.litoflex.by/#organization",
                                "name": "LITOFLEX",
                                "alternateName": [
                                    "Литофлекс",
                                    "ЛитоФлекс",
                                    "ООО ЛитоФлекс"
                                ],
                                "url": "https://www.litoflex.by/",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.litoflex.by/logo.png",
                                    "width": 500,
                                    "height": 500
                                },
                                "description": "Производство и продажа гибкого камня и гибкого кирпича в Беларуси. Натуральные отделочные материалы.",
                                "foundingDate": "2015",
                                "founders": [
                                    {
                                        "@type": "Person",
                                        "name": "LITOFLEX Team"
                                    }
                                ],
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
                                        "areaServed": [
                                            "BY",
                                            "RU",
                                            "UA",
                                            "KZ"
                                        ],
                                        "availableLanguage": [
                                            "Russian",
                                            "Belarusian"
                                        ]
                                    },
                                    {
                                        "@type": "ContactPoint",
                                        "telephone": "+375-29-302-74-35",
                                        "contactType": "customer service",
                                        "areaServed": [
                                            "BY",
                                            "RU",
                                            "UA",
                                            "KZ"
                                        ],
                                        "availableLanguage": [
                                            "Russian",
                                            "Belarusian"
                                        ]
                                    }
                                ],
                                "sameAs": [
                                    "https://www.instagram.com/litoflex.by/",
                                    "https://vk.com/litoflex"
                                ],
                                "email": "info@litoflex.by"
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
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
                                        "dayOfWeek": [
                                            "Monday",
                                            "Tuesday",
                                            "Wednesday",
                                            "Thursday",
                                            "Friday"
                                        ],
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
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "127"
                                },
                                "paymentAccepted": [
                                    "Cash",
                                    "Credit Card",
                                    "Bank Transfer"
                                ],
                                "currenciesAccepted": "BYN, RUB, USD, EUR"
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "@id": "https://www.litoflex.by/#website",
                                "url": "https://www.litoflex.by/",
                                "name": "LITOFLEX",
                                "description": "Официальный сайт производителя гибкого камня и термопанелей в Беларуси",
                                "publisher": {
                                    "@id": "https://www.litoflex.by/#organization"
                                },
                                "inLanguage": "ru-RU"
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: "yandex-metrika",
                        strategy: "afterInteractive",
                        children: `
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
          `
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://mc.yandex.ru/watch/107094158",
                                style: {
                                    position: 'absolute',
                                    left: '-9999px'
                                },
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/script.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_9ef1c73e._.js.map