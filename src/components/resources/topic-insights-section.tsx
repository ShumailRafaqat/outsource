import { ArrowRight, ArrowUpRight, Clock3, Sparkles } from "lucide-react";

import { allInsightCards, readingTime } from "@/lib/editorial-insights";
import type { InsightTopicId } from "@/lib/editorial-insights";
import type { EditorialInsightArticle } from "@/lib/editorial-articles";

import "./topic-insights-section.css";

type Props = {
  articles: EditorialInsightArticle[];
  topic: Exclude<InsightTopicId, "all">;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function TopicInsightsSection({
  articles,
  topic,
  eyebrow,
  title,
  description,
  className = "",
}: Props) {
  const topicArticles = articles.slice(0, 3);
  const cards = topicArticles.map((article) => {
    const card = allInsightCards.find(({ slug }) => slug === article.slug);
    if (!card) throw new Error(`Missing Insights card for article "${article.slug}".`);
    return { article, card };
  });

  if (!cards.length) return null;

  return (
    <section className={`topic-insights ${className}`} aria-labelledby={`${topic}-insights-title`}>
      <div className="topic-insights__container">
        <header className="topic-insights__header">
          <div>
            <p className="topic-insights__eyebrow">
              <Sparkles aria-hidden="true" /> {eyebrow}
            </p>
            <h2 id={`${topic}-insights-title`}>{title}</h2>
            <p className="topic-insights__description">{description}</p>
          </div>
          <a
            className="topic-insights__all"
            href={`/resources/insights?topic=${topic}`}
            aria-label={`Explore all ${topic === "ai-automation" ? "AI & Automation" : "Marketing & Visibility"} insights`}
          >
            Explore all insights <ArrowUpRight aria-hidden="true" />
          </a>
        </header>
        <div className="topic-insights__grid">
          {cards.map(({ article, card }, index) => (
            <article className="topic-insights__card" key={article.slug}>
              <a
                className="topic-insights__image"
                href={card.href}
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src={article.image} alt="" loading="lazy" width="1200" height="800" />
                <span>0{index + 1}</span>
              </a>
              <div className="topic-insights__body">
                <div className="topic-insights__meta">
                  <span>{article.category}</span>
                  <span>
                    <Clock3 aria-hidden="true" /> {readingTime(card.wordCount)}
                  </span>
                </div>
                <h3>
                  <a href={card.href}>{article.title}</a>
                </h3>
                <p>{article.summary}</p>
                <a className="topic-insights__read" href={card.href}>
                  Read the article <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
