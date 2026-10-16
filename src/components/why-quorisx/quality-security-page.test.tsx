import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { QualitySecurityPage } from "./quality-security-page";

describe("QualitySecurityPage", () => {
  it("explains the approach and interactively expands safeguards", () => {
    render(<QualitySecurityPage />);

    expect(screen.getByRole("heading", { name: "Quality & Security" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Oversight built into every engagement." }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Agree on practical expectations for the work, then use reviews and feedback loops to keep delivery aligned.",
      ),
    ).toBeInTheDocument();

    const accessButton = screen.getByRole("button", { name: /Confidentiality and access/ });
    fireEvent.click(accessButton);

    expect(accessButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(
        "Agree confidentiality and data-handling expectations, and provide access appropriate to the work and role.",
      ),
    ).toBeInTheDocument();
  });

  it("clarifies that compliance and data residency depend on requirements", () => {
    render(<QualitySecurityPage />);

    expect(
      screen.getByText(
        /U\.S\. contracting alone does not determine data residency or guarantee regulatory compliance/,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Discuss your requirements/ })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });
});
