export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

const page = (category: string, slug: string, label: string): NavigationItem => ({
  label,
  href: `/${category}/${slug}`,
});

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Our Expertise",
    items: [
      page("expertise", "admin-executive", "Admin & Executive"),
      page("expertise", "sales-development", "Sales & Development"),
      page("expertise", "marketing-creative", "Marketing & Creative"),
      page("expertise", "finance-accounting", "Finance & Accounting"),
      page("expertise", "software-dev", "Software & Dev"),
      page("expertise", "customer-service", "Customer Service"),
    ],
  },
  {
    label: "Solutions",
    items: [
      page("solutions", "software-development", "Software Development"),
      page("solutions", "website-development", "Website Development"),
      page("solutions", "it-services", "IT Services"),
      page("solutions", "digital-marketing-seo", "Digital Marketing & SEO"),
      page("solutions", "paid-ads-lead-generation", "Paid Ads & Lead Generation"),
      page("solutions", "ai-automation", "AI & Automation"),
      page("solutions", "admin-executive-support", "Admin & Executive Support"),
      page("solutions", "sales-growth", "Sales & Growth"),
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "All Industries", href: "/industries" },
      page("industries", "healthcare", "Healthcare"),
      page("industries", "logistics-fleet", "Logistics & Fleet"),
      page("industries", "home-services", "Home Services"),
      page("industries", "property-management", "Property Management"),
      page("industries", "e-commerce", "E-commerce"),
      page("industries", "technology-saas", "Technology & SaaS"),
      page("industries", "professional-services", "Professional Services"),
      page("industries", "hospitality", "Hospitality"),
    ],
  },
  {
    label: "Why Quorisx",
    items: [
      page("why-quorisx", "our-approach", "Our Approach"),
      page("why-quorisx", "engagement-models", "Engagement Models"),
      page("why-quorisx", "quality-security", "Quality & Security"),
      page("why-quorisx", "global-operating-model", "Global Operating Model"),
    ],
  },
  {
    label: "Resources",
    items: [
      page("resources", "case-studies", "Case Studies"),
      page("resources", "insights", "Insights"),
      page("resources", "faqs", "FAQs"),
      page("resources", "outsourcing-guide", "Outsourcing Guide"),
    ],
  },
  {
    label: "About",
    items: [
      { label: "Company", href: "/about" },
      page("about", "leadership", "Leadership"),
      page("about", "careers", "Careers"),
      page("about", "locations", "Locations"),
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Consultation Form", href: "/contact#inquiry" },
      { label: "Business Enquiry", href: "/contact#inquiry" },
      { label: "Contact Details", href: "/contact#contact-details" },
    ],
  },
];

export const comingSoonPage = (category: string, slug: string) =>
  navigationGroups
    .flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        group: group.label,
        category: item.href.split("/")[1],
        slug: item.href.split("/")[2],
      })),
    )
    .find((item) => item.category === category && item.slug === slug);
