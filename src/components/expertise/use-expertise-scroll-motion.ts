import { useEffect, useRef } from "react";

import "./expertise-scroll-motion.css";

export function useExpertiseScrollMotion<T extends HTMLElement = HTMLElement>(pageKey?: string) {
  const rootRef = useRef<T>(null);

  function markHeroSequence(root: HTMLElement) {
    const hero = root.matches("main")
      ? root.querySelector<HTMLElement>(":scope > section")
      : root.querySelector<HTMLElement>("main > section");
    if (hero?.hasAttribute("data-custom-hero-intro")) return;
    const heading = hero?.querySelector<HTMLElement>("h1");
    if (!hero || !heading) return;

    heading.dataset.roleHeroIntro = "heading";
    const following = Node.DOCUMENT_POSITION_FOLLOWING;
    const description = [...hero.querySelectorAll<HTMLElement>("p")].find((paragraph) =>
      Boolean(heading.compareDocumentPosition(paragraph) & following),
    );
    if (!description) return;

    description.dataset.roleHeroIntro = "description";
    const actionLinks = [...hero.querySelectorAll<HTMLAnchorElement>("a")].filter((link) => {
      if (!(description.compareDocumentPosition(link) & following)) return false;
      const href = link.getAttribute("href") ?? "";
      const label = link.textContent ?? "";
      return (
        href.startsWith("/contact") ||
        href.startsWith("#role-") ||
        /\b(hire|discuss|see how|see what|view all|consultation)\b/i.test(label)
      );
    });

    if (!actionLinks.length) return;

    let actionGroup = actionLinks[0]?.parentElement;
    while (
      actionGroup &&
      actionGroup !== hero &&
      (actionGroup.tagName === "NAV" || !actionLinks.every((link) => actionGroup?.contains(link)))
    ) {
      actionGroup = actionGroup.parentElement;
    }

    if (actionGroup && actionGroup !== hero) {
      actionGroup.dataset.roleHeroIntro = "actions";
    } else {
      actionLinks.forEach((link) => {
        link.dataset.roleHeroIntro = "actions";
      });
    }
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    markHeroSequence(root);

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const mainSelector = root.matches("main") ? ":scope" : "main";
    const elements = root.querySelectorAll<HTMLElement>(
      `${mainSelector} > section, ${mainSelector} section article, ${mainSelector} section li, ${mainSelector} section [data-story-step], ${mainSelector} section [class*='-card'], ${mainSelector} section [class*='-step'], ${mainSelector} section [class*='-row'], ${mainSelector} section [class*='-scenario'], ${mainSelector} section [class*='-model'], ${mainSelector} section [class*='-outcome'], ${mainSelector} section [class*='-responsibility'], ${mainSelector} section .recruitment-methodology-collage img, ${mainSelector} section .recruitment-methodology-overview-copy > *`,
    );
    if (!elements.length) return;

    const siblingIndexes = new Map<Element, number>();
    elements.forEach((element) => {
      const parent = element.parentElement;
      if (!parent) return;

      const siblingIndex = siblingIndexes.get(parent) ?? 0;
      siblingIndexes.set(parent, siblingIndex + 1);
      element.dataset.expertiseReveal = element.matches("section") ? "section" : "card";
      element.style.setProperty("--expertise-reveal-delay", `${(siblingIndex % 3) * 85}ms`);
    });

    root.classList.add("expertise-scroll-motion-active");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("expertise-scroll-motion-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("expertise-scroll-motion-active");
    };
  }, [pageKey]);

  return rootRef;
}
