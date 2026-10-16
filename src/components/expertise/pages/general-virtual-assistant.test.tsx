import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { GeneralVirtualAssistantPage } from "./general-virtual-assistant";

describe("GeneralVirtualAssistantPage", () => {
  it("lets visitors choose multiple problems and opens their stories", () => {
    render(<GeneralVirtualAssistantPage />);

    fireEvent.click(screen.getByRole("button", { name: "Inbox overload" }));
    fireEvent.click(screen.getByRole("button", { name: "Calendar conflicts" }));

    expect(screen.getByRole("button", { name: "Inbox overload" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Calendar conflicts" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(
      screen.getByText(/Your assistant triages new mail, flags what matters/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Your assistant coordinates availability, confirms attendees/),
    ).toBeInTheDocument();
  });

  it("expands a service card to show its practical outcome", () => {
    render(<GeneralVirtualAssistantPage />);

    const serviceButton = screen.getByRole("button", { name: "Communication & scheduling" });
    fireEvent.click(serviceButton);

    expect(serviceButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Conflicts resolved before they reach you.")).toBeInTheDocument();
  });

  it("shows real workday imagery with descriptive accessible text", () => {
    render(<GeneralVirtualAssistantPage />);

    expect(
      screen.getByRole("heading", { name: /The everyday work, in capable hands/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /Professionals reviewing priorities together/ }),
    ).toHaveAttribute("src", "/images/image2.jpg");
    expect(
      screen.getByRole("img", { name: /Two colleagues coordinating their work/ }),
    ).toHaveAttribute("src", "/images/imag%204.jpg");
  });
});
