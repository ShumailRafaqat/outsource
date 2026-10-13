import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  Check,
  Headset,
  PhoneCall,
  RotateCcw,
  Target,
  UserRound,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./outbound-calling-agent.css";

const selfCheckQuestions = [
  "Follow-ups get delayed",
  "Cold calls keep getting pushed back",
  "Good leads go quiet after they enquire",
  "You need more calls without another full-time hire",
];

const callingScenarios = [
  {
    title: "Cold outreach",
    detail:
      "Reach the right prospects, introduce your offer clearly, and learn whether there is a reason to continue the conversation.",
    image: "/1.jpg",
    alt: "Outbound calling agents working with prospects in a professional call center",
    icon: PhoneCall,
    label: "START A RELEVANT CONVERSATION",
  },
  {
    title: "Fast lead follow-up",
    detail:
      "Call after an enquiry or agreed trigger, understand what the prospect needs, and record the next step while it is still timely.",
    image: "/2.jpg",
    alt: "A calling agent following up with a lead while reviewing customer details",
    icon: RotateCcw,
    label: "FOLLOW UP WHILE INTEREST IS FRESH",
  },
  {
    title: "Appointment setting",
    detail:
      "Coordinate a suitable time with interested prospects, confirm the meeting, and share the context your team needs.",
    image: "/3.jpg",
    alt: "Customer support team coordinating calls and appointments",
    icon: CalendarCheck,
    label: "TURN INTEREST INTO A MEETING",
  },
  {
    title: "Lead qualification",
    detail:
      "Capture the prospect’s needs, fit, and timing using your agreed questions—then pass qualified context to your sales team.",
    image: "/1.jpg",
    alt: "Sales callers speaking with prospects and updating their call workflow",
    icon: Target,
    label: "HAND OFF WITH USEFUL CONTEXT",
  },
];

const outsourceBenefits = [
  "Consistent calling against an agreed schedule",
  "No need to recruit, train, and manage every caller in-house",
  "Adjust team capacity as your call volume changes",
  "Call outcomes and next steps recorded in your CRM",
  "Your sales team can focus on qualified conversations",
];

export function OutboundCallingAgentPage() {
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const toggleChallenge = (challenge: string) => {
    setSelectedChallenges((selected) =>
      selected.includes(challenge)
        ? selected.filter((item) => item !== challenge)
        : [...selected, challenge],
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="outbound-page">
        <section className="outbound-hero" aria-labelledby="outbound-heading">
          <div className="outbound-hero-copy">
            <p className="outbound-eyebrow">
              <span /> OUTBOUND CALLING SUPPORT
            </p>
            <h1 id="outbound-heading">
              Your sales team spends too much time on calls that don’t convert.
            </h1>
            <p className="outbound-hero-description">
              Trained agents handle cold outreach, timely follow-ups, and appointment setting—so
              your team can spend more of its time with interested prospects.
            </p>
            <div className="outbound-hero-actions">
              <a className="outbound-button" href="/contact#inquiry">
                Talk to us about outbound calling <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="outbound-text-link" href="#outbound-scenarios">
                See what we handle <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="outbound-hero-note">
              <span aria-hidden="true" />
              Human-led conversations, with AI voice support where it fits.
            </div>
          </div>

          <div className="outbound-hero-visual">
            <img
              src="/2.jpg"
              alt="An outbound calling agent reviewing lead details during a call"
              fetchPriority="high"
            />
            <div className="outbound-hero-shade" aria-hidden="true" />
            <div className="outbound-call-status">
              <span className="outbound-live-dot" aria-hidden="true" />
              <span>CALL FOLLOW-THROUGH</span>
              <strong>Handled with care.</strong>
            </div>
            <div className="outbound-visual-caption">
              <Headset aria-hidden="true" />
              <span>More conversations. Better handoffs.</span>
            </div>
          </div>
        </section>

        <section className="outbound-self-check" aria-labelledby="outbound-check-heading">
          <div className="outbound-check-heading">
            <p className="outbound-eyebrow">
              <span /> A QUICK SELF-CHECK
            </p>
            <h2 id="outbound-check-heading">
              Is follow-through
              <br />
              <em>slowing your pipeline?</em>
            </h2>
            <p>Select the challenges that sound familiar.</p>
          </div>
          <div
            className="outbound-check-options"
            role="group"
            aria-label="Current calling challenges"
          >
            {selfCheckQuestions.map((question) => {
              const selected = selectedChallenges.includes(question);
              return (
                <button
                  aria-pressed={selected}
                  className={`outbound-check-option${selected ? " is-selected" : ""}`}
                  key={question}
                  onClick={() => toggleChallenge(question)}
                  type="button"
                >
                  <span className="outbound-check-box">
                    {selected && <Check aria-hidden="true" />}
                  </span>
                  <span>{question}</span>
                </button>
              );
            })}
            <p aria-live="polite" className="outbound-check-response">
              {selectedChallenges.length > 0
                ? "That’s exactly the kind of follow-through a dedicated calling team can take ownership of."
                : "Choose any that apply—your answers stay on this page."}
            </p>
          </div>
        </section>

        <section
          className="outbound-scenarios"
          id="outbound-scenarios"
          aria-labelledby="outbound-scenarios-heading"
        >
          <header className="outbound-section-heading">
            <p className="outbound-eyebrow">
              <span /> THE CALLS THAT MOVE WORK FORWARD
            </p>
            <h2 id="outbound-scenarios-heading">
              From first hello
              <br />
              <em>to a clear next step.</em>
            </h2>
            <p>
              Calling support follows your process—from the first attempt through qualification,
              scheduling, and a clean handoff.
            </p>
          </header>
          <div className="outbound-scenario-grid">
            {callingScenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <article className="outbound-scenario" key={scenario.title}>
                  <div className="outbound-scenario-image">
                    <img src={scenario.image} alt={scenario.alt} loading="lazy" decoding="async" />
                    <span className="outbound-scenario-label">{scenario.label}</span>
                    <span className="outbound-scenario-icon">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>
                  <div className="outbound-scenario-copy">
                    <h3>{scenario.title}</h3>
                    <p>{scenario.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="outbound-models" aria-labelledby="outbound-models-heading">
          <div className="outbound-models-heading">
            <p className="outbound-eyebrow">
              <span /> THE RIGHT CALLING MODEL
            </p>
            <h2 id="outbound-models-heading">
              Human connection.
              <br />
              <em>AI-powered reach.</em>
            </h2>
            <p>
              Choose a model around your call volume, conversation complexity, and customer
              experience—not a one-size-fits-all script.
            </p>
          </div>
          <div className="outbound-model-list">
            <article className="outbound-model">
              <span className="outbound-model-icon">
                <UserRound aria-hidden="true" />
              </span>
              <div>
                <span className="outbound-model-kicker">FOR NUANCED CONVERSATIONS</span>
                <h3>Human agents</h3>
                <p>
                  Skilled callers handle complex questions, relationship-building, and higher-value
                  conversations with judgment and empathy.
                </p>
              </div>
              <span className="outbound-model-tag">Human-led</span>
            </article>
            <article className="outbound-model">
              <span className="outbound-model-icon is-ai">
                <Bot aria-hidden="true" />
              </span>
              <div>
                <span className="outbound-model-kicker">FOR ROUTINE, HIGH-VOLUME TOUCHPOINTS</span>
                <h3>AI voice agents</h3>
                <p>
                  Use AI for suitable first-touch outreach, routine confirmations, or basic
                  qualification—with clear escalation to a person when needed.
                </p>
              </div>
              <span className="outbound-model-tag">AI-assisted</span>
            </article>
            <p className="outbound-model-note">
              Calling scope, hours, consent requirements, and handoff rules are agreed with you
              before outreach begins.
            </p>
          </div>
        </section>

        <section className="outbound-benefits" aria-labelledby="outbound-benefits-heading">
          <div className="outbound-benefits-inner">
            <div>
              <p className="outbound-eyebrow">
                <span /> WHAT CHANGES WHEN YOU OUTSOURCE
              </p>
              <h2 id="outbound-benefits-heading">
                Stop losing leads
                <br />
                <em>to delayed follow-ups.</em>
              </h2>
            </div>
            <ul>
              {outsourceBenefits.map((benefit) => (
                <li key={benefit}>
                  <Check aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="outbound-close" aria-labelledby="outbound-close-heading">
          <p className="outbound-eyebrow">
            <span /> KEEP GOOD LEADS MOVING
          </p>
          <h2 id="outbound-close-heading">
            Let your callers open the door.
            <br />
            <em>Let your team close the right conversations.</em>
          </h2>
          <a className="outbound-button" href="/contact#inquiry">
            Talk to us about outbound calling <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
    </div>
  );
}
