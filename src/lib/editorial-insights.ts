import { additionalInsights, marketingSeoInsights, paidAdsInsights } from "./editorial-articles";

export const insightTopics = [
  { id: "all", label: "All Insights" },
  { id: "sales", label: "Sales & Growth" },
  { id: "marketing", label: "Marketing & Visibility" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "customer-experience", label: "Customer Experience" },
] as const;

export type InsightTopicId = (typeof insightTopics)[number]["id"];
export type InsightTopic = Exclude<InsightTopicId, "all">;

export type InsightCard = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  topic: InsightTopic;
  image: string;
  imageAlt: string;
  href: string;
  wordCount: number;
  publishedAt?: string;
};

export type SampleInsightSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export const featuredInsight = {
  slug: "what-happens-when-customers-need-help-after-business-hours",
  title: "What Happens When Customers Need Help After Business Hours?",
  summary:
    "A practical way to plan after-hours customer support around real inquiry patterns, clear ownership, and safe escalation—not guesswork.",
  category: "Customer Experience",
  topic: "customer-experience" as const,
  image: "/images/img3.jpg",
  imageAlt: "Business professionals reviewing work together in a bright office",
  dek: "When a customer needs help outside your team's schedule, a thoughtful coverage plan can make the next step clear—without promising that every issue will be resolved immediately.",
  opening: [
    "A shopper reaches checkout late in the evening and cannot tell whether an order went through. The company’s live team has signed off for the day. The shopper is left deciding whether to wait, try again, or contact the business somewhere else.",
    "This is an illustrative scenario, not a measured customer outcome. It shows the kind of small uncertainty that an after-hours workflow should address. In this guide, we’ll map the gap, decide what needs a human response, and plan a handoff that fits your team’s real capacity.",
  ],
  scenario: {
    context:
      "A small online retailer receives questions through email, a website form, and social messages. The owner and two support staff work a set daytime schedule.",
    constraint:
      "The business cannot staff every channel around the clock. Orders, account questions, and time-sensitive delivery issues arrive at different times and need different handling.",
    decision:
      "The owner needs to decide which issues can wait, which require an on-call escalation, what customers should be told, and who owns the next response.",
  },
  causes: [
    {
      heading: "The schedule follows the team, not inquiry patterns",
      paragraphs: [
        "A support schedule is often inherited from office hours, even when customers use the website or place orders outside those hours. Before extending coverage, look at when messages actually arrive and which channels create them.",
        "A short review of timestamps and inquiry types can reveal whether the gap is concentrated in a predictable window or spread across the day. Use the information your business already has; do not assume that every late message needs immediate live coverage.",
      ],
    },
    {
      heading: "Customers cannot tell what happens next",
      paragraphs: [
        "A confirmation that a message was received is different from a promise that someone is actively reviewing it. If the wording is vague, a customer may submit the same request through several channels or expect an immediate reply.",
        "State the next step plainly: whether the message is queued for the next business day, whether an urgent issue has a separate route, and what information the customer should include.",
      ],
    },
    {
      heading: "Urgency and ownership are not defined",
      paragraphs: [
        "Without agreed categories, staff may treat every incoming request as equally urgent—or assume someone else will follow up. Define a small number of practical issue types, the person or role responsible, and the conditions that require escalation.",
        "Keep exceptions specific. A routine order-status question may wait for the next shift; a suspected account compromise or safety concern may need a different route. Your business decides these policies and the specialist follows them.",
      ],
    },
    {
      heading: "Channel handoffs split the conversation",
      paragraphs: [
        "When a customer starts in chat and follows up by email, the next person may not see the first interaction. Agree which system is the record of truth, what context must be captured, and how duplicate messages are linked.",
        "If a channel cannot be monitored outside working hours, make that limitation visible and offer a practical alternative rather than implying live coverage.",
      ],
    },
  ] satisfies readonly SampleInsightSection[],
  actionSteps: [
    {
      heading: "Map the current gap",
      body: "Review a representative period of inquiry timestamps, channels, topics, and first-response ownership. Note business hours, weekends, seasonal peaks, and any periods when the records are incomplete.",
    },
    {
      heading: "Separate routine requests from exceptions",
      body: "Create simple categories your team can apply consistently. Decide which requests can wait, which need a faster review, and which should bypass the normal queue for a named escalation contact.",
    },
    {
      heading: "Choose a coverage model that fits",
      body: "Compare the cost and operational load of next-business-day replies, limited evening coverage, rotating on-call ownership, or channel-specific coverage. Do not promise a response window until staffing, training, and handoffs can support it.",
    },
    {
      heading: "Write customer-facing expectations",
      body: "Update auto-replies and channel notices with accurate hours, expected next steps, and any urgent route. Avoid saying that a team is monitoring a queue if nobody is assigned to it.",
    },
    {
      heading: "Pilot and review the workflow",
      body: "Start with a defined channel or time window. Review missed handoffs, repeat messages, escalation clarity, and staff workload with the people doing the work. Adjust the process before expanding coverage.",
    },
  ],
  boundaries: [
    "A real owner is assigned to monitor the agreed queue and schedule.",
    "The team has approved response guidance, system access, and escalation contacts.",
    "Privacy, account verification, and sensitive-data handling are defined before access is granted.",
    "The expected volume and service hours justify the ongoing coverage and management effort.",
  ],
  specialist:
    "A customer support representative or live chat support agent may help monitor agreed channels, follow approved guidance, document interactions, and route exceptions. Your business still owns policy decisions, sensitive approvals, staffing coverage, and escalation outcomes. If volume is low or the workflow is unclear, documenting ownership may be more useful than hiring or automating.",
  takeaways: [
    "Start with inquiry timestamps and topics before adding support hours.",
    "Make the after-hours next step explicit for every channel.",
    "Define who owns routine requests and who receives exceptions.",
    "Treat privacy, access, training, and workload as part of the coverage plan.",
  ],
  related: [
    {
      label: "How to Plan Customer Support Coverage Without Overstaffing",
      href: "/expertise/customer-service",
    },
    {
      label: "Explore Customer Services & Support roles",
      href: "/expertise/customer-service",
    },
  ],
  publishedAt: undefined as string | undefined,
} as const;

export function readingTime(wordCount: number) {
  return `${Math.max(1, Math.ceil(wordCount / 220))} min read`;
}

const editorialArticles = [...paidAdsInsights, ...additionalInsights, ...marketingSeoInsights];

export const existingInsightCards: InsightCard[] = editorialArticles.map((insight) => ({
  slug: insight.slug,
  title: insight.title,
  summary: insight.summary,
  category: insight.category,
  topic: insight.topic,
  image: insight.image,
  imageAlt: insight.imageAlt,
  href: `/resources/insights/${insight.slug}`,
  wordCount: [
    insight.title,
    insight.summary,
    insight.dek,
    ...insight.opening,
    ...insight.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...insight.actionSteps.flatMap((step) => [step.heading, step.body]),
    ...insight.takeaways,
  ]
    .join(" ")
    .split(/\s+/).length,
}));

export const featuredInsightCard: InsightCard = {
  slug: featuredInsight.slug,
  title: featuredInsight.title,
  summary: featuredInsight.summary,
  category: featuredInsight.category,
  topic: featuredInsight.topic,
  image: featuredInsight.image,
  imageAlt: featuredInsight.imageAlt,
  href: `/resources/insights/${featuredInsight.slug}`,
  wordCount: [
    featuredInsight.title,
    featuredInsight.summary,
    featuredInsight.dek,
    ...featuredInsight.opening,
    ...featuredInsight.causes.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    ...featuredInsight.actionSteps.flatMap((step) => [step.heading, step.body]),
    ...featuredInsight.boundaries,
    featuredInsight.specialist,
    ...featuredInsight.takeaways,
  ]
    .join(" ")
    .split(/\s+/).length,
};

export const allInsightCards = [featuredInsightCard, ...existingInsightCards];
