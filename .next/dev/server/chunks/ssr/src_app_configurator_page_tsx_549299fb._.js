module.exports = [
"[project]/src/app/configurator/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfiguratorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
/* ─────────────────────────────────────────────
   DATA — brick textures (фасад) & stone textures (цоколь)
   ───────────────────────────────────────────── */ const brickMaterials = [
    {
        art: 'GK-0100',
        name: 'Белый',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e2280423b208482f3fccc5a87dd56a68.png',
        price: 32
    },
    {
        art: 'GK-0200',
        name: 'Слоновая',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/626af35c4a6381931d76b25027af1f1d.png',
        price: 32
    },
    {
        art: 'GK-0300',
        name: 'Песочный',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/e1455447f13802de034ce68b8612e9c2.png',
        price: 32
    },
    {
        art: 'GK-0400',
        name: 'Жёлтый',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/428baf7f0e063c9712966f2f13d77040.png',
        price: 32
    },
    {
        art: 'GK-0500',
        name: 'Бежевый',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/1a89e213471caa73b28d1591a425cac8.png',
        price: 32
    },
    {
        art: 'GK-0600',
        name: 'Персик',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/604b02a68ea7eeeb300f9a00db92c15f.png',
        price: 32
    },
    {
        art: 'GK-0700',
        name: 'Терракот',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/dbab54b7377c5721e5cdaa956057b75c.png',
        price: 32
    },
    {
        art: 'GK-0800',
        name: 'Красный',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/37b5a89d21df3bc3ee580031cd3ebcd6.png',
        price: 32
    },
    {
        art: 'GK-0900',
        name: 'Бордо',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/af77e4626bbefc24d66e3b97c1f58057.png',
        price: 32
    },
    {
        art: 'GK-1101',
        name: 'Коричневый',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/529d4fd9b15f0cd1678a6c719e09b6e1.png',
        price: 32
    },
    {
        art: 'GK-1200',
        name: 'Тёмный',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/3a17052edb1f5cacbf8a662689cc55e7.png',
        price: 32
    },
    {
        art: 'GK-1400',
        name: 'Серый',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/5b98eda6cc189c62685acf46a653c5c6.png',
        price: 32
    },
    {
        art: 'GK-1402',
        name: 'Графит',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/d4df50ec4eab85f7db7fc39faf6e8f4e.png',
        price: 32
    },
    {
        art: 'GK-1503',
        name: 'Шоколад',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/d211d12b167d1584157630e6643bfaf6.png',
        price: 32
    },
    {
        art: 'GK-1800',
        name: 'Микс',
        texture: 'https://f2.lpcdn.site/e0c9c117a953c1fdbc0042e8762379c1/be1d4590baa5e51034dad239b8507afe.png',
        price: 32
    }
];
const stoneMaterials = [
    {
        art: 'KGS-01',
        name: 'Светлый песчаник',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c16ed91f06f29a7fdc05aaaebe0c84f.png',
        price: 28
    },
    {
        art: 'KGS-02',
        name: 'Золотой песчаник',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c0850d2f2933f3fbac98a7bc0a2121c3.png',
        price: 28
    },
    {
        art: 'KGS-03',
        name: 'Розовый гранит',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1167e04643ae79cb6904fab30cd433b6.png',
        price: 28
    },
    {
        art: 'KGS-04',
        name: 'Серый гранит',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/0f5337ce2c0d2245279631f862a0b6b3.png',
        price: 28
    },
    {
        art: 'KGS-05',
        name: 'Кварцит',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7ed06c207598bc2fde8f969294ff379b.png',
        price: 28
    },
    {
        art: 'KGS-06',
        name: 'Тёмный сланец',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/1cdd55208b89c1a2c77db57b470b731d.png',
        price: 28
    },
    {
        art: 'KGS-07',
        name: 'Янтарный',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/97b661b66a385e185a5a62b8dd991c56.png',
        price: 28
    },
    {
        art: 'KGS-08',
        name: 'Охра',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/25a5ab0ce02e37065df69db80a93ba21.png',
        price: 28
    },
    {
        art: 'KMK-01',
        name: 'Мрамор белый',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/7c874cbae68a83f16817107eb129de61.png',
        price: 28
    },
    {
        art: 'KMK-02',
        name: 'Мрамор серый',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/c7a60d8bf52d9b9175d913a5e0027238.png',
        price: 28
    },
    {
        art: 'KMK-03',
        name: 'Мрамор тёмный',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/101a4d888dbee04bddffd921ff154ec1.png',
        price: 28
    },
    {
        art: 'KNT-01',
        name: 'Травертин',
        texture: 'https://f2.lpcdn.site/b545763d258228703401ad24bd59b64d/87e3f19afd056103a03d9e6d5e653e94.png',
        price: 28
    }
];
/* ─────────────────────────────────────────────
   MASK PATHS — PNG masks (white = apply, transparent = skip)
   Create these in Photoshop, same resolution as the base house image.
   ───────────────────────────────────────────── */ const BASE_IMAGE = '/constructor/base-house.jpg';
const MASK_FACADE = '/constructor/mask-facade.png';
const MASK_PLINTH = '/constructor/mask-plinth.png';
/* ─────────────────────────────────────────────
   IMAGE LOADER UTILITY
   ───────────────────────────────────────────── */ function loadImage(src) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = ()=>resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}
function ConfiguratorPage() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Active zone selection
    const [activeZone, setActiveZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('facade');
    // Selected material index per zone
    const [facadeIndex, setFacadeIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(4); // default Бежевый
    const [plinthIndex, setPlinthIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Loading state
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Cached images
    const imagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        textures: new Map()
    });
    /* ── Load base image & masks on mount ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            try {
                const [base, mFacade, mPlinth] = await Promise.all([
                    loadImage(BASE_IMAGE),
                    loadImage(MASK_FACADE),
                    loadImage(MASK_PLINTH)
                ]);
                imagesRef.current.base = base;
                imagesRef.current.maskFacade = mFacade;
                imagesRef.current.maskPlinth = mPlinth;
                setLoading(false);
            } catch (e) {
                console.error('Failed to load base images:', e);
            }
        })();
    }, []);
    /* ── Ensure selected textures are loaded ── */ const ensureTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (src)=>{
        const cache = imagesRef.current.textures;
        if (cache.has(src)) return cache.get(src);
        const img = await loadImage(src);
        cache.set(src, img);
        return img;
    }, []);
    /* ── RENDER COMPOSITE on Canvas ── */ /* Uses luminance-preservation compositing:
     1) Extract lighting map from base image walls (shadows, highlights)
     2) Tile the chosen texture across the masked zone
     3) Multiply texture by lighting factor so shadows/depth are preserved
     Result: texture looks like it's actually ON the house, not pasted over it */ const renderComposite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const canvas = canvasRef.current;
        const { base, maskFacade, maskPlinth } = imagesRef.current;
        if (!canvas || !base || !maskFacade || !maskPlinth) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const W = base.naturalWidth;
        const H = base.naturalHeight;
        canvas.width = W;
        canvas.height = H;
        // 1) Draw base house & get pixel data
        ctx.drawImage(base, 0, 0, W, H);
        const baseData = ctx.getImageData(0, 0, W, H);
        const basePx = baseData.data; // Uint8ClampedArray [R,G,B,A, R,G,B,A, ...]
        // Helper: get mask pixel data
        const getMaskData = (maskImg)=>{
            const off = document.createElement('canvas');
            off.width = W;
            off.height = H;
            const offCtx = off.getContext('2d');
            offCtx.drawImage(maskImg, 0, 0, W, H);
            return offCtx.getImageData(0, 0, W, H).data;
        };
        // Helper: get tiled texture pixel data
        const getTiledTexture = async (textureSrc)=>{
            const tex = await ensureTexture(textureSrc);
            const off = document.createElement('canvas');
            off.width = W;
            off.height = H;
            const offCtx = off.getContext('2d');
            const pattern = offCtx.createPattern(tex, 'repeat');
            if (pattern) {
                offCtx.fillStyle = pattern;
                offCtx.fillRect(0, 0, W, H);
            }
            return offCtx.getImageData(0, 0, W, H).data;
        };
        // Helper: apply texture to a zone with luminance preservation
        const applyZone = async (outputPx, maskData, textureSrc)=>{
            const texPx = await getTiledTexture(textureSrc);
            const totalPixels = W * H;
            // Step A: Calculate average luminance of masked wall pixels
            let lumSum = 0;
            let lumCount = 0;
            for(let i = 0; i < totalPixels; i++){
                const idx = i * 4;
                const maskAlpha = maskData[idx + 3]; // use alpha channel of mask
                if (maskAlpha > 128) {
                    const lum = basePx[idx] * 0.299 + basePx[idx + 1] * 0.587 + basePx[idx + 2] * 0.114;
                    lumSum += lum;
                    lumCount++;
                }
            }
            const avgLum = lumCount > 0 ? lumSum / lumCount : 180;
            // Step B: For each masked pixel, apply texture * lighting_factor
            for(let i = 0; i < totalPixels; i++){
                const idx = i * 4;
                const maskAlpha = maskData[idx + 3];
                if (maskAlpha > 128) {
                    // Pixel luminance from base image
                    const pixLum = basePx[idx] * 0.299 + basePx[idx + 1] * 0.587 + basePx[idx + 2] * 0.114;
                    // Lighting factor: how much brighter/darker vs average wall
                    const lightFactor = Math.min(Math.max(pixLum / avgLum, 0.25), 1.5);
                    // Apply texture color * lighting factor
                    outputPx[idx] = Math.min(255, Math.round(texPx[idx] * lightFactor)); // R
                    outputPx[idx + 1] = Math.min(255, Math.round(texPx[idx + 1] * lightFactor)); // G
                    outputPx[idx + 2] = Math.min(255, Math.round(texPx[idx + 2] * lightFactor)); // B
                // Alpha stays 255
                }
            // else: pixel stays as base image (not masked)
            }
        };
        // Get mask data
        const facadeMaskData = getMaskData(maskFacade);
        const plinthMaskData = getMaskData(maskPlinth);
        // Create output pixel array (start from base image)
        const outputData = ctx.getImageData(0, 0, W, H);
        // 2) Apply facade texture (brick)
        const facadeTex = brickMaterials[facadeIndex].texture;
        await applyZone(outputData.data, facadeMaskData, facadeTex);
        // 3) Apply plinth texture (stone)
        const plinthTex = stoneMaterials[plinthIndex].texture;
        await applyZone(outputData.data, plinthMaskData, plinthTex);
        // 4) Put the composited result back
        ctx.putImageData(outputData, 0, 0);
    }, [
        facadeIndex,
        plinthIndex,
        ensureTexture
    ]);
    /* ── Re-render when selection changes ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading) {
            renderComposite();
        }
    }, [
        loading,
        facadeIndex,
        plinthIndex,
        renderComposite
    ]);
    /* ── Current materials ── */ const currentFacade = brickMaterials[facadeIndex];
    const currentPlinth = stoneMaterials[plinthIndex];
    const activeMaterials = activeZone === 'facade' ? brickMaterials : stoneMaterials;
    const activeIndex = activeZone === 'facade' ? facadeIndex : plinthIndex;
    const setActiveIndex = activeZone === 'facade' ? setFacadeIndex : setPlinthIndex;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                id: "header",
                className: "jsx-3df4928f2665f038" + " " + "scrolled",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3df4928f2665f038" + " " + "header-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://www.litoflex.by/logo.png",
                                    alt: "LITOFLEX",
                                    width: 50,
                                    height: 50,
                                    className: "jsx-3df4928f2665f038" + " " + "logo-img"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configurator/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3df4928f2665f038" + " " + "logo-text",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "jsx-3df4928f2665f038",
                                            children: "LITOFLEX"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3df4928f2665f038",
                                            children: "Гибкие решения для твёрдых идей!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configurator/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "jsx-3df4928f2665f038",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-3df4928f2665f038",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-3df4928f2665f038",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: "Главная"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-3df4928f2665f038",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#catalogue",
                                            children: "Каталог"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-3df4928f2665f038",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#about",
                                            children: "О нас"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-3df4928f2665f038",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#chars",
                                            children: "Характеристики"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-3df4928f2665f038",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#contacts",
                                            children: "Контакты"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-3df4928f2665f038",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/certificates",
                                            children: "Сертификаты"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-3df4928f2665f038",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/configurator",
                                            className: "active-nav",
                                            children: "Конструктор"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3df4928f2665f038" + " " + "header-cta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3df4928f2665f038" + " " + "header-phones",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+375296613842",
                                            className: "jsx-3df4928f2665f038" + " " + "phone-link",
                                            children: "А1 +375 (29) 661-38-42"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+375293027435",
                                            className: "jsx-3df4928f2665f038" + " " + "phone-link",
                                            children: "А1 +375 (29) 302-74-35"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/configurator/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/configurator/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/#contact",
                                    className: "jsx-3df4928f2665f038" + " " + "btn",
                                    children: "Консультация"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configurator/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            "aria-label": "Открыть меню",
                            className: "jsx-3df4928f2665f038" + " " + `mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3df4928f2665f038"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configurator/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3df4928f2665f038"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configurator/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3df4928f2665f038"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/configurator/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/configurator/page.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/configurator/page.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3df4928f2665f038" + " " + `mobile-nav ${mobileMenuOpen ? 'active' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "jsx-3df4928f2665f038",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "jsx-3df4928f2665f038",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "mobile-link",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: "Главная"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "jsx-3df4928f2665f038",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#catalogue",
                                className: "mobile-link",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: "Каталог"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "jsx-3df4928f2665f038",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#about",
                                className: "mobile-link",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: "О нас"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "jsx-3df4928f2665f038",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contacts",
                                className: "mobile-link",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: "Контакты"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 298,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "jsx-3df4928f2665f038",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/certificates",
                                className: "mobile-link",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: "Сертификаты"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 299,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "jsx-3df4928f2665f038",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/configurator",
                                className: "mobile-link",
                                onClick: ()=>setMobileMenuOpen(false),
                                children: "Конструктор"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 300,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/configurator/page.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/configurator/page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "jsx-3df4928f2665f038" + " " + "configurator-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3df4928f2665f038" + " " + "configurator-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3df4928f2665f038" + " " + "section-tag",
                                children: "Конструктор фасада"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-3df4928f2665f038" + " " + "section-title",
                                children: "Подберите облицовку онлайн"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-3df4928f2665f038" + " " + "section-subtitle",
                                children: "Выберите зону дома и примерьте текстуру"
                            }, void 0, false, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/configurator/page.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3df4928f2665f038" + " " + "configurator-layout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3df4928f2665f038" + " " + "configurator-preview",
                                children: [
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3df4928f2665f038" + " " + "configurator-loading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3df4928f2665f038" + " " + "configurator-spinner"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-3df4928f2665f038",
                                                children: "Загрузка модели дома..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: canvasRef,
                                        className: "jsx-3df4928f2665f038" + " " + "configurator-canvas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3df4928f2665f038" + " " + "configurator-zone-labels",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveZone('facade'),
                                                className: "jsx-3df4928f2665f038" + " " + `zone-label zone-label-facade ${activeZone === 'facade' ? 'active' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3df4928f2665f038" + " " + "zone-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/configurator/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Фасад"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveZone('plinth'),
                                                className: "jsx-3df4928f2665f038" + " " + `zone-label zone-label-plinth ${activeZone === 'plinth' ? 'active' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3df4928f2665f038" + " " + "zone-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/configurator/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Цоколь"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3df4928f2665f038" + " " + "configurator-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3df4928f2665f038" + " " + "panel-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-3df4928f2665f038" + " " + "panel-title",
                                                children: "Материалы"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 351,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-3df4928f2665f038" + " " + "panel-desc",
                                                children: "Выберите зону и текстуру"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3df4928f2665f038" + " " + "panel-zone-tabs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveZone('facade'),
                                                className: "jsx-3df4928f2665f038" + " " + `panel-zone-tab ${activeZone === 'facade' ? 'active' : ''}`,
                                                children: "Фасад"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveZone('plinth'),
                                                className: "jsx-3df4928f2665f038" + " " + `panel-zone-tab ${activeZone === 'plinth' ? 'active' : ''}`,
                                                children: "Цоколь"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3df4928f2665f038" + " " + "panel-material-type",
                                        children: activeZone === 'facade' ? '🧱 Гибкий кирпич' : '🪨 Гибкий камень'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3df4928f2665f038" + " " + "panel-texture-grid",
                                        children: activeMaterials.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveIndex(i),
                                                title: `${m.art} — ${m.name}`,
                                                className: "jsx-3df4928f2665f038" + " " + `texture-swatch ${i === activeIndex ? 'active' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: m.texture,
                                                        alt: m.name,
                                                        className: "jsx-3df4928f2665f038"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/configurator/page.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3df4928f2665f038" + " " + "swatch-label",
                                                        children: m.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/configurator/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, m.art, true, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3df4928f2665f038" + " " + "panel-config-summary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "jsx-3df4928f2665f038",
                                                children: "Текущая конфигурация"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3df4928f2665f038" + " " + "config-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: currentFacade.texture,
                                                        alt: "",
                                                        className: "jsx-3df4928f2665f038" + " " + "config-thumb"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/configurator/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3df4928f2665f038" + " " + "config-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3df4928f2665f038" + " " + "config-zone",
                                                                children: "Фасад"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3df4928f2665f038" + " " + "config-material",
                                                                children: [
                                                                    "Кирпич — ",
                                                                    currentFacade.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3df4928f2665f038" + " " + "config-art",
                                                                children: [
                                                                    currentFacade.art,
                                                                    " · ",
                                                                    currentFacade.price,
                                                                    " BYN/м²"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                                lineNumber: 400,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/configurator/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3df4928f2665f038" + " " + "config-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: currentPlinth.texture,
                                                        alt: "",
                                                        className: "jsx-3df4928f2665f038" + " " + "config-thumb"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/configurator/page.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3df4928f2665f038" + " " + "config-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3df4928f2665f038" + " " + "config-zone",
                                                                children: "Цоколь"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3df4928f2665f038" + " " + "config-material",
                                                                children: [
                                                                    "Камень — ",
                                                                    currentPlinth.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3df4928f2665f038" + " " + "config-art",
                                                                children: [
                                                                    currentPlinth.art,
                                                                    " · ",
                                                                    currentPlinth.price,
                                                                    " BYN/м²"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/configurator/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/configurator/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#contact",
                                        className: "jsx-3df4928f2665f038" + " " + "panel-cta-btn",
                                        children: "Отправить заявку"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/configurator/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/configurator/page.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/configurator/page.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3df4928f2665f038" + " " + "configurator-back",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#catalogue",
                            className: "configurator-back-link",
                            children: "← Вернуться к каталогу"
                        }, void 0, false, {
                            fileName: "[project]/src/app/configurator/page.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/configurator/page.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/configurator/page.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "3df4928f2665f038",
                children: ".configurator-main.jsx-3df4928f2665f038{max-width:1400px;margin:100px auto 60px;padding:0 24px}.configurator-header.jsx-3df4928f2665f038{text-align:center;margin-bottom:40px}.configurator-layout.jsx-3df4928f2665f038{grid-template-columns:1fr 380px;align-items:start;gap:32px;display:grid}@media (width<=1024px){.configurator-layout.jsx-3df4928f2665f038{grid-template-columns:1fr}}.configurator-preview.jsx-3df4928f2665f038{aspect-ratio:16/10;background:#0a0a0a;border-radius:16px;position:relative;overflow:hidden}.configurator-canvas.jsx-3df4928f2665f038{object-fit:contain;width:100%;height:100%;display:block}.configurator-loading.jsx-3df4928f2665f038{color:#888;flex-direction:column;justify-content:center;align-items:center;gap:16px;height:100%;display:flex}.configurator-spinner.jsx-3df4928f2665f038{border:3px solid #ffffff1a;border-top-color:#c8a96e;border-radius:50%;width:40px;height:40px;animation:.8s linear infinite spin}@keyframes spin{to{transform:rotate(360deg)}}.configurator-zone-labels.jsx-3df4928f2665f038{flex-direction:column;gap:8px;display:flex;position:absolute;top:16px;left:16px}.zone-label.jsx-3df4928f2665f038{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:#ccc;cursor:pointer;background:#000000b3;border:1px solid #c8a96e4d;border-radius:8px;align-items:center;gap:8px;padding:8px 16px;font-size:13px;font-weight:500;transition:all .2s;display:flex}.zone-label.jsx-3df4928f2665f038:hover{color:#fff;background:#000000d9}.zone-label.active.jsx-3df4928f2665f038{color:#c8a96e;background:#c8a96e33;border-color:#c8a96e}.zone-dot.jsx-3df4928f2665f038{background:#555;border-radius:50%;width:10px;height:10px;transition:background .2s}.zone-label.active.jsx-3df4928f2665f038 .zone-dot.jsx-3df4928f2665f038{background:#c8a96e;box-shadow:0 0 8px #c8a96e99}.configurator-panel.jsx-3df4928f2665f038{background:#111;border:1px solid #ffffff14;border-radius:16px;padding:24px;position:sticky;top:100px}.panel-title.jsx-3df4928f2665f038{color:#fff;margin:0 0 4px;font-size:20px;font-weight:700}.panel-desc.jsx-3df4928f2665f038{color:#888;margin:0 0 20px;font-size:13px}.panel-zone-tabs.jsx-3df4928f2665f038{gap:8px;margin-bottom:16px;display:flex}.panel-zone-tab.jsx-3df4928f2665f038{color:#888;cursor:pointer;background:0 0;border:1px solid #ffffff1a;border-radius:10px;flex:1;padding:10px;font-size:14px;font-weight:600;transition:all .2s}.panel-zone-tab.jsx-3df4928f2665f038:hover{color:#bbb;border-color:#c8a96e4d}.panel-zone-tab.active.jsx-3df4928f2665f038{color:#c8a96e;background:#c8a96e26;border-color:#c8a96e}.panel-material-type.jsx-3df4928f2665f038{color:#999;border-bottom:1px solid #ffffff0f;margin-bottom:12px;padding-bottom:12px;font-size:13px}.panel-texture-grid.jsx-3df4928f2665f038{grid-template-columns:repeat(4,1fr);gap:8px;max-height:320px;margin-bottom:24px;padding-right:4px;display:grid;overflow-y:auto}.panel-texture-grid.jsx-3df4928f2665f038::-webkit-scrollbar{width:4px}.panel-texture-grid.jsx-3df4928f2665f038::-webkit-scrollbar-track{background:0 0}.panel-texture-grid.jsx-3df4928f2665f038::-webkit-scrollbar-thumb{background:#c8a96e4d;border-radius:2px}.texture-swatch.jsx-3df4928f2665f038{cursor:pointer;background:#ffffff08;border:2px solid #0000;border-radius:10px;flex-direction:column;align-items:center;gap:4px;padding:6px;transition:all .2s;display:flex}.texture-swatch.jsx-3df4928f2665f038:hover{background:#ffffff14;border-color:#c8a96e4d}.texture-swatch.active.jsx-3df4928f2665f038{background:#c8a96e1a;border-color:#c8a96e}.texture-swatch.jsx-3df4928f2665f038 img.jsx-3df4928f2665f038{aspect-ratio:1;object-fit:cover;border-radius:6px;width:100%}.swatch-label.jsx-3df4928f2665f038{color:#888;text-align:center;font-size:10px;line-height:1.2}.texture-swatch.active.jsx-3df4928f2665f038 .swatch-label.jsx-3df4928f2665f038{color:#c8a96e}.panel-config-summary.jsx-3df4928f2665f038{border-top:1px solid #ffffff0f;margin-bottom:20px;padding-top:20px}.panel-config-summary.jsx-3df4928f2665f038 h4.jsx-3df4928f2665f038{color:#999;text-transform:uppercase;letter-spacing:.5px;margin:0 0 12px;font-size:13px;font-weight:600}.config-row.jsx-3df4928f2665f038{background:#ffffff08;border-radius:10px;align-items:center;gap:12px;margin-bottom:8px;padding:10px;display:flex}.config-thumb.jsx-3df4928f2665f038{object-fit:cover;border:1px solid #ffffff1a;border-radius:8px;width:44px;height:44px}.config-info.jsx-3df4928f2665f038{flex-direction:column;gap:2px;display:flex}.config-zone.jsx-3df4928f2665f038{color:#666;text-transform:uppercase;letter-spacing:.5px;font-size:11px}.config-material.jsx-3df4928f2665f038{color:#fff;font-size:14px;font-weight:600}.config-art.jsx-3df4928f2665f038{color:#c8a96e;font-size:12px}.panel-cta-btn.jsx-3df4928f2665f038{color:#000;text-align:center;background:linear-gradient(135deg,#c8a96e,#a8884e);border-radius:12px;width:100%;padding:14px;font-size:15px;font-weight:700;text-decoration:none;transition:all .2s;display:block}.panel-cta-btn.jsx-3df4928f2665f038:hover{background:linear-gradient(135deg,#d4b87a,#b8985e);transform:translateY(-1px);box-shadow:0 4px 20px #c8a96e4d}.configurator-back.jsx-3df4928f2665f038{text-align:center;margin-top:32px}.configurator-back-link.jsx-3df4928f2665f038{color:#888;font-size:14px;text-decoration:none;transition:color .2s}.configurator-back-link.jsx-3df4928f2665f038:hover{color:#c8a96e}@media (width<=768px){.configurator-main.jsx-3df4928f2665f038{margin-top:80px;padding:0 16px}.configurator-preview.jsx-3df4928f2665f038{aspect-ratio:4/3}.configurator-panel.jsx-3df4928f2665f038{position:static}.panel-texture-grid.jsx-3df4928f2665f038{grid-template-columns:repeat(3,1fr);max-height:260px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_app_configurator_page_tsx_549299fb._.js.map