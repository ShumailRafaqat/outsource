import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ExpertiseScrollMotion } from "./expertise-scroll-motion";
import { useExpertiseScrollMotion } from "./use-expertise-scroll-motion";

describe("ExpertiseScrollMotion", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("reveals page sections and their cards as they enter the viewport", () => {
    const observedElements: Element[] = [];
    let intersectionCallback: IntersectionObserverCallback | undefined;

    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        intersectionCallback = callback;
      }

      observe(element: Element) {
        observedElements.push(element);
      }

      unobserve = vi.fn();
      disconnect = vi.fn();
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    const { container } = render(
      <ExpertiseScrollMotion>
        <main>
          <section aria-label="Expertise details">
            <h2>Available roles</h2>
            <article>Administrative Assistant</article>
          </section>
        </main>
      </ExpertiseScrollMotion>,
    );

    const section = screen.getByRole("region", { name: "Expertise details" });
    const card = screen.getByRole("article");
    expect(observedElements).toEqual([section, card]);
    expect(container.firstElementChild).toHaveClass("expertise-scroll-motion-active");
    expect(section).toHaveAttribute("data-expertise-reveal", "section");
    expect(card).toHaveAttribute("data-expertise-reveal", "card");

    act(() => {
      intersectionCallback?.(
        [{ target: card, isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      );
    });

    expect(card).toHaveClass("expertise-scroll-motion-visible");
  });

  it("marks the role hero heading, description, and actions for a staggered entrance", () => {
    class MockIntersectionObserver {
      constructor(_callback: IntersectionObserverCallback) {}

      observe() {}
      unobserve() {}
      disconnect() {}
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    render(
      <ExpertiseScrollMotion>
        <main>
          <section aria-label="Role hero">
            <div>
              <h1>Live Chat Support Agent</h1>
              <p>Handle customer conversations with clear next steps.</p>
              <div>
                <a href="/contact?role=Live%20Chat%20Support%20Agent#inquiry">
                  Hire this specialist
                </a>
                <a href="#role-work">See what they handle</a>
              </div>
            </div>
          </section>
        </main>
      </ExpertiseScrollMotion>,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveAttribute(
      "data-role-hero-intro",
      "heading",
    );
    expect(
      screen.getByText("Handle customer conversations with clear next steps."),
    ).toHaveAttribute("data-role-hero-intro", "description");
    expect(
      screen.getByRole("link", { name: "Hire this specialist" }).parentElement,
    ).toHaveAttribute("data-role-hero-intro", "actions");
  });

  it("keeps the hero readable and skips scroll animation when reduced motion is preferred", () => {
    vi.stubGlobal("matchMedia", () => ({ matches: true }));

    const { container } = render(
      <ExpertiseScrollMotion>
        <main>
          <section aria-label="Role hero">
            <h1>Support Specialist</h1>
            <p>Support your customers with clear next steps.</p>
            <a href="/contact">Discuss this role</a>
          </section>
        </main>
      </ExpertiseScrollMotion>,
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveAttribute(
      "data-role-hero-intro",
      "heading",
    );
    expect(screen.getByText("Support your customers with clear next steps.")).toHaveAttribute(
      "data-role-hero-intro",
      "description",
    );
    expect(container.firstElementChild).not.toHaveClass("expertise-scroll-motion-active");
  });

  it("observes direct sections when an expertise directory uses main as its root", () => {
    const observedElements: Element[] = [];

    class MockIntersectionObserver {
      constructor(_callback: IntersectionObserverCallback) {}

      observe(element: Element) {
        observedElements.push(element);
      }

      unobserve() {}
      disconnect() {}
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    function ExpertiseDirectory() {
      const rootRef = useExpertiseScrollMotion<HTMLElement>();
      return (
        <main ref={rootRef}>
          <section aria-label="Directory hero">
            <h1>Customer service</h1>
            <p>Support your customers in your chosen channels.</p>
            <div>
              <a href="/contact">Discuss staffing</a>
              <a href="#roles">View roles</a>
            </div>
          </section>
          <section aria-label="Role cards">
            <article>Customer Support Representative</article>
          </section>
        </main>
      );
    }

    const { container } = render(<ExpertiseDirectory />);

    const [hero, cardSection, card] = observedElements;
    expect(observedElements).toHaveLength(3);
    expect(hero).toHaveAttribute("aria-label", "Directory hero");
    expect(cardSection).toHaveAttribute("aria-label", "Role cards");
    expect(card).toHaveTextContent("Customer Support Representative");
    expect(container.querySelector("main")).toHaveClass("expertise-scroll-motion-active");
    expect(screen.getByRole("heading", { level: 1 })).toHaveAttribute(
      "data-role-hero-intro",
      "heading",
    );
    expect(screen.getByRole("link", { name: "Discuss staffing" }).parentElement).toHaveAttribute(
      "data-role-hero-intro",
      "actions",
    );
  });
});
