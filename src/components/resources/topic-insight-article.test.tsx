import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  additionalInsights,
  marketingSeoInsights,
  paidAdsInsights,
} from "@/lib/editorial-articles";

import { TopicInsightArticle } from "./topic-insight-article";

describe("TopicInsightArticle", () => {
  it("renders the selected article content, table of contents, and valid related links", () => {
    const insight = paidAdsInsights[0];
    render(<TopicInsightArticle insight={insight} />);

    expect(screen.getByRole("heading", { level: 1, name: insight.title })).toBeInTheDocument();
    expect(screen.getByText(insight.dek)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: insight.imageAlt })).toHaveAttribute(
      "src",
      insight.image,
    );
    expect(screen.getByRole("heading", { name: insight.sections[0].heading })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Practical next steps" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Keep the next decision clear." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Talk with our team about your goals/ }),
    ).toHaveAttribute("href", "/contact#inquiry");
  });

  it.each([...additionalInsights, ...marketingSeoInsights])(
    "renders the $topic article category in its breadcrumb and hero",
    (insight) => {
      render(<TopicInsightArticle insight={insight} />);

      expect(screen.getByRole("heading", { level: 1, name: insight.title })).toBeInTheDocument();
      expect(screen.getByText(insight.category)).toBeInTheDocument();
      expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toHaveTextContent(
        insight.topic === "sales"
          ? "Sales & Growth"
          : insight.topic === "ai-automation"
            ? "AI & Automation"
            : insight.topic === "customer-experience"
              ? "Customer Experience"
              : "Marketing & Visibility",
      );
    },
  );
});
