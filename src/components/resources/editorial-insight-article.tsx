import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, Copy } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { featuredInsight, featuredInsightCard, readingTime } from "@/lib/editorial-insights";

import "@/routes/resources/insights.css";

const articleSections = [
  ...featuredInsight.causes.map((section) => ({
    id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    title: section.heading,
  })),
  { id: "a-realistic-coverage-scenario", title: "A realistic coverage scenario" },
  { id: "a-practical-plan", title: "A practical plan you can put into motion" },
  { id: "when-a-specialist-may-help", title: "When a specialist may help" },
] as const;

export function EditorialInsightArticle() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function copyArticleLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

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
            <span aria-current="page">Customer Experience</span>
          </nav>
          <a className="insights-back-link" href="/resources/insights">
            <ArrowLeft aria-hidden="true" /> All insights
          </a>
        </div>

        <article itemScope itemType="https://schema.org/BlogPosting">
          <header className="insights-article__header">
            <p className="insights-eyebrow" itemProp="articleSection">
              {featuredInsight.category}
            </p>
            <h1 itemProp="headline">{featuredInsight.title}</h1>
            <p className="insights-article__dek" itemProp="description">
              {featuredInsight.dek}
            </p>
            <div className="insights-article__byline">
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span className="insights-article__byline-mark" aria-hidden="true">
                  Q
                </span>
                <span itemProp="name">Quorisx</span>
              </span>
              <span>
                <Clock3 aria-hidden="true" /> {readingTime(featuredInsightCard.wordCount)}
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
              src={featuredInsight.image}
              alt={featuredInsight.imageAlt}
              width="1200"
              height="800"
              fetchPriority="high"
              itemProp="image"
            />
            <figcaption>
              Business teams can make after-hours support clearer by agreeing ownership and next
              steps.
            </figcaption>
          </figure>

          <div className="insights-article__layout">
            <aside className="insights-article__toc">
              <details>
                <summary>In this article</summary>
                <nav aria-label="Article contents">
                  {articleSections.map((section, index) => (
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
                {featuredInsight.opening.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <section className="insights-scenario" aria-labelledby="scenario-heading">
                <p className="insights-eyebrow">Illustrative scenario · not a client case</p>
                <h2 id="scenario-heading">A small retailer deciding what “after hours” means</h2>
                <dl>
                  <div>
                    <dt>Context</dt>
                    <dd>{featuredInsight.scenario.context}</dd>
                  </div>
                  <div>
                    <dt>Constraint</dt>
                    <dd>{featuredInsight.scenario.constraint}</dd>
                  </div>
                  <div>
                    <dt>Decision</dt>
                    <dd>{featuredInsight.scenario.decision}</dd>
                  </div>
                </dl>
              </section>

              <section className="insights-timeline" aria-labelledby="timeline-heading">
                <h2 id="timeline-heading">Two ways the same message can be handled</h2>
                <div>
                  <article>
                    <h3>Without a defined workflow</h3>
                    <ol>
                      <li>Customer sends a message after closing.</li>
                      <li>No clear receipt or response expectation is shown.</li>
                      <li>Several channels receive duplicate requests.</li>
                      <li>The next shift has to reconstruct the conversation.</li>
                    </ol>
                  </article>
                  <article>
                    <h3>With an agreed workflow</h3>
                    <ol>
                      <li>Customer sees accurate hours and what happens next.</li>
                      <li>Message is recorded in the agreed system of record.</li>
                      <li>Urgent exceptions follow a named escalation path.</li>
                      <li>Next shift reviews the queue and owns the follow-up.</li>
                    </ol>
                  </article>
                </div>
              </section>

              <section aria-labelledby="why-heading">
                <p className="insights-eyebrow">Why the gap appears</p>
                <h2 id="why-heading">The common causes are usually operational.</h2>
                {featuredInsight.causes.map((section) => (
                  <section
                    className="insights-article__section"
                    id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    key={section.heading}
                  >
                    <h3>{section.heading}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </section>

              <section className="insights-article__section" id="a-realistic-coverage-scenario">
                <p className="insights-eyebrow">Decide what fits your business</p>
                <h2>A realistic coverage scenario</h2>
                <p>
                  The retailer reviews recent messages and finds that most after-hours requests are
                  routine order questions, while a smaller set involve payment or account concerns.
                  The owner decides routine messages can receive a clear next-business-day
                  expectation. Sensitive account concerns get a separate route to a designated
                  manager; the business does not promise that every issue will be resolved at night.
                </p>
                <p>
                  The owner approves the wording, names the escalation contact, and asks the next
                  shift to check the shared queue first. The example illustrates a planning choice,
                  not a real customer result.
                </p>
              </section>

              <section className="insights-article__section" id="a-practical-plan">
                <p className="insights-eyebrow">Practical action plan</p>
                <h2>A practical plan you can put into motion</h2>
                <ol className="insights-action-list">
                  {featuredInsight.actionSteps.map((step, index) => (
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

              <section className="insights-coverage-check" aria-labelledby="coverage-check-heading">
                <h2 id="coverage-check-heading">Before adding a new shift, check that:</h2>
                <ul>
                  {featuredInsight.boundaries.map((boundary) => (
                    <li key={boundary}>{boundary}</li>
                  ))}
                </ul>
              </section>

              <section className="insights-article__section" id="when-a-specialist-may-help">
                <p className="insights-eyebrow">Where a specialist may help</p>
                <h2>Support execution, not policy ownership.</h2>
                <p>{featuredInsight.specialist}</p>
                <p>
                  If after-hours demand is occasional and low-risk, an honest acknowledgement,
                  documented ownership, and next-day follow-up may be enough. More coverage is not
                  automatically better if the team cannot train, supervise, or sustain it.
                </p>
              </section>

              <section className="insights-takeaways" id="key-takeaways">
                <p className="insights-eyebrow">Key takeaways</p>
                <h2>Make the next step clear—for customers and your team.</h2>
                <ul>
                  {featuredInsight.takeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </section>

              <section className="insights-related" aria-labelledby="related-heading">
                <h2 id="related-heading">Related reading and next steps</h2>
                <a href="/insights/benefits-of-a-business-website">
                  A good business website keeps working after hours{" "}
                  <ArrowRight aria-hidden="true" />
                </a>
                <a href="/expertise/customer-service">
                  Explore Customer Services &amp; Support <ArrowRight aria-hidden="true" />
                </a>
                <a
                  className="insights-related__cta"
                  href="/contact?role=Customer%20Support%20Representative#inquiry"
                >
                  Discuss your customer support needs <ArrowUpRight aria-hidden="true" />
                </a>
              </section>
            </div>
          </div>
        </article>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: featuredInsight.title,
            description: featuredInsight.summary,
            image: `https://quorisx.com${featuredInsight.image}`,
            author: { "@type": "Organization", name: "Quorisx" },
            mainEntityOfPage: `https://quorisx.com/resources/insights/${featuredInsight.slug}`,
            url: `https://quorisx.com/resources/insights/${featuredInsight.slug}`,
            articleSection: featuredInsight.category,
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
              { "@type": "ListItem", position: 3, name: featuredInsight.category },
            ],
          })}
        </script>
      </main>
      <SiteFooter />
    </div>
  );
}
