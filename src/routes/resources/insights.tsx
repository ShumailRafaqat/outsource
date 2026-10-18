import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock3, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  allInsightCards,
  featuredInsight,
  featuredInsightCard,
  insightTopics,
  readingTime,
  type InsightTopicId,
} from "@/lib/editorial-insights";

import "./insights.css";

type InsightSearch = { topic?: InsightTopicId; page?: number };

export const Route = createFileRoute("/resources/insights")({
  validateSearch: (search: Record<string, unknown>): InsightSearch => {
    const validTopic = insightTopics.some((topic) => topic.id === search.topic);
    const page = Number(search.page);
    return {
      ...(validTopic && search.topic !== "all" ? { topic: search.topic as InsightTopicId } : {}),
      ...(Number.isSafeInteger(page) && page > 1 ? { page } : {}),
    };
  },
  head: () => ({
    meta: [
      { title: "Quorisx Insights | Practical Ideas for Better Business Decisions" },
      {
        name: "description",
        content:
          "Practical perspectives on business operations, customer experience, digital growth, and technology to help you make better decisions.",
      },
      {
        property: "og:title",
        content: "Quorisx Insights | Practical Ideas for Better Business Decisions",
      },
      {
        property: "og:description",
        content:
          "Practical perspectives on business operations, customer experience, digital growth, and technology.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://quorisx.com/resources/insights" }],
  }),
  component: InsightsPage,
});

const pageSize = 6;

function InsightsPage() {
  const { topic = "all", page = 1 } = Route.useSearch();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/resources/insights" && pathname !== "/resources/insights/") {
    return <Outlet />;
  }
  const topicLabel = insightTopics.find((item) => item.id === topic)?.label ?? "All Insights";
  const topicCards = allInsightCards.filter((card) => topic === "all" || card.topic === topic);
  const featuredIsInView = topic === "all";
  const latestCards = topicCards.filter(
    (card) => !(featuredIsInView && card.slug === featuredInsight.slug),
  );
  const pageCount = Math.max(1, Math.ceil(latestCards.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visibleCards = latestCards.slice(0, currentPage * pageSize);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="insights-hub" data-disable-hero-reveal>
        <section className="insights-hero" aria-labelledby="insights-title">
          <div className="insights-hero__copy">
            <p className="insights-eyebrow">Quorisx Insights</p>
            <h1 id="insights-title">Ideas Worth Exploring. Insights Worth Applying.</h1>
            <p>
              Practical perspectives on business operations, customer experience, digital growth,
              and technology—written to help you make better decisions.
            </p>
          </div>
          <div className="insights-hero__art" aria-hidden="true">
            <div className="insights-hero__art-ring" />
            <div className="insights-hero__art-line" />
            <span>FIELD NOTES</span>
            <strong>Q.</strong>
            <i>01 — 05</i>
          </div>
        </section>

        <section className="insights-topic-bar" aria-labelledby="topic-heading">
          <div className="insights-topic-bar__inner">
            <div>
              <p className="insights-eyebrow">Explore topics</p>
              <h2 id="topic-heading">Find a useful starting point.</h2>
            </div>
            <nav className="insights-topic-list" aria-label="Filter insights by topic">
              {insightTopics.map((item) => {
                const count =
                  item.id === "all"
                    ? allInsightCards.length
                    : allInsightCards.filter((card) => card.topic === item.id).length;
                return (
                  <a
                    key={item.id}
                    href={
                      item.id === "all"
                        ? "/resources/insights"
                        : `/resources/insights?topic=${item.id}`
                    }
                    aria-current={topic === item.id ? "page" : undefined}
                    className="insights-topic-chip"
                  >
                    {item.label}
                    <span aria-label={`${count} articles`}>{count}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </section>

        {featuredIsInView && (
          <section className="insights-featured" aria-labelledby="featured-heading">
            <div className="insights-section-heading">
              <p className="insights-eyebrow">
                <Sparkles aria-hidden="true" />
                Featured insight
              </p>
              <span>01 / EDITOR’S PICK</span>
            </div>
            <article className="insights-featured__story">
              <div className="insights-featured__image">
                <img
                  src={featuredInsight.image}
                  alt={featuredInsight.imageAlt}
                  width="1200"
                  height="800"
                  fetchPriority="high"
                />
                <span>Customer experience / Field guide</span>
              </div>
              <div className="insights-featured__copy">
                <p className="insights-card-category">{featuredInsight.category}</p>
                <h2 id="featured-heading">
                  <a href={featuredInsightCard.href}>{featuredInsight.title}</a>
                </h2>
                <p>{featuredInsight.summary}</p>
                <div className="insights-meta">
                  <span>Quorisx Editorial</span>
                  <span>
                    <Clock3 aria-hidden="true" /> {readingTime(featuredInsightCard.wordCount)}
                  </span>
                </div>
                <a className="insights-text-link" href={featuredInsightCard.href}>
                  Read the article <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          </section>
        )}

        <section className="insights-latest" aria-labelledby="latest-heading">
          <div className="insights-section-heading">
            <div>
              <p className="insights-eyebrow">The editorial desk</p>
              <h2 id="latest-heading">{topic === "all" ? "Latest perspectives" : topicLabel}</h2>
            </div>
            <span>
              {latestCards.length} {latestCards.length === 1 ? "article" : "articles"}
            </span>
          </div>
          {visibleCards.length ? (
            <>
              <div className="insights-card-grid">
                {visibleCards.map((card) => (
                  <article className="insights-card" key={card.slug}>
                    <div className="insights-card__image">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        width="1200"
                        height="800"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="insights-card__body">
                      <div className="insights-card__meta">
                        <span>{card.category}</span>
                        {card.publishedAt && (
                          <time dateTime={card.publishedAt}>
                            {new Date(`${card.publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              timeZone: "UTC",
                            })}
                          </time>
                        )}
                      </div>
                      <h3>
                        <a href={card.href}>{card.title}</a>
                      </h3>
                      <p>{card.summary}</p>
                      <div className="insights-card__bottom">
                        <span>{readingTime(card.wordCount)}</span>
                        <a href={card.href} aria-label={`Read article: ${card.title}`}>
                          Read article <ArrowRight aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              {currentPage < pageCount && (
                <a
                  className="insights-load-more"
                  href={`/resources/insights?${new URLSearchParams({
                    ...(topic !== "all" ? { topic } : {}),
                    page: String(currentPage + 1),
                  }).toString()}`}
                >
                  Load more insights <ArrowRight aria-hidden="true" />
                </a>
              )}
            </>
          ) : (
            <div className="insights-empty" role="status">
              <h3>Service-specific articles live on their service pages.</h3>
              <p>
                Browse our website development guides on the Website Development page, or explore
                the featured business insight above.
              </p>
              <a href="/solutions/website-development#wd-insights-title">
                Browse website development guides <ArrowRight aria-hidden="true" />
              </a>
            </div>
          )}
        </section>

        <section className="insights-challenges" aria-labelledby="challenge-heading">
          <div className="insights-challenges__intro">
            <p className="insights-eyebrow">Explore by challenge</p>
            <h2 id="challenge-heading">What is taking up your team’s attention?</h2>
          </div>
          <ul>
            <li>
              <a href={`/resources/insights?topic=customer-experience#latest-heading`}>
                Customers need help outside your usual hours <ArrowRight aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={`/resources/insights?topic=marketing#latest-heading`}>
                Your website gets attention, but the next step is unclear{" "}
                <ArrowRight aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={`/resources/insights?topic=technology#latest-heading`}>
                Your tools and processes are not working smoothly together{" "}
                <ArrowRight aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>

        <section className="insights-bottom-cta" aria-labelledby="insights-cta-heading">
          <div>
            <p className="insights-eyebrow">Keep exploring</p>
            <h2 id="insights-cta-heading">Turn useful ideas into practical next steps.</h2>
            <p>Explore the expertise and support options relevant to your business.</p>
          </div>
          <a href="/#outsourcing">
            Explore Our Expertise <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
