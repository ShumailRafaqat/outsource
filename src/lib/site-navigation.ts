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
      page("expertise", "software-dev", "Software & Dev"),
      page("expertise", "hr-people-operations", "HR & People Operations"),
      page("expertise", "customer-service", "Customer Services & Support"),
    ],
  },
  {
    label: "Solutions",
    items: [
      page("solutions", "website-development", "Website Development"),
      page("solutions", "digital-marketing-seo", "Digital Marketing & SEO"),
      page("solutions", "paid-ads-lead-generation", "Paid Ads & Lead Generation"),
      page("solutions", "ai-automation", "AI & Automation"),
      { label: "Executive Support", href: "/expertise/admin-executive#roles" },
      { label: "Sales & Revenue Growth", href: "/expertise/sales-growth#roles" },
      { label: "24/7 Customer Support", href: "/solutions/customer-support" },
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
      { label: "Global Operating Model", href: "/" },
      page("why-quorisx", "our-approach", "Recruitment Methodology"),
      page("why-quorisx", "engagement-models", "Engagement Models"),
      page("why-quorisx", "quality-security", "Quality & Security"),
    ],
  },
  {
    label: "Resources",
    items: [
      page("resources", "insights", "Insights"),
      page("resources", "faqs", "FAQs"),
      page("resources", "outsourcing-guide", "Outsourcing Guide"),
    ],
  },
  {
    label: "About",
    items: [
      { label: "Company", href: "/about" },
      { label: "Why Bangkok", href: "/about#why-bangkok" },
      { label: "Offshore Through Quorisx", href: "/#outsourcing" },
      { label: "Benefits of Outsourcing", href: "/#benefits" },
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
