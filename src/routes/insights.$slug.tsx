import { createFileRoute, notFound } from "@tanstack/react-router";

import { WebsiteArticleDetail } from "@/components/solutions/pages/website-article-detail";
import { getWebsiteArticle } from "@/lib/website-articles";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getWebsiteArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.article.title} — Website Insights | Quorisx` },
      { name: "description", content: loaderData.article.summary },
      { property: "og:title", content: `${loaderData.article.title} — Quorisx` },
      { property: "og:description", content: loaderData.article.summary },
      { property: "og:type", content: "article" },
      { property: "og:image", content: `https://quorisx.com${loaderData.article.image}` },
    ],
    links: [
      {
        rel: "canonical",
        href: `https://quorisx.com/insights/${loaderData.article.slug}`,
      },
    ],
  }),
  component: WebsiteArticleRoute,
});

function WebsiteArticleRoute() {
  const { article } = Route.useLoaderData();
  return <WebsiteArticleDetail article={article} />;
}
