import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { marketingSeoInsights } from "@/lib/editorial-articles";

import { DigitalMarketingSeoPage } from "./digital-marketing-seo";

describe("DigitalMarketingSeoPage", () => {
  it("presents the requested marketing and SEO sections", () => {
    render(<DigitalMarketingSeoPage />);

    expect(
      screen.getByRole("heading", { name: /Be There When Customers Are Ready/i }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /Most Businesses Are Invisible Where It Matters/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /The Business That Gets Found, Gets the Customer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Visibility that works for your business/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /We don’t just “do SEO”\. We build a connected plan/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Stop Losing Customers to Businesses That Rank Higher/i,
      }),
    ).toBeInTheDocument();
  }, 10_000);

  it("shows a useful services mix and clear contact and audit calls to action", () => {
    render(<DigitalMarketingSeoPage />);

    expect(
      screen.getByRole("heading", { name: /Marketing that drives real enquiries and sales/i }),
    ).toBeInTheDocument();

    for (const serviceGroup of ["Search & Organic", "Paid Advertising", "Growth & Conversion"]) {
      expect(screen.getByRole("heading", { name: serviceGroup })).toBeInTheDocument();
    }

    for (const service of [
      "SEO",
      "Local SEO",
      "Google Ads",
      "Meta Ads (Facebook & Instagram)",
      "Retargeting Campaigns",
      "Content Marketing",
      "Email Marketing",
      "Funnel Marketing",
      "Marketing Automation",
      "Conversion Rate Optimisation",
      "Analytics & Tracking Setup",
      "Landing Page Optimisation",
    ]) {
      expect(screen.getByText(service, { selector: "strong" })).toBeInTheDocument();
    }

    for (const approach of [
      "Keyword & competitor research",
      "On-page & technical SEO",
      "Search-intent content",
      "Local SEO & Google Business Profile",
      "Link building & authority",
      "Tracking & continuous improvement",
    ]) {
      expect(screen.getByRole("heading", { name: approach })).toBeInTheDocument();
    }

    expect(screen.getAllByRole("link", { name: /Free SEO Audit/i })).toHaveLength(3);
    expect(screen.getAllByRole("link", { name: /Talk to Our Team/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Plan this service mix/i })).toHaveLength(3);
    expect(screen.getByText(/without promising a specific ranking or result/i)).toBeInTheDocument();
    expect(screen.getByText(/Appear when people search/i)).toBeInTheDocument();
  }, 10_000);

  it("animates the hero only and keeps its redesigned image layout", () => {
    render(<DigitalMarketingSeoPage />);

    expect(document.querySelectorAll(".dm-hero-copy [data-dm-hero-entry]")).toHaveLength(5);
    expect(document.querySelector("main.dm-page")).toHaveAttribute("data-disable-hero-reveal");
    expect(document.querySelector(".dm-hero")).toBeInTheDocument();
    expect(document.querySelector(".dm-hero-layout")).toBeInTheDocument();
    const heroImage = document.querySelector(".dm-hero-visual img");
    expect(heroImage).toHaveAttribute("src", "/marketing.png");
    expect(heroImage).toHaveAttribute(
      "alt",
      "A marketing team collaborating on brand and campaign ideas",
    );
    expect(document.querySelector(".dm-hero-services")).not.toBeInTheDocument();
    expect(document.querySelector(".dm-scroll-cue")).not.toBeInTheDocument();
    expect(document.querySelector(".dm-hero-journey")).not.toBeInTheDocument();
    expect(
      document.querySelectorAll("[data-dm-reveal], .dm-reveal-ready, .dm-revealed"),
    ).toHaveLength(0);
  }, 10_000);

  it("shows relevant SEO articles with working Insights links", () => {
    const { container } = render(<DigitalMarketingSeoPage />);
    const insightsSection = container.querySelector(".dm-insights");

    expect(insightsSection).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Practical ideas for getting found." }),
    ).toBeInTheDocument();
    expect(insightsSection?.querySelectorAll(".topic-insights__card")).toHaveLength(3);
    expect(
      [
        ...(insightsSection?.querySelectorAll<HTMLImageElement>(".topic-insights__image img") ??
          []),
      ].map((image) => image.getAttribute("src")),
    ).toEqual(["/seo1.png", "/seo2.png", "/seo3.png"]);

    for (const article of marketingSeoInsights) {
      expect(screen.getByRole("link", { name: article.title }).getAttribute("href")).toBe(
        `/resources/insights/${article.slug}`,
      );
    }
  }, 10_000);
});
