import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileSearch,
  HeartPulse,
  Home,
  MessagesSquare,
  MousePointer2,
  ShoppingBag,
  Target,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { ExpertiseScrollMotion } from "@/components/expertise/expertise-scroll-motion";
import { SiteHeader } from "@/components/site-header";

import "./paid-ads-lead-generation.css";

type CampaignService = {
  title: string;
  description: string;
  example: string;
  icon: LucideIcon;
};

const campaignProblems = [
  {
    number: "01",
    title: "Clicks without enquiries",
    description:
      "People arrive, look around, and leave. The ad and landing page may not be giving them a clear next step.",
    icon: MousePointer2,
    metric: "Plenty of visits",
    result: "Not enough conversations",
  },
  {
    number: "02",
    title: "Enquiries that do not fit",
    description:
      "A high enquiry count is not much help if the requests are outside your service, location, or budget.",
    icon: FileSearch,
    metric: "More form fills",
    result: "Mixed-fit requests",
  },
  {
    number: "03",
    title: "Follow-up that comes too late",
    description:
      "When a new lead sits in an inbox, the customer may move on before your team has a chance to respond.",
    icon: MessagesSquare,
    metric: "New lead received",
    result: "Who is following up?",
  },
  {
    number: "04",
    title: "Spend without a clear view",
    description:
      "Without reliable tracking, it is difficult to see which campaigns create useful actions and which need attention.",
    icon: BarChart3,
    metric: "Budget in motion",
    result: "Performance unclear",
  },
];

const journeySteps = [
  ["01", "Ad", "A relevant message reaches the right audience."],
  ["02", "Click", "An interested person chooses to learn more."],
  ["03", "Page", "A focused page answers their next questions."],
  ["04", "Enquiry", "A clear action makes it easy to get in touch."],
  ["05", "Follow-up", "The right person receives the details and responds."],
];

const campaignServices: CampaignService[] = [
  {
    title: "Google Ads Management",
    description:
      "Build and manage search campaigns around the services and locations your business wants to reach.",
    example:
      "A home-services company can focus its search ads on the areas it serves and send each service search to a relevant page.",
    icon: Target,
  },
  {
    title: "Meta Ads Management",
    description:
      "Plan Facebook and Instagram campaigns that introduce your offer, build interest, and encourage a useful next step.",
    example:
      "A local clinic can promote a specific service with helpful creative and a clear appointment enquiry path.",
    icon: MessagesSquare,
  },
  {
    title: "Audience Research & Targeting",
    description:
      "Understand who you want to reach, what they are looking for, and where campaigns should be focused.",
    example:
      "A property team can focus campaigns around selected neighbourhoods and the type of buyer enquiry it can serve.",
    icon: UsersRound,
  },
  {
    title: "Landing Page Optimization",
    description:
      "Make sure the page after the click is relevant, easy to understand, and designed around one clear action.",
    example:
      "A campaign for a product range can link to that collection instead of making visitors search the full store.",
    icon: TrendingUp,
  },
  {
    title: "Conversion Tracking & Analytics",
    description:
      "Set up practical measurement for meaningful actions, then use the results to make informed campaign decisions.",
    example:
      "Track completed enquiry forms separately from page views so reporting reflects actions that matter to the business.",
    icon: BarChart3,
  },
  {
    title: "Lead Capture & Follow-up Integration",
    description:
      "Connect lead forms with the tools and people responsible for qualifying and responding to new enquiries.",
    example:
      "Send a new enquiry to the right CRM queue and notify the sales team with the information they need to respond.",
    icon: ClipboardCheck,
  },
];

const businessScenarios = [
  {
    title: "Real Estate",
    description:
      "A property business wants more relevant buyer enquiries. Location-based campaigns can lead to listing pages with a clear enquiry option.",
    image: "/realstate.png",
    imageAlt: "City neighbourhood and local property market",
    icon: Home,
    tag: "Local discovery",
  },
  {
    title: "Healthcare",
    description:
      "A clinic wants more appointment enquiries. Service-specific campaigns can guide visitors to clear booking information and appropriate tracking.",
    image: "/healthcare.png",
    imageAlt: "Healthcare website mockup featuring a doctor and appointment information",
    icon: HeartPulse,
    tag: "Appointment enquiries",
  },
  {
    title: "E-commerce",
    description:
      "An online store wants to promote its products. Product-focused ads can lead to relevant pages, with purchase actions measured along the way.",
    image: "/E-commerce.png",
    imageAlt: "Online food ordering storefront shown on a laptop and phone",
    icon: ShoppingBag,
    tag: "Product promotion",
  },
];

const campaignPhases = [
  {
    title: "Plan around the goal",
    description:
      "Agree what the campaign should support, who it needs to reach, and which actions are worth measuring.",
  },
  {
    title: "Test audience and creative",
    description:
      "Compare relevant audiences, messages, and creative variations to learn what deserves further attention.",
  },
  {
    title: "Track meaningful actions",
    description:
      "Check that important enquiries or purchases are measured accurately, not just clicks and page views.",
  },
  {
    title: "Improve and report",
    description:
      "Review spend, lead quality, and conversion trends together, then explain what is changing and why.",
  },
];

const leadFlow = [
  ["Capture", "Collect the enquiry with the details your team needs."],
  ["Route", "Send it to the right CRM, inbox, or team member."],
  ["Qualify", "Review fit, urgency, and next steps with clear criteria."],
  ["Follow up", "Give each new lead a timely, human response."],
];

const dashboardSteps: { label: string; icon: LucideIcon }[] = [
  { label: "Ad", icon: Target },
  { label: "Visit", icon: MousePointer2 },
  { label: "Enquiry", icon: MessagesSquare },
  { label: "Qualified", icon: Check },
];

const frequentlyAskedQuestions = [
  {
    question: "Which advertising platforms can you manage?",
    answer:
      "Campaigns can include Google Ads and Meta Ads (Facebook and Instagram). The right platform depends on your audience, offer, and business goals.",
  },
  {
    question: "How much should we budget for advertising?",
    answer:
      "There is no one-size-fits-all budget. We can discuss your market, goals, expected testing needs, and available spend before recommending a practical starting point. Media spend and management fees should be clear separately.",
  },
  {
    question: "Can you set up a new campaign from scratch?",
    answer:
      "Yes. Support can cover planning, account and campaign structure, audience research, creative coordination, landing pages, and conversion tracking, depending on what you need.",
  },
  {
    question: "What will campaign reporting include?",
    answer:
      "Reporting can cover spend, reach or clicks, enquiries or purchases, cost per action, and conversion rate where tracking is available. We also explain context and next steps rather than relying on metrics alone.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timing varies by platform, market, budget, offer, and setup. Early campaign data can guide testing, but meaningful conclusions usually require enough relevant activity and reliable measurement.",
  },
  {
    question: "How do you help improve lead quality?",
    answer:
      "We can review targeting, ad messaging, landing-page clarity, form questions, and follow-up outcomes together. Lead quality should be assessed with your team using agreed criteria, not assumed from volume alone.",
  },
  {
    question: "Do we need a dedicated landing page?",
    answer:
      "Not always, but a focused page can make the ad-to-enquiry journey clearer. We assess whether an existing page answers the campaign's questions and makes its next step easy to find.",
  },
  {
    question: "Can you help with lead follow-up after a form is submitted?",
    answer:
      "Yes. Lead capture can be connected to CRM routing, notifications, qualification steps, and follow-up processes, with your team retaining control of customer communication.",
  },
];

export function PaidAdsLeadGenerationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <ExpertiseScrollMotion pageKey="paid-ads-lead-generation">
        <main className="paid-ads-page">
          <section className="pa-hero" aria-labelledby="pa-hero-title" data-custom-hero-intro>
            <div className="pa-hero-orbit pa-hero-orbit-one" aria-hidden="true" />
            <div className="pa-hero-orbit pa-hero-orbit-two" aria-hidden="true" />
            <div className="pa-container pa-hero-layout">
              <div className="pa-hero-copy">
                <p className="pa-eyebrow">
                  <span /> PAID ADS &amp; LEAD GENERATION
                </p>
                <h1 id="pa-hero-title" data-pa-hero-entry="heading">
                  More Than Clicks.
                  <br />
                  <em>More Opportunities to Grow.</em>
                </h1>
                <p className="pa-hero-description" data-pa-hero-entry="description">
                  Reach the right audience, turn interest into meaningful enquiries, and build paid
                  advertising campaigns around your business goals.
                </p>
                <div className="pa-hero-actions" data-pa-hero-entry="actions">
                  <a className="pa-button" href="/contact?service=paid-ads#inquiry">
                    Plan My Campaign <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a className="pa-button pa-button-outline" href="#pa-customer-journey">
                    Explore How It Works <ArrowDown aria-hidden="true" />
                  </a>
                </div>
                <div className="pa-hero-proof" data-pa-hero-entry="proof">
                  <span className="pa-proof-mark">
                    <Check aria-hidden="true" />
                  </span>
                  <span>Strategy, tracking, and follow-up—connected around your goals.</span>
                </div>
                <a
                  className="pa-insight-link"
                  href="/resources/insights/plan-paid-advertising-around-business-goals"
                >
                  Read: plan campaigns around business goals <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="pa-dashboard" aria-label="Illustrative campaign journey dashboard">
                <div className="pa-dashboard-header">
                  <div>
                    <span className="pa-dashboard-kicker">CAMPAIGN SNAPSHOT</span>
                    <strong>Opportunity flow</strong>
                  </div>
                  <span className="pa-live-pill">
                    <span /> Example
                  </span>
                </div>
                <div className="pa-dashboard-metrics">
                  <div>
                    <span>Ad spend</span>
                    <strong>$2,484</strong>
                    <small>Illustrative</small>
                  </div>
                  <div>
                    <span>Enquiries</span>
                    <strong>138</strong>
                    <small>Illustrative</small>
                  </div>
                  <div>
                    <span>Cost / enquiry</span>
                    <strong>$18</strong>
                    <small>Illustrative</small>
                  </div>
                </div>
                <div className="pa-dashboard-chart" aria-hidden="true">
                  <div className="pa-chart-labels">
                    <span>Campaign activity</span>
                    <span>Example data</span>
                  </div>
                  <div className="pa-chart-bars">
                    {[34, 48, 40, 63, 56, 76, 64, 88, 72, 96, 80, 100].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="pa-chart-axis">
                    <span>WEEK 01</span>
                    <span>WEEK 02</span>
                    <span>WEEK 03</span>
                    <span>WEEK 04</span>
                  </div>
                </div>
                <div className="pa-dashboard-flow">
                  {dashboardSteps.map(({ label, icon: StepIcon }, index) => (
                    <div className="pa-dashboard-flow-step" key={label}>
                      <span>
                        <StepIcon aria-hidden="true" />
                      </span>
                      <small>{label}</small>
                      {index < dashboardSteps.length - 1 && <i aria-hidden="true" />}
                    </div>
                  ))}
                </div>
                <p className="pa-dashboard-note">
                  Illustrative campaign view. Actual results vary by business and campaign.
                </p>
              </div>
            </div>
            <a className="pa-scroll-cue" href="#pa-reality">
              Scroll to explore <ArrowDown aria-hidden="true" />
            </a>
          </section>

          <section
            className="pa-section pa-reality"
            id="pa-reality"
            aria-labelledby="pa-reality-title"
          >
            <div className="pa-container">
              <div className="pa-section-heading pa-heading-split">
                <div>
                  <p className="pa-eyebrow">
                    <span /> 01 / THE REALITY OF PAID ADVERTISING
                  </p>
                  <h2 id="pa-reality-title">
                    You're Paying for Attention.
                    <br />
                    <em>But What Happens Next?</em>
                  </h2>
                </div>
                <p>
                  A campaign is only one part of the journey. The page, enquiry, response, and
                  measurement all affect what that attention can become.
                </p>
              </div>
              <div className="pa-problem-grid">
                {campaignProblems.map((problem) => {
                  const ProblemIcon = problem.icon;
                  return (
                    <article className="pa-problem-card" key={problem.number}>
                      <div className="pa-problem-mark">
                        <span>{problem.number}</span>
                        <ProblemIcon aria-hidden="true" />
                      </div>
                      <h3>{problem.title}</h3>
                      <p>{problem.description}</p>
                      <div className="pa-problem-contrast">
                        <span>{problem.metric}</span>
                        <ArrowRight aria-hidden="true" />
                        <strong>{problem.result}</strong>
                      </div>
                    </article>
                  );
                })}
              </div>
              <a
                className="pa-insight-link"
                href="/resources/insights/why-paid-ad-clicks-dont-become-enquiries"
              >
                Read: why clicks may not become enquiries <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>

          <section
            className="pa-section pa-journey"
            id="pa-customer-journey"
            aria-labelledby="pa-journey-title"
          >
            <div className="pa-container">
              <div className="pa-section-heading pa-heading-centered">
                <p className="pa-eyebrow">
                  <span /> 02 / THE CUSTOMER JOURNEY
                </p>
                <h2 id="pa-journey-title">
                  From the First Click
                  <br />
                  <em>to the First Conversation.</em>
                </h2>
                <p>
                  Connect each step so interested people know where to go—and your team knows what
                  happens next.
                </p>
              </div>
              <div className="pa-journey-track">
                {journeySteps.map(([number, title, description]) => (
                  <div className="pa-journey-step" key={title}>
                    <div className="pa-journey-node">
                      <span>{number}</span>
                      <i aria-hidden="true" />
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
              <p className="pa-disclaimer">An illustrative journey — actual customer paths vary.</p>
              <a
                className="pa-insight-link"
                href="/resources/insights/from-first-ad-click-to-first-customer-conversation"
              >
                Read: map the journey from click to conversation <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>

          <section
            className="pa-section pa-services"
            id="pa-services"
            aria-labelledby="pa-services-title"
          >
            <div className="pa-container">
              <div className="pa-section-heading pa-heading-split">
                <div>
                  <p className="pa-eyebrow">
                    <span /> 03 / WHAT WE MANAGE
                  </p>
                  <h2 id="pa-services-title">
                    Every Campaign Has Moving Parts.
                    <br />
                    <em>We Bring Them Together.</em>
                  </h2>
                </div>
                <p>
                  Explore the support that helps connect campaign planning with the results your
                  business needs to understand.
                </p>
              </div>
              <div className="pa-service-grid">
                {campaignServices.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <article className="pa-service-card" key={service.title}>
                      <details>
                        <summary>
                          <span className="pa-service-icon">
                            <ServiceIcon aria-hidden="true" />
                          </span>
                          <span className="pa-service-title">{service.title}</span>
                          <ChevronDown aria-hidden="true" className="pa-service-chevron" />
                        </summary>
                        <div className="pa-service-example">
                          <strong>Practical example</strong>
                          <span>{service.example}</span>
                        </div>
                      </details>
                      <p>{service.description}</p>
                    </article>
                  );
                })}
              </div>
              <a
                className="pa-insight-link"
                href="/resources/insights/the-moving-parts-of-a-paid-ad-campaign"
              >
                Read: how campaign services work together <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>

          <section
            className="pa-section pa-scenarios"
            id="pa-scenarios"
            aria-labelledby="pa-scenarios-title"
          >
            <div className="pa-container">
              <div className="pa-section-heading pa-heading-centered">
                <p className="pa-eyebrow">
                  <span /> 04 / REAL BUSINESS SCENARIOS
                </p>
                <h2 id="pa-scenarios-title">
                  Different Businesses.
                  <br />
                  <em>Different Paths to the Right Customer.</em>
                </h2>
                <p>Campaigns should reflect the way people make decisions in your industry.</p>
              </div>
              <div className="pa-scenario-grid">
                {businessScenarios.map((scenario) => {
                  const ScenarioIcon = scenario.icon;
                  return (
                    <article className="pa-scenario-card" key={scenario.title}>
                      <div className="pa-scenario-image">
                        <img
                          src={scenario.image}
                          alt={scenario.imageAlt}
                          loading="lazy"
                          width="1200"
                          height="800"
                        />
                        <span className="pa-scenario-tag">
                          <ScenarioIcon aria-hidden="true" />
                          {scenario.tag}
                        </span>
                      </div>
                      <div className="pa-scenario-copy">
                        <span className="pa-scenario-index">CAMPAIGN SCENARIO</span>
                        <h3>{scenario.title}</h3>
                        <p>{scenario.description}</p>
                        <a href="/contact?service=paid-ads#inquiry">
                          Explore a campaign for your business <ArrowUpRight aria-hidden="true" />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
              <p className="pa-disclaimer">
                Examples are illustrative and do not represent guaranteed campaign outcomes.
              </p>
              <a
                className="pa-insight-link"
                href="/resources/insights/paid-ad-campaigns-for-real-estate-healthcare-and-ecommerce"
              >
                Read: campaign paths for different industries <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>

          <section
            className="pa-section pa-visibility"
            id="pa-visibility"
            aria-labelledby="pa-visibility-title"
          >
            <div className="pa-container pa-visibility-layout">
              <div className="pa-visibility-copy">
                <p className="pa-eyebrow">
                  <span /> 05 / BEHIND THE CAMPAIGN
                </p>
                <h2 id="pa-visibility-title">
                  Better Decisions Start
                  <br />
                  <em>With Better Visibility.</em>
                </h2>
                <p>
                  Clear reporting helps your team understand what is happening, what is changing,
                  and which questions to answer next. We connect the numbers to campaign context.
                </p>
                <div className="pa-phase-list">
                  {campaignPhases.map((phase, index) => (
                    <div className="pa-phase" key={phase.title}>
                      <span>0{index + 1}</span>
                      <div>
                        <h3>{phase.title}</h3>
                        <p>{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  className="pa-insight-link"
                  href="/resources/insights/understand-ad-spend-cost-per-lead-and-conversion-rate"
                >
                  Read: understand campaign metrics <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="pa-report-card">
                <div className="pa-report-head">
                  <div>
                    <span>CAMPAIGN OVERVIEW</span>
                    <strong>Performance at a glance</strong>
                  </div>
                  <span className="pa-report-period">EXAMPLE</span>
                </div>
                <div className="pa-report-total">
                  <span>Illustrative ad spend</span>
                  <strong>$4,860</strong>
                  <small>Example only · not a forecast</small>
                </div>
                <div className="pa-report-rows">
                  <div>
                    <span>
                      <i className="pa-report-dot spend" />
                      Ad spend
                    </span>
                    <strong>$4,860</strong>
                  </div>
                  <div>
                    <span>
                      <i className="pa-report-dot leads" />
                      Enquiries
                    </span>
                    <strong>270</strong>
                  </div>
                  <div>
                    <span>
                      <i className="pa-report-dot cpl" />
                      Example cost per lead
                    </span>
                    <strong>$18</strong>
                  </div>
                  <div>
                    <span>
                      <i className="pa-report-dot rate" />
                      Example conversion rate
                    </span>
                    <strong>4.8%</strong>
                  </div>
                </div>
                <div className="pa-report-insight">
                  <BarChart3 aria-hidden="true" />
                  <span>
                    <strong>Metrics need context.</strong> Lead quality, tracking accuracy, and
                    business goals belong in the same conversation.
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section
            className="pa-section pa-follow-up"
            id="pa-follow-up"
            aria-labelledby="pa-follow-up-title"
          >
            <div className="pa-container">
              <div className="pa-follow-up-panel">
                <div className="pa-follow-up-copy">
                  <p className="pa-eyebrow">
                    <span /> 06 / ADS + LEAD GENERATION
                  </p>
                  <h2 id="pa-follow-up-title">
                    A Lead Is
                    <br />
                    <em>Only the Beginning.</em>
                  </h2>
                  <p>
                    Connect lead capture with CRM routing, notifications, qualification, and
                    follow-up—so a new enquiry has a clear next step.
                  </p>
                  <div className="pa-partner-links">
                    <a href="/expertise/sales-development">
                      <UsersRound aria-hidden="true" />
                      <span>
                        <strong>Sales &amp; Revenue Growth</strong>
                        <small>Prospecting, qualification, and sales support</small>
                      </span>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                    <a href="/expertise/customer-service">
                      <MessagesSquare aria-hidden="true" />
                      <span>
                        <strong>Customer Support</strong>
                        <small>Helpful responses and consistent service</small>
                      </span>
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                  <a
                    className="pa-insight-link"
                    href="/resources/insights/what-happens-after-a-paid-ad-lead-arrives"
                  >
                    Read: what happens after a lead arrives <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <div className="pa-lead-flow">
                  {leadFlow.map(([title, description], index) => (
                    <div className="pa-lead-flow-step" key={title}>
                      <span className="pa-lead-flow-number">0{index + 1}</span>
                      <span className="pa-lead-flow-check">
                        <Check aria-hidden="true" />
                      </span>
                      <div>
                        <strong>{title}</strong>
                        <small>{description}</small>
                      </div>
                      {index < leadFlow.length - 1 && <i aria-hidden="true" />}
                    </div>
                  ))}
                  <p>People and process stay at the center of every follow-up.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pa-section pa-faq" id="pa-faq" aria-labelledby="pa-faq-title">
            <div className="pa-container pa-faq-layout">
              <div className="pa-faq-intro">
                <p className="pa-eyebrow">
                  <span /> 07 / FREQUENTLY ASKED QUESTIONS
                </p>
                <h2 id="pa-faq-title">
                  Good Questions.
                  <br />
                  <em>Clear Answers.</em>
                </h2>
                <p>Have a question about getting started? Here are a few helpful details.</p>
                <a href="/contact#inquiry">
                  Ask our team <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="pa-insight-link"
                  href="/resources/insights/paid-advertising-questions-to-answer-before-launch"
                >
                  Read: questions to answer before launch <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="pa-faq-list">
                {frequentlyAskedQuestions.map((item) => (
                  <details key={item.question}>
                    <summary>
                      {item.question}
                      <ChevronDown aria-hidden="true" />
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="pa-cta" aria-labelledby="pa-cta-title">
            <div className="pa-cta-glow" aria-hidden="true" />
            <div className="pa-container pa-cta-content">
              <p className="pa-eyebrow">
                <span /> READY WHEN YOU ARE
              </p>
              <h2 id="pa-cta-title">
                Let's Build a Campaign
                <br />
                <em>Around Your Business Goals.</em>
              </h2>
              <p>
                Tell us who you're trying to reach, what you want to achieve, and where you need
                support.
              </p>
              <div className="pa-hero-actions">
                <a className="pa-button" href="/contact?service=paid-ads#inquiry">
                  Discuss My Campaign <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="pa-button pa-button-outline" href="/contact#inquiry">
                  Talk to Our Team <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <a
                className="pa-insight-link"
                href="/resources/insights/turn-paid-ad-campaign-planning-into-a-practical-brief"
              >
                Read: turn campaign planning into a practical brief{" "}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </main>
      </ExpertiseScrollMotion>
    </div>
  );
}
