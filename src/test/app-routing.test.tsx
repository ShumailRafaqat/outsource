import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { navigationGroups } from "@/lib/site-navigation";
import { expertiseFunctions, toRoleSlug } from "@/components/expertise/data";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
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
