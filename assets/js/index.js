const projects = [
    {
        title: "Phone Guardian",
        preview: "assets/preview/phoneguardian.png",
        subtitle: "Mobile App, Team Work, Available in GooglePlay",
        text: "A VPN app that protects your phone from hackers and spies.",
        video: "https://www.youtube.com/embed/dWurY9crBnM",
        googlePlay: "https://play.google.com/store/apps/details?id=com.distimo.phoneguardian"
    },
    {
        title: "Background (HD Wallpapers)",
        preview: "assets/preview/hd.png",
        subtitle: "Mobile App, Team Work, Available in GooglePlay",
        text: "Backgrounds (HD wallpapers) is a free app that has a large collection of HD wallpapers and a home screen backgrounds.",
        image: "assets/img/background.png",
        googlePlay: "https://play.google.com/store/apps/details?id=hd.backgrounds.wallpapers.theme"
    },
    {
        title: "Lively Koi Fish 3D Theme",
        preview: "assets/preview/koifish.png",
        subtitle: "Mobile App, Indie Work, Available in GooglePlay",
        text: "The Lively Koi Fish 3D Theme with incredible 3D water ripple animation will be one of the supreme beautiful therapeutic scenery themes will bring your phone screen a brand new look.",
        video: "https://www.youtube.com/embed/0rEvH_zsS-4",
        googlePlay: "https://play.google.com/store/apps/details?id=com.launcher.theme3d.t600000805"
    },
    {
        title: "CM Launcher",
        preview: "assets/preview/cml.png",
        subtitle: "Mobile App, Teamwork, Available in GooglePlay",
        text: "The most popular Android Launcher with millions of users. The App I mainly work on during 2016 and 2017.",
        video: "https://www.youtube.com/embed/6q6k2PI0JTc",
        googlePlay: "https://play.google.com/store/apps/details?id=com.ksmobile.launcher",
        androidRank: "https://www.androidrank.org/application/cm_launcher_3d_themes_wallpapers/com.ksmobile.launcher"
    },
    {
        title: "Cheetah Keyboard",
        preview: "assets/preview/cmkeyboard.png",
        subtitle: "Mobile App, Team Work, Available in GooglePlay/AppStore",
        text: "Powerful keyboard App with dynamic 3D effects and advanced AI in input prediction.",
        video: "https://www.youtube.com/embed/B9T5emdKoSQ",
        googlePlay: "https://play.google.com/store/apps/details?id=panda.keyboard.emoji.theme",
        appStore: "https://apps.apple.com/app/apple-store/id1249925656"
    },
    {
        title: "Glass Tech 3D Live Theme",
        preview: "assets/preview/glass.png",
        subtitle: "Mobile App, Teamwork, Available in GooglePlay",
        text: "3D Android theme with real-time lighting effects.",
        video: "https://www.youtube.com/embed/zU9Tjx2vW4o",
        googlePlay: "https://play.google.com/store/apps/details?id=theme.icon.glass.tech.live3d",
        androidRank: "https://www.androidrank.org/application/glass_tech_3d_live_theme/theme.icon.glass.tech.live3d"
    },
    {
        title: "3D ruby theme",
        preview: "assets/preview/ruby.png",
        subtitle: "Mobile App, Indie Work, Available in GooglePlay",
        text: "Android theme App with real-time 3d effects benefited by GLSL.",
        video: "https://www.youtube.com/embed/KJx-AQCFLK0"
    },
    {
        title: "London Big Ben Clock 3D Theme",
        preview: "assets/preview/bigben.png",
        subtitle: "Mobile App, Indie Work, Available in GooglePlay",
        text: "An interactive Android theme with 3D effects and melody.",
        image: "assets/img/bigben.png",
        googlePlay: "https://play.google.com/store/apps/details?id=uk.london.theme3d"
    },
    {
        title: "Transparent Screen",
        preview: "assets/preview/transparent.png",
        subtitle: "Mobile App, Indie Work, Available in GooglePlay",
        text: "Transparent Screen is a 3D launcher transparent theme which has transparent screen live wallpaper and designed icon pack.",
        image: "assets/img/transparent.png",
        googlePlay: "https://play.google.com/store/apps/details?id=transparent.screen.theme.wallpaper"
    },
    {
        title: "Kitty fixes Miauwble (game)",
        preview: "assets/preview/kitty.png",
        subtitle: "Game, Teamwork",
        text: "A small game made within 48 hours in Global Game Jam 2020, HKU. Served as the game developer.",
        video: "https://www.youtube.com/embed/AVXLFcdbh10",
        globalGameJam: "https://globalgamejam.org/2020/games/kitty-fixes-miauwble-6"
    },
    {
        title: "Shower Hour (game)",
        preview: "assets/preview/showerhour.png",
        subtitle: "Game, Teamwork",
        text: "A small game made within 48 hours in Global Game Jam 2019, HKU. Served as the game developer.",
        video: "https://www.youtube.com/embed/aLWuX9vzsJA",
        globalGameJam: "https://globalgamejam.org/2019/games/shower-hour"
    },
    {
        title: "Ring Ring Zoo (game)",
        preview: "assets/preview/ringringzoo.png",
        subtitle: "Game, Student Work",
        text: "A puzzle game developed when I was in London cooperating with two artists.",
        video: "https://www.youtube.com/embed/4WlojunSWxo"
    },
    {
        title: "Learn Tibetan",
        preview: "assets/preview/tibetan.png",
        subtitle: "Mobile App, Student Work, Available in AppStore",
        text: "Developed in June 2014, this game has been ranked as the top10 education game in AppStore for over three months",
        image: "assets/img/learntibetan.png"
    }
];

const projectLinks = [
    ["googlePlay", "Google Play"],
    ["appStore", "App Store"],
    ["androidRank", "Android Rank"],
    ["globalGameJam", "Global Game Jam"]
];

const root = document.querySelector("#root");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let revealObserver;
let isInitialRender = true;

function slugify(value) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function projectPath(project) {
    return `#project/${slugify(project.title)}`;
}

function getRoute() {
    const hash = decodeURIComponent(window.location.hash || "#work");

    if (hash === "#contact") {
        return {type: "contact"};
    }

    if (hash.startsWith("#project/")) {
        const slug = hash.slice("#project/".length);
        const index = projects.findIndex((project) => slugify(project.title) === slug);

        if (index >= 0) {
            return {type: "project", index};
        }
    }

    return {type: "work"};
}

function renderHeader(route) {
    const isWork = route.type !== "contact";

    return `
        <header class="topbar">
            <a class="brand" href="#work" data-route aria-label="Shao Wenbin Saleh — Work">
                <span class="brand-mark" aria-hidden="true">SW</span>
                <span class="brand-name">Shao Wenbin Saleh</span>
            </a>
            <div class="nav-cluster">
                <span class="project-count">${String(projects.length).padStart(2, "0")} Projects</span>
                <nav class="desktop-nav" aria-label="Primary navigation">
                    <a href="#work" data-route class="${isWork ? "active" : ""}">Work</a>
                    <a href="#contact" data-route class="${route.type === "contact" ? "active" : ""}">Contact</a>
                </nav>
                <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
                    <span></span>
                    <span></span>
                    <span class="sr-only">Toggle menu</span>
                </button>
            </div>
        </header>
        <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
            <a href="#work" data-route>Work</a>
            <a href="#contact" data-route>Contact</a>
            <span>${String(projects.length).padStart(2, "0")} Projects</span>
        </nav>
    `;
}

function renderProjectCard(project, index) {
    const number = String(index + 1).padStart(2, "0");

    return `
        <article class="project-card" data-reveal>
            <a href="${projectPath(project)}" data-route class="card-link" aria-label="View ${project.title}">
                <div class="card-media">
                    <img
                        src="${project.preview}"
                        alt=""
                        ${index < 3 ? "" : 'loading="lazy"'}
                        decoding="async"
                    >
                    <span class="card-number">${number}</span>
                    <span class="card-arrow" aria-hidden="true">↗</span>
                    <div class="card-shine" aria-hidden="true"></div>
                </div>
                <div class="card-copy">
                    <h2>${project.title}</h2>
                    <p>${project.subtitle}</p>
                </div>
            </a>
        </article>
    `;
}

function renderWork() {
    const cards = projects.map(renderProjectCard).join("");

    return `
        <section class="projects-section" id="work">
            <header class="section-heading" data-reveal>
                <div>
                    <span class="section-kicker">Portfolio / Selected work</span>
                    <h1>Selected projects</h1>
                </div>
                <p>software designer-developer</p>
            </header>
            <div class="project-grid">${cards}</div>
        </section>
    `;
}

function renderProjectButtons(project) {
    const buttons = projectLinks
        .filter(([property]) => project[property])
        .map(([property, label]) => `
            <a class="action-link" href="${project[property]}" target="_blank" rel="noreferrer">
                <span>${label}</span>
                <i aria-hidden="true">↗</i>
            </a>
        `)
        .join("");

    return buttons ? `<div class="project-actions">${buttons}</div>` : "";
}

function renderProjectMedia(project) {
    if (project.image) {
        return `
            <div class="detail-media image-detail" data-reveal>
                <img src="${project.image}" alt="" width="1200">
            </div>
        `;
    }

    const privacyVideo = project.video.replace("youtube.com", "youtube-nocookie.com");

    return `
        <div class="detail-media video-detail" data-reveal>
            <iframe
                src="${privacyVideo}"
                title="${project.title} video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
            ></iframe>
        </div>
    `;
}

function renderProjectDetail(index) {
    const project = projects[index];
    const number = String(index + 1).padStart(2, "0");
    const nextProject = projects[(index + 1) % projects.length];

    return `
        <article class="project-detail">
            <a class="back-link" href="#work" data-route data-reveal>
                <i aria-hidden="true">←</i>
                <span>Selected work</span>
            </a>
            <header class="detail-header">
                <div class="detail-number" data-reveal>${number} / ${String(projects.length).padStart(2, "0")}</div>
                <div class="detail-heading" data-reveal>
                    <p>${project.subtitle}</p>
                    <h1>${project.title}</h1>
                </div>
                <p class="detail-description" data-reveal>${project.text}</p>
            </header>
            ${renderProjectMedia(project)}
            ${renderProjectButtons(project)}
            <a class="next-project" href="${projectPath(nextProject)}" data-route data-reveal>
                <span>
                    <small>Next project</small>
                    ${nextProject.title}
                </span>
                <i aria-hidden="true">→</i>
            </a>
        </article>
    `;
}

function renderContact() {
    return `
        <section class="contact-page">
            <div class="contact-kicker" data-reveal>
                <span></span>
                Contact
            </div>
            <div class="contact-layout">
                <div data-reveal>
                    <h1>Contact</h1>
                    <p>Greetings from Shao!</p>
                </div>
                <div class="contact-links" data-reveal>
                    <a href="https://www.linkedin.com/in/shaowenbin/" target="_blank" rel="noreferrer">
                        <span>Linkedin</span>
                        <i aria-hidden="true">↗</i>
                    </a>
                    <a href="mailto:shao.wenbin@hotmail.com">
                        <span>Email</span>
                        <i aria-hidden="true">↗</i>
                    </a>
                </div>
            </div>
        </section>
    `;
}

function renderFooter() {
    return `
        <footer class="site-footer">
            <a href="#work" data-route>Shao Wenbin Saleh</a>
            <p>software designer-developer</p>
            <a href="#" class="to-top" aria-label="Back to top">↑</a>
        </footer>
    `;
}

function renderShell(route) {
    let content = renderWork();

    if (route.type === "project") {
        content = renderProjectDetail(route.index);
    } else if (route.type === "contact") {
        content = renderContact();
    }

    return `
        <div class="site-shell">
            ${renderHeader(route)}
            <main>${content}</main>
            ${renderFooter()}
        </div>
    `;
}

function setPageTitle(route) {
    if (route.type === "project") {
        document.title = `${projects[route.index].title} — Shao Wenbin Saleh`;
    } else if (route.type === "contact") {
        document.title = "Contact — Shao Wenbin Saleh";
    } else {
        document.title = "Shao Wenbin Saleh — Software Designer-Developer";
    }
}

function setupReveals() {
    revealObserver?.disconnect();
    const elements = root.querySelectorAll("[data-reveal]");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, {threshold: 0.12, rootMargin: "0px 0px -6% 0px"});

    elements.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 60}ms`);
        revealObserver.observe(element);
    });
}

function setupCardEffects() {
    if (reducedMotion.matches || !window.matchMedia("(pointer: fine)").matches) {
        return;
    }

    root.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const bounds = card.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width;
            const y = (event.clientY - bounds.top) / bounds.height;

            card.style.setProperty("--tilt-x", `${(0.5 - y) * 4}deg`);
            card.style.setProperty("--tilt-y", `${(x - 0.5) * 5}deg`);
            card.style.setProperty("--shine-x", `${x * 100}%`);
            card.style.setProperty("--shine-y", `${y * 100}%`);
        });

        card.addEventListener("pointerleave", () => {
            card.style.removeProperty("--tilt-x");
            card.style.removeProperty("--tilt-y");
        });
    });
}

function setupMenu() {
    const button = root.querySelector(".menu-toggle");

    button?.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("menu-open");
        button.setAttribute("aria-expanded", String(isOpen));
    });
}

function updateRoute({scroll = true} = {}) {
    const route = getRoute();
    const update = () => {
        root.innerHTML = renderShell(route);
        setPageTitle(route);
        setupReveals();
        setupCardEffects();
        setupMenu();
        document.body.classList.remove("menu-open");
    };

    if (!isInitialRender && !reducedMotion.matches && document.startViewTransition) {
        document.startViewTransition(update);
    } else {
        update();
    }

    if (scroll) {
        window.scrollTo({top: 0, behavior: reducedMotion.matches ? "auto" : "smooth"});
    }

    isInitialRender = false;
}

document.addEventListener("click", (event) => {
    const routeLink = event.target.closest("[data-route]");

    if (!routeLink) {
        return;
    }

    const targetHash = routeLink.getAttribute("href");

    if (targetHash === window.location.hash) {
        event.preventDefault();
        updateRoute();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
        document.body.classList.remove("menu-open");
        root.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
    }
});

window.addEventListener("hashchange", () => updateRoute());

window.addEventListener("scroll", () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 24);
}, {passive: true});

window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
}, {passive: true});

if (!window.location.hash) {
    window.history.replaceState(null, "", "#work");
}

updateRoute({scroll: false});
