import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { waysToWorkPages } from "@/lib/ways-to-work";

import { WaysToWorkPage } from "./ways-to-work-page";

describe("WaysToWorkPage", () => {
  it.each(waysToWorkPages)("renders a complete work-pattern page for $title", (page) => {
    render(<WaysToWorkPage slug={page.slug} />);

    expect(screen.getByRole("heading", { name: page.headline, level: 1 })).toBeInTheDocument();
    expect(screen.getByText(page.bestFor)).toBeInTheDocument();
    expect(screen.getByText(page.outcome)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: page.example.title, level: 3 })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: page.content.process.title, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: page.content.ownership.title })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: page.content.final.title, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(page.content.mapTitle)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: page.content.final.cta })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
    expect(screen.getByText(page.content.outcomeSection.description)).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(
      page.steps.length + page.clientOwns.length + page.quorisxOwns.length,
    );
    expect(screen.getByRole("link", { name: new RegExp(page.content.primaryCta) })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
    expect(screen.getByRole("link", { name: /Back to all three/i })).toHaveAttribute(
      "href",
      "/#ways",
    );
  });

  it("links between all three distinct ways to work", () => {
    render(<WaysToWorkPage slug="team-extension" />);

    const compareSection = screen
      .getByText(waysToWorkPages[0].content.comparison.eyebrow)
      .closest("section");
    const compare = within(compareSection as HTMLElement);

    for (const page of waysToWorkPages) {
      expect(compare.getByRole("link", { name: new RegExp(page.title) })).toHaveAttribute(
        "href",
        `/ways-to-work/${page.slug}`,
      );
    }
  });

  it("gives each work model its own section narrative", () => {
    for (const sectionCopy of [
      "outcomeSection",
      "ownership",
      "exampleSection",
      "process",
      "comparison",
      "final",
    ] as const) {
      const titles = waysToWorkPages.map((page) => page.content[sectionCopy].title);
      expect(new Set(titles).size).toBe(waysToWorkPages.length);
    }

    expect(new Set(waysToWorkPages.map((page) => page.content.primaryCta)).size).toBe(
      waysToWorkPages.length,
    );
    expect(new Set(waysToWorkPages.map((page) => page.content.mapTitle)).size).toBe(
      waysToWorkPages.length,
    );
  });

  it.each(waysToWorkPages)("stagger-reveals the interactive sections for $slug", (page) => {
    render(<WaysToWorkPage slug={page.slug} />);

    expect(document.querySelectorAll("[data-work-reveal]").length).toBeGreaterThan(8);
    expect(document.querySelector(".w2w-hero-kicker")).toHaveAttribute("data-work-reveal");
    expect(document.querySelectorAll(".w2w-ownership-card[data-work-reveal]")).toHaveLength(2);
    expect(document.querySelector(".w2w-process-list")).toHaveAttribute("data-work-reveal");
    expect(document.querySelectorAll(".w2w-compare-link[data-work-reveal]")).toHaveLength(3);
  });
});
