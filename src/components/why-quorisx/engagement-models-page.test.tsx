import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

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

  it("scrolls to the updated details when a model card is selected", () => {
    const originalDescriptor = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "scrollIntoView",
    );
    const scrollIntoView = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });

    try {
      render(<EngagementModelsPage />);
      fireEvent.click(screen.getByRole("button", { name: /Managed Function/ }));

      expect(document.querySelector("#selected-model-details")).toBeInTheDocument();
      expect(scrollIntoView).toHaveBeenCalledWith(expect.objectContaining({ block: "start" }));
    } finally {
      if (originalDescriptor) {
        Object.defineProperty(HTMLElement.prototype, "scrollIntoView", originalDescriptor);
      } else {
        Reflect.deleteProperty(HTMLElement.prototype, "scrollIntoView");
      }
    }
  });
});
