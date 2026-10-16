import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DataEntryAssistantPage } from "./data-entry-assistant";

describe("DataEntryAssistantPage", () => {
  it("shows the full data cycle using the uploaded workflow illustrations", () => {
    render(<DataEntryAssistantPage />);

    expect(
      screen.getByRole("heading", { name: /From raw input to reliable records\./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: /complete data cycle: input, process, validate, structure, and ready for use/i,
      }),
    ).toHaveAttribute("src", "/Complete%20Cycle%20Overview.png.jpg");
    expect(document.querySelectorAll(".dea-step")).toHaveLength(5);
    expect(
      screen.getByRole("img", { name: /AI-powered workflow extracting and processing data/ }),
    ).toHaveAttribute("src", "/Raw%20Input%20to%20Processing.png.jpg");
    expect(
      screen.getByRole("img", { name: /Data validation process checking records/ }),
    ).toHaveAttribute("src", "/Validation%20Step.png.jpg");
    expect(
      screen.getByRole("img", { name: /Data being structured and organized/ }),
    ).toHaveAttribute("src", "/Structuring%20&%20Organization.png.jpg");
  });

  it("ends with the clean-data outcome and one support call to action", () => {
    render(<DataEntryAssistantPage />);

    expect(
      screen.getByRole("heading", { name: /The cycle runs\. Your data stays clean\./ }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get data support/ })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });

  it("shows the data entry services and workflow tasks", () => {
    render(<DataEntryAssistantPage />);

    expect(
      screen.getByRole("heading", { name: "Your Data Entry Assistant Handles" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Record Updates & Entry" })).toBeInTheDocument();
    expect(screen.getByText("Remove duplicate records")).toBeInTheDocument();
    expect(screen.getByText("Transfer data between systems")).toBeInTheDocument();
    expect(screen.getByText("Update payment records")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /team member working with digital records/i }),
    ).toHaveAttribute("src", "/images/img.jpg");
  });
});
