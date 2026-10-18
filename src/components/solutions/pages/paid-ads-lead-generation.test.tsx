import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PaidAdsLeadGenerationPage } from "./paid-ads-lead-generation";

describe("PaidAdsLeadGenerationPage", () => {
  it("renders the full paid campaign journey and distinct illustrative business scenarios", () => {
    const { container } = render(<PaidAdsLeadGenerationPage />);
    const headingText = Array.from(container.querySelectorAll("h1, h2"))
      .map((heading) => heading.textContent?.replace(/\s+/g, " ").trim())
      .join(" ");

    for (const heading of [
      "More Than Clicks.",
      "What Happens Next?",
      "From the First Impression",
      "Every Campaign Has Moving Parts.",
      "Different Businesses.",
      "Better Decisions Start With",
      "A Lead Is Only",
      "Start With the Business Goal,",
      "Before You Invest,",
      "Let’s Build a Campaign",
    ]) {
      expect(headingText).toContain(heading);
    }

    expect(screen.getAllByText("ILLUSTRATIVE SCENARIO")).toHaveLength(3);
    const storyImages = Array.from(document.querySelectorAll(".pa-story-image img"));
    expect(storyImages).toHaveLength(3);
    expect(new Set(storyImages.map((image) => image.getAttribute("src"))).size).toBe(3);
    expect(screen.getByText("ILLUSTRATIVE EXAMPLE — NOT CLIENT RESULTS")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Plan My Campaign/ })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });

  it("allows visitors to explore journey, handoff and FAQ details accessibly", () => {
    render(<PaidAdsLeadGenerationPage />);

    fireEvent.click(screen.getByRole("tab", { name: /Follow-up/ }));
    expect(screen.getByRole("tabpanel", { name: /Follow-up/ })).toHaveTextContent(
      "An assigned team member reviews the request",
    );

    fireEvent.click(screen.getByRole("tab", { name: /Notify the team/ }));
    expect(screen.getByRole("tabpanel", { name: /Notify the team/ })).toHaveTextContent(
      "The owner receives the details needed to review the request.",
    );

    const firstFaq = screen.getByRole("button", {
      name: "Which platforms should my business use?",
    });
    const secondFaq = screen.getByRole("button", { name: "How much budget do I need?" });
    fireEvent.click(firstFaq);
    expect(firstFaq).toHaveAttribute("aria-expanded", "true");
    expect(
      within(document.querySelector(".pa-faq-list")!).getByText(/It depends on your audience/),
    ).toBeVisible();
    fireEvent.click(secondFaq);
    expect(firstFaq).toHaveAttribute("aria-expanded", "false");
    expect(secondFaq).toHaveAttribute("aria-expanded", "true");
  });
});
