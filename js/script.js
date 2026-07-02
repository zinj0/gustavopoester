/* ======================================
   GUSTAVO POESTER
   SCRIPT.JS
====================================== */


/* ===========================
   MENU MOBILE
=========================== */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


/* Fecha o menu ao clicar fora */

document.addEventListener("click", (e) => {

    if (
        window.innerWidth <= 820 &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        sidebar.classList.remove("open");

    }

});


/* Fecha ao clicar em um link */

document.querySelectorAll(".sidebar a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 820) {

            sidebar.classList.remove("open");

        }

    });

});


/* ===========================
   TROCA DE IDIOMA
=========================== */

const sharedTranslations = {

    pt: {
        works: "Obras",
        exhibitions: "Exposições",
        bio: "Bio",
        seriesCakes: "Tortas",
        seriesCandles: "Velas",
        seriesClowns: "Palhaços",
        seriesBurial: "O Enterro",
        seriesBurialShort: "Enterro",
        seriesMeringues: "Merengues",
        seriesGlobe: "Globo",
        seriesGlobes: "Globos",
        seriesBody: "Corpo",
        seriesAngels: "Anjos",
        exhibitionCoreomania: "Coreomania",
        exhibitionEntierro: "El Entierro",
        exhibitionGoldIceBone: "Entre ouro, gelo e osso",
        exhibitionSusurros: "Susurros de Ensueño",
        marqueeOne: "COREOMANIA na Casa de Cultura Mario Quintana (POA-BR) — 9.6 a 30.8",
        marqueeTwo: "Entre ouro, gelo e osso na Galería Vol48 (Av. Cordoba 857, Buenos Aires/AR) — 09.07 a 30.08",
        copyright: "© Gustavo Poester. Todos os direitos reservados. Reprodução proibida sem autorização.",
        filters: "Filtros",
        filterYear: "Ano:",
        filterBackground: "Fundo:",
        filterMagenta: "Magenta",
        filterGreenBackground: "Verde",
        filterSeries: "Série:",
        filterOrientation: "Orientação:",
        filterSpatiality: "Espacialidade:",
        filterCollection: "Acervo:",
        vertical: "Vertical",
        horizontal: "Horizontal",
        painting: "Pintura",
        sculpture: "Escultura",
        publicCollectionFilter: "Artista",
        privateCollectionFilter: "Privado",
        artistCollection: "Acervo do artista",
        privateCollection: "Acervo privado",
        individualExhibitions: "Mostras principais",
        collectiveExhibitions: "Coletivas",
        imageCreditsPrefix: "Imagens:",
        expoGalleryLabel: "Galeria da exposição",
        openExhibitionGallery: "Abrir galeria da exposição",
        openExternalArticle: "Abrir matéria externa",
        backToTop: "Voltar ao topo",
        openMenu: "Abrir menu",
        studioVideo: "Vídeo do ateliê de Gustavo Poester",
        bioImageAlt: "Retrato de Gustavo Poester em seu ateliê"
    },

    es: {
        works: "Obras",
        exhibitions: "Exposiciones",
        bio: "Bio",
        seriesCakes: "Tortas",
        seriesCandles: "Velas",
        seriesClowns: "Payasos",
        seriesBurial: "El entierro",
        seriesBurialShort: "Entierro",
        seriesMeringues: "Merengues",
        seriesGlobe: "Globo",
        seriesGlobes: "Globos",
        seriesBody: "Cuerpo",
        seriesAngels: "Ángeles",
        exhibitionCoreomania: "Coreomania",
        exhibitionEntierro: "El Entierro",
        exhibitionGoldIceBone: "Entre oro, hielo y hueso",
        exhibitionSusurros: "Susurros de Ensueño",
        marqueeOne: "COREOMANIA en Casa de Cultura Mario Quintana (POA-BR) — 9.6 a 30.8",
        marqueeTwo: "Entre oro, hielo y hueso en Galería Vol48 (Av. Cordoba 857, Buenos Aires/AR) — 09.07 a 30.08",
        copyright: "© Gustavo Poester. Todos los derechos reservados. Prohibida la reproducción sin autorización.",
        filters: "Filtros",
        filterYear: "Año:",
        filterBackground: "Fondo:",
        filterMagenta: "Magenta",
        filterGreenBackground: "Verde",
        filterSeries: "Serie:",
        filterOrientation: "Orientación:",
        filterSpatiality: "Espacialidad:",
        filterCollection: "Acervo:",
        vertical: "Vertical",
        horizontal: "Horizontal",
        painting: "Pintura",
        sculpture: "Escultura",
        publicCollectionFilter: "Artista",
        privateCollectionFilter: "Privado",
        artistCollection: "Acervo del artista",
        privateCollection: "Acervo privado",
        individualExhibitions: "Muestras principales",
        collectiveExhibitions: "Colectivas",
        imageCreditsPrefix: "Imágenes:",
        expoGalleryLabel: "Galería de la exposición",
        openExhibitionGallery: "Abrir galería de la exposición",
        openExternalArticle: "Abrir nota externa",
        backToTop: "Volver arriba",
        openMenu: "Abrir menú",
        studioVideo: "Video del taller de Gustavo Poester",
        bioImageAlt: "Retrato de Gustavo Poester en su taller"
    },

    en: {
        works: "Works",
        exhibitions: "Exhibitions",
        bio: "Bio",
        seriesCakes: "Cakes",
        seriesCandles: "Candles",
        seriesClowns: "Clowns",
        seriesBurial: "The Burial",
        seriesBurialShort: "Burial",
        seriesMeringues: "Meringues",
        seriesGlobe: "Globe",
        seriesGlobes: "Globes",
        seriesBody: "Body",
        seriesAngels: "Angels",
        exhibitionCoreomania: "Coreomania",
        exhibitionEntierro: "El Entierro",
        exhibitionGoldIceBone: "Between gold, ice and bone",
        exhibitionSusurros: "Susurros de Ensueño",
        marqueeOne: "COREOMANIA at Casa de Cultura Mario Quintana (POA-BR) — 9.6 to 30.8",
        marqueeTwo: "Between gold, ice and bone at Galería Vol48 (Av. Cordoba 857, Buenos Aires/AR) — 09.07 to 30.08",
        copyright: "© Gustavo Poester. All rights reserved. Reproduction prohibited without authorization.",
        filters: "Filters",
        filterYear: "Year:",
        filterBackground: "Background:",
        filterMagenta: "Magenta",
        filterGreenBackground: "Green",
        filterSeries: "Series:",
        filterOrientation: "Orientation:",
        filterSpatiality: "Spatiality:",
        filterCollection: "Collection:",
        vertical: "Vertical",
        horizontal: "Horizontal",
        painting: "Painting",
        sculpture: "Sculpture",
        publicCollectionFilter: "Artist",
        privateCollectionFilter: "Private",
        artistCollection: "Artist collection",
        privateCollection: "Private collection",
        individualExhibitions: "Main exhibitions",
        collectiveExhibitions: "Group",
        imageCreditsPrefix: "Images:",
        expoGalleryLabel: "Exhibition gallery",
        openExhibitionGallery: "Open exhibition gallery",
        openExternalArticle: "Open external article",
        backToTop: "Back to top",
        openMenu: "Open menu",
        studioVideo: "Video of Gustavo Poester's studio",
        bioImageAlt: "Portrait of Gustavo Poester in his studio"
    }

};

let currentLang = "pt";

const langButtons = document.querySelectorAll("[data-lang]");

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        const lang = button.dataset.lang;

        changeLanguage(lang);
        localStorage.setItem("siteLanguage", lang);

        langButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

    });

});


function changeLanguage(lang) {

    currentLang = lang;
    document.documentElement.lang = lang === "en" ? "en" : lang === "es" ? "es" : "pt-BR";

    const pageTranslations = typeof translations !== "undefined" && translations[lang]
        ? translations[lang]
        : {};
    const langTranslations = {
        ...sharedTranslations[lang],
        ...pageTranslations
    };

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (langTranslations[key]) {

            element.textContent = langTranslations[key];

        }

    });

    document.querySelectorAll("[data-i18n-html]").forEach(element => {

        const key = element.dataset.i18nHtml;

        if (langTranslations[key]) {

            element.innerHTML = langTranslations[key];

        }

    });

    document.querySelectorAll("[data-i18n-alt]").forEach(element => {

        const key = element.dataset.i18nAlt;

        if (langTranslations[key]) {

            element.alt = langTranslations[key];

        }

    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {

        const key = element.dataset.i18nAriaLabel;

        if (langTranslations[key]) {

            element.setAttribute("aria-label", langTranslations[key]);

        }

    });

    updateWorkLabels();
    updateExpoLabels();

}

const savedLanguage = localStorage.getItem("siteLanguage") || "pt";

if (sharedTranslations[savedLanguage]) {

    changeLanguage(savedLanguage);

    langButtons.forEach(button => {

        button.classList.toggle("active", button.dataset.lang === savedLanguage);

    });

}


/* ===========================
   PAUSAR VÍDEO
=========================== */

const video = document.querySelector("video");

document.addEventListener("visibilitychange", () => {

    if (!video) return;

    if (document.hidden) {

        video.pause();

    } else {

        video.play();

    }

});


/* ===========================
   REINICIAR MENU AO REDIMENSIONAR
=========================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 820) {

        sidebar.classList.remove("open");

    }

});


/* ===========================
   MARQUEE
=========================== */

/*
A animação principal é feita em CSS.

Este trecho apenas duplica automaticamente
o conteúdo do letreiro para impedir espaços
vazios durante a rolagem.
*/

const marquee = document.getElementById("marqueeTrack");

if (marquee) {

    marquee.innerHTML += marquee.innerHTML;

}


/* ===========================
   LIGHTBOX OBRAS
=========================== */

const worksGrid = document.getElementById("worksGrid");
const exposGrid = document.getElementById("exposGrid");

function encodeImagePath(path) {

    return path.split("/").map(part => encodeURIComponent(part)).join("/");

}

function localizedText(value) {

    if (!value) return "";

    if (typeof value === "string") return value;

    return value[currentLang] || value.pt || value.es || value.en || "";

}

function formatDimensions(dimensions) {

    if (!dimensions) return "";

    return `${dimensions.replaceAll("x", " x ")} cm`;

}

function isAvailable(availability) {

    return (availability || "").trim().toLowerCase().startsWith("disp");

}

function collectionKey(work) {

    return isAvailable(work.availability) ? "artistCollection" : "privateCollection";

}

function normalizeFilterValue(value) {

    let normalized = (value || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(".", "");

    normalized = normalized.replace(/^fundo\s+/, "");

    if (normalized === "merengue") {

        return "merengues";

    }

    return normalized;

}

function translateTechnique(technique) {

    const normalized = normalizeFilterValue(technique);
    const dictionary = {
        pt: {
            "oleo sobre tela": "óleo sobre tela",
            "oleo e poliuretano sobre tela": "óleo e poliuretano sobre tela",
            "parafina e tinta de artesanato": "parafina e tinta de artesanato"
        },
        es: {
            "oleo sobre tela": "óleo sobre tela",
            "oleo e poliuretano sobre tela": "óleo y poliuretano sobre tela",
            "parafina e tinta de artesanato": "parafina y pintura artesanal"
        },
        en: {
            "oleo sobre tela": "oil on canvas",
            "oleo e poliuretano sobre tela": "oil and polyurethane on canvas",
            "parafina e tinta de artesanato": "paraffin and craft paint"
        }
    };

    return dictionary[currentLang]?.[normalized] || (technique || "").toLowerCase();

}

function workCaptionParts(work) {

    return [
        translateTechnique(work.technique),
        work.year,
        formatDimensions(work.dimensions)
    ].filter(Boolean);

}

function plainWorkCaption(work) {

    const parts = workCaptionParts(work);

    return [work.title, ...parts].filter(Boolean).join(", ");

}

function buildWorkLabel(work) {

    const label = document.createElement("span");
    label.className = "work-label";

    const title = document.createElement("strong");
    title.textContent = work.title || "";
    label.appendChild(title);

    const info = workCaptionParts(work).join(", ");

    if (info) {

        label.append(`, ${info}`);

    }

    return label;

}

function updateWorkLabels() {

    document.querySelectorAll(".work-card").forEach(card => {

        if (!card.workData) return;

        const oldLabel = card.querySelector(".work-label");
        const newLabel = buildWorkLabel(card.workData);
        const caption = plainWorkCaption(card.workData);
        const image = card.querySelector("img");

        card.setAttribute("aria-label", caption);

        if (image) {

            image.alt = caption;

        }

        if (oldLabel) {

            oldLabel.replaceWith(newLabel);

        } else {

            card.appendChild(newLabel);

        }

    });

}

if (worksGrid && window.worksCatalog) {

    window.worksCatalog.forEach(work => {

        const card = document.createElement("button");
        const orientationClass = work.orientation === "horizontal"
            ? "work-card-horizontal"
            : "work-card-vertical";

        card.className = `work-card ${orientationClass}`;
        card.type = "button";
        card.workData = work;
        card.setAttribute("aria-label", plainWorkCaption(work));
        card.dataset.title = work.title || "";
        card.dataset.info = workCaptionParts(work).join(", ");
        card.dataset.year = work.year || "";
        card.dataset.series = work.series || "";
        card.dataset.orientation = work.orientation || "";
        card.dataset.spatiality = work.spatiality || "";
        card.dataset.collection = isAvailable(work.availability) ? "artist" : "private";
        card.dataset.background = work.background || "";

        if (work.image) {

            const image = document.createElement("img");
            image.src = encodeImagePath(work.image);
            image.alt = plainWorkCaption(work) || "Obra de Gustavo Poester";
            image.loading = "lazy";

            image.addEventListener("error", () => {

                card.classList.add("work-card-placeholder");
                image.remove();

            });

            card.appendChild(image);

        } else {

            card.classList.add("work-card-placeholder");

        }

        card.appendChild(buildWorkLabel(work));

        worksGrid.appendChild(card);

    });

}

function expoTitle(expo) {

    return localizedText(expo.title);

}

function plainExpoCaption(expo) {

    return [
        expoTitle(expo),
        expo.year,
        expo.location
    ].filter(Boolean).join(", ");

}

function buildExpoLabel(expo) {

    const label = document.createElement("span");
    label.className = "expo-label";

    const title = document.createElement("strong");
    title.textContent = expoTitle(expo);
    label.appendChild(title);

    const info = [
        expo.year,
        expo.location
    ].filter(Boolean).join(", ");

    if (info) {

        label.append(`, ${info}`);

    }

    return label;

}

function updateExpoLabels() {

    document.querySelectorAll(".expo-card").forEach(card => {

        if (!card.expoData) return;

        const caption = plainExpoCaption(card.expoData);
        const oldLabel = card.querySelector(".expo-label");
        const newLabel = buildExpoLabel(card.expoData);
        const image = card.querySelector("img");

        const actionKey = card.expoData.externalUrl ? "openExternalArticle" : "openExhibitionGallery";
        card.setAttribute("aria-label", `${sharedTranslations[currentLang][actionKey]}: ${caption}`);

        if (image) {

            image.alt = caption;

        }

        if (oldLabel) {

            oldLabel.replaceWith(newLabel);

        } else {

            card.appendChild(newLabel);

        }

    });

}

function buildExpoCard(expo) {

    const card = document.createElement(expo.externalUrl ? "a" : "button");
    card.className = `expo-card${expo.galleryDisabled ? " expo-card-disabled" : ""}`;
    card.expoData = expo;

    if (expo.externalUrl) {

        card.href = expo.externalUrl;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

    } else {

        card.type = "button";

    }

    card.setAttribute(
        "aria-label",
        `${sharedTranslations[currentLang][expo.externalUrl ? "openExternalArticle" : "openExhibitionGallery"]}: ${plainExpoCaption(expo)}`
    );

    const flyer = document.createElement("span");
    flyer.className = "expo-flyer";

    if (expo.flyer) {

        const image = document.createElement("img");
        image.src = encodeImagePath(expo.flyer);
        image.alt = plainExpoCaption(expo);
        image.loading = "lazy";

        image.addEventListener("error", () => {

            image.remove();
            flyer.classList.add("expo-placeholder");
            flyer.style.background = expo.flyerColor || "#ddd";

        });

        flyer.appendChild(image);

    } else {

        flyer.classList.add("expo-placeholder");
        flyer.style.background = expo.flyerColor || "#ddd";

    }

    card.appendChild(flyer);
    card.appendChild(buildExpoLabel(expo));

    return card;

}

function appendExpoGroup(groupKey, items) {

    if (!items.length) return;

    const title = document.createElement("h2");
    title.className = "expo-section-title";
    title.dataset.i18n = groupKey;
    title.textContent = sharedTranslations[currentLang][groupKey];
    exposGrid.appendChild(title);

    items
        .slice()
        .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
        .forEach(expo => {

            exposGrid.appendChild(buildExpoCard(expo));

        });

}

if (exposGrid && window.exposCatalog) {

    const individualExpos = window.exposCatalog.filter(expo => expo.category === "individual");
    const collectiveExpos = window.exposCatalog.filter(expo => expo.category !== "individual");

    appendExpoGroup("individualExhibitions", individualExpos);
    appendExpoGroup("collectiveExhibitions", collectiveExpos);

}

const filterInputs = document.querySelectorAll(".filters-menu input[type='checkbox']");

function selectedFilters() {

    const filters = {};

    filterInputs.forEach(input => {

        if (!input.checked) return;

        const filterName = input.dataset.filter;

        if (!filters[filterName]) {

            filters[filterName] = [];

        }

        filters[filterName].push(normalizeFilterValue(input.value));

    });

    return filters;

}

function applyWorkFilters() {

    const filters = selectedFilters();
    const cards = document.querySelectorAll(".work-card");

    cards.forEach(card => {

        const shouldShow = Object.entries(filters).every(([filterName, values]) => {

            if (!values.length) return true;

            return values.includes(normalizeFilterValue(card.dataset[filterName]));

        });

        const isHidden = card.classList.contains("is-hidden");

        if (shouldShow && isHidden) {

            card.classList.remove("is-hidden");
            card.classList.add("is-entering");

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    card.classList.remove("is-entering");

                });

            });

        }

        if (!shouldShow && !isHidden) {

            card.classList.add("is-leaving");

            window.setTimeout(() => {

                card.classList.add("is-hidden");
                card.classList.remove("is-leaving");

            }, 180);

        }

    });

}

filterInputs.forEach(input => {

    input.addEventListener("change", applyWorkFilters);

});

const backToTopButton = document.getElementById("backToTop");
const worksPage = document.querySelector(".works-page");

if (backToTopButton && worksPage) {

    function updateBackToTopVisibility() {

        backToTopButton.classList.toggle("visible", worksPage.scrollTop > 360);

    }

    worksPage.addEventListener("scroll", updateBackToTopVisibility);

    backToTopButton.addEventListener("click", () => {

        worksPage.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

    updateBackToTopVisibility();

}

const workCards = document.querySelectorAll(".work-card");
const workLightbox = document.getElementById("workLightbox");
const workLightboxArt = document.getElementById("workLightboxArt");
const workLightboxImage = document.getElementById("workLightboxImage");
const workLightboxInfo = document.getElementById("workLightboxInfo");
const workLightboxCollection = document.getElementById("workLightboxCollection");

if (workCards.length && workLightbox) {

    workCards.forEach(card => {

        card.addEventListener("click", () => {

            const cardImage = card.querySelector("img");
            const work = card.workData || {};

            workLightboxArt.className = "work-lightbox-art";
            workLightboxArt.style.backgroundImage = "";
            workLightboxImage.removeAttribute("src");
            workLightboxImage.alt = "";
            workLightboxImage.hidden = true;

            if (cardImage) {

                workLightboxImage.src = cardImage.src;
                workLightboxImage.alt = cardImage.alt || plainWorkCaption(work) || "Obra de Gustavo Poester";
                workLightboxImage.hidden = false;

            } else {

                workLightboxArt.classList.add("visible");

                Array.from(card.classList).forEach(className => {

                    if (className.startsWith("color-")) {

                        workLightboxArt.classList.add(className);

                    }

                });

            }

            workLightboxInfo.innerHTML = "";

            const captionTitle = document.createElement("strong");
            captionTitle.textContent = work.title || card.dataset.title || "";
            workLightboxInfo.appendChild(captionTitle);

            const captionInfo = workCaptionParts(work).join(", ");

            if (captionInfo) {

                workLightboxInfo.append(`, ${captionInfo}`);

            }

            workLightboxCollection.textContent = sharedTranslations[currentLang][collectionKey(work)];

            workLightbox.classList.add("open");
            workLightbox.setAttribute("aria-hidden", "false");

        });

    });

    workLightbox.addEventListener("click", (e) => {

        if (e.target !== workLightbox) return;

        workLightbox.classList.remove("open");
        workLightbox.setAttribute("aria-hidden", "true");

    });

    document.addEventListener("keydown", (e) => {

        if (e.key !== "Escape") return;

        workLightbox.classList.remove("open");
        workLightbox.setAttribute("aria-hidden", "true");

    });

}

const expoCards = document.querySelectorAll(".expo-card");
const expoLightbox = document.getElementById("expoLightbox");
const expoLightboxTitle = document.getElementById("expoLightboxTitle");
const expoLightboxMeta = document.getElementById("expoLightboxMeta");
const expoLightboxCredits = document.getElementById("expoLightboxCredits");
const expoGallery = document.getElementById("expoGallery");

function closeExpoLightbox() {

    if (!expoLightbox) return;

    expoLightbox.classList.remove("open");
    expoLightbox.setAttribute("aria-hidden", "true");

    expoLightbox.querySelectorAll("video").forEach(item => {

        item.pause();

    });

}

function buildExpoMediaItem(media, expo) {

    const item = document.createElement("div");
    item.className = "expo-gallery-item";
    item.setAttribute("aria-label", localizedText(media.alt) || plainExpoCaption(expo));

    if (media.type === "video" && media.src) {

        const videoItem = document.createElement("video");
        videoItem.src = encodeImagePath(media.src);
        videoItem.muted = true;
        videoItem.loop = true;
        videoItem.autoplay = true;
        videoItem.playsInline = true;
        videoItem.draggable = false;
        videoItem.setAttribute("aria-label", localizedText(media.alt) || plainExpoCaption(expo));
        item.appendChild(videoItem);

    } else if (media.type !== "video" && media.src) {

        const image = document.createElement("img");
        image.src = encodeImagePath(media.src);
        image.alt = localizedText(media.alt) || plainExpoCaption(expo);
        image.loading = "lazy";
        image.draggable = false;
        item.appendChild(image);

    }

    if (!item.children.length) {

        item.classList.add("expo-gallery-placeholder");
        item.style.background = media.color || expo.flyerColor || "#ddd";

    }

    return item;

}

if (expoCards.length && expoLightbox && expoGallery) {

    let isDraggingExpoGallery = false;
    let expoGalleryStartX = 0;
    let expoGalleryStartScroll = 0;

    function scrollExpoGalleryWithWheel(e) {

        if (!expoLightbox.classList.contains("open")) return;

        const horizontalDelta = Math.abs(e.deltaX) > 0 ? e.deltaX : 0;
        const verticalDelta = Math.abs(e.deltaY) > 0 ? e.deltaY : 0;
        let scrollAmount = Math.abs(horizontalDelta) >= Math.abs(verticalDelta)
            ? horizontalDelta
            : verticalDelta;

        if (!scrollAmount) return;

        e.preventDefault();
        e.stopPropagation();

        scrollAmount = Math.max(-140, Math.min(140, scrollAmount * 0.65));

        expoGallery.scrollBy({
            left:scrollAmount,
            behavior:"auto"
        });

    }

    expoCards.forEach(card => {

        card.addEventListener("click", () => {

            const expo = card.expoData || {};

            if (expo.galleryDisabled) return;

            if (expo.externalUrl) {

                return;

            }

            const mediaItems = Array.isArray(expo.media) && expo.media.length
                ? expo.media
                : [{ type: "image", src: "", color: expo.flyerColor }];

            expoLightboxTitle.textContent = expoTitle(expo);
            expoLightboxMeta.textContent = [
                expo.year,
                expo.location
            ].filter(Boolean).join(", ");

            if (expoLightboxCredits) {

                const credits = localizedText(expo.credits) || "";
                expoLightboxCredits.textContent = credits
                    ? `${sharedTranslations[currentLang].imageCreditsPrefix} ${credits}`
                    : "";
                expoLightboxCredits.hidden = !credits;

            }

            expoGallery.innerHTML = "";

            mediaItems.forEach(media => {

                expoGallery.appendChild(buildExpoMediaItem(media, expo));

            });

            expoLightbox.classList.add("open");
            expoLightbox.setAttribute("aria-hidden", "false");

            expoLightbox.querySelectorAll("video").forEach(item => {

                item.play().catch(() => {});

            });

        });

    });

    expoLightbox.addEventListener("wheel", scrollExpoGalleryWithWheel, { passive:false, capture:true });

    expoGallery.addEventListener("mousedown", (e) => {

        if (e.button !== 0) return;

        isDraggingExpoGallery = true;
        expoGalleryStartX = e.pageX;
        expoGalleryStartScroll = expoGallery.scrollLeft;
        expoGallery.classList.add("is-dragging");
        e.preventDefault();

    });

    expoGallery.addEventListener("mousemove", (e) => {

        if (!isDraggingExpoGallery) return;

        e.preventDefault();
        expoGallery.scrollLeft = expoGalleryStartScroll - (e.pageX - expoGalleryStartX);

    });

    document.addEventListener("mouseup", () => {

        if (!isDraggingExpoGallery) return;

        isDraggingExpoGallery = false;
        expoGallery.classList.remove("is-dragging");

    });

    expoLightbox.addEventListener("click", (e) => {

        if (e.target.closest(".expo-gallery-item img, .expo-gallery-item video")) return;

        closeExpoLightbox();

    });

    document.addEventListener("keydown", (e) => {

        if (e.key !== "Escape") return;

        closeExpoLightbox();

    });

}
