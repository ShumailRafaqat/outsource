import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  Mail,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./executive-assistant.css";

const priorities = [
  {
    label: "Decision required",
    summary: "Approve the revised launch timeline",
    detail:
      "Product is ready. Legal review is the only open dependency; approval requested by 11:00 AM.",
    number: "01",
  },
  {
    label: "Stakeholder update",
    summary: "Quarterly review materials are ready",
    detail:
      "Department leads have submitted their updates. The consolidated briefing is ready for your review.",
    number: "02",
  },
  {
    label: "For awareness",
    summary: "Key client renewal confirmed",
    detail:
      "The agreement is signed, the account team is informed, and no further action is needed.",
    number: "03",
  },
];

const calendarSlots = [
  { time: "9:00", title: "Focus time", type: "protected" },
  { time: "10:00", title: "Leadership sync", type: "meeting" },
  { time: "11:00", title: "Decision window", type: "decision" },
  { time: "12:00", title: "Open", type: "open" },
  { time: "1:00", title: "Client review", type: "meeting" },
  { time: "2:00", title: "Focus time", type: "protected" },
  { time: "3:00", title: "Open", type: "open" },
  { time: "4:00", title: "Team check-in", type: "meeting" },
];

const meetingBrief = [
  {
    label: "Purpose",
    detail: "Confirm launch readiness and agree on the final go/no-go criteria.",
  },
  {
    label: "Context",
    detail: "The latest product, legal, and customer updates are gathered in one briefing.",
  },
  {
    label: "Decision",
    detail: "Approve the timeline if the remaining legal review is cleared.",
  },
  {
    label: "Next step",
    detail: "Owners and follow-ups are captured so the decision turns into action.",
  },
];

const stages = [
  { id: "morning-context", label: "Morning context", number: "01" },
  { id: "calendar-access", label: "Calendar & access", number: "02" },
  { id: "communications-filter", label: "Communications", number: "03" },
  { id: "meeting-ready", label: "Meeting ready", number: "04" },
];

export function ExecutiveAssistantPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [highlightedSlot, setHighlightedSlot] = useState<string | null>(null);
  const [messagesFiltered, setMessagesFiltered] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-briefing-stage]");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => (section.dataset.stageVisible = "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stageIndex = Number((entry.target as HTMLElement).dataset.briefingStage);
            setActiveStage(stageIndex);
            (entry.target as HTMLElement).dataset.stageVisible = "true";
          }
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="ea-page">
        <section className="ea-opening" aria-labelledby="ea-heading">
          <div className="ea-opening-rule" aria-hidden="true" />
          <p className="ea-eyebrow">
            <span /> EXECUTIVE ASSISTANT · A DAILY BRIEFING
          </p>
          <h1 id="ea-heading">
            Senior support.
            <br />
            <em>You only decide.</em>
          </h1>
          <p className="ea-opening-description">
            Calendar, communications, stakeholder coordination, and briefings—prepared before they
            reach you.
          </p>
          <a href="#morning-context" className="ea-start-link">
            <span className="ea-start-icon">
              <ArrowDown aria-hidden="true" />
            </span>
            <span>
              <strong>Start the day</strong>
              <small>YOUR BRIEFING IS READY</small>
            </span>
          </a>
          <span className="ea-opening-index" aria-hidden="true">
            EA / 01
          </span>
        </section>

        <nav className="ea-stage-nav" aria-label="Briefing stages">
          <span className="ea-stage-nav-label">THE EXECUTIVE BRIEFING</span>
          <div className="ea-stage-nav-items">
            {stages.map((stage, index) => (
              <a
                href={`#${stage.id}`}
                key={stage.id}
                aria-current={activeStage === index + 1 ? "step" : undefined}
                className={activeStage === index + 1 ? "is-active" : ""}
              >
                <span>{stage.number}</span>
                <span>{stage.label}</span>
              </a>
            ))}
          </div>
        </nav>

        <section
          className="ea-stage ea-stage-priorities"
          id="morning-context"
          aria-labelledby="ea-priorities-heading"
          data-briefing-stage="1"
        >
          <div className="ea-stage-inner">
            <div className="ea-stage-meta">
              <span>STAGE 01</span>
              <span>08:15 AM · MORNING CONTEXT</span>
            </div>
            <span className="ea-stage-icon">
              <FileText aria-hidden="true" />
            </span>
            <p className="ea-eyebrow">
              <span /> THE DAY, ALREADY CONSIDERED
            </p>
            <h2 id="ea-priorities-heading">
              Key priorities, pending decisions, and stakeholder updates — already structured.
            </h2>
            <p className="ea-stage-description">
              A concise morning brief gives you the context to make the right call, without
              searching for it.
            </p>
            <div className="ea-priority-list">
              {priorities.map((priority) => (
                <details className="ea-priority-line" key={priority.number}>
                  <summary>
                    <span className="ea-line-number">{priority.number}</span>
                    <span className="ea-line-label">{priority.label}</span>
                    <strong>{priority.summary}</strong>
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{priority.detail}</p>
                </details>
              ))}
            </div>
            <a className="ea-next-link" href="#calendar-access">
              NEXT <span>Calendar & access control</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="ea-stage ea-stage-calendar"
          id="calendar-access"
          aria-labelledby="ea-calendar-heading"
          data-briefing-stage="2"
        >
          <div className="ea-stage-inner">
            <div className="ea-stage-meta">
              <span>STAGE 02</span>
              <span>09:00 AM · CALENDAR & ACCESS CONTROL</span>
            </div>
            <span className="ea-stage-icon">
              <CalendarDays aria-hidden="true" />
            </span>
            <p className="ea-eyebrow">
              <span /> TIME, PROTECTED WITH PURPOSE
            </p>
            <h2 id="ea-calendar-heading">
              Conflicts resolved.
              <br />
              <em>Only decision points reach your calendar.</em>
            </h2>
            <p className="ea-stage-description">
              Select a time to see what is protected, open, or ready for your decision.
            </p>
            <div
              className="ea-calendar-visual"
              aria-label="Interactive executive calendar for today"
            >
              <div className="ea-calendar-header">
                <span>
                  <span /> TODAY · TUESDAY, OCTOBER 13
                </span>
                <span>
                  <ShieldCheck aria-hidden="true" /> PRIVATE & COORDINATED
                </span>
              </div>
              <div className="ea-time-track">
                {calendarSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot.time}
                    aria-pressed={highlightedSlot === slot.time}
                    className={`ea-time-slot ea-slot-${slot.type}${highlightedSlot === slot.time ? " is-highlighted" : ""}`}
                    onClick={() =>
                      setHighlightedSlot(highlightedSlot === slot.time ? null : slot.time)
                    }
                  >
                    <span className="ea-slot-time">{slot.time}</span>
                    <span className="ea-slot-marker" />
                    <span className="ea-slot-label">{slot.title}</span>
                  </button>
                ))}
              </div>
              <div className="ea-calendar-legend">
                <span>
                  <i className="ea-legend-protected" /> FOCUS TIME
                </span>
                <span>
                  <i className="ea-legend-meeting" /> CONFIRMED
                </span>
                <span>
                  <i className="ea-legend-decision" /> YOUR DECISION
                </span>
                <span>
                  <i className="ea-legend-open" /> AVAILABLE
                </span>
              </div>
              {highlightedSlot && (
                <p className="ea-slot-feedback" key={highlightedSlot}>
                  <Check aria-hidden="true" />{" "}
                  {calendarSlots.find((slot) => slot.time === highlightedSlot)?.title} ·{" "}
                  {highlightedSlot}, coordinated and confirmed.
                </p>
              )}
            </div>
            <a className="ea-next-link" href="#communications-filter">
              NEXT <span>Communications filter</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="ea-stage ea-stage-communications"
          id="communications-filter"
          aria-labelledby="ea-communications-heading"
          data-briefing-stage="3"
        >
          <div className="ea-stage-inner">
            <div className="ea-stage-meta">
              <span>STAGE 03</span>
              <span>11:20 AM · COMMUNICATIONS FILTER</span>
            </div>
            <span className="ea-stage-icon">
              <Mail aria-hidden="true" />
            </span>
            <p className="ea-eyebrow">
              <span /> YOUR ATTENTION IS THE PRIORITY
            </p>
            <h2 id="ea-communications-heading">
              High-volume messages triaged.
              <br />
              <em>Drafts ready. Your voice, where it matters.</em>
            </h2>
            <p className="ea-stage-description">
              Tap the briefing to see the signal beneath the noise.
            </p>
            <button
              type="button"
              className={`ea-message-brief${messagesFiltered ? " is-filtered" : ""}`}
              aria-pressed={messagesFiltered}
              onClick={() => setMessagesFiltered((filtered) => !filtered)}
            >
              <span className="ea-message-topline">
                <span>
                  <MessageSquareText aria-hidden="true" /> EXECUTIVE INBOX · THIS MORNING
                </span>
                <span>{messagesFiltered ? "BRIEF READY" : "TAP TO TRIAGE"}</span>
              </span>
              <span className="ea-message-count">{messagesFiltered ? "3" : "48"}</span>
              <span className="ea-message-label">
                {messagesFiltered ? "need your attention" : "new messages, one clear view"}
              </span>
              <span className="ea-message-rule">
                <i />
              </span>
              <span className="ea-message-outcome">
                {messagesFiltered
                  ? "45 handled or drafted. Three decisions brought forward. The rest can wait."
                  : "Your assistant sorts the noise, prepares routine replies, and surfaces what matters."}
              </span>
              <span className="ea-message-action">
                {messagesFiltered ? "SHOW INBOX AGAIN" : "SHOW ME THE BRIEF"}{" "}
                <ArrowRight aria-hidden="true" />
              </span>
            </button>
            <a className="ea-next-link" href="#meeting-ready">
              NEXT <span>Meeting & decision ready</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="ea-stage ea-stage-meeting"
          id="meeting-ready"
          aria-labelledby="ea-meeting-heading"
          data-briefing-stage="4"
        >
          <div className="ea-stage-inner">
            <div className="ea-stage-meta">
              <span>STAGE 04</span>
              <span>01:45 PM · MEETING & DECISION READY</span>
            </div>
            <span className="ea-stage-icon">
              <UsersRound aria-hidden="true" />
            </span>
            <p className="ea-eyebrow">
              <span /> WALK IN WITH THE WHOLE PICTURE
            </p>
            <h2 id="ea-meeting-heading">
              Agenda, background, and next steps prepared.
              <br />
              <em>You walk in ready.</em>
            </h2>
            <p className="ea-stage-description">
              Meeting context, gathered and distilled. Open a line for the detail behind it.
            </p>
            <div className="ea-briefing-lines">
              {meetingBrief.map((item, index) => (
                <details className="ea-briefing-line" key={item.label}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.label}</strong>
                    <span>{index === 2 ? "DECISION POINT" : "PREPARED"}</span>
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{item.detail}</p>
                </details>
              ))}
            </div>
            <a className="ea-next-link" href="#ea-closing">
              NEXT <span>Your day, in decision mode</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="ea-closing" id="ea-closing" aria-labelledby="ea-closing-heading">
          <div className="ea-closing-rule" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="ea-eyebrow">
            <span /> THE WORK BEHIND THE WORK, HANDLED
          </p>
          <h2 id="ea-closing-heading">
            You stay in decision mode.
            <br />
            <em>Preparation and coordination stay handled.</em>
          </h2>
          <a href="/contact#inquiry" className="ea-primary-cta">
            Get executive support <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="/expertise/admin-executive" className="ea-scope-link">
            See support scope <ArrowRight aria-hidden="true" />
          </a>
          <div className="ea-closing-footer">
            <span>QUORISX · EXECUTIVE SUPPORT</span>
            <span>
              <Clock3 aria-hidden="true" /> YOUR TIME, WELL SPENT
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
