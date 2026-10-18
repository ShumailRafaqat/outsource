import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  GraduationCap,
  Handshake,
  Rocket,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";

import { SiteHeader } from "@/components/site-header";
import { useExpertiseScrollMotion } from "@/components/expertise/use-expertise-scroll-motion";

import "./recruitment-methodology-page.css";

const recruitmentPhotos = [
  { src: "/us.png", label: "OUR CITY" },
  { src: "/images/image2.jpg", label: "OUR ENVIRONMENT" },
];

const recruitmentSteps = [
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

export function RecruitmentMethodologyPage() {
  const [activePhoto, setActivePhoto] = useState(0);
  const motionRef = useExpertiseScrollMotion<HTMLElement>();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActivePhoto((current) => (current + 1) % recruitmentPhotos.length);
      }
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const activePhotoData = recruitmentPhotos[activePhoto] ?? recruitmentPhotos[0];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="recruitment-methodology" data-disable-hero-reveal ref={motionRef}>
        <section className="recruitment-methodology-hero" aria-labelledby="recruitment-heading">
          <img
            key={activePhotoData.src}
            src={activePhotoData.src}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="recruitment-methodology-background"
          />
          <div className="recruitment-methodology-overlay" aria-hidden="true" />
          <div className="recruitment-methodology-content">
            <h1 id="recruitment-heading">Our Recruitment Methodology</h1>
            <a className="recruitment-methodology-hero-cta" href="#process">
              Explore Process
              <span className="recruitment-methodology-hero-cta-icon">
                <ArrowRight aria-hidden="true" />
              </span>
            </a>
          </div>
          <div
            className="recruitment-methodology-controls"
            role="group"
            aria-label="Choose a hero background"
          >
            <span className="recruitment-methodology-slide-label">{activePhotoData.label}</span>
            <span className="recruitment-methodology-slide-count" aria-hidden="true">
              {String(activePhoto + 1).padStart(2, "0")} /{" "}
              {String(recruitmentPhotos.length).padStart(2, "0")}
            </span>
            <div className="recruitment-methodology-dots">
              {recruitmentPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  aria-label={`Show ${photo.label.toLowerCase()} background`}
                  aria-pressed={activePhoto === index}
                  onClick={() => setActivePhoto(index)}
                  className="recruitment-methodology-dot"
                >
                  <span className="recruitment-methodology-dot-track" aria-hidden="true">
                    {activePhoto === index && (
                      <span
                        key={activePhoto}
                        className="recruitment-methodology-dot-progress"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          className="recruitment-methodology-overview"
          aria-labelledby="recruitment-overview-heading"
        >
          <div className="recruitment-methodology-overview-panel">
            <div
              className="recruitment-methodology-collage"
              role="group"
              aria-label="Quorisx teams and workplace"
            >
              <span className="recruitment-methodology-collage-frame" aria-hidden="true" />
              <img
                className="recruitment-methodology-collage-main"
                src="/images/img.jpg"
                alt="A customer support professional at work in a modern office"
                loading="lazy"
              />
              <img
                className="recruitment-methodology-collage-team"
                src="/images/imag%204.jpg"
                alt="Colleagues collaborating in their office"
                loading="lazy"
              />
              <img
                className="recruitment-methodology-collage-city"
                src="/us.png"
                alt="City skyline representing Quorisx's global presence"
                loading="lazy"
              />
            </div>
            <div className="recruitment-methodology-overview-copy">
              <h2 id="recruitment-overview-heading">About Quorisx Methodology</h2>
              <p className="recruitment-methodology-overview-description">
                We follow a structured, skills-based recruitment process to connect businesses with
                qualified professionals who align with their operational needs, company culture, and
                long-term goals.
              </p>
              <a className="recruitment-methodology-explore" href="/#outsourcing">
                Our Expertise
                <span className="recruitment-methodology-explore-icon">
                  <ArrowRight aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="recruitment-methodology-process"
          id="process"
          aria-labelledby="process-heading"
        >
          <div className="recruitment-methodology-process-inner">
            <header className="recruitment-methodology-process-header">
              <p className="recruitment-methodology-overview-eyebrow">
                <span /> HOW WE HIRE
              </p>
              <h2 id="process-heading">Our Process</h2>
              <p>
                A thoughtful, skills-based journey from understanding your needs to ongoing team
                support.
              </p>
            </header>
            <div className="recruitment-methodology-process-map">
              <svg
                className="recruitment-methodology-process-route"
                viewBox="0 0 1000 552"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  className="recruitment-methodology-process-route-track"
                  d="M125 40H875V362H375"
                />
                <path
                  className="recruitment-methodology-process-route-flow"
                  d="M125 40H875V362H375"
                />
              </svg>
              <ol
                className="recruitment-methodology-process-grid"
                aria-label="Recruitment process steps"
              >
                {recruitmentSteps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <li className="recruitment-methodology-process-item" key={step.title}>
                      <div className="recruitment-methodology-process-marker">
                        <span className="recruitment-methodology-process-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="recruitment-methodology-process-icon" aria-hidden="true">
                          <StepIcon />
                        </span>
                      </div>
                      <div className="recruitment-methodology-process-copy">
                        <span className="recruitment-methodology-process-label">
                          PHASE {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
