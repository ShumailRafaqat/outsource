import { useState } from "react";
import {
  ArrowRight,
  Check,
  CircleCheck,
  Layers3,
  Rocket,
  UsersRound,
  Workflow,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";

const engagementModels = [
  {
    id: "team",
    number: "01",
    icon: UsersRound,
    title: "Dedicated Team",
    summary: "Add people who work as an extension of your team.",
    bestFor: "Ongoing roles and recurring work",
    setup: "Dedicated professionals aligned to your tools, priorities, and working hours.",
    includes: ["You guide the day-to-day priorities", "A consistent team learns your workflows"],
  },
  {
    id: "function",
    number: "02",
    icon: Workflow,
    title: "Managed Function",
    summary: "Hand off a workflow with clear ownership and reporting.",
    bestFor: "Repeatable processes and business operations",
    setup: "A defined service scope, delivery responsibilities, and agreed reporting rhythm.",
    includes: ["Responsibilities are agreed upfront", "Progress and outcomes stay visible"],
  },
  {
    id: "project",
    number: "03",
    icon: Rocket,
    title: "Project-Based Solution",
    summary: "Bring in specialist support for a defined project.",
    bestFor: "Specific deliverables and time-bound initiatives",
    setup: "A project scope, milestones, and deliverables shaped around your objective.",
    includes: ["A clear project outcome and scope", "Specialist skills matched to the work"],
  },
] as const;

export function EngagementModelsPage() {
  const [selectedModelId, setSelectedModelId] =
    useState<(typeof engagementModels)[number]["id"]>("team");
  const selectedModel = engagementModels.find((model) => model.id === selectedModelId);

  if (!selectedModel) {
    throw new Error(`Unknown engagement model: ${selectedModelId}`);
  }

  const SelectedIcon = selectedModel.icon;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="overflow-hidden bg-ink px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-5">Why Quorisx</p>
              <h1 className="max-w-4xl font-display text-5xl leading-[1.04] text-ink-foreground sm:text-6xl md:text-7xl">
                Engagement models that fit the work.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
                Choose how you want to work with Quorisx—from adding dedicated team members to
                handing off a function or delivering a specific project.
              </p>
              <a
                href="#choose-model"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Find your fit <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div className="relative rounded-2xl border border-ink-border bg-ink-foreground/[0.035] p-6 md:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-accent/15"
              />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  A flexible partnership
                </p>
                <h2 className="mt-4 font-display text-3xl text-ink-foreground">
                  One partner. Three ways to work.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Start with the model that matches your needs. We’ll shape the details together.
                </p>
                <div className="mt-7 flex items-center gap-3">
                  {engagementModels.map(({ id, number, title }, index) => (
                    <div key={id} className="flex min-w-0 flex-1 items-center gap-2">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                          id === selectedModelId
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-ink-border text-ink-muted"
                        }`}
                      >
                        {number}
                      </span>
                      {index < engagementModels.length - 1 && (
                        <span className="h-px flex-1 bg-ink-border" />
                      )}
                      <span className="sr-only">{title}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-ink-muted">
                  Currently exploring:{" "}
                  <span className="font-semibold text-ink-foreground">{selectedModel.title}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="choose-model" className="scroll-mt-24 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">Choose your model</p>
              <h2 className="font-display text-3xl leading-tight md:text-5xl">
                What kind of support are you looking for?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Select an option to see how that engagement can work for your business.
              </p>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3" aria-label="Engagement model options">
              {engagementModels.map(({ id, number, icon: Icon, title, summary }) => {
                const isSelected = id === selectedModelId;

                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedModelId(id)}
                    className={`group rounded-xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isSelected
                        ? "border-accent bg-accent/[0.06] shadow-sm"
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span
                        className={`inline-flex rounded-lg p-3 ${
                          isSelected
                            ? "bg-accent text-accent-foreground"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold tracking-[0.16em] text-muted-foreground">
                        {number}
                      </span>
                    </span>
                    <span className="mt-5 block font-display text-2xl">{title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {summary}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                      {isSelected ? (
                        <>
                          Selected <CircleCheck aria-hidden="true" className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Explore model <ArrowRight aria-hidden="true" className="h-4 w-4" />
                        </>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              aria-live="polite"
              className="mt-5 grid overflow-hidden rounded-2xl border bg-card lg:grid-cols-[0.75fr_1.25fr]"
            >
              <div className="bg-ink p-6 text-ink-foreground md:p-9">
                <p className="eyebrow mb-4">Your selected model</p>
                <span className="inline-flex rounded-lg bg-accent/15 p-3 text-accent">
                  <SelectedIcon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-3xl">{selectedModel.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {selectedModel.summary}
                </p>
                <p className="mt-6 border-t border-ink-border pt-5 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  A good fit for
                </p>
                <p className="mt-2 text-sm text-ink-foreground">{selectedModel.bestFor}</p>
              </div>
              <div className="p-6 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  How it can work
                </p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {selectedModel.setup}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {selectedModel.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact#inquiry"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Discuss this model <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="eyebrow mb-3">Not sure yet?</p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Start with the outcome you need.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We’ll learn about your goals, recommend a practical starting point, and agree on
                scope and responsibilities together.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-5">
                <Layers3 aria-hidden="true" className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-semibold">A clear starting scope</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Define the work, ownership, communication, and what success looks like.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <CircleCheck aria-hidden="true" className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-semibold">Room to adapt</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Adjust the setup as priorities change, based on the agreed engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
