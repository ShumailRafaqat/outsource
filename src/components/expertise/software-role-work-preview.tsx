import {
  Activity,
  Bot,
  Braces,
  Bug,
  Cloud,
  Database,
  GitBranch,
  Headset,
  MessageSquareText,
  PanelsTopLeft,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { SoftwareRoleVisual, SoftwareRoleVisualKind } from "./software-role-visuals";

const visualIcons: Record<SoftwareRoleVisualKind, LucideIcon> = {
  "mobile-screen": Smartphone,
  "integration-flow": Braces,
  "crm-pipeline": Workflow,
  "test-report": Bug,
  "automation-suite": Activity,
  "release-pipeline": Cloud,
  "support-ticket": Headset,
  "issue-investigation": PanelsTopLeft,
  "model-connection": Bot,
  "supervised-workflow": Workflow,
  conversation: MessageSquareText,
  "agent-tools": Bot,
  "analytics-brief": Activity,
  "data-pipeline": GitBranch,
  "database-operations": Database,
  "maintenance-cycle": GitBranch,
  "web-application": PanelsTopLeft,
};

export function SoftwareRoleWorkPreview({ visual }: { visual: SoftwareRoleVisual }) {
  const Icon = visualIcons[visual.kind];

  return (
    <aside
      aria-label={`${visual.title} role work preview`}
      data-role-visual={visual.kind}
      className="relative mx-auto w-full max-w-xl py-4 sm:py-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.09] blur-3xl"
      />

      <div className="relative flex items-center gap-5 sm:gap-7">
        <div className="relative grid size-20 shrink-0 place-items-center sm:size-24">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-accent/25"
          />
          <span
            aria-hidden="true"
            className="absolute inset-2 rounded-full border border-dashed border-ink-muted/30"
          />
          <Icon
            aria-hidden="true"
            className="size-8 text-accent-bright sm:size-9"
            strokeWidth={1.5}
          />
          <span
            aria-hidden="true"
            className="absolute right-2 top-3 size-2 rounded-full bg-accent-bright shadow-[0_0_14px_rgba(54,211,197,0.75)]"
          />
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-accent-bright sm:text-[10px]">
            {visual.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-xl leading-tight text-ink-foreground sm:text-2xl">
            {visual.title}
          </h2>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-ink-muted sm:text-sm">
            {visual.summary}
          </p>
        </div>
      </div>

      <ol className="relative ml-10 mt-8 space-y-5 border-l border-ink-muted/30 pl-7 sm:ml-12 sm:mt-10 sm:space-y-6 sm:pl-9">
        {visual.steps.map((step, index) => (
          <li key={step} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[2.16rem] top-1 grid size-4 place-items-center rounded-full border ${
                index === visual.steps.length - 1
                  ? "border-accent bg-ink text-accent-bright"
                  : "border-ink-muted/50 bg-ink text-ink-muted"
              } sm:-left-[2.66rem]`}
            >
              <span className="size-1 rounded-full bg-current" />
            </span>
            <span className="text-sm leading-relaxed text-ink-foreground/90 sm:text-[15px]">
              {step}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-7 max-w-md text-[10px] leading-relaxed text-ink-muted sm:ml-12 sm:mt-8">
        {visual.footer}
      </p>
    </aside>
  );
}
