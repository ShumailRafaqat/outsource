import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SalesDevelopmentRepresentativePage } from "./sales-development-representative";

describe("SalesDevelopmentRepresentativePage", () => {
  it("shows the SDR hero and four pipeline work sections", () => {
    render(<SalesDevelopmentRepresentativePage />);

    expect(
      screen.getByRole("heading", { name: /More Qualified Conversations\./i }),
    ).toBeInTheDocument();
    expect(document.querySelectorAll("[data-sdr-work]")).toHaveLength(4);
    expect(screen.getByRole("heading", { name: "Find the Right People" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Start the Conversations" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Qualify Before Handoff" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Keep the Pipeline Clean" })).toBeInTheDocument();
  });

  it("uses the supplied pipeline visuals and has SDR support calls to action", () => {
    render(<SalesDevelopmentRepresentativePage />);

    expect(
      screen.getByRole("img", { name: /prospect research and lead identification/i }),
    ).toHaveAttribute("src", "/Prospecting%20&%20Research.png.jpg");
    expect(
      screen.getByRole("img", { name: /outbound email and follow-up sequence/i }),
    ).toHaveAttribute("src", "/Outbound%20Outreach.png%20.jpg");
    expect(screen.getByRole("img", { name: /lead qualification process/i })).toHaveAttribute(
      "src",
      "/Lead%20Qualification.png.jpg",
    );
    expect(
      screen.getByRole("img", { name: /warm qualified lead prepared for handoff/i }),
    ).toHaveAttribute("src", "/Meeting%20&%20Handoff.png.jpg");
    expect(
      screen
        .getAllByRole("link", { name: /Add SDR Support/ })
        .every((link) => link.getAttribute("href") === "/contact#inquiry"),
    ).toBe(true);
  });

  it("shows the team outcomes", () => {
    render(<SalesDevelopmentRepresentativePage />);

    expect(screen.getByText("Time back from prospecting")).toBeInTheDocument();
    expect(screen.getByText("Consistent pipeline flow")).toBeInTheDocument();
    expect(screen.getByText("Better quality conversations")).toBeInTheDocument();
  });
});
