import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { navigationGroups } from "@/lib/site-navigation";
import { expertiseFunctions, toRoleSlug } from "@/components/expertise/data";
import { shouldShowSplash } from "@/routes/__root";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("shows the intro splash only on the Website Development page", () => {
    expect(shouldShowSplash("/")).toBe(false);
    expect(shouldShowSplash("/solutions/website-development")).toBe(true);
    expect(shouldShowSplash("/solutions/website-development/")).toBe(true);
    expect(shouldShowSplash("/solutions/digital-marketing-seo")).toBe(false);
  });

  it("keeps Finance & Accounting out of the advertised expertise and business functions", () => {
    const expertiseNavigation = navigationGroups.find((group) => group.label === "Our Expertise");

    expect(
      expertiseNavigation?.items.some((item) => item.href === "/expertise/finance-accounting"),
    ).toBe(false);
    expect(expertiseFunctions.some((group) => group.href === "/expertise/finance-accounting")).toBe(
      false,
    );
  });

  it("shows only the requested destinations in the About menu", () => {
    const aboutNavigation = navigationGroups.find((group) => group.label === "About");

    expect(aboutNavigation?.items).toEqual([
      { label: "Company", href: "/about" },
      { label: "Why Bangkok", href: "/about#why-bangkok" },
      { label: "Offshore Through Quorisx", href: "/#outsourcing" },
      { label: "Benefits of Outsourcing", href: "/#benefits" },
    ]);
  });

  it("shows the active service pages and links admin and sales to their expertise pages", () => {
    const solutionsNavigation = navigationGroups.find((group) => group.label === "Solutions");

    expect(solutionsNavigation?.items).toEqual([
      { label: "Website Development", href: "/solutions/website-development" },
      { label: "Digital Marketing & SEO", href: "/solutions/digital-marketing-seo" },
      { label: "Paid Ads & Lead Generation", href: "/solutions/paid-ads-lead-generation" },
      { label: "AI & Automation", href: "/solutions/ai-automation" },
      { label: "Admin & Executive Support", href: "/expertise/admin-executive" },
      { label: "Sales & Growth", href: "/expertise/sales-growth" },
    ]);
  });

  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches every destination exposed in the navigation menus", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const destinations = navigationGroups.flatMap((group) =>
      group.items.map((item) => item.href.split("#")[0]),
    );

    for (const destination of destinations) {
      const matches = router.matchRoutes(destination);
      expect(matches.at(-1)?.routeId, destination).not.toBe(rootRouteId);
    }
  });

  it("matches both engagement models and the legacy global operating model destination", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    for (const destination of [
      "/why-quorisx/engagement-models",
      "/why-quorisx/global-operating-model",
    ]) {
      const matches = router.matchRoutes(destination);
      expect(matches.at(-1)?.routeId, destination).not.toBe(rootRouteId);
    }
  });

  it("matches the dedicated Digital Marketing & SEO solution page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes("/solutions/digital-marketing-seo");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("puts Global Operating Model first and links to the homepage", () => {
    const whyNavigation = navigationGroups.find((group) => group.label === "Why Quorisx");

    expect(whyNavigation?.items[0]).toEqual({
      label: "Global Operating Model",
      href: "/",
    });
  });

  it("redirects the legacy global operating model URL to the homepage section", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    await router.navigate({
      to: "/$category/$slug",
      params: { category: "why-quorisx", slug: "global-operating-model" },
    });

    expect(router.state.location.pathname).toBe("/");
    expect(router.state.location.hash).toBe("presence");
  });

  it("matches a dedicated detail route for every expertise role", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    for (const group of expertiseFunctions) {
      const category = group.href.split("/").at(-1);
      if (!category) {
        throw new Error(`Missing category slug for ${group.label}`);
      }

      for (const role of group.roles) {
        const destination = `/expertise/${category}/${toRoleSlug(role.title)}`;
        const matches = router.matchRoutes(destination);
        expect(matches.at(-1)?.routeId, destination).not.toBe(rootRouteId);
      }
    }
  });
});
