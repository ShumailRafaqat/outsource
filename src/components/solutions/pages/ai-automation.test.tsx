import { act, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { additionalInsights } from "@/lib/editorial-articles";

import { AiAutomationPage } from "./ai-automation";

describe("AiAutomationPage", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("presents the requested automation story and all page sections", () => {
    render(<AiAutomationPage />);

    for (const heading of [
      /Still Doing Manually What AI Can Handle/i,
      /Busy Doesn’t Always Mean Productive/i,
      /Where Does Your Business Stand Today/i,
      /Make routine work run more smoothly/i,
      /What Changes After Automation/i,
      /Thoughtful automation\. From first look to live/i,
      /Could your business benefit from automation/i,
      /Stop Losing Time on Work That Can Be Automated/i,
    ]) {
      expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    }
  }, 10_000);

  it("includes practical capabilities, benefits, workflow steps, and working CTAs", () => {
    render(<AiAutomationPage />);

    const capabilities = document.querySelector("#ai-capabilities");
    expect(capabilities).toBeInTheDocument();
    for (const title of [
      "Customer support & instant replies",
      "Lead follow-up & nurturing",
      "Data entry & admin tasks",
      "Internal workflows & approvals",
      "Appointment booking & reminders",
      "CRM updates & notifications",
      "Report generation",
      "Live support integration",
    ]) {
      expect(
        within(capabilities as HTMLElement).getByRole("heading", { name: title }),
      ).toBeInTheDocument();
    }

    for (const benefit of [
      "Faster responses to customers",
      "Fewer missed leads and follow-ups",
      "Less repetitive work for your team",
      "More consistent processes",
      "Handle more volume without immediately hiring",
      "Make better use of your team’s time",
      "Clearer tracking and reporting",
    ]) {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    }

    expect(screen.getByRole("heading", { name: "Understand your workflows" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Support & improve" })).toBeInTheDocument();
    expect(
      within(screen.getByRole("main")).getAllByRole("link", { name: /Talk to Our Team/i }),
    ).toHaveLength(2);
    expect(screen.getByRole("link", { name: /See What’s Possible/i })).toHaveAttribute(
      "href",
      "#ai-capabilities",
    );
    const insightsSection = document.querySelector(".ai-insights");
    expect(
      within(insightsSection as HTMLElement).getByRole("heading", {
        name: "Real workflows. Useful automation ideas.",
      }),
    ).toBeInTheDocument();
    expect(insightsSection?.querySelectorAll(".topic-insights__card")).toHaveLength(3);
    const aiArticles = additionalInsights
      .filter(({ topic }) => topic === "ai-automation")
      .slice(0, 3);
    expect(
      [
        ...(insightsSection?.querySelectorAll<HTMLImageElement>(".topic-insights__image img") ??
          []),
      ].map((image) => image.getAttribute("src")),
    ).toEqual(["/ai1.png", "/ai2.png", "/ai3.png"]);
    expect(
      additionalInsights.find(
        ({ slug }) => slug === "create-safe-human-review-points-for-ai-workflows",
      )?.image,
    ).toBe("/new.png");
    for (const article of aiArticles) {
      expect(
        within(insightsSection as HTMLElement).getByRole("link", { name: article.title }),
      ).toHaveAttribute("href", `/resources/insights/${article.slug}`);
    }
  }, 10_000);

  it("reveals each section as it scrolls into view", () => {
    const observedElements: Element[] = [];
    let intersectionCallback: IntersectionObserverCallback | undefined;

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        intersectionCallback = callback;
      }

      observe(element: Element) {
        observedElements.push(element);
      }

      unobserve = vi.fn();
      disconnect = vi.fn();
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    const { container } = render(<AiAutomationPage />);
    const sections = Array.from(container.querySelectorAll(".ai-page > section"));
    const hero = sections[0];

    expect(sections).toHaveLength(9);
    expect(observedElements).toEqual(expect.arrayContaining(sections));
    expect(container.querySelector(".expertise-scroll-motion-active")).toBeInTheDocument();
    expect(hero).toHaveAttribute("data-expertise-reveal", "section");

    act(() => {
      intersectionCallback?.(
        [{ target: hero, isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      );
    });

    expect(hero).toHaveClass("expertise-scroll-motion-visible");
  }, 10_000);
});
