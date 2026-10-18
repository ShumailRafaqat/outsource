import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { EditorialInsightArticle } from "./editorial-insight-article";

describe("EditorialInsightArticle", () => {
  it("presents an illustrative scenario, a clear action plan, and contextual next steps", () => {
    render(<EditorialInsightArticle />);

    expect(
      screen.getByRole("heading", {
        name: "What Happens When Customers Need Help After Business Hours?",
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Illustrative scenario · not a client case")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "A practical plan you can put into motion" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBeGreaterThanOrEqual(15);
    expect(
      screen.getByRole("link", { name: /Explore Customer Services & Support/ }),
    ).toHaveAttribute("href", "/expertise/customer-service");
    expect(screen.getByRole("button", { name: "Copy link" })).toBeInTheDocument();
    expect(document.querySelector('script[type="application/ld+json"]')).toHaveTextContent(
      '"@type":"BlogPosting"',
    );
  });
});
