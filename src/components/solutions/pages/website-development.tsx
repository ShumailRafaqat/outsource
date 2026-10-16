import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  CreditCard,
  Database,
  Globe2,
  LayoutTemplate,
  MapPin,
  MessageCircle,
  Monitor,
  MousePointerClick,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  UsersRound,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

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
    icon: MessageCircle,
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
          <ellipse cx="24" cy="24" rx="21" ry="8" stroke="currentColor" strokeWidth="2.2" />
          <ellipse
            cx="24"
            cy="24"
            rx="21"
            ry="8"
            stroke="currentColor"
            strokeWidth="2.2"
            transform="rotate(60 24 24)"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="21"
            ry="8"
            stroke="currentColor"
            strokeWidth="2.2"
            transform="rotate(120 24 24)"
          />
          <circle cx="24" cy="24" r="3.4" fill="currentColor" />
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
          <path d="M16 32V16l16 17V16" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="m24 3 18 10.5v21L24 45 6 34.5v-21L24 3Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M19 20v9c0 2 1.3 3 3.3 3 1.9 0 3.2-1 3.2-3v-9m4.5 0v12m0-6c0-4 5-4 5 0v6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <text
            x="24"
            y="33"
            fill="currentColor"
            fontFamily="Arial, sans-serif"
            fontSize="27"
            fontWeight="700"
            letterSpacing="-2"
            textAnchor="middle"
          >
            ex
          </text>
        </svg>
      );
    case "mongo":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="M24 4c-1 7-10 13-10 24 0 7 4 12 9 14V29h2v13c6-3 10-8 10-15 0-10-8-16-11-23Z"
            fill="currentColor"
          />
          <path d="M24 17v25" stroke="var(--background)" strokeWidth="1.5" />
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
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
          <path
            d="m9 16 8 22m6-22 8 22m-8-22h7m-20 0h7m15 0h7m-16 8 3 8 5-16m-18 0 7 20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="M8 20c4-8 9-12 16-12 9 0 10 7 16 7-4 8-9 12-16 12-9 0-10-7-16-7Zm0 15c4-8 9-12 16-12 9 0 10 7 16 7-4 8-9 12-16 12-9 0-10-7-16-7Z"
            fill="currentColor"
            transform="translate(0 -3)"
          />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M8 39V27" stroke="#4285F4" strokeWidth="7" strokeLinecap="round" />
          <path d="M22 39V17" stroke="#34A853" strokeWidth="7" strokeLinecap="round" />
          <path d="M36 39V9" stroke="#FBBC04" strokeWidth="7" strokeLinecap="round" />
          <circle cx="36" cy="9" r="3.5" fill="#EA4335" />
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

const visibilityRealityCopy: Record<
  WebsitePath,
  { label: string; title: string; description: string; signals: string[] }
> = {
  "no-site": {
    label: "Hard to find online",
    title: "Customers search. Your business doesn’t show up.",
    description:
      "Without a clear website and search presence, potential customers may never discover what you offer—or know how to choose you.",
    signals: ["No website to explain your services", "Little presence in Search or Maps"],
  },
  "not-working": {
    label: "Online, but overlooked",
    title: "Your website exists. The enquiries don’t.",
    description:
      "Having a website is not enough. If people search for your services on Google and you don’t appear in the results (often due to missing SEO), they move on to competitors who are visible — and you lose the enquiry before it even starts.",
    signals: ["Low visibility for relevant searches", "Visitors leave without taking action"],
  },
};

const onlinePresenceSteps = {
  discover: {
    label: "Get discovered",
    title: "Show up when people are looking.",
    description:
      "A search-ready website gives people a place to find your services, understand what you offer, and discover how to reach you.",
  },
  trust: {
    label: "Build trust",
    title: "Give customers a reason to choose you.",
    description:
      "Clear service information, real examples, and easy-to-find contact details help potential customers feel confident taking the next step.",
  },
  enquiries: {
    label: "Create enquiries",
    title: "Turn more of that interest into conversations.",
    description:
      "A useful website makes it simple to call, request a quote, or send an enquiry—so interested visitors have a clear way to become customers.",
  },
} as const;
const onlinePresenceStepIds = ["discover", "trust", "enquiries"] as const;
type OnlinePresenceStepId = keyof typeof onlinePresenceSteps;

const firstSiteChallenges = [
  {
    icon: UsersRound,
    text: "Potential customers are comparing options — and you’re not one of them",
  },
  {
    icon: BarChart3,
    text: "Competitors who invested in a website earlier are collecting the enquiries you should be getting",
  },
  {
    icon: Clock3,
    text: "You’re relying only on word-of-mouth, social media, or offline marketing while others are capturing demand 24/7",
  },
  {
    icon: ShieldCheck,
    text: "When someone wants to check your credibility, there’s nowhere to send them",
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

export function WebsiteDevelopmentPage() {
  const [activePath, setActivePath] = useState<WebsitePath>("not-working");
  const [activePresenceStep, setActivePresenceStep] = useState<OnlinePresenceStepId>("discover");
  const [openWebsiteCheck, setOpenWebsiteCheck] = useState<number | null>(0);
  const [processIsVisible, setProcessIsVisible] = useState(false);
  const processSectionRef = useRef<HTMLElement>(null);
  const PathIcon = activePath === "no-site" ? Globe2 : Search;
  const selectedPresenceStep = onlinePresenceSteps[activePresenceStep];

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
      <main className="wd-page">
        <section className="wd-hero" aria-labelledby="wd-hero-title">
          <div className="wd-hero-inner">
            <div className="wd-hero-copy">
              <p className="wd-eyebrow">
                <span /> WEBSITE DEVELOPMENT &amp; SEARCH VISIBILITY
              </p>
              <h1 id="wd-hero-title">
                Is your business
                <br />
                <em>invisible online?</em>
              </h1>
              <p className="wd-hero-lead">
                Customers are searching for your service right now. If competitors appear first and
                you don’t, they get the chance to earn the business.
              </p>
              <p className="wd-hero-subcopy">
                Whether you have a website or not, we help you build a stronger foundation to get
                found and turn visits into enquiries.
              </p>
              <div className="wd-hero-actions">
                <a
                  className="wd-button"
                  href="#website-path"
                  onClick={() => setActivePath("no-site")}
                >
                  I need my first website <ArrowRight aria-hidden="true" />
                </a>
                <a
                  className="wd-button wd-button-outline"
                  href="#website-path"
                  onClick={() => setActivePath("not-working")}
                >
                  I already have a website
                </a>
              </div>
              <a className="wd-scroll-cue" href="#website-path">
                Explore your next step <ArrowDown aria-hidden="true" />
              </a>
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

        <section className="wd-reality-section" aria-labelledby="wd-reality-title">
          <div className="wd-reality-inner">
            <header className="wd-reality-heading">
              <p className="wd-eyebrow">
                <span /> VISIBILITY IS THE FIRST STEP
              </p>
              <h2 id="wd-reality-title">
                Is Your Business Actually Visible —
                <br />
                <em>Or Just Existing Online?</em>
              </h2>
              <p>
                Most businesses fall into one of two groups. Both are losing customers every day.
                The only difference is <em>how.</em>
              </p>
            </header>
            <div className="wd-reality-options" aria-label="Choose the situation closest to yours">
              {(["no-site", "not-working"] as const).map((path, index) => {
                const reality = visibilityRealityCopy[path];
                const RealityIcon = path === "no-site" ? Globe2 : Monitor;
                return (
                  <button
                    key={path}
                    type="button"
                    aria-pressed={activePath === path}
                    onClick={() => setActivePath(path)}
                    className={`wd-reality-option${activePath === path ? " is-active" : ""}`}
                  >
                    <span className="wd-reality-option-top">
                      <span>BUSINESS 0{index + 1}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </span>
                    <span className="wd-reality-option-icon">
                      <RealityIcon aria-hidden="true" />
                    </span>
                    <strong>{reality.label}</strong>
                    <small>
                      {path === "no-site"
                        ? "Customers can’t find a website for your business."
                        : "You have a website, but it isn’t bringing enough enquiries."}
                    </small>
                  </button>
                );
              })}
            </div>
            <div
              key={activePath}
              className="wd-reality-detail"
              role="region"
              aria-live="polite"
              aria-label={`${visibilityRealityCopy[activePath].label} details`}
            >
              <span className="wd-reality-detail-icon">
                <PathIcon aria-hidden="true" />
              </span>
              <div className="wd-reality-detail-copy">
                <p>{visibilityRealityCopy[activePath].label}</p>
                <h3>{visibilityRealityCopy[activePath].title}</h3>
                <span>{visibilityRealityCopy[activePath].description}</span>
                <ul>
                  {visibilityRealityCopy[activePath].signals.map((signal) => (
                    <li key={signal}>
                      <span aria-hidden="true" /> {signal}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                className="wd-reality-next"
                href="#website-path"
                onClick={() => setActivePath(activePath)}
              >
                Explore your next step <ArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

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
                  A first website and an underperforming website need different conversations. Let’s
                  start with yours.
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
              href="#first-website-reality"
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
                See what you’re missing <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
          </nav>
        </section>

        <section
          className="wd-first-site-section"
          id="first-website-reality"
          aria-labelledby="wd-first-site-title"
        >
          <div className="wd-first-site-inner">
            <header className="wd-first-site-heading">
              <p className="wd-eyebrow">
                <span /> A REALITY CHECK FOR YOUR BUSINESS
              </p>
              <h2 id="wd-first-site-title">If You Don’t Have a Website Yet</h2>
              <p>Every day, people search for the exact service you offer.</p>
            </header>

            <div className="wd-first-site-story">
              <p>
                They open Google, look at the first few results, and choose from what’s already
                there.
              </p>
              <p>If your business isn’t on that list, you don’t even get a chance.</p>
              <div className="wd-first-site-tags" aria-label="Common challenges">
                <span>Low visibility</span>
                <span>Missed enquiries</span>
                <span>Competitors winning</span>
              </div>
              <h3>Here’s what’s happening right now:</h3>
              <ul className="wd-first-site-challenges">
                {firstSiteChallenges.map(({ icon: ChallengeIcon, text }) => (
                  <li key={text}>
                    <span className="wd-first-site-challenge-icon">
                      <ChallengeIcon aria-hidden="true" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div
                className="wd-first-site-journey"
                aria-label="How an online presence supports enquiries"
              >
                <span>Search</span>
                <ArrowRight aria-hidden="true" />
                <span>Visibility</span>
                <ArrowRight aria-hidden="true" />
                <span>Enquiry</span>
              </div>
            </div>

            <div className="wd-first-site-visuals">
              <figure className="wd-first-site-visual">
                <img
                  src="/mobile.png"
                  alt="Four phone screens show a customer searching Google, not finding a business, choosing a competitor, and contacting them"
                  loading="lazy"
                />
                <figcaption>
                  People are searching. If you’re not visible, they choose someone else.
                </figcaption>
              </figure>
              <figure className="wd-first-site-visual">
                <img
                  src="/google.png"
                  alt="Illustration comparing businesses with and without a website, with visibility, customers, and growth benefits"
                  loading="lazy"
                />
                <figcaption>
                  With a website you get more visibility, more customers, and real growth.
                </figcaption>
              </figure>
            </div>

            <p className="wd-first-site-reality">
              Not having a website doesn’t just mean you’re “not online.”{" "}
              <strong>
                It means you’re invisible at the exact moment someone is ready to buy.
              </strong>
            </p>

            <div className="wd-presence-interactive">
              <div className="wd-presence-heading">
                <p className="wd-eyebrow">
                  <span /> FROM ONLINE PRESENCE TO ENQUIRIES
                </p>
                <h3>A website can help turn searches into opportunities.</h3>
                <p>
                  Explore how each part of a useful online presence can support the customer
                  journey.
                </p>
              </div>
              <div
                className="wd-presence-steps"
                role="group"
                aria-label="Explore how an online presence supports enquiries"
              >
                {onlinePresenceStepIds.map((stepId, index) => {
                  const step = onlinePresenceSteps[stepId];
                  return (
                    <button
                      key={stepId}
                      type="button"
                      aria-pressed={activePresenceStep === stepId}
                      onClick={() => setActivePresenceStep(stepId)}
                      className={`wd-presence-step${activePresenceStep === stepId ? " is-active" : ""}`}
                    >
                      <span>0{index + 1}</span>
                      {step.label}
                      <ArrowUpRight aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
              <div className="wd-presence-result" aria-live="polite">
                <span className="wd-presence-result-mark" aria-hidden="true">
                  <Check />
                </span>
                <div>
                  <h4>{selectedPresenceStep.title}</h4>
                  <p>{selectedPresenceStep.description}</p>
                </div>
                <a className="wd-presence-cta" href="#wd-audit">
                  Plan my first website <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

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
                  For a detailed expert analysis, get in touch with us. We’ll audit your website for
                  free and show you what’s missing.
                </p>
              </div>
              <a className="wd-website-check-cta" href="#wd-audit">
                Get a Free Website Audit <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="wd-competition-section" aria-labelledby="wd-competition-title">
          <div className="wd-competition-inner">
            <header className="wd-competition-heading">
              <p className="wd-eyebrow">
                <span /> THE COMPETITION IS ALREADY ONLINE
              </p>
              <h2 id="wd-competition-title">
                Your Customers Are Searching.
                <br />
                <em>The Question Is — Will They Find You?</em>
              </h2>
              <p className="wd-competition-subhead">
                Every day, people look for the services you offer. And they’re not just finding you.
                They’re finding everyone else too.
              </p>
            </header>

            <div className="wd-competition-story">
              <div className="wd-competition-copy">
                <p>
                  When someone needs a service, they don’t ask around first. They open Google and
                  search.
                </p>
                <p>
                  In that moment, they’re comparing options. Multiple businesses appear in front of
                  them—some established, some new, some who invested in their website earlier.
                </p>
                <p>
                  If your business doesn’t show up clearly in those results, you don’t get a fair
                  chance. The customer doesn’t think, “Maybe this business exists but isn’t
                  ranking.” They simply choose from what’s already visible.
                </p>
                <p>
                  This is where most businesses lose. Not because their service is weak, but because
                  they’re harder to find than their competitors.
                </p>
                <p>
                  Having a website is no longer an advantage by itself. Almost everyone has one now.
                </p>
              </div>

              <aside className="wd-competition-advantage">
                <p className="wd-eyebrow">
                  <span /> THE VISIBILITY ADVANTAGE
                </p>
                <h3>The businesses that get chosen:</h3>
                <ul>
                  <li>
                    <Check aria-hidden="true" /> Appear when people search
                  </li>
                  <li>
                    <Check aria-hidden="true" /> Look credible at first glance
                  </li>
                  <li>
                    <Check aria-hidden="true" /> Make it easy to enquire
                  </li>
                  <li>
                    <Check aria-hidden="true" /> Rank above others in their market
                  </li>
                </ul>
                <p>
                  If Google shows your competitors first, they get the attention, trust, and enquiry
                  —even if your service is better.
                </p>
              </aside>
            </div>

            <div className="wd-competition-bottom">
              <p>
                Staying ahead doesn’t happen by accident. It happens when your website is built to
                be found, trusted, and chosen.
              </p>
              <div className="wd-competition-closing">
                <p>
                  In a market full of options, visibility decides who gets the customer.
                  <strong> Make sure that business is yours.</strong>
                </p>
                <a href="#wd-audit">
                  Get Your Website Reviewed <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`wd-process-section${processIsVisible ? " is-visible" : ""}`}
          aria-labelledby="wd-process-title"
          ref={processSectionRef}
        >
          <header className="wd-section-header wd-process-header">
            <p className="wd-eyebrow">
              <span /> FROM FIRST SEARCH TO ONGOING SUPPORT
            </p>
            <h2 id="wd-process-title">
              A clear process.
              <br />
              <em>No mystery handoff.</em>
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
                  <li className="wd-process-step" key={step.title}>
                    <span className="wd-process-number">{String(index + 1).padStart(2, "0")}</span>
                    <div className="wd-process-card">
                      <span className="wd-process-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div className="wd-process-card-copy">
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
              From internal linking and individual page indexing to your Google Business Profile and
              local directory listings, we handle the important technical and visibility work during
              development—not after.
            </p>
            <a href="/contact#inquiry">
              Talk through your project <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="wd-support-section" aria-labelledby="wd-support-title">
          <div className="wd-support-visual">
            <video
              src="/video3.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="Video about ongoing website support"
            />
            <div className="wd-support-float">
              <span>
                <MessageCircle aria-hidden="true" />
              </span>
              <p>
                <strong>Need a quick answer?</strong>
                <small>Live support from real agents</small>
              </p>
              <span className="wd-support-online" aria-label="Support team online"></span>
            </div>
          </div>
          <div className="wd-support-copy">
            <p className="wd-eyebrow">
              <span /> SUPPORT THAT CONTINUES AFTER LAUNCH
            </p>
            <h2 id="wd-support-title">
              We don’t hand over
              <br />
              <em>the keys and disappear.</em>
            </h2>
            <p>
              Get ongoing help with updates, fixes, and improvements as your business changes. Your
              customers can also get live support from real agents, so they can get proper answers
              whenever they need help.
            </p>
            <ul className="wd-support-points">
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
            <a className="wd-text-link" href="/contact#inquiry">
              Talk through your project <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

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
          <div className="wd-tech-grid">
            {webTechnologies.map((technology) => {
              return (
                <article
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
                  <ArrowUpRight aria-hidden="true" className="wd-tech-arrow" />
                </article>
              );
            })}
          </div>
        </section>

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
                Find out what’s
                <br />
                <em>keeping you hidden.</em>
              </h2>
              <p>
                Share your website URL. We’ll review speed, SEO, Google Business Profile status, and
                conversion issues, then send a clear report within 24–48 hours.
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

        <section className="wd-close-section" aria-labelledby="wd-close-title">
          <div className="wd-close-orbit wd-close-orbit-one" aria-hidden="true" />
          <div className="wd-close-orbit wd-close-orbit-two" aria-hidden="true" />
          <div className="wd-close-inner">
            <div className="wd-close-copy">
              <p className="wd-eyebrow">
                <span /> SHOW UP. BUILD TRUST. GROW.
              </p>
              <h2 id="wd-close-title">
                Let’s make it easier
                <br />
                <em>for customers to find you.</em>
              </h2>
              <p className="wd-close-description">
                A stronger online presence starts with one clear next step. Let’s find yours.
              </p>
              <div className="wd-close-actions">
                <a className="wd-button" href="#wd-audit">
                  Get my free website audit <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="wd-close-secondary" href="/contact#inquiry">
                  Talk to our team <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="wd-close-journey" aria-label="From search to customer">
              <span className="wd-journey-label">THE JOURNEY WE HELP BUILD</span>
              <div className="wd-journey-step">
                <span className="wd-journey-icon">
                  <Search aria-hidden="true" />
                </span>
                <span>
                  <small>01</small>
                  <strong>Search</strong>
                </span>
              </div>
              <span className="wd-journey-line" aria-hidden="true" />
              <div className="wd-journey-step">
                <span className="wd-journey-icon">
                  <Globe2 aria-hidden="true" />
                </span>
                <span>
                  <small>02</small>
                  <strong>Find you</strong>
                </span>
              </div>
              <span className="wd-journey-line" aria-hidden="true" />
              <div className="wd-journey-step is-final">
                <span className="wd-journey-icon">
                  <ArrowUpRight aria-hidden="true" />
                </span>
                <span>
                  <small>03</small>
                  <strong>Take action</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
