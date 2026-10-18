import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import type { WebsiteArticle } from "@/lib/website-articles";

import "./website-development.css";

function splitParagraphs(text: string) {
  return text.split(/\n\n+/).filter(Boolean);
}

export function WebsiteArticleDetail({ article }: { article: WebsiteArticle }) {
  const articlePageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = articlePageRef.current;
    const revealNodes = page?.querySelectorAll<HTMLElement>("[data-article-reveal]");
    if (
      !page ||
      !revealNodes?.length ||
      !("IntersectionObserver" in window) ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    page.dataset.articleRevealReady = "true";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main
        className="wd-page wd-article-page wd-article-editorial-page"
        data-disable-hero-reveal
        ref={articlePageRef}
      >
        <div className="wd-article-detail-container wd-article-editorial-container">
          <div className="wd-article-editorial-top" data-article-reveal="top">
            <nav className="wd-article-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/insights">Insights</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{article.category}</span>
            </nav>
            <a className="wd-article-editorial-back" href="/insights">
              <ArrowLeft size={15} aria-hidden="true" />
              All insights
            </a>
          </div>
          <article
            className="wd-article-detail"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <header className="wd-article-editorial-header">
              <p
                className="wd-article-editorial-eyebrow"
                itemProp="articleSection"
                data-article-reveal="category"
              >
                {article.category}
              </p>
              <h1 id="wd-article-title" itemProp="headline" data-article-reveal="title">
                {article.title}
              </h1>
              <p
                className="wd-article-editorial-summary"
                itemProp="description"
                data-article-reveal="summary"
              >
                {article.summary}
              </p>
              <div className="wd-article-editorial-byline" data-article-reveal="byline">
                <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                  <span className="wd-article-author-mark" aria-hidden="true">
                    Q
                  </span>
                  <span itemProp="name">{article.author}</span>
                </span>
                <span>
                  <Clock3 aria-hidden="true" />
                  {article.time}
                </span>
              </div>
            </header>
            <figure className="wd-article-editorial-image" data-article-reveal="image">
              <div>
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  width="1200"
                  height="800"
                  fetchPriority="high"
                  itemProp="image"
                />
              </div>
            </figure>

            <div className="wd-article-reading-layout">
              <aside className="wd-article-toc" aria-label="In this article">
                <p>IN THIS ARTICLE</p>
                <nav aria-label="Article sections">
                  {article.sections.map((section, index) => (
                    <a href={`#wd-article-section-${index + 1}`} key={section.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {section.title}
                    </a>
                  ))}
                  {article.closing && (
                    <a href="#wd-article-quick-check">
                      <span>+</span>
                      {article.closing.checklistTitle}
                    </a>
                  )}
                </nav>
                <a className="wd-article-toc-back" href="/insights">
                  <ArrowLeft size={14} aria-hidden="true" />
                  All insights
                </a>
              </aside>
              <div className="wd-article-reading-column" itemProp="articleBody">
                {article.introduction && (
                  <div className="wd-article-editorial-opening" data-article-reveal="opening">
                    {article.introduction.map((paragraph) => (
                      <p className="wd-article-introduction" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {article.sections.map((section, index) => (
                  <section
                    className="wd-article-section"
                    id={`wd-article-section-${index + 1}`}
                    key={section.title}
                    data-article-reveal="section"
                  >
                    <p className="wd-article-section-kicker">
                      <span>{String(index + 1).padStart(2, "0")}</span> / FIELD NOTE
                    </p>
                    <h2>{section.title}</h2>
                    {splitParagraphs(section.body).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.items && (
                      <ul className="wd-article-section-list">
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {article.closing && (
                  <div className="wd-article-closing">
                    <section
                      className="wd-article-checklist"
                      id="wd-article-quick-check"
                      aria-labelledby="wd-quick-check"
                      data-article-reveal="section"
                    >
                      <h2 id="wd-quick-check">{article.closing.checklistTitle}</h2>
                      <p>
                        {article.closing.checklistIntro ??
                          "Ask someone unfamiliar with your company to visit your website and answer:"}
                      </p>
                      <ul>
                        {article.closing.checklist.map((question) => (
                          <li key={question}>{question}</li>
                        ))}
                      </ul>
                      <p>
                        If they struggle, your website may be leaving useful parts of your business
                        unexplained.
                      </p>
                    </section>
                    <section className="wd-article-final-cta" data-article-reveal="section">
                      <p className="wd-eyebrow">
                        <span /> A CLEARER NEXT STEP
                      </p>
                      <h2>{article.closing.title}</h2>
                      <p>{article.closing.body}</p>
                      <a
                        href="/solutions/website-development#wd-audit"
                        className="wd-full-article-cta"
                      >
                        {article.closing.ctaLabel}
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    </section>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.summary,
            image: `https://quorisx.com${article.image}`,
            datePublished: article.datePublished,
            author: { "@type": "Organization", name: article.author },
            mainEntityOfPage: `https://quorisx.com/insights/${article.slug}`,
            url: `https://quorisx.com/insights/${article.slug}`,
          })}
        </script>
      </main>
    </div>
  );
}
