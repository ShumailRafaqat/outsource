import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, ClipboardCheck, Compass, Flag, Gauge } from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./project-manager.css";

const projectStages = [
  {
    number: "01",
    title: "Alignment & Planning",
    detail:
      "Scope, goals, and timelines are clarified. Work is broken into manageable tasks, with ownership defined from the start.",
    image: "/Alignment%20&%20Planning.png.jpg",
    alt: "Project team aligning on goals and planning a delivery roadmap",
    icon: Compass,
  },
  {
    number: "02",
    title: "Active Coordination",
    detail:
      "Updates are gathered, dependencies are managed, and communication stays clear across the team.",
    image: "/Active%20Coordination.png.jpg",
    alt: "Team coordinating project work and sharing progress",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Progress & Risk Management",
    detail:
      "Milestones are monitored. Blockers and risks are surfaced early and addressed before they affect delivery.",
    image: "/Progress%20&%20Risk%20Management.png.jpg",
    alt: "Project progress and delivery risks being reviewed",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Delivery & Handover",
    detail:
      "Work is completed, reviewed, and properly closed. Next steps and useful learnings are documented for the team.",
    image: "/Delivery%20&%20Completion.png.jpg",
    alt: "Completed project deliverables prepared for handover",
    icon: Flag,
  },
];

const strategies = [
  "Clear ownership on every task",
  "Regular but lightweight checkpoints",
  "Early risk identification",
  "Transparent progress visibility",
];

export function ProjectManagerPage() {
  const [activeStage, setActiveStage] = useState(projectStages[0].number);

  useEffect(() => {
    const stages = document.querySelectorAll<HTMLElement>("[data-project-stage]");

    if (!("IntersectionObserver" in window)) {
      stages.forEach((stage) => (stage.dataset.stageVisible = "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stage = entry.target as HTMLElement;
            setActiveStage(stage.dataset.projectStage ?? projectStages[0].number);
            stage.dataset.stageVisible = "true";
          }
        });
      },
      { rootMargin: "-18% 0px -42% 0px", threshold: 0 },
    );

    stages.forEach((stage) => observer.observe(stage));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pmp-page">
        <section className="pmp-hero" aria-labelledby="pmp-heading">
          <p className="pmp-eyebrow">
            <span /> PROJECT MANAGEMENT, WITH MOMENTUM
          </p>
          <h1 id="pmp-heading">
            A Project Manager
            <br />
            <em>Who Keeps Work Moving.</em>
          </h1>
          <p className="pmp-hero-copy">
            Clear workflow, smart coordination, and steady progress — so projects stay on track
            without constant follow-ups from you.
          </p>
          <a className="pmp-scroll-link" href="#project-workflow">
            See how the work moves <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section
          className="pmp-workflow"
          id="project-workflow"
          aria-labelledby="pmp-workflow-heading"
        >
          <header className="pmp-section-heading">
            <p className="pmp-eyebrow">
              <span /> FROM FIRST ALIGNMENT TO FINAL HANDOVER
            </p>
            <h2 id="pmp-workflow-heading">
              A clear process.
              <br />
              <em>Progress you can see.</em>
            </h2>
            <p>
              Your Project Manager keeps the moving parts connected, so the team can focus on
              delivery.
            </p>
          </header>

          <div className="pmp-stages" data-active-stage={activeStage}>
            {projectStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <article
                  className={`pmp-stage${index % 2 === 1 ? " pmp-stage-reversed" : ""}${activeStage === stage.number ? " is-active" : ""}`}
                  data-project-stage={stage.number}
                  key={stage.number}
                >
                  <div className="pmp-stage-copy">
                    <span className="pmp-stage-number">STAGE {stage.number}</span>
                    <span className="pmp-stage-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{stage.title}</h3>
                    <p>{stage.detail}</p>
                  </div>
                  <figure className="pmp-stage-visual">
                    <img src={stage.image} alt={stage.alt} loading="lazy" decoding="async" />
                    <figcaption>
                      <span>{stage.number}</span>
                      <span>{stage.title}</span>
                    </figcaption>
                  </figure>
                </article>
              );
            })}
          </div>
        </section>

        <section className="pmp-strategies" aria-labelledby="pmp-strategies-heading">
          <div className="pmp-strategies-inner">
            <div className="pmp-strategies-intro">
              <p className="pmp-eyebrow">
                <span /> HOW PROGRESS STAYS PREDICTABLE
              </p>
              <h2 id="pmp-strategies-heading">
                Simple strategies.
                <br />
                <em>Consistent follow-through.</em>
              </h2>
            </div>
            <ul className="pmp-strategy-list">
              {strategies.map((strategy, index) => (
                <li key={strategy}>
                  <span className="pmp-strategy-number">0{index + 1}</span>
                  <span>{strategy}</span>
                  <Check aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pmp-outcome" aria-labelledby="pmp-outcome-heading">
          <div className="pmp-outcome-inner">
            <p className="pmp-eyebrow">
              <span /> MOMENTUM WITHOUT THE CHASING
            </p>
            <h2 id="pmp-outcome-heading">
              Projects stay organized and moving.
              <br />
              <em>You stay focused on decisions.</em>
            </h2>
            <a className="pmp-cta" href="/contact#inquiry">
              Get Project Manager Support <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
