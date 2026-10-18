import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Bot,
  Check,
  ClipboardCheck,
  Clock3,
  Database,
  FileBarChart,
  GitBranch,
  Headset,
  MessageSquareText,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { ExpertiseScrollMotion } from "@/components/expertise/expertise-scroll-motion";

import "./ai-automation.css";

const capabilities: [string, string, LucideIcon][] = [
  [
    "Customer support & instant replies",
    "Answer common questions quickly and route requests to the right place.",
    MessageSquareText,
  ],
  [
    "Lead follow-up & nurturing",
    "Respond consistently and keep promising leads moving forward.",
    Bell,
  ],
  [
    "Data entry & admin tasks",
    "Reduce repetitive copying, updates, and routine data handling.",
    Database,
  ],
  [
    "Internal workflows & approvals",
    "Keep work moving with clear hand-offs, rules, and notifications.",
    GitBranch,
  ],
  [
    "Appointment booking & reminders",
    "Help customers book and show up with timely confirmations.",
    Clock3,
  ],
  [
    "CRM updates & notifications",
    "Keep customer records current and your team informed.",
    ClipboardCheck,
  ],
  [
    "Report generation",
    "Bring information together into useful, repeatable reports.",
    FileBarChart,
  ],
  [
    "Live support integration",
    "Connect smart assistance with real-agent support when needed.",
    Headset,
  ],
];

const benefits = [
  "Faster responses to customers",
  "Fewer missed leads and follow-ups",
  "Less repetitive work for your team",
  "More consistent processes",
  "Handle more volume without immediately hiring",
  "Make better use of your team’s time",
  "Clearer tracking and reporting",
];

const processSteps = [
  ["Understand your workflows", "We study how your team works today and where time is being lost."],
  ["Identify opportunities", "We find tasks that can be automated or improved with AI."],
  [
    "Design the right solution",
    "We plan a practical system for your business—not unnecessary complexity.",
  ],
  ["Build & integrate", "We develop the automation and connect it with the tools you already use."],
  ["Test & launch", "We check the complete workflow before it goes live."],
  ["Support & improve", "We stay available to make adjustments as your needs change."],
];

const fitSignals = [
  "You receive the same customer questions repeatedly",
  "Lead follow-ups are easy to miss",
  "Internal processes still depend on manual steps",
  "You want to scale without immediately increasing headcount",
  "You need faster, more consistent operations",
];

export function AiAutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <ExpertiseScrollMotion pageKey="ai-automation">
        <main className="ai-page">
          <section className="ai-hero" aria-labelledby="ai-hero-title">
            <div className="ai-hero-glow" aria-hidden="true" />
            <div className="ai-container ai-hero-layout">
              <div className="ai-hero-copy">
                <p className="ai-eyebrow">
                  <span /> AI &amp; AUTOMATION
                </p>
                <h1 id="ai-hero-title">
                  Still Doing Manually
                  <br />
                  <em>What AI Can Handle?</em>
                </h1>
                <p className="ai-hero-lead">
                  Your team spends hours every week on repetitive work.
                </p>
                <p className="ai-hero-description">
                  AI and automation can take that load—so you can focus on growth.
                </p>
                <div className="ai-hero-actions">
                  <a className="ai-button" href="/contact#inquiry">
                    Talk to Our Team <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a className="ai-button ai-button-outline" href="#ai-capabilities">
                    See What’s Possible <ArrowDown aria-hidden="true" />
                  </a>
                </div>
              </div>
              <aside
                className="ai-flow-card"
                aria-label="Example of a connected automated workflow"
              >
                <div className="ai-flow-card-top">
                  <span className="ai-status-dot" />
                  <span>A MORE CONNECTED WORKFLOW</span>
                  <span>01—04</span>
                </div>
                <div className="ai-flow-trigger">
                  <span className="ai-flow-icon">
                    <MessageSquareText aria-hidden="true" />
                  </span>
                  <span>
                    <strong>New enquiry received</strong>
                    <small>A customer gets in touch</small>
                  </span>
                  <ArrowRight aria-hidden="true" />
                </div>
                <div className="ai-flow-connector" aria-hidden="true" />
                <div className="ai-flow-step">
                  <span className="ai-flow-icon">
                    <Bot aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Respond &amp; route</strong>
                    <small>Relevant details go to your CRM</small>
                  </span>
                  <Check aria-hidden="true" />
                </div>
                <div className="ai-flow-connector" aria-hidden="true" />
                <div className="ai-flow-step">
                  <span className="ai-flow-icon">
                    <Bell aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Team notified</strong>
                    <small>Follow-up stays on track</small>
                  </span>
                  <Check aria-hidden="true" />
                </div>
                <p className="ai-flow-foot">Less manual coordination. A clearer next step.</p>
              </aside>
            </div>
            <a className="ai-scroll-cue" href="#ai-problem">
              Scroll to explore <ArrowDown aria-hidden="true" />
            </a>
          </section>

          <section
            className="ai-section ai-problem"
            id="ai-problem"
            aria-labelledby="ai-problem-title"
          >
            <div className="ai-container ai-problem-layout">
              <div>
                <p className="ai-eyebrow">
                  <span /> 01 / THE PROBLEM
                </p>
                <h2 id="ai-problem-title">
                  Busy Doesn’t Always
                  <br />
                  <em>Mean Productive.</em>
                </h2>
              </div>
              <div className="ai-problem-copy">
                <p>
                  Most businesses are stuck doing the same manual tasks every day—replying to the
                  same questions, following up with leads, entering data, updating sheets, and
                  managing routine processes.
                </p>
                <p>These tasks don’t need your best people. But they still consume their time.</p>
                <div className="ai-problem-outcome">
                  <span>THE RESULT</span>
                  <p>
                    Slower responses, missed follow-ups, and less time for work that grows the
                    business.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="ai-section ai-status" aria-labelledby="ai-status-title">
            <div className="ai-container">
              <div className="ai-section-heading">
                <p className="ai-eyebrow">
                  <span /> 02 / TWO TYPES OF BUSINESSES
                </p>
                <h2 id="ai-status-title">
                  Where Does Your Business
                  <br />
                  <em>Stand Today?</em>
                </h2>
              </div>
              <div className="ai-status-grid">
                <article className="ai-status-card">
                  <span className="ai-card-index">01 / STARTING POINT</span>
                  <span className="ai-status-icon">
                    <Workflow aria-hidden="true" />
                  </span>
                  <h3>Everything is still manual</h3>
                  <p>
                    Your team is handling repetitive work that software can do faster and more
                    consistently. Response time suffers, and scaling can mean hiring more people.
                  </p>
                  <div className="ai-status-note">
                    Time gets pulled away from higher-value work.
                  </div>
                </article>
                <article className="ai-status-card">
                  <span className="ai-card-index">02 / TOOLS WITHOUT A SYSTEM</span>
                  <span className="ai-status-icon">
                    <GitBranch aria-hidden="true" />
                  </span>
                  <h3>You’ve added some tools</h3>
                  <p>
                    You might use a few tools, but they’re not properly connected or automated. Your
                    team still ends up managing the process instead of benefiting from it.
                  </p>
                  <div className="ai-status-note">
                    Disconnected tools create more work, not less.
                  </div>
                </article>
              </div>
              <p className="ai-status-takeaway">
                In both cases, time and efficiency are being lost.
              </p>
            </div>
          </section>

          <section
            className="ai-section ai-capabilities"
            id="ai-capabilities"
            aria-labelledby="ai-capabilities-title"
          >
            <div className="ai-container">
              <div className="ai-section-heading ai-section-heading-split">
                <div>
                  <p className="ai-eyebrow">
                    <span /> 03 / WHAT AI &amp; AUTOMATION CAN DO
                  </p>
                  <h2 id="ai-capabilities-title">
                    Make routine work
                    <br />
                    <em>run more smoothly.</em>
                  </h2>
                </div>
                <p>
                  We find practical ways to automate work, connect your tools, and make everyday
                  processes easier to manage.
                </p>
              </div>
              <div className="ai-capabilities-grid">
                {capabilities.map(([title, description, Icon], index) => (
                  <article className="ai-capability-card" key={title}>
                    <span className="ai-card-index">0{index + 1}</span>
                    <span className="ai-capability-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="ai-benefits" aria-labelledby="ai-benefits-title">
            <div className="ai-container ai-benefits-layout">
              <div className="ai-benefits-copy">
                <p className="ai-eyebrow">
                  <span /> 04 / THE BENEFITS
                </p>
                <h2 id="ai-benefits-title">
                  What Changes After
                  <br />
                  <em>Automation?</em>
                </h2>
                <p>
                  The aim isn’t to add technology for its own sake. It’s to give your team time back
                  and make important work more reliable.
                </p>
              </div>
              <ul className="ai-benefit-list">
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check aria-hidden="true" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="ai-section ai-process" aria-labelledby="ai-process-title">
            <div className="ai-container ai-process-layout">
              <div className="ai-process-heading">
                <p className="ai-eyebrow">
                  <span /> 05 / HOW WE WORK
                </p>
                <h2 id="ai-process-title">
                  Thoughtful automation.
                  <br />
                  <em>From first look to live.</em>
                </h2>
                <p>
                  A practical, step-by-step approach keeps the solution useful, connected, and ready
                  for your team.
                </p>
              </div>
              <ol className="ai-timeline">
                {processSteps.map(([title, description], index) => (
                  <li key={title}>
                    <span className="ai-step-number">0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="ai-section ai-fit" aria-labelledby="ai-fit-title">
            <div className="ai-container ai-fit-layout">
              <div>
                <p className="ai-eyebrow">
                  <span /> 06 / WHO IT’S FOR
                </p>
                <h2 id="ai-fit-title">
                  Could your business
                  <br />
                  <em>benefit from automation?</em>
                </h2>
                <p>It may be a good fit if any of these sound familiar:</p>
              </div>
              <ul className="ai-fit-list">
                {fitSignals.map((signal) => (
                  <li key={signal}>
                    <Check aria-hidden="true" /> {signal}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="ai-cta" aria-labelledby="ai-cta-title">
            <div className="ai-container ai-cta-inner">
              <div>
                <p className="ai-eyebrow">
                  <span /> YOUR NEXT STEP
                </p>
                <h2 id="ai-cta-title">
                  Stop Losing Time on Work
                  <br />
                  <em>That Can Be Automated.</em>
                </h2>
                <p>
                  Let’s look at your current processes and show you where AI and automation can save
                  time and improve results.
                </p>
              </div>
              <a className="ai-button" href="/contact#inquiry">
                Talk to Our Team <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </section>
        </main>
      </ExpertiseScrollMotion>
    </div>
  );
}
