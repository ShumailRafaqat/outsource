import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import {
  allInsightCards,
  existingInsightCards,
  featuredInsight,
  insightTopics,
  readingTime,
} from "./editorial-insights";

describe("editorial insights", () => {
  it("keeps service-specific website articles out of the global Insights feed", () => {
    expect(insightTopics.map(({ label }) => label)).toEqual([
      "All Insights",
      "Sales & Growth",
      "Marketing & Visibility",
      "Technology, AI & Automation",
      "Customer Experience",
    ]);
    expect(existingInsightCards).toEqual([]);
    expect(allInsightCards).toHaveLength(1);
    expect(allInsightCards[0].slug).toBe(featuredInsight.slug);
    expect(new Set(allInsightCards.map((article) => article.slug)).size).toBe(
      allInsightCards.length,
    );
    expect(allInsightCards.some((article) => article.href.startsWith("/insights/"))).toBe(false);
  });

  it("uses a complete, explicitly illustrative sample article and computed reading time", () => {
    expect(featuredInsight.title).toBe(
      "What Happens When Customers Need Help After Business Hours?",
    );
    expect(featuredInsight.opening.join(" ")).toContain("illustrative scenario");
    expect(featuredInsight.causes).toHaveLength(4);
    expect(featuredInsight.actionSteps).toHaveLength(5);
    expect(featuredInsight.takeaways.length).toBeGreaterThanOrEqual(3);
    expect(readingTime(1)).toBe("1 min read");
    expect(readingTime(441)).toBe("3 min read");
  });

  it("resolves the new Insights index, sample article, and all card destinations", () => {
    const router = createRouter({ routeTree });
    const indexRoute = router.matchRoutes("/resources/insights").at(-1);
    const sampleRoute = router.matchRoutes(`/resources/insights/${featuredInsight.slug}`).at(-1);

    expect(indexRoute?.routeId).toBe("/resources/insights");
    expect(sampleRoute?.routeId).toBe("/resources/insights/$slug");
    for (const article of allInsightCards) {
      const match = router.matchRoutes(article.href).at(-1);
      expect(match?.routeId, article.href).not.toBe(rootRouteId);
    }
  });
});
