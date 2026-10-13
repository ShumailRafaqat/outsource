import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectManagerPage } from "./project-manager";

describe("ProjectManagerPage", () => {
  it("shows all four project workflow stages with their uploaded images", () => {
    render(<ProjectManagerPage />);

    expect(
      screen.getByRole("heading", { name: /A Project Manager Who Keeps Work Moving\./i }),
    ).toBeInTheDocument();
    expect(document.querySelectorAll("[data-project-stage]")).toHaveLength(4);

    for (const image of [
      "/Alignment%20&%20Planning.png.jpg",
      "/Active%20Coordination.png.jpg",
      "/Progress%20&%20Risk%20Management.png.jpg",
      "/Delivery%20&%20Completion.png.jpg",
    ]) {
      expect(document.querySelector(`img[src="${image}"]`)).not.toBeNull();
    }
  });

  it("explains the project strategies and provides a support call to action", () => {
    render(<ProjectManagerPage />);

    expect(screen.getByText("Clear ownership on every task")).toBeInTheDocument();
    expect(screen.getByText("Regular but lightweight checkpoints")).toBeInTheDocument();
    expect(screen.getByText("Early risk identification")).toBeInTheDocument();
    expect(screen.getByText("Transparent progress visibility")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get Project Manager Support/ })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
  });
});
