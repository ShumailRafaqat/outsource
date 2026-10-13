import { createFileRoute } from "@tanstack/react-router";

import { IndustriesDirectoryPage } from "@/components/industries/industries-directory-page";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Support — Quorisx" },
      {
        name: "description",
        content:
          "Explore dedicated Quorisx support for healthcare, logistics, home services, property management, e-commerce, technology, professional services, and hospitality.",
      },
    ],
  }),
  component: IndustriesDirectoryPage,
});
