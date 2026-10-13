import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ContactRound,
  Search,
  Target,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./it-sdr.css";

const sdrResponsibilities = [
  {
    title: "Target the right tech accounts",
    description:
      "Research companies by industry, technology stack, size, and buying signals to build a focused prospect list.",
    icon: Search,
  },
  {
    title: "Reach the people who decide",
    description:
      "Start relevant conversations with IT managers, CTOs, and other decision-makers through calls and email.",
    icon: ContactRound,
  },
  {
    title: "Qualify for technical fit",
    description:
      "Explore business needs, budget signals, timing, and decision-maker access against your qualification criteria.",
    icon: Target,
  },
  {
    title: "Book meetings with context",
    description:
      "Schedule qualified conversations and give your sales team the account details and discovery notes for a prepared handoff.",
    icon: Building2,
  },
];

const outsourcingBenefits = [
  "Your sales team focuses on closing, not prospecting",
  "A consistent pipeline of tech-relevant leads",
  "No need to recruit and train in-house SDRs",
  "Capacity that can scale around your targets",
  "More relevant, better-prepared conversations",
];

export function ItSdrPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="it-sdr-page">
        <section className="it-sdr-hero" aria-labelledby="it-sdr-heading">
          <div className="it-sdr-hero-copy">
            <a className="it-sdr-back-link" href="/expertise/sales-development">
              <ArrowLeft aria-hidden="true" />
              Sales &amp; Growth expertise
            </a>
            <p className="it-sdr-eyebrow">
              <span /> IT SALES DEVELOPMENT
            </p>
            <h1 id="it-sdr-heading">
              Qualified meetings
              <br />
              <em>for your tech sales team.</em>
            </h1>
            <p className="it-sdr-hero-description">
              An IT SDR prospects, qualifies, and books meetings with the right tech buyers—so your
              closers spend more time with relevant accounts.
            </p>
            <a className="it-sdr-button" href="/contact#inquiry">
              Talk to our team <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <figure className="it-sdr-hero-visual">
            <img
              src="/2.jpg"
              alt="Sales development professional reviewing lead information in a CRM"
              fetchPriority="high"
            />
            <figcaption>
              <span className="it-sdr-visual-mark" aria-hidden="true">
                <Check />
              </span>
              <span>
                <strong>Better-prepared meetings</strong>
                <small>Relevant accounts. Clear next steps.</small>
              </span>
            </figcaption>
          </figure>
        </section>

        <section className="it-sdr-work" aria-labelledby="it-sdr-work-heading">
          <header className="it-sdr-section-intro">
            <p className="it-sdr-eyebrow">
              <span /> WHAT AN IT SDR DOES
            </p>
            <h2 id="it-sdr-work-heading">
              The right buyers,
              <br />
              <em>ready for a real conversation.</em>
            </h2>
            <p>
              Focused outreach turns a broad market into a clear path from target account to
              qualified meeting.
            </p>
          </header>
          <div className="it-sdr-responsibilities">
            {sdrResponsibilities.map((responsibility, index) => {
              const Icon = responsibility.icon;
              return (
                <article className="it-sdr-responsibility" key={responsibility.title}>
                  <span className="it-sdr-responsibility-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className="it-sdr-responsibility-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{responsibility.title}</h3>
                    <p>{responsibility.description}</p>
                  </div>
                  <ArrowRight className="it-sdr-responsibility-arrow" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </section>

        <section className="it-sdr-outsourcing" aria-labelledby="it-sdr-outsourcing-heading">
          <div className="it-sdr-outsourcing-copy">
            <p className="it-sdr-eyebrow">
              <span /> WHY TECH COMPANIES OUTSOURCE
            </p>
            <h2 id="it-sdr-outsourcing-heading">
              Keep your closers
              <br />
              <em>focused on closing.</em>
            </h2>
            <p>
              Add consistent prospecting capacity without pulling your technical sales team away
              from active opportunities.
            </p>
            <a className="it-sdr-inline-link" href="/expertise/sales-development">
              Explore Sales &amp; Growth roles <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <ul className="it-sdr-benefits">
            {outsourcingBenefits.map((benefit) => (
              <li key={benefit}>
                <Check aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="it-sdr-close" aria-labelledby="it-sdr-close-heading">
          <p className="it-sdr-eyebrow">
            <span /> A BETTER WAY TO BUILD TECH PIPELINE
          </p>
          <h2 id="it-sdr-close-heading">
            Right accounts. Qualified meetings.
            <br />
            <em>Focused tech sales.</em>
          </h2>
          <a className="it-sdr-button" href="/contact#inquiry">
            Get IT SDR support <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
    </div>
  );
}
