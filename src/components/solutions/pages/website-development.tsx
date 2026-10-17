import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Code2,
  CreditCard,
  Database,
  Globe2,
  Headset,
  LayoutTemplate,
  MapPin,
  Monitor,
  MousePointerClick,
  Search,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
  UsersRound,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { websiteArticles } from "@/lib/website-articles";

import "./website-development.css";

type WebsitePath = "no-site" | "not-working";

const webTechnologies = [
  {
    name: "React",
    detail: "Interactive and reusable interfaces",
    icon: Code2,
    style: "react",
  },
  {
    name: "Next.js",
    detail: "Fast, SEO-friendly applications",
    icon: Globe2,
    style: "next",
  },
  {
    name: "Node.js",
    detail: "Scalable server-side JavaScript",
    icon: Server,
    style: "node",
  },
  {
    name: "Express.js",
    detail: "Flexible backend APIs",
    icon: MousePointerClick,
    style: "express",
  },
  {
    name: "MongoDB",
    detail: "Flexible document database",
    icon: Database,
    style: "mongo",
  },
  {
    name: "MERN Stack",
    detail: "Full JavaScript solution",
    icon: Code2,
    style: "mern",
  },
  {
    name: "WordPress",
    detail: "Easy content management",
    icon: LayoutTemplate,
    style: "wordpress",
  },
  {
    name: "Tailwind CSS",
    detail: "Clean and responsive styling",
    icon: Sparkles,
    style: "tailwind",
  },
  {
    name: "Live Support",
    detail: "Real-time support for your customers",
    icon: Headset,
    style: "support",
  },
  {
    name: "Google Analytics",
    detail: "Traffic and performance insights",
    icon: BarChart3,
    style: "google",
  },
  {
    name: "Payment & CRM",
    detail: "Payments and customer tools",
    icon: CreditCard,
    style: "integrations",
  },
];

function TechStackIcon({ technology }: { technology: (typeof webTechnologies)[number] }) {
  const FallbackIcon = technology.icon;

  switch (technology.style) {
    case "react":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="#61DAFB" strokeWidth="2" />
          <ellipse
            cx="24"
            cy="24"
            rx="20"
            ry="7.5"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(60 24 24)"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="20"
            ry="7.5"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(120 24 24)"
          />
          <circle cx="24" cy="24" r="3.2" fill="#61DAFB" />
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="#111111" />
          <path d="M15 33V15l19 21V15" stroke="#ffffff" strokeWidth="3" />
          <path d="M29 15v9" stroke="#ffffff" strokeWidth="3" />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="m24 3 18 10.5v21L24 45 6 34.5v-21L24 3Z"
            stroke="#539E43"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M19 20v9c0 2 1.3 3 3.3 3 1.9 0 3.2-1 3.2-3v-9m4.5 0v12m0-6c0-4 5-4 5 0v6"
            stroke="#539E43"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 64 48" fill="none" aria-hidden="true">
          <text
            x="32"
            y="32"
            fill="#353535"
            fontFamily="Arial, sans-serif"
            fontSize="21"
            fontWeight="500"
            letterSpacing="-1.1"
            textAnchor="middle"
          >
            express
          </text>
        </svg>
      );
    case "mongo":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="M24 4c-1 7-10 13-10 24 0 7 4 12 9 14V29h2v13c6-3 10-8 10-15 0-10-8-16-11-23Z"
            fill="#00ED64"
          />
          <path d="M24 17v25" stroke="#173D39" strokeWidth="1.5" />
        </svg>
      );
    case "mern":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M9 14h30M9 24h30M9 34h30" stroke="currentColor" strokeWidth="2.5" />
          <circle
            cx="15"
            cy="14"
            r="4"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <circle
            cx="32"
            cy="24"
            r="4"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <circle
            cx="20"
            cy="34"
            r="4"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
      );
    case "wordpress":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="#21759B" />
          <circle cx="24" cy="24" r="20" stroke="#ffffff" strokeWidth="1.3" />
          <text
            x="24"
            y="34"
            fill="#ffffff"
            fontFamily="Georgia, serif"
            fontSize="29"
            fontStyle="italic"
            fontWeight="700"
            textAnchor="middle"
          >
            W
          </text>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="M8 20c4-8 9-12 16-12 9 0 10 7 16 7-4 8-9 12-16 12-9 0-10-7-16-7Zm0 15c4-8 9-12 16-12 9 0 10 7 16 7-4 8-9 12-16 12-9 0-10-7-16-7Z"
            fill="#06B6D4"
            transform="translate(0 -3)"
          />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M8 39V28" stroke="#4285F4" strokeWidth="6" strokeLinecap="round" />
          <path d="M19 39V20" stroke="#34A853" strokeWidth="6" strokeLinecap="round" />
          <path d="M30 39V12" stroke="#FBBC04" strokeWidth="6" strokeLinecap="round" />
          <path d="M41 39V24" stroke="#EA4335" strokeWidth="6" strokeLinecap="round" />
          <circle cx="30" cy="12" r="3.5" fill="#EA4335" />
        </svg>
      );
    default:
      return <FallbackIcon aria-hidden="true" />;
  }
}

const websiteProcess = [
  {
    title: "Understand your audience & competition",
    text: "We learn about your target customers, services, and competitors to see how people search for businesses like yours—and what it takes to compete.",
    icon: Search,
  },
  {
    title: "Design the experience",
    text: "We create a clear, mobile-first experience that helps visitors understand your offer and take the next step.",
    icon: LayoutTemplate,
  },
  {
    title: "Build for performance",
    text: "We develop a fast, secure, scalable website and create a strong internal linking structure to help search engines understand your pages and how they connect.",
    details: ["Internal links", "Connected page structure"],
    icon: Code2,
  },
  {
    title: "Full SEO foundation",
    text: "We build search readiness into your website from the start—not as an afterthought.",
    details: [
      "Technical SEO",
      "On-page SEO",
      "SEO content structure",
      "Strong internal linking",
      "Clean site architecture",
    ],
    icon: Globe2,
  },
  {
    title: "Google Business Profile & Local Directories",
    text: "We set up and optimise your Google Business Profile, then submit your business to relevant local directories to strengthen local visibility.",
    details: ["3 relevant local directories included at no extra cost"],
    icon: MapPin,
  },
  {
    title: "Indexing & Discovery Setup",
    text: "We individually submit important pages for indexing and check that Google can discover and crawl your website after launch.",
    details: ["Important pages submitted individually", "Google discovery and crawl check"],
    icon: Globe2,
  },
  {
    title: "Tools & Tracking",
    text: "We connect Google Analytics, Search Console, and the tools you need to measure performance. Live support integration is available if required.",
    details: ["Google Analytics", "Search Console", "Live support if required"],
    icon: BarChart3,
  },
  {
    title: "Launch & Ongoing Support",
    text: "After a complete launch, we continue with updates, fixes, monitoring, and improvements to help your website perform as your business grows.",
    icon: Wrench,
  },
];

const websiteHealthChecks = [
  {
    question: "Do you appear when people search for your services on Google?",
    answer:
      "If your website doesn’t show up in the top results, most potential customers never see you. This usually happens because of weak or missing SEO.",
  },
  {
    question: "Is your website easy to use on a mobile phone?",
    answer:
      "Most people browse on mobile. If your site is hard to use on a phone, visitors may leave quickly before they contact you.",
  },
  {
    question: "Can a visitor understand what you do within 5 seconds?",
    answer:
      "If your message isn’t clear right away, people may exit without exploring your services or seeing why they should choose you.",
  },
  {
    question: "Does your website load quickly?",
    answer:
      "Slow loading can make visitors leave before they even see your offer. A faster experience helps people get to the information they need.",
  },
  {
    question: "Is it easy for visitors to contact you?",
    answer:
      "If contact options aren’t clear, interested people may still not reach out. Make it easy to call, message, or request a quote.",
  },
  {
    question: "Does your website look professional and build trust?",
    answer:
      "An outdated or unclear design can reduce credibility and make potential customers hesitate before enquiring.",
  },
  {
    question: "Are you getting regular enquiries from your website?",
    answer:
      "If not, your website may not be doing enough to turn visitors into leads. Review your visibility, message, and enquiry journey together.",
  },
];

function WebsiteInsights() {
  const journalViewportRef = useRef<HTMLDivElement>(null);
  const [activeArticleIndex, setActiveArticleIndex] = useState(0);

  const scrollJournal = useCallback((direction: -1 | 1) => {
    const viewport = journalViewportRef.current;
    if (!viewport) return;

    const firstCard = viewport.querySelector<HTMLElement>(".wd-journal-card");
    const gap = Number.parseFloat(getComputedStyle(viewport).columnGap) || 0;
    const step = (firstCard?.getBoundingClientRect().width ?? viewport.clientWidth) + gap;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const behavior = reducedMotion ? "auto" : "smooth";
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    if (maxScroll > 0 && direction > 0 && maxScroll - viewport.scrollLeft <= step / 2) {
      viewport.scrollTo({ left: 0, behavior });
      return;
    }

    if (maxScroll > 0 && direction < 0 && viewport.scrollLeft <= step / 2) {
      viewport.scrollTo({ left: maxScroll, behavior });
      return;
    }

    viewport.scrollBy({ left: direction * step, behavior });
  }, []);

  useEffect(() => {
    const viewport = journalViewportRef.current;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (!viewport || reducedMotion) return;

    const interval = window.setInterval(() => {
      const section = viewport.closest(".wd-insights");
      const bounds = section?.getBoundingClientRect();
      if (
        document.hidden ||
        section?.matches(":hover") ||
        section?.contains(document.activeElement) ||
        !bounds ||
        bounds.bottom <= 0 ||
        bounds.top >= window.innerHeight
      ) {
        return;
      }

      scrollJournal(1);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [scrollJournal]);

  return (
    <section className="wd-insights" aria-labelledby="wd-insights-title">
      <header className="wd-insights-heading" data-wd-reveal>
        <div>
          <p className="wd-eyebrow">
            <span /> THE WEBSITE JOURNAL
          </p>
          <h2 id="wd-insights-title">Web Development Insights for Growing Businesses</h2>
        </div>
        <div className="wd-insights-intro">
          <p>
            Practical guides on website design, SEO, performance, and the details that turn more
            visits into confident next steps.
          </p>
          <div className="wd-insights-controls" aria-label="Article carousel controls">
            <span className="wd-carousel-status" aria-hidden="true">
              <i /> AUTO PLAY
            </span>
            <button
              type="button"
              aria-label="Show previous articles"
              aria-controls="wd-journal-carousel"
              onClick={() => scrollJournal(-1)}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Show next articles"
              aria-controls="wd-journal-carousel"
              onClick={() => scrollJournal(1)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <div
        className="wd-journal-grid"
        id="wd-journal-carousel"
        role="region"
        aria-label="Website development articles carousel"
        ref={journalViewportRef}
        tabIndex={0}
        onScroll={(event) => {
          const viewport = event.currentTarget;
          const firstCard = viewport.querySelector<HTMLElement>(".wd-journal-card");
          if (!firstCard) return;

          const gap = Number.parseFloat(getComputedStyle(viewport).columnGap) || 0;
          const step = firstCard.getBoundingClientRect().width + gap;
          setActiveArticleIndex(Math.round(viewport.scrollLeft / step));
        }}
      >
        {websiteArticles.map((item, index) => (
          <article
            role="group"
            aria-label={`Article ${index + 1} of ${websiteArticles.length}`}
            className={`wd-journal-card${activeArticleIndex === index ? " is-active" : ""}`}
            key={item.slug}
            data-wd-reveal
          >
            <div className="wd-editorial-art">
              <img
                src={item.image}
                alt={item.imageAlt}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="wd-journal-copy">
              <div className="wd-journal-meta">
                <span>{item.category}</span>
                <time dateTime={item.datePublished}>
                  {new Date(`${item.datePublished}T00:00:00Z`).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              </div>
              <h3>
                <a href={`/insights#${item.slug}`}>{item.title}</a>
              </h3>
              <p>{item.summary}</p>
              <div className="wd-journal-action">
                <a className="wd-journal-link" href={`/insights#${item.slug}`}>
                  Learn more
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="wd-insights-footer">
        <a className="wd-insights-all" href="/insights">
          View all articles <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: websiteArticles.map((item, position) => ({
            "@type": "ListItem",
            position: position + 1,
            item: {
              "@type": "BlogPosting",
              headline: item.title,
              description: item.summary,
              image: `https://quorisx.com${item.image}`,
              datePublished: item.datePublished,
              author: { "@type": "Organization", name: item.author },
              mainEntityOfPage: `https://quorisx.com/insights#${item.slug}`,
              url: `https://quorisx.com/insights#${item.slug}`,
            },
          })),
        })}
      </script>
    </section>
  );
}

export function WebsiteDevelopmentPage() {
  const [activeTechnology, setActiveTechnology] = useState(0);
  const pageRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const nodes = pageRef.current?.querySelectorAll<HTMLElement>("[data-wd-reveal]");
    if (
      !nodes ||
      !("IntersectionObserver" in window) ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wd-revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    nodes.forEach((node) => {
      node.classList.add("wd-reveal-ready");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);
  const [activePath, setActivePath] = useState<WebsitePath>("not-working");
  const [openWebsiteCheck, setOpenWebsiteCheck] = useState<number | null>(0);
  const [processIsVisible, setProcessIsVisible] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);
  const processSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const exitTimer = setTimeout(() => setSplashExiting(true), 1400);
    const removeTimer = setTimeout(() => setShowSplash(false), 2300);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const processSection = processSectionRef.current;
    if (!processSection) return;
    if (!("IntersectionObserver" in window)) {
      setProcessIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(processSection);
    return () => observer.disconnect();
  }, []);

  function handleAuditSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const website = String(formData.get("website") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const profile = String(formData.get("profile") ?? "");
    const subject = encodeURIComponent("Free website and visibility audit request");
    const body = encodeURIComponent(
      `Website URL: ${website}\nWork email: ${email}\nGoogle Business Profile: ${profile || "Not specified"}\n\nPlease review my website speed, SEO setup, local profile status, and conversion experience.`,
    );

    window.location.href = `mailto:info@quorisx.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="wd-page" ref={pageRef}>
        {showSplash && (
          <div className={`wd-splash${splashExiting ? " is-exiting" : ""}`} aria-hidden="true">
            <div className="wd-splash-top" />
            <div className="wd-splash-bottom" />
            <div className="wd-splash-center">
              <span className="wd-splash-name">quorisx</span>
            </div>
          </div>
        )}
        <div className="wd-scroll-panel">
          <section className="wd-hero" aria-labelledby="wd-hero-title">
            <div className="wd-hero-inner">
              <div className="wd-hero-copy">
                <p className="wd-eyebrow" data-hero-eyebrow>
                  <span /> WEBSITE DESIGN &amp; DEVELOPMENT
                </p>
                <h1 id="wd-hero-title">
                  <span className="wd-hero-title-line">Give people a</span>
                  <span className="wd-hero-title-line">reason to choose</span>
                  <em className="wd-hero-title-line">your business.</em>
                </h1>
                <p className="wd-hero-lead">
                  Your website isn't just a digital address. It's your business identity, your first
                  impression, and your opportunity to stand out.
                </p>
                <div className="wd-hero-actions">
                  <a
                    className="wd-button"
                    href="#website-path"
                    onClick={() => setActivePath("no-site")}
                  >
                    Build My Website <ArrowRight aria-hidden="true" />
                  </a>
                  <a
                    className="wd-button wd-button-outline"
                    href="#website-path"
                    onClick={() => setActivePath("not-working")}
                  >
                    Improve My Existing Website <ArrowRight aria-hidden="true" />
                  </a>
                </div>
                <a className="wd-scroll-cue" href="#website-path">
                  Explore your next step <ArrowDown aria-hidden="true" />
                </a>
              </div>
              <div className="wd-hero-visual" data-hero-visual>
                <figure className="wd-hero-photo">
                  <img
                    src="/software_dev_team_separate.png"
                    alt="A software development team building and reviewing a website together in a modern studio"
                    fetchPriority="high"
                  />
                  <figcaption className="wd-hero-photo-caption">
                    <span>01</span>
                    <span>
                      BUILT TO BE FOUND
                      <br />
                      DESIGNED TO CONVERT
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="wd-hero-bottom" aria-hidden="true">
              <span>BE DISCOVERABLE</span>
              <i />
              <span>BUILD TRUST</span>
              <i />
              <span>MAKE IT EASY TO ACT</span>
            </div>
          </section>
        </div>

        <div className="wd-scroll-panel">
          <section className="wd-path-section" id="website-path" aria-labelledby="wd-path-title">
            <div className="wd-path-heading">
              <p className="wd-eyebrow">
                <span /> 01 / A LITTLE REALITY CHECK
              </p>
              <div className="wd-path-heading-row">
                <h2 id="wd-path-title">
                  Where are you
                  <br />
                  <em>starting from?</em>
                </h2>
                <div className="wd-path-intro-wrap">
                  <span className="wd-path-intro-mark" aria-hidden="true">
                    <ArrowDown />
                  </span>
                  <p className="wd-path-intro">
                    A first website and an underperforming website need different conversations.
                    Let’s start with yours.
                  </p>
                </div>
              </div>
            </div>
            <nav className="wd-path-tabs" aria-label="Explore website scenarios">
              <a
                aria-current={activePath === "not-working" ? "location" : undefined}
                className={`wd-path-tab${activePath === "not-working" ? " is-active" : ""}`}
                href="#website-health-check"
                onClick={() => setActivePath("not-working")}
              >
                <span className="wd-path-tab-icon">
                  <Monitor aria-hidden="true" />
                </span>
                <span className="wd-path-tab-copy">
                  <small>PATH 01 / EXISTING WEBSITE</small>
                  <strong>I already have a website</strong>
                  <span>But it isn’t bringing the results I need.</span>
                </span>
                <span className="wd-path-tab-arrow wd-path-tab-action">
                  See the quick checks <ArrowUpRight aria-hidden="true" />
                </span>
              </a>
              <a
                aria-current={activePath === "no-site" ? "location" : undefined}
                className={`wd-path-tab${activePath === "no-site" ? " is-active" : ""}`}
                href="#wd-audit"
                onClick={() => setActivePath("no-site")}
              >
                <span className="wd-path-tab-icon is-first-site">
                  <Globe2 aria-hidden="true" />
                </span>
                <span className="wd-path-tab-copy">
                  <small>PATH 02 / FIRST WEBSITE</small>
                  <strong>I need my first website</strong>
                  <span>I’m ready to build my online presence.</span>
                </span>
                <span className="wd-path-tab-arrow wd-path-tab-action">
                  Plan your first website <ArrowUpRight aria-hidden="true" />
                </span>
              </a>
            </nav>
          </section>
        </div>

        <div className="wd-scroll-panel">
          <section className="wd-competition-section" aria-labelledby="wd-competition-title">
            <div className="wd-competition-inner">
              <div className="wd-visibility-feature" data-wd-reveal>
                <figure className="wd-visibility-image">
                  <img
                    src="/mobile.png"
                    alt="Four phone screens show a customer searching Google, comparing businesses, choosing a competitor, and making contact"
                    loading="lazy"
                  />
                  <figcaption>THE CUSTOMER JOURNEY</figcaption>
                </figure>
                <div className="wd-visibility-copy">
                  <p className="wd-eyebrow">
                    <span /> VISIBILITY THAT CONVERTS
                  </p>
                  <h2 id="wd-competition-title">Don't Just Appear. Get Chosen.</h2>
                  <p>
                    Turn online searches into real customer connections with a stronger digital
                    presence.
                  </p>
                  <a className="wd-visibility-cta" href="#wd-audit">
                    Grow Your Visibility <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="wd-visibility-feature wd-support-promo" data-wd-reveal>
                <figure className="wd-visibility-image">
                  <img
                    src="/sen.png"
                    alt="Four stages show a customer ready to buy, a checkout problem, unavailable support, and an abandoned order"
                    width="1536"
                    height="1024"
                    loading="lazy"
                  />
                  <figcaption>SUPPORT THAT SAVES THE SALE</figcaption>
                </figure>
                <div className="wd-visibility-copy wd-support-promo-copy">
                  <p className="wd-eyebrow">
                    <span /> HELP WHEN IT MATTERS
                  </p>
                  <h2>Your Website Is Open. Is Your Support?</h2>
                  <p>
                    A checkout issue shouldn’t end a purchase. Give visitors help when they need it
                    with 24/7 support.
                  </p>
                  <a className="wd-visibility-cta" href="#wd-support-title">
                    Explore 24/7 Support <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="wd-scroll-panel">
          <section
            className="wd-website-check-section"
            id="website-health-check"
            aria-labelledby="wd-website-check-title"
          >
            <div className="wd-website-check-inner">
              <header className="wd-website-check-heading">
                <p className="wd-eyebrow">
                  <span /> A REALITY CHECK FOR YOUR WEBSITE
                </p>
                <h2 id="wd-website-check-title">
                  Your Website Exists.
                  <br />
                  <em>But Is It Actually Working?</em>
                </h2>
                <p className="wd-website-check-subtitle">
                  Most businesses already have a website. Very few get consistent enquiries from it.
                </p>
                <p className="wd-website-check-intro">
                  Having a website is not enough. Answer these questions honestly about your current
                  site and see where it stands.
                </p>
              </header>

              <div className="wd-website-check-list">
                {websiteHealthChecks.map(({ question, answer }, index) => {
                  const isOpen = openWebsiteCheck === index;
                  const answerId = `wd-website-check-answer-${index + 1}`;
                  return (
                    <article
                      className={`wd-website-check-card${isOpen ? " is-open" : ""}`}
                      key={question}
                    >
                      <h3>
                        <button
                          aria-controls={answerId}
                          aria-expanded={isOpen}
                          className="wd-website-check-trigger"
                          onClick={() => setOpenWebsiteCheck(isOpen ? null : index)}
                          type="button"
                        >
                          <span className="wd-website-check-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="wd-website-check-question">{question}</span>
                          <ChevronDown aria-hidden="true" />
                        </button>
                      </h3>
                      <div
                        aria-hidden={!isOpen}
                        className={`wd-website-check-answer${isOpen ? " is-open" : ""}`}
                        id={answerId}
                      >
                        <div className="wd-website-check-answer-inner">
                          <p>{answer}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="wd-website-check-closing">
                <div>
                  <p className="wd-eyebrow">
                    <span /> YOUR WEBSITE SHOULD WORK FOR YOU
                  </p>
                  <p>
                    These 7 questions are just the starting point. A strong website needs the right
                    design, structure, speed, clarity, and conversion elements working together.
                  </p>
                  <p>
                    For a detailed expert analysis, get in touch with us. We’ll audit your website
                    for free and show you what’s missing.
                  </p>
                </div>
                <a className="wd-website-check-cta" href="#wd-audit">
                  Get a Free Website Audit <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="wd-scroll-panel">
          <section
            className={`wd-process-section wd-approach-showcase${processIsVisible ? " is-visible" : ""}`}
            aria-labelledby="wd-process-title"
            ref={processSectionRef}
          >
            <figure className="wd-process-film">
              <video
                src="/video3.mp4"
                poster="/video3-poster.jpg"
                controls
                controlsList="nodownload"
                playsInline
                preload="none"
                aria-label="Video introduction to our website development approach"
              />
              <figcaption>
                <span>OUR APPROACH, IN ACTION</span>
                <span>01 MIN / PLAY VIDEO</span>
              </figcaption>
            </figure>
            <header className="wd-section-header wd-process-header">
              <p className="wd-eyebrow">
                <span /> FROM FIRST SEARCH TO ONGOING SUPPORT
              </p>
              <h2 id="wd-process-title">
                Our approach.
                <br />
                <em>Built to move you forward.</em>
              </h2>
              <p>
                We don’t just build and disappear. We take your website from planning to a complete,
                search-ready launch.
              </p>
            </header>
            <div className="wd-process-content">
              <ol className="wd-process-list">
                {websiteProcess.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li className="wd-process-step" key={step.title} data-process-index={index + 1}>
                      <span className="wd-process-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="wd-process-card">
                        <span className="wd-process-icon">
                          <Icon aria-hidden="true" />
                        </span>
                        <div className="wd-process-card-copy">
                          <span className="wd-process-kicker">
                            STEP {String(index + 1).padStart(2, "0")} <i /> 08
                          </span>
                          <h3>{step.title}</h3>
                          <p>{step.text}</p>
                          {"details" in step && (
                            <ul className="wd-process-details">
                              {step.details.map((detail) => (
                                <li key={detail}>{detail}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      {index < websiteProcess.length - 1 && (
                        <span className="wd-process-connector" aria-hidden="true" />
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="wd-process-summary">
              <p>
                From internal linking and individual page indexing to your Google Business Profile
                and local directory listings, we handle the important technical and visibility work
                during development—not after.
              </p>
              <a href="/contact#inquiry">
                Talk through your project <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>

        <div className="wd-scroll-panel">
          <section className="wd-support-section" aria-labelledby="wd-support-title">
            <div className="wd-support-copy">
              <p className="wd-eyebrow" data-wd-reveal>
                <span /> SUPPORT THAT CONTINUES AFTER LAUNCH
              </p>
              <h2 id="wd-support-title" data-wd-reveal>
                We don’t hand over
                <br />
                <em>the keys and disappear.</em>
              </h2>
              <p data-wd-reveal>
                Get ongoing help with updates, fixes, and improvements as your business changes.
                Your customers can also get live support from real agents, so they can get proper
                answers whenever they need help.
              </p>
              <ul className="wd-support-points" data-wd-reveal>
                <li>
                  <Wrench aria-hidden="true" />
                  <span>
                    <strong>Updates and fixes</strong>
                    <small>We keep your website running smoothly.</small>
                  </span>
                </li>
                <li>
                  <UsersRound aria-hidden="true" />
                  <span>
                    <strong>Live support by real agents</strong>
                    <small>Real people are available to help your customers.</small>
                  </span>
                </li>
                <li>
                  <Sparkles aria-hidden="true" />
                  <span>
                    <strong>Ongoing improvements</strong>
                    <small>Regular enhancements as your business grows.</small>
                  </span>
                </li>
                <li>
                  <Clock3 aria-hidden="true" />
                  <span>
                    <strong>Priority support</strong>
                    <small>Quick help when you need a change or face an issue.</small>
                  </span>
                </li>
                <li>
                  <BarChart3 aria-hidden="true" />
                  <span>
                    <strong>Performance monitoring</strong>
                    <small>We track speed, uptime, and the overall experience.</small>
                  </span>
                </li>
              </ul>
              <a className="wd-text-link" href="/contact#inquiry" data-wd-reveal>
                Talk through your project <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>

        <div className="wd-scroll-panel">
          <section className="wd-stack-section" aria-labelledby="wd-stack-title">
            <header className="wd-section-header">
              <p className="wd-eyebrow">
                <span /> THE RIGHT TOOLS FOR THE JOB
              </p>
              <h2 id="wd-stack-title">
                A stack that supports
                <br />
                <em>your next stage.</em>
              </h2>
              <p>
                We use modern and reliable technologies to build fast, scalable, and easy-to-manage
                websites—based on your business needs.
              </p>
            </header>
            <div className="wd-tech-showcase" data-wd-reveal>
              <div className="wd-tech-marquee" aria-label="Technologies used for website projects">
                {[
                  webTechnologies.filter((_, index) => index % 2 === 0),
                  webTechnologies.filter((_, index) => index % 2 === 1),
                ].map((lane, laneIndex) => (
                  <div
                    className={`wd-tech-marquee-row${laneIndex === 1 ? " is-reverse" : ""}`}
                    key={laneIndex}
                    role="group"
                    aria-label={`Technology selection row ${laneIndex + 1}`}
                  >
                    <div className="wd-tech-marquee-track">
                      <div className="wd-tech-marquee-group">
                        {lane.map((technology) => {
                          const index = webTechnologies.indexOf(technology);
                          return (
                            <button
                              type="button"
                              aria-label={`${technology.name}: ${technology.detail}`}
                              aria-pressed={activeTechnology === index}
                              onClick={() => setActiveTechnology(index)}
                              className={`wd-tech-item wd-tech-${technology.style}${activeTechnology === index ? " is-selected" : ""}`}
                              key={technology.name}
                            >
                              <span className="wd-tech-icon">
                                <TechStackIcon technology={technology} />
                              </span>
                              <span className="wd-tech-content">
                                <strong>{technology.name}</strong>
                                <small>{technology.detail}</small>
                              </span>
                              <ArrowUpRight aria-hidden="true" className="wd-tech-arrow" />
                            </button>
                          );
                        })}
                      </div>
                      <div className="wd-tech-marquee-group is-duplicate" aria-hidden="true">
                        {lane.map((technology) => (
                          <span
                            className={`wd-tech-item wd-tech-${technology.style}`}
                            key={technology.name}
                          >
                            <span className="wd-tech-icon">
                              <TechStackIcon technology={technology} />
                            </span>
                            <span className="wd-tech-content">
                              <strong>{technology.name}</strong>
                              <small>{technology.detail}</small>
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="wd-scroll-panel">
          <WebsiteInsights />
        </div>

        <div className="wd-scroll-panel">
          <section className="wd-audit-section" id="wd-audit" aria-labelledby="wd-audit-title">
            <div className="wd-audit-orbit wd-audit-orbit-one" aria-hidden="true" />
            <div className="wd-audit-orbit wd-audit-orbit-two" aria-hidden="true" />
            <div className="wd-audit-inner">
              <div className="wd-audit-copy">
                <span className="wd-audit-kicker">
                  <Sparkles aria-hidden="true" /> COMPLIMENTARY WEBSITE REVIEW
                </span>
                <p className="wd-eyebrow">
                  <span /> A CLEAR PLACE TO START
                </p>
                <h2 id="wd-audit-title">
                  See What’s Holding
                  <br />
                  <em>Your Business Back</em>
                </h2>
                <p>
                  Share your website URL. We’ll review speed, SEO, Google Business Profile status,
                  and conversion issues, then send a clear report within 24–48 hours.
                </p>
                <div className="wd-audit-checks">
                  <span>
                    <Check aria-hidden="true" /> Page speed
                  </span>
                  <span>
                    <Check aria-hidden="true" /> SEO foundations
                  </span>
                  <span>
                    <Check aria-hidden="true" /> Local profile
                  </span>
                  <span>
                    <Check aria-hidden="true" /> Conversion path
                  </span>
                </div>
                <div className="wd-audit-turnaround">
                  <span className="wd-turnaround-icon">
                    <ArrowRight aria-hidden="true" />
                  </span>
                  <span>
                    <small>YOUR NEXT STEP</small>
                    <strong>A clear report, usually within 24–48 hours.</strong>
                  </span>
                  <span className="wd-turnaround-arrow" aria-hidden="true">
                    <ArrowDown />
                  </span>
                </div>
              </div>
              <form className="wd-audit-form" onSubmit={handleAuditSubmit}>
                <span className="wd-audit-form-label">START YOUR REVIEW</span>
                <div className="wd-audit-form-heading">
                  <span className="wd-audit-form-icon">
                    <Globe2 aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Request your free audit</strong>
                    <small>No obligation. Just a clear starting point.</small>
                  </span>
                </div>
                <label htmlFor="wd-website-url">
                  Website URL
                  <input
                    autoComplete="url"
                    id="wd-website-url"
                    name="website"
                    placeholder="https://yourbusiness.com"
                    required
                    type="url"
                  />
                </label>
                <label htmlFor="wd-audit-email">
                  Where should we send your report?
                  <input
                    autoComplete="email"
                    id="wd-audit-email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    type="email"
                  />
                </label>
                <label htmlFor="wd-profile-status">
                  Google Business Profile
                  <select id="wd-profile-status" name="profile" defaultValue="">
                    <option value="">Choose one (optional)</option>
                    <option value="I have a profile">I have a profile</option>
                    <option value="I am not sure">I am not sure</option>
                    <option value="I do not have a profile">I do not have a profile</option>
                  </select>
                </label>
                <button className="wd-button wd-audit-submit" type="submit">
                  Request my free audit <ArrowUpRight aria-hidden="true" />
                </button>
                <p className="wd-audit-note">
                  Your email app will open with the request ready to send to our team.
                </p>
              </form>
            </div>
          </section>
        </div>

        <div className="wd-scroll-panel">
          <section className="wd-close-section" aria-labelledby="wd-close-title">
            <div className="wd-close-inner">
              <div className="wd-close-copy">
                <p className="wd-eyebrow">
                  <span /> A BETTER BRIEF STARTS HERE
                </p>
                <h2 id="wd-close-title">
                  Tell us what’s
                  <br />
                  <em>getting in the way.</em>
                </h2>
                <p className="wd-close-description">
                  A first launch, a redesign, or a website that isn’t pulling its weight—start with
                  the challenge you’re trying to solve.
                </p>
                <div className="wd-close-actions">
                  <a className="wd-button" href="#wd-audit">
                    Plan my next step <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a className="wd-close-secondary" href="/contact#inquiry">
                    Talk to our team <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div
                className="wd-close-brief"
                aria-label="Helpful details for your first conversation"
              >
                <span className="wd-close-brief-label">A GOOD PLACE TO START</span>
                <p>Three details help us make the first conversation useful.</p>
                <ul>
                  <li>
                    <span>01</span> What your business does
                  </li>
                  <li>
                    <span>02</span> What feels difficult today
                  </li>
                  <li>
                    <span>03</span> What a better result looks like
                  </li>
                </ul>
                <small>No polished brief needed. Just bring the questions you have.</small>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
