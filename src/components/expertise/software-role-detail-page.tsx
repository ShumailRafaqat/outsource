import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Bot,
  Braces,
  Bug,
  Check,
  Cloud,
  ChevronDown,
  Code2,
  ClipboardCheck,
  Database,
  FileText,
  GitBranch,
  Headset,
  Layers3,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import "./software-role-detail-page.css";
import { softwareDevelopmentFunction } from "./data/software-development";
import { toRoleSlug } from "./data/to-role-slug";
import type { Role } from "./data/types";
import { getSoftwareRoleContent } from "./software-role-content";
import { SoftwareRoleWorkPreview } from "./software-role-work-preview";
import { getSoftwareRoleVisual } from "./software-role-visuals";

const collaborationSteps = [
  ["Kickoff", "Agree the role boundary, outcomes, tools, owners, and working rhythm."],
  [
    "Requirements and access",
    "Share the brief, examples, environment, and least-privilege access your owner approves.",
  ],
  [
    "Task assignment",
    "Your team prioritizes work and defines acceptance checks; the specialist raises missing decisions.",
  ],
  [
    "Build and collaborate",
    "Work moves through your existing tickets, code review, and communication channels.",
  ],
  [
    "Progress and review",
    "Receive agreed status updates covering completed work, next steps, blockers, and decisions needed.",
  ],
  [
    "Handoff",
    "Changes, evidence, documentation, and known limitations go to the owner responsible for approval.",
  ],
] as const;

const generalFaqs = [
  [
    "Who assigns the specialist's work?",
    "Your team sets priorities, acceptance criteria, and decision owners. The specialist handles agreed tasks and flags dependencies rather than setting product direction independently.",
  ],
  [
    "Can working hours overlap with our timezone?",
    "Overlap and communication windows are discussed during role planning and confirmed against the engagement and availability. Specific hours are not assumed until agreed.",
  ],
  [
    "How are access and confidentiality handled?",
    "Your organization defines access, confidentiality terms, and approved environments. Use individual accounts and least-privilege access where your systems support them; production permissions stay with your authorized owners.",
  ],
  [
    "What reporting should we expect?",
    "Agree a cadence and channel at kickoff. Updates can cover completed items, next tasks, blockers, review requests, and relevant test or handoff evidence.",
  ],
  [
    "What does onboarding involve?",
    "Plan an introduction to the product, role boundaries, tools, repositories or systems, coding or operating standards, access approvals, and the first prioritized tasks.",
  ],
  [
    "What if the scope changes?",
    "Review the new request with your owner and the Quorisx team before work proceeds. Confirm skill fit, priority, effort, schedule, and any commercial changes rather than assuming capacity.",
  ],
  [
    "Can we combine roles or add capacity later?",
    "A dedicated team can combine complementary roles when the work calls for them. Responsibilities, dependencies, and total capacity are agreed before adding people or changing the model.",
  ],
  [
    "What is the replacement process?",
    "Fit concerns and any replacement terms are discussed through the agreed engagement process. Timing, availability, and transition arrangements are confirmed for the specific engagement; no unconditional replacement guarantee is implied.",
  ],
] as const;

const deliverableIcons: LucideIcon[] = [FileText, GitBranch, ClipboardCheck, Layers3];

function toolIcon(tool: string): LucideIcon {
  const name = tool.toLowerCase();

  if (/(swift|kotlin|flutter|react native|android|xcode)/.test(name)) return Smartphone;
  if (/(api|rest|openapi|postman|oauth|json)/.test(name)) return Braces;
  if (/(salesforce|hubspot|dynamics)/.test(name)) return Workflow;
  if (/(jira|testrail|browserstack|playwright|cypress|jest)/.test(name)) return Bug;
  if (/(aws|azure|docker|terraform|airflow)/.test(name)) return Cloud;
  if (/(servicenow|service management|freshservice)/.test(name)) return Headset;
  if (/(datadog|sentry|dependabot)/.test(name)) return Activity;
  if (/(openai|anthropic|langchain|langgraph|dialogflow|botpress|rasa|n8n|make)/.test(name)) {
    return Bot;
  }
  if (/(sql|postgres|mysql|snowflake|rds|dbt)/.test(name)) return Database;
  if (/(power bi|tableau|excel)/.test(name)) return Activity;
  return Code2;
}

function roleHref(role: Role) {
  return `${softwareDevelopmentFunction.href}/${toRoleSlug(role.title)}`;
}

function hireRoleLabel(title: string) {
  return `Hire ${/^(AI|API)/.test(title) ? "an" : "a"} ${title}`;
}

export function SoftwareRoleDetailPage({ role }: { role: Role }) {
  const content = getSoftwareRoleContent(role.title);

  if (!content) {
    throw new Error(`Software role content is missing for "${role.title}".`);
  }

  const visual = getSoftwareRoleVisual(role.title);

  if (!visual) {
    throw new Error(`Software role visual is missing for "${role.title}".`);
  }

  const roleIndex = softwareDevelopmentFunction.roles.findIndex(
    (item) => item.title === role.title,
  );
  const relatedRoles = Array.from({ length: 3 }, (_, offset) => {
    const relatedIndex = (roleIndex + offset + 1) % softwareDevelopmentFunction.roles.length;
    return softwareDevelopmentFunction.roles[relatedIndex];
  }).filter((candidate): candidate is Role => candidate !== undefined);
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://quorisx.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Software & Development",
        item: "https://quorisx.com/expertise/software-dev",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: role.title,
        item: `https://quorisx.com/expertise/software-dev/${toRoleSlug(role.title)}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main data-disable-hero-reveal>
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>

        <section className="software-role-hero relative isolate overflow-hidden bg-ink px-6 py-12 text-ink-foreground sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-44 -z-10 size-[34rem] rounded-full border border-ink-border shadow-[0_0_0_55px_rgba(255,255,255,0.02),0_0_0_110px_rgba(255,255,255,0.015)]"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-9 flex flex-wrap items-center gap-2 text-xs text-ink-muted"
              >
                <a className="transition-colors hover:text-ink-foreground" href="/">
                  Home
                </a>
                <span aria-hidden="true">/</span>
                <a
                  className="transition-colors hover:text-ink-foreground"
                  href={softwareDevelopmentFunction.href}
                >
                  Software &amp; Development
                </a>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-ink-foreground">
                  {role.title}
                </span>
              </nav>
              <p className="eyebrow mb-4 text-accent-bright">
                SOFTWARE &amp; DEVELOPMENT / ROLE PROFILE
              </p>
              <h1 className="software-role-hero__heading max-w-3xl font-display text-2xl leading-[1.1] sm:text-3xl md:text-4xl">
                {role.title}
                <span className="mt-3 block text-accent-bright">{content.headline}</span>
              </h1>
              <p className="software-role-hero__description mt-5 max-w-2xl text-xs leading-relaxed text-ink-muted sm:text-sm">
                {content.value}
              </p>
              <div className="software-role-hero__actions mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`/contact?role=${encodeURIComponent(role.title)}#inquiry`}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {hireRoleLabel(role.title)}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#role-work"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-foreground underline decoration-ink-muted/60 underline-offset-4 transition-colors hover:text-accent-bright"
                >
                  See What They Handle <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </div>
              <p className="software-role-hero__note mt-7 text-xs leading-relaxed text-ink-muted">
                Offshore staffing support that fits your tools and team. Work scope, schedule, and
                access are agreed with you.
              </p>
            </div>

            <SoftwareRoleWorkPreview visual={visual} />
          </div>
        </section>

        <section className="px-6 py-14 sm:py-16 lg:py-20" aria-labelledby="problems-heading">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">Where the role can help</p>
              <h2 id="problems-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Recognize the work getting stuck?
              </h2>
              <p className="mt-4 text-muted-foreground">
                These are common operational symptoms to discuss—not promises that one hire fixes
                every underlying process.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.problems.map((problem, index) => (
                <article
                  key={problem}
                  className="rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-lg sm:p-6"
                >
                  <span className="font-mono text-xs font-bold tracking-widest text-accent">
                    0{index + 1}
                  </span>
                  <p className="mt-4 text-base leading-relaxed text-foreground">{problem}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="role-work"
          className="scroll-mt-24 bg-secondary/60 px-6 py-14 sm:py-16 lg:py-20"
          aria-labelledby="responsibilities-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">What this professional handles</p>
              <h2
                id="responsibilities-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                Clear responsibilities. Clear boundaries.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {role.description} Tasks are prioritized by your team, and decisions outside the
                agreed role are escalated to the right owner.
              </p>
              <div className="mt-6 rounded-xl border border-accent/20 bg-card p-5">
                <p className="text-sm font-bold text-foreground">Scope stays explicit</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your team retains product direction, approvals, and ownership of its systems.
                  Architecture, production changes, sensitive access, and business decisions follow
                  your existing review process.
                </p>
              </div>
            </div>
            <ol className="space-y-3">
              {content.responsibilities.map((responsibility, index) => (
                <li
                  key={responsibility}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
                >
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground sm:text-base">
                    {responsibility}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-14 sm:py-16 lg:py-20" aria-labelledby="deliverables-heading">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">Tangible work products</p>
              <h2
                id="deliverables-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                What you can review and receive
              </h2>
              <p className="mt-4 text-muted-foreground">
                These are examples of artifacts the role may produce when they are included in your
                agreed scope—not guaranteed commercial outcomes.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {content.deliverables.map((deliverable, index) => {
                const Icon = deliverableIcons[index] ?? FileText;
                return (
                  <article
                    key={deliverable}
                    className="rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-lg"
                  >
                    <span className="grid size-11 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg leading-snug">{deliverable}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="bg-ink px-6 py-14 text-ink-foreground sm:py-16 lg:py-20"
          aria-labelledby="scenario-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3 text-accent-bright">Illustrative working scenario</p>
              <h2 id="scenario-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                A realistic example—not a client case study.
              </h2>
            </div>
            <ol className="mt-8 grid gap-4 lg:grid-cols-4">
              {[
                ["Before", content.scenario.before],
                ["Assigned work", content.scenario.assigned],
                ["Possible handoff", content.scenario.delivered],
                ["Your review", content.scenario.review],
              ].map(([label, description], index) => (
                <li
                  key={label}
                  className="relative rounded-xl border border-ink-border bg-white/[0.04] p-5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent-bright">
                    0{index + 1} / {label}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-14 sm:py-16 lg:py-20" aria-labelledby="collaboration-heading">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <div>
                <p className="eyebrow mb-3">How they work with your team</p>
                <h2
                  id="collaboration-heading"
                  className="font-display text-3xl leading-tight sm:text-4xl"
                >
                  A practical workflow, agreed together.
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  The specialist joins your operating rhythm. Tools, reporting cadence, access, and
                  handoff standards are selected for your environment.
                </p>
              </div>
              <ol className="relative grid gap-3 sm:grid-cols-2">
                {collaborationSteps.map(([title, description], index) => (
                  <li key={title} className="relative rounded-xl border bg-card p-5 shadow-sm">
                    <span className="font-mono text-xs font-bold tracking-widest text-accent">
                      STEP 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-display text-xl">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="bg-secondary/60 px-6 py-14 sm:py-16 lg:py-20"
          aria-labelledby="tools-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow mb-3">Tools and technologies</p>
              <h2 id="tools-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Match the stack you already use.
              </h2>
            </div>
            <div>
              <ul className="software-role-tool-list flex flex-wrap gap-3">
                {content.tools.map((tool) => {
                  const Icon = toolIcon(tool);

                  return (
                    <li
                      key={tool}
                      className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Icon
                          aria-hidden="true"
                          className="software-role-tool-icon size-4 shrink-0 text-accent"
                          strokeWidth={1.8}
                        />
                        {tool}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Examples only. Candidates are matched to the requirements you share; no individual
                is assumed to know every tool or platform listed.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:py-16 lg:py-20" aria-labelledby="engagement-heading">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">Engagement options</p>
              <h2
                id="engagement-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                Start with the capacity your work needs.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  One specialist
                </p>
                <h3 className="mt-3 font-display text-2xl">Hire One Specialist</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Add a role-matched professional to work within your team's priorities, tools, and
                  review process. Responsibilities and working arrangements are confirmed for the
                  engagement.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-foreground">
                  <li className="flex gap-2">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-accent" />
                    Defined role and reporting owner
                  </li>
                  <li className="flex gap-2">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-accent" />
                    Your team prioritizes the work
                  </li>
                </ul>
              </article>
              <article className="rounded-2xl border border-primary/20 bg-primary p-6 text-primary-foreground shadow-lg sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-bright">
                  Complementary skills
                </p>
                <h3 className="mt-3 font-display text-2xl">Build a Dedicated Team</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                  Combine complementary roles when the roadmap needs different capabilities—for
                  example development and QA, or data engineering and analysis—with
                  responsibilities, handoffs, and capacity agreed in advance.
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-accent-bright" />
                    Role boundaries and dependencies defined
                  </li>
                  <li className="flex gap-2">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-accent-bright" />
                    Team size and working rhythm agreed together
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          className="bg-secondary/60 px-6 py-14 sm:py-16 lg:py-20"
          aria-labelledby="industries-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">Industries and use cases</p>
              <h2
                id="industries-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                Apply the role to a real operating need.
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.industries.map(({ name, href, task }) => (
                <article key={name} className="rounded-xl border bg-card p-5 shadow-sm">
                  <h3 className="font-display text-xl">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{task}</p>
                  <a
                    href={href}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                  >
                    Explore industry <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Healthcare, financial, and other sensitive data access is subject to your
              organization's requirements, approved access, and applicable compliance obligations.
              No certification or compliance status is implied.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 sm:py-16 lg:py-20" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">FAQs and trust</p>
              <h2 id="faq-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Practical details before you hire.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Screening, schedule, access, and engagement terms are discussed for the specific
                role and confirmed before work begins.
              </p>
            </div>
            <div className="space-y-3">
              {[content.roleFaq, ...generalFaqs].map(([question, answer]) => (
                <details key={question} className="group rounded-xl border bg-card px-5 shadow-sm">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
                    {question}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 shrink-0 text-accent transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-ink px-6 py-14 text-ink-foreground sm:py-16 lg:py-20"
          aria-labelledby="final-cta-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow mb-3 text-accent-bright">Discuss your hiring needs</p>
              <h2
                id="final-cta-heading"
                className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl"
              >
                Add focused {role.title.toLowerCase()} capacity to your team.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
                Share the work, tools, and collaboration needs. We can discuss a role scope that
                fits your existing operation.
              </p>
            </div>
            <a
              href={`/contact?role=${encodeURIComponent(role.title)}#inquiry`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Discuss Your Hiring Needs <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="mx-auto mt-10 max-w-7xl border-t border-ink-border pt-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-display text-xl">Related software roles</h3>
              <a
                href={`${softwareDevelopmentFunction.href}#roles`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent-bright hover:underline"
              >
                All Software &amp; Development roles{" "}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {relatedRoles.map((relatedRole) => (
                <li key={relatedRole.title}>
                  <a
                    href={roleHref(relatedRole)}
                    className="inline-flex min-h-10 items-center rounded-full border border-ink-border px-4 text-xs font-semibold text-ink-muted transition-colors hover:border-accent/60 hover:text-ink-foreground"
                  >
                    {relatedRole.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
