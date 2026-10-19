import { createFileRoute, notFound } from "@tanstack/react-router";

import { EditorialInsightArticle } from "@/components/resources/editorial-insight-article";
import { TopicInsightArticle } from "@/components/resources/topic-insight-article";
import { featuredInsight } from "@/lib/editorial-insights";
import {
  additionalInsights,
  marketingSeoInsights,
  paidAdsInsights,
} from "@/lib/editorial-articles";

export const Route = createFileRoute("/resources/insights/$slug")({
  loader: ({ params }) => {
    if (params.slug === featuredInsight.slug) {
      return { type: "featured" as const, insight: featuredInsight };
    }
    const insight = [...paidAdsInsights, ...additionalInsights, ...marketingSeoInsights].find(
      (article) => article.slug === params.slug,
    );
    if (!insight) throw notFound();
    return { type: "editorial" as const, insight };
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
  const { type, insight } = Route.useLoaderData();
  return type === "editorial" ? (
    <TopicInsightArticle insight={insight} />
  ) : (
    <EditorialInsightArticle />
  );
}
