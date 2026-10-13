import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IndustryDetailPage } from "./industry-detail-page";
import { industryPages } from "./industry-data";

describe("IndustryDetailPage", () => {
  it("shows industry-specific operations and related expertise", () => {
    const healthcare = industryPages.find((industry) => industry.slug === "healthcare");

    if (!healthcare) {
      throw new Error("Healthcare industry configuration is missing");
    }

    render(<IndustryDetailPage industry={healthcare} />);

    expect(
      screen.getByRole("heading", { name: "More time for care. Less time lost to admin." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Coordinate")).toBeInTheDocument();
    expect(screen.getByText("Patient-facing service")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Patient-facing service/ })).toHaveAttribute(
      "href",
      "/expertise/customer-service",
    );
    expect(screen.queryByText("Coming Soon")).not.toBeInTheDocument();
  });

  it("provides complete, distinct pages for all eight industries", () => {
    expect(industryPages).toHaveLength(8);
    expect(new Set(industryPages.map((industry) => industry.slug)).size).toBe(8);

    for (const industry of industryPages) {
      expect(industry.headline).not.toBe(industry.intro);
      expect(industry.workflow).toHaveLength(3);
      expect(industry.expertise).toHaveLength(4);
      expect(industry.expertise.every((area) => area.href.startsWith("/expertise/"))).toBe(true);
    }
  });
});
