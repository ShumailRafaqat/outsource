import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Eye,
  FileCheck2,
  Home,
  MapPin,
  Megaphone,
  MousePointerClick,
  Search,
  ShoppingBag,
  Stethoscope,
  Target,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./paid-ads-lead-generation.css";

const realityChecks = [
  {
    title: "Clicks arrive, but visitors leave",
    problem: "The page may not match what the ad promised.",
    action: "Review the message, landing page and next step together.",
    icon: MousePointerClick,
  },
  {
    title: "Enquiries do not fit the offer",
    problem: "The audience or qualification may be too broad.",
    action: "Revisit targeting, ad language and useful enquiry questions.",
    icon: Target,
  },
  {
    title: "A lead waits for a response",
    problem: "An enquiry needs a clear owner and agreed next step.",
    action: "Define how leads are routed and who follows up.",
    icon: Clock3,
  },
  {
    title: "Spend is hard to understand",
    problem: "Incomplete tracking can make results difficult to interpret.",
    action: "Agree which events to measure and what the data cannot show.",
    icon: BarChart3,
  },
];

const journeySteps = [
  {
    label: "Ad",
    title: "Reach an intended audience",
    description:
      "A relevant message introduces an offer to people or businesses the campaign is designed to reach.",
    icon: Megaphone,
  },
  {
    label: "Visit",
    title: "Keep the promise on the page",
    description:
      "The destination should make the offer, its fit and the next step easy to understand.",
    icon: Eye,
  },
  {
    label: "Action",
    title: "Make the next step clear",
    description:
      "A form, call or booking option gives an interested visitor a practical way to respond.",
    icon: MousePointerClick,
  },
  {
    label: "Lead",
    title: "Record and route the enquiry",
    description:
      "Capture the information the team needs and send it to the agreed place or person.",
    icon: ClipboardCheck,
  },
  {
    label: "Follow-up",
    title: "Continue the conversation",
    description: "An assigned team member reviews the request, responds and tracks its status.",
    icon: UserRoundCheck,
  },
];

const capabilities = [
  {
    title: "Google Ads",
    summary: "Plan search campaigns around relevant intent.",
    covers:
      "Campaign structure, keyword or audience planning, ad copy and optimization where contracted.",
    deliverable: "A proposed campaign structure with audience, message and destination notes.",
    boundary:
      "Platform access, approvals, budget and the contracted management scope are agreed first.",
  },
  {
    title: "Meta Ads",
    summary: "Connect audience and creative across eligible placements.",
    covers:
      "Campaign planning and creative testing for eligible Facebook and Instagram placements.",
    deliverable: "A campaign and creative test plan aligned to the agreed objective.",
    boundary:
      "Available placements and targeting depend on platform rules, account access and scope.",
  },
  {
    title: "Audience & Offer Research",
    summary: "Clarify who the campaign is for and what it should say.",
    covers: "Audience needs, locations, intent, offer clarity and business fit.",
    deliverable: "A concise audience and message brief to guide campaign decisions.",
    boundary: "Research supports planning; it does not guarantee demand or campaign outcomes.",
  },
  {
    title: "Landing Page Review",
    summary: "Align the destination with the ad and intended action.",
    covers: "Message match, page clarity, forms, calls to action and mobile usability.",
    deliverable: "A prioritized review of friction points and practical page improvements.",
    boundary: "Implementation is included only where it is part of the agreed scope.",
  },
  {
    title: "Conversion Tracking",
    summary: "Measure agreed actions with clear limitations.",
    covers: "Appropriate conversion events, testing and interpretation of available data.",
    deliverable: "An event checklist and documented measurement assumptions.",
    boundary:
      "Attribution can be incomplete; consent, platform settings and site access affect measurement.",
  },
  {
    title: "Lead Capture & Routing",
    summary: "Connect an enquiry to the right next step.",
    covers: "Form integrations, CRM handoff and agreed routing connections.",
    deliverable: "A documented lead path showing where enquiries go and who owns follow-up.",
    boundary:
      "CRM setup or follow-up operations are provided only when included in the agreed scope.",
  },
];

const businessStories = [
  {
    name: "Real estate",
    goal: "Promote a property or consultation in a relevant market.",
    path: "A visitor sees matching listing details, understands the next step and requests a viewing.",
    action: "Keep the listing, location and enquiry route connected.",
    image: "/1.jpg",
    imageAlt: "Illustrative real estate advertising scenario",
    icon: Home,
  },
  {
    name: "Healthcare",
    goal: "Help people find accurate information about an eligible service.",
    path: "A visitor reviews service details and follows a clear appointment path.",
    action: "Use privacy-aware measurement and follow platform and applicable rules.",
    image: "/2.jpg",
    imageAlt: "Illustrative healthcare appointment advertising scenario",
    icon: Stethoscope,
  },
  {
    name: "E-commerce",
    goal: "Introduce relevant products to potential shoppers.",
    path: "A visitor lands on a clear product page and can complete the checkout journey.",
    action: "Connect the product message, page clarity and agreed purchase measurement.",
    image: "/3.jpg",
    imageAlt: "Illustrative e-commerce advertising scenario",
    icon: ShoppingBag,
  },
];

const workspaceStages = [
  ["Plan", "Set the objective, audience, offer and measurement assumptions."],
  ["Launch", "Confirm access, assets, tracking and approvals before publishing."],
  ["Monitor", "Review available campaign signals and lead information."],
  ["Test", "Compare agreed variations and record what the evidence supports."],
  ["Report", "Summarize activity, limitations and possible next decisions."],
];

const handoffStages = [
  {
    label: "Enquiry arrives",
    description: "A form, call or booking creates a new request.",
  },
  {
    label: "Route to an owner",
    description: "The agreed process sends it to a responsible person or system.",
  },
  {
    label: "Notify the team",
    description: "The owner receives the details needed to review the request.",
  },
  {
    label: "Follow up",
    description: "A person responds through the appropriate channel and updates status.",
  },
  {
    label: "Review outcome",
    description: "The team can assess lead fit beyond the advertising platform metrics.",
  },
];

const gettingStarted = [
  ["Discovery", "Business, market, target audience and a useful definition of success."],
  ["Scope", "Platform, budget, creative, landing page and responsibilities."],
  ["Setup", "Access, assets, tracking and approval before launch."],
  ["Review", "Reporting and adjustments under the agreed engagement."],
];

const faqs = [
  [
    "Which platforms should my business use?",
    "It depends on your audience, offer and buying intent. We can discuss where your customers are likely to look and which options fit the campaign goal.",
  ],
  [
    "How much budget do I need?",
    "There is no universal minimum. The right budget depends on your market, objective, expected costs and the scope you agree before launch. Advertising spend is separate from management fees where applicable.",
  ],
  [
    "How long until I see results?",
    "Timing varies by market, offer, setup and available data. Campaign setup and learning take time, and early activity should not be treated as a guarantee of future performance.",
  ],
  [
    "Can you use my existing landing page?",
    "Yes, it can be reviewed first for message match, usability and a clear next step. Any changes or implementation are subject to the agreed scope.",
  ],
  [
    "How are enquiries measured?",
    "Measurement uses agreed events and available platform or website data. Where possible, CRM review can add context, but attribution may be incomplete.",
  ],
  [
    "Who follows up with leads?",
    "Lead ownership and response responsibilities are agreed in advance. Campaign management does not automatically include a call centre, SDR or follow-up team.",
  ],
  [
    "Can I keep my existing ad accounts?",
    "Account access and ownership are confirmed during planning. Your existing account can be part of the discussion, subject to access and platform settings.",
  ],
  [
    "What is included in reporting?",
    "The metrics and reporting cadence are defined in the agreement. Reports should explain the agreed signals, important limitations and any recommended next decisions.",
  ],
];

export function PaidAdsLeadGenerationPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeHandoff, setActiveHandoff] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const revealNodes = pageRef.current?.querySelectorAll<HTMLElement>("[data-pa-reveal]");
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    if (!revealNodes?.length || reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("pa-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -28px 0px" },
    );

    revealNodes.forEach((node) => {
      node.classList.add("pa-reveal-ready");
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pa-page" ref={pageRef}>
        <section className="pa-hero" aria-labelledby="pa-hero-title">
          <div className="pa-container pa-hero-layout">
            <div className="pa-hero-copy">
              <p className="pa-eyebrow" data-pa-hero-entry>
                <span /> PAID ADS &amp; LEAD GENERATION
              </p>
              <h1 id="pa-hero-title" data-pa-hero-entry>
                More Than Clicks.
                <br />
                <em>More Opportunities to Grow.</em>
              </h1>
              <p className="pa-hero-description" data-pa-hero-entry>
                Reach the people most likely to need your services, give them a clear next step, and
                connect paid campaigns with meaningful business enquiries.
              </p>
              <div className="pa-hero-actions" data-pa-hero-entry>
                <a className="pa-button" href="/contact#inquiry">
                  Plan My Campaign <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="pa-button pa-button-outline" href="#pa-journey">
                  See How It Works <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <ul className="pa-proof-labels" data-pa-hero-entry>
                <li>Audience-focused</li>
                <li>Conversion-aware</li>
                <li>Measurable</li>
              </ul>
            </div>
            <div
              className="pa-hero-visual"
              aria-label="Illustrative customer journey from ad to response"
            >
              <div className="pa-hero-orbit pa-hero-orbit-one" aria-hidden="true" />
              <div className="pa-hero-orbit pa-hero-orbit-two" aria-hidden="true" />
              <p className="pa-visual-label">A connected lead journey</p>
              <div className="pa-flow">
                {journeySteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      className="pa-flow-step"
                      key={step.label}
                      style={{ "--flow-index": index } as React.CSSProperties}
                    >
                      <span className="pa-flow-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span>{step.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="pa-flow-caption">
                <span className="pa-flow-pulse" aria-hidden="true" />
                From first impression to human response
              </div>
            </div>
          </div>
          <a className="pa-scroll-cue" href="#pa-reality">
            Scroll to explore <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section
          className="pa-reality pa-section"
          id="pa-reality"
          aria-labelledby="pa-reality-title"
        >
          <div className="pa-container">
            <div className="pa-section-heading" data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> AFTER THE CLICK
              </p>
              <h2 id="pa-reality-title">
                You’re Paying for Attention. <em>What Happens Next?</em>
              </h2>
              <p>
                Traffic is only the beginning. The real question is whether the right people arrive,
                understand your offer, and know how to contact you.
              </p>
            </div>
            <div className="pa-reality-list">
              {realityChecks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article className="pa-reality-item" data-pa-reveal key={item.title}>
                    <span className="pa-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="pa-icon-box">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <p className="pa-card-kicker">THE CHALLENGE</p>
                      <h3>{item.title}</h3>
                      <p>{item.problem}</p>
                    </div>
                    <div className="pa-reality-action">
                      <span>CONSIDER</span>
                      <p>{item.action}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="pa-journey pa-section"
          id="pa-journey"
          aria-labelledby="pa-journey-title"
        >
          <div className="pa-container">
            <div className="pa-section-heading pa-section-heading-light" data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> ILLUSTRATIVE CUSTOMER JOURNEY
              </p>
              <h2 id="pa-journey-title">
                From the First Impression <em>to the First Conversation.</em>
              </h2>
              <p>
                A useful paid campaign connects the advertisement, destination, enquiry experience
                and the people responsible for responding.
              </p>
            </div>
            <div className="pa-journey-map" role="tablist" aria-label="Customer journey stages">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const selected = activeJourney === index;
                return (
                  <button
                    className={`pa-journey-step${selected ? " is-active" : ""}`}
                    type="button"
                    role="tab"
                    id={`pa-journey-tab-${index}`}
                    aria-selected={selected}
                    aria-controls="pa-journey-detail"
                    key={step.label}
                    onClick={() => setActiveJourney(index)}
                  >
                    <span className="pa-journey-number">{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                    <strong>{step.label}</strong>
                  </button>
                );
              })}
            </div>
            <div
              className="pa-journey-detail"
              id="pa-journey-detail"
              role="tabpanel"
              aria-labelledby={`pa-journey-tab-${activeJourney}`}
              data-pa-reveal
            >
              <span className="pa-detail-icon">
                {(() => {
                  const Icon = journeySteps[activeJourney].icon;
                  return <Icon aria-hidden="true" />;
                })()}
              </span>
              <div>
                <p className="pa-card-kicker">STEP {String(activeJourney + 1).padStart(2, "0")}</p>
                <h3>{journeySteps[activeJourney].title}</h3>
                <p>{journeySteps[activeJourney].description}</p>
              </div>
              <span className="pa-detail-counter">
                {activeJourney + 1} / {journeySteps.length}
              </span>
            </div>
          </div>
        </section>

        <section className="pa-capabilities pa-section" aria-labelledby="pa-capabilities-title">
          <div className="pa-container">
            <div className="pa-section-heading" data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> CONNECTED CAMPAIGN SUPPORT
              </p>
              <h2 id="pa-capabilities-title">
                Every Campaign Has Moving Parts. <em>They Should Work Together.</em>
              </h2>
              <p>
                Campaign planning, creative, landing pages, tracking and follow-up need to support
                the same business objective.
              </p>
            </div>
            <div className="pa-capability-list">
              {capabilities.map((item, index) => (
                <details className="pa-capability" data-pa-reveal key={item.title}>
                  <summary>
                    <span className="pa-capability-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pa-capability-title">
                      <strong>{item.title}</strong>
                      <small>{item.summary}</small>
                    </span>
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <div className="pa-capability-content">
                    <div>
                      <span>COVERS</span>
                      <p>{item.covers}</p>
                    </div>
                    <div>
                      <span>SAMPLE DELIVERABLE</span>
                      <p>{item.deliverable}</p>
                    </div>
                    <div>
                      <span>AGREED SCOPE</span>
                      <p>{item.boundary}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pa-stories pa-section" aria-labelledby="pa-stories-title">
          <div className="pa-container">
            <div className="pa-section-heading" data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> ILLUSTRATIVE SCENARIOS
              </p>
              <h2 id="pa-stories-title">
                Different Businesses. <em>Different Reasons to Advertise.</em>
              </h2>
              <p>
                A useful campaign starts with the business outcome—not the advertising platform.
              </p>
            </div>
            <div className="pa-story-list">
              {businessStories.map((story, index) => {
                const Icon = story.icon;
                return (
                  <article
                    className={`pa-story pa-story-${index + 1}`}
                    data-pa-reveal
                    key={story.name}
                  >
                    <div className="pa-story-image">
                      <img
                        src={story.image}
                        alt={story.imageAlt}
                        width="900"
                        height="650"
                        loading="lazy"
                        decoding="async"
                      />
                      <span>ILLUSTRATIVE SCENARIO</span>
                    </div>
                    <div className="pa-story-copy">
                      <span className="pa-story-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <p className="pa-card-kicker">BUSINESS STORY 0{index + 1}</p>
                      <h3>{story.name}</h3>
                      <dl>
                        <div>
                          <dt>THE GOAL</dt>
                          <dd>{story.goal}</dd>
                        </div>
                        <div>
                          <dt>THE VISITOR PATH</dt>
                          <dd>{story.path}</dd>
                        </div>
                        <div>
                          <dt>THE NEXT ACTION</dt>
                          <dd>{story.action}</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pa-workspace pa-section" aria-labelledby="pa-workspace-title">
          <div className="pa-container pa-workspace-layout">
            <div className="pa-workspace-copy" data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> AN ILLUSTRATIVE WORKSPACE
              </p>
              <h2 id="pa-workspace-title">
                Better Decisions Start With <em>Better Visibility.</em>
              </h2>
              <p>
                See which signals matter, understand what needs attention, and make informed changes
                as campaigns run.
              </p>
              <p className="pa-workspace-note">
                This fictional example shows possible measures only. It is not live account data or
                client results. Attribution can be incomplete, and lead quality needs review beyond
                ad-platform metrics.
              </p>
              <ol className="pa-workspace-stages">
                {workspaceStages.map(([label, description], index) => (
                  <li key={label} data-pa-reveal>
                    <span>{index + 1}</span>
                    <div>
                      <strong>{label}</strong>
                      <small>{description}</small>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div
              className="pa-dashboard"
              data-pa-reveal
              aria-label="Illustrative campaign dashboard"
            >
              <div className="pa-dashboard-top">
                <div>
                  <span className="pa-dashboard-dot" />
                  <strong>Campaign overview</strong>
                </div>
                <span>ILLUSTRATIVE EXAMPLE — NOT CLIENT RESULTS</span>
              </div>
              <div className="pa-metric-grid">
                {[
                  ["Spend", "$2,480", CircleDollarSign],
                  ["Enquiries", "42", ClipboardCheck],
                  ["Cost per enquiry", "$59", Target],
                  ["Conversion rate", "3.8%", BarChart3],
                ].map(([label, value, Icon]) => {
                  const MetricIcon = Icon as typeof BarChart3;
                  return (
                    <div className="pa-metric" key={label as string}>
                      <span>{label as string}</span>
                      <strong>{value as string}</strong>
                      <MetricIcon aria-hidden="true" />
                    </div>
                  );
                })}
              </div>
              <div className="pa-dashboard-chart">
                <div>
                  <strong>Activity over time</strong>
                  <span>Illustrative only</span>
                </div>
                <div
                  className="pa-chart-area"
                  aria-label="Illustrative trend line with no real campaign data"
                >
                  <span className="pa-chart-grid pa-chart-grid-one" />
                  <span className="pa-chart-grid pa-chart-grid-two" />
                  <span className="pa-chart-grid pa-chart-grid-three" />
                  <svg viewBox="0 0 560 150" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 125 C55 111 67 115 112 95 S183 108 225 79 S289 91 337 55 S398 80 440 42 S502 52 560 18" />
                    <path
                      className="pa-chart-fill"
                      d="M0 125 C55 111 67 115 112 95 S183 108 225 79 S289 91 337 55 S398 80 440 42 S502 52 560 18 V150 H0 Z"
                    />
                  </svg>
                </div>
                <div className="pa-chart-legend">
                  <span>Campaign activity</span>
                  <span>Mon — Sun</span>
                </div>
              </div>
              <div className="pa-dashboard-leads">
                <strong>Lead status</strong>
                <span>
                  <i className="pa-status-dot pa-status-new" /> New <b>12</b>
                </span>
                <span>
                  <i className="pa-status-dot pa-status-review" /> In review <b>18</b>
                </span>
                <span>
                  <i className="pa-status-dot pa-status-contacted" /> Contacted <b>12</b>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pa-handoff pa-section" aria-labelledby="pa-handoff-title">
          <div className="pa-container">
            <div className="pa-section-heading" data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> PEOPLE AND PROCESS
              </p>
              <h2 id="pa-handoff-title">
                A Lead Is Only <em>the Beginning.</em>
              </h2>
              <p>
                The next step matters: someone needs to receive the enquiry, understand the request
                and respond through the right channel.
              </p>
            </div>
            <div className="pa-handoff-panel" data-pa-reveal>
              <div className="pa-handoff-steps" role="tablist" aria-label="Lead handoff steps">
                {handoffStages.map((step, index) => (
                  <button
                    type="button"
                    role="tab"
                    id={`pa-handoff-tab-${index}`}
                    aria-selected={activeHandoff === index}
                    aria-controls="pa-handoff-detail"
                    className={activeHandoff === index ? "is-active" : ""}
                    key={step.label}
                    onClick={() => setActiveHandoff(index)}
                  >
                    <span>
                      {index === 0 ? (
                        <FileCheck2 aria-hidden="true" />
                      ) : (
                        <Workflow aria-hidden="true" />
                      )}
                    </span>
                    <strong>{step.label}</strong>
                    {index < handoffStages.length - 1 && (
                      <ArrowRight aria-hidden="true" className="pa-handoff-arrow" />
                    )}
                  </button>
                ))}
              </div>
              <div
                id="pa-handoff-detail"
                role="tabpanel"
                aria-labelledby={`pa-handoff-tab-${activeHandoff}`}
                className="pa-handoff-detail"
              >
                <div>
                  <span>STEP {String(activeHandoff + 1).padStart(2, "0")}</span>
                  <h3>{handoffStages[activeHandoff].label}</h3>
                </div>
                <p>{handoffStages[activeHandoff].description}</p>
                <small>
                  Optional CRM connections or lead routing are discussed within the agreed scope.
                  See how this may connect with{" "}
                  <a href="/expertise/sales-development">Sales &amp; Business Development</a> and{" "}
                  <a href="/expertise/customer-service">Customer Support</a>.
                </small>
              </div>
            </div>
          </div>
        </section>

        <section className="pa-start pa-section" aria-labelledby="pa-start-title">
          <div className="pa-container pa-start-layout">
            <div className="pa-start-heading" data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> A CLEAR NEXT STEP
              </p>
              <h2 id="pa-start-title">
                Start With the Business Goal, <em>Not the Ad Platform.</em>
              </h2>
              <p>
                Tell us who you want to reach, what action matters, and what systems your team
                already uses.
              </p>
            </div>
            <ol className="pa-start-steps">
              {gettingStarted.map(([label, description], index) => (
                <li data-pa-reveal key={label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{label}</h3>
                    <p>{description}</p>
                  </div>
                  {index < gettingStarted.length - 1 && (
                    <span className="pa-start-connector" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div className="pa-container pa-related-links" data-pa-reveal>
            <span>Explore connected support</span>
            <a href="/solutions/digital-marketing-seo">
              Digital Marketing &amp; SEO <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="/expertise/sales-development">
              Sales &amp; Growth <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="/expertise/customer-service">
              Customer Support <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="pa-faq pa-section" aria-labelledby="pa-faq-title">
          <div className="pa-container pa-faq-layout">
            <div className="pa-faq-heading" data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> GOOD QUESTIONS FIRST
              </p>
              <h2 id="pa-faq-title">
                Before You Invest, <em>Get Clear Answers.</em>
              </h2>
              <p>Understand the practical details before committing to a campaign.</p>
              <a href="/contact#inquiry">
                Discuss your campaign <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="pa-faq-list">
              {faqs.map(([question, answer], index) => {
                const expanded = activeFaq === index;
                return (
                  <div
                    className={`pa-faq-item${expanded ? " is-open" : ""}`}
                    key={question}
                    data-pa-reveal
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={`pa-faq-answer-${index}`}
                        onClick={() => setActiveFaq(expanded ? null : index)}
                      >
                        <span>{question}</span>
                        <ChevronDown aria-hidden="true" />
                      </button>
                    </h3>
                    <div id={`pa-faq-answer-${index}`} hidden={!expanded}>
                      <p>{answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pa-final-cta" aria-labelledby="pa-final-cta-title">
          <div className="pa-container pa-final-layout">
            <div data-pa-reveal>
              <p className="pa-eyebrow">
                <span /> MAKE THE NEXT MOVE A CLEAR ONE
              </p>
              <h2 id="pa-final-cta-title">
                Let’s Build a Campaign <em>Around Your Business Goals.</em>
              </h2>
              <p>
                Tell us what you offer, who you want to reach, and where you need support. We’ll
                help you explore an approach that fits your business.
              </p>
              <div className="pa-hero-actions">
                <a className="pa-button" href="/contact#inquiry">
                  Discuss My Campaign <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="pa-button pa-button-outline" href="/contact">
                  Talk to Our Team <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="pa-final-visual" aria-hidden="true">
              <div className="pa-final-node pa-final-node-ad">
                <Megaphone />
                <span>Campaign</span>
              </div>
              <div className="pa-final-node pa-final-node-page">
                <Search />
                <span>Visitor</span>
              </div>
              <div className="pa-final-node pa-final-node-lead">
                <Check />
                <span>Next step</span>
              </div>
              <span className="pa-final-path pa-final-path-one" />
              <span className="pa-final-path pa-final-path-two" />
            </div>
          </div>
        </section>
        <div className="pa-bottom-note">
          <span>
            <MapPin aria-hidden="true" /> Built around your market and goals
          </span>
          <a href="#pa-hero-title">
            Back to top <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </main>
    </div>
  );
}
