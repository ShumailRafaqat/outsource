import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PersonalAssistantPage } from "./personal-assistant";

describe("PersonalAssistantPage", () => {
  it("updates personalized outcomes when preferences change", () => {
    render(<PersonalAssistantPage />);

    const travelPreference = within(screen.getByRole("group", { name: "Travel frequency" }));
    fireEvent.click(travelPreference.getByRole("button", { name: "High" }));

    expect(
      screen.getByRole("heading", { name: "More trips. Less trip-planning." }),
    ).toBeInTheDocument();
    expect(travelPreference.getByRole("button", { name: "High" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getAllByText("high")).toHaveLength(2);
  });

  it("changes the selected day story in the interactive week calendar", () => {
    render(<PersonalAssistantPage />);

    fireEvent.click(screen.getByRole("button", { name: /WED 14/ }));

    expect(screen.getByRole("heading", { name: "The little things, handled" })).toBeInTheDocument();
    expect(screen.getByText(/A delivery needs rescheduling/)).toBeInTheDocument();
  });

  it("flips a service card to reveal the personal outcome", () => {
    render(<PersonalAssistantPage />);

    const card = screen.getByRole("button", { name: /Travel & logistics/ });
    fireEvent.click(card);

    expect(card).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText("Your updated itinerary is ready before plans change again."),
    ).toBeInTheDocument();
  });
});
