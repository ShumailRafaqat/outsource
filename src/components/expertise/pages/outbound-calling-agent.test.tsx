import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { OutboundCallingAgentPage } from "./outbound-calling-agent";

describe("OutboundCallingAgentPage", () => {
  it("shows the calling scenarios and the human and AI service options", () => {
    render(<OutboundCallingAgentPage />);

    expect(
      screen.getByRole("heading", {
        name: /Your sales team spends too much time on calls that don’t convert/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Cold outreach" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Fast lead follow-up" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Appointment setting" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Lead qualification" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Human agents" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI voice agents" })).toBeInTheDocument();
  });

  it("lets visitors select challenges and presents an appropriate response", () => {
    render(<OutboundCallingAgentPage />);

    const challenge = screen.getByRole("button", { name: /Follow-ups get delayed/i });
    expect(challenge).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(challenge);

    expect(challenge).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(/dedicated calling team can take ownership of/i)).toBeInTheDocument();
  });

  it("uses call-center visuals and links both calls to action to the contact inquiry", () => {
    render(<OutboundCallingAgentPage />);

    expect(screen.getAllByRole("img")).toHaveLength(5);
    expect(
      screen
        .getAllByRole("link", { name: /Talk to us about outbound calling/i })
        .every((link) => link.getAttribute("href") === "/contact#inquiry"),
    ).toBe(true);
  });
});
