import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { getWebsiteArticle } from "@/lib/website-articles";

import { WebsiteArticleDetail } from "./website-article-detail";

describe("WebsiteArticleDetail", () => {
  it("renders the complete recommendation-to-website article and its next step", () => {
    const article = getWebsiteArticle("they-heard-about-you-then-they-googled-you");
    if (!article) throw new Error("Expected the new website insight to be available.");

    render(<WebsiteArticleDetail article={article} />);

    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("data-disable-hero-reveal");
    expect(
      within(main).getByRole("heading", {
        level: 1,
        name: "They Heard About You. Then They Googled You.",
      }),
    ).toBeInTheDocument();
    expect(
      within(main).getByText(
        "A recommendation gets your name into the conversation. Your website helps people decide whether to take that conversation further.",
      ),
    ).toBeInTheDocument();
    expect(main.querySelector("time")).not.toBeInTheDocument();
    expect(
      within(main).getByText(
        "Someone mentions your business to a friend. They sound interested, save your name, and look you up later. Before they call, they want to see what you offer, whether you understand their needs, and what working with you might look like.",
      ),
    ).toBeInTheDocument();
    expect(
      within(main).getByText(
        "What they find can make that next step easier—or leave them searching for answers. A useful website brings your services, work, and contact details together, giving potential customers a clearer reason to get in touch.",
      ),
    ).toBeInTheDocument();

    const articleBody = main.querySelector('[itemprop="articleBody"]') as HTMLElement;
    expect(articleBody.querySelectorAll(".wd-article-section")).toHaveLength(7);
    expect(main.querySelector(".wd-article-editorial-header")).toBeInTheDocument();
    expect(main.querySelector(".wd-article-editorial-image")).toBeInTheDocument();
    expect(main.querySelector(".wd-article-editorial-top")).toBeInTheDocument();
    expect(main.querySelector(".wd-article-editorial-header h1")).toHaveAttribute(
      "data-article-reveal",
      "title",
    );
    expect(articleBody.querySelectorAll('[data-article-reveal="section"]')).toHaveLength(9);
    expect(main.querySelectorAll(".wd-article-toc nav a")).toHaveLength(8);
    expect(main.querySelector(".wd-article-toc nav a")).toHaveAttribute(
      "href",
      "#wd-article-section-1",
    );
    expect(
      within(articleBody).getByRole("heading", {
        name: "The First Visit Often Happens Before the First Conversation",
      }),
    ).toBeInTheDocument();
    expect(
      within(articleBody).getByRole("heading", { name: "A Quick Check for Your Business" }),
    ).toBeInTheDocument();
    expect(
      within(articleBody).getByRole("link", { name: /Discuss Your Website/i }),
    ).toHaveAttribute("href", "/solutions/website-development#wd-audit");
    expect(
      within(articleBody).getByRole("heading", {
        name: "Give a Good Recommendation Somewhere to Lead",
      }),
    ).toBeInTheDocument();
  });

  it.each([
    {
      slug: "looks-impressive-but-what-do-you-actually-do",
      title: "Looks Impressive. But What Do You Actually Do?",
      sectionCount: 7,
      checklistTitle: "A Quick Clarity Check",
      cta: "Let’s Clarify Your Website",
      listCount: 13,
    },
    {
      slug: "they-clicked-they-waited-did-they-stay",
      title: "They Clicked. They Waited. Did They Stay?",
      sectionCount: 8,
      checklistTitle: "A Quick Performance Check",
      cta: "Discuss Your Website’s Performance",
      listCount: 3,
    },
    {
      slug: "your-website-looks-great-on-your-laptop-what-about-their-phone",
      title: "Your Website Looks Great on Your Laptop. What About Their Phone?",
      sectionCount: 9,
      checklistTitle: "A Quick Mobile Experience Check",
      cta: "Discuss Your Mobile Experience",
      listCount: 0,
    },
  ])(
    "renders the dedicated article page for $title",
    ({ slug, title, sectionCount, checklistTitle, cta, listCount }) => {
      const article = getWebsiteArticle(slug);
      if (!article) throw new Error(`Expected article "${slug}" to be available.`);

      render(<WebsiteArticleDetail article={article} />);

      const main = screen.getByRole("main");
      const articleBody = main.querySelector('[itemprop="articleBody"]') as HTMLElement;
      expect(within(main).getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
      expect(articleBody.querySelectorAll(".wd-article-section")).toHaveLength(sectionCount);
      expect(articleBody.querySelectorAll(".wd-article-section-list li")).toHaveLength(listCount);
      expect(
        within(articleBody).getByRole("heading", { name: checklistTitle }),
      ).toBeInTheDocument();
      expect(within(articleBody).getByRole("link", { name: cta })).toHaveAttribute(
        "href",
        "/solutions/website-development#wd-audit",
      );
    },
  );
});
