import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ItSdrPage } from "./it-sdr";

describe("ItSdrPage", () => {
  it("explains the IT SDR role and the four steps to a qualified meeting", () => {
    render(<ItSdrPage />);

    expect(
      screen.getByRole("heading", { name: /Qualified meetings for your tech sales team/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Target the right tech accounts" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Reach the people who decide" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Qualify for technical fit" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Book meetings with context" })).toBeVisible();
  });

  it("shows outsourcing benefits and links back to Sales & Growth expertise", () => {
    render(<ItSdrPage />);

    expect(screen.getByText(/focuses on closing, not prospecting/i)).toBeInTheDocument();
    expect(screen.getByText(/consistent pipeline of tech-relevant leads/i)).toBeInTheDocument();
    expect(screen.getByText(/recruit and train in-house SDRs/i)).toBeInTheDocument();
    expect(screen.getByText(/Capacity that can scale around your targets/i)).toBeInTheDocument();
    expect(screen.getByText(/More relevant, better-prepared conversations/i)).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", {
        name: /Sales & Growth expertise|Explore Sales & Growth roles/i,
      }),
    ).toHaveLength(2);
    expect(screen.getByRole("link", { name: "Talk to our team" })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
    expect(screen.getByRole("link", { name: "Get IT SDR support" })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });
});
