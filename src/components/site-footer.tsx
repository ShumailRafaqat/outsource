import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { expertiseFunctions, toRoleSlug } from "@/components/expertise/data";
import { navigationGroups } from "@/lib/site-navigation";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/quorisx/home/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/Quorisx/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/quorisx_/", icon: Instagram },
  { label: "Email", href: "mailto:info@quorisx.com", icon: Mail },
] as const;

export function SiteFooter() {
  const footerGroups = navigationGroups.filter((group) => group.label !== "Our Expertise");

  return (
    <footer className="relative overflow-hidden bg-ink px-5 pb-6 pt-10 text-ink-foreground sm:px-6 md:pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full border border-accent/10 shadow-[0_0_0_50px_rgba(48,171,183,0.025),0_0_0_100px_rgba(48,171,183,0.02)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <section className="mb-9 flex flex-col gap-6 rounded-2xl border border-ink-border bg-[#0c2635] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="eyebrow text-accent-bright">Quorisx · Global business solutions</p>
            <h2 className="mt-3 font-display text-2xl text-ink-foreground sm:text-3xl">
              Turn useful ideas into practical next steps.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
              Explore expertise and support options relevant to your business.
            </p>
          </div>
          <a
            href="/contact#inquiry"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Talk to our team
          </a>
        </section>

        <div className="grid gap-8 border-y border-ink-border py-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <a href="/" className="font-display text-3xl tracking-tight text-ink-foreground">
              Quorisx<span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              People, processes, and digital expertise to help your business grow—with U.S.
              headquarters and global delivery.
            </p>
            <p className="mt-4 flex items-start gap-2 text-xs text-ink-muted">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-bright" />
              Canton, Georgia · Bangkok, Thailand
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs">
              <a
                className="inline-flex items-center gap-2 text-ink-muted hover:text-accent-bright"
                href="mailto:info@quorisx.com"
              >
                <Mail aria-hidden="true" className="size-4 text-accent-bright" />
                info@quorisx.com
              </a>
              <a
                className="inline-flex items-center gap-2 text-ink-muted hover:text-accent-bright"
                href="tel:+12018129584"
              >
                <Phone aria-hidden="true" className="size-4 text-accent-bright" />
                201-812-9584
              </a>
            </div>
            <div className="mt-5 flex gap-2" aria-label="Connect with Quorisx">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  className="flex size-9 items-center justify-center rounded-full border border-ink-border text-ink-muted transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3"
          >
            {footerGroups.map((group, index) => (
              <section key={group.label} aria-labelledby={`site-footer-${index}`}>
                <h2
                  id={`site-footer-${index}`}
                  className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-ink-foreground"
                >
                  {group.label}
                </h2>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={`${item.label}-${item.href}`}>
                      <a
                        className="text-[11px] leading-relaxed text-ink-muted transition-colors hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <section className="border-b border-ink-border py-7" aria-labelledby="footer-expertise">
          <h2
            id="footer-expertise"
            className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-ink-foreground"
          >
            Our Expertise
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseFunctions.map((group) => (
              <li key={group.href} className="rounded-lg border border-ink-border p-3">
                <a
                  className="text-xs font-semibold text-ink-foreground hover:text-accent-bright"
                  href={group.href}
                >
                  {group.label}
                </a>
                <details className="group mt-2 border-t border-ink-border pt-2">
                  <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between text-[10px] text-ink-muted hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
                    Explore {group.roles.length} roles
                    <span aria-hidden="true" className="transition-transform group-open:rotate-180">
                      ⌄
                    </span>
                  </summary>
                  <ul className="mt-2 grid gap-x-2 gap-y-1 border-t border-ink-border pt-2 sm:grid-cols-2">
                    {group.roles.map((role) => (
                      <li key={role.title}>
                        <a
                          className="text-[10px] leading-relaxed text-ink-muted hover:text-accent-bright"
                          href={`${group.href}/${toRoleSlug(role.title)}`}
                        >
                          {role.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-3 pt-5 text-[10px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Quorisx. All rights reserved.</span>
          <span>U.S. headquartered · Globally delivered</span>
        </div>
      </div>
    </footer>
  );
}
