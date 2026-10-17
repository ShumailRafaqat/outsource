import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeAll, afterAll, describe, expect, it, vi } from "vitest";

import { WebsiteDevelopmentPage } from "./website-development";

describe("WebsiteDevelopmentPage", () => {
  beforeAll(() => {
    if (typeof HTMLDialogElement.prototype.showModal !== "function") {
      Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
        configurable: true,
        value: function (this: HTMLDialogElement) {
          this.setAttribute("open", "");
        },
      });
    }
    if (typeof HTMLDialogElement.prototype.close !== "function") {
      Object.defineProperty(HTMLDialogElement.prototype, "close", {
        configurable: true,
        value: function (this: HTMLDialogElement) {
          this.removeAttribute("open");
          this.dispatchEvent(new Event("close"));
        },
      });
    }
    vi.spyOn(HTMLDialogElement.prototype, "showModal").mockImplementation(function (
      this: HTMLDialogElement,
    ) {
      this.setAttribute("open", "");
    });
    vi.spyOn(HTMLDialogElement.prototype, "close").mockImplementation(function (
      this: HTMLDialogElement,
    ) {
      this.removeAttribute("open");
      this.dispatchEvent(new Event("close"));
    });
  });
  afterAll(() => vi.restoreAllMocks());
  it("uses regular document flow for sections instead of sticky stacking", () => {
    render(<WebsiteDevelopmentPage />);

    const page = document.querySelector(".wd-page");
    const panels = document.querySelectorAll(".wd-scroll-panel");

    expect(page).not.toHaveClass("wd-scroll-stack");
    expect(panels.length).toBeGreaterThan(1);
    panels.forEach((panel) => {
      expect((panel as HTMLElement).style.position).not.toBe("sticky");
      expect((panel as HTMLElement).style.getPropertyValue("--wd-panel-top")).toBe("");
    });
  });

  it("keeps the website path choices without rendering the removed detail panel", () => {
    render(<WebsiteDevelopmentPage />);

    expect(
      screen.getByRole("heading", { name: "Give people a reason to choose your business." }),
    ).toBeInTheDocument();
    expect(screen.getByText("WEBSITE DESIGN & DEVELOPMENT")).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Your website should make it easy to understand what you offer, trust your business, and take the next step.",
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "Whether you’re starting fresh or improving a website that isn’t bringing enquiries, we build fast, mobile-friendly websites that turn interest into action.",
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(
        "Your website isn't just a digital address. It's your business identity, your first impression, and your opportunity to stand out.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Build My Website/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Improve My Existing Website/i })).toBeInTheDocument();
    expect(document.querySelector(".wd-hero-visual")).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "A software development team building and reviewing a website together in a modern studio",
      ),
    ).toHaveAttribute("src", "/software_dev_team_separate.png");
    expect(document.querySelector(".wd-hero-preview")).not.toBeInTheDocument();
    expect(document.querySelector(".wd-hero-visual-note")).not.toBeInTheDocument();
    expect(document.querySelector(".wd-hero-background")).not.toBeInTheDocument();
    expect(document.querySelector(".wd-essentials")).not.toBeInTheDocument();

    const pathNavigation = document.querySelector(".wd-path-tabs");
    const pathLinks = within(pathNavigation as HTMLElement);
    const existingWebsiteChoice = pathLinks.getByRole("link", {
      name: /I already have a website/i,
    });
    const firstWebsiteChoice = pathLinks.getByRole("link", {
      name: /I need my first website/i,
    });

    expect(existingWebsiteChoice).toHaveAttribute("aria-current", "location");
    expect(existingWebsiteChoice).toHaveAttribute("href", "#website-health-check");
    expect(firstWebsiteChoice).not.toHaveAttribute("aria-current");
    expect(firstWebsiteChoice).toHaveAttribute("href", "#wd-audit");
    expect(screen.getByText("PATH 01 / EXISTING WEBSITE")).toBeInTheDocument();
    expect(screen.getByText("PATH 02 / FIRST WEBSITE")).toBeInTheDocument();
    expect(screen.getByText("See the quick checks")).toHaveClass("wd-path-tab-arrow");
    expect(screen.getByText("Plan your first website")).toHaveClass("wd-path-tab-arrow");
    expect(
      screen.getByRole("heading", { name: /Where are you starting from/i }),
    ).toBeInTheDocument();
    expect(document.querySelector(".wd-path-panel")).not.toBeInTheDocument();
    expect(document.querySelector("#first-website-reality")).not.toBeInTheDocument();
    expect(document.querySelector("#website-health-check")).toBeInTheDocument();

    fireEvent.click(firstWebsiteChoice);

    expect(firstWebsiteChoice).toHaveAttribute("aria-current", "location");
    expect(existingWebsiteChoice).not.toHaveAttribute("aria-current");
    expect(firstWebsiteChoice).toHaveAttribute("href", "#wd-audit");
    expect(document.querySelector("#first-website-reality")).not.toBeInTheDocument();
    expect(document.querySelector(".wd-reality-section")).not.toBeInTheDocument();
  });

  it("renders an interactive seven-point website health check for existing-site visitors", () => {
    render(<WebsiteDevelopmentPage />);

    expect(
      screen.getByRole("heading", { name: /Your Website Exists\. But Is It Actually Working\?/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Most businesses already have a website\. Very few get consistent enquiries from it/i,
      ),
    ).toBeInTheDocument();

    const questions = [
      /Do you appear when people search for your services on Google/i,
      /Is your website easy to use on a mobile phone/i,
      /Can a visitor understand what you do within 5 seconds/i,
      /Does your website load quickly/i,
      /Is it easy for visitors to contact you/i,
      /Does your website look professional and build trust/i,
      /Are you getting regular enquiries from your website/i,
    ];
    const questionButtons = questions.map((question) =>
      screen.getByRole("button", { name: question }),
    );
    expect(questionButtons).toHaveLength(7);
    expect(questionButtons[0]).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/weak or missing SEO/i)).toBeInTheDocument();

    fireEvent.click(questionButtons[1]);
    expect(questionButtons[0]).toHaveAttribute("aria-expanded", "false");
    expect(questionButtons[1]).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/Most people browse on mobile/i)).toBeInTheDocument();

    fireEvent.click(questionButtons[1]);
    expect(questionButtons[1]).toHaveAttribute("aria-expanded", "false");

    expect(
      screen.getByText(
        /These 7 questions are just the starting point\. A strong website needs the right design, structure, speed, clarity, and conversion elements working together/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/We’ll audit your website for free and show you what’s missing/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get a Free Website Audit/i })).toHaveAttribute(
      "href",
      "#wd-audit",
    );
    const closingActions = within(document.querySelector(".wd-close-actions") as HTMLElement);
    expect(closingActions.getByRole("link", { name: /Talk to our team/i })).toHaveClass(
      "wd-close-secondary",
    );
    expect(closingActions.getByRole("link", { name: /Talk to our team/i })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );

    expect(document.querySelector("#first-website-reality")).not.toBeInTheDocument();
    expect(document.querySelector("#website-health-check")).toBeInTheDocument();
  });

  it("adds a competition and visibility section before the website health check", () => {
    render(<WebsiteDevelopmentPage />);

    const websiteCheck = document.querySelector("#website-health-check");
    const competition = document.querySelector(".wd-competition-section") as HTMLElement;
    expect(
      competition.compareDocumentPosition(websiteCheck as Node) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(within(competition).getByText("VISIBILITY THAT CONVERTS")).toBeInTheDocument();
    expect(
      within(competition).getByRole("heading", { name: "Don't Just Appear. Get Chosen." }),
    ).toBeInTheDocument();
    expect(
      within(competition).getByText(
        "Turn online searches into real customer connections with a stronger digital presence.",
      ),
    ).toBeInTheDocument();
    expect(
      within(competition).getByRole("link", { name: /Grow Your Visibility/i }),
    ).toHaveAttribute("href", "#wd-audit");
    expect(
      within(competition).getByRole("img", {
        name: /Four phone screens show a customer searching Google/i,
      }),
    ).toHaveAttribute("src", "/mobile.png");
    expect(document.querySelector(".wd-visibility-feature")).toHaveAttribute("data-wd-reveal");
    expect(within(competition).getByText("THE CUSTOMER JOURNEY")).toBeInTheDocument();
    expect(
      document
        .querySelector(".wd-visibility-image")
        ?.compareDocumentPosition(document.querySelector(".wd-visibility-copy") as Node) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    const supportPromo = competition.querySelector(".wd-support-promo");
    expect(supportPromo).toHaveAttribute("data-wd-reveal");
    expect(
      within(supportPromo as HTMLElement).getByRole("heading", {
        name: "Your Website Is Open. Is Your Support?",
      }),
    ).toBeInTheDocument();
    expect(
      within(supportPromo as HTMLElement).getByText(
        "A checkout issue shouldn’t end a purchase. Give visitors help when they need it with 24/7 support.",
      ),
    ).toBeInTheDocument();
    expect(
      within(supportPromo as HTMLElement).getByRole("link", { name: /Explore 24\/7 Support/i }),
    ).toHaveAttribute("href", "#wd-support-title");
    expect(
      within(supportPromo as HTMLElement).getByRole("img", {
        name: /Four stages show a customer ready to buy/i,
      }),
    ).toHaveAttribute("src", "/sen.png");
    expect(
      supportPromo?.compareDocumentPosition(
        competition.querySelector(".wd-visibility-feature") as Node,
      ) & Node.DOCUMENT_POSITION_PRECEDING,
    ).toBeTruthy();
  });

  it("does not render the removed visibility reality-check section", () => {
    render(<WebsiteDevelopmentPage />);

    expect(document.querySelector(".wd-reality-section")).not.toBeInTheDocument();
    expect(screen.queryByText("VISIBILITY IS THE FIRST STEP")).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Where are you starting from/i }),
    ).toBeInTheDocument();
  });

  it("removes the first-website reality-check section", () => {
    render(<WebsiteDevelopmentPage />);

    expect(document.querySelector("#first-website-reality")).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /If You Don’t Have a Website Yet/i })).toBeNull();
    expect(screen.queryByLabelText("How an online presence supports enquiries")).toBeNull();
  });

  it("shows the requested technology stack, process, support, and audit form", () => {
    render(<WebsiteDevelopmentPage />);

    const stackSection = document.querySelector(".wd-stack-section") as HTMLElement;
    const stack = within(stackSection);
    const technologyNames = [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "WordPress",
      "Tailwind CSS",
      "Live Support",
      "Google Analytics",
      "Payment & CRM",
    ];
    for (const technology of technologyNames) {
      expect(
        stack.getByRole("button", { name: new RegExp(`^${technology}:`) }),
      ).toBeInTheDocument();
    }
    expect(stack.queryByText("AI Chatbot Integration")).not.toBeInTheDocument();
    expect(stack.queryByText("Google Analytics + Search Console")).not.toBeInTheDocument();
    expect(stackSection.querySelectorAll(".wd-tech-marquee-row")).toHaveLength(2);
    expect(stackSection.querySelectorAll(".wd-tech-marquee-track")).toHaveLength(2);
    expect(stackSection.querySelectorAll("button.wd-tech-item")).toHaveLength(11);
    expect(stackSection.querySelectorAll("button.wd-tech-item .wd-tech-icon svg")).toHaveLength(11);
    expect(stackSection.querySelectorAll(".wd-tech-marquee-group.is-duplicate")).toHaveLength(2);
    expect(
      stackSection.querySelectorAll(".wd-tech-marquee-group.is-duplicate .wd-tech-content strong"),
    ).toHaveLength(11);
    expect(
      Array.from(stackSection.querySelectorAll(".wd-tech-marquee-track")).every(
        (track) => track.querySelectorAll(".wd-tech-marquee-group").length === 2,
      ),
    ).toBe(true);
    expect(stackSection.querySelector(".wd-build-studio")).not.toBeInTheDocument();
    expect(
      stack.getByText(
        /We use modern and reliable technologies to build fast, scalable, and easy-to-manage websites—based on your business needs/i,
      ),
    ).toBeInTheDocument();
    const supportBeforeStack = document.querySelector(".wd-support-section");
    expect(
      supportBeforeStack?.compareDocumentPosition(stackSection) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    expect(screen.getByRole("heading", { name: /Our approach/i })).toBeInTheDocument();
    const processSection = document.querySelector(".wd-process-section") as HTMLElement;
    const process = within(processSection);
    expect(
      process.getByText(
        /We don’t just build and disappear\. We take your website from planning to a complete, search-ready launch/i,
      ),
    ).toBeInTheDocument();
    const processVideo = process.getByLabelText(
      "Video introduction to our website development approach",
    );
    expect(processVideo).toHaveAttribute("src", "/video3.mp4");
    expect(processVideo).toHaveAttribute("poster", "/video3-poster.jpg");
    expect(processVideo).toHaveAttribute("controls");
    expect(processVideo).toHaveAttribute("controlslist", "nodownload");
    expect(processVideo).toHaveAttribute("playsinline");
    expect(processVideo).toHaveAttribute("preload", "none");
    expect(
      processVideo
        .closest(".wd-process-film")
        ?.compareDocumentPosition(
          processSection.querySelector(".wd-process-header") as HTMLElement,
        ) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(processSection.querySelector(".wd-process-gallery")).not.toBeInTheDocument();
    const processSteps = [
      "Understand your audience & competition",
      "Design the experience",
      "Build for performance",
      "Full SEO foundation",
      "Google Business Profile & Local Directories",
      "Indexing & Discovery Setup",
      "Tools & Tracking",
      "Launch & Ongoing Support",
    ];
    for (const step of processSteps) {
      expect(process.getByRole("heading", { name: step })).toBeInTheDocument();
    }
    expect(processSection.querySelectorAll(".wd-process-card")).toHaveLength(8);
    expect(processSection.querySelectorAll(".wd-process-number")).toHaveLength(8);
    expect(processSection.querySelectorAll(".wd-process-kicker")).toHaveLength(8);
    expect(processSection.querySelectorAll(".wd-process-connector")).toHaveLength(7);
    expect(processSection.querySelector(".wd-process-meta")).not.toBeInTheDocument();
    for (const seoArea of [
      "Technical SEO",
      "On-page SEO",
      "SEO content structure",
      "Strong internal linking",
      "Clean site architecture",
      "3 relevant local directories included at no extra cost",
      "Important pages submitted individually",
      "Google discovery and crawl check",
      "Google Analytics",
      "Search Console",
      "Live support if required",
    ]) {
      expect(process.getByText(seoArea, { exact: true })).toBeInTheDocument();
    }
    expect(
      process.getByText(
        /From internal linking and individual page indexing to your Google Business Profile and local directory listings, we handle the important technical and visibility work during development—not after/i,
      ),
    ).toBeInTheDocument();
    const processSummary = processSection.querySelector(".wd-process-summary");
    expect(processSummary?.parentElement).toBe(processSection);
    expect(
      within(processSummary as HTMLElement).getByRole("link", {
        name: /Talk through your project/i,
      }),
    ).toHaveAttribute("href", "/contact#inquiry");
    expect(
      screen.getByRole("heading", { name: /We don’t hand over the keys/i }),
    ).toBeInTheDocument();
    const supportSection = document.querySelector(".wd-support-section") as HTMLElement;
    expect(
      within(supportSection).getByRole("heading", {
        name: /We don’t hand over the keys and disappear/i,
      }),
    ).toHaveAttribute("data-wd-reveal");
    expect(supportSection.querySelector(".wd-support-copy > .wd-eyebrow")).toHaveAttribute(
      "data-wd-reveal",
    );
    expect(supportSection.querySelector(".wd-support-copy > p:not(.wd-eyebrow)")).toHaveAttribute(
      "data-wd-reveal",
    );
    expect(supportSection.querySelector(".wd-support-points")).toHaveAttribute("data-wd-reveal");
    expect(supportSection.querySelectorAll(".wd-support-points > li")).toHaveLength(5);
    expect(
      within(supportSection).getByRole("link", { name: /Talk through your project/i }),
    ).toHaveAttribute("data-wd-reveal");
    expect(
      within(supportSection).queryByLabelText(/Video about ongoing website support/i),
    ).toBeNull();
    expect(supportSection.querySelector(".wd-support-visual")).not.toBeInTheDocument();
    expect(supportSection.querySelector("video")).not.toBeInTheDocument();
    expect(
      within(supportSection).getByText(
        /Your customers can also get live support from real agents/i,
      ),
    ).toBeInTheDocument();
    expect(within(supportSection).getByText("Updates and fixes")).toBeInTheDocument();
    expect(within(supportSection).getByText("Live support by real agents")).toBeInTheDocument();
    expect(within(supportSection).getByText("Ongoing improvements")).toBeInTheDocument();
    expect(within(supportSection).getByText("Priority support")).toBeInTheDocument();
    expect(within(supportSection).getByText("Performance monitoring")).toBeInTheDocument();
    expect(
      within(supportSection).getByRole("link", { name: /Talk through your project/i }),
    ).toHaveAttribute("href", "/contact#inquiry");
    expect(screen.getByLabelText("Website URL")).toHaveAttribute("type", "url");
    expect(screen.getByLabelText("Where should we send your report?")).toHaveAttribute(
      "type",
      "email",
    );
    expect(screen.getByRole("button", { name: /Request my free audit/i })).toBeInTheDocument();
  });

  it("links the main calls to action to the existing contact inquiry", () => {
    render(<WebsiteDevelopmentPage />);

    expect(
      screen
        .getAllByRole("link")
        .filter((link) => link.getAttribute("href") === "/contact#inquiry"),
    ).toHaveLength(3);
    expect(
      screen.queryByRole("link", { name: /Start with a free audit/i }),
    ).not.toBeInTheDocument();
  });

  it("uses a distinct, card-free closing prompt", () => {
    render(<WebsiteDevelopmentPage />);

    const closingSection = document.querySelector(".wd-close-section") as HTMLElement;
    const closing = within(closingSection);
    expect(
      closing.getByRole("heading", { name: "Tell us what’s getting in the way." }),
    ).toBeInTheDocument();
    expect(closing.getByText("A BETTER BRIEF STARTS HERE")).toBeInTheDocument();
    expect(
      closing.getByText(/A first launch, a redesign, or a website that isn’t pulling its weight/i),
    ).toBeInTheDocument();
    expect(closing.getByText("What your business does")).toBeInTheDocument();
    expect(closing.getByText("What feels difficult today")).toBeInTheDocument();
    expect(closing.getByText("What a better result looks like")).toBeInTheDocument();
    expect(closingSection.querySelector(".wd-close-journey")).not.toBeInTheDocument();
    expect(closingSection.querySelector(".wd-close-orbit")).not.toBeInTheDocument();
    expect(closing.getByRole("link", { name: /Plan my next step/i })).toHaveAttribute(
      "href",
      "#wd-audit",
    );
  });

  it("keeps technology choices selectable without the extra explanation panel", () => {
    render(<WebsiteDevelopmentPage />);
    const stackSection = document.querySelector(".wd-stack-section") as HTMLElement;
    const stack = within(stackSection);
    fireEvent.click(stack.getByRole("button", { name: /^MongoDB:/ }));
    expect(stack.getByRole("button", { name: /^MongoDB:/ })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(stack.getByRole("button", { name: /^React:/ })).toHaveAttribute("aria-pressed", "false");
    expect(stackSection.querySelector(".wd-tech-outcome")).not.toBeInTheDocument();
  });

  it("shows six crawlable, image-led insights before the audit form", () => {
    render(<WebsiteDevelopmentPage />);
    const insights = document.querySelector(".wd-insights") as HTMLElement;
    const section = within(insights);
    const cards = insights.querySelectorAll(".wd-journal-card");

    expect(
      section.getByRole("heading", {
        name: /Web Development Insights for Growing Businesses/i,
      }),
    ).toBeInTheDocument();
    expect(cards).toHaveLength(6);
    const carousel = insights.querySelector("#wd-journal-carousel") as HTMLDivElement;
    expect(carousel).toHaveAttribute("tabindex", "0");
    expect(section.getByRole("button", { name: "Show previous articles" })).toHaveAttribute(
      "aria-controls",
      "wd-journal-carousel",
    );
    expect(section.getByRole("button", { name: "Show next articles" })).toHaveAttribute(
      "aria-controls",
      "wd-journal-carousel",
    );
    expect(insights.querySelector(".wd-carousel-status")).toHaveTextContent("AUTO PLAY");
    const scrollBy = vi.fn((options: ScrollToOptions) => {
      Object.defineProperty(carousel, "scrollLeft", {
        configurable: true,
        value: options.left,
      });
    });
    const scrollTo = vi.fn();
    Object.defineProperty(carousel, "scrollBy", { configurable: true, value: scrollBy });
    Object.defineProperty(carousel, "scrollTo", { configurable: true, value: scrollTo });
    Object.defineProperty(carousel, "scrollWidth", { configurable: true, value: 1200 });
    Object.defineProperty(carousel, "clientWidth", { configurable: true, value: 500 });
    Object.defineProperty(cards[0], "getBoundingClientRect", {
      configurable: true,
      value: () => ({ width: 320 }),
    });
    fireEvent.click(section.getByRole("button", { name: "Show next articles" }));
    expect(scrollBy).toHaveBeenCalledWith({ left: 320, behavior: "smooth" });
    fireEvent.click(section.getByRole("button", { name: "Show previous articles" }));
    expect(scrollBy).toHaveBeenLastCalledWith({ left: -320, behavior: "smooth" });
    fireEvent.click(section.getByRole("button", { name: "Show previous articles" }));
    expect(scrollTo).toHaveBeenCalledWith({ left: 700, behavior: "smooth" });
    expect(insights.querySelectorAll('img[loading="lazy"][decoding="async"]')).toHaveLength(6);
    expect(insights.querySelectorAll(".wd-journal-action")).toHaveLength(6);
    expect(cards[3].querySelector("img")).toHaveAttribute("src", "/insight-performance.webp");
    expect(cards[4].querySelector("img")).toHaveAttribute("src", "/beautiful.png");
    expect(cards[4].querySelector("img")).toHaveAttribute(
      "alt",
      "Responsive business website designs displayed across desktop and mobile screens",
    );
    cards.forEach((card) => {
      const cardQueries = within(card as HTMLElement);
      const title = cardQueries.getByRole("heading", { level: 3 });
      expect(title.querySelector("a")).toHaveAttribute(
        "href",
        expect.stringMatching(/^\/insights#/),
      );
      expect(cardQueries.queryByText("Quorisx Editorial Team")).not.toBeInTheDocument();
      expect(card.querySelector(".wd-journal-byline")).not.toBeInTheDocument();
      expect(card.querySelector("time[datetime]")).toBeInTheDocument();
      const excerpt = card.querySelector(".wd-journal-copy > p")?.textContent?.trim() ?? "";
      expect(excerpt.length).toBeGreaterThanOrEqual(120);
      expect(excerpt.length).toBeLessThanOrEqual(160);
      expect(card.querySelector("img")?.getAttribute("src")).toMatch(/\.(webp|png)$/);
      expect(card.querySelector("img")?.getAttribute("alt")).toBeTruthy();
      expect(card.querySelector("button")).not.toBeInTheDocument();
      expect(cardQueries.getByRole("link", { name: /Learn more/i })).toHaveAttribute(
        "href",
        expect.stringMatching(/^\/insights#/),
      );
    });
    expect(section.getByRole("link", { name: /View all articles/i })).toHaveAttribute(
      "href",
      "/insights",
    );
    expect(
      insights.compareDocumentPosition(document.querySelector(".wd-audit-section") as Node) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      JSON.parse(insights.querySelector('script[type="application/ld+json"]')?.textContent ?? "")
        .itemListElement,
    ).toHaveLength(6);
    expect(insights.querySelector(".wd-article-dialog")).not.toBeInTheDocument();
  });
});
