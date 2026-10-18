import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { OutsourcingGuidePage } from "./outsourcing-guide";

describe("OutsourcingGuidePage", () => {
  it("explains the key outsourcing decisions and links to relevant follow-up resources", () => {
    render(<OutsourcingGuidePage />);

    expect(
      screen.getByRole("heading", { name: "Outsourcing, made clearer.", level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /What does outsourcing actually mean/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /When might outsourcing be worth considering/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /What kinds of operations can move/ }),
    ).toBeInTheDocument();
    for (const benefit of [
      "Cost efficiency",
      "Flexibility",
      "Scalability",
      "Operational support",
    ]) {
      expect(screen.getByRole("heading", { name: benefit })).toBeInTheDocument();
    }
    expect(screen.getByRole("heading", { name: /In-house and outsourced/ })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Choose a partner by how they work/ }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Common friction/ })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Frequently asked questions." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Explore outsourcing solutions/ })).toHaveAttribute(
      "href",
      "/#outsourcing",
    );
    expect(screen.getByRole("link", { name: /quality and security approach/ })).toHaveAttribute(
      "href",
      "/why-quorisx/quality-security",
    );
  });

  it("switches practical examples and the interactive outsourcing workflow", () => {
    render(<OutsourcingGuidePage />);

    const exampleGroup = screen.getByRole("group", { name: "Business example" });
    fireEvent.click(within(exampleGroup).getByRole("button", { name: "Professional firm" }));

    expect(within(exampleGroup).getByRole("button", { name: "Professional firm" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByText(/A consulting firm needs cleaner CRM records/)).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: /Review and adjust/ }));

    expect(screen.getByRole("button", { name: /Review and adjust/ })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("heading", { name: "Review and adjust" })).toBeInTheDocument();
    expect(screen.getByText(/Review agreed measures on a regular cadence/)).toBeInTheDocument();
  });

  it("lets readers emphasize either operating model and expand practical answers", () => {
    render(<OutsourcingGuidePage />);

    const modelGroup = screen.getByRole("group", { name: "Emphasize an operating model" });
    fireEvent.click(within(modelGroup).getByRole("button", { name: "Outsourced support" }));
    expect(within(modelGroup).getByRole("button", { name: "Outsourced support" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    const faqs = screen.getByRole("heading", { name: "Frequently asked questions." }).parentElement
      ?.nextElementSibling;
    const faqRegion = within(faqs as HTMLElement);
    const faq = faqRegion.getByText("Will outsourcing always reduce costs?").closest("details");

    expect(faq).not.toHaveAttribute("open");
    fireEvent.click(faqRegion.getByText("Will outsourcing always reduce costs?"));
    expect(faq).toHaveAttribute("open");
    expect(faq).toHaveTextContent(/Compare total costs and service impact/);
  });
});
