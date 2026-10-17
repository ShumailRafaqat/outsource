import { useEffect, useRef, useState, type ReactNode } from "react";

export function QuorisxSplash({ children, enabled }: { children: ReactNode; enabled: boolean }) {
  // Render the cover in the initial server AND client tree, before effects run.
  const [active, setActive] = useState(enabled);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) return;

    const main = contentRef.current?.querySelector("main");
    if (main?.hasAttribute("data-disable-hero-reveal")) return;
    const heading = main?.querySelector("h1");
    if (!main || !heading) return;

    const follows = (first: Node, second: Node) =>
      (first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
    const hero = heading.closest("section") ?? main;
    let copy = heading.parentElement;

    while (copy && copy !== hero) {
      const paragraphs = Array.from(copy.querySelectorAll("p")).filter((paragraph) =>
        follows(heading, paragraph),
      );
      const actions = Array.from(copy.querySelectorAll<HTMLElement>("a[href], button")).filter(
        (action) => follows(heading, action),
      );
      if (paragraphs.length > 0 && actions.length > 0) break;
      copy = copy.parentElement;
    }

    const heroCopy = copy ?? hero;
    const eyebrow = Array.from(heroCopy.querySelectorAll<HTMLElement>("[data-hero-eyebrow]")).find(
      (item) => follows(item, heading),
    );
    eyebrow?.setAttribute("data-hero-reveal", "item");
    eyebrow?.style.setProperty("--hero-reveal-delay", "0ms");
    const headingOffset = eyebrow ? 120 : 0;
    const blockLines = Array.from(heading.children).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement &&
        (child.classList.contains("block") || getComputedStyle(child).display === "block"),
    );
    const headlineItems = blockLines.length > 0 ? blockLines : [heading];
    headlineItems.forEach((line, index) => {
      line.setAttribute("data-hero-reveal", "item");
      line.style.setProperty("--hero-reveal-delay", `${headingOffset + index * 110}ms`);
    });

    const paragraphs = Array.from(heroCopy.querySelectorAll("p")).filter((paragraph) =>
      follows(heading, paragraph),
    );
    const actions = Array.from(heroCopy.querySelectorAll<HTMLElement>("a[href], button")).filter(
      (action) => follows(heading, action),
    );
    const firstAction = actions[0];
    const description = firstAction
      ? paragraphs.filter((paragraph) => follows(paragraph, firstAction))
      : paragraphs;
    const latestHeadingDelay = headingOffset + (headlineItems.length - 1) * 110;

    description.forEach((paragraph, index) => {
      paragraph.setAttribute("data-hero-reveal", "item");
      paragraph.style.setProperty(
        "--hero-reveal-delay",
        `${latestHeadingDelay + 180 + index * 90}ms`,
      );
    });

    const latestDescriptionDelay =
      latestHeadingDelay + 180 + Math.max(description.length - 1, 0) * 90;
    actions.forEach((action, index) => {
      action.setAttribute("data-hero-reveal", "item");
      action.style.setProperty(
        "--hero-reveal-delay",
        `${latestDescriptionDelay + 180 + index * 100}ms`,
      );
    });

    const latestActionDelay = latestDescriptionDelay + 180 + Math.max(actions.length - 1, 0) * 100;
    main.querySelectorAll<HTMLElement>("[data-hero-visual]").forEach((visual, index) => {
      visual.setAttribute("data-hero-visual-visible", "true");
      visual.style.setProperty("--hero-visual-delay", `${latestActionDelay + 140 + index * 120}ms`);
    });
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      setActive(false);
      return;
    }
    const content = contentRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    content?.setAttribute("inert", "");
    const finish = () => setActive(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };
    const onMotionChange = () => { if (reducedMotion.matches) finish(); };
    // The CSS animation-end event normally finishes first; this is a fallback.
    const timer = window.setTimeout(finish, 5600);
    window.addEventListener("keydown", onKey);
    reducedMotion.addEventListener("change", onMotionChange);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      reducedMotion.removeEventListener("change", onMotionChange);
      document.body.style.overflow = previousOverflow;
      content?.removeAttribute("inert");
    };
  }, [active]);

  return (
    <>
      <div ref={contentRef}>{children}</div>
      {active && (
        <div className="qx-splash" role="region" aria-label="Quorisx introduction"
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget && event.animationName === "qx-screen-exit") setActive(false);
          }}>
          <div className="qx-splash__brand" aria-label="Quorisx">
            <div className="qx-splash__word" aria-hidden="true">
              <span className="qx-splash__row qx-splash__row--top"><span>Q</span><span>U</span><span>O</span></span>
              <span className="qx-splash__row qx-splash__row--bottom"><span>R</span><span>I</span><span>S</span><span>X</span></span>
            </div>
          </div>
          <div className="qx-splash__shutter qx-splash__shutter--left" aria-hidden="true" />
          <div className="qx-splash__shutter qx-splash__shutter--right" aria-hidden="true" />
          <div className="qx-splash__line qx-splash__line--top" aria-hidden="true" />
          <div className="qx-splash__line qx-splash__line--bottom" aria-hidden="true" />
          <div className="qx-splash__dot" aria-hidden="true" />
          <button className="qx-splash__skip" onClick={() => setActive(false)}>Skip intro <span aria-hidden="true">↗</span></button>
        </div>
      )}
    </>
  );
}
