import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  UsersRound,
  Workflow,
  Rocket,
  Check,
  ArrowUpRight,
  ChevronDown,
  CircleDollarSign,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  HeartPulse,
  Truck,
  House,
  Building2,
  ShoppingBag,
  Code2,
  BriefcaseBusiness,
  Plane,
  Target,
  Globe,
  TrendingUp,
  Timer,
  ShieldCheck,
  Megaphone,
  BadgeCheck,
  Eye,
  CircleAlert,
  GraduationCap,
  LockKeyhole,
  RefreshCw,
  Headset,
  ClipboardList,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { navigationGroups } from "@/lib/site-navigation";
import { expertiseFunctions, toRoleSlug } from "@/components/expertise/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quorisx — Offshore Teams & Managed Business Operations" },
      {
        name: "description",
        content:
          "U.S.-headquartered outsourcing: offshore staffing, managed operations, software, IT and marketing. Canton, Georgia · Bangkok, Thailand.",
      },
      { property: "og:title", content: "Quorisx — Extend Your Team. Streamline Operations." },
      {
        property: "og:description",
        content:
          "Offshore team extensions, managed business functions and specialist solutions from a U.S.-headquartered partner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const socialLinks: [LucideIcon, string, string][] = [
  [Linkedin, "LinkedIn", "https://www.linkedin.com/company/quorisx/home/"],
  [Facebook, "Facebook", "https://www.facebook.com/Quorisx/"],
  [Instagram, "Instagram", "https://www.instagram.com/quorisx_/"],
  [Mail, "Email", "mailto:info@quorisx.com"],
];

const initialHeroSlide = {
  src: "/us.png",
  alt: "",
  label: "QUORISX",
};

const heroSlides = [
  initialHeroSlide,
  {
    src: "/images/img.jpg",
    alt: "Colleagues working together in a bright modern office",
    label: "OUR PEOPLE",
  },
  {
    src: "/images/image2.jpg",
    alt: "Business professionals reviewing a project together",
    label: "YOUR BUSINESS",
  },
  {
    src: "/images/imag%204.jpg",
    alt: "A team collaborating in a modern office",
    label: "COLLABORATION",
  },
  {
    src: "/mar.png",
    alt: "A digital team planning campaigns around a shared analytics dashboard",
    label: "STRATEGY IN ACTION",
  },
];

const trustSteps: [LucideIcon, string, string][] = [
  [Building2, "U.S. engagement", "You contract and work directly with our U.S. company."],
  [UsersRound, "Dedicated team setup", "We build or assign your offshore team in Bangkok."],
  [
    Workflow,
    "Managed delivery",
    "U.S. client managers and the Bangkok team deliver with clear ownership.",
  ],
  [
    ShieldCheck,
    "Ongoing accountability",
    "Communication, reporting, and support stay connected to your U.S. point of contact.",
  ],
];

const ways: [LucideIcon, string, string, string][] = [
  [
    UsersRound,
    "Extend Your Team",
    "Dedicated professionals working within the client’s direction and systems.",
    "team-extension",
  ],
  [
    Workflow,
    "Outsource a Function",
    "Managed workflows or departments with clear responsibilities, reporting, and performance expectations.",
    "managed-function",
  ],
  [
    Rocket,
    "Deliver a Solution",
    "Outcome-focused projects such as websites, software, digital marketing, or automation.",
    "project-solution",
  ],
];

const services: [LucideIcon, string, string, string, string][] = [
  [
    ClipboardList,
    "Admin & Executive",
    "Seamless management of calendars, inboxes, documentation, and day-to-day operations.",
    "/expertise/admin-executive",
    "/admin.png",
  ],
  [
    Target,
    "Sales & Development",
    "Lead research, qualification, CRM updates, and appointment setting that accelerate your sales pipeline.",
    "/expertise/sales-development",
    "/sale.png",
  ],
  [
    Megaphone,
    "Marketing & Creative",
    "Campaign coordination, content production, and creative support that make your brand stand out.",
    "/expertise/marketing-creative",
    "/mar.png",
  ],
  [
    Code2,
    "Software & Dev",
    "Reliable software engineering, quality assurance, and ongoing product support that keep your systems running smoothly.",
    "/expertise/software-dev",
    "/dev.png",
  ],
  [
    Headset,
    "Customer Services & Support",
    "Responsive support across calls, email, and chat that turns every customer interaction into a positive experience.",
    "/expertise/customer-service",
    "/2.jpg",
  ],
];

const industries: [LucideIcon, string, string][] = [
  [
    HeartPulse,
    "Healthcare",
    "Scheduling, patient-facing administration and non-clinical coordination.",
  ],
  [Truck, "Fleet & Logistics", "Dispatch, shipment updates and driver coordination."],
  [House, "Home Services", "After-hours calls, service booking and customer follow-up."],
  [Building2, "Property Management", "Tenant communication and maintenance coordination."],
  [ShoppingBag, "E-commerce & Retail", "Order support, customer service and catalog operations."],
  [Code2, "Technology & SaaS", "Technical support, customer success, QA and development."],
  [BriefcaseBusiness, "Professional Services", "Research, CRM and document workflows."],
  [Plane, "Hospitality & Travel", "Reservation support and operations assistance."],
];

const benefits: [LucideIcon, string, string, string][] = [
  [
    CircleDollarSign,
    "Significant Cost Savings",
    "Turn fixed expenses into flexible ones. Pay only for the work you need, without the overhead of full-time salaries, office space, and benefits.",
    "Apple never built its own manufacturing plants. By partnering with companies like Foxconn, it kept production costs low while focusing on design and innovation. This approach played a major role in making Apple one of the most valuable companies in the world.",
  ],
  [
    Target,
    "Focus on Your Core Business",
    "Free your internal team from non-core tasks so they can concentrate on what actually grows the business — product, customers, and strategy.",
    "WhatsApp kept its team extremely lean (under 60 people) even when it was acquired by Facebook for $19 billion. By outsourcing much of the development work, the founders stayed focused on the product and user experience.",
  ],
  [
    Globe,
    "Access to Specialized Talent",
    "Get world-class expertise without the long hiring process or high local salaries. Tap into global talent pools instantly.",
    "Skype’s core peer-to-peer technology was built by a small team of Estonian developers. That specialized expertise helped turn Skype into a multi-billion dollar product that was later acquired by eBay and Microsoft.",
  ],
  [
    TrendingUp,
    "Fast & Flexible Scaling",
    "Scale your team up or down in weeks, not months. Perfect for seasonal demand, new launches, or rapid growth phases.",
    "Many companies restore full 24/7 customer support in under 24 hours and scale to hundreds of agents within weeks during peak periods — something nearly impossible with traditional hiring.",
  ],
  [
    Timer,
    "Faster Time-to-Market",
    "Launch products and features quicker by skipping the long process of building internal teams from scratch.",
    "Slack outsourced its initial design and development to a Canadian firm. This helped them launch faster and gain 500,000 users within the first 24 hours of public release.",
  ],
  [
    ShieldCheck,
    "Reduced Risk & Better Operations",
    "Distribute operational risk and gain access to proven processes, compliance expertise, and professional management.",
    "General Electric partnered with Genpact to outsource finance and accounting operations. The result was streamlined global processes, better reporting accuracy, and stronger compliance.",
  ],
];

const models: [LucideIcon, string, string, string[]][] = [
  [
    UsersRound,
    "Individual Professionals",
    "One dedicated hire, managed by you.",
    [
      "Full-time professional working only for you",
      "You manage them directly",
      "Best for specific skill needs",
      "Flexible and cost-effective",
    ],
  ],
  [
    Workflow,
    "Dedicated Teams",
    "A full team with reporting lines and shifts.",
    [
      "Complete team built for your business",
      "Includes team lead",
      "Follows your processes and time zones",
      "Ideal for long-term work",
    ],
  ],
  [
    ShieldCheck,
    "Managed Services",
    "We run the function against SLAs and KPIs.",
    [
      "We take full ownership",
      "Clear SLAs and KPIs",
      "You get results without managing people",
      "Best for ongoing functions",
    ],
  ],
  [
    Rocket,
    "Projects",
    "Scoped delivery with milestones and handover.",
    [
      "Fixed scope and timeline",
      "Milestone-based delivery",
      "Clear handover at the end",
      "Perfect for defined goals",
    ],
  ],
];

const quality: [LucideIcon, string, string, string][] = [
  [
    BadgeCheck,
    "Quality assurance",
    "Structured reviews and performance tracking.",
    "Regular audits and feedback loops to maintain high standards.",
  ],
  [
    Eye,
    "Supervision",
    "Defined team leads and reporting lines.",
    "Clear hierarchy so you always know who is accountable.",
  ],
  [
    CircleAlert,
    "Escalation",
    "Clear paths when issues arise.",
    "Fast resolution process with defined escalation steps.",
  ],
  [
    GraduationCap,
    "Training",
    "Onboarding to your tools and standards.",
    "Every professional is trained on your processes before starting.",
  ],
  [
    LockKeyhole,
    "Confidentiality",
    "Controlled access to client systems and data.",
    "Access controls and confidentiality agreements are established for each engagement.",
  ],
  [
    RefreshCw,
    "Continuity",
    "Cover planning for absences and growth.",
    "Backup resources are planned to help maintain continuity of work.",
  ],
];

function SolutionArtwork({ index }: { index: number }) {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[1.9/1] overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_75%_15%,#31516b_0%,#152b40_45%,#0d1c2b_100%)]"
    >
      <span className="absolute -right-10 -top-16 h-48 w-48 rounded-full border border-white/10" />
      <span className="absolute -right-3 -top-9 h-32 w-32 rounded-full border border-accent/20" />
      <svg
        className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        fill="none"
        viewBox="0 0 360 190"
      >
        {index === 0 && (
          <g>
            <rect x="45" y="28" width="270" height="134" rx="10" fill="#102238" stroke="#496176" />
            <path d="M45 54h270" stroke="#496176" />
            <circle cx="62" cy="41" r="3" fill="var(--accent)" />
            <circle cx="74" cy="41" r="3" fill="var(--accent-bright)" />
            <circle cx="86" cy="41" r="3" fill="#7599a5" />
            <path
              d="M62 72h34M62 86h22M62 100h28M62 114h18"
              stroke="#607b91"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M117 73h44M169 73h25M126 88h54M189 88h38M117 103h31M159 103h58M126 118h37M174 118h27M117 133h64"
              stroke="#a9bfce"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M117 73h12M169 88h11M151 103h8M163 118h11"
              stroke="var(--accent)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        )}
        {index === 1 && (
          <g>
            <rect x="52" y="25" width="256" height="140" rx="10" fill="#f5f2eb" />
            <path d="M52 49h256" stroke="#d8d4cb" />
            <circle cx="67" cy="37" r="3" fill="var(--accent)" />
            <circle cx="79" cy="37" r="3" fill="var(--accent-bright)" />
            <circle cx="91" cy="37" r="3" fill="#94a7a1" />
            <rect x="69" y="62" width="95" height="8" rx="4" fill="#183149" />
            <rect x="69" y="77" width="73" height="5" rx="2.5" fill="#a5abb0" />
            <rect x="69" y="87" width="62" height="5" rx="2.5" fill="#a5abb0" />
            <rect x="69" y="102" width="39" height="13" rx="4" fill="var(--accent)" />
            <rect x="187" y="61" width="101" height="70" rx="7" fill="#d9e3df" />
            <path d="m197 117 25-26 19 18 15-14 27 27h-86Z" fill="#8aafa7" />
            <circle cx="264" cy="77" r="7" fill="var(--accent-bright)" />
            <rect x="69" y="139" width="65" height="6" rx="3" fill="#d3d0c9" />
            <rect x="143" y="139" width="65" height="6" rx="3" fill="#d3d0c9" />
            <rect x="217" y="139" width="65" height="6" rx="3" fill="#d3d0c9" />
          </g>
        )}
        {index === 2 && (
          <g>
            <rect x="66" y="29" width="228" height="36" rx="8" fill="#142c42" stroke="#496176" />
            <rect x="66" y="77" width="228" height="36" rx="8" fill="#142c42" stroke="#496176" />
            <rect x="66" y="125" width="228" height="36" rx="8" fill="#142c42" stroke="#496176" />
            <rect x="82" y="40" width="18" height="14" rx="3" fill="#31516b" />
            <rect x="82" y="88" width="18" height="14" rx="3" fill="#31516b" />
            <rect x="82" y="136" width="18" height="14" rx="3" fill="#31516b" />
            <path
              d="M113 43h97M113 91h72M113 139h111"
              stroke="#90a8b9"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="271" cy="47" r="5" fill="#8ec5a1" />
            <circle cx="271" cy="95" r="5" fill="#8ec5a1" />
            <circle cx="271" cy="143" r="5" fill="var(--accent-bright)" />
          </g>
        )}
        {index === 3 && (
          <g>
            <rect x="51" y="24" width="258" height="143" rx="10" fill="#102238" stroke="#496176" />
            <path d="M77 133h204M77 60v73" stroke="#496176" />
            <path
              d="M90 118V99h23v19M132 118V84h23v34M174 118V96h23v22M216 118V70h23v48M258 118V55h12v63"
              fill="var(--accent)"
              fillOpacity=".82"
            />
            <path
              d="m90 86 44-19 42 10 39-23 45-13"
              stroke="var(--accent-bright)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="260" cy="41" r="5" fill="var(--accent-bright)" />
            <path d="M77 145h70" stroke="#607b91" strokeWidth="4" strokeLinecap="round" />
          </g>
        )}
        {index === 4 && (
          <g>
            <rect x="43" y="28" width="177" height="135" rx="10" fill="#f5f2eb" />
            <path d="M43 53h177" stroke="#d8d4cb" />
            <circle cx="58" cy="41" r="3" fill="var(--accent)" />
            <circle cx="70" cy="41" r="3" fill="var(--accent-bright)" />
            <rect x="57" y="68" width="149" height="45" rx="6" fill="#d9e3df" />
            <path d="m67 105 24-25 21 17 17-14 28 30H67Z" fill="#8aafa7" />
            <rect x="57" y="122" width="90" height="5" rx="2.5" fill="#89949b" />
            <rect x="57" y="133" width="59" height="5" rx="2.5" fill="#b6b9b7" />
            <rect x="158" y="122" width="48" height="16" rx="5" fill="var(--accent)" />
            <rect x="238" y="48" width="76" height="92" rx="10" fill="#142c42" stroke="#496176" />
            <path d="M252 112V94h9v18M267 112V80h9v32M282 112V68h9v44" fill="var(--accent)" />
            <path d="M251 122h39" stroke="#90a8b9" strokeWidth="4" strokeLinecap="round" />
          </g>
        )}
        {index === 5 && (
          <g>
            <path
              d="M91 95h54M215 95h54M173 61v23M173 107v26"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <rect x="42" y="68" width="67" height="54" rx="10" fill="#f5f2eb" />
            <rect x="145" y="33" width="67" height="54" rx="10" fill="#f5f2eb" />
            <rect x="145" y="108" width="67" height="54" rx="10" fill="#f5f2eb" />
            <rect x="251" y="68" width="67" height="54" rx="10" fill="#f5f2eb" />
            <circle cx="75" cy="87" r="8" fill="var(--accent)" />
            <path d="M64 105h22" stroke="#8b9ca5" strokeWidth="4" strokeLinecap="round" />
            <path d="m173 48 4 9 9 4-9 4-4 9-4-9-9-4 9-4 4-9Z" fill="var(--accent)" />
            <path
              d="M160 128h26M160 139h18"
              stroke="#8b9ca5"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M273 85h22M273 96h22M273 107h14"
              stroke="#8b9ca5"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="110" cy="95" r="3" fill="var(--accent-bright)" />
            <circle cx="249" cy="95" r="3" fill="var(--accent-bright)" />
          </g>
        )}
        {index === 6 && (
          <g>
            <rect x="57" y="26" width="246" height="138" rx="10" fill="#f5f2eb" />
            <path d="M57 53h246" stroke="#d8d4cb" />
            <circle cx="73" cy="40" r="3" fill="var(--accent)" />
            <circle cx="85" cy="40" r="3" fill="var(--accent-bright)" />
            <rect x="75" y="68" width="103" height="78" rx="6" fill="#fffefa" stroke="#d8d4cb" />
            <path d="M75 86h103" stroke="#d8d4cb" />
            <path
              d="M93 62v12M159 62v12"
              stroke="var(--accent)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M91 99h12M113 99h12M135 99h12M91 118h12M113 118h12M135 118h12"
              stroke="#8b9ca5"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <rect x="191" y="69" width="91" height="31" rx="6" fill="#d9e3df" />
            <circle cx="207" cy="84" r="8" fill="var(--accent)" />
            <path d="M223 80h44M223 88h32" stroke="#79929a" strokeWidth="3" strokeLinecap="round" />
            <rect x="191" y="109" width="91" height="37" rx="6" fill="#e9e4d9" />
            <path
              d="M204 121h62M204 132h44"
              stroke="#89949b"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        )}
        {index === 7 && (
          <g>
            <rect x="48" y="27" width="264" height="137" rx="10" fill="#f5f2eb" />
            <path d="M48 52h264" stroke="#d8d4cb" />
            <circle cx="64" cy="40" r="3" fill="var(--accent)" />
            <circle cx="76" cy="40" r="3" fill="var(--accent-bright)" />
            <rect x="65" y="67" width="66" height="79" rx="7" fill="#e8ece8" />
            <rect x="147" y="67" width="66" height="79" rx="7" fill="#e8ece8" />
            <rect x="229" y="67" width="66" height="79" rx="7" fill="#e8ece8" />
            <circle cx="80" cy="84" r="6" fill="var(--accent)" />
            <circle cx="162" cy="84" r="6" fill="var(--accent-bright)" />
            <circle cx="244" cy="84" r="6" fill="#86aa9d" />
            <path
              d="M92 82h26M174 82h26M256 82h26"
              stroke="#526b7b"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <rect x="76" y="99" width="44" height="5" rx="2.5" fill="#9ba7a8" />
            <rect x="76" y="110" width="33" height="5" rx="2.5" fill="#b8bfbd" />
            <rect x="158" y="99" width="44" height="5" rx="2.5" fill="#9ba7a8" />
            <rect x="158" y="110" width="34" height="5" rx="2.5" fill="#b8bfbd" />
            <rect x="240" y="99" width="44" height="5" rx="2.5" fill="#9ba7a8" />
            <rect x="240" y="110" width="36" height="5" rx="2.5" fill="#b8bfbd" />
            <path
              d="m92 132 12-8 12 4 11-12M174 132l12-7 11 2 12-13M256 132l11-9 11 3 11-15"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}
      </svg>
      <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-ink/60 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70">
        {
          ["Build", "Web", "Systems", "Insights", "Campaigns", "Automation", "Admin", "Growth"][
            index
          ]
        }
      </span>
    </div>
  );
}

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-6 py-14 md:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Heading({
  eyebrow,
  title,
  sub,
  light,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2
        className={`text-4xl leading-[1.05] md:text-5xl ${light ? "text-ink-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 text-lg ${light ? "text-ink-muted" : "text-muted-foreground"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Index() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeWay, setActiveWay] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openBenefit, setOpenBenefit] = useState<number | null>(null);
  const [activeModel, setActiveModel] = useState(0);
  const [openQuality, setOpenQuality] = useState<number | null>(null);
  const [hoveredQuality, setHoveredQuality] = useState<number | null>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const activeHeroSlideData = heroSlides[activeHeroSlide] ?? initialHeroSlide;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
      }
    }, 5200);

    return () => window.clearInterval(interval);
  }, [activeHeroSlide]);

  useEffect(() => {
    const root = homeRef.current;
    if (
      !root ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const cards = root.querySelectorAll<HTMLElement>("[data-home-card]");
    if (!cards.length) return;

    const siblingIndexes = new Map<Element, number>();
    cards.forEach((card) => {
      const parent = card.parentElement;
      if (!parent) return;

      const index = siblingIndexes.get(parent) ?? 0;
      siblingIndexes.set(parent, index + 1);
      card.style.setProperty("--home-card-delay", `${(index % 3) * 100}ms`);
    });

    root.classList.add("home-card-reveal-active");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("home-card-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    cards.forEach((card) => observer.observe(card));
    return () => {
      observer.disconnect();
      root.classList.remove("home-card-reveal-active");
    };
  }, []);

  return (
    <div ref={homeRef} className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="group/hero relative isolate min-h-[590px] overflow-hidden bg-ink md:min-h-[min(760px,calc(100svh-6.5rem))]">
        <img
          key={activeHeroSlideData.src}
          src={activeHeroSlideData.src}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 z-[1] h-full w-full animate-[hero-image-reveal_5.2s_ease-out_both] object-cover opacity-55 motion-reduce:animate-none"
        />
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/95 via-ink/65 to-ink/15"
          aria-hidden="true"
        />
        <div className="relative z-[3] mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-20 md:min-h-[min(760px,calc(100svh-6.5rem))] md:py-24">
          <div className="relative max-w-4xl border-y border-accent/45 py-6 pl-5 sm:pl-8 md:border-y-0 md:border-l-2 md:py-3">
            <span
              aria-hidden="true"
              className="absolute -left-px top-0 hidden h-16 w-16 border-l-2 border-t-2 border-accent md:block"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-px right-0 hidden h-16 w-16 border-b-2 border-r-2 border-accent md:block"
            />
            <p className="eyebrow mb-5 text-[0.625rem]">
              Global Outsourcing & Business Solutions · Canton, Georgia, USA
            </p>
            <h1
              data-home-hero-reveal="heading"
              className="max-w-5xl font-display text-[1.7rem] font-normal leading-[1.08] tracking-[-0.025em] text-ink-foreground sm:text-[2.1rem] md:text-[2.7rem] lg:text-[3.35rem]"
            >
              Extend Your Team.
              <br />
              Streamline Operations.
              <br />
              <span className="text-accent">Accelerate Growth.</span>
            </h1>
            <p
              data-home-hero-reveal="description"
              className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base"
            >
              From individual offshore professionals to fully managed business functions, Quorisx
              helps organizations scale through flexible staffing, operational support, and
              specialized technology and digital solutions.
            </p>
            <div data-home-hero-reveal="actions" className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#outsourcing"
                className="group inline-flex h-12 items-center justify-between gap-4 rounded-md bg-accent py-1.5 pl-5 pr-2 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transition-none sm:h-14 sm:pl-6"
              >
                Explore Outsourcing
                <span className="grid size-9 place-items-center rounded-md bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none sm:size-10">
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </span>
              </a>
              <a
                href="/contact"
                className="group inline-flex h-12 items-center justify-between gap-4 rounded-md border border-white/30 bg-white/[0.04] py-1.5 pl-5 pr-2 text-sm font-semibold text-ink-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/[0.09] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transition-none sm:h-14 sm:pl-6"
              >
                Talk to Our Team
                <span className="grid size-9 place-items-center rounded-md border border-white/20 bg-white/[0.06] transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/15 motion-reduce:transition-none sm:size-10">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  />
                </span>
              </a>
            </div>
            <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-muted sm:mt-12">
              U.S. Headquartered · Globally Delivered
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-5 right-4 z-10 flex items-center gap-2.5 sm:bottom-8 sm:right-8 md:right-10"
          role="group"
          aria-label="Choose a hero background"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[9px]">
            {activeHeroSlideData.label}
          </span>
          <span aria-hidden="true" className="text-[8px] text-white/40">
            {String(activeHeroSlide + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show ${slide.label.toLowerCase()} background`}
                aria-pressed={activeHeroSlide === index}
                onClick={() => setActiveHeroSlide(index)}
                className={`relative h-5 w-5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  activeHeroSlide === index ? "w-7" : ""
                }`}
              >
                <span
                  className={`absolute left-1/2 top-1/2 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    activeHeroSlide === index
                      ? "w-6 bg-white/70"
                      : "w-1.5 bg-white/40 group-hover/hero:bg-white"
                  }`}
                />
                {activeHeroSlide === index && (
                  <span className="absolute inset-x-1.5 bottom-1 h-0.5 overflow-hidden rounded-full bg-white/25">
                    <span
                      key={activeHeroSlide}
                      aria-hidden="true"
                      className="block h-full origin-left animate-[hero-slide-progress_5.2s_linear_forwards] rounded-full bg-accent motion-reduce:animate-none"
                    />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <a
          href="#about"
          aria-label="Scroll down to learn about Quorisx"
          className="group absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none sm:bottom-7"
        >
          <span>Scroll to explore</span>
          <ChevronDown
            aria-hidden="true"
            className="size-5 animate-bounce text-accent motion-reduce:animate-none"
          />
        </a>
      </section>

      {/* Who we are */}
      <Section id="about" className="bg-background pb-8 pt-8 md:pb-10 md:pt-10">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative mx-auto aspect-[1.1/1] w-full max-w-xl">
            <span
              aria-hidden="true"
              className="absolute bottom-[8%] right-[4%] h-[72%] w-[72%] border-b-2 border-r-2 border-accent/60"
            />
            <img
              src="/images/image2.jpg"
              alt="Colleagues collaborating around a table in a bright office"
              width={1600}
              height={1104}
              loading="lazy"
              className="absolute right-0 top-[17%] z-10 h-[62%] w-[75%] object-cover shadow-lg"
            />
            <img
              src="/images/imag%204.jpg"
              alt="Colleagues collaborating in a bright modern office"
              width={900}
              height={900}
              loading="lazy"
              className="absolute left-0 top-[3%] z-20 h-[35%] w-[43%] border-4 border-background object-cover shadow-xl"
            />
            <img
              src="/images/img.jpg"
              alt="Colleagues discussing work in a bright modern office"
              width={1080}
              height={720}
              loading="lazy"
              className="absolute bottom-0 left-[7%] z-20 h-[40%] w-[47%] border-4 border-background object-cover shadow-xl"
            />
            <span
              aria-hidden="true"
              className="absolute -left-3 top-[12%] z-0 h-20 w-20 border-l-2 border-t-2 border-accent/50 sm:-left-5 sm:h-28 sm:w-28"
            />
          </div>
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Our story · About Quorisx</p>
            <h2 className="text-3xl leading-[1.08] md:text-5xl">
              A Business Partner Built Around Your Needs
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Quorisx supports businesses through offshore talent, managed processes, and
                specialized solutions. Our approach is designed to fit your existing teams, tools,
                workflows, and growth priorities.
              </p>
              <p className="font-semibold text-foreground">
                We provide the people, manage the process, or deliver the solution.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-5 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </Section>

      {/* Three ways */}
      <Section id="ways" className="bg-background pb-12 pt-12 md:pb-20 md:pt-16">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="eyebrow mb-3">Our services</p>
          <h2 className="text-3xl leading-[1.05] md:text-5xl">Three Ways to Work With Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Flexible ways to add expertise, support operations, and move important work forward.
          </p>
        </div>
        <ol className="relative grid gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {ways.map(([Icon, title, description, slug], index) => {
            const selected = activeWay === index;
            return (
              <li key={title} className="relative" data-home-card>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveWay(index)}
                  className={`group relative flex w-full flex-col items-center rounded-lg px-4 py-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    selected ? "bg-accent/[0.035]" : "hover:bg-accent/[0.035]"
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      selected
                        ? "border-accent bg-sky-50 text-accent shadow-lg shadow-accent/10"
                        : "border-accent/35 bg-card text-primary group-hover:-translate-y-1 group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -right-1 top-3 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-3 h-2 w-2 rounded-full bg-accent/60"
                    />
                    <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.6} />
                  </span>
                  <span className="mt-5 block max-w-sm">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      0{index + 1}
                    </span>
                    <span className="mt-2 block font-display text-xl leading-tight text-foreground">
                      {title}
                    </span>
                    <span className="mx-auto mt-3 block max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </span>
                  </span>
                  {selected && (
                    <Check aria-label="Selected" className="mt-3 h-4 w-4 shrink-0 text-accent" />
                  )}
                </button>
                <div className="mt-1 flex justify-center">
                  <a
                    href={`/ways-to-work/${slug}`}
                    className="group/link inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-accent bg-accent px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-foreground shadow-md shadow-accent/15 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/90 hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    Learn more
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Core outsourcing */}
      <Section id="outsourcing" className="bg-background">
        <Heading
          eyebrow="Explore the roles"
          title="Every Function. Available Offshore Through Quorisx."
          sub="Quorisx provides dedicated offshore professionals across business functions. Start with one role, then grow your support as your business needs evolve."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(([Icon, title, description, href, image], index) => (
            <article
              key={title}
              data-home-card
              className="group relative isolate flex min-h-[27rem] flex-col overflow-hidden border border-border bg-card text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
            >
              <div className="relative h-40 overflow-hidden sm:h-44">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/5"
                />
                <div className="absolute inset-x-5 bottom-4 flex items-end justify-between sm:inset-x-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Quorisx expertise
                  </span>
                  <span className="font-display text-3xl leading-none text-white/80">
                    0{index + 1}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent transition-all duration-300 group-hover:rotate-[-4deg] group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-2xl leading-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  <a
                    href={href}
                    className="inline-flex min-h-11 items-center justify-center gap-2 bg-accent px-4 py-2.5 text-xs font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:text-sm"
                  >
                    Explore Roles
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </a>
                  <a
                    href="#benefits"
                    className="inline-flex min-h-11 items-center justify-center gap-2 border border-border px-3 py-2.5 text-xs font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:px-4 sm:text-sm"
                  >
                    Get the Full Picture
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section id="industries" className="bg-ink">
        <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Industries we support</p>
            <h2 className="max-w-xl text-4xl leading-[1.05] text-ink-foreground md:text-5xl">
              Built Around the Way Your Industry Operates.
            </h2>
          </div>
          {(() => {
            const [Icon, title, description] = industries[activeIndustry];
            return (
              <div className="relative min-h-48 overflow-hidden rounded-lg border border-ink-border bg-white/[0.03] p-6 md:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full border border-accent/20"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-8 h-40 w-40 rounded-full border border-accent/15"
                />
                <div
                  key={activeIndustry}
                  className="industry-feature-content relative flex h-full flex-col justify-between gap-8 sm:flex-row sm:items-end"
                >
                  <div>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Industry focus · 0{activeIndustry + 1}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-ink-foreground md:text-4xl">
                      {title}
                    </h3>
                  </div>
                  <p aria-live="polite" className="max-w-sm text-sm leading-relaxed text-ink-muted">
                    {description}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
        <div
          aria-label="Choose an industry"
          className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4"
          role="group"
        >
          {industries.map(([Icon, title], index) => {
            const selected = activeIndustry === index;
            return (
              <button
                key={title}
                type="button"
                data-home-card
                aria-pressed={selected}
                onClick={() => setActiveIndustry(index)}
                className={`group flex min-h-16 items-center gap-3 rounded-md border px-3 py-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:px-4 ${
                  selected
                    ? "border-accent/70 bg-accent/10 text-ink-foreground"
                    : "border-ink-border text-ink-muted hover:border-accent/50 hover:text-ink-foreground"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className={`h-4 w-4 shrink-0 transition-colors ${selected ? "text-accent" : "text-ink-muted group-hover:text-accent"}`}
                  strokeWidth={1.7}
                />
                <span className="text-xs font-semibold leading-tight sm:text-sm">{title}</span>
              </button>
            );
          })}
        </div>
      </Section>

      {/* Benefits of outsourcing */}
      <Section id="benefits" className="bg-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3">Benefits of outsourcing</p>
          <h2 className="font-display text-3xl leading-[1.08] md:text-5xl">
            Why Smart Businesses Choose Outsourcing
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Outsourcing is more than just cutting costs. It’s a strategic move that helps companies
            move faster, focus better, and scale smarter. Here’s how real businesses have benefited
            — told through real stories.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map(([Icon, title, description, story], index) => {
            const expanded = openBenefit === index;
            const storyId = `benefit-story-${index + 1}`;

            return (
              <article
                key={title}
                data-home-card
                className={`group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg sm:p-6 ${
                  expanded ? "border-accent/50 shadow-md" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-accent/80">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl leading-tight text-foreground">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>

                <div
                  id={storyId}
                  aria-hidden={!expanded}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-5 border-t border-border pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        Real Story
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{story}</p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  aria-controls={storyId}
                  aria-expanded={expanded}
                  onClick={() => setOpenBenefit(expanded ? null : index)}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                >
                  {expanded ? "Close story" : "Read Real Story"}
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-4 w-4 text-accent transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 rounded-xl border border-accent/20 bg-card px-6 py-8 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left md:px-10">
          <p className="font-display text-xl leading-snug text-foreground md:text-2xl">
            Ready to unlock these benefits for your business?
          </p>
          <a
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Let’s Talk About Outsourcing
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </Section>

      {/* Models */}
      <Section className="bg-secondary">
        <Heading eyebrow="Engagement models" title="Choose the model that fits how you work." />
        <div
          aria-label="Choose an engagement model"
          className="grid min-w-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          role="tablist"
        >
          {models.map(([Icon, title, description], index) => {
            const selected = activeModel === index;
            return (
              <button
                key={title}
                id={`engagement-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="engagement-model-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveModel(index)}
                onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
                  if (
                    event.key === "ArrowRight" ||
                    event.key === "ArrowDown" ||
                    event.key === "ArrowLeft" ||
                    event.key === "ArrowUp"
                  ) {
                    event.preventDefault();
                    const direction =
                      event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
                    const nextIndex = (index + direction + models.length) % models.length;
                    setActiveModel(nextIndex);
                    document.getElementById(`engagement-tab-${nextIndex}`)?.focus();
                  }
                }}
                className={`group relative flex min-h-36 min-w-0 flex-col items-start border-b-2 px-4 py-5 text-left transition-colors duration-300 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:min-h-40 sm:px-5 ${
                  selected
                    ? "border-accent bg-background/60"
                    : "border-border/70 bg-transparent hover:border-accent/50 hover:bg-background/30"
                }`}
              >
                <span className="flex w-full min-w-0 items-center justify-between gap-3">
                  <Icon
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 transition-colors ${selected ? "text-accent" : "text-muted-foreground group-hover:text-accent"}`}
                    strokeWidth={1.7}
                  />
                  <span
                    className={`shrink-0 text-xs font-semibold tracking-[0.16em] ${selected ? "text-accent" : "text-muted-foreground"}`}
                  >
                    0{index + 1}
                  </span>
                </span>
                <span
                  className={`mt-5 block max-w-full break-words font-display text-lg leading-tight ${selected ? "text-foreground" : "text-foreground/80"}`}
                >
                  {title}
                </span>
                <span className="mt-2 block max-w-full break-words text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {description}
                </span>
              </button>
            );
          })}
        </div>

        {(() => {
          const [Icon, title, description, details] = models[activeModel];
          return (
            <div
              key={activeModel}
              id="engagement-model-panel"
              role="tabpanel"
              aria-labelledby={`engagement-tab-${activeModel}`}
              tabIndex={0}
              className="engagement-model-content mt-8 border-l-2 border-accent pl-5 sm:mt-10 sm:pl-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <div>
                  <p className="eyebrow mb-1">Model 0{activeModel + 1}</p>
                  <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                    {title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {description}
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </Section>

      {/* Trust and dual presence */}
      <Section id="presence" className="overflow-hidden bg-ink">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div id="why" className="max-w-2xl">
              <p className="eyebrow mb-4">Contract locally. Operate globally.</p>
              <h2 className="font-display text-4xl leading-[1.04] text-ink-foreground sm:text-5xl md:text-6xl">
                U.S. Company.
                <br />
                <em className="text-accent">Global Teams.</em>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                <p>
                  Headquartered in Canton, Georgia, every client relationship with Quorisx is
                  structured through our U.S. entity. Contracts, billing, and primary accountability
                  remain with us in the United States.
                </p>
                <p>
                  Our Bangkok operations center powers dedicated offshore teams and specialized
                  delivery. U.S.-based client managers and on-the-ground representatives keep
                  communication direct, oversight clear, and ownership unambiguous at every stage.
                </p>
              </div>
              <p className="mt-6 border-l-2 border-accent pl-4 font-display text-xl leading-snug text-ink-foreground sm:text-2xl">
                One partner. Local accountability. International capability.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-80 sm:w-80"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10 sm:h-64 sm:w-64"
              />
              <div className="relative grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-3">
                <article className="relative rounded-xl border border-white/15 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-accent/15 text-accent">
                      <Building2 aria-hidden="true" className="size-5" />
                    </span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                      U.S. headquarters
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink-foreground">
                    Canton, Georgia
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                    Contracts · Billing · Client accountability
                  </p>
                </article>

                <div className="relative flex h-10 items-center justify-center sm:h-auto sm:w-16">
                  <span className="absolute h-full w-px border-l border-dashed border-accent/60 sm:h-px sm:w-full sm:border-l-0 sm:border-t" />
                  <span className="relative grid size-8 place-items-center rounded-full border border-accent/40 bg-ink text-accent shadow-[0_0_24px_rgba(216,121,73,0.2)]">
                    <Globe aria-hidden="true" className="size-4" />
                  </span>
                </div>

                <article className="relative rounded-xl border border-white/15 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-sky-300/10 text-sky-200">
                      <UsersRound aria-hidden="true" className="size-5" />
                    </span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                      Operations center
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink-foreground">
                    Bangkok, Thailand
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                    Dedicated teams · Specialized delivery · On-the-ground support
                  </p>
                </article>
              </div>
              <p className="relative mt-5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                One connected team · Clear ownership at every step
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
            <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
                  A clear path from day one
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink-foreground sm:text-3xl">
                  How your partnership works
                </h3>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-ink-muted sm:text-right">
                Your primary relationship stays with our U.S. team.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustSteps.map(([Icon, title, description], index) => (
                <li
                  key={title}
                  data-home-card
                  className="group relative rounded-lg border border-white/10 bg-white/[0.035] p-4 transition-colors duration-200 hover:border-accent/35 hover:bg-white/[0.06] sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.8} />
                    </span>
                    <span className="font-display text-2xl text-white/25">0{index + 1}</span>
                  </div>
                  <h4 className="mt-5 font-display text-lg leading-tight text-ink-foreground">
                    {title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Quality */}
      <Section className="bg-background">
        <section aria-labelledby="quality-heading">
          <div className="mb-10 grid gap-8 lg:mb-14 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Quality, security & accountability</p>
              <h2 id="quality-heading" className="text-4xl leading-[1.05] md:text-5xl">
                Oversight built into
                <br className="hidden sm:block" /> every engagement.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Good work needs more than a great hire. Every engagement is supported by clear
                ownership, practical safeguards, and a plan to keep moving forward.
              </p>
            </div>
            <div className="flex max-w-sm items-center gap-4 border-l-2 border-accent bg-card px-5 py-4 shadow-sm sm:px-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                <ShieldCheck aria-hidden="true" className="size-6" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-accent">
                  Built into every model
                </p>
                <p className="mt-1 font-display text-lg leading-tight text-foreground">
                  People. Process. Protection.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {quality.map(([Icon, title, description, extra], index) => {
              const expanded = openQuality === index || hoveredQuality === index;
              return (
                <article
                  key={title}
                  data-home-card
                  className={`quality-feature group relative isolate overflow-hidden rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 sm:p-6 ${
                    expanded
                      ? "border-accent/50 shadow-lg shadow-accent/[0.07]"
                      : "border-border/80 hover:-translate-y-1 hover:border-accent/35 hover:shadow-md"
                  }`}
                  onMouseEnter={() => setHoveredQuality(index)}
                  onMouseLeave={() => setHoveredQuality(null)}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-12 -top-14 size-36 rounded-full border transition-colors duration-300 ${
                      expanded ? "border-accent/15" : "border-border/50"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-5 -top-7 size-24 rounded-full border transition-colors duration-300 ${
                      expanded ? "border-accent/10" : "border-border/40"
                    }`}
                  />
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`quality-detail-${index}`}
                    onClick={() => setOpenQuality((current) => (current === index ? null : index))}
                    onFocus={() => setHoveredQuality(index)}
                    onBlur={() => setHoveredQuality(null)}
                    className="relative z-10 flex w-full items-start gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                  >
                    <span
                      className={`mt-0.5 grid size-12 shrink-0 place-items-center rounded-xl border transition-all duration-300 ${
                        expanded
                          ? "rotate-[-3deg] border-accent bg-accent text-accent-foreground shadow-md shadow-accent/20"
                          : "border-accent/15 bg-accent/10 text-accent group-hover:border-accent/40 group-hover:bg-accent/15"
                      }`}
                    >
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-accent">
                          CONTROL 0{index + 1}
                        </span>
                        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border/80 text-muted-foreground transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent">
                          <ChevronDown
                            aria-hidden="true"
                            className={`size-3.5 transition-transform duration-300 ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </span>
                      <span className="mt-2 block font-display text-xl leading-tight text-foreground">
                        {title}
                      </span>
                      <span className="mt-2 block text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {description}
                      </span>
                    </span>
                  </button>
                  <div
                    id={`quality-detail-${index}`}
                    aria-hidden={!expanded}
                    className={`relative z-10 grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 border-t border-border/80 pt-3">
                        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-accent">
                          How we put it into practice
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-foreground/75 sm:text-sm">
                          {extra}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </Section>

      {/* One partner */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-4">Why choose Quorisx</p>
          <h2 className="text-4xl leading-[1.05] md:text-6xl">
            One Partner. Multiple Capabilities. Global Reach.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you need a dedicated offshore professional, a fully managed business function,
            custom software, or ongoing digital marketing support, Quorisx brings the people,
            processes, and expertise together under one business relationship.
          </p>
        </div>
      </Section>

      <footer className="relative overflow-hidden bg-ink px-5 pb-6 pt-10 text-ink-foreground sm:px-6 md:pt-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border border-accent/10 shadow-[0_0_0_50px_rgba(48,171,183,0.025),0_0_0_100px_rgba(48,171,183,0.02)]"
        />
        <div className="relative mx-auto max-w-7xl">
          <section className="mb-10 grid overflow-hidden rounded-3xl border border-ink-border bg-[#0c2635] shadow-2xl shadow-black/15 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-56 md:min-h-72">
              <img
                src="/images/imag%204.jpg"
                alt="Quorisx team members collaborating around a table"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/10 md:bg-gradient-to-r md:from-transparent md:via-ink/20 md:to-[#0c2635]"
              />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/45 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                One partner. Global reach.
              </span>
            </div>
            <div className="flex flex-col items-start justify-center gap-6 p-6 sm:p-9 md:p-12">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.19em] text-accent-bright">
                  <span className="h-px w-6 bg-accent-bright" />
                  Quorisx · Global business solutions
                </p>
                <h2 className="mt-4 max-w-xl font-display text-3xl leading-[1.08] tracking-tight text-ink-foreground sm:text-4xl md:text-5xl">
                  Let’s move your business
                  <span className="mt-1 block text-accent-bright">forward, together.</span>
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
                  Tell us what your business needs. We’ll help you find the right people, support,
                  or solution to move forward.
                </p>
              </div>
              <a
                href="/contact#inquiry"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-bright hover:shadow-xl hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Talk to our team
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </section>

          <div className="grid gap-10 border-y border-ink-border py-9 sm:py-11 lg:grid-cols-[1.1fr_2.9fr] lg:gap-12">
            <div className="max-w-sm">
              <a
                href="/"
                className="group inline-flex font-display text-3xl tracking-tight text-ink-foreground"
              >
                Quorisx
                <span className="text-accent transition-colors group-hover:text-accent-bright">
                  .
                </span>
              </a>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                People, processes, and digital expertise to help your business grow—with U.S.
                headquarters and global delivery.
              </p>
              <div className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright" />
                Canton, Georgia · Bangkok, Thailand
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs">
                <a
                  className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-accent-bright"
                  href="mailto:info@quorisx.com"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 text-accent-bright" />
                  info@quorisx.com
                </a>
                <a
                  className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-accent-bright"
                  href="tel:+12018129584"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-accent-bright" />
                  201-812-9584
                </a>
              </div>
              <div className="mt-6">
                <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
                  Connect with us
                </p>
                <div className="flex gap-2">
                  {socialLinks.map(([Icon, label, href]) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      title={label}
                      target={label === "Email" ? undefined : "_blank"}
                      rel={label === "Email" ? undefined : "noreferrer"}
                      className="group flex h-9 w-9 items-center justify-center rounded-full border border-ink-border bg-white/[0.04] text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
            >
              <section className="col-span-full" aria-labelledby="footer-expertise-heading">
                <h2
                  id="footer-expertise-heading"
                  className="mb-4 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-ink-foreground"
                >
                  <span className="font-mono text-[9px] text-accent-bright">01</span>
                  Our Expertise
                </h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {expertiseFunctions.map((group) => (
                    <li
                      key={group.href}
                      className="min-w-0 rounded-lg border border-ink-border bg-white/[0.025] p-3.5"
                    >
                      <a
                        className="inline-flex min-h-6 items-center text-xs font-semibold text-ink-foreground transition-colors hover:text-accent-bright focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        href={group.href}
                      >
                        {group.label}
                      </a>
                      <details className="group mt-2 border-t border-ink-border pt-2">
                        <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-3 text-[10px] font-medium text-ink-muted transition-colors hover:text-accent-bright focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
                          <span>Explore {group.roles.length} roles</span>
                          <ChevronDown
                            aria-hidden="true"
                            className="size-3.5 shrink-0 transition-transform group-open:rotate-180"
                          />
                        </summary>
                        <ul
                          className="mt-2 grid gap-y-1.5 border-t border-ink-border pt-2 sm:grid-cols-2"
                          aria-label={`${group.label} roles`}
                        >
                          {group.roles.map((role) => (
                            <li key={role.title} className="min-w-0">
                              <a
                                className="inline-flex text-[10px] leading-relaxed text-ink-muted transition-colors hover:text-accent-bright focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
              {navigationGroups
                .filter((group) => group.label !== "Our Expertise")
                .map((group, groupIndex) => (
                  <section key={group.label} aria-labelledby={`footer-group-${groupIndex}`}>
                    <h2
                      id={`footer-group-${groupIndex}`}
                      className="mb-3 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-ink-foreground"
                    >
                      <span className="font-mono text-[9px] text-accent-bright">
                        {String(groupIndex + 2).padStart(2, "0")}
                      </span>
                      {group.label}
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                      {group.items.map((item) => (
                        <li key={`${item.label}-${item.href}`}>
                          <a
                            className="group inline-flex items-start gap-1.5 text-[11px] leading-relaxed text-ink-muted transition-colors duration-200 hover:text-accent-bright focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            href={item.href}
                          >
                            <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-accent/55 transition-transform group-hover:scale-125 group-hover:bg-accent-bright" />
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-5 text-[10px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Quorisx. All rights reserved.</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(48,171,183,0.8)]" />
              U.S. headquartered · Globally delivered
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
