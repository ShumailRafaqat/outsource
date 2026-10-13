import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AdministrativeAssistantPage } from "./administrative-assistant";

describe("AdministrativeAssistantPage", () => {
  it("shows admin-specific interactive problem stories", () => {
    render(<AdministrativeAssistantPage />);

    expect(screen.getByRole("heading", { name: /Stop drowning in admin/ })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Documentation backlog" }));

    expect(screen.getByText(/Your assistant prepares and organizes documents/)).toBeInTheDocument();
    expect(
      screen.getByText("Everything is ready when you need it. No more searching."),
    ).toBeInTheDocument();
  });

  it("shows the operations timeline and expands admin service outcomes", () => {
    render(<AdministrativeAssistantPage />);

    expect(
      screen.getByRole("heading", { name: /From scattered to streamlined/ }),
    ).toBeInTheDocument();

    const serviceButton = screen.getByRole("button", {
      name: "Documentation & records",
    });
    fireEvent.click(serviceButton);

    expect(serviceButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Clean, current documents ready whenever needed.")).toBeInTheDocument();
  });
});
