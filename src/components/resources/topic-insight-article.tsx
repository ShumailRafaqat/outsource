import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, Copy } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { allInsightCards, insightTopics, readingTime } from "@/lib/editorial-insights";
import type { EditorialInsightArticle } from "@/lib/editorial-articles";

import "@/routes/resources/insights.css";

type Props = {
  insight: EditorialInsightArticle;
};

export function TopicInsightArticle({ insight }: Props) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const card = allInsightCards.find(({ slug }) => slug === insight.slug);
  if (!card) throw new Error(`Missing Insights card for article "${insight.slug}".`);
  const topicLabel = insightTopics.find(({ id }) => id === insight.topic)?.label ?? "Insights";
  const sameTopicArticles = allInsightCards
    .filter(({ slug, topic }) => slug !== insight.slug && topic === insight.topic)
    .slice(0, 2);
  const relatedArticles =
    sameTopicArticles.length > 0
      ? sameTopicArticles
      : allInsightCards.filter(({ slug }) => slug !== insight.slug).slice(0, 2);

  async function copyArticleLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  const sections = [
    ...insight.sections.map((section) => ({
      id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: section.heading,
    })),
    { id: "practical-next-steps", title: "Practical next steps" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="insights-article" data-disable-hero-reveal>
        <div className="insights-article__top">
          <nav aria-label="Breadcrumb" className="insights-breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/resources/insights">Insights</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{topicLabel}</span>
          </nav>
          <a className="insights-back-link" href="/resources/insights">
            <ArrowLeft aria-hidden="true" /> All insights
          </a>
        </div>

        <article itemScope itemType="https://schema.org/BlogPosting">
          <section className="insights-editorial-hero">
            <header className="insights-article__header">
              <p className="insights-eyebrow" itemProp="articleSection">
                {insight.category}
              </p>
              <h1 itemProp="headline">{insight.title}</h1>
              <p className="insights-article__dek" itemProp="description">
                {insight.dek}
              </p>
              <div className="insights-article__byline">
                <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                  <span className="insights-article__byline-mark" aria-hidden="true">
                    Q
                  </span>
                  <span itemProp="name">Quorisx</span>
                </span>
                <span>
                  <Clock3 aria-hidden="true" /> {readingTime(card.wordCount)}
                </span>
                <button type="button" onClick={copyArticleLink}>
                  {copyState === "copied" ? (
                    <Check aria-hidden="true" />
                  ) : (
                    <Copy aria-hidden="true" />
                  )}
                  {copyState === "copied"
                    ? "Link copied"
                    : copyState === "failed"
                      ? "Could not copy link"
                      : "Copy link"}
                </button>
              </div>
            </header>
            <figure className="insights-article__lead-image">
              <img
                src={insight.image}
                alt={insight.imageAlt}
                width="1200"
                height="800"
                fetchPriority="high"
                itemProp="image"
              />
              <figcaption>{insight.summary}</figcaption>
            </figure>
          </section>

          <div className="insights-article__layout">
            <aside className="insights-article__toc">
              <details>
                <summary>In this article</summary>
                <nav aria-label="Article contents">
                  {sections.map((section, index) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {section.title}
                    </a>
                  ))}
                  <a href="#key-takeaways">
                    <span>+</span>Key takeaways
                  </a>
                </nav>
              </details>
            </aside>

            <div className="insights-article__body" itemProp="articleBody">
              <div className="insights-article__opening">
                {insight.opening.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {insight.sections.map((section) => {
                const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <section className="insights-article__section" id={id} key={section.heading}>
                    <p className="insights-eyebrow">A practical perspective</p>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                );
              })}

              <section className="insights-article__section" id="practical-next-steps">
                <p className="insights-eyebrow">Put the insight to work</p>
                <h2>Practical next steps</h2>
                <ol className="insights-action-list">
                  {insight.actionSteps.map((step, index) => (
                    <li key={step.heading}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{step.heading}</h3>
                        <p>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="insights-takeaways" id="key-takeaways">
                <p className="insights-eyebrow">Key takeaways</p>
                <h2>Keep the next decision clear.</h2>
                <ul>
                  {insight.takeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </section>

              <section className="insights-related" aria-labelledby="related-heading">
                <h2 id="related-heading">Related reading and next steps</h2>
                {relatedArticles.map((article) => (
                  <a href={article.href} key={article.slug}>
                    {article.title} <ArrowRight aria-hidden="true" />
                  </a>
                ))}
                <a className="insights-related__cta" href="/contact#inquiry">
                  Talk with our team about your goals <ArrowRight aria-hidden="true" />
                </a>
              </section>
            </div>
          </div>
        </article>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: insight.title,
            description: insight.summary,
            image: `https://quorisx.com${insight.image}`,
            author: { "@type": "Organization", name: "Quorisx" },
            mainEntityOfPage: `https://quorisx.com/resources/insights/${insight.slug}`,
            url: `https://quorisx.com/resources/insights/${insight.slug}`,
            articleSection: insight.category,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://quorisx.com/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: "https://quorisx.com/resources/insights",
              },
              { "@type": "ListItem", position: 3, name: topicLabel },
            ],
          })}
        </script>
      </main>
      <SiteFooter />
    </div>
  );
}
