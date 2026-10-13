import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCheck,
  ChevronDown,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

import "./corporate-travel-coordinator.css";

const businessStops = [
  {
    id: "request-booking",
    number: "01",
    label: "Trip request & booking",
    detail:
      "Travel request processed. Flights, hotels, and transport booked against preferred suppliers.",
    icon: BriefcaseBusiness,
  },
  {
    id: "policy",
    number: "02",
    label: "Policy compliance",
    detail:
      "Booking checked against company policy. Out-of-policy items flagged before confirmation.",
    icon: ShieldCheck,
  },
  {
    id: "changes-updates",
    number: "03",
    label: "Changes & updates",
    detail:
      "Schedule changes or cancellations handled. Updated itinerary sent to traveller and stakeholders.",
    icon: RefreshCw,
  },
  {
    id: "expense-preparation",
    number: "04",
    label: "Expense preparation",
    detail: "Receipts collected, expense report prepared, and submitted in the required format.",
    icon: ReceiptText,
  },
  {
    id: "close-records",
    number: "05",
    label: "Close & records",
    detail: "Trip closed. Records updated. No pending follow-ups left for the team.",
    icon: CheckCheck,
  },
];

export function CorporateTravelCoordinatorPage() {
  const [expandedStops, setExpandedStops] = useState(() => businessStops.map((stop) => stop.id));
  const [outcomeExpanded, setOutcomeExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="ctc-page">
        <header className="ctc-intro-band">
          <div className="ctc-intro">
            <p className="ctc-eyebrow">
              <span /> CORPORATE TRAVEL COORDINATOR
            </p>
            <h1>
              Business travel stays
              <br />
              <em>within policy. Every time.</em>
            </h1>
            <p className="ctc-intro-copy">
              Bookings, compliance checks, itinerary updates, and expense prep—handled so travel
              doesn’t create extra work or policy risk.
            </p>
          </div>
        </header>

        <section className="ctc-process" aria-label="Business travel from request to close">
          <div className="ctc-itinerary">
            <svg
              className="ctc-route"
              viewBox="0 0 100 900"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="ctc-route-desktop"
                d="M50 0 C50 40 62 45 62 90 C62 180 38 180 38 270 C38 360 62 360 62 450 C62 540 38 540 38 630 C38 720 62 720 62 810 C62 855 50 860 50 900"
              />
              <path
                className="ctc-route-mobile"
                d="M7 0 C7 40 13 45 13 90 C13 180 7 180 7 270 C7 360 13 360 13 450 C13 540 7 540 7 630 C7 720 13 720 13 810 C13 855 7 860 7 900"
              />
            </svg>
            <ol className="ctc-stop-list">
              {businessStops.map((stop) => {
                const Icon = stop.icon;
                const isExpanded = expandedStops.includes(stop.id);
                const detailId = `ctc-detail-${stop.id}`;

                return (
                  <li
                    className={`ctc-stop${isExpanded ? " is-expanded" : ""}`}
                    data-stop={stop.number}
                    key={stop.id}
                  >
                    <span className="ctc-stop-marker" aria-hidden="true">
                      <Icon />
                    </span>
                    <button
                      type="button"
                      className="ctc-stop-trigger"
                      aria-expanded={isExpanded}
                      aria-controls={detailId}
                      onClick={() =>
                        setExpandedStops((current) =>
                          isExpanded
                            ? current.filter((id) => id !== stop.id)
                            : [...current, stop.id],
                        )
                      }
                    >
                      <span className="ctc-stop-heading">
                        <span className="ctc-stop-text">
                          <span className="ctc-stop-number">STEP {stop.number}</span>
                          <span className="ctc-stop-label">{stop.label}</span>
                        </span>
                        <ChevronDown aria-hidden="true" className="ctc-stop-chevron" />
                      </span>
                    </button>
                    {isExpanded && (
                      <p className="ctc-stop-detail" id={detailId}>
                        {stop.detail}
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="ctc-outcome-band" aria-labelledby="ctc-outcome-heading">
          <div className="ctc-outcome-inner">
            <span className="ctc-outcome-marker" aria-hidden="true" />
            <svg
              className="ctc-outcome-route"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path className="ctc-outcome-route-desktop" d="M50 0 C50 25 50 32 50 46" />
              <path className="ctc-outcome-route-mobile" d="M7 0 C7 25 7 32 7 46" />
            </svg>
            <div className="ctc-outcome-copy">
              <p>REQUEST TO CLOSE · BUSINESS TRAVEL, HANDLED</p>
              <h2 id="ctc-outcome-heading">
                <button
                  className="ctc-outcome-trigger"
                  type="button"
                  aria-expanded={outcomeExpanded}
                  aria-controls="ctc-outcome-detail"
                  onClick={() => setOutcomeExpanded((expanded) => !expanded)}
                >
                  <span>
                    Travel stays organized, compliant, and closed—without landing back on your team.
                  </span>
                  <ChevronDown aria-hidden="true" />
                </button>
              </h2>
              {outcomeExpanded && (
                <p className="ctc-outcome-detail" id="ctc-outcome-detail">
                  From the approved request through policy checks and expense records, every step
                  has a clear owner and a clean close.
                </p>
              )}
              <a className="ctc-cta" href="/contact#inquiry">
                Get corporate travel support <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
