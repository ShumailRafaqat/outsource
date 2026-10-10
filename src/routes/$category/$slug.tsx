import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { comingSoonPage } from "@/lib/site-navigation";

export const Route = createFileRoute("/$category/$slug")({
  head: ({ params }) => {
    const page = comingSoonPage(params.category, params.slug);
    return {
      meta: [
        { title: page ? `${page.label} — Quorisx` : "Page Not Found — Quorisx" },
        {
          name: "description",
          content: page
            ? `${page.label}: dedicated information from Quorisx is coming soon.`
            : "The requested page could not be found.",
        },
      ],
    };
  },
  component: ComingSoonPage,
});

function ComingSoonPage() {
  const { category, slug } = Route.useParams();
  const page = comingSoonPage(category, slug);

  if (!page) {
    throw notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-4rem)] items-center bg-ink px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="eyebrow mb-5">{page.group}</p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-ink-foreground sm:text-5xl md:text-7xl">
            {page.label}
          </h1>
          <p className="mt-6 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Coming Soon
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            We’re preparing this page. In the meantime, talk with our team about what your business
            needs.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Talk to Our Team
            </a>
            <a
              href="/"
              className="rounded-md border border-ink-border px-5 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/5"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
