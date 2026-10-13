import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CorporateTravelCoordinatorPage } from "./corporate-travel-coordinator";

describe("CorporateTravelCoordinatorPage", () => {
  it("presents the policy-to-close business travel flow with expandable stops", () => {
    render(<CorporateTravelCoordinatorPage />);

    expect(
      screen.getByRole("heading", { name: /Business travel stays within policy\. Every time\./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Business travel from request to close" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(5);

    const bookingStop = screen.getByRole("button", { name: /Trip request & booking/ });
    expect(bookingStop).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/Travel request processed/)).toBeInTheDocument();

    fireEvent.click(bookingStop);

    expect(bookingStop).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText(/Travel request processed/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Policy compliance/ })).toBeInTheDocument();

    fireEvent.click(bookingStop);
    expect(bookingStop).toHaveAttribute("aria-expanded", "true");
  });

  it("keeps the final outcome interactive and offers one corporate-support action", () => {
    render(<CorporateTravelCoordinatorPage />);

    const expenseStop = screen.getByRole("button", { name: /Expense preparation/ });
    expect(expenseStop).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(expenseStop);
    expect(expenseStop).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByText(/Receipts collected, expense report prepared/),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Travel stays organized, compliant, and closed—without landing back on your team\./,
      }),
    ).toBeInTheDocument();

    const outcomeToggle = screen.getByRole("button", {
      name: /Travel stays organized, compliant, and closed/,
    });
    expect(outcomeToggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/From the approved request through policy checks/)).toBeInTheDocument();

    fireEvent.click(outcomeToggle);
    expect(outcomeToggle).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByText(/From the approved request through policy checks/),
    ).not.toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Get corporate travel support/ })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });
});
