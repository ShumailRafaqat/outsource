import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { expertiseFunctions, toRoleSlug } from "@/components/expertise/admin-executive-roles-page";

export const Route = createFileRoute("/expertise/$category/$role")({
  head: ({ params }) => {
    const role = findRole(params.category, params.role);
    return {
      meta: [
        { title: role ? `${role.role.title} — Quorisx` : "Role Not Found — Quorisx" },
        {
          name: "description",
          content: role
            ? `${role.role.description} Learn more about this ${role.group.label} role at Quorisx.`
            : "The requested role could not be found.",
        },
      ],
    };
  },
  component: RoleComingSoonPage,
});

function findRole(category: string, roleSlug: string) {
  const group = expertiseFunctions.find(
    (functionGroup) => functionGroup.href === `/expertise/${category}`,
  );
  const role = group?.roles.find((item) => toRoleSlug(item.title) === roleSlug);

  return group && role ? { group, role } : undefined;
}

function RoleComingSoonPage() {
  const { category, role: roleSlug } = Route.useParams();
  const result = findRole(category, roleSlug);

  if (!result) {
    throw notFound();
  }

  const { group, role } = result;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-5rem)] items-center bg-ink px-6 py-16">
        <section className="mx-auto w-full max-w-5xl">
          <a
            href={group.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to {group.label} roles
          </a>
          <div className="mt-10 max-w-3xl">
            <p className="eyebrow mb-4">{group.label}</p>
            <h1 className="font-display text-4xl leading-tight text-ink-foreground sm:text-5xl md:text-6xl">
              {role.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {role.description}
            </p>
            <span className="mt-8 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Coming Soon
            </span>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
              We’re preparing more details about this role. Contact our team to discuss your
              requirements in the meantime.
            </p>
            <a
              href="/contact#inquiry"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Ask about this role
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
