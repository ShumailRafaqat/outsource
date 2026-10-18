import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

import { expertiseFunctions, toRoleSlug } from "@/components/expertise/data";
import { navigationGroups } from "@/lib/site-navigation";

function menuId(prefix: string, label: string) {
  return `${prefix}-${label.toLowerCase().replaceAll(" ", "-")}-menu`;
}

function roleListId(prefix: string, href: string) {
  return `${prefix}-${href.slice(1).replaceAll("/", "-")}-roles`;
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openRoleGroup, setOpenRoleGroup] = useState<string | null>(null);

  const closeMenus = () => {
    setOpenGroup(null);
    setOpenRoleGroup(null);
    setMobileOpen(false);
  };

  const activeGroup = navigationGroups.find((group) => group.label === openGroup);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-border bg-ink/95 shadow-[0_8px_28px_-22px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="hidden border-b border-white/10 bg-black/15 lg:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-6 text-[0.65rem] font-medium tracking-wide text-ink-muted">
          <span>U.S. headquarters · Canton, Georgia</span>
          <div className="flex items-center gap-5">
            <a
              className="transition-colors hover:text-ink-foreground"
              href="mailto:info@quorisx.com"
            >
              info@quorisx.com
            </a>
            <a className="transition-colors hover:text-ink-foreground" href="tel:+12018129584">
              201-812-9584
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="/"
          onClick={closeMenus}
          className="group inline-flex shrink-0 items-center gap-2 rounded-md font-display text-[1.7rem] tracking-tight text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>
            Quorisx
            <span className="text-accent transition-colors group-hover:text-ink-foreground">.</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden h-full items-center gap-0 lg:flex">
          <a
            href="/"
            className="relative rounded-lg px-2 py-2 text-xs font-medium text-ink-muted transition-colors after:absolute after:inset-x-2 after:-bottom-[0.95rem] after:h-0.5 after:scale-x-0 after:bg-accent after:transition-transform hover:text-ink-foreground hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:px-2.5 xl:text-[0.82rem] xl:after:inset-x-2.5"
          >
            Home
          </a>
          {navigationGroups.map((group) => {
            const isOpen = openGroup === group.label;
            return (
              <button
                key={group.label}
                type="button"
                aria-expanded={isOpen}
                aria-controls={menuId("desktop", group.label)}
                onClick={() => {
                  setOpenRoleGroup(null);
                  setOpenGroup(isOpen ? null : group.label);
                }}
                className={`group relative inline-flex items-center gap-1 rounded-lg px-1.5 py-2 text-xs font-medium transition-colors after:absolute after:inset-x-1.5 after:-bottom-[0.95rem] after:h-0.5 after:scale-x-0 after:bg-accent after:transition-transform hover:text-ink-foreground hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:gap-1.5 xl:px-2 xl:text-[0.82rem] xl:after:inset-x-2 ${
                  isOpen ? "text-ink-foreground after:scale-x-100" : "text-ink-muted"
                }`}
              >
                {group.label}
                <ChevronDown
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 text-accent/80 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="/contact"
            aria-label="Talk to Our Team"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2.5 text-xs font-bold text-accent-foreground shadow-sm shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:px-4 sm:text-sm"
          >
            <span className="hidden sm:inline">Talk to Our Team</span>
            <span className="sm:hidden">Talk</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-main-navigation"
            onClick={() => {
              setMobileOpen((isOpen) => !isOpen);
              setOpenGroup(null);
              setOpenRoleGroup(null);
            }}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-border bg-ink-foreground/[0.04] text-ink-foreground transition-colors hover:border-accent/50 hover:bg-ink-foreground/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>

        {activeGroup && (
          <div
            id={menuId("desktop", activeGroup.label)}
            className="absolute left-1/2 top-full z-50 hidden w-[min(80rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 lg:block"
            onKeyDown={(event) => {
              if (event.key === "Escape") closeMenus();
            }}
          >
            <div className="overflow-hidden rounded-2xl border border-ink-border bg-ink shadow-[0_28px_80px_-28px_rgba(0,0,0,0.9)]">
              <div className="grid md:grid-cols-[0.72fr_1.6fr]">
                <div className="relative overflow-hidden border-b border-ink-border bg-gradient-to-br from-ink via-ink to-primary/50 p-7 md:border-b-0 md:border-r md:p-9">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full border border-accent/20"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-9 -left-9 h-36 w-36 rounded-full border border-accent/15"
                  />
                  <p className="relative text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
                    Explore Quorisx
                  </p>
                  <h2 className="relative mt-4 font-display text-3xl leading-tight text-ink-foreground">
                    {activeGroup.label}
                    <span className="text-accent">.</span>
                  </h2>
                  <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
                    Explore our {activeGroup.label.toLowerCase()} capabilities and find the right
                    fit for your team.
                  </p>
                  <a
                    href="/contact"
                    onClick={closeMenus}
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Let’s talk <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="mb-3 flex items-center justify-between px-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Browse by service
                    </p>
                    <span className="text-xs tabular-nums text-ink-muted/70">
                      {String(activeGroup.items.length).padStart(2, "0")} options
                    </span>
                  </div>
                  <div
                    className={`grid grid-cols-2 gap-2 lg:grid-cols-3 ${
                      activeGroup.label === "Our Expertise" ? "items-start" : ""
                    }`}
                  >
                    {activeGroup.items.map((item, index) => {
                      const roleGroup =
                        activeGroup.label === "Our Expertise"
                          ? expertiseFunctions.find((group) => group.href === item.href)
                          : undefined;
                      const isRoleGroupOpen = openRoleGroup === roleGroup?.href;
                      const rolesId = roleGroup ? roleListId("desktop", roleGroup.href) : undefined;

                      if (!roleGroup || !rolesId) {
                        return (
                          <a
                            key={item.href + item.label}
                            href={item.href}
                            onClick={closeMenus}
                            className="group flex min-h-[4.25rem] items-center gap-3 rounded-xl border border-transparent bg-ink-foreground/[0.025] px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-4"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-ink-border bg-ink text-[0.65rem] font-bold tabular-nums text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent group-hover:text-accent-foreground">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-ink-muted transition-colors group-hover:text-ink-foreground">
                              {item.label}
                            </span>
                            <ArrowUpRight
                              aria-hidden="true"
                              className="h-3.5 w-3.5 shrink-0 text-accent opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                            />
                          </a>
                        );
                      }

                      return (
                        <div
                          key={item.href + item.label}
                          className="rounded-xl border border-transparent bg-ink-foreground/[0.025] px-3 py-3 transition-all duration-200 hover:border-accent/30 hover:bg-accent/[0.07] sm:px-4"
                        >
                          <a
                            href={item.href}
                            onClick={closeMenus}
                            className="group flex min-h-[2.25rem] items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-ink-border bg-ink text-[0.65rem] font-bold tabular-nums text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent group-hover:text-accent-foreground">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-ink-muted transition-colors group-hover:text-ink-foreground">
                              {item.label}
                            </span>
                            <ArrowUpRight
                              aria-hidden="true"
                              className="h-3.5 w-3.5 shrink-0 text-accent opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                            />
                          </a>
                          <div className="mt-2 border-t border-ink-border/80 pt-1">
                            <button
                              type="button"
                              aria-expanded={isRoleGroupOpen}
                              aria-controls={rolesId}
                              onClick={() =>
                                setOpenRoleGroup(isRoleGroupOpen ? null : roleGroup.href)
                              }
                              className="group flex min-h-8 w-full items-center justify-between gap-2 text-left text-xs font-medium text-ink-muted transition-colors hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                              Explore {roleGroup.roles.length} roles
                              <ChevronDown
                                aria-hidden="true"
                                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                                  isRoleGroupOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isRoleGroupOpen && (
                              <div
                                id={rolesId}
                                className="mt-1 grid max-h-48 gap-1 overflow-y-auto border-t border-ink-border/70 pt-2"
                              >
                                {roleGroup.roles.map((role) => (
                                  <a
                                    key={role.title}
                                    href={`${roleGroup.href}/${toRoleSlug(role.title)}`}
                                    onClick={closeMenus}
                                    className="rounded-md px-2 py-1.5 text-xs leading-snug text-ink-muted transition-colors hover:bg-accent/[0.08] hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                  >
                                    {role.title}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {mobileOpen && (
        <nav
          id="mobile-main-navigation"
          aria-label="Main navigation"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink-border bg-ink px-4 py-4 sm:px-6 lg:hidden"
        >
          <a
            href="/"
            onClick={closeMenus}
            className="mb-2 flex min-h-12 items-center rounded-xl border border-ink-border bg-ink-foreground/[0.035] px-4 text-sm font-semibold text-ink-foreground transition-colors hover:border-accent/30 hover:bg-ink-foreground/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Home
          </a>
          {navigationGroups.map((group, groupIndex) => {
            const isOpen = openGroup === group.label;
            return (
              <div key={group.label} className="border-t border-ink-border/80">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={menuId("mobile", group.label)}
                  onClick={() => {
                    setOpenRoleGroup(null);
                    setOpenGroup(isOpen ? null : group.label);
                  }}
                  className={`flex min-h-14 w-full items-center justify-between gap-4 rounded-lg px-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isOpen ? "text-ink-foreground" : "text-ink-muted hover:text-ink-foreground"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[0.65rem] font-bold tabular-nums text-accent/80">
                      0{groupIndex + 1}
                    </span>
                    <span className="text-sm font-semibold">{group.label}</span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-4 w-4 text-accent transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={menuId("mobile", group.label)}
                    className="grid w-fit max-w-full grid-cols-1 justify-items-start gap-2 pb-4 pl-3 sm:grid-cols-2"
                  >
                    {group.items.map((item, index) => {
                      const roleGroup =
                        group.label === "Our Expertise"
                          ? expertiseFunctions.find((expertise) => expertise.href === item.href)
                          : undefined;
                      const isRoleGroupOpen = openRoleGroup === roleGroup?.href;
                      const rolesId = roleGroup ? roleListId("mobile", roleGroup.href) : undefined;

                      return roleGroup ? (
                        <div
                          key={item.href + item.label}
                          className="w-fit max-w-full rounded-xl border border-ink-border/70 bg-ink-foreground/[0.025] px-3 py-2.5"
                        >
                          <a
                            href={item.href}
                            onClick={closeMenus}
                            className="group flex min-h-8 items-center gap-3 text-sm text-ink-muted transition-colors hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            <span className="text-[0.65rem] font-bold tabular-nums text-accent/80">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="min-w-0 break-words">{item.label}</span>
                            <ArrowUpRight
                              aria-hidden="true"
                              className="h-3.5 w-3.5 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                            />
                          </a>
                          {roleGroup && rolesId && (
                            <div className="mt-2 border-t border-ink-border/70 pt-1">
                              <button
                                type="button"
                                aria-expanded={isRoleGroupOpen}
                                aria-controls={rolesId}
                                onClick={() =>
                                  setOpenRoleGroup(isRoleGroupOpen ? null : roleGroup.href)
                                }
                                className="flex min-h-8 w-full items-center justify-between gap-3 text-left text-xs text-ink-muted hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                              >
                                Explore {roleGroup.roles.length} roles
                                <ChevronDown
                                  aria-hidden="true"
                                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                                    isRoleGroupOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {isRoleGroupOpen && (
                                <div
                                  id={rolesId}
                                  className="mt-1 grid max-h-48 gap-1 overflow-y-auto border-t border-ink-border/70 pt-2"
                                >
                                  {roleGroup.roles.map((role) => (
                                    <a
                                      key={role.title}
                                      href={`${roleGroup.href}/${toRoleSlug(role.title)}`}
                                      onClick={closeMenus}
                                      className="rounded-md px-2 py-1.5 text-xs leading-snug text-ink-muted transition-colors hover:bg-accent/[0.08] hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                    >
                                      {role.title}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          key={item.href + item.label}
                          href={item.href}
                          onClick={closeMenus}
                          className="group flex min-h-12 w-fit max-w-full items-center gap-3 rounded-xl border border-ink-border/70 bg-ink-foreground/[0.025] px-3 py-2.5 text-sm text-ink-muted transition-colors hover:border-accent/30 hover:bg-accent/[0.06] hover:text-ink-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          <span className="text-[0.65rem] font-bold tabular-nums text-accent/80">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 break-words">{item.label}</span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <a
            href="/contact"
            onClick={closeMenus}
            className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Talk to Our Team <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
