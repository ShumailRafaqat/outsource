import { ArrowRight, ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { industryPages } from "./industry-data";

import "../../routes/industries.css";

export function IndustriesDirectoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="industries-directory">
        <section className="industries-directory-intro" aria-labelledby="industries-heading">
          <p className="industries-directory-eyebrow">
            <span /> INDUSTRIES WE SUPPORT
          </p>
          <h1 id="industries-heading">
            Expertise that fits
            <br />
            <em>the way you work.</em>
          </h1>
          <p>
            Every industry has its own pace, processes, and pressure points. Explore support shaped
            around yours.
          </p>
        </section>

        <section
          className="industry-directory-panel"
          id="industry-directory"
          aria-labelledby="industry-directory-heading"
        >
          <div className="industry-directory-topline">
            <h2 id="industry-directory-heading">Browse by industry</h2>
            <span>08 options</span>
          </div>
          <nav className="industry-directory-grid" aria-label="Industries">
            {industryPages.map((industry) => {
              const Icon = industry.icon;

              return (
                <a
                  className="industry-directory-link"
                  href={`/industries/${industry.slug}`}
                  key={industry.slug}
                >
                  <span className="industry-directory-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="industry-directory-copy">
                    <span className="industry-directory-name">{industry.name}</span>
                    <span className="industry-directory-description">
                      {industry.directoryDescription}
                    </span>
                  </span>
                  <span className="industry-directory-arrow">
                    <ArrowRight aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </nav>
          <div className="industry-directory-footer">
            <span>One experienced partner. Support tailored to your world.</span>
            <a href="/contact#inquiry">
              Find your fit <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
