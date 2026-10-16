import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AiAutomationPage } from "./ai-automation";

describe("AiAutomationPage", () => {
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
  });

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
  });
});
