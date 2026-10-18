import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { websiteArticles } from "@/lib/website-articles";

import "@/components/solutions/pages/website-development.css";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Website Development Insights & Resources — Quorisx" },
      {
        name: "description",
        content:
          "Practical guides on website design, SEO, performance, conversions, and choosing the right web development approach for your business.",
      },
      { property: "og:title", content: "Website Development Insights & Resources — Quorisx" },
      {
        property: "og:description",
        content:
          "Practical web development guides to help your business build a clearer, faster, more useful website.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WebsiteInsightsPage,
});

function WebsiteInsightsPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/insights" && pathname !== "/insights/") {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="wd-page wd-insights-page" data-disable-hero-reveal>
        <header className="wd-insights-page-heading">
          <a href="/solutions/website-development" className="wd-insights-back">
            <ArrowLeft size={16} aria-hidden="true" />
            Website development
          </a>
          <p className="wd-eyebrow">
            <span /> THE WEBSITE JOURNAL
          </p>
          <h1>Web Development Insights &amp; Resources</h1>
          <p className="wd-insights-page-intro">
            Practical guides on website design, SEO, performance, and the decisions that help
            growing businesses make the most of their online presence.
          </p>
        </header>
        <div className="wd-article-directory">
          {websiteArticles.map((article) => (
            <article
              className="wd-article-card"
              key={article.slug}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <a className="wd-article-card-image" href={`/insights/${article.slug}`}>
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                />
              </a>
              <div className="wd-article-card-body">
                <div className="wd-journal-meta">
                  <span itemProp="articleSection">{article.category}</span>
                  <time dateTime={article.datePublished} itemProp="datePublished">
                    {new Date(`${article.datePublished}T00:00:00Z`).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                  <span>{article.time}</span>
                </div>
                <h2 itemProp="headline">
                  <a href={`/insights/${article.slug}`}>{article.title}</a>
                </h2>
                <p className="wd-article-card-summary" itemProp="description">
                  {article.summary}
                </p>
                {article.introduction?.map((paragraph) => (
                  <p className="wd-article-card-preview" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <a className="wd-journal-link" href={`/insights/${article.slug}`}>
                  Read Article <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <a href="/solutions/website-development" className="wd-insights-back wd-insights-return">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to website development
        </a>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: websiteArticles.map((article, position) => ({
              "@type": "ListItem",
              position: position + 1,
              item: {
                "@type": "BlogPosting",
                headline: article.title,
                description: article.summary,
                image: `https://quorisx.com${article.image}`,
                datePublished: article.datePublished,
                author: { "@type": "Organization", name: article.author },
                mainEntityOfPage: `https://quorisx.com/insights/${article.slug}`,
                url: `https://quorisx.com/insights/${article.slug}`,
              },
            })),
          })}
        </script>
      </main>
    </div>
  );
}
