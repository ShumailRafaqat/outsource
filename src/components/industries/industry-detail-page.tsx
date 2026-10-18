import type { CSSProperties } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { industryPages, type IndustryPageConfig } from "./industry-data";
import { useIndustryReveal } from "./use-industry-reveal";

import "./industry-detail-page.css";

type IndustryDetailPageProps = {
  industry: IndustryPageConfig;
};

export function IndustryDetailPage({ industry }: IndustryDetailPageProps) {
  const revealRef = useIndustryReveal<HTMLElement>();
  const IndustryIcon = industry.icon;
  const industryIndex = industryPages.findIndex((item) => item.slug === industry.slug) + 1;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="industry-detail" ref={revealRef}>
        <section className="industry-detail-hero" aria-labelledby="industry-detail-heading">
          <div className="industry-detail-hero-copy">
            <a className="industry-detail-back" href="/industries">
              <ArrowLeft aria-hidden="true" /> All industries
            </a>
            <p className="industry-detail-eyebrow" data-industry-reveal>
              <span /> INDUSTRY EXPERTISE
            </p>
            <h1 id="industry-detail-heading" data-industry-reveal>
              {industry.headline}
            </h1>
            <p className="industry-detail-intro" data-industry-reveal>
              {industry.intro}
            </p>
            <a className="industry-detail-button" data-industry-reveal href="/contact#inquiry">
              Talk through your needs <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <aside
            className="industry-detail-aside"
            data-industry-reveal="scale"
            aria-label={`${industry.name} support approach`}
          >
            <span className="industry-detail-aside-index">
              QX / INDUSTRY {String(industryIndex).padStart(2, "0")}
            </span>
            <span className="industry-detail-aside-icon">
              <IndustryIcon aria-hidden="true" />
            </span>
            <p>Support that understands the work behind the work.</p>
            <span className="industry-detail-aside-name">{industry.name}</span>
          </aside>
        </section>

        <section className="industry-detail-flow" aria-labelledby="industry-flow-heading">
          <div className="industry-detail-section-heading">
            <p className="industry-detail-eyebrow" data-industry-reveal>
              <span /> HOW SUPPORT FITS
            </p>
            <h2 id="industry-flow-heading" data-industry-reveal>
              Built around your
              <br />
              <em>day-to-day reality.</em>
            </h2>
          </div>
          <div className="industry-detail-steps">
            {industry.workflow.map((step, index) => (
              <article
                className="industry-detail-step"
                data-industry-reveal
                key={step.title}
                style={{ "--industry-reveal-delay": `${index * 100}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
          <p className="industry-detail-outcome" data-industry-reveal>
            <Check aria-hidden="true" />
            {industry.outcome}
          </p>
        </section>

        <section className="industry-detail-expertise" aria-labelledby="industry-expertise-heading">
          <header className="industry-detail-expertise-heading">
            <div>
              <p className="industry-detail-eyebrow" data-industry-reveal>
                <span /> QUORISX EXPERTISE
              </p>
              <h2 id="industry-expertise-heading" data-industry-reveal>
                The right skills.
                <br />
                <em>Connected to your industry.</em>
              </h2>
            </div>
            <p data-industry-reveal>
              Explore the teams and specialists that can support the work your business needs
              covered.
            </p>
          </header>
          <div className="industry-detail-expertise-list">
            {industry.expertise.map((area, index) => (
              <a
                className="industry-expertise-link"
                data-industry-reveal
                href={area.href}
                key={area.title}
                style={{ "--industry-reveal-delay": `${(index % 2) * 100}ms` } as CSSProperties}
              >
                <span className="industry-expertise-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="industry-expertise-copy">
                  <strong>{area.title}</strong>
                  <span>{area.detail}</span>
                </span>
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="industry-detail-close">
          <p className="industry-detail-eyebrow" data-industry-reveal>
            <span /> A BETTER FIT STARTS WITH A CONVERSATION
          </p>
          <h2 data-industry-reveal>
            Let’s shape the right support
            <br />
            <em>for your {industry.name.toLowerCase()} team.</em>
          </h2>
          <a className="industry-detail-button" data-industry-reveal href="/contact#inquiry">
            Find your fit <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
    </div>
  );
}
