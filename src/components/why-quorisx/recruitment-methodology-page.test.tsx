import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { RecruitmentMethodologyPage } from "./recruitment-methodology-page";

describe("RecruitmentMethodologyPage", () => {
  it("renders the centered recruitment hero with an animated background slideshow", () => {
    render(<RecruitmentMethodologyPage />);

    const hero = screen
      .getByRole("heading", { name: "Our Recruitment Methodology", level: 1 })
      .closest("section");
    const background = hero?.querySelector(".recruitment-methodology-background");

    expect(
      screen.getByRole("heading", { name: "Our Recruitment Methodology", level: 1 }),
    ).toBeInTheDocument();
    expect(hero?.querySelector(".recruitment-methodology-hero-cta")).toHaveAttribute(
      "href",
      "#process",
    );
    expect(hero?.querySelector(".recruitment-methodology-hero-cta")).toHaveTextContent(
      "Explore Process",
    );
    expect(
      screen.getByText(
        "We follow a structured, skills-based recruitment process to connect businesses with qualified professionals who align with their operational needs, company culture, and long-term goals.",
      ),
    ).toBeInTheDocument();
    expect(background).toHaveAttribute("src", "/us.png");
    expect(background).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByRole("group", { name: "Choose a hero background" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /Show .* background/ })).toHaveLength(2);
    expect(screen.getByRole("button", { name: "Show our city background" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(
      screen.getByRole("heading", { name: "About Quorisx Methodology", level: 2 }),
    ).toBeInTheDocument();
    expect(screen.queryByText("QUORISX HIRING PROCESS")).not.toBeInTheDocument();
    expect(
      screen.getByText(
        "We follow a structured, skills-based recruitment process to connect businesses with qualified professionals who align with their operational needs, company culture, and long-term goals.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Our Expertise" })).toHaveAttribute(
      "href",
      "/#outsourcing",
    );
    expect(screen.getByRole("link", { name: "Explore Process" })).toHaveAttribute(
      "href",
      "#process",
    );
    expect(
      screen
        .getByRole("group", { name: "Quorisx teams and workplace" })
        .closest(".recruitment-methodology-overview-panel"),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(3);
    expect(screen.getByRole("heading", { name: "Our Process" })).toBeInTheDocument();
    expect(screen.getByRole("list", { name: "Recruitment process steps" }).children).toHaveLength(
      7,
    );
    expect(screen.getAllByText(/^PHASE \d{2}$/)).toHaveLength(7);
    expect(screen.getByText("Requirement Mapping")).toBeInTheDocument();
    expect(screen.getByText("Onboarding & Ongoing Support")).toBeInTheDocument();
  });
});
