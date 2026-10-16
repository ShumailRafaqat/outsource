import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CircleAlert,
  Eye,
  GraduationCap,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

const safeguards = [
  {
    icon: BadgeCheck,
    title: "Quality assurance",
    summary: "Structured reviews and performance tracking.",
    detail:
      "Agree on practical expectations for the work, then use reviews and feedback loops to keep delivery aligned.",
  },
  {
    icon: UsersRound,
    title: "Clear ownership",
    summary: "Defined team leads and reporting lines.",
    detail:
      "Understand who is responsible for daily coordination, updates, and decisions throughout the engagement.",
  },
  {
    icon: CircleAlert,
    title: "Escalation paths",
    summary: "Know how issues are raised and handled.",
    detail:
      "Set an agreed communication and escalation process so concerns reach the right people promptly.",
  },
  {
    icon: GraduationCap,
    title: "Role-based onboarding",
    summary: "Prepare professionals for your tools and standards.",
    detail:
      "Plan onboarding around the role, client workflows, systems, and requirements before work begins.",
  },
  {
    icon: LockKeyhole,
    title: "Confidentiality and access",
    summary: "Set expectations for client data and systems.",
    detail:
      "Agree confidentiality and data-handling expectations, and provide access appropriate to the work and role.",
  },
  {
    icon: RefreshCw,
    title: "Continuity planning",
    summary: "Plan for changes, coverage, and evolving needs.",
    detail:
      "Discuss coverage and handoffs as part of the engagement so work can adapt when team or business needs change.",
  },
];

const deliveryPractices = [
  {
    number: "01",
    title: "Define the scope",
    description:
      "Document the work, responsibilities, systems, and expectations that apply to the engagement.",
  },
  {
    number: "02",
    title: "Agree safeguards",
    description:
      "Clarify confidentiality, data handling, access, communication, and escalation requirements.",
  },
  {
    number: "03",
    title: "Set up the team",
    description:
      "Align onboarding and role requirements with the workflows and tools needed for the work.",
  },
  {
    number: "04",
    title: "Review and adapt",
    description:
      "Use agreed check-ins and feedback to review delivery and address changing requirements.",
  },
];

export function QualitySecurityPage() {
  const [expandedSafeguard, setExpandedSafeguard] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="overflow-hidden bg-ink px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-5">Why Quorisx</p>
              <h1 className="max-w-4xl font-display text-5xl leading-[1.04] text-ink-foreground sm:text-6xl md:text-7xl">
                Quality &amp; Security
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
                Clear ownership, practical safeguards, and regular communication help keep every
                engagement aligned with the work and requirements agreed with you.
              </p>
              <a
                href="#safeguards"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore our approach <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-ink-border bg-ink-foreground/[0.035] p-6 md:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-accent/15"
              />
              <div className="relative">
                <span className="inline-flex rounded-xl bg-accent/15 p-3 text-accent">
                  <ShieldCheck aria-hidden="true" className="h-7 w-7" />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Built into the engagement
                </p>
                <h2 className="mt-3 font-display text-3xl text-ink-foreground">
                  People. Process. Protection.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Scope, safeguards, and responsibilities are discussed and documented for the
                  services being provided.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-ink-border pt-5">
                  {["Ownership", "Access", "Reviews"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-ink-border px-3 py-2 text-center text-xs font-semibold text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="safeguards" className="scroll-mt-24 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">How we work</p>
              <h2 className="font-display text-3xl leading-tight md:text-5xl">
                Oversight built into every engagement.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Select a safeguard to see how it can be addressed as part of your engagement.
                Specific practices are agreed based on the role, service scope, and client
                requirements.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
              <div className="grid gap-3 sm:grid-cols-2">
                {safeguards.map(({ icon: Icon, title, summary }, index) => {
                  const isExpanded = expandedSafeguard === index;

                  return (
                    <button
                      key={title}
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls="safeguard-detail"
                      onClick={() =>
                        setExpandedSafeguard((current) => (current === index ? null : index))
                      }
                      className={`rounded-xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isExpanded ? "border-accent/60 bg-accent/[0.05]" : "bg-card"
                      }`}
                    >
                      <span
                        className={`inline-flex rounded-lg p-3 ${
                          isExpanded
                            ? "bg-accent text-accent-foreground"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="mt-4 block font-display text-xl">{title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {summary}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div
                id="safeguard-detail"
                aria-live="polite"
                className="flex min-h-64 flex-col justify-between rounded-2xl bg-ink p-6 text-ink-foreground md:p-8"
              >
                {expandedSafeguard === null ? (
                  <>
                    <div>
                      <p className="eyebrow mb-4">Your requirements matter</p>
                      <h3 className="font-display text-3xl">Designed around the agreed scope.</h3>
                      <p className="mt-3 leading-relaxed text-ink-muted">
                        Choose any safeguard to explore how quality and security expectations can be
                        addressed in an engagement.
                      </p>
                    </div>
                    <ShieldCheck aria-hidden="true" className="mt-8 h-8 w-8 text-accent" />
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                        Safeguard 0{expandedSafeguard + 1}
                      </p>
                      <h3 className="mt-3 font-display text-3xl">
                        {safeguards[expandedSafeguard].title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-ink-muted">
                        {safeguards[expandedSafeguard].detail}
                      </p>
                    </div>
                    <p className="mt-8 border-t border-ink-border pt-4 text-sm text-ink-muted">
                      Agreed to fit the engagement, role, and client requirements.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">A clear working process</p>
              <h2 className="font-display text-3xl leading-tight md:text-5xl">
                From requirements to ongoing review.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Security and quality expectations depend on the work and systems involved. They
                should be discussed before access is provided and reflected in the applicable
                agreements and procedures.
              </p>
              <a
                href="/contact#inquiry"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Discuss your requirements <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {deliveryPractices.map((practice) => (
                <li key={practice.number} className="rounded-xl border bg-card p-5 md:p-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-accent">
                    STEP {practice.number}
                  </p>
                  <h3 className="mt-3 font-display text-xl">{practice.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {practice.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-7xl rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 md:p-9">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Eye aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-2xl">Transparent about requirements</h2>
                <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                  U.S. contracting alone does not determine data residency or guarantee regulatory
                  compliance. Applicable requirements depend on the services, systems,
                  jurisdictions, and client agreements. We discuss the relevant requirements and
                  scope with you before the engagement begins.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
