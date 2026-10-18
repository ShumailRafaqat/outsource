import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "./site-header";

const expectedRoleCounts = [8, 10, 13, 17, 6, 8];

describe("SiteHeader expertise role links", () => {
  it("shows role counts and opens individual role links in the desktop expertise menu", () => {
    const { container } = render(<SiteHeader />);

    fireEvent.click(screen.getByRole("button", { name: "Our Expertise" }));

    const expertiseMenu = within(container.querySelector("#desktop-our-expertise-menu")!);
    const exploreButtons = expertiseMenu.getAllByRole("button", {
      name: /^Explore \d+ roles$/,
    });

    expect(exploreButtons.map((button) => button.textContent?.trim())).toEqual(
      expectedRoleCounts.map((count) => `Explore ${count} roles`),
    );

    fireEvent.click(exploreButtons[0]);

    expect(container.querySelector(".site-header-role-list")).toBeInTheDocument();
    const roleLink = expertiseMenu.getByRole("link", { name: "General Virtual Assistant" });
    expect(roleLink).toHaveAttribute(
      "href",
      "/expertise/admin-executive/general-virtual-assistant",
    );
  });

  it("exposes the same role exploration links in the mobile expertise menu", () => {
    const { container } = render(<SiteHeader />);

    fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));
    const mobileNavigation = within(container.querySelector("#mobile-main-navigation")!);
    fireEvent.click(mobileNavigation.getByRole("button", { name: /Our Expertise/ }));

    const exploreButtons = mobileNavigation.getAllByRole("button", {
      name: /^Explore \d+ roles$/,
    });
    expect(exploreButtons.map((button) => button.textContent?.trim())).toEqual(
      expectedRoleCounts.map((count) => `Explore ${count} roles`),
    );

    fireEvent.click(exploreButtons[0]);

    expect(container.querySelector(".site-header-role-list")).toBeInTheDocument();
    const roleLink = mobileNavigation.getByRole("link", { name: "General Virtual Assistant" });
    expect(roleLink).toHaveAttribute(
      "href",
      "/expertise/admin-executive/general-virtual-assistant",
    );
  });
});
