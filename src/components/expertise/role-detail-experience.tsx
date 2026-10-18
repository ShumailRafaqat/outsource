import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

import { SiteHeader } from "@/components/site-header";

import { roleDetailContent } from "./role-detail-content";
import { expertiseFunctions, financeAccountingFunction } from "./data";
import type { FunctionGroup, Role } from "./data";
import "./role-detail-experience.css";

const layoutNames = [
  "studio",
  "signal",
  "editorial",
  "control-room",
  "field-notes",
  "blueprint",
  "dispatch",
  "workbench",
] as const;

const workflowLabels: Record<string, readonly [string, string, string]> = {
  "/expertise/finance-accounting": [
    "Prepare the record",
    "Validate the detail",
    "Ready for approval",
  ],
  "/expertise/hr-people-operations": [
    "Open the case",
    "Coordinate the people step",
    "Record the outcome",
  ],
  "/expertise/sales-development": ["Qualify the signal", "Move the work", "Close the loop"],
  "/expertise/marketing-creative": ["Shape the brief", "Create and publish", "Review the signal"],
  "/expertise/customer-service": ["Receive and route", "Resolve with care", "Record and improve"],
  "/expertise/software-dev": ["Scope the change", "Build with review", "Verify and hand off"],
};

const benefitSets: Record<string, readonly [string, string, string]> = {
  "/expertise/finance-accounting": [
    "Keep recurring invoice, reconciliation, or payroll preparation moving to agreed cutoffs.",
    "Surface exceptions with the source detail intact so authorized reviewers can decide.",
    "Add process capacity without delegating payment, accounting, or approval authority.",
  ],
  "/expertise/hr-people-operations": [
    "Keep candidate, employee, and credential records organized across recurring workflows.",
    "Make pending documents, interview steps, and follow-ups visible to the people owner.",
    "Add coordination capacity while hiring and employee decisions remain with your team.",
  ],
  "/expertise/sales-development": [
    "Give sellers more time for discovery, negotiation, and customer conversations.",
    "Keep prospect and opportunity context visible instead of trapped in scattered follow-ups.",
    "Add capacity for repeatable pipeline work while your team owns qualification rules and deal decisions.",
  ],
  "/expertise/marketing-creative": [
    "Move recurring production and publishing work forward between planning cycles.",
    "Keep briefs, approvals, versions, and channel deadlines easier to follow.",
    "Add execution capacity while your team retains brand direction and final approvals.",
  ],
  "/expertise/customer-service": [
    "Give each inbound request a clear owner and a consistent next step.",
    "Make escalations easier to act on with useful case notes and prior troubleshooting.",
    "Plan queue coverage around the channels and hours agreed for the role.",
  ],
  "/expertise/software-dev": [
    "Add focused implementation capacity against a backlog your team prioritizes.",
    "Keep changes reviewable with tests, documentation, and clear handoffs.",
    "Scale a defined skill set while your team retains architecture and release control.",
  ],
};

const signalSets: Record<
  string,
  readonly [readonly [string, string], readonly [string, string], readonly [string, string]]
> = {
  "/expertise/finance-accounting": [
    ["Cycle readiness", "Required source documents received before the agreed cutoff."],
    ["Exception aging", "Unmatched or disputed items routed with context and an owner."],
    ["Review trail", "Entries and reconciliations ready for authorized approval."],
  ],
  "/expertise/hr-people-operations": [
    ["Record completeness", "Required candidate or employee documents present and current."],
    ["Process movement", "Open interview, onboarding, or credential steps have a next owner."],
    ["Escalation quality", "Exceptions include the supporting facts needed for HR review."],
  ],
  "/expertise/sales-development": [
    ["Fit and data quality", "Research or CRM records meet the agreed qualification fields."],
    ["Follow-through", "Next steps and meeting details are logged within the agreed window."],
    ["Handoff readiness", "Sales receives the source context and open questions, not just a name."],
  ],
  "/expertise/marketing-creative": [
    ["On-time delivery", "Approved campaign, content, or asset milestones meet the calendar."],
    ["Production quality", "Links, formats, brand requirements, and approvals are checked."],
    ["Learning loop", "Useful channel or campaign signals are summarized for the next cycle."],
  ],
  "/expertise/customer-service": [
    ["Queue ownership", "Requests are categorized and assigned within agreed coverage hours."],
    ["Resolution quality", "Cases follow the approved guidance and include useful notes."],
    ["Escalation readiness", "Exceptions reach the right owner with customer context attached."],
  ],
  "/expertise/software-dev": [
    ["Delivery flow", "Work items move through reviewable, agreed development stages."],
    ["Change quality", "Tests, peer review, and acceptance checks match the team's standard."],
    ["Handoff readiness", "Changes include clear notes, known limitations, and release context."],
  ],
};

const benefitIcons: readonly LucideIcon[] = [ArrowDownRight, Check, ArrowUpRight];
const rolePageGroups = [...expertiseFunctions, financeAccountingFunction];

function getLayoutIndex(title: string, groupHref: string) {
  const key = `${groupHref}/${title}`;
  let hash = 0;
  for (const character of key) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }
  return hash % layoutNames.length;
}

function getSignals(
  groupHref: string,
): readonly [readonly [string, string], readonly [string, string], readonly [string, string]] {
  return (
    signalSets[groupHref] ?? [
      ["Completion", "Agreed tasks are completed and recorded in the shared workflow."],
      ["Quality", "Exceptions are documented and returned for the right review."],
      ["Handoff", "The next owner has the context and status needed to continue."],
    ]
  );
}

function getStageLabels(groupHref: string): readonly [string, string, string] {
  return workflowLabels[groupHref] ?? ["Prepare the work", "Own the next step", "Close the loop"];
}

function getBenefitCopy(groupHref: string): readonly [string, string, string] {
  return (
    benefitSets[groupHref] ?? [
      "Give recurring work a clear owner and a repeatable way to get done.",
      "Keep requests, decisions, and handoffs visible to the people who need them.",
      "Add role-specific capacity while your team retains priorities and approvals.",
    ]
  );
}

function getRolePageNumber(group: FunctionGroup, role: Role) {
  let precedingRoles = 0;
  for (const candidateGroup of rolePageGroups) {
    if (candidateGroup.href === group.href) {
      const roleIndex = candidateGroup.roles.findIndex((item) => item.title === role.title);
      if (roleIndex < 0) break;
      return precedingRoles + roleIndex + 1;
    }
    precedingRoles += candidateGroup.roles.length;
  }
  throw new Error(`Role page order is missing for "${role.title}".`);
}

export function RoleDetailExperience({ group, role }: { group: FunctionGroup; role: Role }) {
  const content = roleDetailContent[role.title];
  if (!content) {
    throw new Error(`Role detail content is missing for "${role.title}".`);
  }

  const layoutIndex = getLayoutIndex(role.title, group.href);
  const layout = layoutNames[layoutIndex] ?? layoutNames[0];
  const pageNumber = getRolePageNumber(group, role);
  const roleStyle: CSSProperties & { "--role-page-rotation": string } = {
    "--role-page-rotation": `${(pageNumber * 47) % 360}deg`,
  };
  const RoleIcon = group.icon;
  const stageLabels = getStageLabels(group.href);
  const benefits = getBenefitCopy(group.href);
  const signals = getSignals(group.href);
  const orderedSections = layoutIndex % 3;

  const workSection = (
    <section
      key="work"
      className="role-detail-work"
      id="role-work"
      aria-labelledby="role-work-heading"
    >
      <div className="role-detail-section-heading">
        <p className="role-detail-kicker">THE ROLE, IN PRACTICE</p>
        <h2 id="role-work-heading">What {role.title} takes off your team’s plate</h2>
        <p>{role.description}</p>
      </div>
      <ol className="role-detail-responsibilities">
        {content.responsibilities.map((responsibility, index) => (
          <li key={responsibility}>
            <span className="role-detail-responsibility-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{responsibility}</p>
            <ArrowUpRight aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>
  );

  const workflowSection = (
    <section
      key="workflow"
      className="role-detail-workflow"
      id="role-workflow"
      aria-labelledby="role-flow-heading"
    >
      <div className="role-detail-section-heading">
        <p className="role-detail-kicker">A REAL WORKING RHYTHM</p>
        <h2 id="role-flow-heading">How the work moves</h2>
        <p>
          A practical loop shaped around your tools, approval points, and the people this role
          supports.
        </p>
      </div>
      <ol className="role-detail-flow">
        {content.responsibilities.map((responsibility, index) => (
          <li key={responsibility}>
            <span className="role-detail-flow-step">
              {String(index + 1).padStart(2, "0")}
              <span aria-hidden="true" />
            </span>
            <div>
              <p className="role-detail-flow-label">{stageLabels[index]}</p>
              <h3>{stageLabels[index]}</h3>
              <p>{responsibility}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );

  const benefitSection = (
    <section
      key="benefits"
      className="role-detail-benefits"
      id="role-benefits"
      aria-labelledby="role-benefits-heading"
    >
      <div className="role-detail-benefits-intro">
        <p className="role-detail-kicker">WHY ADD THIS ROLE</p>
        <h2 id="role-benefits-heading">More capacity. Clearer ownership.</h2>
        <p>
          Outsourcing is most useful when the responsibilities are explicit and the handoffs fit
          your team's real workflow.
        </p>
      </div>
      <ul>
        {benefits.map((benefit, index) => {
          const BenefitIcon = benefitIcons[index] ?? Check;
          return (
            <li key={benefit}>
              <BenefitIcon aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );

  const sectionOrders = [
    [workSection, workflowSection, benefitSection],
    [workflowSection, benefitSection, workSection],
    [benefitSection, workSection, workflowSection],
  ];
  const sections = sectionOrders[orderedSections] ?? sectionOrders[0] ?? [];

  return (
    <div
      className={`role-detail role-detail--${layout}`}
      data-role-layout={layout}
      data-role-page={pageNumber}
      style={roleStyle}
    >
      <SiteHeader />
      <main data-disable-hero-reveal>
        <section className="role-detail-hero" aria-labelledby="role-detail-heading">
          <div className="role-detail-hero-copy">
            <a className="role-detail-back" href={group.href}>
              <ArrowRight aria-hidden="true" />
              Explore {group.label}
            </a>
            <p className="role-detail-kicker">
              <span /> {group.label} / ROLE PROFILE
            </p>
            <h1 id="role-detail-heading">{role.title}</h1>
            <p className="role-detail-hero-description">{role.description}</p>
            <div className="role-detail-hero-actions">
              <a className="role-detail-primary-link" href="/contact#inquiry">
                Discuss this role <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="role-detail-secondary-link" href="#role-work">
                See how it works
              </a>
            </div>
            <div className="role-detail-hero-meta">
              <span>ROLE-READY SUPPORT</span>
              <span>01 — {String(layoutIndex + 1).padStart(2, "0")}</span>
            </div>
          </div>

          <aside className="role-detail-visual" aria-label={`${role.title} workflow preview`}>
            <div className="role-detail-visual-topline">
              <span>QUORISX / {group.label.toUpperCase()}</span>
              <span>WORKFLOW PREVIEW</span>
            </div>
            <div className="role-detail-visual-title">
              <span className="role-detail-visual-symbol">
                <RoleIcon aria-hidden="true" />
              </span>
              <div>
                <p>ROLE SNAPSHOT</p>
                <h2>{role.title}</h2>
              </div>
            </div>
            <div className="role-detail-visual-track" aria-hidden="true">
              {content.responsibilities.map((responsibility, index) => (
                <span className="role-detail-visual-node" key={responsibility}>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <b>{responsibility}</b>
                </span>
              ))}
            </div>
            <p className="role-detail-visual-footer">
              <span /> RESPONSIBILITIES BUILT AROUND YOUR OPERATION
            </p>
          </aside>
        </section>

        <div className="role-detail-sections">{sections}</div>

        <section className="role-detail-signals" aria-labelledby="role-signals-heading">
          <div>
            <p className="role-detail-kicker">INSIGHTS TO AGREE ON</p>
            <h2 id="role-signals-heading">Make the work measurable, not mysterious.</h2>
            <p>
              These are example operating signals, not promised results. Set the baseline, target,
              and reporting cadence together for the actual scope.
            </p>
          </div>
          <ol>
            {signals.map(([label, description], index) => (
              <li key={label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{label}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="role-detail-close" aria-labelledby="role-close-heading">
          <p className="role-detail-kicker">START WITH THE WORK YOU NEED DONE</p>
          <h2 id="role-close-heading">Let’s shape this role around your team.</h2>
          <p>
            Share the tasks, tools, and handoffs that matter. We’ll help define a practical role
            scope before you decide how to staff it.
          </p>
          <a href="/contact#inquiry">
            Talk through the role <ArrowRight aria-hidden="true" />
          </a>
        </section>
      </main>
    </div>
  );
}
