import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CustomerSupportPage } from "./customer-support";

describe("CustomerSupportPage", () => {
  it("explains round-the-clock support across customer moments and channels", () => {
    render(<CustomerSupportPage />);

    expect(
      screen.getByRole("heading", { name: /Your Business Closes\. Customer Care Doesn’t\./ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "A Small Question Can Become a Lost Customer." }),
    ).toBeInTheDocument();

    for (const channel of [
      "Live Chat Support",
      "Phone Support",
      "Email Support",
      "Social & Messaging Support",
    ]) {
      expect(screen.getByRole("heading", { name: channel })).toBeInTheDocument();
    }

    expect(screen.getByText("Illustrative support workflow")).toBeInTheDocument();
    expect(
      screen.getByText("Sample reporting view · no client data or performance claims"),
    ).toBeInTheDocument();
  });

  it("updates the sample customer conversation when a scenario is selected", () => {
    render(<CustomerSupportPage />);

    fireEvent.click(screen.getByRole("button", { name: /When something goes wrong/ }));

    expect(screen.getByText("I can’t access my account and need help.")).toBeInTheDocument();
    expect(
      screen.getByText("Capture the issue, share approved guidance, and escalate when needed."),
    ).toBeInTheDocument();
  });

  it("shows the customer support roles from the Expertise role catalog", () => {
    render(<CustomerSupportPage />);

    const expectedRoles = [
      ["Customer Support Representative", "customer-support-representative"],
      ["Live Chat Support Agent", "live-chat-support-agent"],
      ["Dedicated Receptionist", "dedicated-receptionist"],
      ["IT Helpdesk Assistant", "it-helpdesk-assistant"],
      ["Content Moderator", "content-moderator"],
      ["Community & Membership Assistant", "community-and-membership-assistant"],
      ["Audience & Community Manager", "audience-and-community-manager"],
      [
        "Hotel & Accommodation Operations Assistant",
        "hotel-and-accommodation-operations-assistant",
      ],
    ];

    for (const [title, slug] of expectedRoles) {
      expect(screen.getByRole("link", { name: new RegExp(title) })).toHaveAttribute(
        "href",
        `/expertise/customer-service/${slug}`,
      );
    }
  });

  it("links support plan calls to the support enquiry form", () => {
    render(<CustomerSupportPage />);

    expect(
      screen.getAllByRole("link", { name: /Build My Support Plan|Let’s Plan Your Coverage/ }),
    ).toHaveLength(2);
    for (const link of screen.getAllByRole("link", {
      name: /Build My Support Plan|Let’s Plan Your Coverage/,
    })) {
      expect(link).toHaveAttribute("href", "/contact?service=Customer%20support#inquiry");
    }
  });
});
