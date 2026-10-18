import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { marketingCreativeFunction } from "./data/marketing-creative";
import {
  isMarketingPrototypeRole,
  marketingRolePrototypeContent,
} from "./marketing-role-prototype-content";
import { MarketingRolePrototypePage } from "./marketing-role-prototype-page";

describe("MarketingRolePrototypePage", () => {
  it("renders three distinct role stories, work samples, and conversion sections", () => {
    const prototypeRoles = ["SEO Specialist", "Graphic Designer", "Video Editor"] as const;
    const headlines = new Set<string>();
    const scenarios = new Set<string>();
    const visuals = new Set<string>();

    for (const role of prototypeRoles) {
      const content = marketingRolePrototypeContent[role];
      const html = renderToStaticMarkup(<MarketingRolePrototypePage role={role} />);
      const { container, unmount } = render(<MarketingRolePrototypePage role={role} />);
      const pageText = container.textContent ?? "";
      headlines.add(content.headline);
      scenarios.add(content.scenario.business);
      visuals.add(content.visual);

      expect(html).toContain(content.headline);
      expect(pageText).toContain(content.scenario.business);
      expect(pageText).toContain(content.scenario.bottleneck);
      expect(pageText).toContain(content.scenario.assigned);
      expect(pageText).toContain(content.scenario.review);
      expect(html).toContain(content.visualLabel);
      expect(html).toContain("Original illustrative");
      expect(html).toContain("Actual responsibilities");
      expect(html).toContain("How collaboration works");
      expect(html).toContain(`Hire ${role === "SEO Specialist" ? "an" : "a"} ${role}`);
      expect(html).toContain(`href="/contact?role=${encodeURIComponent(role)}#inquiry"`);
      expect(html).toContain(`data-role-visual="${content.visual}"`);
      expect(html).toContain("data-disable-hero-reveal");
      unmount();
    }

    expect(headlines.size).toBe(3);
    expect(scenarios.size).toBe(3);
    expect(visuals.size).toBe(3);
  });

  it("shows role-specific hiring CTAs and the parent category link", () => {
    render(<MarketingRolePrototypePage role="Video Editor" />);

    expect(screen.getByRole("link", { name: /Hire a Video Editor/ })).toHaveAttribute(
      "href",
      "/contact?role=Video%20Editor#inquiry",
    );
    expect(screen.getByRole("link", { name: /Discuss My Hiring Needs/ })).toHaveAttribute(
      "href",
      "/contact?role=Video%20Editor#inquiry",
    );
    expect(screen.getByRole("link", { name: /All Marketing & Creative roles/ })).toHaveAttribute(
      "href",
      marketingCreativeFunction.href,
    );
  });

  it("keeps the other marketing roles on their existing generic pages", () => {
    const catalogTitles = marketingCreativeFunction.roles.map((role) => role.title);

    expect(catalogTitles.filter(isMarketingPrototypeRole)).toEqual([
      "SEO Specialist",
      "Graphic Designer",
      "Video Editor",
    ]);
    expect(isMarketingPrototypeRole("Content Writer")).toBe(false);
    expect(isMarketingPrototypeRole("Digital Marketing Assistant")).toBe(false);
  });
});
