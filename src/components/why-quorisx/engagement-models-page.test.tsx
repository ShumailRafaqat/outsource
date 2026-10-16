import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { EngagementModelsPage } from "./engagement-models-page";

describe("EngagementModelsPage", () => {
  it("shows an interactive model selector and updates the selected model details", () => {
    render(<EngagementModelsPage />);

    expect(
      screen.getByRole("heading", { name: "Engagement models that fit the work." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Dedicated Team", { selector: "h3" })).toBeInTheDocument();
    expect(
      screen.getByText(
        "Dedicated professionals aligned to your tools, priorities, and working hours.",
      ),
    ).toBeInTheDocument();

    const managedFunctionButton = screen.getByRole("button", { name: /Managed Function/ });
    fireEvent.click(managedFunctionButton);

    expect(managedFunctionButton).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByText(
        "A defined service scope, delivery responsibilities, and agreed reporting rhythm.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Repeatable processes and business operations")).toBeInTheDocument();
  });

  it("provides a contact path for the selected engagement model", () => {
    render(<EngagementModelsPage />);

    expect(screen.getByRole("link", { name: /Discuss this model/ })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });
});
