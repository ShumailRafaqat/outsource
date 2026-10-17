import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Compass,
  Layers3,
  MoveUpRight,
  type LucideIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { getWaysToWorkPage, waysToWorkPages } from "@/lib/ways-to-work";

import "./ways-to-work.css";

const pageIcons: Record<string, LucideIcon> = {
  "team-extension": Compass,
  "managed-function": Layers3,
  "project-solution": MoveUpRight,
};

export function WaysToWorkPage({ slug }: { slug: string }) {
  const page = getWaysToWorkPage(slug);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>("[data-work-reveal]");
    const revealAll = () => elements.forEach((element) => element.classList.add("is-visible"));

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [slug]);

  if (!page) {
    throw new Error(`Unknown ways-to-work page: ${slug}`);
  }

  const Icon = pageIcons[page.slug];
  if (!Icon) {
    throw new Error(`Missing icon for ways-to-work page: ${page.slug}`);
  }

  return (
    <div className="w2w-page min-h-screen bg-[#f3f5f2] text-[#102a36]">
      <SiteHeader />
      <main ref={rootRef} data-disable-hero-reveal>
        <section className="w2w-hero relative isolate overflow-hidden bg-[#102a36] px-6 text-white">
          <div className="w2w-grid" aria-hidden="true" />
          <div className="w2w-hero-glow w2w-hero-glow-one" aria-hidden="true" />
          <div className="w2w-hero-glow w2w-hero-glow-two" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 py-16 md:min-h-[720px] md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="relative z-10">
              <a
                href="/#ways"
                className="w2w-back inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18a5b2]"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Three ways to work
              </a>
              <div className="mt-12 flex items-center gap-3" data-work-reveal>
                <span className="grid size-11 place-items-center border border-[#18a5b2]/40 bg-[#18a5b2]/10 text-[#18a5b2]">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#18a5b2] sm:text-xs">
                  {page.eyebrow}
                </span>
              </div>
              <p
                className="w2w-hero-kicker mt-8 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45"
                data-work-reveal
              >
                {page.content.heroKicker}
              </p>
              <h1
                className="mt-4 max-w-3xl font-display text-5xl leading-[0.99] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
                data-work-reveal
              >
                {page.headline}
              </h1>
              <p
                className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8"
                data-work-reveal
              >
                {page.intro}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4" data-work-reveal>
                <a
                  href="/contact#inquiry"
                  className="w2w-primary-link group inline-flex min-h-12 items-center gap-3 bg-[#18a5b2] px-5 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#102a36]"
                >
                  {page.content.primaryCta}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex min-h-12 items-center gap-2 px-3 text-sm font-semibold text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18a5b2]"
                >
                  {page.content.secondaryCta}
                  <ArrowDown aria-hidden="true" className="size-4" />
                </a>
              </div>
              <p
                className="mt-10 max-w-lg border-l border-[#18a5b2]/60 py-1 pl-4 text-xs leading-relaxed text-white/50"
                data-work-reveal
              >
                {page.content.heroNote}
              </p>
            </div>

            <div
              className="w2w-blueprint relative mx-auto w-full max-w-xl"
              aria-label="Work pattern diagram"
            >
              <div className="w2w-blueprint-top flex items-center justify-between border-b border-white/15 pb-4 text-[9px] font-bold uppercase tracking-[0.19em] text-white/50">
                <span>{page.content.mapTitle}</span>
                <span className="flex items-center gap-2 text-[#18a5b2]">
                  <span className="w2w-live-dot size-1.5 rounded-full bg-current" />
                  {page.number} — 03
                </span>
              </div>
              <div className="w2w-map relative mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
                <div className="w2w-map-node">
                  <span className="w2w-map-icon">
                    <CircleDot aria-hidden="true" />
                  </span>
                  <span className="w2w-map-label">{page.content.businessNode}</span>
                  <span className="w2w-map-caption">{page.content.businessCaption}</span>
                </div>
                <div className="w2w-map-bridge" aria-hidden="true">
                  <span />
                </div>
                <div className="w2w-map-node is-quorisx">
                  <span className="w2w-map-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="w2w-map-label">{page.content.deliveryNode}</span>
                  <span className="w2w-map-caption">{page.content.deliveryCaption}</span>
                </div>
              </div>
              <div className="w2w-map-output mt-5 flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 sm:p-5">
                <span className="w2w-output-marker grid size-9 shrink-0 place-items-center bg-[#18a5b2] text-white">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    {page.content.outcomeLabel}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">{page.title}</p>
                </div>
                <span
                  className="w2w-output-signal hidden h-8 items-end gap-1 sm:flex"
                  aria-hidden="true"
                >
                  {[10, 17, 12, 25, 15, 22, 30, 18].map((height, index) => (
                    <span
                      key={index}
                      style={{ height: `${height}px`, animationDelay: `${index * 80}ms` }}
                    />
                  ))}
                </span>
              </div>
              <div className="mt-4 flex justify-between text-[8px] font-semibold uppercase tracking-[0.16em] text-white/35">
                <span>{page.content.mapStart}</span>
                <span>{page.content.mapEnd}</span>
              </div>
              <span className="w2w-blueprint-index" aria-hidden="true">
                {page.number}
              </span>
            </div>
          </div>
          <div className="w2w-hero-foot relative mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 py-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35 sm:text-[9px]">
            <span>People / Process / Progress</span>
            <span>Quorisx · Engagement guide</span>
          </div>
        </section>

        <section className="w2w-outcome px-6 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div data-work-reveal>
              <p className="w2w-section-label">{page.content.outcomeSection.eyebrow}</p>
              <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.04] tracking-[-0.04em] sm:text-5xl">
                {page.content.outcomeSection.title}
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#526770]">
                {page.content.outcomeSection.description}
              </p>
              <div className="mt-9 border-l-2 border-[#18a5b2] pl-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#087f8c]">
                  {page.content.outcomeSection.fitLabel}
                </p>
                <p className="mt-2 max-w-sm font-display text-xl leading-snug">{page.bestFor}</p>
              </div>
            </div>
            <div className="w2w-benefit-field">
              {page.benefits.map((benefit, index) => (
                <article className="w2w-benefit" key={benefit.title} data-work-reveal>
                  <span className="w2w-benefit-number">0{index + 1}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.detail}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="w2w-benefit-arrow" />
                </article>
              ))}
            </div>
          </div>
          <div
            className="mx-auto mt-16 max-w-7xl border-t border-[#102a36]/15 pt-5 sm:mt-20"
            data-work-reveal
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#526770]">
              {page.content.outcomeSection.resultLabel}
            </p>
            <p className="mt-3 max-w-4xl font-display text-2xl leading-snug sm:text-3xl">
              {page.outcome}
            </p>
          </div>
        </section>

        <section className="w2w-ownership px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end" data-work-reveal>
              <div>
                <p className="w2w-section-label">{page.content.ownership.eyebrow}</p>
                <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
                  {page.content.ownership.title}
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-white/60 md:justify-self-end">
                {page.content.ownership.description}
              </p>
            </div>
            <div
              className="w2w-ownership-grid mt-10 grid gap-px bg-white/10 md:mt-14 md:grid-cols-2"
              data-work-reveal
            >
              <div className="w2w-ownership-card bg-[#102a36] p-6 sm:p-9" data-work-reveal>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#18a5b2]">
                  {page.content.ownership.clientLabel}
                </span>
                <h3 className="mt-4 font-display text-2xl text-white">
                  {page.content.ownership.clientTitle}
                </h3>
                <ul className="mt-6 space-y-4">
                  {page.clientOwns.map((item) => (
                    <li className="flex gap-3 text-sm leading-relaxed text-white/65" key={item}>
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#18a5b2]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w2w-ownership-card bg-[#183642] p-6 sm:p-9" data-work-reveal>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#18a5b2]">
                  {page.content.ownership.partnerLabel}
                </span>
                <h3 className="mt-4 font-display text-2xl text-white">
                  {page.content.ownership.partnerTitle}
                </h3>
                <ul className="mt-6 space-y-4">
                  {page.quorisxOwns.map((item) => (
                    <li className="flex gap-3 text-sm leading-relaxed text-white/65" key={item}>
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#18a5b2]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w2w-example px-6 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div data-work-reveal>
              <p className="w2w-section-label">{page.content.exampleSection.eyebrow}</p>
              <h2 className="mt-5 max-w-md font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                {page.content.exampleSection.title}
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#526770]">
                {page.content.exampleSection.description}
              </p>
            </div>
            <article className="w2w-casefile" data-work-reveal>
              <div className="w2w-casefile-head flex items-center justify-between gap-4">
                <span>
                  {page.content.exampleSection.eyebrow} / {page.number}
                </span>
                <span>{page.summary}</span>
              </div>
              <h3 className="mt-7 font-display text-3xl leading-tight sm:text-4xl">
                {page.example.title}
              </h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div data-work-reveal>
                  <p className="w2w-casefile-label">{page.content.exampleSection.situationLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">{page.example.situation}</p>
                </div>
                <div data-work-reveal>
                  <p className="w2w-casefile-label">{page.content.exampleSection.approachLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">{page.example.approach}</p>
                </div>
              </div>
              <div className="mt-8 border-t border-white/15 pt-6" data-work-reveal>
                <p className="w2w-casefile-label">{page.content.exampleSection.resultLabel}</p>
                <p className="mt-2 max-w-2xl font-display text-xl leading-relaxed text-white sm:text-2xl">
                  {page.example.result}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w2w-process scroll-mt-20 px-6 py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div
              className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
              data-work-reveal
            >
              <div>
                <p className="w2w-section-label">{page.content.process.eyebrow}</p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                  {page.content.process.title}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[#526770]">
                {page.content.process.description}
              </p>
            </div>
            <ol
              className="w2w-process-list mt-12 grid gap-0 sm:mt-16 md:grid-cols-4"
              data-work-reveal
            >
              {page.steps.map((step, index) => (
                <li className="w2w-process-step" key={step.title} data-work-reveal>
                  <span className="w2w-step-number">0{index + 1}</span>
                  <span className="w2w-step-pin" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="w2w-compare px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div
              className="flex flex-col gap-5 border-b border-white/15 pb-7 sm:flex-row sm:items-end sm:justify-between"
              data-work-reveal
            >
              <div>
                <p className="w2w-section-label">{page.content.comparison.eyebrow}</p>
                <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  {page.content.comparison.title}
                </h2>
              </div>
              <a
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[#18a5b2] transition-colors hover:text-white"
                href="/#ways"
              >
                Back to all three
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="grid gap-2 pt-4 md:grid-cols-3">
              {waysToWorkPages.map((other, index) => (
                <a
                  key={other.slug}
                  href={`/ways-to-work/${other.slug}`}
                  aria-current={other.slug === page.slug ? "page" : undefined}
                  data-work-reveal
                  className={`w2w-compare-link group flex min-h-20 items-center gap-4 border-b border-white/10 px-2 py-4 transition-all duration-300 hover:bg-white/[0.045] md:border-b-0 md:border-r md:px-4 ${
                    other.slug === page.slug ? "is-current" : ""
                  }`}
                >
                  <span className="font-display text-2xl text-white/35">{other.number}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[8px] font-bold uppercase tracking-[0.15em] text-[#18a5b2]">
                      {index === 0 ? "People-led" : index === 1 ? "Process-led" : "Outcome-led"}
                    </span>
                    <span className="mt-1 block font-semibold text-white">{other.title}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-white/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#18a5b2]"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="w2w-final px-6 py-20 sm:py-24">
          <div
            className="w2w-final-inner mx-auto grid max-w-7xl items-center gap-8 border border-[#102a36]/15 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14"
            data-work-reveal
          >
            <div>
              <p className="w2w-section-label">{page.content.final.eyebrow}</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                {page.content.final.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#526770]">
                {page.content.final.description}
              </p>
            </div>
            <a
              href="/contact#inquiry"
              className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#102a36] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1b414e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087f8c] focus-visible:ring-offset-4"
            >
              {page.content.final.cta}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
          <div className="mx-auto mt-8 max-w-7xl">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#526770] transition-colors hover:text-[#102a36]"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Return to Quorisx home
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
