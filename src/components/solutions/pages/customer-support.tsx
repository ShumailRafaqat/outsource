import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Headset,
  LifeBuoy,
  Mail,
  MessageCircle,
  MessagesSquare,
  Phone,
  ShieldCheck,
  TicketCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { ExpertiseScrollMotion } from "@/components/expertise/expertise-scroll-motion";
import { customerServiceFunction, toRoleSlug } from "@/components/expertise/data";

import "./customer-support.css";

const scenarios = [
  {
    label: "Before the purchase",
    customer: "Will this arrive before Friday?",
    reply: "I can check the delivery options for your location.",
    outcome: "Answer questions that help customers move forward.",
  },
  {
    label: "After the order",
    customer: "Could you help me check my order update?",
    reply: "Of course. I’ll find the latest update and explain what happens next.",
    outcome: "Keep customers informed and explain the next step.",
  },
  {
    label: "When something goes wrong",
    customer: "I can’t access my account and need help.",
    reply: "I’m sorry you’re running into that. I’ll record this and route it to the right team.",
    outcome: "Capture the issue, share approved guidance, and escalate when needed.",
  },
];

const channels: { title: string; description: string; snippet: string; icon: LucideIcon }[] = [
  {
    title: "Live Chat Support",
    description: "Help website visitors with questions, navigation, and next steps.",
    snippet: "Can I help you find the right option?",
    icon: MessageCircle,
  },
  {
    title: "Phone Support",
    description: "Give callers a person who can listen, guide, and route their concerns.",
    snippet: "Thanks for calling. How can I help?",
    icon: Phone,
  },
  {
    title: "Email Support",
    description: "Keep enquiries, updates, and follow-ups organised and moving.",
    snippet: "Your request is with our support team.",
    icon: Mail,
  },
  {
    title: "Social & Messaging Support",
    description: "Manage conversations across your agreed messaging channels.",
    snippet: "We’ve received your message.",
    icon: MessagesSquare,
  },
];

const roleIcons: LucideIcon[] = [
  Headset,
  MessageCircle,
  Phone,
  LifeBuoy,
  ShieldCheck,
  UsersRound,
  MessagesSquare,
  Headset,
];

const operatingPrinciples = [
  ["Brand-aligned communication", "Responses shaped around your tone and customer expectations."],
  ["Clear support guidelines", "Agreed answers and processes for common customer questions."],
  ["Defined escalation paths", "Issues routed to the right person when further action is needed."],
  ["Connected handovers", "Conversation notes and pending actions passed between shifts."],
];

const setupSteps = [
  [
    "Understand Your Business",
    "Learn about your customers, support needs, and recurring questions.",
  ],
  [
    "Define Your Coverage",
    "Agree on channels, coverage hours, responsibilities, and escalation rules.",
  ],
  [
    "Prepare Your Support Team",
    "Organise approved resources, tool access, and response workflows.",
  ],
  ["Launch & Refine", "Go live, review the workflow, and identify practical improvements."],
];

const reportingItems = [
  "Enquiries by channel",
  "Open and resolved tickets",
  "Issues awaiting escalation",
  "Common customer questions",
  "Response-time trends, where tracked",
];

const faqs = [
  [
    "Can your team work with our existing tools?",
    "We review your current tools during setup and agree on access, workflows, and any integration requirements.",
  ],
  [
    "How will you learn about our business?",
    "We prepare support resources using your approved product information, policies, common questions, and brand guidelines.",
  ],
  [
    "What happens when an issue needs our attention?",
    "We follow an agreed escalation process and pass the relevant details to your designated contact.",
  ],
  [
    "Can we choose specific support channels?",
    "Yes. Your support plan can be scoped around the channels and coverage your business needs.",
  ],
  [
    "How do you handle sensitive customer information?",
    "Access permissions and data-handling requirements are agreed during setup, based on the systems and information involved.",
  ],
];

export function CustomerSupportPage() {
  const [activeScenario, setActiveScenario] = useState(0);
  const scenario = scenarios[activeScenario];

  return (
    <ExpertiseScrollMotion pageKey="24-7-customer-support">
      <div className="s24-page">
        <SiteHeader />
        <main data-disable-hero-reveal>
          <section className="s24-hero" aria-labelledby="s24-hero-title" data-custom-hero-intro>
            <div className="s24-shell s24-hero-layout">
              <div className="s24-hero-copy">
                <p className="s24-eyebrow" data-s24-hero="eyebrow">
                  24/7 CUSTOMER SUPPORT
                </p>
                <h1 id="s24-hero-title" data-s24-hero="heading">
                  Your Business Closes.
                  <br />
                  <em>Customer Care Doesn’t.</em>
                </h1>
                <p className="s24-hero-description" data-s24-hero="description">
                  Keep conversations moving with round-the-clock customer support. From everyday
                  questions to urgent concerns, we help customers get answers while your team stays
                  focused.
                </p>
                <div className="s24-hero-actions" data-s24-hero="actions">
                  <a className="s24-button" href="/contact?service=Customer%20support#inquiry">
                    Build My Support Plan <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a className="s24-button s24-button-outline" href="#support-channels">
                    Explore Support Coverage <ArrowDown aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="s24-hero-dashboard" aria-label="Illustrative support workflow">
                <div className="s24-dashboard-head">
                  <div>
                    <span className="s24-dashboard-kicker">SUPPORT INBOX</span>
                    <strong>Customer conversations</strong>
                  </div>
                  <span className="s24-open-status">
                    <i /> Available
                  </span>
                </div>
                <div className="s24-chat-window">
                  <div className="s24-chat-date">TODAY · WEBSITE CHAT</div>
                  <p className="s24-chat-message s24-customer-message">
                    Hi, can you help me with my order?
                  </p>
                  <p className="s24-chat-message s24-agent-message">
                    Absolutely. I can check that for you.
                  </p>
                  <div className="s24-ticket-resolved">
                    <Check aria-hidden="true" /> Resolved
                  </div>
                </div>
                <div className="s24-channel-strip">
                  <span>
                    <MessageCircle aria-hidden="true" /> Chat <b>Active</b>
                  </span>
                  <span>
                    <Phone aria-hidden="true" /> Calls <b>Active</b>
                  </span>
                  <span>
                    <Mail aria-hidden="true" /> Email <b>Active</b>
                  </span>
                </div>
                <p className="s24-illustrative-note">Illustrative support workflow</p>
              </div>
            </div>
          </section>

          <section className="s24-section s24-scenarios" aria-labelledby="s24-scenarios-title">
            <div className="s24-shell">
              <div className="s24-section-intro">
                <p className="s24-eyebrow">
                  <span /> CUSTOMER MOMENTS
                </p>
                <h2 id="s24-scenarios-title">A Small Question Can Become a Lost Customer.</h2>
                <p>
                  A delayed reply can leave someone unsure about an order, a purchase, or their next
                  step. Reliable support helps you stay present when those moments matter.
                </p>
              </div>
              <div className="s24-scenario-layout">
                <div
                  className="s24-scenario-tabs"
                  role="group"
                  aria-label="Customer support scenarios"
                >
                  {scenarios.map((item, index) => (
                    <button
                      type="button"
                      key={item.label}
                      aria-pressed={activeScenario === index}
                      onClick={() => setActiveScenario(index)}
                    >
                      <span>0{index + 1}</span>
                      <strong>{item.label}</strong>
                      <ArrowRight aria-hidden="true" />
                    </button>
                  ))}
                </div>
                <div className="s24-conversation" aria-live="polite">
                  <div className="s24-conversation-top">
                    <span>
                      <MessageCircle aria-hidden="true" /> CUSTOMER CONVERSATION
                    </span>
                    <span>EXAMPLE</span>
                  </div>
                  <p className="s24-customer-bubble">{scenario.customer}</p>
                  <p className="s24-agent-bubble">{scenario.reply}</p>
                  <div className="s24-conversation-foot">
                    <ShieldCheck aria-hidden="true" />
                    <span>{scenario.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="s24-section s24-channels"
            id="support-channels"
            aria-labelledby="s24-channels-title"
          >
            <div className="s24-shell">
              <div className="s24-section-intro">
                <p className="s24-eyebrow">
                  <span /> SUPPORT COVERAGE
                </p>
                <h2 id="s24-channels-title">Give Customers a Familiar Way to Reach You.</h2>
                <p>
                  Choose the channels your customers use, with coverage built around your business.
                </p>
              </div>
              <div className="s24-channel-grid">
                {channels.map(({ title, description, snippet, icon: Icon }, index) => (
                  <article className="s24-channel-card" key={title}>
                    <div className="s24-channel-card-top">
                      <span>
                        <Icon aria-hidden="true" />
                      </span>
                      <small>0{index + 1}</small>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="s24-snippet">
                      <i /> {snippet}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="s24-section s24-roles" aria-labelledby="s24-roles-title">
            <div className="s24-shell">
              <div className="s24-section-intro">
                <p className="s24-eyebrow">
                  <span /> CUSTOMER SUPPORT ROLES
                </p>
                <h2 id="s24-roles-title">The Right People for Every Customer Conversation.</h2>
                <p>
                  Explore the specialists who can support your customers, channels, and day-to-day
                  service needs.
                </p>
              </div>
              <div className="s24-role-grid">
                {customerServiceFunction.roles.map((role, index) => {
                  const Icon = roleIcons[index] ?? Headset;
                  const roleHref = `${customerServiceFunction.href}/${toRoleSlug(role.title)}`;

                  return (
                    <a className="s24-role-card" href={roleHref} key={role.title}>
                      <span className="s24-role-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="s24-role-number">0{index + 1}</span>
                      <strong>{role.title}</strong>
                      <span className="s24-role-description">{role.description}</span>
                      <span className="s24-role-link">
                        Explore role <ArrowUpRight aria-hidden="true" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="s24-section s24-principles" aria-labelledby="s24-principles-title">
            <div className="s24-shell">
              <div className="s24-principles-heading">
                <p className="s24-eyebrow">
                  <span /> A NATURAL EXTENSION OF YOUR TEAM
                </p>
                <h2 id="s24-principles-title">Your Voice. Your Processes. Our Support Team.</h2>
                <p>
                  Support should feel like part of your business. We work from your approved
                  information, service policies, and escalation rules to keep responses consistent.
                </p>
              </div>
              <div className="s24-ops-dashboard">
                <div className="s24-ops-conversation">
                  <span className="s24-dashboard-kicker">OPEN CONVERSATION</span>
                  <p>“I need help understanding the next step with my request.”</p>
                  <div>
                    <MessageCircle aria-hidden="true" /> Customer message received
                  </div>
                </div>
                <div className="s24-ops-guidance">
                  <span className="s24-dashboard-kicker">APPROVED GUIDANCE</span>
                  <strong>Use the current service policy</strong>
                  <p>
                    Share the relevant approved steps. Do not promise an outcome outside policy.
                  </p>
                  <span className="s24-escalation">
                    <ShieldCheck aria-hidden="true" /> Escalate exceptions to the designated contact
                  </span>
                </div>
                <div className="s24-principles-list">
                  {operatingPrinciples.map(([title, description], index) => (
                    <article key={title}>
                      <span>0{index + 1}</span>
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="s24-section s24-setup" aria-labelledby="s24-setup-title">
            <div className="s24-shell">
              <div className="s24-section-intro">
                <p className="s24-eyebrow">
                  <span /> GETTING STARTED
                </p>
                <h2 id="s24-setup-title">From First Conversation to Everyday Coverage.</h2>
              </div>
              <ol className="s24-timeline">
                {setupSteps.map(([title, description], index) => (
                  <li key={title}>
                    <span className="s24-step-number">0{index + 1}</span>
                    <span className="s24-step-icon">
                      {index === 3 ? (
                        <TicketCheck aria-hidden="true" />
                      ) : (
                        <Clock3 aria-hidden="true" />
                      )}
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="s24-section s24-visibility" aria-labelledby="s24-visibility-title">
            <div className="s24-shell s24-visibility-layout">
              <div className="s24-section-intro">
                <p className="s24-eyebrow">
                  <span /> SERVICE VISIBILITY
                </p>
                <h2 id="s24-visibility-title">
                  Stay Informed Without Managing Every Conversation.
                </h2>
                <p>
                  Get a clearer view of customer questions, unresolved issues, and the areas that
                  need attention.
                </p>
                <ul className="s24-reporting-list">
                  {reportingItems.map((item) => (
                    <li key={item}>
                      <Check aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="s24-report-card">
                <div className="s24-report-heading">
                  <div>
                    <span className="s24-dashboard-kicker">SUPPORT OVERVIEW</span>
                    <strong>Service activity</strong>
                  </div>
                  <span>SAMPLE VIEW</span>
                </div>
                <div className="s24-report-inbox">
                  <div>
                    <span>Enquiries by channel</span>
                    <strong>
                      <MessageCircle aria-hidden="true" /> Chat <b>·</b> Phone <b>·</b> Email
                    </strong>
                  </div>
                  <div>
                    <span>Ticket status</span>
                    <strong>
                      <i className="s24-status-open" /> Open <b>·</b>{" "}
                      <i className="s24-status-done" /> Resolved
                    </strong>
                  </div>
                  <div>
                    <span>Needs attention</span>
                    <strong>
                      <ShieldCheck aria-hidden="true" /> Awaiting escalation
                    </strong>
                  </div>
                  <div>
                    <span>Recurring themes</span>
                    <strong>Common customer questions</strong>
                  </div>
                </div>
                <p className="s24-report-note">
                  Sample reporting view · no client data or performance claims
                </p>
              </div>
            </div>
          </section>

          <section className="s24-section s24-faq" aria-labelledby="s24-faq-title">
            <div className="s24-shell s24-faq-layout">
              <div className="s24-section-intro">
                <p className="s24-eyebrow">
                  <span /> FREQUENTLY ASKED QUESTIONS
                </p>
                <h2 id="s24-faq-title">A Few Things You May Be Wondering.</h2>
                <a href="/contact?service=Customer%20support#inquiry">
                  Talk through your support needs <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="s24-faq-list">
                {faqs.map(([question, answer]) => (
                  <details key={question}>
                    <summary>
                      {question}
                      <ChevronDown aria-hidden="true" />
                    </summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="s24-cta" aria-labelledby="s24-cta-title">
            <div className="s24-shell s24-cta-inner">
              <div>
                <p className="s24-eyebrow">
                  <span /> READY WHEN YOUR CUSTOMERS ARE
                </p>
                <h2 id="s24-cta-title">
                  Be There for Your Customers.
                  <br />
                  <em>Without Being Available Yourself, 24/7.</em>
                </h2>
                <p>
                  Tell us where your support gets stretched. Let’s build coverage around your
                  customers, channels, and day-to-day needs.
                </p>
              </div>
              <a className="s24-button" href="/contact?service=Customer%20support#inquiry">
                Let’s Plan Your Coverage <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </ExpertiseScrollMotion>
  );
}
