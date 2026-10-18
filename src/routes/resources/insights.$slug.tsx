import { createFileRoute, notFound } from "@tanstack/react-router";

import { EditorialInsightArticle } from "@/components/resources/editorial-insight-article";
import { featuredInsight } from "@/lib/editorial-insights";

export const Route = createFileRoute("/resources/insights/$slug")({
  loader: ({ params }) => {
    if (params.slug !== featuredInsight.slug) {
      throw notFound();
    }
    return { insight: featuredInsight };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.insight.title} | Quorisx Insights` },
      { name: "description", content: loaderData.insight.summary },
      { property: "og:title", content: `${loaderData.insight.title} | Quorisx Insights` },
      { property: "og:description", content: loaderData.insight.summary },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `https://quorisx.com${loaderData.insight.image}` },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://quorisx.com/resources/insights/${loaderData.insight.slug}`,
      },
    ],
  }),
  component: InsightArticleRoute,
});

function InsightArticleRoute() {
  return <EditorialInsightArticle />;
}
