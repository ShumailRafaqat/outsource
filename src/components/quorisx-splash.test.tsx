import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { QuorisxSplash } from "./quorisx-splash";

describe("QuorisxSplash hero reveal", () => {
  it("reveals heading lines, description, then actions after the splash", () => {
    render(
      <QuorisxSplash enabled>
        <main>
          <section>
            <div>
              <p data-hero-eyebrow>Welcome</p>
              <h1>
                <span className="block">First line</span>
                <span className="block">Second line</span>
              </h1>
              <p>Hero description</p>
              <div>
                <a href="/contact">Primary action</a>
                <a href="/about">Secondary action</a>
              </div>
              <div data-hero-visual />
            </div>
          </section>
        </main>
      </QuorisxSplash>,
    );

    expect(screen.getByText("First line")).not.toHaveAttribute("data-hero-reveal");
    fireEvent.click(screen.getByRole("button", { name: /skip intro/i }));

    expect(screen.getByText("Welcome")).toHaveStyle("--hero-reveal-delay: 0ms");
    expect(screen.getByText("First line")).toHaveStyle("--hero-reveal-delay: 120ms");
    expect(screen.getByText("Second line")).toHaveStyle("--hero-reveal-delay: 230ms");
    expect(screen.getByText("Hero description")).toHaveStyle("--hero-reveal-delay: 410ms");
    expect(screen.getByRole("link", { name: "Primary action" })).toHaveStyle(
      "--hero-reveal-delay: 590ms",
    );
    expect(screen.getByRole("link", { name: "Secondary action" })).toHaveStyle(
      "--hero-reveal-delay: 690ms",
    );
    expect(document.querySelector("[data-hero-visual]")).toHaveAttribute(
      "data-hero-visual-visible",
      "true",
    );
    expect(document.querySelector("[data-hero-visual]")).toHaveStyle("--hero-visual-delay: 830ms");
  });

  it("shows the splash without curved background lines", () => {
    render(
      <QuorisxSplash enabled>
        <main>
          <h1>Welcome</h1>
        </main>
      </QuorisxSplash>,
    );

    expect(document.querySelector(".qx-splash")).toBeInTheDocument();
    expect(document.querySelector(".qx-splash__waves")).not.toBeInTheDocument();
    expect(document.querySelector(".qx-splash__brand")).toBeInTheDocument();
  });

  it("reveals hero content immediately on pages without a splash", () => {
    render(
      <QuorisxSplash enabled={false}>
        <main>
          <section>
            <div>
              <h1>Page heading</h1>
              <p>Page description</p>
              <a href="/contact">Contact us</a>
            </div>
          </section>
        </main>
      </QuorisxSplash>,
    );

    expect(screen.getByRole("heading", { name: "Page heading" })).toHaveAttribute(
      "data-hero-reveal",
      "item",
    );
    expect(screen.getByText("Page description")).toHaveStyle("--hero-reveal-delay: 180ms");
    expect(screen.getByRole("link", { name: "Contact us" })).toHaveStyle(
      "--hero-reveal-delay: 360ms",
    );
  });

  it("leaves editorial pages without hero copy untouched", () => {
    render(
      <QuorisxSplash enabled={false}>
        <main data-disable-hero-reveal>
          <h1>Article library</h1>
          <p>Browse the latest guides.</p>
          <a href="/article">Read an article</a>
        </main>
      </QuorisxSplash>,
    );

    expect(screen.getByRole("heading", { name: "Article library" })).not.toHaveAttribute(
      "data-hero-reveal",
    );
    expect(screen.getByText("Browse the latest guides.")).not.toHaveStyle(
      "--hero-reveal-delay: 180ms",
    );
  });
});
