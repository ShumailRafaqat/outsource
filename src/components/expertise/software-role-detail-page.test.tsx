import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { softwareDevelopmentFunction } from "./data/software-development";
import { toRoleSlug } from "./data/to-role-slug";
import { softwareRoleContent } from "./software-role-content";
import { SoftwareRoleDetailPage } from "./software-role-detail-page";
import { getSoftwareRoleVisual } from "./software-role-visuals";

describe("SoftwareRoleDetailPage", () => {
  it("renders the mandatory role-specific sections for all 17 roles", () => {
    const renderedHeadings = new Set<string>();
    const uniqueHeadlines = new Set<string>();
    const uniqueScenarios = new Set<string>();
    const uniqueVisualKinds = new Set<string>();

    for (const role of softwareDevelopmentFunction.roles) {
      const html = renderToStaticMarkup(<SoftwareRoleDetailPage role={role} />).replaceAll(
        "&amp;",
        "&",
      );
      const content = softwareRoleContent[role.title];
      if (!content) throw new Error(`Role-specific content is missing for "${role.title}".`);
      const visual = getSoftwareRoleVisual(role.title);
      if (!visual) throw new Error(`Role-specific visual is missing for "${role.title}".`);
      renderedHeadings.add(role.title);
      uniqueHeadlines.add(content.headline);
      uniqueScenarios.add(content.scenario.before);
      uniqueVisualKinds.add(visual.kind);

      expect(html).toContain(`Hire ${/^(AI|API)/.test(role.title) ? "an" : "a"} ${role.title}`);
      expect(html).toContain("Recognize the work getting stuck?");
      expect(html).toContain("What this professional handles");
      expect(html).toContain("What you can review and receive");
      expect(html).toContain("A realistic example—not a client case study.");
      expect(html).toContain("A practical workflow, agreed together.");
      expect(html).toContain("Tools and technologies");
      expect(html).toContain("Hire One Specialist");
      expect(html).toContain("Build a Dedicated Team");
      expect(html).toContain("Industries and use cases");
      expect(html).toContain("Practical details before you hire.");
      expect(html).toContain("Discuss Your Hiring Needs");
      expect(html).toContain(content.scenario.before);
      expect(html).toContain("data-disable-hero-reveal");
      expect(html).toContain(`data-role-visual="${visual.kind}"`);
      expect(html).toContain(visual.title);
      expect(html).not.toContain("<img");
      expect(html).toContain("software-role-hero__heading");
      expect(html).toContain("software-role-hero__description");
      expect(html).toContain("software-role-hero__actions");
      expect(html.match(/software-role-tool-icon/g)).toHaveLength(content.tools.length);
    }

    expect(renderedHeadings.size).toBe(17);
    expect(uniqueHeadlines.size).toBe(17);
    expect(uniqueScenarios.size).toBe(17);
    expect(uniqueVisualKinds.size).toBe(17);
  });

  it("links role CTAs to the contact form with the selected role", () => {
    const role = softwareDevelopmentFunction.roles.find(
      (item) => item.title === "API Integration Developer",
    );
    if (!role) throw new Error("API Integration Developer must be in the approved role list.");

    render(<SoftwareRoleDetailPage role={role} />);

    expect(
      screen.getAllByRole("link", { name: /Hire an API Integration Developer/ })[0],
    ).toHaveAttribute("href", `/contact?role=${encodeURIComponent(role.title)}#inquiry`);
    expect(screen.getByRole("link", { name: "See What They Handle" })).toHaveAttribute(
      "href",
      "#role-work",
    );
    expect(screen.getByRole("link", { name: "All Software & Development roles" })).toHaveAttribute(
      "href",
      "/expertise/software-dev#roles",
    );
  });

  it("provides distinct, reachable URLs for every approved role", () => {
    const urls = softwareDevelopmentFunction.roles.map(
      (role) => `${softwareDevelopmentFunction.href}/${toRoleSlug(role.title)}`,
    );

    expect(urls).toHaveLength(17);
    expect(new Set(urls).size).toBe(17);
    expect(urls).not.toContain("/expertise/software-dev/cybersecurity-analyst");
    expect(urls).not.toContain("/expertise/software-dev/workflow-automation-specialist");
  });
});
