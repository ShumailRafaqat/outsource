export type MarketingPrototypeRole = "SEO Specialist" | "Graphic Designer" | "Video Editor";
export type MarketingPrototypeVisual = "search-audit" | "campaign-kit" | "edit-timeline";

type MarketingPrototypeConfig = {
  slug: string;
  title: MarketingPrototypeRole;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  scenario: {
    business: string;
    bottleneck: string;
    assigned: string;
    review: string;
  };
  situationHeading: string;
  situationCopy: string;
  signatureHeading: string;
  signatureCopy: string;
  visual: MarketingPrototypeVisual;
  visualLabel: string;
  deliverables: readonly [string, string, string];
  responsibilities: readonly [string, string, string, string, string, string];
  workflow: readonly [string, string, string, string];
  tools: readonly [string, string, string, string];
  industries: readonly [
    { name: string; task: string },
    { name: string; task: string },
    { name: string; task: string },
  ];
  signals: readonly [string, string, string];
  faqs: readonly [readonly [string, string], readonly [string, string], readonly [string, string]];
  ctaHeading: string;
  ctaDescription: string;
};

export const marketingRolePrototypeContent: Record<
  MarketingPrototypeRole,
  MarketingPrototypeConfig
> = {
  "SEO Specialist": {
    slug: "seo-specialist",
    title: "SEO Specialist",
    metaTitle: "SEO Specialist for Ongoing Search Work | Quorisx",
    metaDescription:
      "Add an SEO Specialist to your team for search intent mapping, technical checks, on-page updates, and reviewable reporting—without ranking guarantees.",
    eyebrow: "MARKETING & CREATIVE / SEARCH",
    headline: "When customers search, who do they find?",
    introduction:
      "Give your search work a clear owner for research, page improvements, technical checks, and reporting. Your team sets priorities and approves changes; search positions are never guaranteed.",
    scenario: {
      business: "A local home-services company with several service pages",
      bottleneck:
        "Useful pages exist, but service-area topics overlap, page titles are inconsistent, and crawl issues are not prioritized.",
      assigned:
        "The specialist maps relevant search intent to existing pages, checks technical issues in approved tools, and drafts prioritized on-page updates.",
      review:
        "The marketing owner reviews the roadmap and page changes before publishing. Progress is reported with sources and limitations—not promised rankings.",
    },
    situationHeading: "The search visibility gap starts with unclear page work.",
    situationCopy:
      "When search queries, existing pages, technical checks, and content changes live in separate places, it is hard to tell what should be reviewed next. A specialist can make that work visible without claiming control over search engines.",
    signatureHeading: "From search intent to a reviewable page roadmap",
    signatureCopy:
      "Follow one illustrative service query from the question a customer asks to a mapped page, a technical check, and an owner-approved next action.",
    visual: "search-audit",
    visualLabel: "Illustrative query map and audit notes",
    deliverables: [
      "Search-intent groups mapped to the pages your team chooses to maintain.",
      "Technical audit notes with evidence, impact context, and suggested priority.",
      "On-page change brief covering titles, headings, links, and content gaps.",
    ],
    responsibilities: [
      "Research and group queries by intent, location, and the service scope you define.",
      "Map agreed query groups to existing pages and flag overlap or missing coverage.",
      "Review crawl, indexability, metadata, internal links, and page structure in approved tools.",
      "Draft or implement approved on-page changes within the agreed CMS and access boundaries.",
      "Prepare content briefs from search questions and subject-matter input supplied by your team.",
      "Report observed search and site signals with sources, time windows, and known attribution limits.",
    ],
    workflow: [
      "Agree priority services, locations, target pages, and access.",
      "Map search intent and record issues with evidence.",
      "Prepare prioritized changes for your review and approval.",
      "Track completed work and observed signals in an agreed report.",
    ],
    tools: ["Google Search Console", "Google Analytics 4", "Google Sheets", "Semrush"],
    industries: [
      {
        name: "Local home services",
        task: "Map service-area queries to distinct pages and note crawl or duplication issues.",
      },
      {
        name: "B2B software",
        task: "Organize product and problem queries into page briefs for a subject-matter review.",
      },
      {
        name: "E-commerce",
        task: "Review category-page structure, internal links, and the way product groups are described.",
      },
    ],
    signals: [
      "Priority fixes completed and reviewed against the agreed roadmap.",
      "Search queries and landing pages documented with source and reporting window.",
      "Technical issues recorded with a clear owner, status, and review context.",
    ],
    faqs: [
      [
        "Can an SEO Specialist guarantee rankings or traffic?",
        "No. Search visibility depends on factors outside one specialist's control. The work can be scoped around research, implementation, technical checks, and transparent reporting without promising positions, traffic, or leads.",
      ],
      [
        "Who approves site changes?",
        "Your designated marketing or web owner sets priorities and approves publishing, access, and changes with technical or brand impact.",
      ],
      [
        "What access should we provide?",
        "Start with the least access needed for the agreed tasks. Your team chooses tools, permissions, data rules, and whether work happens in a staging or live environment.",
      ],
    ],
    ctaHeading: "Give your search backlog a clear next step.",
    ctaDescription:
      "Share the pages, search work, and approvals your team needs help organizing. We can discuss an SEO Specialist scope that fits your operation.",
  },
  "Graphic Designer": {
    slug: "graphic-designer",
    title: "Graphic Designer",
    metaTitle: "Graphic Designer for Campaign Asset Production | Quorisx",
    metaDescription:
      "Add a Graphic Designer for campaign assets, ad variations, templates, and brand-consistent revisions with your team retaining creative approval.",
    eyebrow: "MARKETING & CREATIVE / DESIGN",
    headline: "Good ideas deserve consistent visual execution.",
    introduction:
      "Add production capacity for campaign graphics, reusable templates, and format variations. Your team supplies brand direction and reviews final assets before they go live.",
    scenario: {
      business: "A growing retail brand preparing weekly promotions",
      bottleneck:
        "Offer banners, social graphics, and email images are requested across teams, but each arrives in a different format and review state.",
      assigned:
        "The designer works from the approved brief and brand kit, creates a coordinated set of assets, and labels versions for each requested placement.",
      review:
        "The marketing owner checks copy, offer terms, accessibility, and brand fit, then approves the final files for publishing.",
    },
    situationHeading: "One campaign should not become a pile of mismatched files.",
    situationCopy:
      "A promotion often needs more than one visual: a lead graphic, supporting formats, and files that other teams can find and reuse. A clear brief and review point keep production focused.",
    signatureHeading: "One promotion, a coordinated set of formats",
    signatureCopy:
      "This original, illustrative asset board shows how one approved visual direction can be prepared for a web banner, a social post, and an email placement.",
    visual: "campaign-kit",
    visualLabel: "Illustrative campaign asset board",
    deliverables: [
      "Campaign key visual prepared from your approved brief and brand files.",
      "Placement-specific exports with dimensions and versions clearly named.",
      "Editable source files and handoff notes for the next campaign update.",
    ],
    responsibilities: [
      "Translate an approved campaign brief and brand kit into a clear visual direction.",
      "Create digital marketing assets such as banners, social graphics, and email visuals.",
      "Adapt approved designs to the sizes, formats, and placements your team requests.",
      "Maintain typography, color, spacing, and logo-use conventions from supplied guidelines.",
      "Organize revisions, file names, exports, and source documents for practical handoff.",
      "Flag missing copy, image rights, offer details, or approval decisions before final export.",
    ],
    workflow: [
      "Receive the brief, brand assets, copy, sizes, and deadline.",
      "Confirm the visual direction and any missing decisions.",
      "Create the agreed assets and prepare placement-ready versions.",
      "Route previews for your review, apply feedback, and hand off approved files.",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva"],
    industries: [
      {
        name: "Retail and e-commerce",
        task: "Prepare coordinated promotional graphics for store, email, and social placements.",
      },
      {
        name: "Professional services",
        task: "Create event, service, or educational graphics using the firm's approved identity.",
      },
      {
        name: "Food and hospitality",
        task: "Adapt seasonal menu or offer artwork to the sizes required by selected channels.",
      },
    ],
    signals: [
      "Requested assets delivered in the agreed formats and dimensions.",
      "Review comments, version status, and approvals recorded for each asset.",
      "Source files, exports, and naming follow the handoff convention your team selects.",
    ],
    faqs: [
      [
        "Who provides the brand assets and final copy?",
        "Your team supplies current brand guidance, approved copy, offer terms, and any licensed imagery or logos. The designer can flag gaps but will not invent claims or usage rights.",
      ],
      [
        "Can the designer publish directly to our channels?",
        "Publishing is only included when explicitly agreed and access is approved. Otherwise, the designer hands off reviewed files for your channel owner to publish.",
      ],
      [
        "How are revisions handled?",
        "Agree a feedback owner, review format, and revision scope in the brief. New formats or direction changes can be assessed before they are added to the work.",
      ],
    ],
    ctaHeading: "Make your next campaign easier to produce.",
    ctaDescription:
      "Tell us which assets, formats, and review steps your team needs. We can discuss a graphic-design role shaped around your brand workflow.",
  },
  "Video Editor": {
    slug: "video-editor",
    title: "Video Editor",
    metaTitle: "Video Editor for Repeatable Content Production | Quorisx",
    metaDescription:
      "Add a Video Editor to turn supplied footage into reviewable cuts, captions, and platform-ready exports without promising views or engagement.",
    eyebrow: "MARKETING & CREATIVE / VIDEO",
    headline: "Your raw footage is not yet a finished story.",
    introduction:
      "Give recorded footage a defined route to review: select usable moments, shape an edit, add approved captions, and prepare the formats your team requests.",
    scenario: {
      business: "A small real-estate team recording property walkthroughs on phones",
      bottleneck:
        "Clips accumulate after each showing, but nobody has a repeatable edit brief, caption review, or export checklist.",
      assigned:
        "The editor receives selected footage, the team's visual guide, approved property details, and a target duration, then assembles a vertical walkthrough.",
      review:
        "The owner checks property claims, captions, music rights, pacing, and the final export before publishing. No view or enquiry outcome is implied.",
    },
    situationHeading: "Useful footage gets stuck before it is ready to publish.",
    situationCopy:
      "When clips, feedback, captions, and exports are scattered, even a short video can be hard to finish consistently. A video editor can own the agreed post-production steps while your team controls the message and release.",
    signatureHeading: "From footage folder to a review-ready cut",
    signatureCopy:
      "See an illustrative edit plan for a short property walkthrough, including selects, pacing, captions, and an owner review before export.",
    visual: "edit-timeline",
    visualLabel: "Illustrative edit timeline and export plan",
    deliverables: [
      "Review cut assembled from footage your team provides.",
      "Caption file or burned-in captions using copy approved by your owner.",
      "Final exports and project handoff in the agreed aspect ratios and formats.",
    ],
    responsibilities: [
      "Review supplied footage and organize usable clips against the agreed brief.",
      "Assemble a clear sequence with the requested duration, pacing, and aspect ratio.",
      "Clean up dialogue levels and apply supplied or properly licensed audio assets.",
      "Add captions, titles, and graphics from approved copy and brand materials.",
      "Export requested versions and check playback, dimensions, and file naming.",
      "Track review notes and flag missing footage, claims, permissions, or audio rights.",
    ],
    workflow: [
      "Receive footage, intended audience, format, and approved claims.",
      "Organize selects and build an initial cut for review.",
      "Apply scoped feedback to pacing, captions, and graphics.",
      "Check exports and hand off final files and project materials.",
    ],
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Adobe After Effects", "Frame.io"],
    industries: [
      {
        name: "Real estate",
        task: "Edit supplied walkthrough clips into a captioned vertical property preview for owner review.",
      },
      {
        name: "Fitness and wellness",
        task: "Assemble short class or instructor clips from approved footage and release notes.",
      },
      {
        name: "B2B software",
        task: "Trim a supplied product demonstration into a clear feature walkthrough with approved labels.",
      },
    ],
    signals: [
      "Edit stages, review notes, and approval status visible for each video.",
      "Exports checked against the requested length, dimensions, and caption requirements.",
      "Footage, music, and image-rights questions surfaced before final handoff.",
    ],
    faqs: [
      [
        "What footage and information should we provide?",
        "Share the source files, intended audience, desired length and format, brand guidance, approved claims, and any footage or music-use restrictions.",
      ],
      [
        "Can the editor publish the video or choose claims and music?",
        "Only if publishing is explicitly in scope and approved access is provided. Your team approves claims, captions, and audio rights; the editor should not assume permission to use supplied assets.",
      ],
      [
        "Are views or engagement guaranteed?",
        "No. The editor delivers agreed post-production work. Distribution, audience response, and platform performance are outside a guaranteed editing outcome.",
      ],
    ],
    ctaHeading: "Turn the footage you already have into reviewable work.",
    ctaDescription:
      "Share your video formats, footage workflow, and approval process. We can discuss editing support that fits how your team publishes.",
  },
};

export function isMarketingPrototypeRole(role: string): role is MarketingPrototypeRole {
  return Object.prototype.hasOwnProperty.call(marketingRolePrototypeContent, role);
}

export function getMarketingRolePrototype(role: string) {
  if (isMarketingPrototypeRole(role)) {
    return marketingRolePrototypeContent[role as MarketingPrototypeRole];
  }
  return undefined;
}
