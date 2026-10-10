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
import hero from "@/assets/hero-team.jpg";
import { SiteHeader } from "@/components/site-header";

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

const socialLinks: [LucideIcon, string][] = [
  [Linkedin, "LinkedIn"],
  [Facebook, "Facebook"],
  [Instagram, "Instagram"],
  [Mail, "Email"],
];

const ways: [LucideIcon, string, string][] = [
  [
    UsersRound,
    "Extend Your Team",
    "Dedicated professionals working within the client’s direction and systems.",
  ],
  [
    Workflow,
    "Outsource a Function",
    "Managed workflows or departments with clear responsibilities, reporting, and performance expectations.",
  ],
  [
    Rocket,
    "Deliver a Solution",
    "Outcome-focused projects such as websites, software, digital marketing, or automation.",
  ],
];

const services: [LucideIcon, string, string, string][] = [
  [
    Headset,
    "Customer Support & Contact Centers",
    "Inbound/outbound calls, chat, email, appointments and escalation.",
    "24/7 coverage · Multilingual support · Full quality monitoring",
  ],
  [
    UsersRound,
    "Offshore Staffing",
    "Screened, interviewed professionals onboarded into your team.",
    "Fully managed hiring · Your tools & culture · Quick scale-up",
  ],
  [
    ClipboardList,
    "Back-Office & Admin",
    "Data entry, CRM upkeep, documentation and order processing.",
    "Accuracy-focused · Process-driven",
  ],
  [
    TrendingUp,
    "Sales Support",
    "Lead qualification, CRM hygiene, follow-ups and scheduling.",
    "More pipeline, less admin",
  ],
  [
    Truck,
    "24/7 Dispatch & Coordination",
    "Emergency intake, scheduling and driver/technician coordination.",
    "Always-on operations",
  ],
  [
    LifeBuoy,
    "Technical Support",
    "Helpdesk triage, troubleshooting and tiered escalation.",
    "Faster resolution · Tiered support",
  ],
];

const solutions: [LucideIcon, string, string][] = [
  [Code2, "Software Development", "Discovery, architecture, engineering, QA and deployment."],
  [Globe, "Website Development", "Business sites, e-commerce and ongoing maintenance."],
  [ShieldCheck, "IT Services", "Helpdesk, system support and managed service scope."],
  [TrendingUp, "Digital Marketing & SEO", "Search visibility, content, local SEO and reporting."],
  [Megaphone, "Paid Ads & Lead Gen", "Google/Meta campaigns, landing pages and tracking."],
  [Workflow, "AI & Automation", "Process mapping, CRM integration and measurable efficiency."],
  [
    BriefcaseBusiness,
    "Admin & Executive Support",
    "Calendar coordination, inbox support, documentation and day-to-day administrative tasks.",
  ],
  [
    Target,
    "Sales & Growth",
    "Lead generation, CRM follow-ups, appointment setting and sales pipeline support.",
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

const bangkok = [
  [
    "International talent",
    "Thai professionals and international residents with diverse experience.",
  ],
  ["Cultural diversity", "Business, education, hospitality and tech communities."],
  ["Competitive structure", "Potential cost advantages, dependent on role and requirements."],
  ["Business infrastructure", "Established districts, offices and telecommunications."],
  ["Travel connectivity", "International air links make planned client visits practical."],
  ["On-site collaboration", "Meet teams or join training, by advance arrangement."],
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
            <circle cx="62" cy="41" r="3" fill="#db7545" />
            <circle cx="74" cy="41" r="3" fill="#e7b66a" />
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
              stroke="#e88953"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        )}
        {index === 1 && (
          <g>
            <rect x="52" y="25" width="256" height="140" rx="10" fill="#f5f2eb" />
            <path d="M52 49h256" stroke="#d8d4cb" />
            <circle cx="67" cy="37" r="3" fill="#d47a4b" />
            <circle cx="79" cy="37" r="3" fill="#dfb866" />
            <circle cx="91" cy="37" r="3" fill="#94a7a1" />
            <rect x="69" y="62" width="95" height="8" rx="4" fill="#183149" />
            <rect x="69" y="77" width="73" height="5" rx="2.5" fill="#a5abb0" />
            <rect x="69" y="87" width="62" height="5" rx="2.5" fill="#a5abb0" />
            <rect x="69" y="102" width="39" height="13" rx="4" fill="#d87949" />
            <rect x="187" y="61" width="101" height="70" rx="7" fill="#d9e3df" />
            <path d="m197 117 25-26 19 18 15-14 27 27h-86Z" fill="#8aafa7" />
            <circle cx="264" cy="77" r="7" fill="#e7b66a" />
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
            <circle cx="271" cy="143" r="5" fill="#e7b66a" />
          </g>
        )}
        {index === 3 && (
          <g>
            <rect x="51" y="24" width="258" height="143" rx="10" fill="#102238" stroke="#496176" />
            <path d="M77 133h204M77 60v73" stroke="#496176" />
            <path
              d="M90 118V99h23v19M132 118V84h23v34M174 118V96h23v22M216 118V70h23v48M258 118V55h12v63"
              fill="#d87949"
              fillOpacity=".82"
            />
            <path
              d="m90 86 44-19 42 10 39-23 45-13"
              stroke="#f1bd74"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="260" cy="41" r="5" fill="#f1bd74" />
            <path d="M77 145h70" stroke="#607b91" strokeWidth="4" strokeLinecap="round" />
          </g>
        )}
        {index === 4 && (
          <g>
            <rect x="43" y="28" width="177" height="135" rx="10" fill="#f5f2eb" />
            <path d="M43 53h177" stroke="#d8d4cb" />
            <circle cx="58" cy="41" r="3" fill="#d47a4b" />
            <circle cx="70" cy="41" r="3" fill="#dfb866" />
            <rect x="57" y="68" width="149" height="45" rx="6" fill="#d9e3df" />
            <path d="m67 105 24-25 21 17 17-14 28 30H67Z" fill="#8aafa7" />
            <rect x="57" y="122" width="90" height="5" rx="2.5" fill="#89949b" />
            <rect x="57" y="133" width="59" height="5" rx="2.5" fill="#b6b9b7" />
            <rect x="158" y="122" width="48" height="16" rx="5" fill="#d87949" />
            <rect x="238" y="48" width="76" height="92" rx="10" fill="#142c42" stroke="#496176" />
            <path d="M252 112V94h9v18M267 112V80h9v32M282 112V68h9v44" fill="#d87949" />
            <path d="M251 122h39" stroke="#90a8b9" strokeWidth="4" strokeLinecap="round" />
          </g>
        )}
        {index === 5 && (
          <g>
            <path
              d="M91 95h54M215 95h54M173 61v23M173 107v26"
              stroke="#d87949"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <rect x="42" y="68" width="67" height="54" rx="10" fill="#f5f2eb" />
            <rect x="145" y="33" width="67" height="54" rx="10" fill="#f5f2eb" />
            <rect x="145" y="108" width="67" height="54" rx="10" fill="#f5f2eb" />
            <rect x="251" y="68" width="67" height="54" rx="10" fill="#f5f2eb" />
            <circle cx="75" cy="87" r="8" fill="#d87949" />
            <path d="M64 105h22" stroke="#8b9ca5" strokeWidth="4" strokeLinecap="round" />
            <path d="m173 48 4 9 9 4-9 4-4 9-4-9-9-4 9-4 4-9Z" fill="#d87949" />
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
            <circle cx="110" cy="95" r="3" fill="#e7b66a" />
            <circle cx="249" cy="95" r="3" fill="#e7b66a" />
          </g>
        )}
        {index === 6 && (
          <g>
            <rect x="57" y="26" width="246" height="138" rx="10" fill="#f5f2eb" />
            <path d="M57 53h246" stroke="#d8d4cb" />
            <circle cx="73" cy="40" r="3" fill="#d47a4b" />
            <circle cx="85" cy="40" r="3" fill="#dfb866" />
            <rect x="75" y="68" width="103" height="78" rx="6" fill="#fffefa" stroke="#d8d4cb" />
            <path d="M75 86h103" stroke="#d8d4cb" />
            <path d="M93 62v12M159 62v12" stroke="#d87949" strokeWidth="4" strokeLinecap="round" />
            <path
              d="M91 99h12M113 99h12M135 99h12M91 118h12M113 118h12M135 118h12"
              stroke="#8b9ca5"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <rect x="191" y="69" width="91" height="31" rx="6" fill="#d9e3df" />
            <circle cx="207" cy="84" r="8" fill="#d87949" />
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
            <circle cx="64" cy="40" r="3" fill="#d47a4b" />
            <circle cx="76" cy="40" r="3" fill="#dfb866" />
            <rect x="65" y="67" width="66" height="79" rx="7" fill="#e8ece8" />
            <rect x="147" y="67" width="66" height="79" rx="7" fill="#e8ece8" />
            <rect x="229" y="67" width="66" height="79" rx="7" fill="#e8ece8" />
            <circle cx="80" cy="84" r="6" fill="#d87949" />
            <circle cx="162" cy="84" r="6" fill="#e7b66a" />
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
              stroke="#d87949"
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
  const [activeWay, setActiveWay] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openService, setOpenService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [openBenefit, setOpenBenefit] = useState<number | null>(null);
  const [activeModel, setActiveModel] = useState(0);
  const [openQuality, setOpenQuality] = useState<number | null>(null);
  const [hoveredQuality, setHoveredQuality] = useState<number | null>(null);
  const [qualityVisible, setQualityVisible] = useState(false);
  const qualitySectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = qualitySectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQualityVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <img
          src={hero}
          alt="Quorisx operations team at work in Bangkok"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 md:pb-20 md:pt-20">
          <p className="eyebrow mb-6">
            Global Outsourcing & Business Solutions · Canton, Georgia, USA
          </p>
          <h1 className="max-w-4xl text-3xl leading-[1.08] text-ink-foreground md:text-5xl">
            Extend Your Team.
            <br />
            Streamline Operations.
            <br />
            <em className="text-accent">Accelerate Growth.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-muted">
            From individual offshore professionals to fully managed business functions, Quorisx
            helps organizations scale through flexible staffing, operational support, and
            specialized technology and digital solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#outsourcing"
              className="rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground hover:opacity-90"
            >
              Explore Outsourcing
            </a>
            <a
              href="/contact"
              className="rounded-md border border-ink-border px-6 py-3.5 font-semibold text-ink-foreground hover:bg-ink-foreground/10"
            >
              Talk to Our Team
            </a>
          </div>
          <p className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            U.S. Headquartered · Globally Delivered
          </p>
        </div>
      </section>

      {/* Who we are */}
      <Section className="bg-background pb-8 pt-8 md:pb-10 md:pt-10">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative pl-3">
            <span aria-hidden="true" className="absolute bottom-3 left-0 top-3 w-1.5 bg-accent" />
            <img
              src={hero}
              alt="Quorisx operations team collaborating in Bangkok"
              width={1600}
              height={1104}
              className="aspect-[1.55/1] w-full object-cover shadow-md"
            />
          </div>
          <div className="max-w-xl">
            <p className="eyebrow mb-2">About Quorisx</p>
            <h2 className="text-3xl leading-[1.08] md:text-4xl">
              A Business Partner Built Around Your Needs
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
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
      <Section className="bg-background pb-10 pt-8 md:pb-14 md:pt-10">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-2">How we can help you</p>
          <h2 className="text-3xl leading-[1.05] md:text-4xl">Three Ways to Work With Us</h2>
        </div>
        <ol className="relative grid gap-6 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-accent/30 sm:grid-cols-3 sm:gap-5 sm:before:hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-7 hidden h-px bg-accent/30 sm:block"
          />
          {ways.map(([Icon, title, description], index) => {
            const selected = activeWay === index;
            return (
              <li key={title} className="relative">
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveWay(index)}
                  className={`group relative flex w-full items-center gap-4 rounded-lg p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:flex-col sm:gap-4 sm:px-4 sm:pb-3 sm:pt-0 sm:text-center ${
                    selected
                      ? "bg-accent/5 sm:bg-transparent"
                      : "hover:bg-accent/5 sm:hover:bg-transparent"
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors sm:h-14 sm:w-14 ${
                      selected
                        ? "border-accent/50 bg-card text-accent shadow-sm"
                        : "border-border bg-card text-primary group-hover:border-accent/40 group-hover:text-accent"
                    }`}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1 sm:flex-none">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      0{index + 1}
                    </span>
                    <span className="mt-1 block font-display text-lg leading-tight text-foreground">
                      {title}
                    </span>
                    <span className="mx-auto mt-2 block max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </span>
                  </span>
                  {selected && (
                    <Check
                      aria-label="Selected"
                      className="h-4 w-4 shrink-0 text-accent sm:hidden"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Core outsourcing */}
      <Section id="outsourcing" className="bg-secondary">
        <Heading
          eyebrow="Core outsourcing services"
          title="Business Functions We Help You Run."
          sub="Each function comes with defined roles, responsibilities, a delivery model and measurable outcomes."
        />
        <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(([Icon, title, description, extra], index) => {
            const featured = index < 2;
            const expanded = openService === index || hoveredService === index;
            const detailId = `service-extra-${index}`;
            return (
              <article
                key={title}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative isolate flex min-w-0 flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-out md:p-7 ${
                  featured
                    ? index === 0
                      ? "min-h-[21rem] border border-ink-border bg-ink text-ink-foreground md:col-span-2 xl:min-h-[24rem]"
                      : "min-h-[21rem] border border-accent/20 bg-[#e9e2d7] text-foreground md:col-span-2 xl:min-h-[24rem]"
                    : "min-h-56 border border-border/70 bg-background/75 text-foreground hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg hover:shadow-ink/5"
                }`}
              >
                {featured && (
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-10 -top-12 -z-10 h-64 w-64 rounded-full border ${
                      index === 0 ? "border-white/10" : "border-accent/15"
                    }`}
                  />
                )}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${
                      index === 0
                        ? "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                        : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                    }`}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] ${
                      index === 0 ? "text-ink-muted" : "text-muted-foreground"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3
                  className={`mt-8 max-w-lg font-display leading-tight ${
                    featured ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-3 max-w-xl text-sm leading-relaxed ${
                    index === 0 ? "text-ink-muted" : "text-muted-foreground"
                  }`}
                >
                  {description}
                </p>
                <div
                  id={detailId}
                  aria-hidden={!expanded}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`pt-4 text-sm font-medium leading-relaxed ${
                        index === 0 ? "text-ink-foreground" : "text-foreground"
                      }`}
                    >
                      {extra}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-controls={detailId}
                  aria-expanded={openService === index}
                  onClick={() => {
                    setHoveredService(null);
                    setOpenService((current) => (current === index ? null : index));
                  }}
                  className={`mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 ${
                    index === 0
                      ? "text-accent hover:text-ink-foreground"
                      : "text-accent hover:text-foreground"
                  }`}
                >
                  {openService === index ? "Show less" : "Learn more"}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Solutions */}
      <section id="solutions" className="relative overflow-hidden bg-ink px-6 py-14 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-52 h-[34rem] w-[34rem] rounded-full border border-ink-border/70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-32 h-[25rem] w-[25rem] rounded-full border border-accent/10"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow mb-4">Specialist business solutions</p>
              <h2 className="font-display text-4xl leading-[1.04] text-ink-foreground sm:text-5xl md:text-6xl">
                Beyond Staffing.
                <br className="hidden sm:block" /> Solutions That Move Your Business Forward.
              </h2>
              <p className="mt-5 text-base text-ink-muted md:text-lg">
                Available as scoped projects or ongoing retainers.
              </p>
            </div>
            <p className="hidden pb-1 text-right text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-ink-muted lg:block">
              Six specialist
              <br />
              capabilities
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {solutions.map(([Icon, title, description], index) => (
              <article
                key={title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#f7f5f0] p-2.5 shadow-lg shadow-black/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25 sm:p-3"
              >
                <SolutionArtwork index={index} />
                <div className="px-4 pb-4 pt-5 sm:px-5 sm:pb-5">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      Capability 0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight text-ink md:text-[1.7rem]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70 md:text-[0.95rem]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
      <Section className="bg-secondary">
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

      {/* Quality */}
      <Section className="bg-background">
        <section
          ref={qualitySectionRef}
          aria-labelledby="quality-heading"
          data-quality-visible={qualityVisible}
        >
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-4">Quality, security & accountability</p>
            <h2 id="quality-heading" className="text-4xl leading-[1.05] md:text-5xl">
              Oversight built into every engagement.
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-6">
            {quality.map(([Icon, title, description, extra], index) => {
              const expanded = openQuality === index || hoveredQuality === index;
              return (
                <article
                  key={title}
                  className="quality-feature group border-b border-border/70 py-5 sm:border-0 sm:py-4"
                  onMouseEnter={() => setHoveredQuality(index)}
                  onMouseLeave={() => setHoveredQuality(null)}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`quality-detail-${index}`}
                    onClick={() => setOpenQuality((current) => (current === index ? null : index))}
                    onFocus={() => setHoveredQuality(index)}
                    onBlur={() => setHoveredQuality(null)}
                    className="flex w-full items-start gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                  >
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-sans text-lg font-semibold text-foreground">
                        {title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </span>
                    </span>
                  </button>
                  <div
                    id={`quality-detail-${index}`}
                    aria-hidden={!expanded}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-[3.75rem] pt-3 text-sm leading-relaxed text-foreground/75">
                        {extra}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </Section>

      {/* Presence */}
      <Section id="presence" className="bg-ink">
        <div id="why" className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Contract locally. Operate globally.</p>
            <h2 className="text-4xl leading-[1.05] text-ink-foreground md:text-5xl">
              American Headquarters. International Capabilities.
            </h2>
            <p className="mt-6 text-lg text-ink-muted">
              Headquartered in Canton, Georgia, Quorisx combines the commercial convenience and
              accountability of working with a U.S.-based company with the flexibility of offshore
              delivery centered in Bangkok, Thailand.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-lg border border-ink-border p-6">
                <p className="eyebrow">Headquarters</p>
                <p className="mt-2 font-display text-2xl text-ink-foreground">Canton, Georgia</p>
                <p className="text-sm text-ink-muted">Client relationships & contracting</p>
              </div>
              <div className="rounded-lg border border-ink-border p-6">
                <p className="eyebrow">Operations</p>
                <p className="mt-2 font-display text-2xl text-ink-foreground">Bangkok, Thailand</p>
                <p className="text-sm text-ink-muted">Recruitment, training & delivery</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-2xl text-ink-foreground">Why Bangkok?</h3>
            <div className="grid gap-px overflow-hidden rounded-lg bg-ink-border sm:grid-cols-2">
              {bangkok.map(([t, d]) => (
                <div key={t} className="bg-ink p-6">
                  <h4 className="font-semibold text-ink-foreground">{t}</h4>
                  <p className="mt-2 text-sm text-ink-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
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

      <footer className="relative overflow-hidden border-t border-ink-border bg-ink px-6 pb-6 pt-10 md:pt-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-36 h-96 w-96 rounded-full border border-ink-border/70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-accent/10"
        />
        <div className="relative mx-auto max-w-7xl">
          <section className="mb-12 flex flex-col gap-6 rounded-2xl border border-ink-border bg-gradient-to-r from-primary/55 via-ink to-ink p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Let’s move your business forward</p>
              <h2 className="font-display text-3xl leading-tight text-ink-foreground sm:text-4xl">
                Find the right support for your next step.
              </h2>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Talk to our team <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </section>

          <div className="grid gap-10 border-b border-ink-border pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] lg:gap-8">
            <div>
              <a href="/" className="inline-flex font-display text-3xl text-ink-foreground">
                Quorisx<span className="text-accent">.</span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
                People, processes, and digital expertise to help your business grow—with U.S.
                headquarters and global delivery.
              </p>
              <div className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Canton, Georgia · Bangkok, Thailand
              </div>
              <div className="mt-6">
                <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
                  Connect with us
                </p>
                <div className="flex gap-2">
                  {socialLinks.map(([Icon, label]) =>
                    label === "Email" ? (
                      <a
                        key={label}
                        href="mailto:info@quorisx.com"
                        aria-label={label}
                        title={label}
                        className="group flex h-10 w-10 items-center justify-center rounded-xl border border-ink-border bg-ink-foreground/[0.03] text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </a>
                    ) : (
                      <span
                        key={label}
                        role="img"
                        aria-label={label}
                        title={`${label} profile link has not been provided`}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-border bg-ink-foreground/[0.03] text-ink-muted"
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-foreground">
                Explore
              </h2>
              <nav
                aria-label="Footer explore links"
                className="mt-5 flex flex-col gap-3 text-sm text-ink-muted"
              >
                <a className="transition-colors hover:text-accent" href="#outsourcing">
                  Outsourcing
                </a>
                <a className="transition-colors hover:text-accent" href="#solutions">
                  Solutions
                </a>
                <a className="transition-colors hover:text-accent" href="#industries">
                  Industries
                </a>
                <a className="transition-colors hover:text-accent" href="#why">
                  Why Quorisx
                </a>
              </nav>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-foreground">
                Company
              </h2>
              <nav
                aria-label="Footer company links"
                className="mt-5 flex flex-col gap-3 text-sm text-ink-muted"
              >
                <a className="transition-colors hover:text-accent" href="/about">
                  About Quorisx
                </a>
                <a className="transition-colors hover:text-accent" href="/about#why-bangkok">
                  Why Bangkok
                </a>
                <a className="transition-colors hover:text-accent" href="/about#transparency">
                  Our operating model
                </a>
                <a className="transition-colors hover:text-accent" href="/resources/faqs">
                  FAQs
                </a>
              </nav>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-foreground">
                Get in touch
              </h2>
              <div className="mt-5 flex flex-col gap-4 text-sm text-ink-muted">
                <a
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                  href="mailto:info@quorisx.com"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                  info@quorisx.com
                </a>
                <a
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                  href="tel:+12018129584"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                  201-812-9584
                </a>
                <a
                  className="flex items-start gap-3 transition-colors hover:text-accent"
                  href="https://www.google.com/maps/search/?api=1&query=225%20Reformation%20Pkwy%20Ste%20200%2C%20Canton%2C%20GA%2030114"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    225 Reformation Pkwy Ste 200
                    <br />
                    Canton, GA 30114
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Quorisx. All rights reserved.</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              U.S. headquartered · Globally delivered
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
