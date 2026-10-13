import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ArrowRightLeft,
  Boxes,
  CheckCheck,
  Database,
  FileInput,
  FilePenLine,
  FileSpreadsheet,
  Layers3,
  ReceiptText,
  Sparkles,
  TableProperties,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./data-entry-assistant.css";

const dataSteps = [
  {
    id: "input",
    number: "01",
    label: "Input arrives",
    detail: "Forms, sheets, documents, and raw records come together in one clear starting point.",
    visual: "input",
    icon: FileInput,
  },
  {
    id: "processing",
    number: "02",
    label: "AI processing",
    detail:
      "Tools extract, clean, and check the information while your assistant oversees the flow.",
    image: "/Raw%20Input%20to%20Processing.png.jpg",
    alt: "AI-powered workflow extracting and processing data from documents and spreadsheets",
    icon: Sparkles,
  },
  {
    id: "validation",
    number: "03",
    label: "Validation & correction",
    detail: "Missing fields and mismatches are flagged, checked, and corrected before they spread.",
    image: "/Validation%20Step.png.jpg",
    alt: "Data validation process checking records for quality, accuracy, and consistency",
    icon: CheckCheck,
  },
  {
    id: "structuring",
    number: "04",
    label: "Structuring",
    detail:
      "Verified information is organized into consistent fields, formats, and useful categories.",
    image: "/Structuring%20&%20Organization.png.jpg",
    alt: "Data being structured and organized into a clear, consistent format",
    icon: Layers3,
  },
  {
    id: "ready",
    number: "05",
    label: "Ready for use",
    detail:
      "Clean records are ready for reports, business intelligence, and the systems your team uses.",
    visual: "ready",
    icon: Database,
  },
];

const dataServices = [
  {
    number: "01",
    title: "Record Updates & Entry",
    tasks: ["Update CRM records", "Enter new records", "Fill missing fields"],
    icon: FilePenLine,
    featured: true,
  },
  {
    number: "02",
    title: "Data Cleanup",
    tasks: ["Remove duplicate records", "Fix data errors", "Standardize formats"],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Spreadsheet Management",
    tasks: ["Update spreadsheets", "Reconcile sheet data", "Maintain data tables"],
    icon: TableProperties,
  },
  {
    number: "04",
    title: "System Transfers",
    tasks: [
      "Transfer data between systems",
      "Import bulk data files",
      "Sync records across systems",
    ],
    icon: ArrowRightLeft,
  },
  {
    number: "05",
    title: "Order & Invoice Entry",
    tasks: ["Enter order details", "Log invoice data", "Update payment records"],
    icon: ReceiptText,
  },
];

export function DataEntryAssistantPage() {
  const [activeStep, setActiveStep] = useState(dataSteps[0].id);

  useEffect(() => {
    const steps = document.querySelectorAll<HTMLElement>("[data-data-cycle-step]");

    if (!("IntersectionObserver" in window)) {
      steps.forEach((step) => (step.dataset.stepVisible = "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = entry.target as HTMLElement;
            setActiveStep(step.dataset.dataCycleStep ?? dataSteps[0].id);
            step.dataset.stepVisible = "true";
          }
        });
      },
      { rootMargin: "-18% 0px -42% 0px", threshold: 0 },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="dea-page">
        <section className="dea-hero" aria-labelledby="dea-heading">
          <p className="dea-eyebrow">
            <span /> DATA ENTRY ASSISTANT
          </p>
          <h1 id="dea-heading">
            From raw input to
            <br />
            <em>reliable records.</em>
          </h1>
          <p className="dea-hero-copy">
            A clear cycle powered by intelligent tools—so data stays accurate without the manual
            load.
          </p>
          <figure className="dea-overview">
            <img
              src="/Complete%20Cycle%20Overview.png.jpg"
              alt="The complete data cycle: input, process, validate, structure, and ready for use"
              fetchPriority="high"
            />
            <figcaption>
              <span>THE COMPLETE DATA CYCLE</span>
              <span>
                INPUT <i /> PROCESS <i /> VALIDATE <i /> STRUCTURE <i /> READY
              </span>
            </figcaption>
          </figure>
          <a className="dea-scroll-link" href="#data-cycle">
            Follow the cycle <ArrowDownRight aria-hidden="true" />
          </a>
        </section>

        <section className="dea-cycle" id="data-cycle" aria-labelledby="dea-cycle-heading">
          <div className="dea-cycle-heading">
            <p className="dea-eyebrow">
              <span /> ONE CLEAN, CONTINUOUS FLOW
            </p>
            <h2 id="dea-cycle-heading">
              Every detail gets
              <br />
              <em>where it needs to go.</em>
            </h2>
          </div>

          <div className="dea-flow" data-active-step={activeStep}>
            <svg
              className="dea-flow-route"
              viewBox="0 0 100 1650"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="dea-route-desktop"
                d="M50 0 C50 80 58 95 58 165 C58 330 42 330 42 495 C42 660 58 660 58 825 C58 990 42 990 42 1155 C42 1320 58 1320 58 1485 C58 1565 50 1575 50 1650"
              />
              <path className="dea-route-mobile" d="M50 0 L50 1650" />
            </svg>

            {dataSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <article
                  className={`dea-step${index % 2 === 1 ? " is-reversed" : ""}${isActive ? " is-active" : ""}`}
                  data-data-cycle-step={step.id}
                  key={step.id}
                >
                  <div className="dea-step-copy">
                    <span className="dea-step-number">STEP {step.number}</span>
                    <h3>{step.label}</h3>
                    <p>{step.detail}</p>
                  </div>
                  <span className="dea-step-marker" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className={`dea-step-visual dea-visual-${step.visual ?? "image"}`}>
                    {step.image ? (
                      <img src={step.image} alt={step.alt} loading="lazy" decoding="async" />
                    ) : step.visual === "input" ? (
                      <div className="dea-input-visual" aria-hidden="true">
                        <span className="dea-input-sheet">
                          <FileSpreadsheet />
                          <i />
                          <i />
                          <i />
                        </span>
                        <span className="dea-input-file">
                          <FileInput />
                          <i />
                          <i />
                        </span>
                        <span className="dea-visual-caption">RAW DATA, ALL SOURCES</span>
                      </div>
                    ) : (
                      <div className="dea-ready-visual" aria-hidden="true">
                        <div className="dea-ready-record">
                          <CheckCheck />
                          <span>RECORDS VERIFIED</span>
                        </div>
                        <div className="dea-ready-tags">
                          <span>REPORTS</span>
                          <span>BI</span>
                          <span>SYSTEMS</span>
                        </div>
                        <span className="dea-visual-caption">CLEAN DATA, READY TO MOVE</span>
                      </div>
                    )}
                    <span className="dea-visual-index">{step.number}</span>
                  </div>
                </article>
              );
            })}
            <div className="dea-cycle-return" aria-label="The cycle returns to new input">
              <span className="dea-return-marker">
                <ArrowRight aria-hidden="true" />
              </span>
              <span>AND THE NEXT INPUT IS READY TO BEGIN</span>
            </div>
          </div>
        </section>

        <section className="dea-services" aria-labelledby="dea-services-heading">
          <div className="dea-services-heading">
            <p className="dea-eyebrow">
              <span /> PRACTICAL SUPPORT, BUILT AROUND YOUR WORKFLOW
            </p>
            <h2 id="dea-services-heading">Your Data Entry Assistant Handles</h2>
          </div>
          <div className="dea-services-grid">
            {dataServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className={`dea-service${service.featured ? " dea-service-featured" : ""}`}
                  key={service.number}
                >
                  <div className="dea-service-content">
                    <div className="dea-service-topline">
                      <span>{service.number}</span>
                      <Icon aria-hidden="true" />
                    </div>
                    <h3>{service.title}</h3>
                    <ul>
                      {service.tasks.map((task) => (
                        <li key={task}>
                          <CheckCheck aria-hidden="true" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.featured && (
                    <img
                      className="dea-service-photo"
                      src="/images/img3.jpg"
                      alt="A team member working with digital records in a bright office"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="dea-outcome" aria-labelledby="dea-outcome-heading">
          <div className="dea-outcome-inner">
            <span className="dea-outcome-icon" aria-hidden="true">
              <Boxes />
            </span>
            <p className="dea-eyebrow">
              <span /> ACCURACY THAT KEEPS MOVING
            </p>
            <h2 id="dea-outcome-heading">
              The cycle runs.
              <br />
              <em>Your data stays clean.</em>
            </h2>
            <p className="dea-outcome-copy">
              From the first file to the final record, every handoff is checked and organized.
            </p>
            <a className="dea-cta" href="/contact#inquiry">
              Get data support <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
