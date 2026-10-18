import { createFileRoute } from "@tanstack/react-router";

import { OutsourcingGuidePage } from "@/components/resources/outsourcing-guide";

export const Route = createFileRoute("/resources/outsourcing-guide")({
  head: () => ({
    meta: [
      { title: "Outsourcing Guide: Models, Benefits & Practical Steps — Quorisx" },
      {
        name: "description",
        content:
          "A practical guide to outsourcing: how it works, when to consider it, what can be outsourced, how to compare models, and how to choose a partner.",
      },
    ],
  }),
  component: OutsourcingGuidePage,
});
