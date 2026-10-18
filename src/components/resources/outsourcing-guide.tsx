import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Layers3,
  ShieldCheck,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./outsourcing-guide.css";

const guideSections = [
  ["definition", "The idea"],
  ["when-to-outsource", "When it helps"],
  ["operations", "What can move"],
  ["comparison", "Compare models"],
  ["partner", "Choose a partner"],
  ["questions", "Common questions"],
] as const;

const workflow = [
  {
    title: "Define the outcome",
    description:
      "Start with the work that needs to happen, the quality bar, and the decisions that must stay with your team.",
    detail:
      "Example: acknowledge every support request, route urgent cases, and report unresolved issues each day.",
  },
  {
    title: "Design the handoff",
    description:
      "Agree on roles, tools, access, coverage hours, escalation owners, and what a complete handoff looks like.",
    detail: "Document where requests arrive, which cases need approval, and who owns exceptions.",
  },
  {
    title: "Start with controls",
    description:
      "Train against real examples, limit access to what the work requires, and test the process before increasing volume.",
    detail: "Use a small, reviewable launch with clear feedback and a named point of contact.",
  },
  {
    title: "Review and adjust",
    description:
      "Look at quality, workload, customer impact, and exceptions together. Improve the process before expanding it.",
    detail:
      "Review agreed measures on a regular cadence; change scope only when the operating model is ready.",
  },
];

const operations = [
  [
    "Customer operations",
    "Inbox and chat support, case routing, appointment coordination, and documented follow-up.",
  ],
  [
    "Finance administration",
    "Invoice preparation, bookkeeping support, reconciliations, and records for authorized review.",
  ],
  [
    "People operations",
    "Recruiting coordination, onboarding administration, credential tracking, and employee records.",
  ],
  [
    "Sales operations",
    "Prospect research, CRM upkeep, meeting coordination, and prepared handoffs for sales owners.",
  ],
  [
    "Marketing operations",
    "Content production support, campaign coordination, publishing, and performance reporting.",
  ],
  [
    "Technology and projects",
    "Defined software tasks, QA, technical support, data work, and repeatable project administration.",
  ],
];

const benefits = [
  {
    label: "Cost efficiency",
    text: "Compare the full cost of a workflow—not only salary. Include recruiting, tools, management time, training, coverage, and transition effort.",
    icon: CircleDollarSign,
  },
  {
    label: "Flexibility",
    text: "Match support to a defined workload, schedule, or skill need. Keep scope and change approvals explicit as priorities shift.",
    icon: Clock3,
  },
  {
    label: "Scalability",
    text: "Add capacity when demand grows, then review what should remain, change, or return in-house as needs evolve.",
    icon: Layers3,
  },
  {
    label: "Operational support",
    text: "Create dependable ownership, documented handoffs, and coverage for recurring work that competes with core priorities.",
    icon: Workflow,
  },
];

const comparison = {
  inhouse: {
    label: "In-house team",
    intro: "Your organization hires and directly operates the work.",
    points: [
      ["Direct day-to-day control", "Managers set priorities and coach employees directly."],
      [
        "Internal context",
        "Knowledge and relationships can stay close to the rest of the business.",
      ],
      [
        "Full employment responsibility",
        "Recruiting, coverage, tools, training, and continuity sit with your organization.",
      ],
      [
        "Capacity changes take planning",
        "Hiring or reorganizing can take time when demand changes.",
      ],
    ],
  },
  outsourced: {
    label: "Outsourced support",
    intro: "An external provider supplies people or operates an agreed workflow.",
    points: [
      [
        "Defined shared control",
        "Your team sets outcomes and decision rights; the provider handles only agreed work.",
      ],
      [
        "Knowledge needs a handoff",
        "Useful documentation, access rules, and named owners help preserve context.",
      ],
      [
        "Provider delivery responsibilities",
        "The agreement should make scope, supervision, continuity, and fees clear.",
      ],
      [
        "Capacity can be planned around scope",
        "Changes are possible when availability, onboarding, and commercial terms are agreed.",
      ],
    ],
  },
} as const;

const partnerChecks = [
  "Can they explain the delivery model, location, supervision, and who is accountable?",
  "Will the scope identify tasks, exclusions, decision rights, coverage, and escalation paths?",
  "How are candidate fit, onboarding, quality reviews, and continuity handled?",
  "What access controls, confidentiality terms, and data-handling practices apply?",
  "Can you see the full commercial picture, including setup, tools, coverage, and change costs?",
  "Are reporting, service reviews, problem resolution, and exit or transition steps agreed?",
];

const challenges = [
  {
    title: "Unclear scope creates rework",
    text: "Write down examples of in-scope work, exceptions, approval limits, and who decides when a request falls outside the agreement.",
  },
  {
    title: "Communication gaps slow decisions",
    text: "Set working hours, channels, response expectations, meeting cadence, and an escalation contact before launch.",
  },
  {
    title: "Knowledge gets stuck with one person",
    text: "Use shared procedures, cross-training where appropriate, documented access, and a practical continuity plan.",
  },
  {
    title: "Poor controls create avoidable risk",
    text: "Grant least-privilege access, define secure handling and approval steps, and review requirements with qualified advisors when needed.",
  },
];

const faqs = [
  [
    "Is outsourcing the same as offshoring?",
    "No. Outsourcing means engaging an external provider to supply a service, people, or process. Offshoring describes where work is performed. Work can be outsourced locally or across borders.",
  ],
  [
    "Does outsourcing mean giving up control?",
    "Not necessarily. Control depends on the agreement. Define who sets priorities, who approves decisions, what the provider can do independently, and how performance is reviewed.",
  ],
  [
    "How do I know if a task is suitable to outsource?",
    "Good candidates are repeatable, explainable, measurable, and supported by appropriate access and review. Keep decisions requiring sensitive judgment or accountability with the right internal owner.",
  ],
  [
    "Will outsourcing always reduce costs?",
    "No. Outcomes depend on scope, complexity, quality, transition, provider fees, and management effort. Compare total costs and service impact rather than assuming savings.",
  ],
  [
    "How long does it take to get started?",
    "Timing depends on role or process complexity, access approvals, documentation, hiring, training, and coverage. A realistic plan names dependencies and a readiness check before launch.",
  ],
  [
    "Can we begin small and expand later?",
    "Often, yes. A bounded pilot or phased start can test workflow fit and quality. Agree on the scope, success measures, review date, and conditions for expanding before work begins.",
  ],
] as const;

export function OutsourcingGuidePage() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [comparisonView, setComparisonView] = useState<keyof typeof comparison>("inhouse");
  const [activeExample, setActiveExample] = useState<"shop" | "professional">("shop");
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    const revealNodes = page?.querySelectorAll<HTMLElement>("[data-guide-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      !page ||
      !revealNodes?.length ||
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("og-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    page.classList.add("og-motion-ready");
    revealNodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      page.classList.remove("og-motion-ready");
    };
  }, []);

  const selectedComparison = comparison[comparisonView];
  const selectedWorkflow = workflow[activeWorkflow] ?? workflow[0];

  return (
    <div className="outsourcing-guide">
      <SiteHeader />
      <main ref={pageRef} data-disable-hero-reveal>
        <section className="og-hero" aria-labelledby="og-title">
          <div className="og-shell og-hero-layout">
            <div className="og-hero-copy">
              <p className="og-eyebrow">
                <span /> A PRACTICAL BUSINESS GUIDE
              </p>
              <h1 id="og-title">
                Outsourcing,
                <br />
                <em>made clearer.</em>
              </h1>
              <p className="og-hero-intro">
                A grounded guide to what outsourcing is, when it makes sense, and how to make an
                external working relationship serve your business.
              </p>
              <a className="og-text-link" href="#definition">
                Start with the essentials <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
            <div
              className="og-hero-visual"
              role="img"
              aria-label="A workflow connecting your business and an external team"
            >
              <div className="og-orbit og-orbit-one" aria-hidden="true" />
              <div className="og-orbit og-orbit-two" aria-hidden="true" />
              <div className="og-hero-node og-hero-node-business">
                <Building2 aria-hidden="true" />
                <span>Your business</span>
              </div>
              <div className="og-hero-connector" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="og-hero-node og-hero-node-partner">
                <UsersRound aria-hidden="true" />
                <span>External partner</span>
              </div>
              <div className="og-hero-caption">
                <span>SHARED OUTCOME</span>
                <strong>Clear work. Clear ownership.</strong>
              </div>
            </div>
          </div>
          <nav className="og-guide-nav" aria-label="Outsourcing guide sections">
            <div className="og-shell">
              {guideSections.map(([id, label], index) => (
                <a href={`#${id}`} key={id}>
                  <span>0{index + 1}</span>
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </section>

        <section
          className="og-section og-definition"
          id="definition"
          aria-labelledby="og-definition-title"
        >
          <div className="og-shell og-definition-layout">
            <div className="og-section-aside" data-guide-reveal>
              <p className="og-eyebrow">
                <span /> 01 / THE IDEA
              </p>
              <span className="og-large-index" aria-hidden="true">
                01
              </span>
            </div>
            <div className="og-definition-copy" data-guide-reveal>
              <h2 id="og-definition-title">What does outsourcing actually mean?</h2>
              <p className="og-lead">
                Outsourcing is an operating choice: a business asks an external provider to supply
                people, expertise, or a defined process that would otherwise be handled internally.
              </p>
              <p>
                It is not one fixed arrangement. You might add a specialist who works under your
                managers, ask a provider to run a clearly scoped workflow, or commission a project
                with a defined deliverable. The right model depends on the work and the control it
                needs.
              </p>
              <div
                className={`og-example-switch og-example-${activeExample === "professional" ? "professional" : "shop"}`}
                aria-label="Choose a business example"
              >
                <p>See the idea in practice</p>
                <div role="group" aria-label="Business example">
                  <button
                    type="button"
                    aria-pressed={activeExample === "shop"}
                    onClick={() => setActiveExample("shop")}
                  >
                    Growing online shop
                  </button>
                  <button
                    type="button"
                    aria-pressed={activeExample === "professional"}
                    onClick={() => setActiveExample("professional")}
                  >
                    Professional firm
                  </button>
                </div>
                <div className="og-example-scene">
                  <p className="og-example-shop">
                    A shop sees more order questions during a seasonal rush. It documents common
                    answers, routes unusual cases to its own team, and adds agreed support coverage.
                  </p>
                  <p className="og-example-professional">
                    A consulting firm needs cleaner CRM records before a new business cycle. It
                    defines fields and review rules, then assigns routine updates to a trained
                    external assistant.
                  </p>
                  <span>Illustrative example · scope and results depend on the business</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="og-section og-workflow-section" aria-labelledby="og-workflow-title">
          <div className="og-shell">
            <div className="og-section-heading" data-guide-reveal>
              <p className="og-eyebrow">
                <span /> 02 / HOW IT WORKS
              </p>
              <h2 id="og-workflow-title">A good handoff is designed, not improvised.</h2>
              <p>
                Explore the four steps that turn an outsourcing idea into an accountable way of
                working.
              </p>
            </div>
            <div className="og-workflow" data-guide-reveal>
              <ol className="og-workflow-steps" aria-label="Outsourcing workflow">
                {workflow.map((step, index) => (
                  <li key={step.title}>
                    <button
                      type="button"
                      aria-pressed={activeWorkflow === index}
                      onClick={() => setActiveWorkflow(index)}
                    >
                      <span className="og-workflow-index">0{index + 1}</span>
                      <span>{step.title}</span>
                      <ArrowRight aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ol>
              <div className="og-workflow-detail" aria-live="polite">
                <span>STEP {String(activeWorkflow + 1).padStart(2, "0")} / 04</span>
                <h3>{selectedWorkflow.title}</h3>
                <p>{selectedWorkflow.description}</p>
                <div className="og-workflow-example">
                  <Check aria-hidden="true" />
                  <p>{selectedWorkflow.detail}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="og-section og-decision"
          id="when-to-outsource"
          aria-labelledby="og-decision-title"
        >
          <div className="og-shell og-decision-layout">
            <div data-guide-reveal>
              <p className="og-eyebrow">
                <span /> 03 / THE DECISION
              </p>
              <h2 id="og-decision-title">When might outsourcing be worth considering?</h2>
              <p className="og-lead">
                Look for a persistent operating need—not just a temporary frustration.
              </p>
            </div>
            <div className="og-decision-signals" data-guide-reveal>
              <article>
                <span>01</span>
                <p>
                  Recurring work is pushing customer response, reporting, or follow-through past the
                  standard you want.
                </p>
              </article>
              <article>
                <span>02</span>
                <p>
                  Demand is uneven, specialized, or growing faster than your current team can
                  reasonably absorb.
                </p>
              </article>
              <article>
                <span>03</span>
                <p>
                  The work can be explained, access can be controlled, and an internal owner can
                  review outcomes.
                </p>
              </article>
              <article className="og-decision-caution">
                <span>
                  <ShieldCheck aria-hidden="true" />
                </span>
                <p>
                  Pause if the work is poorly understood, highly sensitive, or depends on judgment
                  your team cannot delegate safely.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="og-section og-operations"
          id="operations"
          aria-labelledby="og-operations-title"
        >
          <div className="og-shell">
            <div className="og-section-heading og-section-heading-split" data-guide-reveal>
              <div>
                <p className="og-eyebrow">
                  <span /> 04 / THE WORK
                </p>
                <h2 id="og-operations-title">What kinds of operations can move?</h2>
              </div>
              <p>
                Routine, specialist, and support work can all be candidates when scope, quality
                checks, and decision rights are clear.
              </p>
            </div>
            <div className="og-operations-list">
              {operations.map(([title, description], index) => (
                <article key={title} data-guide-reveal>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ArrowUpRight aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="og-section og-benefits-section" aria-labelledby="og-benefits-title">
          <div className="og-shell og-benefits-layout">
            <div className="og-benefits-intro" data-guide-reveal>
              <p className="og-eyebrow">
                <span /> 05 / THE UPSIDE
              </p>
              <h2 id="og-benefits-title">The value is in the operating fit.</h2>
              <p className="og-benefit-reasons">
                Businesses often explore outsourcing to access skills, add coverage, handle changing
                demand, or give internal teams more room for core work.
              </p>
              <p>
                These are potential advantages, not automatic outcomes. Define what matters and
                evaluate it against your actual costs and workflow.
              </p>
            </div>
            <ol className="og-benefits-list">
              {benefits.map(({ label, text, icon: Icon }, index) => (
                <li key={label} data-guide-reveal>
                  <span className="og-benefit-number">0{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{label}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="og-section og-comparison"
          id="comparison"
          aria-labelledby="og-comparison-title"
        >
          <div className="og-shell">
            <div className="og-section-heading" data-guide-reveal>
              <p className="og-eyebrow">
                <span /> 06 / TWO OPERATING MODELS
              </p>
              <h2 id="og-comparison-title">
                In-house and outsourced: compare the responsibilities.
              </h2>
              <p>
                Neither model is universally better. The useful question is which arrangement fits
                the work, the risk, and the capability you need to keep close.
              </p>
            </div>
            <div
              className="og-comparison-control"
              role="group"
              aria-label="Emphasize an operating model"
            >
              <span>Emphasize</span>
              {(Object.keys(comparison) as (keyof typeof comparison)[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={comparisonView === key}
                  onClick={() => setComparisonView(key)}
                >
                  {comparison[key].label}
                </button>
              ))}
            </div>
            <div className={`og-comparison-table og-emphasis-${comparisonView}`}>
              {(Object.keys(comparison) as (keyof typeof comparison)[]).map((key) => (
                <article
                  key={key}
                  className={
                    comparisonView === key
                      ? "og-comparison-column is-emphasized"
                      : "og-comparison-column"
                  }
                  aria-label={comparison[key].label}
                >
                  <div className="og-comparison-heading">
                    <span>
                      {key === "inhouse" ? (
                        <Building2 aria-hidden="true" />
                      ) : (
                        <UsersRound aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <p>OPERATING MODEL</p>
                      <h3>{comparison[key].label}</h3>
                    </div>
                  </div>
                  <p className="og-comparison-intro">{comparison[key].intro}</p>
                  <ul>
                    {comparison[key].points.map(([title, text]) => (
                      <li key={title}>
                        <Check aria-hidden="true" />
                        <p>
                          <strong>{title}</strong>
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="og-comparison-note">
              <Zap aria-hidden="true" /> Hybrid models are common: retain sensitive decisions and
              core knowledge internally while assigning a well-defined part of the workflow
              externally.
            </p>
          </div>
        </section>

        <section className="og-section og-partner" id="partner" aria-labelledby="og-partner-title">
          <div className="og-shell og-partner-layout">
            <div data-guide-reveal>
              <p className="og-eyebrow">
                <span /> 07 / DUE DILIGENCE
              </p>
              <h2 id="og-partner-title">Choose a partner by how they work.</h2>
              <p className="og-lead">
                A credible conversation should make delivery, accountability, and risk easier to
                understand—not harder.
              </p>
              <a className="og-text-link" href="/why-quorisx/quality-security">
                Explore our quality and security approach <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <ol className="og-partner-checklist">
              {partnerChecks.map((check, index) => (
                <li key={check} data-guide-reveal>
                  <span>0{index + 1}</span>
                  <p>{check}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="og-section og-challenges" aria-labelledby="og-challenges-title">
          <div className="og-shell og-challenges-layout">
            <div data-guide-reveal>
              <p className="og-eyebrow">
                <span /> 08 / WHAT TO WATCH
              </p>
              <h2 id="og-challenges-title">Common friction—and how to prevent it.</h2>
              <p>
                Most problems are easier to prevent while designing the relationship than to repair
                after work is underway.
              </p>
            </div>
            <div className="og-disclosures">
              {challenges.map(({ title, text }, index) => (
                <details key={title} data-guide-reveal>
                  <summary>
                    <span>0{index + 1}</span>
                    {title}
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="og-section og-faq" id="questions" aria-labelledby="og-faq-title">
          <div className="og-shell og-faq-layout">
            <div data-guide-reveal>
              <p className="og-eyebrow">
                <span /> 09 / QUICK ANSWERS
              </p>
              <h2 id="og-faq-title">Frequently asked questions.</h2>
              <p>
                Start with these practical answers, then validate details against your own operating
                and regulatory requirements.
              </p>
            </div>
            <div className="og-disclosures">
              {faqs.map(([question, answer], index) => (
                <details key={question} data-guide-reveal>
                  <summary>
                    <span>0{index + 1}</span>
                    {question}
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="og-next-step" aria-labelledby="og-next-title">
          <div className="og-shell og-next-inner" data-guide-reveal>
            <div>
              <p className="og-eyebrow">
                <span /> KEEP EXPLORING
              </p>
              <h2 id="og-next-title">Good outsourcing starts with a well-defined need.</h2>
              <p>
                Explore the business functions Quorisx supports, and compare them with the work your
                team wants to move.
              </p>
            </div>
            <a href="/#outsourcing">
              Explore outsourcing solutions <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
