import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  FileCheck2,
  MapPin,
  MessageCircle,
  WalletCards,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./event-coordinator.css";

const eventStages = [
  {
    number: "01",
    title: "Communication & Alignment",
    detail:
      "Vendor and client communication stays on track. Planning calls are scheduled, and timeline updates are shared regularly.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Budget & Contracts",
    detail:
      "The event budget is prepared and monitored. Expenses are tracked and vendor contracts are reviewed before confirmation.",
    icon: WalletCards,
  },
  {
    number: "03",
    title: "Venue & Vendor Coordination",
    detail:
      "Venue options are researched, service details are confirmed, and every vendor receives timely follow-ups.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Execution Support",
    detail:
      "The run-of-show is distributed, staff are coordinated, and day-of changes are managed calmly and quickly.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Reporting & Close",
    detail:
      "RSVPs are tracked, invoices reconciled, and the event tracker and records are updated and closed.",
    icon: FileCheck2,
  },
];

const managementPoints = [
  "Proactive vendor follow-ups",
  "Clear ownership on every task",
  "Real-time updates during execution",
  "Clean documentation and handover after the event",
];

export function EventCoordinatorPage() {
  const [activeStage, setActiveStage] = useState(eventStages[0].number);

  useEffect(() => {
    const stages = document.querySelectorAll<HTMLElement>("[data-event-stage]");

    if (!("IntersectionObserver" in window)) {
      stages.forEach((stage) => (stage.dataset.stageVisible = "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stage = entry.target as HTMLElement;
            setActiveStage(stage.dataset.eventStage ?? eventStages[0].number);
            stage.dataset.stageVisible = "true";
          }
        });
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: 0 },
    );

    stages.forEach((stage) => observer.observe(stage));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="ec-page">
        <section className="ec-hero" aria-labelledby="ec-heading">
          <p className="ec-eyebrow">
            <span /> EVENT COORDINATION, END TO END
          </p>
          <h1 id="ec-heading">
            Events Stay Seamless.
            <br />
            <em>From Planning to Execution.</em>
          </h1>
          <p className="ec-hero-copy">
            Vendor coordination, timelines, budgets, and day-of support — handled so your event runs
            smoothly without constant oversight.
          </p>
          <a className="ec-scroll-link" href="#event-journey">
            Follow the event journey <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="ec-journey" id="event-journey" aria-labelledby="ec-journey-heading">
          <header className="ec-journey-heading">
            <p className="ec-eyebrow">
              <span /> THE EVENT, FROM FIRST BRIEF TO FINAL CLOSE
            </p>
            <h2 id="ec-journey-heading">
              One clear run
              <br />
              <em>from start to finish.</em>
            </h2>
            <p>
              A dedicated coordinator keeps every person, detail, and deadline moving in the same
              direction.
            </p>
          </header>

          <ol className="ec-stage-list" data-active-stage={activeStage}>
            {eventStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <li
                  className={`ec-stage${activeStage === stage.number ? " is-active" : ""}`}
                  data-event-stage={stage.number}
                  key={stage.number}
                >
                  <span className="ec-stage-marker" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="ec-stage-copy">
                    <h3>{stage.title}</h3>
                    <span className="ec-stage-number">EVENT PHASE {stage.number}</span>
                    <p>{stage.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="ec-managed" aria-labelledby="ec-managed-heading">
          <div className="ec-managed-inner">
            <div className="ec-managed-intro">
              <p className="ec-eyebrow">
                <span /> THE DETAILS STAY IN HAND
              </p>
              <h2 id="ec-managed-heading">
                How it stays
                <br />
                <em>managed.</em>
              </h2>
            </div>
            <ul className="ec-managed-list">
              {managementPoints.map((point, index) => (
                <li key={point}>
                  <span>0{index + 1}</span>
                  <span>{point}</span>
                  <Check aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ec-outcome" aria-labelledby="ec-outcome-heading">
          <div className="ec-outcome-inner">
            <p className="ec-eyebrow">
              <span /> YOU ENJOY THE MOMENT
            </p>
            <h2 id="ec-outcome-heading">
              Your event stays organized.
              <br />
              <em>You focus on the experience.</em>
            </h2>
            <a className="ec-cta" href="/contact#inquiry">
              Get Event Coordinator Support <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
