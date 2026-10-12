import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  CircleCheck,
  Globe2,
  MapPin,
  Plane,
  UsersRound,
  Workflow,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Quorisx — U.S. Headquarters, Global Capabilities" },
      {
        name: "description",
        content:
          "Learn about Quorisx's U.S.-based business relationship, Bangkok-centered operating model, and international capabilities.",
      },
    ],
  }),
  component: AboutPage,
});

const advantages = [
  {
    icon: UsersRound,
    title: "International talent environment",
    description:
      "Bangkok brings together Thai professionals and international residents with varied professional backgrounds and experience.",
  },
  {
    icon: Globe2,
    title: "Cultural diversity",
    description:
      "The city's international business, education, hospitality, and technology communities offer broad cross-cultural exposure.",
  },
  {
    icon: Workflow,
    title: "A flexible operating structure",
    description:
      "Offshore delivery may offer cost advantages compared with some Western markets. Actual costs depend on the role, talent, office, and compliance requirements.",
  },
  {
    icon: Building2,
    title: "Established infrastructure",
    description:
      "Commercial districts, office facilities, telecommunications, and professional services support a range of business operations.",
  },
  {
    icon: Plane,
    title: "Global connectivity",
    description:
      "International air connections can make planned client visits and in-person collaboration practical.",
  },
  {
    icon: MapPin,
    title: "On-site collaboration",
    description:
      "Subject to facility availability and advance scheduling, clients may meet teams, join training, or review operations in person.",
  },
];

const contractConcepts = [
  "contracting entity",
  "invoicing",
  "service scope",
  "confidentiality",
  "cross-border data processing",
  "accountability",
] as const;

const staffingConcepts = [
  "local authorization",
  "work requirements",
  "role, talent, office, and compliance costs",
] as const;

function renderConceptText(text: string, selected: string, concepts: readonly string[]) {
  const matches = concepts
    .map((concept) => ({ concept, start: text.indexOf(concept) }))
    .filter(({ start }) => start >= 0)
    .sort((a, b) => a.start - b.start);
  const parts = [];
  let cursor = 0;

  for (const match of matches) {
    if (match.start < cursor) continue;
    if (match.start > cursor) parts.push(text.slice(cursor, match.start));
    parts.push(
      <span
        key={match.concept}
        className={
          match.concept === selected
            ? "rounded-sm bg-accent/20 text-ink-foreground underline decoration-accent decoration-2 underline-offset-4"
            : "text-ink-foreground"
        }
      >
        {text.slice(match.start, match.start + match.concept.length)}
      </span>,
    );
    cursor = match.start + match.concept.length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

function TrustTransparency() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeParty, setActiveParty] = useState<"contracting" | "delivery">("contracting");
  const [activeContractConcept, setActiveContractConcept] =
    useState<(typeof contractConcepts)[number]>("contracting entity");
  const [activeStaffingConcept, setActiveStaffingConcept] =
    useState<(typeof staffingConcepts)[number]>("local authorization");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const contractingCopy =
    "Clients can engage a U.S. contracting entity while receiving services from offshore delivery teams. Agreements should clearly describe the contracting entity, invoicing, service scope, confidentiality, cross-border data processing, and accountability.";
  const qualificationCopy =
    "U.S. contracting does not by itself mean U.S. data residency or guarantee regulatory compliance; requirements depend on the services, systems, and applicable agreements.";
  const staffingCopy =
    "Hiring and staffing arrangements are subject to applicable local authorization and work requirements. Any cost comparison depends on the role, talent, office, and compliance costs.";

  return (
    <section
      id="transparency"
      ref={sectionRef}
      data-story-visible={isVisible}
      className="trust-story scroll-mt-40 overflow-hidden bg-ink px-6 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow mb-4">TRUST THROUGH TRANSPARENCY</p>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.04] text-ink-foreground md:text-5xl xl:text-6xl">
              <span className="trust-headline-first block">Contract Locally.</span>{" "}
              <span className="trust-headline-second block text-accent">Operate Globally.</span>
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Discuss your needs <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 border-y border-ink-border py-7 md:py-9">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              A transparent operating relationship
            </p>
            <span className="hidden text-xs text-ink-muted sm:inline">
              Select either point to explore
            </span>
          </div>
          <div className="relative grid grid-cols-2 items-center gap-3 sm:gap-8">
            <svg
              aria-hidden="true"
              viewBox="0 0 800 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute left-0 top-1/2 h-12 w-full -translate-y-1/2 overflow-visible sm:h-16"
            >
              <path
                d="M80 50 C260 50 300 50 400 50 C500 50 540 50 720 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-ink-border"
              />
              <path
                d="M80 50 C260 50 300 50 400 50 C500 50 540 50 720 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="640"
                strokeDashoffset={isVisible ? "0" : "640"}
                className="trust-connection-line text-accent"
              />
            </svg>
            <button
              type="button"
              aria-pressed={activeParty === "contracting"}
              onClick={() => setActiveParty("contracting")}
              onMouseEnter={() => setActiveParty("contracting")}
              onFocus={() => setActiveParty("contracting")}
              className={`relative z-10 flex min-h-16 w-full min-w-0 items-center gap-2 justify-self-start rounded-lg border px-2 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-h-20 sm:gap-4 sm:px-5 ${
                activeParty === "contracting"
                  ? "border-accent/70 bg-ink text-ink-foreground"
                  : "border-ink-border bg-ink text-ink-muted hover:border-accent/50"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors sm:h-11 sm:w-11 ${
                  activeParty === "contracting"
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-ink-border text-ink-muted"
                }`}
              >
                <Building2 aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.6rem] font-semibold uppercase tracking-wider text-accent sm:text-xs">
                  01 · U.S.
                </span>
                <span className="mt-1 block break-words text-[0.68rem] font-semibold leading-tight sm:text-sm">
                  U.S. Contracting Entity
                </span>
              </span>
            </button>
            <button
              type="button"
              aria-pressed={activeParty === "delivery"}
              onClick={() => setActiveParty("delivery")}
              onMouseEnter={() => setActiveParty("delivery")}
              onFocus={() => setActiveParty("delivery")}
              className={`relative z-10 flex min-h-16 w-full min-w-0 items-center gap-2 justify-self-end rounded-lg border px-2 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-h-20 sm:gap-4 sm:px-5 ${
                activeParty === "delivery"
                  ? "border-accent/70 bg-ink text-ink-foreground"
                  : "border-ink-border bg-ink text-ink-muted hover:border-accent/50"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors sm:h-11 sm:w-11 ${
                  activeParty === "delivery"
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-ink-border text-ink-muted"
                }`}
              >
                <Globe2 aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.6rem] font-semibold uppercase tracking-wider text-accent sm:text-xs">
                  02 · GLOBAL
                </span>
                <span className="mt-1 block break-words text-[0.68rem] font-semibold leading-tight sm:text-sm">
                  Offshore Delivery Team
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="trust-contract-scene mt-9">
          <div>
            <p className="eyebrow mb-3">The details matter</p>
            <h3 className="font-display text-2xl leading-tight text-ink-foreground md:text-3xl">
              Clear expectations at every step.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Explore the contractual concepts that shape each client engagement.
            </p>
            <div className="relative mt-5" role="group" aria-label="Contractual concepts">
              <div
                aria-hidden="true"
                className="absolute left-5 right-5 top-5 hidden h-px bg-ink-border lg:block"
              />
              <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
                {contractConcepts.map((concept, index) => (
                  <button
                    key={concept}
                    type="button"
                    aria-pressed={activeContractConcept === concept}
                    onClick={() => setActiveContractConcept(concept)}
                    onMouseEnter={() => setActiveContractConcept(concept)}
                    onFocus={() => setActiveContractConcept(concept)}
                    className={`flex min-h-11 items-center gap-2 rounded-md border px-3 py-2 text-left text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink lg:min-h-16 lg:flex-col lg:items-start lg:justify-center ${
                      activeContractConcept === concept
                        ? "border-accent/70 bg-ink text-ink-foreground"
                        : "border-ink-border bg-ink text-ink-muted hover:border-accent/60 hover:text-ink-foreground"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[0.6rem] transition-colors ${
                        activeContractConcept === concept
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-ink-border bg-ink text-accent"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="capitalize">{concept}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-5xl text-base leading-[1.9] text-ink-muted md:text-lg">
            {renderConceptText(contractingCopy, activeContractConcept, contractConcepts)}
          </p>
          <aside className="trust-qualification-scene mt-6 rounded-r-lg border-l-2 border-accent bg-ink-foreground/[0.04] px-5 py-4 md:px-6">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">
              Important Consideration
            </p>
            <p className="mt-2 max-w-5xl text-sm leading-relaxed text-ink-foreground md:text-base">
              {qualificationCopy}
            </p>
          </aside>
        </div>

        <div className="trust-staffing-scene mt-9 border-t border-ink-border pt-7">
          <div className="mb-5">
            <p className="eyebrow mb-2">Planning responsibly</p>
            <h3 className="font-display text-2xl text-ink-foreground">
              Staffing and cost considerations
            </h3>
          </div>
          <div
            role="group"
            aria-label="Staffing and cost considerations"
            className="relative grid gap-3 md:grid-cols-3 md:gap-5"
          >
            <div
              aria-hidden="true"
              className="absolute left-5 top-5 hidden h-px w-[calc(66.66%-1.5rem)] bg-ink-border md:block"
            />
            {staffingConcepts.map((concept, index) => (
              <button
                key={concept}
                type="button"
                aria-pressed={activeStaffingConcept === concept}
                onClick={() => setActiveStaffingConcept(concept)}
                onMouseEnter={() => setActiveStaffingConcept(concept)}
                onFocus={() => setActiveStaffingConcept(concept)}
                className={`relative z-10 flex min-h-11 items-center gap-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeStaffingConcept === concept
                    ? "text-ink-foreground"
                    : "text-ink-muted hover:text-ink-foreground"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                    activeStaffingConcept === concept
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-ink-border bg-ink text-ink-muted"
                  }`}
                >
                  {activeStaffingConcept === concept ? (
                    <CircleCheck aria-hidden="true" className="h-4 w-4" />
                  ) : (
                    `0${index + 1}`
                  )}
                </span>
                <span className="font-semibold">
                  {index === 0
                    ? "Local Authorization"
                    : index === 1
                      ? "Work Requirements"
                      : "Cost Considerations"}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-ink-muted md:text-base">
            {renderConceptText(staffingCopy, activeStaffingConcept, staffingConcepts)}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-ink-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm text-ink-muted">
            A clear conversation is the first step toward the right engagement.
          </p>
          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Discuss your needs <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-ink px-6 py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-4">About Quorisx</p>
              <h1 className="max-w-3xl font-display text-4xl leading-[1.04] text-ink-foreground md:text-5xl xl:text-6xl">
                American Headquarters.{" "}
                <span className="text-accent">International Capabilities.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-ink-foreground">
                A U.S. business relationship backed by global operational expertise.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
                Quorisx helps businesses add dedicated offshore professionals, outsource operational
                work, and access technology and digital services. Our team brings people, processes,
                and project expertise together—so clients can choose the support that fits their
                needs.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#operating-model"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Explore our model <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="rounded-md border border-ink-border px-5 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  Talk to our team
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink-border pt-5 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-2">
                  <Building2 aria-hidden="true" className="h-4 w-4 text-accent" /> Canton, Georgia
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 aria-hidden="true" className="h-4 w-4 text-accent" /> Bangkok, Thailand
                </span>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-accent/70"
              />
              <img
                src="/images/img.jpg"
                alt="Professionals collaborating in a bright modern office"
                width={1080}
                height={729}
                fetchPriority="high"
                className="relative aspect-[4/3] w-full rounded-lg object-cover"
              />
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-md bg-card px-4 py-3 shadow-lg sm:left-6">
                <span className="rounded-full bg-accent/10 p-2 text-accent">
                  <UsersRound aria-hidden="true" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    One partner. Multiple capabilities.
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    People · Operations · Digital solutions
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="operating-model" className="scroll-mt-28 bg-secondary px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/img3.jpg"
                alt="Colleagues meeting around a table in a modern office"
                width={2000}
                height={2000}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
                <p className="eyebrow mb-1">One connected model</p>
                <p className="font-display text-2xl text-ink-foreground">
                  Local relationship. Global delivery.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-3">How Quorisx works</p>
              <h2 className="text-3xl leading-tight md:text-4xl">
                The right people and expertise, built around your business.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Headquartered in Canton, Georgia, Quorisx works with clients to shape dedicated
                offshore teams, managed operational support, and specialist technology or digital
                projects. The model is designed to fit the work—not force every client into the same
                setup.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    United States
                  </p>
                  <p className="mt-1 font-display text-xl">Canton, Georgia</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Client relationship and contracting details set out in the agreement.
                  </p>
                </div>
                <div className="rounded-md border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Thailand
                  </p>
                  <p className="mt-1 font-display text-xl">Bangkok</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Offshore delivery, with activities defined by the engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            <article
              id="us-headquarters"
              className="scroll-mt-28 rounded-lg border bg-card p-6 md:p-8"
            >
              <span className="inline-flex rounded-md bg-accent/10 p-3 text-accent">
                <Building2 aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="eyebrow mt-5">United States</p>
              <h2 className="mt-2 font-display text-2xl">Canton, Georgia</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Quorisx is headquartered in Canton, Georgia. The applicable contracting entity,
                contractual commitments, service scope, and invoicing details should be identified
                in the relevant client agreement and invoices.
              </p>
            </article>
            <article
              id="bangkok-operations"
              className="scroll-mt-28 rounded-lg border bg-card p-6 md:p-8"
            >
              <span className="inline-flex rounded-md bg-accent/10 p-3 text-accent">
                <Globe2 aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="eyebrow mt-5">Thailand</p>
              <h2 className="mt-2 font-display text-2xl">Bangkok Operations</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Bangkok is Quorisx's offshore operating hub. Depending on the engagement and current
                service arrangements, activities may include recruitment, workforce coordination,
                training, and service delivery. Offshore delivery is an intentional part of the
                model and is communicated to clients.
              </p>
            </article>
          </div>
        </section>

        <section id="why-bangkok" className="scroll-mt-28 px-6 py-14 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 grid items-end gap-6 lg:grid-cols-[1fr_0.8fr]">
              <div className="max-w-2xl">
                <p className="eyebrow mb-2">Our operating hub</p>
                <h2 className="text-3xl leading-tight md:text-4xl">Why Bangkok?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  An international business environment, diverse communities, established
                  infrastructure, and global connectivity make Bangkok a practical base for offshore
                  operations.
                </p>
              </div>
              <div className="relative hidden h-36 overflow-hidden rounded-lg lg:block">
                <img
                  src="/images/image2.jpg"
                  alt="Illustrated international city skyline at dusk"
                  width={2000}
                  height={2000}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-ink/20" />
                <p className="absolute bottom-4 left-5 font-display text-xl text-ink-foreground">
                  Connected to the world
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-md border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-md sm:p-5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-8 w-8 rounded-bl-2xl border-b border-l border-primary/20 transition-colors group-hover:border-accent"
                  />
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-accent">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TrustTransparency />

        <section className="px-6 py-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row">
            <a href="/" className="font-display text-xl text-foreground">
              Quorisx<span className="text-accent">.</span>
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a className="hover:text-accent" href="/#outsourcing">
                Outsourcing
              </a>
              <a className="hover:text-accent" href="/solutions/software-development">
                Solutions
              </a>
              <a className="hover:text-accent" href="/resources/faqs">
                FAQs
              </a>
              <a className="hover:text-accent" href="/contact">
                Contact
              </a>
            </div>
            <span>© {new Date().getFullYear()} Quorisx</span>
          </div>
        </section>
      </main>
    </div>
  );
}
