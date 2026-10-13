import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { IndustriesDirectoryPage } from "@/components/industries/industries-directory-page";

describe("IndustriesPage", () => {
  it("shows the industry directory with a dedicated destination for every industry", () => {
    render(<IndustriesDirectoryPage />);

    expect(
      screen.getByRole("heading", { name: /Expertise that fits the way you work/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("08 options")).toBeInTheDocument();

    const industries: readonly [string, string][] = [
      ["Healthcare", "/industries/healthcare"],
      ["Logistics & Fleet", "/industries/logistics-fleet"],
      ["Home Services", "/industries/home-services"],
      ["Property Management", "/industries/property-management"],
      ["E-commerce", "/industries/e-commerce"],
      ["Technology & SaaS", "/industries/technology-saas"],
      ["Professional Services", "/industries/professional-services"],
      ["Hospitality", "/industries/hospitality"],
    ];

    for (const [name, href] of industries) {
      expect(screen.getByRole("link", { name: new RegExp(name) })).toHaveAttribute("href", href);
    }

    expect(screen.queryByRole("link", { name: /All Industries/ })).not.toBeInTheDocument();
    expect(screen.queryByText(/^0[1-9]$/)).not.toBeInTheDocument();
    expect(
      screen.getByText("Dispatch, shipment updates & driver communication"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Patient coordination, scheduling & admin support"),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Find your fit/ })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });
});
