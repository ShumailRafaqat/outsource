import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronDown,
  Clock3,
  FileSearch,
  FolderKanban,
  Inbox,
  Mail,
  MapPinned,
  Plane,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./general-virtual-assistant.css";

export type Scenario = {
  id: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  without: string;
  with: string;
  outcome: string;
  detail: string;
  signal: string;
};

export type TimelineMoment = {
  time: string;
  title: string;
  without: string;
  with: string;
  icon: LucideIcon;
};

export type AssistantService = {
  title: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
};

export type AssistantStory = {
  quote: string;
  attribution: string;
  label: string;
};

export type AssistantPhotoStory = {
  src: string;
  alt: string;
  label: string;
  title: string;
};

export type AssistantPageContent = {
  eyebrow: string;
  headline: [string, string, string];
  description: string;
  primaryCta: string;
  socialHeadline: string;
  socialDescription: string;
  demoLabel: string;
  assistantGreeting: string;
  assistantIntro: string;
  demoSummaryTitle: string;
  demoSummaryFooter: string;
  floatingNotes: [string, string];
  chooserEyebrow: string;
  chooserHeading: string;
  ownerLine: string;
  problemEyebrow: string;
  problemHeading: [string, string];
  problemDescription: string;
  withoutLabel: string;
  withoutStatus: string;
  withLabel: string;
  withStatus: string;
  problemFootnote: string;
  timelineId: string;
  timelineEyebrow: string;
  timelineHeading: [string, string];
  timelineDescription: string;
  timelineWithoutLabel: string;
  timelineWithLabel: string;
  serviceEyebrow: string;
  serviceHeading: [string, string];
  serviceDescription: string;
  serviceLink: string;
  proofLabel: string;
  testimonialHeading: [string, string];
  testimonialIndexLabel: string;
  ctaEyebrow: string;
  ctaHeading: [string, string, string];
  ctaDescription: string;
  primaryFinalCta: string;
  signoffHeadline: string;
  signoffDescription: string;
  floatingCta: string;
  photoShowcase?: {
    eyebrow: string;
    heading: [string, string];
    description: string;
    photos: AssistantPhotoStory[];
  };
  scenarios: Scenario[];
  timeline: TimelineMoment[];
  services: AssistantService[];
  stories: AssistantStory[];
};

const scenarios: Scenario[] = [
  {
    id: "inbox",
    label: "Inbox overload",
    shortLabel: "Inbox",
    icon: Inbox,
    without:
      "Client emails sit for days. The important ones get buried, and you keep checking instead of doing deep work.",
    with: "Your assistant triages new mail, flags what matters, drafts routine replies, and sends a clear daily summary.",
    outcome: "You save 1.5–2 hours daily on this alone.",
    detail: "Priority messages surfaced · Drafts ready for review",
    signal: "38 messages → 3 decisions",
  },
  {
    id: "calendar",
    label: "Calendar conflicts",
    shortLabel: "Calendar",
    icon: CalendarDays,
    without:
      "Double-bookings, back-to-back calls, and missing details leave you untangling your schedule between meetings.",
    with: "Your assistant coordinates availability, confirms attendees, resolves conflicts, and protects time to focus.",
    outcome: "Your day has room to actually think.",
    detail: "Meetings confirmed · Focus time protected",
    signal: "3 conflicts → clear schedule",
  },
  {
    id: "research",
    label: "Research backlog",
    shortLabel: "Research",
    icon: FileSearch,
    without:
      "Ten tabs are open, the comparison is still half-done, and a decision that should take minutes is taking your afternoon.",
    with: "Your assistant gathers the options, checks the details, and brings back a concise brief with a clear recommendation.",
    outcome: "A useful answer, without the open tabs.",
    detail: "Sources checked · Options ready to compare",
    signal: "12 open tabs → one clear brief",
  },
  {
    id: "follow-ups",
    label: "Missed follow-ups",
    shortLabel: "Follow-ups",
    icon: Bell,
    without:
      "A good conversation goes cold while action items, promised replies, and important deadlines disappear into your notes.",
    with: "Your assistant tracks next steps, sends thoughtful reminders, and follows each thread through to a clear outcome.",
    outcome: "Nothing important waits on your memory.",
    detail: "Next steps tracked · Loose ends closed",
    signal: "7 open loops → all accounted for",
  },
  {
    id: "travel",
    label: "Travel & logistics",
    shortLabel: "Travel",
    icon: Plane,
    without:
      "A changed flight means new tabs, missed confirmations, and an itinerary you have to rebuild yourself.",
    with: "Your assistant coordinates bookings, keeps the itinerary current, and handles the details when plans change.",
    outcome: "Your trip stays organized, even when plans change.",
    detail: "Bookings confirmed · Itinerary kept up to date",
    signal: "5 travel details → one itinerary",
  },
];

const timeline: TimelineMoment[] = [
  {
    time: "9:00 AM",
    title: "Inbox, under control",
    without: "A hundred little decisions before your first coffee.",
    with: "Priority summary ready. Only the important decisions reach you.",
    icon: Mail,
  },
  {
    time: "11:30 AM",
    title: "A day that flows",
    without: "A calendar clash appears five minutes before a call.",
    with: "Meetings confirmed, conflicts resolved, focus time protected.",
    icon: CalendarDays,
  },
  {
    time: "2:00 PM",
    title: "Research, already done",
    without: "Ten tabs open. Still not sure which option is right.",
    with: "A clear brief and useful options are ready to review.",
    icon: Search,
  },
  {
    time: "5:00 PM",
    title: "Nothing left hanging",
    without: "Follow-ups you meant to send are still in your notes.",
    with: "Reminders tracked. Loose ends followed through.",
    icon: CheckCheck,
  },
  {
    time: "End of day",
    title: "Actually signed off",
    without: "Tomorrow's to-do list follows you home.",
    with: "The next day is already prepped. You can switch off.",
    icon: Clock3,
  },
];

const services: AssistantService[] = [
  {
    title: "Communication & scheduling",
    description: "Manage calendars, triage email, and book and confirm appointments.",
    outcome: "Conflicts resolved before they reach you.",
    icon: CalendarDays,
  },
  {
    title: "Research & admin",
    description: "Run comparisons, prepare documents, and handle routine requests.",
    outcome: "A clean brief instead of 10 open tabs.",
    icon: FileSearch,
  },
  {
    title: "Travel & logistics",
    description: "Book flights, update itineraries, and confirm changes.",
    outcome: "Plans stay organized, even when they change.",
    icon: MapPinned,
  },
  {
    title: "Follow-through & reminders",
    description: "Track deadlines, coordinate vendors, and follow up to completion.",
    outcome: "Updates, not noise. Nothing left to chance.",
    icon: CheckCheck,
  },
  {
    title: "Organization & records",
    description: "Keep task lists current, files updated, and records clean.",
    outcome: "Everything current and easy to find.",
    icon: FolderKanban,
  },
];

const stories: AssistantStory[] = [
  {
    quote:
      "A founder reclaimed 12 hours a week on email and scheduling alone. Now the hours go to client strategy.",
    attribution: "A founder, professional services",
    label: "The calendar reclaim",
  },
  {
    quote:
      "With research and routine admin handled, decisions arrive with the context to make them—not another pile of tabs.",
    attribution: "A business owner, growing team",
    label: "The focus shift",
  },
  {
    quote:
      "The follow-ups stopped living in someone's head. Projects move forward even on the busiest weeks.",
    attribution: "An operations lead, small business",
    label: "The follow-through",
  },
];

const generalAssistantContent: AssistantPageContent = {
  eyebrow: "GENERAL VIRTUAL ASSISTANT",
  headline: ["You’re doing work", "that shouldn’t", "reach your desk."],
  description:
    "Reclaim 10–15 hours a week. One dedicated assistant owns the recurring tasks so you can focus on what actually grows the business.",
  primaryCta: "Get your time back",
  socialHeadline: "More room for your best work.",
  socialDescription: "Less time lost to the work around it.",
  demoLabel: "YOUR WORKDAY, REIMAGINED",
  assistantGreeting: "Your day is already in motion.",
  assistantIntro: "Here's what I took care of.",
  demoSummaryTitle: "Today, made lighter",
  demoSummaryFooter: "4 things handled before 9am",
  floatingNotes: ["Inbox, sorted", "Conflict resolved"],
  chooserEyebrow: "START WITH WHAT’S ON YOUR MIND",
  chooserHeading: "What’s taking up your time?",
  ownerLine: "This shouldn’t be yours to carry. It needs an owner.",
  problemEyebrow: "YOUR TO-DO LIST, REWRITTEN",
  problemHeading: ["Choose the chaos you want", "off your plate."],
  problemDescription:
    "Select the problems that eat your day. See exactly how a dedicated assistant handles them, step by step.",
  withoutLabel: "WITHOUT AN ASSISTANT",
  withoutStatus: "Still waiting on you",
  withLabel: "WITH YOUR ASSISTANT",
  withStatus: "Taken care of",
  problemFootnote: "Start with one. Add more when you’re ready.",
  timelineId: "day-in-your-life",
  timelineEyebrow: "SAME DAY. DIFFERENT REALITY.",
  timelineHeading: ["From chaos to clarity.", "One day at a time."],
  timelineDescription:
    "Same business. Same ambitions. A workday that finally feels like yours again.",
  timelineWithoutLabel: "THE DAY WITHOUT HELP",
  timelineWithLabel: "THE DAY WITH YOUR ASSISTANT",
  serviceEyebrow: "A LITTLE LESS ON YOUR MIND",
  serviceHeading: ["Your assistant handles", "the things that add up."],
  serviceDescription:
    "Not another tool to manage. A real person who learns your preferences and owns the repeatable work.",
  serviceLink: "Find your dedicated assistant",
  proofLabel: "THE DIFFERENCE IS IN THE DAY-TO-DAY",
  testimonialHeading: ["Less juggling.", "More forward."],
  testimonialIndexLabel: "THE BEFORE & AFTER",
  ctaEyebrow: "MORE SPACE FOR WHAT MATTERS",
  ctaHeading: ["Stop doing work", "that doesn’t need", "you."],
  ctaDescription:
    "One dedicated assistant owns the recurring tasks end to end. You get the time back.",
  primaryFinalCta: "Get your time back",
  signoffHeadline: "Your time is yours again.",
  signoffDescription: "Start with one thing. We’ll take it from there.",
  floatingCta: "Start with one problem",
  photoShowcase: {
    eyebrow: "A REAL PERSON, IN YOUR CORNER",
    heading: ["The everyday work,", "in capable hands."],
    description:
      "A dedicated assistant brings the human attention behind every clear inbox, organized plan, and thoughtful follow-through.",
    photos: [
      {
        src: "/images/img3.jpg",
        alt: "Professionals reviewing priorities together in a bright office meeting",
        label: "COMMUNICATION & COORDINATION",
        title: "People and priorities, kept in sync.",
      },
      {
        src: "/images/imag%204.jpg",
        alt: "Two colleagues coordinating their work at a computer in a shared office",
        label: "DAILY ADMIN & FOLLOW-THROUGH",
        title: "The details handled before they pile up.",
      },
    ],
  },
  scenarios,
  timeline,
  services,
  stories,
};

export function GeneralVirtualAssistantPage() {
  return <InteractiveAssistantPage content={generalAssistantContent} />;
}

export function InteractiveAssistantPage({ content }: { content: AssistantPageContent }) {
  const [activeScenario, setActiveScenario] = useState(content.scenarios[0]?.id ?? "");
  const [selectedScenarios, setSelectedScenarios] = useState<string[]>([]);
  const [openServices, setOpenServices] = useState<string[]>([]);
  const currentScenario =
    content.scenarios.find((scenario) => scenario.id === activeScenario) ?? content.scenarios[0];
  const ActiveScenarioIcon = currentScenario?.icon ?? CalendarDays;

  useEffect(() => {
    const steps = document.querySelectorAll<HTMLElement>("[data-story-step]");

    if (!("IntersectionObserver" in window)) {
      steps.forEach((step) => (step.dataset.storyVisible = "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.storyVisible = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const chooseScenario = (id: string) => {
    setActiveScenario(id);
    setSelectedScenarios((selected) =>
      selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id],
    );
  };

  const toggleService = (title: string) => {
    setOpenServices((open) =>
      open.includes(title) ? open.filter((item) => item !== title) : [...open, title],
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="gva-hero" aria-labelledby="gva-heading">
          <div className="gva-hero-grid" aria-hidden="true" />
          <div className="gva-hero-inner">
            <div className="gva-hero-copy">
              <p className="gva-eyebrow">
                <span /> {content.eyebrow}
              </p>
              <h1 id="gva-heading">
                {content.headline[0]}
                <br />
                {content.headline[1]}
                <br />
                <span>{content.headline[2]}</span>
              </h1>
              <p className="gva-hero-description">{content.description}</p>
              <div className="gva-hero-actions">
                <a className="gva-button gva-button-accent" href="/contact#inquiry">
                  {content.primaryCta} <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="gva-text-link" href={`#${content.timelineId}`}>
                  See how it works <ArrowDown aria-hidden="true" />
                </a>
              </div>
              <div className="gva-social-proof">
                <div className="gva-avatar-stack" aria-hidden="true">
                  <span>J</span>
                  <span>M</span>
                  <span>A</span>
                  <span>+</span>
                </div>
                <p>
                  <strong>{content.socialHeadline}</strong>
                  <br />
                  {content.socialDescription}
                </p>
              </div>
            </div>

            <div
              className="gva-demo"
              aria-label="Interactive preview of your assistant taking ownership"
            >
              <div className="gva-demo-top">
                <span className="gva-window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>{content.demoLabel}</span>
                <span className="gva-live">
                  <i /> LIVE
                </span>
              </div>
              <div className="gva-demo-greeting">
                <div>
                  <span className="gva-small-label">MONDAY, 9:02 AM</span>
                  <h2>Good morning, Alex.</h2>
                  <p>{content.assistantGreeting}</p>
                </div>
                <span className="gva-sparkle">
                  <Sparkles aria-hidden="true" />
                </span>
              </div>

              <div className="gva-assistant-note">
                <span className="gva-note-icon">
                  <BriefcaseBusiness aria-hidden="true" />
                </span>
                <p>
                  <strong>Your assistant</strong>
                  <br />
                  <span>{content.assistantIntro}</span>
                </p>
                <span className="gva-note-check">
                  <Check aria-hidden="true" />
                </span>
              </div>

              {currentScenario && (
                <div className="gva-demo-tasks" key={currentScenario.id}>
                  <div className="gva-demo-task">
                    <span className="gva-task-icon">
                      <currentScenario.icon aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{currentScenario.label}</strong>
                      <span>{currentScenario.detail}</span>
                    </div>
                    <span className="gva-task-done">
                      <Check aria-hidden="true" />
                    </span>
                  </div>
                  <div className="gva-demo-task">
                    <span className="gva-task-icon gva-task-icon-muted">
                      <CalendarDays aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{content.demoSummaryTitle}</strong>
                      <span>{currentScenario.signal}</span>
                    </div>
                    <span className="gva-task-done">
                      <Check aria-hidden="true" />
                    </span>
                  </div>
                </div>
              )}

              <div className="gva-demo-footer">
                <span>
                  <span className="gva-availability-dot" /> {content.demoSummaryFooter}
                </span>
                <span>
                  YOU’RE ALL SET <ArrowRight aria-hidden="true" />
                </span>
              </div>
              <div className="gva-floating-note gva-floating-note-top">
                <ActiveScenarioIcon aria-hidden="true" />
                <span>{content.floatingNotes[0]}</span>
                <Check aria-hidden="true" />
              </div>
              <div className="gva-floating-note gva-floating-note-bottom">
                <CalendarDays aria-hidden="true" />
                <span>{content.floatingNotes[1]}</span>
                <Check aria-hidden="true" />
              </div>
            </div>

            <div className="gva-hero-picker">
              <div>
                <span className="gva-small-label">{content.chooserEyebrow}</span>
                <p>{content.chooserHeading}</p>
              </div>
              <div className="gva-chips" aria-label="Choose a task to see how your assistant helps">
                {content.scenarios.map((scenario) => {
                  const Icon = scenario.icon;
                  return (
                    <button
                      type="button"
                      key={scenario.id}
                      aria-pressed={selectedScenarios.includes(scenario.id)}
                      className={`gva-chip${selectedScenarios.includes(scenario.id) ? " is-active" : ""}`}
                      onClick={() => {
                        setActiveScenario(scenario.id);
                        setSelectedScenarios((selected) =>
                          selected.includes(scenario.id) ? selected : [...selected, scenario.id],
                        );
                      }}
                    >
                      <Icon aria-hidden="true" />
                      {scenario.label}
                    </button>
                  );
                })}
              </div>
              <p className="gva-owner-line" key={activeScenario}>
                <Sparkles aria-hidden="true" /> {content.ownerLine}
              </p>
            </div>
          </div>
          <a
            className="gva-scroll-cue"
            href="#problem-selector"
            aria-label="Scroll to choose the chaos you want off your plate"
          >
            <span>THE CALMER SIDE STARTS HERE</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        {content.photoShowcase && (
          <section className="gva-photo-showcase" aria-labelledby="gva-photo-heading">
            <div className="gva-photo-inner">
              <div className="gva-section-heading">
                <p className="gva-eyebrow">
                  <span /> {content.photoShowcase.eyebrow}
                </p>
                <h2 id="gva-photo-heading">
                  {content.photoShowcase.heading[0]}
                  <br className="gva-desktop-break" /> <em>{content.photoShowcase.heading[1]}</em>
                </h2>
                <p>{content.photoShowcase.description}</p>
              </div>
              <div className="gva-photo-grid">
                {content.photoShowcase.photos.map((photo, index) => (
                  <figure
                    className={`gva-photo-card${index === 0 ? " is-featured" : ""}`}
                    key={photo.src}
                  >
                    <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                    <figcaption className="gva-photo-caption">
                      <span>{photo.label}</span>
                      <strong>{photo.title}</strong>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          className="gva-section gva-problems"
          id="problem-selector"
          aria-labelledby="problem-heading"
        >
          <div className="gva-section-heading">
            <p className="gva-eyebrow">
              <span /> {content.problemEyebrow}
            </p>
            <h2 id="problem-heading">
              {content.problemHeading[0]}
              <br className="gva-desktop-break" /> <em>{content.problemHeading[1]}</em>
            </h2>
            <p>{content.problemDescription}</p>
          </div>
          <div className="gva-problem-list">
            {content.scenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              const isOpen = selectedScenarios.includes(scenario.id);
              const panelId = `gva-story-${scenario.id}`;
              return (
                <article
                  className={`gva-problem-card${isOpen ? " is-open" : ""}`}
                  key={scenario.id}
                >
                  <button
                    type="button"
                    className="gva-problem-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => chooseScenario(scenario.id)}
                  >
                    <span className="gva-problem-number">0{index + 1}</span>
                    <span className="gva-problem-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="gva-problem-label">{scenario.label}</span>
                    <span className="gva-problem-toggle">
                      {isOpen ? "Close story" : "See the difference"}
                      <ChevronDown aria-hidden="true" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="gva-story-panel" id={panelId}>
                      <div className="gva-story-column gva-story-before">
                        <span className="gva-small-label">{content.withoutLabel}</span>
                        <span className="gva-story-status">
                          <i /> {content.withoutStatus}
                        </span>
                        <p>{scenario.without}</p>
                      </div>
                      <div className="gva-story-arrow" aria-hidden="true">
                        <ArrowRight />
                      </div>
                      <div className="gva-story-column gva-story-after">
                        <span className="gva-small-label">{content.withLabel}</span>
                        <span className="gva-story-status">
                          <i /> {content.withStatus}
                        </span>
                        <p>{scenario.with}</p>
                      </div>
                      <div className="gva-story-outcome">
                        <Sparkles aria-hidden="true" />
                        <strong>{scenario.outcome}</strong>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
          <p className="gva-section-footnote">
            <UsersRound aria-hidden="true" /> {content.problemFootnote}
          </p>
        </section>

        <section className="gva-day" id={content.timelineId} aria-labelledby="day-heading">
          <div className="gva-section gva-day-inner">
            <div className="gva-section-heading gva-day-heading">
              <p className="gva-eyebrow">
                <span /> {content.timelineEyebrow}
              </p>
              <h2 id="day-heading">
                {content.timelineHeading[0]}
                <br />
                <em>{content.timelineHeading[1]}</em>
              </h2>
              <p>{content.timelineDescription}</p>
            </div>
            <div className="gva-timeline">
              <div className="gva-timeline-headings" aria-hidden="true">
                <span>{content.timelineWithoutLabel}</span>
                <span>{content.timelineWithLabel}</span>
              </div>
              {content.timeline.map((moment, index) => {
                const Icon = moment.icon;
                return (
                  <article className="gva-timeline-row" key={moment.time} data-story-step>
                    <div className="gva-timeline-time">{moment.time}</div>
                    <div className="gva-timeline-without">
                      <span className="gva-timeline-mobile-label">
                        {content.timelineWithoutLabel}
                      </span>
                      <p>{moment.without}</p>
                    </div>
                    <div className="gva-timeline-marker" aria-hidden="true">
                      <span>
                        <Icon />
                      </span>
                      {index < timeline.length - 1 && <i />}
                    </div>
                    <div className="gva-timeline-with">
                      <span className="gva-timeline-mobile-label">{content.timelineWithLabel}</span>
                      <strong>{moment.title}</strong>
                      <p>{moment.with}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="gva-section gva-services" aria-labelledby="services-heading">
          <div className="gva-service-intro">
            <p className="gva-eyebrow">
              <span /> {content.serviceEyebrow}
            </p>
            <h2 id="services-heading">
              {content.serviceHeading[0]}
              <br />
              <em>{content.serviceHeading[1]}</em>
            </h2>
            <p>{content.serviceDescription}</p>
            <a href="/contact#inquiry" className="gva-inline-link">
              {content.serviceLink} <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="gva-service-list">
            {content.services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openServices.includes(service.title);
              const panelId = `gva-service-${index}`;
              return (
                <article
                  className={`gva-service-card${isOpen ? " is-open" : ""}`}
                  key={service.title}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleService(service.title)}
                  >
                    <span className="gva-service-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="gva-service-title">{service.title}</span>
                    <span className="gva-service-plus" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="gva-service-detail" id={panelId}>
                      <p>{service.description}</p>
                      <span>
                        <Check aria-hidden="true" /> {service.outcome}
                      </span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="gva-proof" aria-label="Quorisx talent network and client outcomes">
          <div className="gva-proof-inner">
            <div className="gva-proof-stats">
              <div>
                <strong>
                  10,000<span>+</span>
                </strong>
                <span>active assistants</span>
              </div>
              <div className="gva-proof-divider" aria-hidden="true" />
              <div>
                <strong>
                  10,000<span>+</span>
                </strong>
                <span>companies powered</span>
              </div>
              <div className="gva-proof-note">
                <span>2M+</span> applicants screened <i /> <span>20+</span> countries
              </div>
            </div>
            <div className="gva-testimonials-heading">
              <p className="gva-eyebrow">
                <span /> {content.proofLabel}
              </p>
              <h2>
                {content.testimonialHeading[0]}
                <br />
                <em>{content.testimonialHeading[1]}</em>
              </h2>
            </div>
            <div className="gva-testimonials">
              {content.stories.map((story, index) => (
                <article className="gva-testimonial" key={story.label} data-story-step>
                  <span className="gva-testimonial-index">
                    0{index + 1} / {content.testimonialIndexLabel}
                  </span>
                  <span className="gva-quote-mark" aria-hidden="true">
                    “
                  </span>
                  <p>{story.quote}</p>
                  <div className="gva-testimonial-footer">
                    <span>{story.attribution}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gva-final-cta" aria-labelledby="final-cta-heading">
          <div className="gva-final-cta-orbit" aria-hidden="true" />
          <div className="gva-final-cta-copy">
            <p className="gva-eyebrow">
              <span /> {content.ctaEyebrow}
            </p>
            <h2 id="final-cta-heading">
              {content.ctaHeading[0]}
              <br />
              {content.ctaHeading[1]} <em>{content.ctaHeading[2]}</em>
            </h2>
            <p>{content.ctaDescription}</p>
            <div className="gva-hero-actions">
              <a className="gva-button gva-button-accent" href="/contact#inquiry">
                {content.primaryFinalCta} <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="gva-button gva-button-outline" href="/contact#inquiry">
                Plans & pricing <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="gva-cta-signoff">
            <span>
              <Clock3 aria-hidden="true" />
            </span>
            <p>
              <strong>{content.signoffHeadline}</strong>
              <br />
              {content.signoffDescription}
            </p>
          </div>
        </section>
      </main>

      <a className="gva-floating-cta" href="#problem-selector">
        <Sparkles aria-hidden="true" /> {content.floatingCta}
      </a>
    </div>
  );
}
