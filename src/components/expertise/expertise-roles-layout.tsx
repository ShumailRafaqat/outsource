"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Bug,
  CalendarCheck,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  Code2,
  CircleDollarSign,
  Contact,
  CreditCard,
  Database,
  FileCode2,
  FileSpreadsheet,
  GraduationCap,
  Handshake,
  HandCoins,
  LifeBuoy,
  ListChecks,
  Mail,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  Smartphone,
  Palette,
  PenLine,
  Plane,
  Search,
  Server,
  Share2,
  ScanSearch,
  ShieldCheck,
  Target,
  UserPlus,
  UserRound,
  UserSearch,
  Wrench,
  Rocket,
  Workflow,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { expertiseFunctions } from "./data";
import type { ExpertisePageConfig } from "./data/types";

function toRoleSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const recruitmentSteps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Requirement Mapping",
    description: "We define the role, tools, time zone, and experience your team needs.",
    icon: ClipboardList,
  },
  {
    title: "Experienced Talent Sourcing",
    description: "We find and pre-vet candidates with relevant experience.",
    icon: UsersRound,
  },
  {
    title: "Multi-Stage Screening",
    description: "Candidates complete resume reviews, skills tests, and professional interviews.",
    icon: BadgeCheck,
  },
  {
    title: "Role-Specific Training",
    description:
      "We prepare shortlisted talent for your tools, processes, and remote-work standards.",
    icon: GraduationCap,
  },
  {
    title: "Background & Reference Checks",
    description: "We verify identity, work history, and professional references.",
    icon: ShieldCheck,
  },
  {
    title: "Client Matching + Paid Trial",
    description: "Meet your best-matched candidates and validate the fit with a paid trial.",
    icon: Handshake,
  },
  {
    title: "Onboarding & Ongoing Support",
    description: "We support a smooth start and stay involved as your team grows.",
    icon: Rocket,
  },
];

function getRoleIcon(title: string): LucideIcon {
  const roleTitle = title.toLowerCase();
  if (roleTitle.includes("travel")) return Plane;
  if (roleTitle.includes("data entry")) return Database;
  if (roleTitle.includes("data scientist")) return ScanSearch;
  if (roleTitle.includes("data collection")) return Database;
  if (roleTitle.includes("data annotation")) return Palette;
  if (roleTitle.includes("data validation")) return BadgeCheck;
  if (roleTitle.includes("technical writer")) return FileCode2;
  if (roleTitle.includes("technical ops")) return Workflow;
  if (roleTitle.includes("n8n")) return Workflow;
  if (roleTitle.includes("php")) return FileCode2;
  if (roleTitle.includes("ai developer") || roleTitle.includes("ml engineer")) return Code2;
  if (roleTitle.includes("wordpress") || roleTitle.includes("woocommerce")) return Code2;
  if (roleTitle.includes("framer")) return Palette;
  if (roleTitle.includes("laravel")) return Code2;
  if (roleTitle.includes("mern")) return Code2;
  if (roleTitle.includes("full-stack")) return Code2;
  if (roleTitle.includes("ios") || roleTitle.includes("android")) return Smartphone;
  if (roleTitle.includes("react native") || roleTitle.includes("ionic")) return Smartphone;
  if (roleTitle.includes("project manager")) return ListChecks;
  if (roleTitle.includes("event coordinator")) return CalendarCheck;
  if (roleTitle.includes("executive assistant")) return CalendarDays;
  if (roleTitle.includes("personal assistant")) return UserRound;
  if (roleTitle.includes("virtual assistant")) return Mail;
  if (roleTitle.includes("administrative assistant")) return Briefcase;
  if (roleTitle.includes("lead research")) return Search;
  if (roleTitle.includes("development representative")) return Target;
  if (roleTitle.includes("crm")) return Database;
  if (roleTitle.includes("appointment setter")) return CalendarDays;
  if (roleTitle.includes("social media")) return Share2;
  if (roleTitle.includes("content writer")) return PenLine;
  if (roleTitle.includes("graphic design")) return Palette;
  if (roleTitle.includes("marketing")) return Megaphone;
  if (roleTitle.includes("bookkeeping")) return FileSpreadsheet;
  if (roleTitle.includes("payable")) return CreditCard;
  if (roleTitle.includes("receivable")) return HandCoins;
  if (roleTitle.includes("finance")) return CircleDollarSign;
  if (roleTitle.includes("recruitment")) return UserSearch;
  if (roleTitle.includes("onboarding")) return UserPlus;
  if (roleTitle.includes("people operations")) return BadgeCheck;
  if (roleTitle === "hr assistant") return UsersRound;
  if (roleTitle.includes("live chat")) return MessagesSquare;
  if (roleTitle.includes("customer support")) return MessageCircle;
  if (roleTitle.includes("customer experience")) return Contact;
  if (roleTitle.includes("helpdesk")) return LifeBuoy;
  if (roleTitle.includes("frontend")) return Code2;
  if (roleTitle.includes("backend")) return Server;
  if (roleTitle.includes("quality assurance")) return Bug;
  if (roleTitle.includes("software support")) return Wrench;
  return ClipboardList;
}
const heroPhotos = [
  {
    src: "/images/img3.jpg",
    alt: "Team members collaborating around a meeting table",
  },
  {
    src: "/images/image2.jpg",
    alt: "Colleagues working together in a bright office",
  },
  {
    src: "/images/imag%204.jpg",
    alt: "Professionals reviewing work together",
  },
];
export function ExpertiseRolesLayout({
  config,
  afterHero,
}: {
  config: ExpertisePageConfig;
  afterHero?: ReactNode;
}) {
  const selectedFunction = config.group;
  const activeFunction = expertiseFunctions.findIndex(
    (group) => group.href === selectedFunction.href,
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const primaryPhoto = heroPhotos[0];
  const supportPhoto = heroPhotos[1];
  const teamPhoto = heroPhotos[2];
  if (!selectedFunction || !primaryPhoto || !supportPhoto || !teamPhoto) {
    return null;
  }
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-background px-6 py-8 sm:py-10 lg:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-32 -z-10 h-80 w-80 rounded-full border border-accent/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 -z-10 h-56 w-56 rounded-full border border-primary/10"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="relative z-10 py-4">
              <p className="eyebrow mb-5">{config.hero.eyebrow}</p>
              <h1 className="max-w-3xl font-display text-4xl leading-[1.03] text-foreground sm:text-5xl md:text-6xl">
                {config.hero.headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block text-primary">{config.hero.highlightedHeadline}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {config.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact#inquiry"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Book a Free Consultation
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="#roles"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {config.hero.rolesLinkLabel}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative mx-auto h-[18rem] w-full max-w-2xl sm:h-[21rem] lg:h-[24rem]">
              <div
                className="absolute inset-0 overflow-hidden bg-primary shadow-2xl shadow-primary/20"
                style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
              >
                <img
                  src={primaryPhoto.src}
                  alt={primaryPhoto.alt}
                  className="h-full w-full object-cover object-center"
                  fetchPriority="high"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-primary/45 via-primary/10 to-ink/65 mix-blend-multiply"
                />
              </div>
              <div className="absolute bottom-5 left-1 z-10 h-28 w-36 overflow-hidden border-4 border-background shadow-xl sm:bottom-8 sm:left-4 sm:h-36 sm:w-48">
                <img
                  src={supportPhoto.src}
                  alt={supportPhoto.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-5 right-1 z-10 h-24 w-28 overflow-hidden border-4 border-background shadow-xl sm:bottom-8 sm:right-4 sm:h-32 sm:w-40">
                <img
                  src={teamPhoto.src}
                  alt={teamPhoto.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute right-3 top-5 z-10 max-w-44 border border-white/20 bg-ink/85 px-4 py-3 shadow-lg backdrop-blur sm:right-6 sm:top-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                  Support that fits
                </p>
                <p className="mt-1 font-display text-lg leading-tight text-ink-foreground">
                  Your way of working
                </p>
              </div>
            </div>
          </div>
        </section>
        {afterHero ??
          (selectedFunction.label === "Marketing & Creative" ? (
            <MarketingOutsourcingStory />
          ) : ["Sales & Growth", "Sales & Development"].includes(selectedFunction.label) ? (
            <SalesOutsourcingStory />
          ) : null)}
        {config.showClientOnboardingStory && <ClientOnboardingStory />}
        <section id="roles" className="scroll-mt-24 bg-secondary/60 px-6 py-9 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="eyebrow mb-3">{config.rolesSection.eyebrow}</p>
              <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
                {config.rolesSection.heading}
              </h2>
            </div>
            <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
              <aside className="min-w-0 lg:sticky lg:top-28">
                <h3 className="mb-3 hidden text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground lg:block">
                  Hire by Function
                </h3>
                <nav
                  aria-label="Hire by function"
                  className="-mx-6 flex snap-x gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0 lg:pb-0"
                >
                  {expertiseFunctions.map(({ label, href, icon: Icon }, index) => {
                    const selected = index === activeFunction;
                    return (
                      <a
                        key={label}
                        href={href}
                        aria-current={selected ? "page" : undefined}
                        className={`flex min-h-11 shrink-0 snap-start items-center gap-2.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:w-full lg:rounded-lg lg:px-3 ${
                          selected
                            ? "border-accent/40 bg-accent/10 text-foreground"
                            : "border-border bg-card text-muted-foreground hover:border-accent/35 hover:text-foreground"
                        }`}
                      >
                        <Icon
                          aria-hidden="true"
                          className={`h-4 w-4 ${selected ? "text-accent" : ""}`}
                        />
                        {label}
                      </a>
                    );
                  })}
                </nav>
              </aside>
              <div aria-live="polite" className="min-w-0">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                      Available roles
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
                      {selectedFunction.label}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {selectedFunction.intro}
                    </p>
                  </div>
                  <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                    {String(selectedFunction.roles.length).padStart(2, "0")} roles
                  </span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedFunction.roles.map((role) => {
                    const Icon = getRoleIcon(role.title);
                    const roleHref = `${selectedFunction.href}/${toRoleSlug(role.title)}`;
                    return (
                      <article
                        key={`${selectedFunction.label}-${role.title}`}
                        className="group relative flex min-h-64 flex-col items-center rounded-xl border border-border bg-card px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg sm:px-5 sm:py-7"
                      >
                        <a
                          href={roleHref}
                          aria-label={`View ${role.title} details`}
                          className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                        />
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent sm:h-16 sm:w-16">
                          <Icon aria-hidden="true" className="h-7 w-7" />
                        </span>
                        <div className="flex min-w-0 flex-1 flex-col items-center">
                          <h4 className="mt-4 font-sans text-base font-extrabold leading-snug text-foreground sm:text-lg">
                            {role.title}
                          </h4>
                          <span
                            aria-hidden="true"
                            className="mt-3 block h-0.5 w-8 rounded-full bg-accent"
                          />
                          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            {role.description}
                          </p>
                          <a
                            href={roleHref}
                            aria-label={`View ${role.title} details`}
                            title="Ask about this role"
                            className="relative z-20 mt-auto inline-flex min-h-8 items-center gap-1.5 pt-4 text-xs font-bold text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                          >
                            Ask about this role
                            <ArrowUpRight
                              aria-hidden="true"
                              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="process"
          className="scroll-mt-24 bg-background px-6 py-12 sm:py-16 lg:py-20"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
              <p className="eyebrow mb-3">A clear path to the right hire</p>
              <h2
                id="process-heading"
                className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
              >
                Our Recruitment Methodology
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Thoughtful steps from defining your needs to supporting your new team member.
              </p>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="relative z-10 mx-auto flex w-fit flex-col items-center rounded-2xl border border-primary/15 bg-card px-6 py-4 text-center shadow-lg shadow-primary/10 sm:px-9 sm:py-5">
                <span className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-primary/5 sm:h-16 sm:w-16">
                  <Workflow aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                <span className="font-display text-lg font-semibold text-foreground sm:text-xl">
                  Quorisx Hiring Process
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  From role definition to ongoing support
                </span>
              </div>

              <div aria-hidden="true" className="relative mx-auto h-14 max-w-5xl sm:h-16">
                <svg
                  className="absolute inset-0 hidden h-full w-full md:block"
                  viewBox="0 0 1000 64"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M500 0V30H166V64M500 30V64M500 30H833V64"
                    fill="none"
                    stroke="var(--color-border)"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                  />
                  <circle cx="166" cy="64" r="4" fill="var(--color-accent)" />
                  <circle cx="500" cy="64" r="4" fill="var(--color-accent)" />
                  <circle cx="833" cy="64" r="4" fill="var(--color-accent)" />
                </svg>
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-border to-accent/50 md:hidden" />
              </div>

              <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {recruitmentSteps.map(({ title, description, icon: Icon }, index) => (
                  <li
                    key={title}
                    className={`group relative flex min-h-48 flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-lg sm:p-6 ${
                      index === recruitmentSteps.length - 1
                        ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:col-start-2 lg:w-full"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/5 text-primary transition-colors group-hover:border-accent/35 group-hover:bg-accent/10 group-hover:text-accent">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </span>
                      <span className="font-display text-2xl text-primary/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-sans text-base font-extrabold leading-snug text-foreground sm:text-lg">
                      {title}
                    </h3>
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
          id={`${toRoleSlug(selectedFunction.label)}-faqs`}
          className="scroll-mt-24 bg-secondary/50 px-6 py-12 sm:py-16"
          aria-labelledby={`${toRoleSlug(selectedFunction.label)}-faqs-heading`}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">{config.faq.eyebrow}</p>
              <h2
                id={`${toRoleSlug(selectedFunction.label)}-faqs-heading`}
                className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
              >
                {config.faq.heading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {config.faq.description}
              </p>
              <a
                href="/contact#inquiry"
                className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Ask us a question
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-3">
              {config.faq.items.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                const answerId = `${toRoleSlug(selectedFunction.label)}-faq-answer-${index}`;
                return (
                  <article
                    key={question}
                    className={`overflow-hidden rounded-xl border bg-card transition-all duration-200 ${
                      isOpen
                        ? "border-accent/60 shadow-md shadow-primary/5"
                        : "hover:border-primary/25 hover:shadow-sm"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex min-h-16 w-full items-center gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:px-5"
                      >
                        <span
                          aria-hidden="true"
                          className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:flex ${
                            isOpen
                              ? "bg-accent text-accent-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-sm font-semibold leading-relaxed transition-colors sm:text-base ${
                            isOpen ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {question}
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={answerId}
                        className="border-t border-border px-4 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground sm:px-5"
                      >
                        {answer}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-12 sm:py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow mb-2">Ready to get started?</p>
              <h2 className="font-display text-2xl text-ink-foreground sm:text-3xl">
                Let’s find the right support for your day.
              </h2>
            </div>
            <a
              href="/contact#inquiry"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Book a Free Consultation
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

const onboardingStoryStyles =
  '\n.quorisx-color-story{font-family:Arial,sans-serif;color:#18364d;background:#f8f5ef;border:1px solid #e6e5df;border-radius:20px;overflow:hidden}.quorisx-color-story *{box-sizing:border-box}.quorisx-color-story .q-top{display:flex;align-items:center;justify-content:space-between;padding:22px 26px}.quorisx-color-story .q-brand{font:25px Georgia,serif}.quorisx-color-story .q-tag{font-size:11px;letter-spacing:1.4px}.quorisx-color-story .q-paper{position:relative;background:radial-gradient(ellipse at 22% 28%,#e1effc 0%,transparent 55%),radial-gradient(ellipse at 85% 70%,#d9eee7 0%,transparent 55%),#f4f5f0;padding:10px 0}.quorisx-color-story svg{display:block;width:100%;height:auto}.quorisx-color-story .q-copy{padding:22px 26px 12px;min-height:118px}.quorisx-color-story h3{font:28px/1.15 Georgia,serif;margin:0 0 9px}.quorisx-color-story p{font-size:14px;line-height:1.5;color:#496378;margin:0}.quorisx-color-story .q-nav{padding:12px 26px 24px;display:flex;gap:10px;align-items:center}.quorisx-color-story button{border:1px solid #d8d8ce;border-radius:50%;background:#e6eef3;color:#18364d;width:44px;height:44px;font-size:18px}.quorisx-color-story button:focus-visible{outline:3px solid #a48d34;outline-offset:3px}.quorisx-color-story .q-bars{flex:1;display:flex;gap:5px}.quorisx-color-story .q-bar{height:4px;background:#dbe5e9;flex:1;border-radius:3px;overflow:hidden}.quorisx-color-story .q-bar span{display:block;background:#da7845;height:100%;width:0}.quorisx-color-story .line{stroke:#244359;stroke-width:2.3;stroke-linecap:round;stroke-linejoin:round;fill:none}.quorisx-color-story .ink{fill:#244359}.quorisx-color-story .paper{fill:#ffffff}.quorisx-color-story .yellow{fill:#ffc67a}.quorisx-color-story .mint{fill:#a9dfd1}.quorisx-color-story svg text{font-family:Arial,sans-serif;fill:#244359}.quorisx-color-story .q-scene{opacity:0;transition:opacity .4s}.quorisx-color-story .q-scene.on{opacity:1}.quorisx-color-story .float{animation:qBob 3s ease-in-out infinite}.quorisx-color-story .path{stroke-dasharray:7 8;animation:qMarch 2s linear infinite}.quorisx-color-story .q-small{font-size:11px;color:#73766c;white-space:nowrap}@keyframes qBob{50%{transform:translateY(-5px)}}@keyframes qMarch{to{stroke-dashoffset:-30}}@media(prefers-reduced-motion:reduce){.quorisx-color-story *{animation:none!important;transition:none!important}}@media(max-width:500px){.quorisx-color-story .q-top{padding:18px}.quorisx-color-story .q-tag{font-size:9px}.quorisx-color-story .q-copy{padding:18px;min-height:130px}.quorisx-color-story h3{font-size:24px}.quorisx-color-story .q-nav{padding:10px 18px 20px}.quorisx-color-story .q-small{display:none}}\n\n.quorisx-color-story .q-paper{border-top:1px solid #dfE8e9;border-bottom:1px solid #dfe8e9}\n.quorisx-color-story .q-scene.on{animation:qEnter .55s ease both}\n.quorisx-color-story .q-top{background:#18364d;color:#fff8ef}\n.quorisx-color-story .q-tag{color:#a9dbd4}\n.quorisx-color-story .q-copy{background:#fffdfa}\n.quorisx-color-story .q-nav{background:#fffdfa}\n.quorisx-color-story .q-play{background:#da7845;color:#fff;border-color:#da7845}\n.quorisx-color-story .q-scene[data-scene="1"] .yellow,.quorisx-color-story .q-scene[data-scene="2"] .yellow{fill:#ffd0ba}\n.quorisx-color-story .q-scene[data-scene="4"] .line.path,.quorisx-color-story .q-scene[data-scene="5"] .line.path{stroke:#208675}\n@keyframes qEnter{from{transform:translateY(8px)}to{transform:translateY(0)}}\n@media(max-width:500px){.quorisx-color-story .q-tag{max-width:120px;text-align:right;line-height:1.5}.quorisx-color-story .q-copy p{font-size:15px}}\n\n.quorisx-color-story button{cursor:pointer}.quorisx-color-story .q-copy{min-height:142px}.quorisx-color-story .q-stage-count{font-size:12px;color:#496378}.quorisx-color-story .q-scene{visibility:hidden}.quorisx-color-story .q-scene.on{visibility:visible}.quorisx-color-story .q-bars button{height:16px;min-width:12px;flex:1;width:auto;padding:6px 0;border:0;background:transparent;border-radius:0}.quorisx-color-story .q-bars button>span{display:block;height:4px;background:#dbe5e9;border-radius:3px;overflow:hidden}.quorisx-color-story .q-bars i{height:100%;display:block;background:#da7845;transition:width .1s linear}.quorisx-color-story .q-heading{margin:0 0 26px}.quorisx-color-story .q-heading p{max-width:620px}.quorisx-color-story .q-paper svg{overflow:visible}\n\n.quorisx-color-story{border-radius:16px!important}\n.quorisx-color-story .q-top{padding:12px 20px!important;background:#142637!important}\n.quorisx-color-story .q-brand{font-size:23px!important}\n.quorisx-color-story .q-tag{color:#e5bd9b!important;font-size:10px!important}\n.quorisx-color-story .q-paper{padding:4px 0!important;background:#f5f1e9!important;min-width:0}\n.quorisx-color-story .q-paper svg{height:300px!important;max-width:100%;width:100%!important;overflow:hidden!important}\n.quorisx-color-story .q-copy{padding:24px!important;min-height:0!important;display:flex;flex-direction:column;justify-content:center;background:#fffaf2!important}\n.quorisx-color-story .q-copy h3{font-size:27px!important;line-height:1.16!important;margin:0 0 14px!important;color:#142637}\n.quorisx-color-story .q-copy p{font-size:15px!important;line-height:1.6!important}\n.quorisx-color-story .q-content{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr)}\n.quorisx-color-story .q-nav{padding:10px 18px!important;background:#fffaf2!important;border-top:1px solid #e5dfd3}\n.quorisx-color-story .q-scene,.quorisx-color-story .float,.quorisx-color-story .path{animation:none!important}\n.quorisx-color-story .mint{fill:#c6ded0!important}\n.quorisx-color-story .yellow{fill:#efba87!important}\n.quorisx-color-story .q-play{background:#c7743b!important;border-color:#c7743b!important}\n.quorisx-color-story .q-tabs{display:flex;gap:6px;padding:10px 18px;background:#fffaf2}\n.quorisx-color-story .q-tabs button{width:auto!important;height:auto!important;min-height:36px;border-radius:7px;padding:7px 12px;font-size:12px!important;background:transparent;border:1px solid #d7cdbf}\n.quorisx-color-story .q-tabs button[aria-pressed=true]{background:#142637;color:#fff;border-color:#142637}\n@media(max-width:640px){.quorisx-color-story .q-content{display:block}.quorisx-color-story .q-paper svg{height:230px!important}.quorisx-color-story .q-copy{padding:15px 18px!important;min-height:128px!important}.quorisx-color-story .q-copy h3{font-size:22px!important;margin-bottom:8px!important}.quorisx-color-story .q-copy p{font-size:14px!important}.quorisx-color-story .q-tabs{padding:8px 12px}.quorisx-color-story .q-nav{padding:8px 12px!important}}\n@media(min-width:641px) and (max-height:760px){.quorisx-color-story .q-paper svg{height:250px!important}}\n';
const onboardingStoryIllustration =
  '<svg viewBox="70 0 560 410" role="img" aria-label="Illustrated client onboarding story">\n<defs>\n<g id="q-person"><path d="M-44 10Q-55-35-25-53Q14-77 38-40Q54-15 37 14" class="ink"/><path d="M-29-25Q-31 22 0 28Q31 22 31-23Q4-12-9-36Q-16-22-29-25Z" class="line" style="fill:#e9b18c"/><path d="M-14 3l4 1M11 3l4-1M-5 15Q1 19 7 14" class="line"/><path d="M-14 26v13M13 26v13" class="line"/><path d="M-16 34L-48 44L-64 91L-42 100L-31 74L-34 133H35L31 74L42 100L64 91L48 44L15 34Q0 47-16 34" class="yellow"/><path d="M-48 48L-62 94L-46 110M48 48L62 94L46 110M-31 62v23M31 62v23" class="line"/><path d="M-62 95Q-75 118-26 137M62 95Q75 118 26 137" class="line"/><rect x="-43" y="90" width="86" height="58" rx="6" class="line" style="fill:#c2dced"/><circle cy="119" r="7" fill="#ffffff" stroke="#6f9cb8" stroke-width="2"/><path d="M-51 149H51" class="line"/></g>\n<g id="q-doc"><path d="M0 0H60L75 17V88H0Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><path d="M60 0v18h15M13 34h46M13 45h36M13 56h42M13 69h25" class="line"/></g>\n<g id="q-calendar"><rect width="108" height="86" rx="7" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><path d="M0 25H108M25-7v17M80-7v17M18 41h12M49 41h12M80 41h12M18 61h12M49 61h12M80 61h12" class="line"/></g>\n</defs>\n<g class="q-scene" data-scene="0">\n<g transform="translate(350 246)"><use href="#q-person"/></g>\n<g class="float"><path d="M170 34Q164 30 162 44V130Q164 140 176 138H309L335 158L331 136H529Q540 136 539 123V44Q538 32 525 34Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><rect x="181" y="49" width="88" height="23" rx="3" class="yellow"/><text x="191" y="66" font-size="15">CLIENT</text><text x="190" y="97" font-size="23">\u201cWe\'re ready to start.\u201d</text><text x="190" y="119" font-size="15">Please send the next steps.</text></g>\n<path d="M160 213q-27 30 17 51M160 253l17 11 1-19M525 206q25 32-14 61M510 248l1 19 17-6" class="line"/><path d="M242 340h-65M470 340h59" class="line"/>\n</g>\n<g class="q-scene" data-scene="1">\n<g transform="translate(350 246)"><use href="#q-person"/></g>\n<g transform="translate(109 43) rotate(-7 38 44)"><use href="#q-doc"/><rect x="-15" y="75" width="109" height="28" class="yellow"/><text x="-7" y="95" font-size="16">NOT SENT</text></g>\n<g transform="translate(471 46) rotate(5 54 43)"><use href="#q-calendar"/><rect x="-6" y="74" width="126" height="28" class="yellow"/><text x="2" y="94" font-size="15">UNCONFIRMED</text></g>\n<g class="float"><path d="M240 45H417V106H285l-19 17v-17h-26Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><text x="253" y="71" font-size="16">TEAM MESSAGE</text><text x="253" y="94" font-size="18">\u201cMissing details...\u201d</text></g>\n<path d="M193 155q-45 52 51 77M234 215l10 17-21 1M473 153q47 59-23 83M454 218l-4 18 20-5" class="line"/><path d="M296 185l-9-15M399 181l9-14" class="line"/>\n</g>\n<g class="q-scene" data-scene="2">\n<g transform="translate(350 246)"><use href="#q-person"/></g>\n<path d="M175 36H526V125H375l-25 22v-22H175Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><rect x="190" y="49" width="106" height="22" class="yellow"/><text x="198" y="65" font-size="15">FOLLOW-UP</text><text x="194" y="102" font-size="25">\u201cAny update on the kickoff?\u201d</text>\n<g transform="translate(110 184)"><circle cx="28" cy="29" r="28" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><path d="M28 10v21l13 9" class="line"/><text x="-8" y="83" font-size="15">Client waiting</text></g>\n<g transform="translate(503 184)"><rect width="71" height="53" rx="4" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><path d="M25 18v20M45 18v20M35 54v12M13 67h44" class="line"/><text x="-9" y="90" font-size="15">Team on hold</text></g>\n</g>\n<g class="q-scene" data-scene="3">\n<g transform="translate(245 246)"><use href="#q-person"/></g><g transform="translate(460 246)"><use href="#q-person"/><path d="M-16 34L-48 44L-62 87L-39 94L-31 74v16h62V74L40 94L62 87L48 44L15 34Q0 47-16 34" class="mint"/></g>\n<path d="M186 41H533V128H489l-18 22v-22H186Z" class="paper line" style="filter:drop-shadow(0px 5px 0px #20384a10)"/><rect x="199" y="54" width="166" height="23" class="mint"/><text x="208" y="71" font-size="15">YOUR ASSISTANT</text><text x="205" y="101" font-size="21">\u201cI\'ll coordinate the next steps.\u201d</text><text x="205" y="123" font-size="15">You stay in control of approvals.</text><path d="M312 259Q350 235 396 260M383 245l13 15-19 2" class="line path"/>\n</g>\n<g class="q-scene" data-scene="4">\n<g transform="translate(350 246)"><use href="#q-person"/></g>\n<path d="M168 163Q349 199 524 163" class="line path"/>\n<g transform="translate(116 47)"><use href="#q-doc"/><circle cx="76" cy="11" r="18" class="mint"/><path d="M67 11l6 6 12-14" class="line"/><text x="-9" y="116" font-size="15">Documents sent</text></g>\n<g transform="translate(298 52)"><use href="#q-calendar"/><circle cx="103" cy="5" r="18" class="mint"/><path d="M95 5l6 6 12-14" class="line"/><text x="-8" y="111" font-size="15">Kickoff confirmed</text></g>\n<g transform="translate(500 48)"><use href="#q-doc"/><circle cx="74" cy="11" r="18" class="mint"/><path d="M66 11l6 6 12-14" class="line"/><text x="-20" y="115" font-size="15">Handover ready</text></g>\n</g>\n<g class="q-scene" data-scene="5">\n<path d="M185 42Q349 17 517 42L509 98Q347 74 193 98Z" class="yellow"/><text x="350" y="73" text-anchor="middle" font-size="28">Let the work begin.</text>\n<g transform="translate(222 242) scale(.86)"><use href="#q-person"/></g><g transform="translate(477 242) scale(.86)"><use href="#q-person"/></g>\n<path d="M289 289Q350 251 410 289M400 273l10 16-18 3" class="line path"/><circle cx="350" cy="184" r="35" class="mint"/><path d="M331 184l13 13 27-30" class="line"/><text x="222" y="399" text-anchor="middle" font-size="16">Client informed</text><text x="477" y="399" text-anchor="middle" font-size="16">Team ready</text>\n</g>\n</svg>';
const onboardingStoryScenes = [
  [
    "Small gaps. A delayed start.",
    "Unsent documents and an unconfirmed kickoff leave your client waiting\u2014and your team unable to begin.",
  ],
  [
    "One person coordinates the next steps.",
    "Your Quorisx assistant prepares the paperwork, confirms the meeting and organizes the handover\u2014with your approvals.",
  ],
  [
    "Your client is informed. Your team is ready.",
    "The documents are sent, the kickoff is confirmed, and everyone knows what happens next.",
  ],
] as const;

function ClientOnboardingStory() {
  const rootRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const elapsedRef = useRef(0);
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const artwork = onboardingStoryIllustration.replace(
    /q-person|q-doc|q-calendar/g,
    (name) => `${instanceId}-${name}`,
  );
  const sceneIndex = Math.min(2, Math.floor(elapsed / 6));
  const scene = onboardingStoryScenes[sceneIndex]!;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Start on a clear, static problem scene. Playback is optional.
    const preferenceChanged = () => {
      if (media.matches) setPlaying(false);
    };
    media.addEventListener("change", preferenceChanged);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.15 },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", preferenceChanged);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    let previous = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      const delta = Math.min((now - previous) / 1000, 0.25);
      previous = now;
      if (!visibleRef.current || document.hidden) return;
      elapsedRef.current = (elapsedRef.current + delta) % 18;
      setElapsed(elapsedRef.current);
    }, 100);
    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    rootRef.current?.querySelectorAll<SVGGElement>(".q-scene").forEach((node, index) => {
      const active = index === [1, 3, 5][sceneIndex];
      node.classList.toggle("on", active);
      node.setAttribute("aria-hidden", String(!active));
    });
  }, [sceneIndex, artwork]);

  const jumpTo = (index: number) => {
    elapsedRef.current = ((index + 3) % 3) * 6;
    setElapsed(elapsedRef.current);
  };

  return (
    <section
      id="client-onboarding-story"
      className="scroll-mt-28 bg-background px-0 py-7 sm:px-6 sm:py-9"
      aria-labelledby={`${instanceId}-heading`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5 max-w-2xl px-4 sm:px-0">
          <p className="eyebrow mb-3">When the next steps get stuck</p>
          <h2
            id={`${instanceId}-heading`}
            className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
          >
            Don’t let the details delay the work.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            From a waiting client to a team ready to begin.
          </p>
        </div>
        <div
          ref={rootRef}
          id={`${instanceId}-story`}
          className="quorisx-color-story"
          role="region"
          aria-label="Illustrated client onboarding story"
        >
          <style>{onboardingStoryStyles}</style>
          <style>{`#${instanceId}-story .float,#${instanceId}-story .path{animation-play-state:${playing ? "running" : "paused"}}`}</style>
          <style>{`#${instanceId}-story{width:100%;max-width:100%}@media(max-width:640px){#${instanceId}-story .q-content{display:block}#${instanceId}-story .q-paper{width:100%;overflow:hidden}#${instanceId}-story .q-paper svg{display:block;height:auto!important;width:100%!important;max-width:100%;aspect-ratio:560/410;object-fit:contain}#${instanceId}-story .q-top{justify-content:center}}`}</style>
          <div className="q-top">
            <span className="q-tag">FROM WAITING TO WORKING</span>
          </div>
          <div className="q-tabs" role="group" aria-label="Story stages">
            {["The problem", "Our support", "The result"].map((label, index) => (
              <button
                type="button"
                key={label}
                aria-pressed={sceneIndex === index}
                onClick={() => {
                  setPlaying(false);
                  jumpTo(index);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="q-content">
            <div className="q-paper" dangerouslySetInnerHTML={{ __html: artwork }} />
            <div className="q-copy" aria-live={playing ? "off" : "polite"} aria-atomic="true">
              <h3>{scene[0]}</h3>
              <p>{scene[1]}</p>
            </div>
          </div>
          <div className="q-nav">
            <button
              type="button"
              onClick={() => jumpTo(sceneIndex - 1)}
              aria-label="Previous scene"
            >
              ‹
            </button>
            <button
              type="button"
              className="q-play"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause story" : "Play story"}
            >
              {playing ? "Ⅱ" : "▷"}
            </button>
            <button type="button" onClick={() => jumpTo(sceneIndex + 1)} aria-label="Next scene">
              ›
            </button>
            <div className="q-bars" role="group" aria-label="Choose a scene">
              {onboardingStoryScenes.map(([title], index) => (
                <button
                  type="button"
                  key={title}
                  onClick={() => jumpTo(index)}
                  aria-label={`Scene ${index + 1}: ${title}`}
                  aria-pressed={index === sceneIndex}
                >
                  <span>
                    <i
                      style={{
                        width: `${index < sceneIndex ? 100 : index === sceneIndex ? ((elapsed % 6) / 6) * 100 : 0}%`,
                      }}
                    />
                  </span>
                </button>
              ))}
            </div>
            <span className="q-small">Illustrative story</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-4 sm:px-0">
          <p className="text-sm text-muted-foreground">
            Clear responsibilities. Your approvals. Consistent follow-through.
          </p>
          <a
            href="/contact#inquiry"
            className="inline-flex min-h-12 items-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Discuss Your Support Needs
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* Bundled Lucide SVG icons
ISC License

Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/
const marketingStoryDocument: string =
  '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Quorisx Marketing & Creative</title><style>body{margin:0;background:transparent}</style></head><body><div id="qm-preview"><div aria-label="Marketing and Creative outsourcing animation" class="qm-player">\n<style>\n#qm-preview{font-family:Inter,Arial,sans-serif;color:#173441;width:100%}#qm-preview *{box-sizing:border-box}#qm-preview .qm-player{background:#f4f1e9;border-radius:20px;overflow:hidden}#qm-preview .top{padding:20px 24px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;letter-spacing:2px;color:#557078}#qm-preview .brand{font-weight:700;color:#173441}#qm-preview .stage{height:390px;position:relative;overflow:hidden;background:radial-gradient(ellipse at 50% 78%,#dce6df 0,transparent 60%)}#qm-preview .halo{position:absolute;width:330px;height:330px;border:1px solid #d6ded7;border-radius:50%;left:50%;top:18px;transform:translateX(-50%)}#qm-preview .halo:after{content:\'\';position:absolute;inset:25px;border:1px solid #e1e6de;border-radius:50%}#qm-preview .laptop{position:absolute;width:440px;left:50%;top:36px;transform:translateX(-50%);transition:transform .9s,width .9s}#qm-preview .lid{height:270px;border-radius:17px 17px 7px 7px;background:linear-gradient(130deg,#3d4a52,#12212b);padding:14px 10px 10px;box-shadow:0 25px 40px #203e4824;position:relative}#qm-preview .camera{width:4px;height:4px;position:absolute;top:5px;left:50%;border-radius:50%;background:#8ba8a6}#qm-preview .screen{height:100%;background:#f8faf8;border-radius:7px;overflow:hidden;position:relative}#qm-preview .base{height:12px;background:linear-gradient(#c6ced0,#839298);margin:0 -30px;border-radius:2px 2px 50% 50%;box-shadow:0 16px 20px #17344120}#qm-preview .base:after{content:\'\';display:block;width:64px;height:4px;background:#71858b;margin:auto;border-radius:0 0 5px 5px}#qm-preview .chrome{height:28px;display:flex;align-items:center;gap:5px;background:#edf1ec;padding:0 12px}#qm-preview .dot{width:5px;height:5px;border-radius:50%;background:#bac8c3}#qm-preview .chrome .line{width:70px;height:5px;margin:auto;background:#d3dfd9;border-radius:4px}#qm-preview .scene{position:absolute;inset:28px 0 0;opacity:0;transform:translateY(14px) scale(.97);transition:opacity .6s,transform .6s;pointer-events:none;padding:18px}#qm-preview .scene.active{opacity:1;transform:none}#qm-preview .crm{display:flex;gap:18px;height:100%}#qm-preview .rail{width:28px;display:flex;flex-direction:column;gap:18px;color:#a2b7b2}#qm-preview svg{width:22px;height:22px;stroke-width:1.7}#qm-preview .contact{flex:1;border:1px solid #dfe7e0;border-radius:12px;padding:16px;background:#fff}#qm-preview .person-row{display:flex;align-items:center;gap:14px}#qm-preview .avatar{width:48px;height:48px;border-radius:50%;background:#d1e8de;color:#197f73;display:grid;place-items:center;flex-shrink:0}#qm-preview .avatar svg{width:30px;height:30px}#qm-preview .lines{flex:1}#qm-preview .line{height:7px;border-radius:5px;background:#dce5df;margin:8px 0;width:100%}#qm-preview .line.short{width:60%}#qm-preview .line.dark{background:#8baca4;width:48%}#qm-preview .taskrow{display:flex;align-items:center;gap:10px;padding-top:13px;color:#618078}#qm-preview .taskrow .line{flex:1}#qm-preview .cal-trigger{background:#157d70;color:#fff;border-radius:8px;padding:7px;display:grid;place-items:center;position:absolute;right:35px;bottom:24px}#qm-preview .calendar{display:flex;gap:16px;height:100%}#qm-preview .cal-main{flex:1}#qm-preview .cal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;color:#1e7b70}#qm-preview .cal-head span{width:60px;height:8px;background:#a2beb3;border-radius:5px}#qm-preview .grid{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}#qm-preview .day{height:25px;background:#e9efea;border-radius:5px;display:grid;place-items:center}#qm-preview .day:after{content:\'\';width:5px;height:5px;border-radius:50%;background:#a8bdb4}#qm-preview .day.selected{background:#157d70;box-shadow:0 0 0 4px #d9ece3}#qm-preview .day.selected:after{background:#fff}#qm-preview .slots{width:84px;padding-top:10px}#qm-preview .slot{height:27px;margin-bottom:9px;border-radius:6px;background:#e7eee8}#qm-preview .slot.chosen{background:#d4e9df;border:1px solid #379b88;display:grid;place-items:center;color:#157d70}#qm-preview .cursor{position:absolute;top:175px;left:330px;color:#193b4c;filter:drop-shadow(0 2px 2px #fff);transition:top 1s,left 1s,opacity .4s;z-index:5}#qm-preview .cursor svg{fill:#fff;width:26px;height:26px}#qm-preview .phone{position:absolute;left:calc(50% + 90px);top:22px;width:139px;height:270px;background:linear-gradient(120deg,#526068,#13212a);padding:7px;border-radius:25px;box-shadow:0 20px 32px #17344138;transform:translate(140px,80px) rotate(12deg);opacity:0;transition:transform .85s,opacity .65s;z-index:6}#qm-preview .phone.visible{transform:translate(0,0) rotate(0);opacity:1}#qm-preview .phone-screen{height:100%;border-radius:19px;background:#eff5ef;padding:35px 10px 10px;position:relative;text-align:center}#qm-preview .notch{position:absolute;top:8px;left:37px;width:48px;height:12px;background:#192b32;border-radius:12px}#qm-preview .phone .avatar{margin:0 auto 12px;width:36px;height:36px}#qm-preview .invite{background:#fff;border-radius:12px;padding:13px 8px;box-shadow:0 6px 12px #1734410b;color:#197f73}#qm-preview .invite>svg{width:30px;height:30px}#qm-preview .accept{height:28px;background:#157d70;color:#fff;border-radius:7px;margin:12px 0 0;display:grid;place-items:center}#qm-preview .accepted{position:absolute;inset:30px 7px 7px;background:#eff5ef;border-radius:15px;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transform:scale(.8);transition:all .6s}#qm-preview .accepted.show{opacity:1;transform:scale(1)}#qm-preview .bigcheck{width:64px;height:64px;border-radius:50%;background:#157d70;color:#fff;display:grid;place-items:center;box-shadow:0 0 0 10px #d9ece1}#qm-preview .bigcheck svg{width:34px;height:34px}#qm-preview .accepted .avatar{margin-top:24px}#qm-preview .brief{display:flex;gap:18px}#qm-preview .profile{width:94px;background:#e6f0e9;border-radius:12px;padding:18px 14px}#qm-preview .profile .avatar{margin:auto}#qm-preview .notes{flex:1}#qm-preview .note{display:flex;align-items:center;gap:10px;margin:12px 0;color:#15806d}#qm-preview .note .line{flex:1}#qm-preview .join{margin-top:18px;background:#157d70;color:#fff;padding:8px 22px;border-radius:8px;display:inline-flex;align-items:center;gap:10px}#qm-preview .call{padding:10px;background:#143d42}#qm-preview .participants{display:flex;gap:8px;height:155px}#qm-preview .participant{position:relative;flex:1;overflow:hidden;border-radius:8px;background:linear-gradient(120deg,#e2d7c3,#c4d5ca);display:grid;place-items:center}#qm-preview .participant.second{background:linear-gradient(130deg,#d8e5dc,#aec5c3)}#qm-preview .participant:before{content:\'\';position:absolute;width:38px;height:90px;background:#ffffff45;left:10px;top:0;border-left:3px solid #ffffff75;border-right:3px solid #ffffff75}#qm-preview .person{position:absolute;bottom:-20px;width:100px;height:90px;background:#314d64;border-radius:50% 50% 0 0}#qm-preview .person:before{content:\'\';position:absolute;left:30px;top:-48px;width:42px;height:54px;background:#c89370;border-radius:40% 40% 45% 45%;border-top:11px solid #34332d;box-shadow:0 10px 0 -6px #c89370}#qm-preview .second .person{background:#a16c4e}#qm-preview .second .person:before{background:#e0b392;border-top-color:#655342}#qm-preview .wave{position:absolute;bottom:9px;right:9px;display:flex;gap:3px;align-items:center;height:15px;padding:3px 5px;background:#157d70;border-radius:4px}#qm-preview .wave b{width:3px;height:8px;background:#fff;border-radius:2px;transform-origin:center}#qm-preview .call-tools{display:flex;justify-content:center;gap:16px;padding-top:10px;color:#d4e7e0}#qm-preview .hangup{background:#ce765d;border-radius:12px;padding:1px 12px;color:white}#qm-preview .route{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:0}#qm-preview .node{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:#e3e8df;color:#91a79c;transition:all .5s}#qm-preview .node.done{background:#1b8070;color:white;box-shadow:0 3px 10px #157d7020}#qm-preview .connector{width:40px;height:2px;background:#d4dfd4}#qm-preview .connector.done{background:#1b8070}#qm-preview .caption{text-align:center;font-size:16px;min-height:23px;margin:0 12px 18px;font-weight:500}#qm-preview .controls{display:flex;align-items:center;gap:12px;background:#e9eae2;padding:13px 18px}#qm-preview button{border:0;background:transparent;color:#173441;min-height:36px;font:inherit;font-size:12px;display:flex;align-items:center;justify-content:center;gap:6px;border-radius:8px;padding:6px}#qm-preview button:hover{background:#d9e2d8}#qm-preview button:focus-visible{outline:2px solid #157d70;outline-offset:2px}#qm-preview input{flex:1;min-width:30px;accent-color:#157d70}#qm-preview .time{font-size:11px;font-variant-numeric:tabular-nums;color:#4a686a}#qm-preview .voice{font-size:11px}#qm-preview .hide{display:none}\n@media(max-width:520px){#qm-preview .stage{height:318px}#qm-preview .laptop{width:330px;top:32px;transform:translateX(-50%) scale(.85);transform-origin:top center}#qm-preview .lid{height:260px}#qm-preview .phone{left:calc(50% + 28px);transform:translate(130px,70px) scale(.8);transform-origin:top center}#qm-preview .phone.visible{transform:scale(.8)}#qm-preview .top{padding:17px 18px 0;font-size:10px}#qm-preview .scene{padding:12px}#qm-preview .slots{width:65px}#qm-preview .cursor{left:240px}#qm-preview .controls{gap:5px;padding:9px}#qm-preview .caption{font-size:14px}#qm-preview .time{display:none}#qm-preview .connector{width:27px}#qm-preview .participants{height:153px}}\n#qm-preview .qm-player{background:#f7f4ee}#qm-preview .stage{height:365px;background:radial-gradient(ellipse at 34% 48%,#e3eafa 0,transparent 52%),radial-gradient(ellipse at 75% 75%,#e0efe5 0,transparent 45%)}\n#qm-preview .top{padding-bottom:3px}#qm-preview .top>span:last-child{letter-spacing:1px;font-size:10px}#qm-preview .halo{opacity:.45}#qm-preview .laptop{transition:margin-left .85s,transform .85s;top:24px}#qm-preview .screen{isolation:isolate}#qm-preview .scene{transition:opacity .55s,transform .7s}#qm-preview .scene.active{transform:scale(1)}#qm-preview .avatar{background:linear-gradient(145deg,#c8e9e4,#ecf7ef);color:#127e70;border:2px solid #ffffff}#qm-preview .rail svg{padding:4px;border-radius:7px;width:29px;height:29px;background:#e8e9f7;color:#7260c4}#qm-preview .rail svg:nth-child(3){background:#dcf2e5;color:#208964}#qm-preview .rail svg:nth-child(4){background:#e0eafb;color:#3377d1}#qm-preview .taskrow svg{color:#d57648;background:#fff0e5;padding:3px;border-radius:5px;width:26px;height:26px}#qm-preview .taskrow:nth-child(3) svg{color:#13836e;background:#e0f4e9}#qm-preview .cal-trigger{background:linear-gradient(135deg,#478cf0,#275fc5);box-shadow:0 4px 9px #3475d534}#qm-preview .cal-head{color:#377cda}#qm-preview .day{font-size:11px;color:#718c94}#qm-preview .day:after{display:none}#qm-preview .day.selected{background:#3576d6;color:white;box-shadow:0 0 0 3px #dce9fd;font-weight:600}#qm-preview .grid .day.selected.pending{background:#e9efea;color:#718c94;box-shadow:none}#qm-preview .slot.chosen.pending{opacity:.3}#qm-preview .invite>svg{color:#397bd8;background:#edf3ff;padding:5px;width:40px;height:40px;border-radius:10px}#qm-preview .accept{font-size:11px;display:flex;gap:5px;justify-content:center}#qm-preview .accept svg{width:15px;height:15px}#qm-preview .note:nth-child(2){color:#8d69c1}#qm-preview .note:nth-child(3){color:#377cda}#qm-preview .join{background:linear-gradient(135deg,#278cde,#2962c3);box-shadow:0 4px 10px #2866c82b}#qm-preview .route{bottom:12px}#qm-preview .node{border-radius:11px;width:38px;height:38px;background:#e4e6e2;color:#81928a}#qm-preview .node:nth-child(1).done{background:#8464c1}#qm-preview .node:nth-child(3).done{background:#3d7dda}#qm-preview .node:nth-child(5).done{background:#20a17c}#qm-preview .node:nth-child(7).done{background:#2083bb}#qm-preview .focus-box{position:absolute;pointer-events:none;z-index:9;border:2px solid #eb9760;border-radius:12px;box-shadow:0 0 0 4px #f4b77824;transition:left .55s,top .55s,width .55s,height .55s,border-radius .55s,opacity .35s;opacity:0}#qm-preview .focus-box.circle{border-radius:50%;border-color:#e89554}#qm-preview .focus-box.confirmed{border-color:#1c9f7d;box-shadow:0 0 0 5px #27aa801b}#qm-preview .focus-label{position:absolute;left:4px;top:-24px;border-radius:5px;background:#173c4c;color:#fff;white-space:nowrap;font-size:10px;padding:4px 8px;letter-spacing:.2px;box-shadow:0 3px 6px #17344116}#qm-preview .caption-wrap{margin:0 18px 16px;padding:14px 20px 16px;background:#183c4d;border-radius:12px;box-shadow:0 8px 20px #17344110;min-height:102px;text-align:center}#qm-preview .caption-step{display:block;font-size:10px;letter-spacing:1.8px;color:#8ecfc1;margin-bottom:9px;font-weight:600}#qm-preview .caption{color:#fff;font-size:18px;line-height:1.45;max-width:560px;margin:0 auto;font-weight:500}#qm-preview .caption em{font-style:normal;color:#ffd39c}#qm-preview .caption-wrap.switching .caption{animation:qm-caption .5s ease both}#qm-preview .controls{background:#eaece6}#qm-preview .call-tools>svg{background:#24545b;border-radius:6px;padding:3px;width:25px;height:25px}#qm-preview .call-tools>svg:nth-child(2){background:#3477c8}#qm-preview .cursor{z-index:10}#qm-preview button{min-height:40px}#qm-preview .muted-hint{font-size:10px;letter-spacing:.4px;color:#638078;margin-right:3px}\n@keyframes qm-caption{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}\n@media(max-width:520px){#qm-preview .stage{height:300px}#qm-preview .laptop{top:30px}#qm-preview .caption-wrap{margin:0 10px 10px;padding:12px 13px;min-height:111px}#qm-preview .caption{font-size:15px;line-height:1.5}#qm-preview .caption-step{font-size:9px;margin-bottom:7px}#qm-preview .focus-label{font-size:9px;padding:3px 6px;top:-21px}#qm-preview .top>span:last-child{font-size:8px;letter-spacing:.5px}#qm-preview .muted-hint{display:none}#qm-preview .route{bottom:9px}}\n@media(prefers-reduced-motion:reduce){#qm-preview *{animation:none!important;transition:none!important}}\n\n#qm-preview .lead-header{display:flex;align-items:center;gap:8px;color:#2f6fc4;font-size:12px;margin-bottom:15px}#qm-preview strong{font-weight:600}#qm-preview .status-badge{margin-left:auto;background:#ffeadb;color:#a85c2f;border-radius:5px;padding:5px;font-size:9px}#qm-preview .status-badge.green{background:#ddf2e8;color:#17715d}#qm-preview .lead-message{display:flex;align-items:center;gap:10px;padding:12px;border:1px solid #e0e6e4;border-radius:10px;background:white;font-size:11px}#qm-preview .lead-message p{font-size:11px;line-height:1.4;margin:6px 0;color:#638078}#qm-preview .missed-alert{margin-top:12px;display:flex;align-items:center;gap:9px;color:#b45f42;background:#fff0e8;border-radius:8px;padding:9px;font-size:12px}#qm-preview .owner-busy{display:flex;align-items:center;gap:7px;margin-top:11px;font-size:10px;color:#6a7e86}#qm-preview .owner-busy svg{width:17px}#qm-preview .chat-in,#qm-preview .chat-out{font-size:12px;padding:13px;border-radius:12px;background:#e8edf5;max-width:85%;margin:9px 0}#qm-preview .chat-out{background:#d8eee4;margin-left:auto;color:#176b58}#qm-preview .rep-action{margin-top:16px;display:flex;gap:9px;align-items:center;font-size:11px;color:#267b69}#qm-preview .qualify-list>div{display:flex;align-items:center;gap:10px;padding:9px 5px;border-bottom:1px solid #e4ebe6;font-size:11px}#qm-preview .qualify-list>div>span{color:#769088}#qm-preview .qualify-list strong{margin-left:auto;color:#36516b}#qm-preview .qualify-list svg{color:#7861b9;width:19px;height:19px}#qm-preview .recorded{font-size:10px;display:flex;gap:8px;align-items:center;margin-top:9px;color:#188364}#qm-preview .recorded svg{width:17px}#qm-preview .follow-task{display:flex;gap:9px;align-items:center;font-size:11px;padding:11px 9px;background:#edf2f7;border-radius:8px;margin-bottom:9px}#qm-preview .follow-task svg{color:#3e7dc9}#qm-preview .follow-task strong{margin-left:auto;color:#238466;font-size:10px}#qm-preview .client-reply{display:flex;align-items:center;gap:9px;font-size:12px;background:#d9f0e4;color:#22795f;border-radius:9px;margin-left:30px;padding:11px}#qm-preview .role-identity{position:absolute;right:21px;bottom:72px;font-size:10px;display:flex;align-items:center;gap:7px;background:#fffdf8;color:#50746b;padding:8px 11px;border-radius:8px;box-shadow:0 5px 20px #16394c15}#qm-preview .role-identity svg{width:18px;color:#259077}#qm-preview .caption-wrap{min-height:110px}#qm-preview [data-action=voice]{white-space:nowrap;font-size:11px}#qm-preview .stage{height:365px}@media(max-width:520px){#qm-preview .stage{height:300px}#qm-preview .role-identity{right:12px;bottom:57px;font-size:9px;padding:5px 7px}#qm-preview .caption-wrap{min-height:117px}#qm-preview .lead-header{font-size:11px}#qm-preview .lead-message{padding:8px}#qm-preview .lead-message .avatar{width:35px;height:35px}}\n#qm-preview .stage{background:radial-gradient(ellipse at 28% 45%,#efe0ec,transparent 55%),radial-gradient(ellipse at 75% 70%,#e4ebd6,transparent 45%)}#qm-preview .mk-head{display:flex;gap:8px;align-items:center;font-size:11px;color:#5e457b;margin-bottom:12px}#qm-preview .mk-head svg{color:#9361b8;flex-shrink:0}#qm-preview .unfinished{display:flex;gap:10px}#qm-preview .draft{flex:1}#qm-preview .draft{height:110px;border-radius:10px;display:flex;flex-direction:column;gap:14px;justify-content:center;align-items:center;transform:rotate(-4deg);font-size:10px;background:#f7dce5;color:#b76580}#qm-preview .draft.blue{background:#e1e9f4;color:#627eac;transform:rotate(5deg)}#qm-preview .draft.cream{background:#f3e9ce;color:#a1884b;transform:rotate(-2deg)}#qm-preview .draft svg{width:28px;height:28px}#qm-preview .mk-alert{display:flex;align-items:center;gap:8px;margin-top:16px;font-size:11px;color:#b46647}#qm-preview .brief-list>div{display:flex;gap:9px;align-items:center;padding:11px 0;font-size:10px;border-bottom:1px solid #e6e5e9}#qm-preview .brief-list svg{width:20px;color:#9b68aa}#qm-preview .brief-list span{color:#8b8093}#qm-preview .brief-list strong{margin-left:auto;color:#514862}#qm-preview .team-tags{display:flex;gap:9px;margin-top:15px}#qm-preview .team-tags span{display:flex;align-items:center;gap:5px;background:#eee8f6;border-radius:6px;font-size:9px;color:#765991;padding:6px}#qm-preview .team-tags svg{width:14px;height:14px}#qm-preview .editor{display:flex;height:100%;gap:12px}#qm-preview .tools{display:flex;flex-direction:column;gap:16px;color:#7a638c;width:23px}#qm-preview .tools svg{width:19px;height:19px}#qm-preview .artwork{position:relative;background:#e7bd98;border-radius:5px;overflow:hidden;flex:1;padding:14px 12px;color:#593b33;height:100%;isolation:isolate}#qm-preview .artwork:before{content:\'\';width:125px;height:150px;border-radius:50% 50% 0 0;background:#efcfb2;position:absolute;right:-12px;bottom:0;z-index:-1}#qm-preview .mini-brand{font-size:8px;letter-spacing:1.5px;display:block}#qm-preview .artwork>strong{font:500 24px/1.05 Georgia,serif;display:block;margin-top:12px}#qm-preview .artwork>small{position:absolute;bottom:13px;left:12px;font-size:8px}#qm-preview .candle{width:58px;height:75px;position:absolute;right:22px;bottom:24px;background:linear-gradient(90deg,#95592f,#d69d61 42%,#a56438);border-radius:6px 6px 12px 12px;box-shadow:9px 9px 14px #663a2b26;display:flex;align-items:center;justify-content:center}#qm-preview .candle:before{content:\'\';position:absolute;top:-4px;left:0;right:0;height:8px;border-radius:50%;background:#f5dabc;border:2px solid #a86e3d}#qm-preview .candle:after{content:\'\';position:absolute;width:2px;height:7px;top:-8px;background:#564439}#qm-preview .candle span{background:#f8ebd5;padding:11px 5px;font-size:7px;letter-spacing:1px;color:#6e4838}#qm-preview .design-side{width:58px;display:flex;flex-wrap:wrap;gap:5px;align-content:flex-start}#qm-preview .swatch{width:24px;height:24px;background:#b56d44;border-radius:50%;border:3px solid white}#qm-preview .swatch.sand{background:#edd8b7}#qm-preview .swatch.teal{background:#4d786e}#qm-preview .copy-chip{margin-top:8px;display:flex;gap:5px;align-items:center;color:#846796;font-size:9px}#qm-preview .copy-chip svg{width:17px}#qm-preview .review-layout{display:flex;gap:15px;height:155px}#qm-preview .small-art{width:145px;flex:none;padding:10px}#qm-preview .small-art>strong{font-size:19px}#qm-preview .small-art .candle{width:44px;height:55px;bottom:12px;right:15px}#qm-preview .review-panel{flex:1;font-size:10px}#qm-preview .feedback{display:flex;gap:6px;padding:10px;background:#eeebf5;border-radius:8px;color:#77578a;line-height:1.5}#qm-preview .feedback svg{width:19px;flex-shrink:0}#qm-preview .revision{display:flex;align-items:center;gap:6px;margin-top:15px;color:#7c8e88}#qm-preview .approval{display:flex;gap:6px;align-items:center;background:#d9eee4;color:#28775d;padding:8px;border-radius:6px;margin-top:10px}#qm-preview .publish-row{display:flex;gap:9px;align-items:center;margin:10px 0;font-size:11px}#qm-preview .channel{width:35px;height:35px;display:grid;place-items:center;border-radius:10px;flex-shrink:0}#qm-preview .instagram{background:linear-gradient(135deg,#9e53b6,#e47c6e,#edb553);color:white}#qm-preview .email{background:#e3ebfa;color:#4280ce}#qm-preview .web{background:#ddf0e7;color:#30836b}#qm-preview .publish-row small{font-size:9px;display:block;margin-top:3px;color:#7d8f88}#qm-preview .scheduled{margin-left:auto;color:#927044;background:#f4eddc;padding:6px;border-radius:6px;font-size:9px;display:flex;gap:4px;align-items:center}#qm-preview .scheduled svg{width:13px;height:13px}#qm-preview .web-hero{background:#ecd3b6;position:relative;padding:18px;border-radius:8px;color:#5b3f33;height:145px}#qm-preview .web-hero strong{display:block;font:500 26px/1.1 Georgia,serif;margin:8px 0}#qm-preview .web-hero .candle{right:39px;bottom:25px;width:62px;height:83px}#qm-preview .shop-cta{display:inline-flex;align-items:center;gap:5px;font-size:8px;background:#536e5c;color:white;border-radius:4px;padding:6px}#qm-preview .shop-cta svg{width:11px;height:11px}#qm-preview .live-state{display:flex;gap:6px;align-items:center;font-size:10px;color:#337e63;margin-top:7px}#qm-preview .live-state svg{width:16px;height:16px}#qm-preview .measure-list>div{display:flex;align-items:center;gap:9px;border-bottom:1px solid #e3e9e5;padding:10px 0;font-size:11px}#qm-preview .measure-list svg{color:#9a6ca8;width:20px}#qm-preview .measure-list span{margin-left:auto;color:#7c8b83;font-size:9px}#qm-preview .next-creative{font-size:10px;display:flex;align-items:center;gap:8px;background:#e1eee5;color:#35795d;border-radius:6px;padding:8px;margin-top:9px}#qm-preview .next-creative svg{width:18px}#qm-preview .phone-screen{padding:34px 8px 8px}#qm-preview .social-top{font-size:9px;display:flex;gap:6px;align-items:center;margin-bottom:10px}#qm-preview .social-top svg{width:19px;color:#b76798}#qm-preview .social-post{height:140px;padding:10px 8px}#qm-preview .social-post>strong{font-size:19px}#qm-preview .social-post .candle{width:40px;height:52px;right:14px;bottom:12px}#qm-preview .social-icons{display:flex;gap:10px;margin-top:10px;color:#8c6584}#qm-preview .social-icons svg{width:17px;height:17px}#qm-preview .role-identity{color:#876294}#qm-preview .role-identity svg{color:#a66cab}@media(max-width:520px){#qm-preview .small-art{width:110px}#qm-preview .small-art>strong{font-size:17px}#qm-preview .feedback{font-size:9px;padding:7px}#qm-preview .artwork>strong{font-size:21px}#qm-preview .design-side{width:45px}#qm-preview .measure-list span{font-size:8px}#qm-preview .brief-list strong{font-size:9px}#qm-preview .web-hero .candle{right:18px;width:48px;height:70px}#qm-preview .web-hero strong{font-size:23px}}\n\n#qm-preview .empty-week{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;text-align:center;margin-top:17px;color:#94a49e;font-size:9px}#qm-preview .empty-week>div{height:63px;border:1px dashed #cbd5ce;border-radius:7px;background:#edf0eb}#qm-preview .quiet-alert{display:flex;align-items:center;justify-content:center;gap:10px;color:#b16a45;background:#ffeddf;padding:10px;border-radius:8px;margin-top:12px;font-size:12px}#qm-preview .outsourcing-team{display:flex;gap:10px;justify-content:center;margin-top:15px}#qm-preview .team-role{display:flex;flex-direction:column;align-items:center;gap:12px;flex:1;padding:16px 5px;background:#eee7f6;border-radius:12px;font-size:10px;color:#795ba1}#qm-preview .team-role:nth-child(2){background:#f9e3d5;color:#bd7447}#qm-preview .team-role:nth-child(3){background:#dff0e8;color:#38866d}#qm-preview .team-role svg{width:30px;height:30px}#qm-preview .ownership{display:flex;justify-content:center;align-items:center;gap:12px;font-size:12px;line-height:1.5;color:#4b7066;margin-top:22px}#qm-preview .ownership svg{width:30px;height:30px}#qm-preview .caption{font-size:20px;line-height:1.4}#qm-preview .caption-wrap{min-height:105px}#qm-preview .mk-alert{font-size:10px}@media(max-width:520px){#qm-preview .caption{font-size:17px}#qm-preview .caption-wrap{min-height:110px}}\n</style>\n<div class="top"><span class="brand">QUORISX</span><span>YOUR OUTSOURCED MARKETING &amp; CREATIVE TEAM</span></div>\n<div aria-label="An existing team lacks time and specialist skills. Outsourcing adds design and copy support for an agreed scope without recruiting each skill internally. The client retains priorities and approvals." class="stage" role="img"><div class="halo"></div>\n<div class="laptop"><div class="lid"><span class="camera"></span><div class="screen"><div class="chrome"><b class="dot"></b><b class="dot"></b><b class="dot"></b><div class="line"></div></div>\n<div class="scene" data-view="problem"><div class="mk-head"><svg class="lucide lucide-users" data-lucide="users" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle r="4" cy="7" cx="9" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg><strong>Your team already has a full workload.</strong></div><div class="unfinished"><div class="draft pink"><svg class="lucide lucide-palette" data-lucide="palette" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle fill="currentColor" r=".5" cy="6.5" cx="13.5" /><circle fill="currentColor" r=".5" cy="10.5" cx="17.5" /><circle fill="currentColor" r=".5" cy="7.5" cx="8.5" /><circle fill="currentColor" r=".5" cy="12.5" cx="6.5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg><span>Design needed</span></div><div class="draft blue"><svg class="lucide lucide-file-pen-line" data-lucide="file-pen-line" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" /><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /><path d="M8 18h1" /></svg><span>Copy needed</span></div><div class="draft cream"><svg class="lucide lucide-megaphone" data-lucide="megaphone" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg><span>Campaign due</span></div></div><div class="quiet-alert"><svg class="lucide lucide-clock-alert" data-lucide="clock-alert" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2" /><path d="M16 21.16a10 10 0 1 1 5-13.516" /><path d="M20 11.5v6" /><path d="M20 21.5h.01" /></svg><strong>More work. Missing skills. Same team.</strong></div></div>\n<div class="scene" data-view="plan"><div class="mk-head"><svg class="lucide lucide-user-round-search" data-lucide="user-round-search" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle r="5" cy="8" cx="10" /><path d="M2 21a8 8 0 0 1 10.434-7.62" /><circle r="3" cy="18" cx="18" /><path d="m22 22-1.9-1.9" /></svg><strong>Each new hire takes time to bring onboard.</strong></div><div class="outsourcing-team"><span class="team-role"><svg class="lucide lucide-file-user" data-lucide="file-user" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle r="2" cy="13" cx="12" /></svg>Recruit</span><span class="team-role"><svg class="lucide lucide-messages-square" data-lucide="messages-square" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>Interview</span><span class="team-role"><svg class="lucide lucide-presentation" data-lucide="presentation" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20" /><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /><path d="m7 21 5-5 5 5" /></svg>Onboard</span></div><div class="ownership"><svg class="lucide lucide-puzzle" data-lucide="puzzle" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" /></svg><strong>What if you could outsource<br>the skills your team needs?</strong></div></div>\n<div class="scene" data-view="design"><div class="editor"><div class="tools"><svg class="lucide lucide-mouse-pointer-2" data-lucide="mouse-pointer-2" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" /></svg><svg class="lucide lucide-type" data-lucide="type" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="4 7 4 4 20 4 20 7" /><line y2="20" y1="20" x2="15" x1="9" /><line y2="20" y1="4" x2="12" x1="12" /></svg><svg class="lucide lucide-image" data-lucide="image" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect ry="2" rx="2" y="3" x="3" height="18" width="18" /><circle r="2" cy="9" cx="9" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg><svg class="lucide lucide-palette" data-lucide="palette" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle fill="currentColor" r=".5" cy="6.5" cx="13.5" /><circle fill="currentColor" r=".5" cy="10.5" cx="17.5" /><circle fill="currentColor" r=".5" cy="7.5" cx="8.5" /><circle fill="currentColor" r=".5" cy="12.5" cx="6.5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg></div><div class="artwork"><span class="mini-brand">AMBER COLLECTION</span><strong>Make room<br>for calm.</strong><div class="candle"><span>AMBER</span></div><small>Discover the collection</small></div><div class="design-side"><span class="swatch"></span><span class="swatch sand"></span><span class="swatch teal"></span><div class="copy-chip"><svg class="lucide lucide-type" data-lucide="type" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="4 7 4 4 20 4 20 7" /><line y2="20" y1="20" x2="15" x1="9" /><line y2="20" y1="4" x2="12" x1="12" /></svg><span>Copy</span></div><div class="copy-chip"><svg class="lucide lucide-image" data-lucide="image" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect ry="2" rx="2" y="3" x="3" height="18" width="18" /><circle r="2" cy="9" cx="9" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg><span>Visuals</span></div></div></div></div>\n\n\n<div class="scene" data-view="launch"><div class="mk-head"><svg class="lucide lucide-globe" data-lucide="globe" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle r="10" cy="12" cx="12" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg><strong>Your collection, ready to discover.</strong></div><div class="web-hero"><div><span class="mini-brand">AMBER COLLECTION</span><strong>Make room<br>for calm.</strong><span class="shop-cta">Explore collection <svg class="lucide lucide-arrow-right" data-lucide="arrow-right" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span></div><div class="candle"><span>AMBER</span></div></div><div class="live-state"><svg class="lucide lucide-circle-check" data-lucide="circle-check" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle r="10" cy="12" cx="12" /><path d="m9 12 2 2 4-4" /></svg>Approved campaign published</div></div>\n\n<div class="cursor"><svg class="lucide lucide-mouse-pointer-2" aria-hidden="true" data-lucide="mouse-pointer-2" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" /></svg></div></div></div><div class="base"></div></div>\n<div class="phone"><div class="phone-screen"><div class="notch"></div><div class="social-top"><svg class="lucide lucide-instagram" data-lucide="instagram" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect ry="5" rx="5" y="2" x="2" height="20" width="20" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line y2="6.5" y1="6.5" x2="17.51" x1="17.5" /></svg>Amber collection</div><div class="artwork social-post"><span class="mini-brand">NEW COLLECTION</span><strong>Make room<br>for calm.</strong><div class="candle"><span>AMBER</span></div></div><div class="social-icons"><svg class="lucide lucide-heart" data-lucide="heart" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg><svg class="lucide lucide-message-circle" data-lucide="message-circle" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg><svg class="lucide lucide-send" data-lucide="send" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg></div></div></div>\n<div aria-hidden="true" class="focus-box"><span class="focus-label">Client record</span></div><div class="role-identity"><svg class="lucide lucide-palette" data-lucide="palette" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle fill="currentColor" r=".5" cy="6.5" cx="13.5" /><circle fill="currentColor" r=".5" cy="10.5" cx="17.5" /><circle fill="currentColor" r=".5" cy="7.5" cx="8.5" /><circle fill="currentColor" r=".5" cy="12.5" cx="6.5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>Quorisx · Marketing &amp; Creative</div><div class="route"><span class="node done"><svg class="lucide lucide-clipboard-list" aria-hidden="true" data-lucide="clipboard-list" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect ry="1" rx="1" y="2" x="8" height="4" width="8" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg></span><span class="connector"></span><span class="node"><svg class="lucide lucide-palette" aria-hidden="true" data-lucide="palette" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle fill="currentColor" r=".5" cy="6.5" cx="13.5" /><circle fill="currentColor" r=".5" cy="10.5" cx="17.5" /><circle fill="currentColor" r=".5" cy="7.5" cx="8.5" /><circle fill="currentColor" r=".5" cy="12.5" cx="6.5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg></span><span class="connector"></span><span class="node"><svg class="lucide lucide-calendar-check" aria-hidden="true" data-lucide="calendar-check" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4" /><path d="M16 2v4" /><rect rx="2" y="4" x="3" height="18" width="18" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg></span><span class="connector"></span><span class="node"><svg class="lucide lucide-megaphone" aria-hidden="true" data-lucide="megaphone" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg></span></div></div>\n<div class="caption-wrap"><span class="caption-step">01 / 04 · THE CAPACITY GAP</span><p aria-live="polite" class="caption">Your team is already stretched.<br><em>Marketing needs skills and time they don’t have.</em></p></div>\n<div class="controls"><button aria-label="Pause animation" data-action="play" type="button">Pause</button><button aria-label="Replay animation" data-action="replay" type="button"><svg class="lucide lucide-rotate-ccw" aria-hidden="true" data-lucide="rotate-ccw" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg></button><input aria-label="Animation position" max="28" min="0" step="0.1" type="range" value="0"><span class="time">0:00 / 0:28</span><button aria-pressed="false" data-action="voice" type="button">Enable voice</button></div>\n</div></div>\n<script>(()=>{\nconst root=document.getElementById(\'qm-preview\');const q=s=>root.querySelector(s);const qa=s=>Array.from(root.querySelectorAll(s));\nconst scenes=[{"at": 0, "view": "problem", "step": "THE CAPACITY GAP", "caption": "Your team is already stretched.<br><em>Marketing needs skills and time they don\\u2019t have.</em>", "target": ".quiet-alert", "label": "Capacity and skills are missing"}, {"at": 7, "view": "plan", "step": "WHY BUILD EVERY ROLE IN-HOUSE?", "caption": "Need extra expertise,<br><em>without recruiting for every skill?</em>", "target": ".outsourcing-team", "label": "Hiring adds work before the work"}, {"at": 14, "view": "design", "step": "OUTSOURCE THE GAP", "caption": "Outsource the design and copy support you need.<br><em>Add expertise alongside your existing team.</em>", "target": ".editor .artwork", "label": "Specialist support for a defined scope"}, {"at": 21, "view": "launch", "step": "EXTRA CAPACITY. YOUR CONTROL.", "caption": "Your team keeps priorities and approvals.<br><em>Specialists handle the agreed work.</em>", "target": ".web-hero", "label": "Your direction. Additional delivery capacity", "confirmed": true}];\nlet t=0,playing=!matchMedia(\'(prefers-reduced-motion: reduce)\').matches,last=0,idx=-1,visible=true,hostVisible=true,raf,voice=false,audioBusy=false,speechToken=0;\n\nfunction stopVoice(){speechToken++;audioBusy=false;if(window.speechSynthesis)window.speechSynthesis.cancel()}\nfunction speak(){stopVoice();if(!voice||!playing||!visible||!hostVisible||document.hidden||!window.speechSynthesis)return;const token=speechToken;const u=new SpeechSynthesisUtterance(scenes[Math.max(0,idx)].caption.replace(/<[^>]*>/g,\' \').replace(/&amp;/g,\'&\'));u.lang=\'en-US\';u.rate=.98;const voices=window.speechSynthesis.getVoices();u.voice=voices.find(v=>v.lang===\'en-US\'&&/Natural|Aria|Samantha|Google/.test(v.name))||voices.find(v=>v.lang===\'en-US\')||null;audioBusy=true;u.onend=u.onerror=()=>{if(token===speechToken)audioBusy=false};window.speechSynthesis.speak(u)}\nwindow.addEventListener(\'message\',event=>{if(event.source!==window.parent||event.origin!==window.location.origin||event.data?.type!==\'quorisx-marketing-visibility\')return;hostVisible=Boolean(event.data.visible);if(!hostVisible)stopVoice()});\nconst box=q(\'.focus-box\');\nfunction focus(){const s=scenes[Math.max(0,idx)];let target=s.target,label=s.label,circle=s.circle;if(t>=24){target=\'.social-post\';label=\'Approved work, delivered by your support team\'}\nconst el=q(target),r=el.getBoundingClientRect(),stage=q(\'.stage\').getBoundingClientRect();const pad=7;let w=r.width+pad*2,h=r.height+pad*2;if(circle){w=h=Math.max(w,h)}box.style.left=(r.left-stage.left+(r.width-w)/2)+\'px\';box.style.top=(r.top-stage.top+(r.height-h)/2)+\'px\';box.style.width=w+\'px\';box.style.height=h+\'px\';box.style.opacity=\'1\';box.classList.toggle(\'circle\',!!circle);box.classList.toggle(\'confirmed\',!!s.confirmed);q(\'.focus-label\').textContent=label;\n}\nfunction render(){let n=0;for(let i=0;i<scenes.length;i++)if(t>=scenes[i].at)n=i;if(n!==idx){idx=n;const s=scenes[n];qa(\'.scene\').forEach(el=>el.classList.toggle(\'active\',el.dataset.view===s.view));q(\'.caption\').innerHTML=s.caption;q(\'.caption-step\').textContent=String(n+1).padStart(2,\'0\')+\' / 04 · \'+s.step;q(\'.caption-wrap\').classList.remove(\'switching\');void q(\'.caption-wrap\').offsetWidth;q(\'.caption-wrap\').classList.add(\'switching\');speak()}\nq(\'.phone\').classList.toggle(\'visible\',t>=23&&t<=28);q(\'.laptop\').style.marginLeft=t>=23&&t<=28?\'-45px\':\'0\';q(\'.cursor\').style.opacity=\'0\';let node=t<7?0:t<14?1:t<21?2:3;qa(\'.node\').forEach((e,i)=>e.classList.toggle(\'done\',i<=node));qa(\'.connector\').forEach((e,i)=>e.classList.toggle(\'done\',i<node));q(\'input\').value=t;q(\'.time\').textContent=\'0:\'+String(Math.floor(t)).padStart(2,\'0\')+\' / 0:28\';q(\'[data-action="play"]\').textContent=playing?\'Pause\':t>=28?\'Play again\':\'Play\';q(\'[data-action="play"]\').setAttribute(\'aria-label\',playing?\'Pause animation\':\'Play animation\');focus()}\nfunction tick(now){if(last&&playing&&visible&&hostVisible&&!document.hidden){let next=Math.min(28,t+(now-last)/1000);const boundary=scenes[idx+1]?.at??28;if(audioBusy&&next>=boundary)next=boundary-.001;t=next;if(t>=28){playing=false;stopVoice()}}last=now;render();raf=requestAnimationFrame(tick)}\nq(\'[data-action="play"]\').onclick=()=>{playing=!playing;if(playing&&t>=28){t=0;idx=-1}if(playing)speak();else stopVoice();render()};q(\'[data-action="replay"]\').onclick=()=>{stopVoice();t=0;idx=-1;playing=true;render()};q(\'input\').oninput=e=>{stopVoice();t=Number(e.target.value);idx=-1;render()};q(\'[data-action=voice]\').onclick=()=>{voice=!voice;q(\'[data-action=voice]\').textContent=voice?\'Mute voice\':\'Enable voice\';q(\'[data-action=voice]\').setAttribute(\'aria-pressed\',String(voice));if(voice){if(t>=28){t=0;idx=-1}playing=true;render();speak()}else stopVoice()};if(!window.speechSynthesis){q(\'[data-action=voice]\').disabled=true;q(\'[data-action=voice]\').textContent=\'Voice unavailable\'};document.addEventListener(\'visibilitychange\',()=>{if(document.hidden)stopVoice()});const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible)stopVoice()});observer.observe(root);window.addEventListener(\'pagehide\',()=>{stopVoice();cancelAnimationFrame(raf);observer.disconnect()},{once:true});if(window.lucide)window.lucide.createIcons();render();raf=requestAnimationFrame(tick);\n})();\n</script>\n</body></html>';

function useOutsourcingStoryVisibility(
  sectionRef: RefObject<HTMLElement | null>,
  frameRef: RefObject<HTMLIFrameElement | null>,
  visibilityMessage: string,
) {
  const visibleRef = useRef(false);
  const sendVisibility = useCallback(() => {
    frameRef.current?.contentWindow?.postMessage(
      { type: visibilityMessage, visible: visibleRef.current },
      window.location.origin,
    );
  }, [frameRef, visibilityMessage]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = Boolean(entry?.isIntersecting);
        sendVisibility();
      },
      { threshold: 0.05 },
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, [sectionRef, sendVisibility]);
  return sendVisibility;
}

function withCompactStoryLayout(document: string): string {
  const closingStyle = document.lastIndexOf("</style>", document.indexOf("</body>"));
  if (closingStyle < 0) return document;

  const responsiveStyles = `
    #qm-preview, #qm-preview .qm-player { max-width: 100%; }
    #qm-preview .stage { height: 332px; }
    #qm-preview .laptop {
      transform: translateX(-50%) scale(.92);
      transform-origin: top center;
    }
    @media (max-width: 520px) {
      #qm-preview .stage { height: 250px; }
      #qm-preview .laptop {
        width: 310px;
        top: 25px;
        transform: translateX(-50%) scale(.74);
      }
    }
  `;

  return `${document.slice(0, closingStyle)}${responsiveStyles}${document.slice(closingStyle)}`;
}

function MarketingOutsourcingStory() {
  const headingId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const sendVisibility = useOutsourcingStoryVisibility(
    sectionRef,
    frameRef,
    "quorisx-marketing-visibility",
  );

  return (
    <section
      ref={sectionRef}
      id="marketing-outsourcing-story"
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-background px-3 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 max-w-3xl px-1 sm:px-0">
          <p className="eyebrow mb-3">Why outsource Marketing &amp; Creative?</p>
          <h2
            id={headingId}
            className="font-display text-2xl leading-tight text-foreground sm:text-4xl"
          >
            Add creative expertise. Keep your team focused.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Get specialist support for the work your team needs—while you keep the direction and
            approvals.
          </p>
        </div>
        <iframe
          ref={frameRef}
          srcDoc={withCompactStoryLayout(marketingStoryDocument)}
          title="Why outsource Marketing and Creative: an animated example with optional voice"
          scrolling="no"
          onLoad={sendVisibility}
          className="block h-[562px] w-full overflow-hidden rounded-2xl border-0 max-[520px]:h-[476px]"
          style={{ background: "#f7f4ee", colorScheme: "light" }}
        />
      </div>
    </section>
  );
}

const salesStoryDocument: string =
  '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Why Outsource Sales & Growth | Quorisx</title><style>body{margin:0;background:transparent}</style></head><body><div id="qm-preview"><div aria-label="How an outsourced sales representative helps with missed leads" class="qm-player">\n<style>\n#qm-preview{font-family:Inter,Arial,sans-serif;color:#173441;width:100%}#qm-preview *{box-sizing:border-box}#qm-preview .qm-player{background:#f4f1e9;border-radius:20px;overflow:hidden}#qm-preview .top{padding:20px 24px 0;display:flex;justify-content:space-between;align-items:center;font-size:12px;letter-spacing:2px;color:#557078}#qm-preview .brand{font-weight:700;color:#173441}#qm-preview .stage{height:390px;position:relative;overflow:hidden;background:radial-gradient(ellipse at 50% 78%,#dce6df 0,transparent 60%)}#qm-preview .halo{position:absolute;width:330px;height:330px;border:1px solid #d6ded7;border-radius:50%;left:50%;top:18px;transform:translateX(-50%)}#qm-preview .halo:after{content:\'\';position:absolute;inset:25px;border:1px solid #e1e6de;border-radius:50%}#qm-preview .laptop{position:absolute;width:440px;left:50%;top:36px;transform:translateX(-50%);transition:transform .9s,width .9s}#qm-preview .lid{height:270px;border-radius:17px 17px 7px 7px;background:linear-gradient(130deg,#3d4a52,#12212b);padding:14px 10px 10px;box-shadow:0 25px 40px #203e4824;position:relative}#qm-preview .camera{width:4px;height:4px;position:absolute;top:5px;left:50%;border-radius:50%;background:#8ba8a6}#qm-preview .screen{height:100%;background:#f8faf8;border-radius:7px;overflow:hidden;position:relative}#qm-preview .base{height:12px;background:linear-gradient(#c6ced0,#839298);margin:0 -30px;border-radius:2px 2px 50% 50%;box-shadow:0 16px 20px #17344120}#qm-preview .base:after{content:\'\';display:block;width:64px;height:4px;background:#71858b;margin:auto;border-radius:0 0 5px 5px}#qm-preview .chrome{height:28px;display:flex;align-items:center;gap:5px;background:#edf1ec;padding:0 12px}#qm-preview .dot{width:5px;height:5px;border-radius:50%;background:#bac8c3}#qm-preview .chrome .line{width:70px;height:5px;margin:auto;background:#d3dfd9;border-radius:4px}#qm-preview .scene{position:absolute;inset:28px 0 0;opacity:0;transform:translateY(14px) scale(.97);transition:opacity .6s,transform .6s;pointer-events:none;padding:18px}#qm-preview .scene.active{opacity:1;transform:none}#qm-preview .crm{display:flex;gap:18px;height:100%}#qm-preview .rail{width:28px;display:flex;flex-direction:column;gap:18px;color:#a2b7b2}#qm-preview svg{width:22px;height:22px;stroke-width:1.7}#qm-preview .contact{flex:1;border:1px solid #dfe7e0;border-radius:12px;padding:16px;background:#fff}#qm-preview .person-row{display:flex;align-items:center;gap:14px}#qm-preview .avatar{width:48px;height:48px;border-radius:50%;background:#d1e8de;color:#197f73;display:grid;place-items:center;flex-shrink:0}#qm-preview .avatar svg{width:30px;height:30px}#qm-preview .lines{flex:1}#qm-preview .line{height:7px;border-radius:5px;background:#dce5df;margin:8px 0;width:100%}#qm-preview .line.short{width:60%}#qm-preview .line.dark{background:#8baca4;width:48%}#qm-preview .taskrow{display:flex;align-items:center;gap:10px;padding-top:13px;color:#618078}#qm-preview .taskrow .line{flex:1}#qm-preview .cal-trigger{background:#157d70;color:#fff;border-radius:8px;padding:7px;display:grid;place-items:center;position:absolute;right:35px;bottom:24px}#qm-preview .calendar{display:flex;gap:16px;height:100%}#qm-preview .cal-main{flex:1}#qm-preview .cal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;color:#1e7b70}#qm-preview .cal-head span{width:60px;height:8px;background:#a2beb3;border-radius:5px}#qm-preview .grid{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}#qm-preview .day{height:25px;background:#e9efea;border-radius:5px;display:grid;place-items:center}#qm-preview .day:after{content:\'\';width:5px;height:5px;border-radius:50%;background:#a8bdb4}#qm-preview .day.selected{background:#157d70;box-shadow:0 0 0 4px #d9ece3}#qm-preview .day.selected:after{background:#fff}#qm-preview .slots{width:84px;padding-top:10px}#qm-preview .slot{height:27px;margin-bottom:9px;border-radius:6px;background:#e7eee8}#qm-preview .slot.chosen{background:#d4e9df;border:1px solid #379b88;display:grid;place-items:center;color:#157d70}#qm-preview .cursor{position:absolute;top:175px;left:330px;color:#193b4c;filter:drop-shadow(0 2px 2px #fff);transition:top 1s,left 1s,opacity .4s;z-index:5}#qm-preview .cursor svg{fill:#fff;width:26px;height:26px}#qm-preview .phone{position:absolute;left:calc(50% + 90px);top:22px;width:139px;height:270px;background:linear-gradient(120deg,#526068,#13212a);padding:7px;border-radius:25px;box-shadow:0 20px 32px #17344138;transform:translate(140px,80px) rotate(12deg);opacity:0;transition:transform .85s,opacity .65s;z-index:6}#qm-preview .phone.visible{transform:translate(0,0) rotate(0);opacity:1}#qm-preview .phone-screen{height:100%;border-radius:19px;background:#eff5ef;padding:35px 10px 10px;position:relative;text-align:center}#qm-preview .notch{position:absolute;top:8px;left:37px;width:48px;height:12px;background:#192b32;border-radius:12px}#qm-preview .phone .avatar{margin:0 auto 12px;width:36px;height:36px}#qm-preview .invite{background:#fff;border-radius:12px;padding:13px 8px;box-shadow:0 6px 12px #1734410b;color:#197f73}#qm-preview .invite>svg{width:30px;height:30px}#qm-preview .accept{height:28px;background:#157d70;color:#fff;border-radius:7px;margin:12px 0 0;display:grid;place-items:center}#qm-preview .accepted{position:absolute;inset:30px 7px 7px;background:#eff5ef;border-radius:15px;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;transform:scale(.8);transition:all .6s}#qm-preview .accepted.show{opacity:1;transform:scale(1)}#qm-preview .bigcheck{width:64px;height:64px;border-radius:50%;background:#157d70;color:#fff;display:grid;place-items:center;box-shadow:0 0 0 10px #d9ece1}#qm-preview .bigcheck svg{width:34px;height:34px}#qm-preview .accepted .avatar{margin-top:24px}#qm-preview .brief{display:flex;gap:18px}#qm-preview .profile{width:94px;background:#e6f0e9;border-radius:12px;padding:18px 14px}#qm-preview .profile .avatar{margin:auto}#qm-preview .notes{flex:1}#qm-preview .note{display:flex;align-items:center;gap:10px;margin:12px 0;color:#15806d}#qm-preview .note .line{flex:1}#qm-preview .join{margin-top:18px;background:#157d70;color:#fff;padding:8px 22px;border-radius:8px;display:inline-flex;align-items:center;gap:10px}#qm-preview .call{padding:10px;background:#143d42}#qm-preview .participants{display:flex;gap:8px;height:155px}#qm-preview .participant{position:relative;flex:1;overflow:hidden;border-radius:8px;background:linear-gradient(120deg,#e2d7c3,#c4d5ca);display:grid;place-items:center}#qm-preview .participant.second{background:linear-gradient(130deg,#d8e5dc,#aec5c3)}#qm-preview .participant:before{content:\'\';position:absolute;width:38px;height:90px;background:#ffffff45;left:10px;top:0;border-left:3px solid #ffffff75;border-right:3px solid #ffffff75}#qm-preview .person{position:absolute;bottom:-20px;width:100px;height:90px;background:#314d64;border-radius:50% 50% 0 0}#qm-preview .person:before{content:\'\';position:absolute;left:30px;top:-48px;width:42px;height:54px;background:#c89370;border-radius:40% 40% 45% 45%;border-top:11px solid #34332d;box-shadow:0 10px 0 -6px #c89370}#qm-preview .second .person{background:#a16c4e}#qm-preview .second .person:before{background:#e0b392;border-top-color:#655342}#qm-preview .wave{position:absolute;bottom:9px;right:9px;display:flex;gap:3px;align-items:center;height:15px;padding:3px 5px;background:#157d70;border-radius:4px}#qm-preview .wave b{width:3px;height:8px;background:#fff;border-radius:2px;transform-origin:center}#qm-preview .call-tools{display:flex;justify-content:center;gap:16px;padding-top:10px;color:#d4e7e0}#qm-preview .hangup{background:#ce765d;border-radius:12px;padding:1px 12px;color:white}#qm-preview .route{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:0}#qm-preview .node{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:#e3e8df;color:#91a79c;transition:all .5s}#qm-preview .node.done{background:#1b8070;color:white;box-shadow:0 3px 10px #157d7020}#qm-preview .connector{width:40px;height:2px;background:#d4dfd4}#qm-preview .connector.done{background:#1b8070}#qm-preview .caption{text-align:center;font-size:16px;min-height:23px;margin:0 12px 18px;font-weight:500}#qm-preview .controls{display:flex;align-items:center;gap:12px;background:#e9eae2;padding:13px 18px}#qm-preview button{border:0;background:transparent;color:#173441;min-height:36px;font:inherit;font-size:12px;display:flex;align-items:center;justify-content:center;gap:6px;border-radius:8px;padding:6px}#qm-preview button:hover{background:#d9e2d8}#qm-preview button:focus-visible{outline:2px solid #157d70;outline-offset:2px}#qm-preview input{flex:1;min-width:30px;accent-color:#157d70}#qm-preview .time{font-size:11px;font-variant-numeric:tabular-nums;color:#4a686a}#qm-preview .voice{font-size:11px}#qm-preview .hide{display:none}\n@media(max-width:520px){#qm-preview .stage{height:318px}#qm-preview .laptop{width:330px;top:32px;transform:translateX(-50%) scale(.85);transform-origin:top center}#qm-preview .lid{height:260px}#qm-preview .phone{left:calc(50% + 28px);transform:translate(130px,70px) scale(.8);transform-origin:top center}#qm-preview .phone.visible{transform:scale(.8)}#qm-preview .top{padding:17px 18px 0;font-size:10px}#qm-preview .scene{padding:12px}#qm-preview .slots{width:65px}#qm-preview .cursor{left:240px}#qm-preview .controls{gap:5px;padding:9px}#qm-preview .caption{font-size:14px}#qm-preview .time{display:none}#qm-preview .connector{width:27px}#qm-preview .participants{height:153px}}\n#qm-preview .qm-player{background:#f7f4ee}#qm-preview .stage{height:365px;background:radial-gradient(ellipse at 34% 48%,#e3eafa 0,transparent 52%),radial-gradient(ellipse at 75% 75%,#e0efe5 0,transparent 45%)}\n#qm-preview .top{padding-bottom:3px}#qm-preview .top>span:last-child{letter-spacing:1px;font-size:10px}#qm-preview .halo{opacity:.45}#qm-preview .laptop{transition:margin-left .85s,transform .85s;top:24px}#qm-preview .screen{isolation:isolate}#qm-preview .scene{transition:opacity .55s,transform .7s}#qm-preview .scene.active{transform:scale(1)}#qm-preview .avatar{background:linear-gradient(145deg,#c8e9e4,#ecf7ef);color:#127e70;border:2px solid #ffffff}#qm-preview .rail svg{padding:4px;border-radius:7px;width:29px;height:29px;background:#e8e9f7;color:#7260c4}#qm-preview .rail svg:nth-child(3){background:#dcf2e5;color:#208964}#qm-preview .rail svg:nth-child(4){background:#e0eafb;color:#3377d1}#qm-preview .taskrow svg{color:#d57648;background:#fff0e5;padding:3px;border-radius:5px;width:26px;height:26px}#qm-preview .taskrow:nth-child(3) svg{color:#13836e;background:#e0f4e9}#qm-preview .cal-trigger{background:linear-gradient(135deg,#478cf0,#275fc5);box-shadow:0 4px 9px #3475d534}#qm-preview .cal-head{color:#377cda}#qm-preview .day{font-size:11px;color:#718c94}#qm-preview .day:after{display:none}#qm-preview .day.selected{background:#3576d6;color:white;box-shadow:0 0 0 3px #dce9fd;font-weight:600}#qm-preview .grid .day.selected.pending{background:#e9efea;color:#718c94;box-shadow:none}#qm-preview .slot.chosen.pending{opacity:.3}#qm-preview .invite>svg{color:#397bd8;background:#edf3ff;padding:5px;width:40px;height:40px;border-radius:10px}#qm-preview .accept{font-size:11px;display:flex;gap:5px;justify-content:center}#qm-preview .accept svg{width:15px;height:15px}#qm-preview .note:nth-child(2){color:#8d69c1}#qm-preview .note:nth-child(3){color:#377cda}#qm-preview .join{background:linear-gradient(135deg,#278cde,#2962c3);box-shadow:0 4px 10px #2866c82b}#qm-preview .route{bottom:12px}#qm-preview .node{border-radius:11px;width:38px;height:38px;background:#e4e6e2;color:#81928a}#qm-preview .node:nth-child(1).done{background:#8464c1}#qm-preview .node:nth-child(3).done{background:#3d7dda}#qm-preview .node:nth-child(5).done{background:#20a17c}#qm-preview .node:nth-child(7).done{background:#2083bb}#qm-preview .focus-box{position:absolute;pointer-events:none;z-index:9;border:2px solid #eb9760;border-radius:12px;box-shadow:0 0 0 4px #f4b77824;transition:left .55s,top .55s,width .55s,height .55s,border-radius .55s,opacity .35s;opacity:0}#qm-preview .focus-box.circle{border-radius:50%;border-color:#e89554}#qm-preview .focus-box.confirmed{border-color:#1c9f7d;box-shadow:0 0 0 5px #27aa801b}#qm-preview .focus-label{position:absolute;left:4px;top:-24px;border-radius:5px;background:#173c4c;color:#fff;white-space:nowrap;font-size:10px;padding:4px 8px;letter-spacing:.2px;box-shadow:0 3px 6px #17344116}#qm-preview .caption-wrap{margin:0 18px 16px;padding:14px 20px 16px;background:#183c4d;border-radius:12px;box-shadow:0 8px 20px #17344110;min-height:102px;text-align:center}#qm-preview .caption-step{display:block;font-size:10px;letter-spacing:1.8px;color:#8ecfc1;margin-bottom:9px;font-weight:600}#qm-preview .caption{color:#fff;font-size:18px;line-height:1.45;max-width:560px;margin:0 auto;font-weight:500}#qm-preview .caption em{font-style:normal;color:#ffd39c}#qm-preview .caption-wrap.switching .caption{animation:qm-caption .5s ease both}#qm-preview .controls{background:#eaece6}#qm-preview .call-tools>svg{background:#24545b;border-radius:6px;padding:3px;width:25px;height:25px}#qm-preview .call-tools>svg:nth-child(2){background:#3477c8}#qm-preview .cursor{z-index:10}#qm-preview button{min-height:40px}#qm-preview .muted-hint{font-size:10px;letter-spacing:.4px;color:#638078;margin-right:3px}\n@keyframes qm-caption{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}\n@media(max-width:520px){#qm-preview .stage{height:300px}#qm-preview .laptop{top:30px}#qm-preview .caption-wrap{margin:0 10px 10px;padding:12px 13px;min-height:111px}#qm-preview .caption{font-size:15px;line-height:1.5}#qm-preview .caption-step{font-size:9px;margin-bottom:7px}#qm-preview .focus-label{font-size:9px;padding:3px 6px;top:-21px}#qm-preview .top>span:last-child{font-size:8px;letter-spacing:.5px}#qm-preview .muted-hint{display:none}#qm-preview .route{bottom:9px}}\n@media(prefers-reduced-motion:reduce){#qm-preview *{animation:none!important;transition:none!important}}\n\n#qm-preview .lead-header{display:flex;align-items:center;gap:8px;color:#2f6fc4;font-size:12px;margin-bottom:15px}#qm-preview strong{font-weight:600}#qm-preview .status-badge{margin-left:auto;background:#ffeadb;color:#a85c2f;border-radius:5px;padding:5px;font-size:9px}#qm-preview .status-badge.green{background:#ddf2e8;color:#17715d}#qm-preview .lead-message{display:flex;align-items:center;gap:10px;padding:12px;border:1px solid #e0e6e4;border-radius:10px;background:white;font-size:11px}#qm-preview .lead-message p{font-size:11px;line-height:1.4;margin:6px 0;color:#638078}#qm-preview .missed-alert{margin-top:12px;display:flex;align-items:center;gap:9px;color:#b45f42;background:#fff0e8;border-radius:8px;padding:9px;font-size:12px}#qm-preview .owner-busy{display:flex;align-items:center;gap:7px;margin-top:11px;font-size:10px;color:#6a7e86}#qm-preview .owner-busy svg{width:17px}#qm-preview .chat-in,#qm-preview .chat-out{font-size:12px;padding:13px;border-radius:12px;background:#e8edf5;max-width:85%;margin:9px 0}#qm-preview .chat-out{background:#d8eee4;margin-left:auto;color:#176b58}#qm-preview .rep-action{margin-top:16px;display:flex;gap:9px;align-items:center;font-size:11px;color:#267b69}#qm-preview .qualify-list>div{display:flex;align-items:center;gap:10px;padding:9px 5px;border-bottom:1px solid #e4ebe6;font-size:11px}#qm-preview .qualify-list>div>span{color:#769088}#qm-preview .qualify-list strong{margin-left:auto;color:#36516b}#qm-preview .qualify-list svg{color:#7861b9;width:19px;height:19px}#qm-preview .recorded{font-size:10px;display:flex;gap:8px;align-items:center;margin-top:9px;color:#188364}#qm-preview .recorded svg{width:17px}#qm-preview .follow-task{display:flex;gap:9px;align-items:center;font-size:11px;padding:11px 9px;background:#edf2f7;border-radius:8px;margin-bottom:9px}#qm-preview .follow-task svg{color:#3e7dc9}#qm-preview .follow-task strong{margin-left:auto;color:#238466;font-size:10px}#qm-preview .client-reply{display:flex;align-items:center;gap:9px;font-size:12px;background:#d9f0e4;color:#22795f;border-radius:9px;margin-left:30px;padding:11px}#qm-preview .role-identity{position:absolute;right:21px;bottom:72px;font-size:10px;display:flex;align-items:center;gap:7px;background:#fffdf8;color:#50746b;padding:8px 11px;border-radius:8px;box-shadow:0 5px 20px #16394c15}#qm-preview .role-identity svg{width:18px;color:#259077}#qm-preview .caption-wrap{min-height:110px}#qm-preview [data-action=voice]{white-space:nowrap;font-size:11px}#qm-preview .stage{height:365px}@media(max-width:520px){#qm-preview .stage{height:300px}#qm-preview .role-identity{right:12px;bottom:57px;font-size:9px;padding:5px 7px}#qm-preview .caption-wrap{min-height:117px}#qm-preview .lead-header{font-size:11px}#qm-preview .lead-message{padding:8px}#qm-preview .lead-message .avatar{width:35px;height:35px}}\n#qm-preview .sg-title{display:flex;gap:8px;align-items:center;font-size:12px;color:#365b72;margin-bottom:15px}#qm-preview .sg-title svg{color:#367fc5;flex-shrink:0}#qm-preview .sg-backlog>div,#qm-preview .sg-owned>div{display:flex;align-items:center;gap:9px;padding:10px;border-radius:7px;background:#eef1f3;margin-bottom:8px;font-size:11px}#qm-preview .sg-backlog svg{color:#7c8f9f;width:19px}#qm-preview .sg-backlog b{margin-left:auto;color:#b77a48;font-size:9px;background:#f8e9d7;padding:4px;border-radius:4px}#qm-preview .sg-warning{display:flex;gap:7px;align-items:center;font-size:10px;color:#ad6046;margin-top:8px}#qm-preview .sg-warning svg{width:19px}#qm-preview .sg-extension{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:18px}#qm-preview .sg-core,#qm-preview .sg-support{display:flex;flex-direction:column;align-items:center;gap:10px;padding:18px 9px;border-radius:12px;background:#e2eafa;color:#4278b6;flex:1;font-size:11px}#qm-preview .sg-support{background:#dcf1e7;color:#277e67}#qm-preview .sg-core svg,#qm-preview .sg-support svg{width:33px;height:33px}#qm-preview .sg-extension>svg{color:#cb8b4b;width:21px;flex-shrink:0}#qm-preview .sg-recruit{display:flex;justify-content:center;align-items:center;gap:9px;font-size:11px;color:#776a8c;line-height:1.5;margin-top:17px}#qm-preview .sg-owned>div{background:#e9f2ed}#qm-preview .sg-owned svg{width:19px;color:#328973}#qm-preview .sg-owned svg:last-child{margin-left:auto;background:#d0e9de;border-radius:50%;padding:3px}#qm-preview .sg-small{display:flex;gap:6px;align-items:center;color:#7b8e88;font-size:9px;margin-top:12px}#qm-preview .sg-small svg{width:17px}#qm-preview .sg-profile{display:flex;gap:10px;align-items:center;font-size:11px;padding:9px 0}#qm-preview .sg-profile span{display:block;margin-top:5px;font-size:9px;color:#7b8a8f}#qm-preview .sg-facts{display:flex;gap:9px;margin:12px 0}#qm-preview .sg-facts span{display:flex;gap:4px;align-items:center;font-size:9px;color:#74628b;background:#eee9f5;border-radius:6px;padding:7px}#qm-preview .sg-facts svg{width:17px;height:17px}#qm-preview .sg-handoff{display:flex;gap:8px;align-items:center;background:#dceee5;color:#28775f;padding:10px;border-radius:7px;font-size:10px}#qm-preview .sg-handoff svg:last-child{margin-left:auto}#qm-preview .sg-result{display:flex;gap:12px;margin-top:19px}#qm-preview .sg-result>div{display:flex;flex-direction:column;align-items:flex-start;gap:9px;background:#e8f0ea;flex:1;padding:14px 10px;border-radius:10px;color:#377d67}#qm-preview .sg-result>div:last-child{background:#e2ebf7;color:#3b709f}#qm-preview .sg-result small{font-size:8px;letter-spacing:.5px}#qm-preview .sg-result b{font-size:12px;line-height:1.5}#qm-preview .sg-control{display:flex;justify-content:center;align-items:center;gap:7px;font-size:9px;margin-top:12px;color:#667f78}#qm-preview .sg-control svg{width:17px}#qm-preview .role-identity{right:20px;bottom:64px}#qm-preview .caption-wrap{min-height:110px}#qm-preview .caption{font-size:18px;line-height:1.45}@media(max-width:520px){#qm-preview .sg-title{font-size:10px;margin-bottom:12px}#qm-preview .sg-backlog>div,#qm-preview .sg-owned>div{font-size:10px;padding:9px 6px}#qm-preview .sg-core,#qm-preview .sg-support{font-size:10px}#qm-preview .sg-recruit{font-size:10px}#qm-preview .sg-facts{gap:5px}#qm-preview .sg-facts span{font-size:8px;padding:6px}#qm-preview .sg-result small{font-size:7px}#qm-preview .sg-result b{font-size:10px}#qm-preview .caption{font-size:15px}#qm-preview .role-identity{bottom:55px}}\n</style>\n<div class="top"><span class="brand">QUORISX</span><span>WHY OUTSOURCE SALES &amp; GROWTH?</span></div>\n<div aria-label="Salespeople are overloaded with prospect research, follow-up and CRM admin. Outsourced support adds capacity without recruiting each support role internally, owns follow-up, qualifies prospects, and hands over prepared opportunities so the sales team can focus on relationships and closing." class="stage" role="img"><div class="halo"></div>\n<div class="laptop"><div class="lid"><span class="camera"></span><div class="screen"><div class="chrome"><b class="dot"></b><b class="dot"></b><b class="dot"></b><div class="line"></div></div>\n\n\n\n\n\n\n\n\n<div class="scene" data-view="overload"><div class="sg-title"><svg class="lucide lucide-briefcase-business" data-lucide="briefcase-business" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect rx="2" y="6" x="2" height="14" width="20" /></svg><strong>Your sales team’s day</strong></div><div class="sg-backlog"><div><svg class="lucide lucide-search" data-lucide="search" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle r="8" cy="11" cx="11" /><path d="m21 21-4.3-4.3" /></svg><span>Prospect research</span><b>Waiting</b></div><div><svg class="lucide lucide-phone-outgoing" data-lucide="phone-outgoing" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 8 22 2 16 2" /><line y2="2" y1="8" x2="22" x1="16" /><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg><span>Lead follow-up</span><b>Overdue</b></div><div><svg class="lucide lucide-database" data-lucide="database" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse ry="3" rx="9" cy="5" cx="12" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg><span>CRM updates</span><b>Pending</b></div></div><div class="sg-warning"><svg class="lucide lucide-clock-alert" data-lucide="clock-alert" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2" /><path d="M16 21.16a10 10 0 1 1 5-13.516" /><path d="M20 11.5v6" /><path d="M20 21.5h.01" /></svg>When does the actual selling happen?</div></div>\n<div class="scene" data-view="outsource"><div class="sg-title"><svg class="lucide lucide-users-round" data-lucide="users-round" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0" /><circle r="5" cy="8" cx="10" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg><strong>Extend the team you already have.</strong></div><div class="sg-extension"><div class="sg-core"><svg class="lucide lucide-briefcase-business" data-lucide="briefcase-business" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect rx="2" y="6" x="2" height="14" width="20" /></svg><b>Your sales team</b></div><svg class="lucide lucide-plus" data-lucide="plus" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" /><path d="M12 5v14" /></svg><div class="sg-support"><svg class="lucide lucide-headset" data-lucide="headset" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg><b>Outsourced support</b></div></div><div class="sg-recruit"><svg class="lucide lucide-user-round-plus" data-lucide="user-round-plus" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle r="5" cy="8" cx="10" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg><span>Extra capacity without recruiting<br>each support role yourself.</span></div></div>\n<div class="scene" data-view="ownership"><div class="sg-title"><svg class="lucide lucide-list-checks" data-lucide="list-checks" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4" /><path d="m3 7 2 2 4-4" /><path d="M13 6h8" /><path d="M13 12h8" /><path d="M13 18h8" /></svg><strong>Give the follow-up work an owner.</strong></div><div class="sg-owned"><div><svg class="lucide lucide-search-check" data-lucide="search-check" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 11 2 2 4-4" /><circle r="8" cy="11" cx="11" /><path d="m21 21-4.3-4.3" /></svg><span>Research relevant prospects</span><svg class="lucide lucide-check" data-lucide="check" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5" /></svg></div><div><svg class="lucide lucide-messages-square" data-lucide="messages-square" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg><span>Reach out and follow up</span><svg class="lucide lucide-check" data-lucide="check" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5" /></svg></div><div><svg class="lucide lucide-database" data-lucide="database" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse ry="3" rx="9" cy="5" cx="12" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg><span>Record every next step</span><svg class="lucide lucide-check" data-lucide="check" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5" /></svg></div></div><div class="sg-small"><svg class="lucide lucide-headset" data-lucide="headset" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>Assigned to your outsourced sales support</div></div>\n<div class="scene" data-view="qualify"><div class="sg-title"><svg class="lucide lucide-contact-round" data-lucide="contact-round" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 2v2" /><path d="M17.915 22a6 6 0 0 0-12 0" /><path d="M8 2v2" /><circle r="4" cy="12" cx="12" /><rect rx="2" height="18" width="18" y="4" x="3" /></svg><strong>A prepared handoff to your sales team</strong></div><div class="sg-profile"><div class="avatar"><svg class="lucide lucide-user-round" data-lucide="user-round" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle r="5" cy="8" cx="12" /><path d="M20 21a8 8 0 0 0-16 0" /></svg></div><div><b>Alex · IT support inquiry</b><span>Fit checked against your criteria</span></div></div><div class="sg-facts"><span><svg class="lucide lucide-target" data-lucide="target" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle r="10" cy="12" cx="12" /><circle r="6" cy="12" cx="12" /><circle r="2" cy="12" cx="12" /></svg>Need confirmed</span><span><svg class="lucide lucide-calendar-clock" data-lucide="calendar-clock" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h5" /><path d="M17.5 17.5 16 16.3V14" /><circle r="6" cy="16" cx="16" /></svg>Timing discussed</span></div><div class="sg-handoff"><svg class="lucide lucide-calendar-check" data-lucide="calendar-check" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4" /><path d="M16 2v4" /><rect rx="2" y="4" x="3" height="18" width="18" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg><span>Meeting arranged + notes shared</span><svg class="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg></div></div>\n<div class="scene" data-view="benefit"><div class="sg-title"><svg class="lucide lucide-handshake" data-lucide="handshake" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg><strong>More capacity for the work that matters.</strong></div><div class="sg-result"><div><svg class="lucide lucide-headset" data-lucide="headset" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg><small>OUTSOURCED SUPPORT</small><b>Research.<br>Qualify. Follow up.</b></div><div><svg class="lucide lucide-briefcase-business" data-lucide="briefcase-business" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect rx="2" y="6" x="2" height="14" width="20" /></svg><small>YOUR SALES TEAM</small><b>Build relationships.<br>Negotiate. Close.</b></div></div><div class="sg-control"><svg class="lucide lucide-shield-check" data-lucide="shield-check" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>Your criteria. Your CRM. Your final decisions.</div></div>\n<div class="cursor"><svg class="lucide lucide-mouse-pointer-2" aria-hidden="true" data-lucide="mouse-pointer-2" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" /></svg></div></div></div><div class="base"></div></div>\n\n<div aria-hidden="true" class="focus-box"><span class="focus-label">Client record</span></div><div class="role-identity"><svg class="lucide lucide-headset" data-lucide="headset" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>Quorisx · Sales &amp; Growth</div><div class="route"><span class="node done"><svg class="lucide lucide-clock-alert" aria-hidden="true" data-lucide="clock-alert" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2" /><path d="M16 21.16a10 10 0 1 1 5-13.516" /><path d="M20 11.5v6" /><path d="M20 21.5h.01" /></svg></span><span class="connector"></span><span class="node"><svg class="lucide lucide-users-round" aria-hidden="true" data-lucide="users-round" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0" /><circle r="5" cy="8" cx="10" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg></span><span class="connector"></span><span class="node"><svg class="lucide lucide-list-checks" aria-hidden="true" data-lucide="list-checks" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4" /><path d="m3 7 2 2 4-4" /><path d="M13 6h8" /><path d="M13 12h8" /><path d="M13 18h8" /></svg></span><span class="connector"></span><span class="node"><svg class="lucide lucide-handshake" aria-hidden="true" data-lucide="handshake" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg></span></div></div>\n<div class="caption-wrap"><span class="caption-step">01 / 05 · TOO LITTLE TIME TO SELL</span><p aria-live="polite" class="caption">Research, follow-ups and admin fill your team’s day.<br><em>Selling gets squeezed.</em></p></div>\n<div class="controls"><button aria-label="Pause animation" data-action="play" type="button">Pause</button><button aria-label="Replay animation" data-action="replay" type="button"><svg class="lucide lucide-rotate-ccw" aria-hidden="true" data-lucide="rotate-ccw" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg></button><input aria-label="Animation position" max="35" min="0" step="0.1" type="range" value="0"><span class="time">0:00 / 0:35</span><button aria-pressed="false" data-action="voice" type="button">Enable voice</button></div>\n</div></div>\n<script>(()=>{\nconst root=document.getElementById(\'qm-preview\');const q=s=>root.querySelector(s);const qa=s=>Array.from(root.querySelectorAll(s));\nconst scenes=[{"at": 0, "view": "overload", "step": "THE PROBLEM \\u00b7 TOO LITTLE TIME TO SELL", "caption": "Research, follow-ups and admin fill your team\\u2019s day.<br><em>Selling gets squeezed.</em>", "target": ".sg-backlog", "label": "Your salespeople are stretched"}, {"at": 7, "view": "outsource", "step": "WHY OUTSOURCE? \\u00b7 ADD CAPACITY", "caption": "Outsource sales support to extend your team.<br><em>No need to recruit every support role yourself.</em>", "target": ".sg-support", "label": "Add support around your existing team"}, {"at": 14, "view": "ownership", "step": "BENEFIT \\u00b7 CONSISTENT FOLLOW-UP", "caption": "Give research, outreach and CRM updates a dedicated owner.<br><em>Every lead has a clear next step.</em>", "target": ".sg-owned", "label": "Follow-up becomes someone\\u2019s responsibility"}, {"at": 21, "view": "qualify", "step": "BENEFIT \\u00b7 BETTER-PREPARED CONVERSATIONS", "caption": "Support checks fit using your criteria and arranges meetings.<br><em>Your team receives the context before the call.</em>", "target": ".sg-handoff", "label": "Qualified against your criteria", "confirmed": true}, {"at": 28, "view": "benefit", "step": "BENEFIT \\u00b7 MORE TIME FOR SELLING", "caption": "Your team focuses on relationships, negotiations and closing.<br><em>You keep the strategy and final decisions.</em>", "target": ".sg-result>div:last-child", "label": "More capacity for core sales work", "confirmed": true}];\nlet t=0,playing=!matchMedia(\'(prefers-reduced-motion: reduce)\').matches,last=0,idx=-1,visible=true,hostVisible=true,raf,voice=false,audioBusy=false,speechToken=0;\n\nfunction stopVoice(){speechToken++;audioBusy=false;if(window.speechSynthesis)window.speechSynthesis.cancel()}\nfunction speak(){stopVoice();if(!voice||!playing||!visible||!hostVisible||document.hidden||!window.speechSynthesis)return;const token=speechToken;const u=new SpeechSynthesisUtterance(scenes[Math.max(0,idx)].caption.replace(/<[^>]*>/g,\' \').replace(/&amp;/g,\'&\'));u.lang=\'en-US\';u.rate=.98;const voices=window.speechSynthesis.getVoices();u.voice=voices.find(v=>v.lang===\'en-US\'&&/Natural|Aria|Samantha|Google/.test(v.name))||voices.find(v=>v.lang===\'en-US\')||null;audioBusy=true;u.onend=u.onerror=()=>{if(token===speechToken)audioBusy=false};window.speechSynthesis.speak(u)}\nwindow.addEventListener(\'message\',event=>{if(event.source!==window.parent||event.origin!==window.location.origin||event.data?.type!==\'quorisx-sales-visibility\')return;hostVisible=Boolean(event.data.visible);if(!hostVisible)stopVoice()});\nconst box=q(\'.focus-box\');\nfunction focus(){const s=scenes[Math.max(0,idx)];let target=s.target,label=s.label,circle=s.circle;if(t>=11&&t<14){target=\'.sg-recruit\';label=\'Less internal recruitment work\'}if(t>=18&&t<21){target=\'.sg-owned>div:nth-child(3)\';label=\'Visibility in your CRM\'}if(t>=24&&t<28){target=\'.sg-facts\';label=\'Need and timing understood\'}if(t>=32){target=\'.sg-control\';label=\'You retain control\'}\nconst el=q(target),r=el.getBoundingClientRect(),stage=q(\'.stage\').getBoundingClientRect();const pad=7;let w=r.width+pad*2,h=r.height+pad*2;if(circle){w=h=Math.max(w,h)}box.style.left=(r.left-stage.left+(r.width-w)/2)+\'px\';box.style.top=(r.top-stage.top+(r.height-h)/2)+\'px\';box.style.width=w+\'px\';box.style.height=h+\'px\';box.style.opacity=\'1\';box.classList.toggle(\'circle\',!!circle);box.classList.toggle(\'confirmed\',!!s.confirmed);q(\'.focus-label\').textContent=label;\n}\nfunction render(){let n=0;for(let i=0;i<scenes.length;i++)if(t>=scenes[i].at)n=i;if(n!==idx){idx=n;const s=scenes[n];qa(\'.scene\').forEach(el=>el.classList.toggle(\'active\',el.dataset.view===s.view));q(\'.caption\').innerHTML=s.caption;q(\'.caption-step\').textContent=String(n+1).padStart(2,\'0\')+\' / 05 · \'+s.step;q(\'.caption-wrap\').classList.remove(\'switching\');void q(\'.caption-wrap\').offsetWidth;q(\'.caption-wrap\').classList.add(\'switching\');speak()}\nq(\'.cursor\').style.opacity=\'0\';let node=t<7?0:t<14?1:t<28?2:3;qa(\'.node\').forEach((e,i)=>e.classList.toggle(\'done\',i<=node));qa(\'.connector\').forEach((e,i)=>e.classList.toggle(\'done\',i<node));q(\'input\').value=t;q(\'.time\').textContent=\'0:\'+String(Math.floor(t)).padStart(2,\'0\')+\' / 0:35\';q(\'[data-action="play"]\').textContent=playing?\'Pause\':t>=35?\'Play again\':\'Play\';q(\'[data-action="play"]\').setAttribute(\'aria-label\',playing?\'Pause animation\':\'Play animation\');focus()}\nfunction tick(now){if(last&&playing&&visible&&hostVisible&&!document.hidden){let next=Math.min(35,t+(now-last)/1000);const boundary=scenes[idx+1]?.at??35;if(audioBusy&&next>=boundary)next=boundary-.001;t=next;if(t>=35){playing=false;stopVoice()}}last=now;render();raf=requestAnimationFrame(tick)}\nq(\'[data-action="play"]\').onclick=()=>{playing=!playing;if(playing&&t>=35){t=0;idx=-1}if(playing)speak();else stopVoice();render()};q(\'[data-action="replay"]\').onclick=()=>{stopVoice();t=0;idx=-1;playing=true;render()};q(\'input\').oninput=e=>{stopVoice();t=Number(e.target.value);idx=-1;render()};q(\'[data-action=voice]\').onclick=()=>{voice=!voice;q(\'[data-action=voice]\').textContent=voice?\'Mute voice\':\'Enable voice\';q(\'[data-action=voice]\').setAttribute(\'aria-pressed\',String(voice));if(voice){if(t>=35){t=0;idx=-1}playing=true;render();speak()}else stopVoice()};if(!window.speechSynthesis){q(\'[data-action=voice]\').disabled=true;q(\'[data-action=voice]\').textContent=\'Voice unavailable\'};document.addEventListener(\'visibilitychange\',()=>{if(document.hidden)stopVoice()});const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible)stopVoice()});observer.observe(root);window.addEventListener(\'pagehide\',()=>{stopVoice();cancelAnimationFrame(raf);observer.disconnect()},{once:true});if(window.lucide)window.lucide.createIcons();render();raf=requestAnimationFrame(tick);\n})();\n</script>\n</body></html>';

function SalesOutsourcingStory() {
  const headingId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const sendVisibility = useOutsourcingStoryVisibility(
    sectionRef,
    frameRef,
    "quorisx-sales-visibility",
  );

  return (
    <section
      ref={sectionRef}
      id="sales-outsourcing-story"
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-background px-3 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 max-w-3xl px-1 sm:px-0">
          <p className="eyebrow mb-3">Why outsource Sales &amp; Growth?</p>
          <h2
            id={headingId}
            className="font-display text-2xl leading-tight text-foreground sm:text-4xl"
          >
            Give your sales team more time to sell.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Add dedicated support for research, follow-ups and CRM updates—while your team owns
            relationships, strategy and closing.
          </p>
        </div>
        <iframe
          ref={frameRef}
          srcDoc={withCompactStoryLayout(salesStoryDocument)}
          title="Why outsource Sales and Growth: an animated example with optional voice"
          scrolling="no"
          onLoad={sendVisibility}
          className="block h-[562px] w-full overflow-hidden rounded-2xl border-0 max-[520px]:h-[476px]"
          style={{ background: "#f7f4ee", colorScheme: "light" }}
        />
      </div>
    </section>
  );
}
