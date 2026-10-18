import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Compass,
  FileText,
  Gauge,
  Link2,
  MapPin,
  SearchCheck,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./digital-marketing-seo.css";

const marketingBenefits = [
  {
    title: "Rank for active searches",
    description: "Show up for services people are already looking for.",
    icon: Search,
  },
  {
    title: "Grow organic traffic",
    description: "Build a steady stream of relevant visitors over time.",
    icon: TrendingUp,
  },
  {
    title: "Rely less on referrals",
    description: "Create another dependable path for new customers to find you.",
    icon: Compass,
  },
  {
    title: "Make paid ads work harder",
    description: "Connect campaigns to relevant pages and measurable actions.",
    icon: Target,
  },
  {
    title: "Build lasting visibility",
    description: "Strengthen your presence with useful content and solid SEO foundations.",
    icon: Gauge,
  },
  {
    title: "Get ahead of competitors",
    description: "Be visible and credible where your market is making decisions.",
    icon: ShieldCheck,
  },
];

const marketingApproach: [string, string, LucideIcon][] = [
  [
    "Keyword & competitor research",
    "Find relevant searches and understand the competition.",
    Search,
  ],
  [
    "On-page & technical SEO",
    "Improve page relevance, structure, speed, and crawlability.",
    SearchCheck,
  ],
  [
    "Search-intent content",
    "Create useful content that meets customers at the right moment.",
    FileText,
  ],
  [
    "Local SEO & Google Business Profile",
    "Strengthen your presence in local search and Maps.",
    MapPin,
  ],
  [
    "Link building & authority",
    "Build credibility with a thoughtful, quality-first approach.",
    Link2,
  ],
  [
    "Tracking & continuous improvement",
    "Measure meaningful outcomes and use insights to refine.",
    BarChart3,
  ],
];

const marketingServices = [
  {
    title: "Search & Organic",
    description: "Be easier to find when customers are actively searching.",
    icon: Search,
    services: [
      ["SEO", "Rank higher and reach people ready to buy."],
      ["Local SEO", "Attract nearby customers through Google Search and Maps."],
      ["Content Marketing", "Support rankings and build customer trust."],
    ],
  },
  {
    title: "Paid Advertising",
    description: "Reach the right audience and bring qualified prospects to your business.",
    icon: Target,
    services: [
      ["Google Ads", "Generate leads and sales with intent-focused paid search."],
      ["Meta Ads (Facebook & Instagram)", "Run targeted campaigns that drive enquiries."],
      ["Retargeting Campaigns", "Re-engage website visitors who didn’t convert."],
    ],
  },
  {
    title: "Growth & Conversion",
    description: "Turn attention into customers with connected journeys and clear measurement.",
    icon: TrendingUp,
    services: [
      ["Email Marketing", "Nurture leads and encourage more conversions."],
      ["Funnel Marketing", "Build structured journeys from awareness through to sale."],
      ["Marketing Automation", "Automate follow-ups, lead nurturing, and repetitive tasks."],
      ["Conversion Rate Optimisation", "Turn more website visitors into customers."],
      ["Analytics & Tracking Setup", "Track conversions to understand what drives sales."],
      ["Landing Page Optimisation", "Design focused pages to convert paid and organic traffic."],
    ],
  },
];

const performanceSignals = [
  ["Organic discovery", "Search impressions, clicks, and relevant landing pages"],
  ["Local intent", "Profile interactions, calls, and direction requests"],
  ["Campaign efficiency", "Spend, qualified conversions, and cost per enquiry"],
  ["Website action", "Form submissions, calls, and conversion rate"],
];

export function DigitalMarketingSeoPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealNodes = pageRef.current?.querySelectorAll<HTMLElement>("[data-dm-reveal]");
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    if (!revealNodes?.length || reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("dm-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    revealNodes.forEach((node) => {
      node.classList.add("dm-reveal-ready");
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="dm-page" ref={pageRef}>
        <section className="dm-hero" aria-labelledby="dm-hero-title">
          <div className="dm-container dm-hero-layout">
            <div className="dm-hero-copy">
              <p className="dm-eyebrow" data-dm-hero-entry>
                <span /> DIGITAL MARKETING, BUILT AROUND GROWTH
              </p>
              <h1 id="dm-hero-title" data-dm-hero-entry>
                Be There When
                <br />
                <em>Customers Are Ready.</em>
              </h1>
              <p className="dm-hero-lead" data-dm-hero-entry>
                Get in front of the right people, at the right moment.
              </p>
              <p className="dm-hero-description" data-dm-hero-entry>
                Bring search, content, and campaigns together with a clear path from first click to
                meaningful action.
              </p>
              <div className="dm-hero-actions" data-dm-hero-entry>
                <a className="dm-button" href="/contact#inquiry">
                  Get a Free SEO Audit <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="dm-button dm-button-outline" href="/contact#inquiry">
                  Talk to Our Team <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <figure className="dm-hero-visual" data-dm-hero-visual>
              <img
                src="/marketing.png"
                alt="A marketing team collaborating on brand and campaign ideas"
                width="1024"
                height="1024"
                fetchPriority="high"
              />
              <figcaption>
                <span>STRATEGY THAT CONNECTS</span>
                <strong>From first impression to next step.</strong>
              </figcaption>
            </figure>
          </div>
          <div className="dm-container dm-hero-services" aria-label="Ways we support growth">
            <article>
              <span>
                <Search aria-hidden="true" />
              </span>
              <div>
                <strong>Search visibility</strong>
                <small>Show up for relevant intent</small>
              </div>
            </article>
            <article>
              <span>
                <Target aria-hidden="true" />
              </span>
              <div>
                <strong>Focused campaigns</strong>
                <small>Reach the right audience</small>
              </div>
            </article>
            <article>
              <span>
                <FileText aria-hidden="true" />
              </span>
              <div>
                <strong>Useful content</strong>
                <small>Help people choose confidently</small>
              </div>
            </article>
          </div>
          <a className="dm-scroll-cue" href="#dm-reality">
            Scroll to explore <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section
          className="dm-section dm-reality"
          id="dm-reality"
          aria-labelledby="dm-reality-title"
        >
          <div className="dm-container">
            <div className="dm-reality-layout">
              <div className="dm-reality-copy" data-dm-reveal>
                <p className="dm-eyebrow">
                  <span /> 01 / THE REALITY
                </p>
                <h2 id="dm-reality-title">
                  Most Businesses Are
                  <br />
                  <em>Invisible Where It Matters.</em>
                </h2>
                <p>
                  Your customers don’t randomly discover businesses anymore. They search on Google
                  with clear intent.
                </p>
                <p>
                  When they type your service and location, Google shows them a list. They click
                  what appears at the top. Everyone else is easier to overlook.
                </p>
                <p>
                  If your website isn’t ranking, you’re not part of that decision. It doesn’t matter
                  how good your service is—if you’re not visible, you don’t get the chance.
                </p>
                <a className="dm-text-link dm-reality-link" href="#dm-competition">
                  See why visibility matters <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <div
                className="dm-search-moment"
                aria-label="A customer comparing Google search results"
                data-dm-reveal
              >
                <div className="dm-search-moment-top">
                  <Search aria-hidden="true" />
                  <span>service near me</span>
                  <span className="dm-search-moment-dot" />
                </div>
                <p>Top results get the first look.</p>
                {["Business that shows up", "Another visible option", "Your business"].map(
                  (result, index) => (
                    <div
                      className={`dm-search-result${index === 2 ? " is-hidden" : ""}`}
                      key={result}
                    >
                      <span>{index === 2 ? "•••" : `0${index + 1}`}</span>
                      <div>
                        <strong>{result}</strong>
                        <small>
                          {index === 2
                            ? "Not in the results yet"
                            : "Found by a ready-to-act customer"}
                        </small>
                      </div>
                      {index < 2 && <ArrowUpRight aria-hidden="true" />}
                    </div>
                  ),
                )}
                <div className="dm-search-moment-foot">
                  <span /> Search visibility shapes who gets considered.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="dm-competition"
          id="dm-competition"
          aria-labelledby="dm-competition-title"
        >
          <div className="dm-container dm-competition-layout">
            <div className="dm-competition-copy" data-dm-reveal>
              <p className="dm-eyebrow">
                <span /> 02 / THE COMPETITION
              </p>
              <h2 id="dm-competition-title">
                The Business That Gets Found,
                <br />
                <em>Gets the Customer.</em>
              </h2>
              <p>
                Right now, other businesses offer the same services. Some invested in SEO earlier.
                Some run ads. Others have built stronger content.
              </p>
              <p>
                When someone searches, Google has to recommend someone. If it recommends your
                competitor, they get the enquiry. This happens every single day.
              </p>
              <p>
                SEO and digital marketing help decide who stays visible in search. You don’t need to
                be everywhere—you need to be visible where your customers are already looking.
              </p>
              <ul className="dm-competition-checklist">
                {[
                  "Appear when people search",
                  "Look credible at first glance",
                  "Make it easy to enquire",
                  "Compete for stronger search positions",
                ].map((item) => (
                  <li key={item}>
                    <span aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="dm-competitor-panel" data-dm-reveal>
              <div className="dm-competitor-panel-top">
                <span className="dm-live-dot" />
                <span>THE SEARCH MOMENT</span>
                <span>NOW</span>
              </div>
              <p>Someone needs your service.</p>
              <div className="dm-competitor-choice is-selected">
                <span>01</span>
                <div>
                  <strong>Visible competitor</strong>
                  <small>Seen · trusted · contacted</small>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <div className="dm-competitor-choice">
                <span>02</span>
                <div>
                  <strong>Your business</strong>
                  <small>Hard to find in the results</small>
                </div>
                <Search aria-hidden="true" />
              </div>
              <div className="dm-competitor-panel-foot">
                Visibility helps you enter the conversation.
              </div>
            </aside>
            <a className="dm-button dm-competition-cta" href="/contact#inquiry" data-dm-reveal>
              Get a Free SEO Audit <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="dm-section dm-benefits" aria-labelledby="dm-benefits-title">
          <div className="dm-container">
            <div className="dm-section-heading dm-heading-split" data-dm-reveal>
              <div>
                <p className="dm-eyebrow">
                  <span /> 03 / WHAT PROPER SEO &amp; MARKETING DOES
                </p>
                <h2 id="dm-benefits-title">
                  Visibility that works
                  <br />
                  <em>for your business.</em>
                </h2>
              </div>
              <p>
                Be present where people are looking, earn their confidence, and make the next step
                easy.
              </p>
            </div>
            <div className="dm-benefits-grid">
              {marketingBenefits.map(({ title, description, icon: Icon }, index) => (
                <article className="dm-benefit-card" key={title} data-dm-reveal>
                  <span className="dm-benefit-index">0{index + 1}</span>
                  <span className="dm-benefit-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <a className="dm-button dm-benefits-cta" href="/contact#inquiry" data-dm-reveal>
              Talk through your goals <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="dm-approach" aria-labelledby="dm-approach-title">
          <div className="dm-container">
            <div className="dm-approach-heading" data-dm-reveal>
              <p className="dm-eyebrow">
                <span /> 04 / OUR APPROACH
              </p>
              <h2 id="dm-approach-title">
                We don’t just “do SEO”.
                <br />
                <em>We build a connected plan.</em>
              </h2>
              <p>
                The right mix depends on your audience, market, and goals. We focus on the
                foundations and channels that make sense for your business.
              </p>
            </div>
            <div className="dm-approach-grid">
              {marketingApproach.map(([title, description, Icon], index) => (
                <article className="dm-approach-card" key={title} data-dm-reveal>
                  <span className="dm-approach-card-index">0{index + 1}</span>
                  <span className="dm-approach-card-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dm-proof" aria-labelledby="dm-proof-title">
          <div className="dm-container dm-proof-layout">
            <div className="dm-proof-heading" data-dm-reveal>
              <p className="dm-eyebrow">
                <span /> MEASURE WHAT MATTERS
              </p>
              <h2 id="dm-proof-title">
                Progress you can
                <br />
                actually understand.
              </h2>
              <p>
                We track the signals behind your visibility and enquiries—without promising a
                specific ranking or result.
              </p>
            </div>
            <div className="dm-signals" data-dm-reveal>
              {performanceSignals.map(([title, detail], index) => (
                <div className="dm-signal-row" key={title}>
                  <span className="dm-signal-index">0{index + 1}</span>
                  <span className="dm-signal-copy">
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </span>
                  <TrendingUp aria-hidden="true" />
                </div>
              ))}
              <p className="dm-proof-note">
                Reporting is based on your starting point, goals, and available measurement tools.
              </p>
            </div>
          </div>
        </section>

        <section
          className="dm-section dm-services"
          id="dm-services"
          aria-labelledby="dm-services-title"
        >
          <div className="dm-container">
            <div className="dm-section-heading dm-services-heading" data-dm-reveal>
              <div>
                <p className="dm-eyebrow">
                  <span /> 05 / MARKETING SERVICES
                </p>
                <h2 id="dm-services-title">
                  Marketing that drives
                  <br />
                  <em>real enquiries and sales.</em>
                </h2>
              </div>
              <p>
                We combine proven core services with advanced channels that work today. Start with
                what your business needs, then scale with a plan tied to measurable outcomes.
              </p>
            </div>
            <div className="dm-services-grid">
              {marketingServices.map(({ title, description, icon: Icon, services }, index) => (
                <article className="dm-service-card" key={title} data-dm-reveal>
                  <div className="dm-service-card-top">
                    <span className="dm-service-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className="dm-service-list">
                    {services.map(([service, detail]) => (
                      <li key={service}>
                        <Check aria-hidden="true" />
                        <span>
                          <strong>{service}</strong>
                          <small>{detail}</small>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact#inquiry">
                    Plan this service mix <ArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dm-cta" id="dm-audit" aria-labelledby="dm-cta-title">
          <div className="dm-container dm-cta-inner" data-dm-reveal>
            <div>
              <p className="dm-eyebrow">
                <span /> YOUR NEXT STEP
              </p>
              <h2 id="dm-cta-title">
                Stop Losing Customers
                <br />
                <em>to Businesses That Rank Higher.</em>
              </h2>
              <p>
                If people are searching for what you offer and finding someone else, you could be
                missing opportunities. Let’s review your visibility and identify a practical next
                step.
              </p>
            </div>
            <div className="dm-cta-actions">
              <a className="dm-button" href="/contact#inquiry">
                Get Your Free SEO Audit <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="dm-cta-secondary" href="/contact">
                Talk to Our Team <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
