import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { faqs } from "@/lib/faq-data";

export const Route = createFileRoute("/resources/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Quorisx" },
      {
        name: "description",
        content:
          "Answers to common questions about Quorisx, offshore teams, services, engagement, and delivery.",
      },
    ],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-ink px-6 py-16 md:py-24">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-36 -z-10 h-[28rem] w-[28rem] rounded-full border border-ink-border"
          />
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-24 -z-10 h-64 w-64 rounded-full border border-accent/15"
          />
          <div className="mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow mb-5 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Resources · FAQs
              </p>
              <h1 className="max-w-3xl font-display text-4xl leading-[1.04] text-ink-foreground md:text-6xl">
                Good questions.
                <br />
                <span className="text-accent">Clear answers.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                Get to know how Quorisx works—from choosing a service model to planning your team
                and delivery.
              </p>
            </div>
            <div className="hidden items-center gap-3 rounded-xl border border-ink-border bg-ink-foreground/[0.035] px-5 py-4 text-sm text-ink-muted sm:flex">
              <MessageCircleQuestion aria-hidden="true" className="h-5 w-5 text-accent" />
              <span>{faqs.length} helpful answers</span>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <aside className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-ink to-primary p-7 text-ink-foreground md:p-9 lg:sticky lg:top-28">
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 -z-10 h-48 w-48 rounded-full border border-ink-border"
              />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg shadow-accent/20">
                <MessageCircleQuestion aria-hidden="true" className="h-6 w-6" />
              </span>
              <p className="eyebrow mb-3 mt-7">Need more information?</p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                We’re here to help.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Talk with our team about your goals, service scope, and the best next step for your
                business.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Talk to our team <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </aside>

            <div className="space-y-3">
              {faqs.map(([question, answer], index) => {
                const isOpen = open === index;
                const answerId = `faq-answer-${index}`;
                return (
                  <article
                    key={question}
                    className={`overflow-hidden rounded-xl border bg-card transition-all duration-200 ${
                      isOpen
                        ? "border-accent/60 shadow-md shadow-primary/5"
                        : "hover:border-primary/25 hover:shadow-sm"
                    }`}
                  >
                    <h2>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpen(isOpen ? null : index)}
                        className="flex min-h-16 w-full items-center gap-4 px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:px-5"
                      >
                        <span
                          className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:flex ${
                            isOpen
                              ? "bg-accent text-accent-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-sm font-semibold leading-relaxed transition-colors sm:text-base ${
                            isOpen ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {question}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-all ${
                            isOpen
                              ? "rotate-180 bg-primary text-primary-foreground"
                              : "bg-secondary text-foreground"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                    {isOpen && (
                      <div id={answerId} className="px-4 pb-5 sm:pl-[4.25rem] sm:pr-6">
                        <p className="max-w-3xl border-l-2 border-accent/50 pl-4 text-sm leading-relaxed text-muted-foreground">
                          {answer}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-ink-border bg-ink px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-ink-muted sm:flex-row sm:items-center">
          <a href="/" className="font-display text-2xl text-ink-foreground">
            Quorisx<span className="text-accent">.</span>
          </a>
          <div className="flex gap-5">
            <a className="transition-colors hover:text-ink-foreground" href="/">
              Home
            </a>
            <a className="transition-colors hover:text-ink-foreground" href="/about">
              About
            </a>
            <a className="transition-colors hover:text-ink-foreground" href="/contact">
              Contact
            </a>
          </div>
          <span>© {new Date().getFullYear()} Quorisx. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
