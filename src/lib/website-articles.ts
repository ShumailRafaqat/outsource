export type WebsiteArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  visual: string;
  image: string;
  imageAlt: string;
  time: string;
  datePublished: string;
  author: string;
  sections: { title: string; body: string }[];
};

export const websiteArticles: WebsiteArticle[] = [
  {
    slug: "plan-a-website-that-earns-enquiries",
    category: "STRATEGY",
    title: "Your first website should do more than introduce you.",
    summary:
      "A useful website does more than look credible. Plan a clear first impression, answer buyer questions, and guide visitors toward one meaningful next step.",
    visual: "strategy",
    image: "/insight-strategy.webp",
    imageAlt: "Restaurant website design displayed across laptop and mobile screens",
    time: "3 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Start with one useful action",
        body: "Before choosing colours or layouts, decide what a visitor should do: request a quote, book a conversation, or buy a product. Build the page around that action and make the next step easy to recognise.",
      },
      {
        title: "Answer the questions behind the click",
        body: "Explain who you help, what you deliver, and how working with you feels. Use real work, clear service boundaries, and honest testimonials where you have permission. Specific information gives people a better basis for choosing you.",
      },
      {
        title: "Plan for life after launch",
        body: "Keep ownership of your domain, hosting, and essential accounts clear. Agree who updates content and handles enquiries. A website becomes useful when someone maintains the information and responds to the interest it creates.",
      },
    ],
  },
  {
    slug: "turn-website-visits-into-enquiries",
    category: "CONVERSION",
    title: "Getting visits, but no enquiries? Follow the journey.",
    summary:
      "More traffic will not fix a confusing enquiry journey. Find the points of friction, make contact easier, and measure the steps that matter.",
    visual: "conversion",
    image: "/insight-conversion.webp",
    imageAlt: "Healthcare website with clear service information and appointment options",
    time: "3 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Match the promise to the page",
        body: "If an advert promises a specific service, send people to a page that explains that service. A broad homepage can make visitors repeat the work of finding what interested them.",
      },
      {
        title: "Make contact feel manageable",
        body: "Ask only for information needed to begin the conversation. Explain what happens after submission, show useful validation messages, and provide an alternative contact method. Test the entire form on a real phone.",
      },
      {
        title: "Measure the whole path",
        body: "Track relevant contact actions with an appropriate privacy setup. Compare visits, form starts, completed enquiries, and qualified conversations. Improving one useful step is more informative than chasing a larger visitor count alone.",
      },
    ],
  },
  {
    slug: "mobile-first-website-design",
    category: "MOBILE DESIGN",
    title: "Design for the thumb. Earn the next tap.",
    summary:
      "Mobile-first web design starts with what people need now. Prioritize clear content, reachable controls, readable layouts, and real-device testing.",
    visual: "mobile",
    image: "/insight-mobile-design.webp",
    imageAlt: "Responsive website interfaces displayed on phones, tablets, and desktop screens",
    time: "2 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Put essential information first",
        body: "On a narrow screen, people should quickly find your offer, location or service area, and contact options. Short sections and descriptive headings help them decide what deserves a closer look.",
      },
      {
        title: "Give controls room to breathe",
        body: "Keep buttons comfortably separated and labels visible. Use suitable input types for phone numbers and email addresses. Avoid interactions that depend on hovering because touch users cannot rely on them.",
      },
      {
        title: "Test beyond the mockup",
        body: "Try the page with a keyboard, enlarged text, and a real phone. Check long titles, menus, validation errors, and landscape orientation. A responsive layout needs to remain useful when the content or viewport changes.",
      },
    ],
  },
  {
    slug: "improve-website-performance",
    category: "PERFORMANCE",
    title: "A beautiful website should feel fast, too.",
    summary:
      "Website performance is more than a score. Learn how image weight, third-party code, and thoughtful motion shape a faster, more comfortable experience.",
    visual: "speed",
    image: "/insight-performance.webp",
    imageAlt: "Web development team reviewing a website together in a bright studio",
    time: "3 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Start with the biggest assets",
        body: "Large images, background videos, and third-party scripts can add substantial loading work. Serve appropriately sized images, reserve their layout space, and load below-the-fold media only when needed.",
      },
      {
        title: "Make motion earn its place",
        body: "Animate opacity and transforms where practical. Avoid blocking the page behind a long introduction and respect reduced-motion preferences. An animation should help people follow the content, while leaving navigation and reading comfortable.",
      },
      {
        title: "Measure realistic conditions",
        body: "Use performance tools alongside testing on an ordinary phone and a slower connection. Compare the same pages before and after changes. A single score is a clue; the actual loading and interaction experience matters.",
      },
    ],
  },
  {
    slug: "make-your-website-search-ready",
    category: "SEO",
    title: "A live website is only the beginning of being found.",
    summary:
      "Search-ready websites pair useful service content with crawlable structure, accessible pages, and accurate local details—without promising rankings.",
    visual: "search",
    image: "/beautiful.png",
    imageAlt: "Responsive business website designs displayed across desktop and mobile screens",
    time: "3 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Make every service understandable",
        body: "Give important services a clear home with useful explanations, descriptive titles, and relevant internal links. Write for the questions your audience actually asks instead of repeating keywords across near-identical pages.",
      },
      {
        title: "Check discovery and access",
        body: "Review crawl access, canonical URLs, sitemap coverage, and accidental noindex settings. Search Console can help diagnose discovery and indexing issues. Submitting a page does not guarantee that it will be indexed or rank.",
      },
      {
        title: "Build relevant local context",
        body: "Where appropriate, keep your business profile, contact information, and service-area details accurate. Publish helpful local information when it reflects your real work. Search visibility takes ongoing work and cannot be promised by design alone.",
      },
    ],
  },
  {
    slug: "choose-a-website-platform",
    category: "DEVELOPMENT",
    title: "WordPress or a custom build? Start with your workflow.",
    summary:
      "Choose WordPress or a custom website by mapping your team's publishing workflow, integrations, ownership costs, and next stage of growth.",
    visual: "platform",
    image: "/insight-platform.webp",
    imageAlt: "Website design example showing a responsive business website layout",
    time: "3 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Map what your team needs to change",
        body: "A content-led business may value a familiar publishing workflow. A product with complex permissions or custom operations may need a more specialised application. List the tasks before comparing technology names.",
      },
      {
        title: "Consider the full ownership cost",
        body: "Include hosting, security updates, plugin licences, integrations, and maintenance. Either approach can become difficult when too many features are added without a clear owner or a realistic support plan.",
      },
      {
        title: "Choose for the next useful stage",
        body: "Ask how content will move, how accounts will be handed over, and how future changes will be delivered. The right platform supports your actual requirements and the people who will use it.",
      },
    ],
  },
];
