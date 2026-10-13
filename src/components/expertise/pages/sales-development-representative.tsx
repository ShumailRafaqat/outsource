import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Database, Mail, Search, Target } from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./sales-development-representative.css";

const pipelineWork = [
  {
    number: "01",
    title: "Find the Right People",
    detail: "Target accounts researched. New prospects identified. Lists stay fresh and relevant.",
    icon: Search,
    image: "/Prospecting%20&%20Research.png.jpg",
    alt: "Prospect research and lead identification workflow",
  },
  {
    number: "02",
    title: "Start the Conversations",
    detail:
      "Outreach sequences run. Follow-ups happen on time. No leads go cold because someone got busy.",
    icon: Mail,
    image: "/Outbound%20Outreach.png%20.jpg",
    alt: "Outbound email and follow-up sequence for prospective customers",
  },
  {
    number: "03",
    title: "Qualify Before Handoff",
    detail: "Only leads that fit move forward. Sales gets useful context, not just raw names.",
    icon: Target,
    image: "/Lead%20Qualification.png.jpg",
    alt: "Lead qualification process identifying and prioritizing the right prospects",
  },
  {
    number: "04",
    title: "Keep the Pipeline Clean",
    detail:
      "Warm leads are handed over with context. CRM records and activity stay current, so everyone sees what is moving.",
    icon: Database,
    image: "/Meeting%20&%20Handoff.png.jpg",
    alt: "A warm qualified lead prepared for handoff to the sales team",
  },
];

const teamOutcomes = [
  "Time back from prospecting",
  "Consistent pipeline flow",
  "Better quality conversations",
];

export function SalesDevelopmentRepresentativePage() {
  const [activeWork, setActiveWork] = useState(pipelineWork[0].number);

  useEffect(() => {
    const workItems = document.querySelectorAll<HTMLElement>("[data-sdr-work]");

    if (!("IntersectionObserver" in window)) {
      workItems.forEach((item) => (item.dataset.workVisible = "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target as HTMLElement;
            setActiveWork(item.dataset.sdrWork ?? pipelineWork[0].number);
            item.dataset.workVisible = "true";
          }
        });
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0 },
    );

    workItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="sdr-page">
        <section className="sdr-hero" aria-labelledby="sdr-heading">
          <img
            className="sdr-hero-image"
            src="/images/img3.jpg"
            alt=""
            fetchPriority="high"
            aria-hidden="true"
          />
          <div className="sdr-hero-inner">
            <p className="sdr-eyebrow">
              <span /> SALES DEVELOPMENT REPRESENTATIVE <span />
            </p>
            <h1 id="sdr-heading">
              More Qualified
              <br />
              <em>Conversations.</em>
            </h1>
            <p className="sdr-hero-copy">
              Less time spent prospecting. A dedicated SDR handles research, outreach, and
              qualification daily — so your sales team focuses on closing.
            </p>
            <a className="sdr-hero-cta" href="/contact#inquiry">
              Add SDR Support <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="sdr-hero-footer" aria-hidden="true">
            <span>RESEARCH</span>
            <i />
            <span>OUTREACH</span>
            <i />
            <span>QUALIFY</span>
            <i />
            <span>HANDOFF</span>
          </div>
        </section>

        <section className="sdr-work" aria-labelledby="sdr-work-heading">
          <header className="sdr-work-heading">
            <p className="sdr-eyebrow">
              <span /> DAILY ACTIVITY. REAL PIPELINE MOMENTUM.
            </p>
            <h2 id="sdr-work-heading">
              The work that <em>moves pipeline forward.</em>
            </h2>
          </header>

          <ol className="sdr-work-list" data-active-work={activeWork}>
            {pipelineWork.map((work) => {
              const Icon = work.icon;

              return (
                <li
                  className={`sdr-work-item${activeWork === work.number ? " is-active" : ""}${work.image ? " has-image" : ""}`}
                  data-sdr-work={work.number}
                  key={work.number}
                >
                  <span className="sdr-work-number">{work.number}</span>
                  <span className="sdr-work-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="sdr-work-copy">
                    <span className="sdr-work-kicker">PIPELINE STEP {work.number}</span>
                    <h3>{work.title}</h3>
                    <p>{work.detail}</p>
                  </div>
                  {work.image && (
                    <figure className="sdr-work-image">
                      <img src={work.image} alt={work.alt} loading="lazy" decoding="async" />
                      <figcaption>{work.title}</figcaption>
                    </figure>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="sdr-team" aria-labelledby="sdr-team-heading">
          <div className="sdr-team-inner">
            <div>
              <p className="sdr-eyebrow">
                <span /> WHAT YOUR TEAM GETS BACK
              </p>
              <h2 id="sdr-team-heading">
                More time for
                <br />
                <em>the right conversations.</em>
              </h2>
            </div>
            <ul className="sdr-team-outcomes">
              {teamOutcomes.map((outcome) => (
                <li key={outcome}>
                  <Check aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sdr-close" aria-labelledby="sdr-close-heading">
          <div className="sdr-close-inner">
            <p className="sdr-eyebrow">
              <span /> YOUR PIPELINE, WITH MOMENTUM
            </p>
            <h2 id="sdr-close-heading">
              Pipeline stays full.
              <br />
              <em>Sales stays focused.</em>
            </h2>
            <a className="sdr-cta" href="/contact#inquiry">
              Add SDR Support <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
