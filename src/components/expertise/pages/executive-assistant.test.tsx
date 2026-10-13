import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExecutiveAssistantPage } from "./executive-assistant";

describe("ExecutiveAssistantPage", () => {
  it("renders the full-width sequential briefing and expands priority lines", () => {
    render(<ExecutiveAssistantPage />);

    expect(screen.getByRole("heading", { name: /Senior support/ })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Briefing stages" })).toBeInTheDocument();

    const priority = screen.getByText("Approve the revised launch timeline");
    fireEvent.click(priority);

    expect(screen.getByText(/Legal review is the only open dependency/)).toBeInTheDocument();
  });

  it("highlights a selected calendar slot and shows its coordinated state", () => {
    render(<ExecutiveAssistantPage />);

    const slot = screen.getByRole("button", { name: /11:00 Decision window/ });
    fireEvent.click(slot);

    expect(slot).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByText(/Decision window · 11:00, coordinated and confirmed/),
    ).toBeInTheDocument();
  });

  it("filters the executive message count to the decisions that need attention", () => {
    render(<ExecutiveAssistantPage />);

    fireEvent.click(screen.getByRole("button", { name: /SHOW ME THE BRIEF/ }));

    expect(screen.getByText("need your attention")).toBeInTheDocument();
    expect(
      screen.getByText(/45 handled or drafted. Three decisions brought forward/),
    ).toBeInTheDocument();
  });
});
