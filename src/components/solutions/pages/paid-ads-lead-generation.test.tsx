import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { paidAdsInsights } from "@/lib/editorial-articles";

import { PaidAdsLeadGenerationPage } from "./paid-ads-lead-generation";

describe("PaidAdsLeadGenerationPage", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("presents the campaign story, all nine sections, and the interactive dashboard", () => {
    const { container } = render(<PaidAdsLeadGenerationPage />);

    for (const heading of [
      /More Than Clicks\. More Opportunities to Grow\./i,
      /You're Paying for Attention\. But What Happens Next\?/i,
      /From the First Click to the First Conversation\./i,
      /Every Campaign Has Moving Parts\. We Bring Them Together\./i,
      /Different Businesses\. Different Paths to the Right Customer\./i,
      /Better Decisions Start With Better Visibility\./i,
      /A Lead Is Only the Beginning\./i,
      /Good Questions\. Clear Answers\./i,
      /Let's Build a Campaign Around Your Business Goals\./i,
    ]) {
      expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    }

    expect(container.querySelectorAll(".paid-ads-page > section")).toHaveLength(9);
    expect(container.querySelectorAll(".paid-ads-page [data-expertise-reveal]")).toHaveLength(0);
    expect(container.querySelector(".pa-hero")).toHaveAttribute("data-custom-hero-intro");
    expect(container.querySelector("#pa-hero-title")).toHaveAttribute(
      "data-pa-hero-entry",
      "heading",
    );
    expect(container.querySelector(".pa-hero-description")).toHaveAttribute(
      "data-pa-hero-entry",
      "description",
    );
    expect(container.querySelector(".pa-hero-actions")).toHaveAttribute(
      "data-pa-hero-entry",
      "actions",
    );
    expect(screen.getAllByText("$18")).toHaveLength(2);
    expect(screen.queryByText("$38.75")).not.toBeInTheDocument();
    expect(screen.queryByText("$38.57")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Illustrative campaign journey dashboard")).toBeInTheDocument();
    expect(
      screen.getByText("Illustrative campaign view. Actual results vary by business and campaign."),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Plan My Campaign/i })).toHaveAttribute(
      "href",
      "/contact?service=paid-ads#inquiry",
    );
    expect(screen.getByRole("link", { name: /Explore How It Works/i })).toHaveAttribute(
      "href",
      "#pa-customer-journey",
    );
  }, 10_000);

  it("shows the four paid-ad challenges and the five-step customer journey", () => {
    render(<PaidAdsLeadGenerationPage />);

    for (const challenge of [
      "Clicks without enquiries",
      "Enquiries that do not fit",
      "Follow-up that comes too late",
      "Spend without a clear view",
    ]) {
      expect(screen.getByRole("heading", { name: challenge })).toBeInTheDocument();
    }
    expect(document.querySelectorAll(".pa-problem-card img")).toHaveLength(0);
    expect(document.querySelectorAll(".pa-problem-mark svg")).toHaveLength(4);

    const journey = document.querySelector("#pa-customer-journey");
    expect(journey).toBeInTheDocument();
    expect(within(journey as HTMLElement).getAllByRole("heading", { level: 3 })).toHaveLength(5);
    expect(
      screen.getByText("An illustrative journey — actual customer paths vary."),
    ).toBeInTheDocument();
  });

  it("reveals the hero, sections, and cards as they enter the viewport", () => {
    const observedElements: Element[] = [];
    const intersectionCallbacks: IntersectionObserverCallback[] = [];

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        intersectionCallbacks.push(callback);
      }

      observe(element: Element) {
        observedElements.push(element);
      }

      unobserve = vi.fn();
      disconnect = vi.fn();
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    const { container } = render(<PaidAdsLeadGenerationPage />);
    const hero = container.querySelector(".pa-hero") as HTMLElement;
    const scenarioCard = container.querySelector(".pa-scenario-card") as HTMLElement;

    expect(container.querySelector(".expertise-scroll-motion-active")).toBeInTheDocument();
    expect(hero).toHaveAttribute("data-expertise-reveal", "section");
    expect(hero.querySelector("[data-role-hero-intro]")).toBeNull();
    expect(scenarioCard).toHaveAttribute("data-expertise-reveal", "card");
    expect(observedElements).toEqual(expect.arrayContaining([hero, scenarioCard]));

    act(() => {
      intersectionCallbacks[0]?.(
        [
          { target: hero, isIntersecting: true },
          { target: scenarioCard, isIntersecting: true },
        ] as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      );
    });

    expect(hero).toHaveClass("expertise-scroll-motion-visible");
    expect(scenarioCard).toHaveClass("expertise-scroll-motion-visible");
  });

  it("opens service explanations with practical examples and includes scenario imagery", () => {
    const { container } = render(<PaidAdsLeadGenerationPage />);

    for (const service of [
      "Google Ads Management",
      "Meta Ads Management",
      "Audience Research & Targeting",
      "Landing Page Optimization",
      "Conversion Tracking & Analytics",
      "Lead Capture & Follow-up Integration",
    ]) {
      expect(screen.getByText(service)).toBeInTheDocument();
    }

    const googleAdsSummary = screen.getByText("Google Ads Management").closest("summary");
    expect(googleAdsSummary).toBeInTheDocument();
    fireEvent.click(googleAdsSummary as HTMLElement);
    const googleAdsDetails = googleAdsSummary?.closest("details") as HTMLElement;
    expect(within(googleAdsDetails).getByText("Practical example")).toBeInTheDocument();
    expect(
      within(googleAdsDetails).getByText(/home-services company can focus its search ads/i),
    ).toBeInTheDocument();
    expect(googleAdsSummary?.closest("details")).toHaveAttribute("open");

    const metaAdsSummary = screen.getByText("Meta Ads Management").closest("summary");
    fireEvent.click(metaAdsSummary as HTMLElement);
    expect(googleAdsSummary?.closest("details")).toHaveAttribute("open");
    expect(metaAdsSummary?.closest("details")).toHaveAttribute("open");
    expect(
      within(metaAdsSummary?.closest("details") as HTMLElement).getByText(
        /local clinic can promote a specific service/i,
      ),
    ).toBeInTheDocument();

    const scenarios = container.querySelectorAll(".pa-scenario-card");
    expect(scenarios).toHaveLength(3);
    expect(
      Array.from(scenarios).map((scenario) => scenario.querySelector("h3")?.textContent),
    ).toEqual(["Real Estate", "Healthcare", "E-commerce"]);
    expect(
      Array.from(scenarios).map((scenario) => scenario.querySelector("img")?.getAttribute("src")),
    ).toEqual(["/realstate.png", "/healthcare.png", "/E-commerce.png"]);
  }, 10_000);

  it("explains campaign visibility, lead follow-up, FAQs, and related Quorisx services", () => {
    const { container } = render(<PaidAdsLeadGenerationPage />);

    for (const phase of [
      "Plan around the goal",
      "Test audience and creative",
      "Track meaningful actions",
      "Improve and report",
    ]) {
      expect(screen.getByRole("heading", { name: phase })).toBeInTheDocument();
    }

    for (const step of ["Capture", "Route", "Qualify", "Follow up"]) {
      expect(screen.getByText(step)).toBeInTheDocument();
    }

    expect(screen.getByRole("link", { name: /Sales & Revenue Growth/ })).toHaveAttribute(
      "href",
      "/expertise/sales-development",
    );
    expect(screen.getByRole("link", { name: /Customer Support/ })).toHaveAttribute(
      "href",
      "/expertise/customer-service",
    );

    for (const question of [
      "Which advertising platforms can you manage?",
      "How much should we budget for advertising?",
      "Can you set up a new campaign from scratch?",
      "What will campaign reporting include?",
      "How long does it take to see results?",
      "How do you help improve lead quality?",
      "Do we need a dedicated landing page?",
      "Can you help with lead follow-up after a form is submitted?",
    ]) {
      expect(screen.getByText(question)).toBeInTheDocument();
    }

    expect(screen.getByRole("link", { name: /Discuss My Campaign/ })).toHaveAttribute(
      "href",
      "/contact?service=paid-ads#inquiry",
    );
    const insightLinks = Array.from(container.querySelectorAll(".pa-insight-link"));
    expect(insightLinks).toHaveLength(9);
    expect(insightLinks.map((link) => link.getAttribute("href")).sort()).toEqual(
      paidAdsInsights.map((insight) => `/resources/insights/${insight.slug}`).sort(),
    );
  });
});
