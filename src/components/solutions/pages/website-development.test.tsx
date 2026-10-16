import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WebsiteDevelopmentPage } from "./website-development";

describe("WebsiteDevelopmentPage", () => {
  it("keeps the website path choices without rendering the removed detail panel", () => {
    render(<WebsiteDevelopmentPage />);

    expect(
      screen.getByRole("heading", { name: /Is your business invisible online/i }),
    ).toBeInTheDocument();
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
    expect(firstWebsiteChoice).toHaveAttribute("href", "#first-website-reality");
    expect(screen.getByText("PATH 01 / EXISTING WEBSITE")).toBeInTheDocument();
    expect(screen.getByText("PATH 02 / FIRST WEBSITE")).toBeInTheDocument();
    expect(screen.getByText("See the quick checks")).toHaveClass("wd-path-tab-arrow");
    expect(screen.getByText("See what you’re missing")).toHaveClass("wd-path-tab-arrow");
    expect(
      screen.getByRole("heading", { name: /Where are you starting from/i }),
    ).toBeInTheDocument();
    expect(document.querySelector(".wd-path-panel")).not.toBeInTheDocument();
    expect(document.querySelector("#first-website-reality")).toBeInTheDocument();
    expect(document.querySelector("#website-health-check")).toBeInTheDocument();

    fireEvent.click(firstWebsiteChoice);

    expect(firstWebsiteChoice).toHaveAttribute("aria-current", "location");
    expect(existingWebsiteChoice).not.toHaveAttribute("aria-current");
    expect(
      screen.getByRole("heading", {
        name: /Customers search\. Your business doesn’t show up/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Hard to find online/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
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

    expect(document.querySelector("#first-website-reality")).toBeInTheDocument();
    expect(document.querySelector("#website-health-check")).toBeInTheDocument();
  });

  it("adds a competition and visibility section after the website reality check", () => {
    render(<WebsiteDevelopmentPage />);

    const websiteCheck = document.querySelector("#website-health-check");
    const competition = document.querySelector(".wd-competition-section") as HTMLElement;
    expect(
      websiteCheck?.compareDocumentPosition(competition) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: /Your Customers Are Searching\. The Question Is — Will They Find You\?/i,
      }),
    ).toBeInTheDocument();
    for (const visibilityBenefit of [
      "Appear when people search",
      "Look credible at first glance",
      "Make it easy to enquire",
      "Rank above others in their market",
    ]) {
      expect(within(competition).getByText(visibilityBenefit)).toBeInTheDocument();
    }
    expect(
      within(competition).getByRole("link", { name: /Get Your Website Reviewed/i }),
    ).toHaveAttribute("href", "#wd-audit");
  });

  it("adds an interactive visibility reality check after the hero", () => {
    render(<WebsiteDevelopmentPage />);

    const hero = document.querySelector(".wd-hero");
    const realityCheck = document.querySelector(".wd-reality-section");
    expect(
      hero?.compareDocumentPosition(realityCheck as Node) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: /Is Your Business Actually Visible — Or Just Existing Online\?/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Most businesses fall into one of two groups/i)).toBeInTheDocument();
    expect(screen.getByText("how.")).toBeInTheDocument();

    const hardToFindOption = screen.getByRole("button", { name: /Hard to find online/i });
    const overlookedOption = screen.getByRole("button", { name: /Online, but overlooked/i });
    expect(overlookedOption).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("heading", { name: /Your website exists\. The enquiries don’t/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Having a website is not enough. If people search for your services on Google and you don’t appear in the results (often due to missing SEO), they move on to competitors who are visible — and you lose the enquiry before it even starts.",
      ),
    ).toBeInTheDocument();

    fireEvent.click(hardToFindOption);

    expect(hardToFindOption).toHaveAttribute("aria-pressed", "true");
    expect(overlookedOption).toHaveAttribute("aria-pressed", "false");
    expect(
      screen.getByRole("heading", { name: /Customers search\. Your business doesn’t show up/i }),
    ).toBeInTheDocument();
    expect(
      within(document.querySelector(".wd-path-tabs") as HTMLElement).getByRole("link", {
        name: /I need my first website/i,
      }),
    ).toHaveAttribute("aria-current", "location");
  });

  it("shows the first-website reality check with both supplied images and captions", () => {
    render(<WebsiteDevelopmentPage />);

    expect(
      screen.getByRole("heading", { name: /If You Don’t Have a Website Yet/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Every day, people search for the exact service you offer."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /They open Google, look at the first few results, and choose from what’s already there/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Low visibility")).toBeInTheDocument();
    expect(screen.getByText("Missed enquiries")).toBeInTheDocument();
    expect(screen.getByText("Competitors winning")).toBeInTheDocument();
    expect(document.querySelectorAll(".wd-first-site-challenge-icon svg")).toHaveLength(4);
    expect(screen.getByLabelText("How an online presence supports enquiries")).toBeInTheDocument();
    expect(
      screen.getByText(/you’re invisible at the exact moment someone is ready to buy/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /comparing businesses with and without a website/i,
      }),
    ).toHaveAttribute("src", "/google.png");
    expect(
      screen.getByRole("img", { name: /Four phone screens show a customer searching Google/i }),
    ).toHaveAttribute("src", "/mobile.png");
    const story = document.querySelector(".wd-first-site-story");
    const visuals = document.querySelector(".wd-first-site-visuals");
    const realityHighlight = document.querySelector(".wd-first-site-reality");
    expect(
      story?.compareDocumentPosition(visuals as Node) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      visuals?.compareDocumentPosition(realityHighlight as Node) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(visuals?.querySelectorAll(".wd-first-site-visual")).toHaveLength(2);
    expect(
      screen.getByText("People are searching. If you’re not visible, they choose someone else."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("With a website you get more visibility, more customers, and real growth."),
    ).toBeInTheDocument();
    expect(document.querySelector(".wd-first-site-reality strong")?.textContent).toBe(
      "It means you’re invisible at the exact moment someone is ready to buy.",
    );
    const presenceSteps = within(document.querySelector(".wd-presence-steps") as HTMLElement);
    expect(presenceSteps.getByRole("button", { name: /Get discovered/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    fireEvent.click(presenceSteps.getByRole("button", { name: /Build trust/i }));
    expect(
      screen.getByRole("heading", { name: /Give customers a reason to choose you/i }),
    ).toBeInTheDocument();

    fireEvent.click(presenceSteps.getByRole("button", { name: /Create enquiries/i }));
    expect(
      screen.getByRole("heading", { name: /Turn more of that interest into conversations/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Plan my first website/i })).toHaveAttribute(
      "href",
      "#wd-audit",
    );
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
      expect(stack.getByText(technology, { exact: true })).toBeInTheDocument();
    }
    expect(stack.queryByText("AI Chatbot Integration")).not.toBeInTheDocument();
    expect(stack.queryByText("Google Analytics + Search Console")).not.toBeInTheDocument();
    expect(stackSection.querySelectorAll(".wd-tech-item")).toHaveLength(11);
    expect(stackSection.querySelectorAll(".wd-tech-icon svg")).toHaveLength(11);
    expect(
      stack.getByText(
        /We use modern and reliable technologies to build fast, scalable, and easy-to-manage websites—based on your business needs/i,
      ),
    ).toBeInTheDocument();
    const supportBeforeStack = document.querySelector(".wd-support-section");
    expect(
      supportBeforeStack?.compareDocumentPosition(stackSection) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    expect(screen.getByRole("heading", { name: /A clear process/i })).toBeInTheDocument();
    const processSection = document.querySelector(".wd-process-section") as HTMLElement;
    const process = within(processSection);
    expect(
      process.getByText(
        /We don’t just build and disappear\. We take your website from planning to a complete, search-ready launch/i,
      ),
    ).toBeInTheDocument();
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
    expect(processSection.querySelectorAll(".wd-process-connector")).toHaveLength(7);
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
    const supportVideo = within(supportSection).getByLabelText(
      "Video about ongoing website support",
    );
    expect(supportVideo).toHaveAttribute("src", "/video3.mp4");
    expect(supportVideo).not.toHaveAttribute("poster");
    expect(supportVideo).toHaveAttribute("controls");
    expect(supportVideo).toHaveAttribute("playsinline");
    expect(
      within(supportSection).getByText(
        /Your customers can also get live support from real agents/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(supportSection).getByText("Live support from real agents", { exact: true }),
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
});
