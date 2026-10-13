import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { EventCoordinatorPage } from "./event-coordinator";

describe("EventCoordinatorPage", () => {
  it("shows the full five-stage event journey", () => {
    render(<EventCoordinatorPage />);

    expect(
      screen.getByRole("heading", {
        name: /Events Stay Seamless\. From Planning to Execution\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(9);
    expect(screen.getByRole("heading", { name: "Communication & Alignment" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Budget & Contracts" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Venue & Vendor Coordination" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Execution Support" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Reporting & Close" })).toBeInTheDocument();
  });

  it("includes event management principles and the support call to action", () => {
    render(<EventCoordinatorPage />);

    expect(screen.getByText("Proactive vendor follow-ups")).toBeInTheDocument();
    expect(screen.getByText("Clear ownership on every task")).toBeInTheDocument();
    expect(screen.getByText("Real-time updates during execution")).toBeInTheDocument();
    expect(
      screen.getByText("Clean documentation and handover after the event"),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get Event Coordinator Support/ })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });
});
