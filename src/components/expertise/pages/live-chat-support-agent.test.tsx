import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { customerServiceFunction } from "../data/customer-service";
import { toRoleSlug } from "../data/to-role-slug";
import { LiveChatSupportAgentPage } from "./live-chat-support-agent";

describe("LiveChatSupportAgentPage", () => {
  it("renders the customer-support-specific page sequence and safeguards", () => {
    const html = renderToStaticMarkup(<LiveChatSupportAgentPage />);

    for (const heading of [
      "Turn incoming chats into clear next steps.",
      "Give each chat a clear owner and next step.",
      "Helpful support, within clear boundaries.",
      "One question, a useful response, and a clean record.",
      "A simple workflow, from arrival to follow-up.",
      "Work in the support environment you choose.",
      "Choose a staffing model around the queue.",
      "Track service quality without promising a number.",
      "Keep the conversation relevant to the work.",
      "Your policies remain in your hands.",
      "Practical details for live chat support.",
      "Discuss the live chat coverage your customers need.",
    ]) {
      expect(html).toContain(heading);
    }

    expect(html).toContain("Illustrative interaction only—not a real customer transcript.");
    expect(html).toContain("24/7 coverage usually needs a rota or team");
    expect(html).toContain("No certification or compliance status is implied.");
    expect(html).toContain("live-chat-hero__heading");
    expect(html).toContain("live-chat-hero__description");
  });

  it("links to contact with Live Chat Support Agent preselected", () => {
    render(<LiveChatSupportAgentPage />);

    expect(
      screen.getAllByRole("link", { name: /Hire This Specialist|Discuss My Support Needs/ })[0],
    ).toHaveAttribute(
      "href",
      `/contact?role=${encodeURIComponent("Live Chat Support Agent")}#inquiry`,
    );
  });

  it("publishes only the approved sample role in the Customer Service directory", () => {
    expect(
      customerServiceFunction.roles.filter((role) => role.title === "Live Chat Support Agent"),
    ).toHaveLength(1);
    expect(toRoleSlug("Live Chat Support Agent")).toBe("live-chat-support-agent");
  });
});
