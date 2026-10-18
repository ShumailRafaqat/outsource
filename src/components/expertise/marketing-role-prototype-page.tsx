import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clapperboard,
  FileCheck2,
  Film,
  Layers3,
  Palette,
  Search,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

import {
  getMarketingRolePrototype,
  type MarketingPrototypeRole,
  type MarketingPrototypeVisual,
} from "./marketing-role-prototype-content";
import "./marketing-role-prototype-page.css";

const roleIcons: Record<MarketingPrototypeRole, LucideIcon> = {
  "SEO Specialist": Search,
  "Graphic Designer": Palette,
  "Video Editor": Clapperboard,
};

const relatedRoles: Record<MarketingPrototypeRole, readonly [string, string]> = {
  "SEO Specialist": ["Content Writer", "Digital Marketing Assistant"],
  "Graphic Designer": ["Social Media Assistant", "Video Editor"],
  "Video Editor": ["Graphic Designer", "Social Media Assistant"],
};

function hireHref(role: MarketingPrototypeRole) {
  return `/contact?role=${encodeURIComponent(role)}#inquiry`;
}

function hireLabel(role: MarketingPrototypeRole) {
  return role === "SEO Specialist" ? "Hire an SEO Specialist" : `Hire a ${role}`;
}

function WorkSample({ visual, label }: { visual: MarketingPrototypeVisual; label: string }) {
  if (visual === "search-audit") {
    return (
      <figure className="marketing-sample marketing-sample--search" aria-label={label}>
        <div className="marketing-search-topline">
          <span className="marketing-search-mark">
            <Search aria-hidden="true" />
          </span>
          <span>Illustrative search work sample</span>
          <span className="marketing-sample-tag">Not live data</span>
        </div>
        <div className="marketing-search-query">
          <span>QUERY INTENT</span>
          <strong>“furnace repair near me”</strong>
          <span>Local service · high intent</span>
        </div>
        <div className="marketing-search-grid">
          <div className="marketing-search-results">
            <p className="marketing-sample-label">PAGE MAPPING</p>
            <div className="marketing-search-result marketing-search-result--selected">
              <span>01</span>
              <div>
                <strong>Heating repair service</strong>
                <small>Existing service page · review intent fit</small>
              </div>
              <CircleCheck aria-hidden="true" />
            </div>
            <div className="marketing-search-result">
              <span>02</span>
              <div>
                <strong>Service areas</strong>
                <small>Check location overlap before edits</small>
              </div>
              <FileCheck2 aria-hidden="true" />
            </div>
            <div className="marketing-search-result">
              <span>03</span>
              <div>
                <strong>Technical check</strong>
                <small>Inspect crawl and index status</small>
              </div>
              <Search aria-hidden="true" />
            </div>
          </div>
          <aside className="marketing-search-note">
            <p className="marketing-sample-label">REVIEW NOTE</p>
            <p>Confirm service-area wording with the business owner before publishing.</p>
            <span>Suggested next step</span>
            <strong>Review page title and local service details</strong>
          </aside>
        </div>
        <figcaption>
          Original illustrative example · no search positions or traffic figures shown.
        </figcaption>
      </figure>
    );
  }

  if (visual === "campaign-kit") {
    return (
      <figure className="marketing-sample marketing-sample--design" aria-label={label}>
        <div className="marketing-design-heading">
          <div>
            <p className="marketing-sample-label">ILLUSTRATIVE CAMPAIGN KIT</p>
            <strong>Weekend market / seasonal offer</strong>
          </div>
          <span>Brand guide applied</span>
        </div>
        <div className="marketing-design-board">
          <div className="marketing-design-poster">
            <span>SEASONAL COLLECTION</span>
            <strong>
              Made for
              <br />
              the everyday.
            </strong>
            <i>Sample layout · copy subject to approval</i>
            <div aria-hidden="true" className="marketing-design-orb marketing-design-orb--one" />
            <div aria-hidden="true" className="marketing-design-orb marketing-design-orb--two" />
          </div>
          <div className="marketing-design-side">
            <div className="marketing-design-social">
              <span>01 / SOCIAL</span>
              <div>
                <strong>
                  New season,
                  <br />
                  same good things.
                </strong>
                <small>1080 × 1080 · preview</small>
              </div>
            </div>
            <div className="marketing-design-banner">
              <span>02 / EMAIL</span>
              <strong>Seasonal edit</strong>
              <small>600 px wide · preview</small>
            </div>
          </div>
        </div>
        <div className="marketing-design-palette" aria-label="Sample visual palette">
          <span>
            <i className="marketing-color marketing-color--ink" />
            Deep ink
          </span>
          <span>
            <i className="marketing-color marketing-color--sand" />
            Warm neutral
          </span>
          <span>
            <i className="marketing-color marketing-color--coral" />
            Accent
          </span>
          <span>
            <i className="marketing-color marketing-color--paper" />
            Background
          </span>
        </div>
        <figcaption>
          Original illustrative layouts · sample campaign, not a client project.
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="marketing-sample marketing-sample--video" aria-label={label}>
      <div className="marketing-video-heading">
        <div className="marketing-video-symbol">
          <Film aria-hidden="true" />
        </div>
        <div>
          <p className="marketing-sample-label">ILLUSTRATIVE EDIT PLAN</p>
          <strong>Property walkthrough / vertical cut</strong>
        </div>
        <span>Review cut</span>
      </div>
      <div className="marketing-video-monitor">
        <div className="marketing-video-frame">
          <div aria-hidden="true" className="marketing-video-sun" />
          <div aria-hidden="true" className="marketing-video-building">
            <i />
            <i />
            <i />
          </div>
          <span>Exterior establishing shot</span>
          <span aria-hidden="true" className="marketing-video-play-indicator">
            <ArrowRight aria-hidden="true" />
          </span>
        </div>
        <div className="marketing-video-script">
          <span>CAPTION / OWNER REVIEW</span>
          <strong>“A closer look at the light-filled living space.”</strong>
          <small>Example copy · verify details before publishing</small>
        </div>
      </div>
      <div className="marketing-timeline" aria-label="Illustrative editing timeline">
        <div className="marketing-timeline-ruler">
          <span>00:00</span>
          <span>00:08</span>
          <span>00:16</span>
          <span>00:24</span>
          <span>00:30</span>
        </div>
        <div className="marketing-timeline-track">
          <span>Exterior / select A</span>
          <span>Room walkthrough</span>
          <span>Closing shot</span>
        </div>
        <div className="marketing-timeline-track marketing-timeline-track--caption">
          <span>Approved captions · timing review</span>
        </div>
        <div className="marketing-timeline-track marketing-timeline-track--audio">
          <span>Dialogue / levels checked</span>
        </div>
      </div>
      <figcaption>
        Original illustrative edit layout · no footage or client result represented.
      </figcaption>
    </figure>
  );
}

export function MarketingRolePrototypePage({ role }: { role: MarketingPrototypeRole }) {
  const content = getMarketingRolePrototype(role);
  if (!content) {
    throw new Error(`Marketing role prototype content is missing for "${role}".`);
  }
  const Icon = roleIcons[role];
  const complementaryRoles = relatedRoles[role];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main data-disable-hero-reveal>
        <section
          data-role-visual={content.visual}
          className={`marketing-prototype-hero marketing-prototype-hero--${content.visual} relative isolate overflow-hidden bg-ink px-6 py-10 text-ink-foreground sm:py-14 lg:py-16`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-44 -z-10 size-[34rem] rounded-full border border-ink-border shadow-[0_0_0_55px_rgba(255,255,255,0.02),0_0_0_110px_rgba(255,255,255,0.015)]"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-7 flex flex-wrap items-center gap-2 text-xs text-ink-muted"
              >
                <a className="hover:text-ink-foreground" href="/">
                  Home
                </a>
                <span aria-hidden="true">/</span>
                <a className="hover:text-ink-foreground" href="/expertise/marketing-creative">
                  Marketing &amp; Creative
                </a>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-ink-foreground">
                  {role}
                </span>
              </nav>
              <p className="eyebrow mb-3 text-accent-bright">{content.eyebrow}</p>
              <h1 className="marketing-prototype-hero__heading max-w-2xl font-display text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
                {role}
                <span className="mt-2 block text-accent-bright">{content.headline}</span>
              </h1>
              <p className="marketing-prototype-hero__description mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                {content.introduction}
              </p>
              <div className="marketing-prototype-hero__actions mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={hireHref(role)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {hireLabel(role)} <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
                <a
                  href="#role-work"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-foreground underline decoration-ink-muted/60 underline-offset-4 transition-colors hover:text-accent-bright"
                >
                  See What They Handle <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </div>
              <p className="marketing-prototype-hero__note mt-6 text-xs text-ink-muted">
                Dedicated execution capacity · your team retains direction and approval.
              </p>
            </div>
            <div className="marketing-prototype-hero__sample">
              <WorkSample visual={content.visual} label={content.visualLabel} />
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="situation-heading">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">A recognizable business situation</p>
              <h2
                id="situation-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                {content.situationHeading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {content.situationCopy}
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5 sm:pl-7">
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-accent">
                {content.scenario.business}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                {content.scenario.bottleneck}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 px-6 py-12 sm:py-16" aria-labelledby="capacity-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">What changes with dedicated support</p>
              <h2 id="capacity-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                {content.signatureHeading}
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-base leading-relaxed text-muted-foreground">
                {content.signatureCopy}
              </p>
              <div className="mt-6 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    Assigned work
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{content.scenario.assigned}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    Your review
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{content.scenario.review}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="role-work"
          className="scroll-mt-24 px-6 py-12 sm:py-16"
          aria-labelledby="responsibilities-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">Actual responsibilities</p>
              <h2
                id="responsibilities-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                A defined role, not every marketing function.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The specialist focuses on the agreed work. Strategy, final approval, and decisions
                outside the role stay with your team.
              </p>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {content.responsibilities.map((responsibility, index) => (
                <li key={responsibility} className="flex gap-4 py-4 sm:gap-6 sm:py-5">
                  <span className="font-mono text-xs font-bold tracking-wider text-accent">
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

        <section
          className="bg-ink px-6 py-12 text-ink-foreground sm:py-16"
          aria-labelledby="deliverables-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14">
            <div>
              <p className="eyebrow mb-3 text-accent-bright">Tangible handoff</p>
              <h2
                id="deliverables-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                Concrete outputs from an agreed scope.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                The exact deliverables depend on your brief, tools, and approval process. The
                illustrative work sample above shows the kind of work that can be reviewed.
              </p>
            </div>
            <ul className="divide-y divide-ink-border border-y border-ink-border">
              {content.deliverables.map((deliverable, index) => (
                <li
                  key={deliverable}
                  className="flex gap-3 py-4 text-sm leading-relaxed text-ink-muted sm:py-5"
                >
                  <FileCheck2
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-accent-bright"
                  />
                  <span>
                    <span className="mr-2 font-mono text-[10px] text-accent-bright">
                      0{index + 1}
                    </span>
                    {deliverable}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="collaboration-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">How collaboration works</p>
              <h2
                id="collaboration-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                Brief, execute, review, hand off.
              </h2>
            </div>
            <ol className="marketing-role-workflow">
              {content.workflow.map((step, index) => (
                <li key={step} className="marketing-role-workflow__step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-secondary/50 px-6 py-12 sm:py-16" aria-labelledby="tools-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">Scope and tools</p>
              <h2 id="tools-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Use the stack your team already has.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Examples only. Tool familiarity is matched to your requirements; names do not imply
                certifications, partnerships, or native integrations.
              </p>
            </div>
            <ul className="grid gap-x-6 sm:grid-cols-2">
              {content.tools.map((tool) => (
                <li key={tool} className="flex items-center gap-3 border-b border-border py-4">
                  <Icon aria-hidden="true" className="size-4 text-accent" />
                  <span className="text-sm font-semibold">{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="staffing-heading">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Hiring fit</p>
              <h2 id="staffing-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Start with the capacity your work calls for.
              </h2>
            </div>
            <div className="mt-7 grid gap-8 border-y border-border py-6 md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="font-display text-xl">Hire one specialist</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Add a defined skill set to your existing workflow. Responsibilities, availability,
                  reporting, and review are agreed for your engagement.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl">Combine complementary roles</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Add another role when the work genuinely calls for a different specialty. Team
                  size, handoffs, and capacity are discussed before scope changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 px-6 py-12 sm:py-16" aria-labelledby="industry-heading">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow mb-3">Industry relevance</p>
            <h2 id="industry-heading" className="font-display text-3xl leading-tight sm:text-4xl">
              Examples of where this work can fit.
            </h2>
            <div className="mt-7 grid gap-x-9 gap-y-6 md:grid-cols-3">
              {content.industries.map(({ name, task }) => (
                <article key={name} className="border-t border-border pt-4">
                  <h3 className="font-display text-xl">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{task}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="signals-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">The work you can review</p>
              <h2 id="signals-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Useful progress, without outcome guarantees.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Agree the measures, sources, review cadence, and definitions with your team.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {content.signals.map((signal) => (
                <li key={signal} className="flex gap-3 py-4 text-sm leading-relaxed">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="bg-ink px-6 py-12 text-ink-foreground sm:py-16"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3 text-accent-bright">Questions before you hire?</p>
              <h2 id="faq-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                A few useful details.
              </h2>
            </div>
            <div className="divide-y divide-ink-border border-y border-ink-border">
              {content.faqs.map(([question, answer]) => (
                <details key={question} className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
                    {question}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 shrink-0 text-accent-bright transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-muted">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-12 sm:py-16" aria-labelledby="cta-heading">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow mb-3">Discuss your hiring needs</p>
              <h2
                id="cta-heading"
                className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl"
              >
                {content.ctaHeading}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {content.ctaDescription}
              </p>
            </div>
            <a
              href={hireHref(role)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Discuss My Hiring Needs <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-6 text-xs">
            <span className="flex items-center gap-2 font-bold uppercase tracking-wider text-muted-foreground">
              <Layers3 aria-hidden="true" className="size-4 text-accent" />
              Complementary roles
            </span>
            {complementaryRoles.map((relatedRole) => (
              <a
                key={relatedRole}
                href={`/expertise/marketing-creative/${relatedRole
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")}`}
                className="font-semibold text-foreground underline decoration-border underline-offset-4 hover:text-accent"
              >
                {relatedRole}
              </a>
            ))}
            <a
              href="/expertise/marketing-creative"
              className="ml-auto inline-flex min-h-10 items-center gap-1 font-semibold text-accent hover:underline"
            >
              All Marketing &amp; Creative roles{" "}
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
