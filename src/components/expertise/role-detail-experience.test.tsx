import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { expertiseFunctions, financeAccountingFunction, softwareDevelopmentFunction } from "./data";
import { roleDetailContent } from "./role-detail-content";
import { RoleDetailExperience } from "./role-detail-experience";

const bespokeRolePages = new Set([
  "General Virtual Assistant",
  "Administrative Assistant",
  "Personal Assistant",
  "Executive Assistant",
  "Corporate Travel Coordinator",
  "Data Entry Assistant",
  "Project Manager",
  "Event Coordinator",
  "Sales Development Representative",
  "Outbound Calling Agent",
  "IT SDR",
  "Live Chat Support Agent",
  "SEO Specialist",
  "Graphic Designer",
  "Video Editor",
]);

describe("RoleDetailExperience", () => {
  it("has individualized work content for every role without a bespoke page", () => {
    const genericGroups = [
      ...expertiseFunctions.filter((group) => group.href !== softwareDevelopmentFunction.href),
      financeAccountingFunction,
    ];
    const publishedRoles = genericGroups.flatMap((group) =>
      group.roles.filter((role) => !bespokeRolePages.has(role.title)).map((role) => role.title),
    );
    const genericRoleContent = Object.fromEntries(
      Object.entries(roleDetailContent).filter(([title]) => !bespokeRolePages.has(title)),
    );

    expect(Object.keys(genericRoleContent).sort()).toEqual(publishedRoles.sort());
    expect(publishedRoles.length + bespokeRolePages.size).toBe(
      genericGroups.reduce((count, group) => count + group.roles.length, 0),
    );
    expect(
      new Set(Object.values(genericRoleContent).flatMap((content) => [...content.responsibilities]))
        .size,
    ).toBe(publishedRoles.length * 3);
    Object.values(genericRoleContent).forEach((content) => {
      expect(content.responsibilities).toHaveLength(3);
      expect(new Set(content.responsibilities).size).toBe(3);
    });
  });

  it("renders all role profiles across the distinct page compositions", () => {
    const layouts = new Set<string>();
    const groups = [
      ...expertiseFunctions.filter((group) => group.href !== softwareDevelopmentFunction.href),
      financeAccountingFunction,
    ];

    groups.forEach((group) => {
      group.roles
        .filter((role) => !bespokeRolePages.has(role.title))
        .forEach((role) => {
          const html = renderToStaticMarkup(<RoleDetailExperience group={group} role={role} />);
          const layout = html.match(/data-role-layout="([^"]+)"/)?.[1];
          expect(layout).toBeDefined();
          expect(html).toContain('data-role-page="');
          layouts.add(layout ?? "");
        });
    });

    expect(layouts.size).toBe(7);
  });

  it("presents practical duties, a working rhythm, and outsourcing considerations", () => {
    const group = expertiseFunctions.find((item) => item.href === "/expertise/sales-development");
    const role = group?.roles.find((item) => item.title === "Lead Generation Assistant");

    if (!group || !role) {
      throw new Error("Lead Generation Assistant must remain in the Sales & Growth catalog.");
    }

    render(<RoleDetailExperience group={group} role={role} />);

    expect(screen.getByRole("heading", { name: role.title, level: 1 })).toBeInTheDocument();
    expect(
      screen.getByRole("complementary", {
        name: `${role.title} workflow preview`,
      }),
    ).toHaveTextContent(roleDetailContent[role.title]?.responsibilities[0] ?? "");
    expect(
      screen.getByRole("heading", {
        name: "What Lead Generation Assistant takes off your team’s plate",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Build account lists against the agreed industry/)).toHaveLength(3);
    expect(screen.getByRole("heading", { name: "How the work moves" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "More capacity. Clearer ownership." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Make the work measurable, not mysterious." }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Coming Soon")).not.toBeInTheDocument();
  });
});
