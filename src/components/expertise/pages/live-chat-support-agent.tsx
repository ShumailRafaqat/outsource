import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileText,
  Headset,
  LifeBuoy,
  MessageCircle,
  MessagesSquare,
  Search,
  ShieldCheck,
  ShoppingBag,
  TicketCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import "./live-chat-support-agent.css";

const painPoints = [
  {
    label: "Before a purchase",
    title: "Questions arrive while your team is busy elsewhere.",
    detail:
      "A visitor asks about a product or next step, but the chat waits while the team handles other work.",
    icon: ShoppingBag,
  },
  {
    label: "During a support request",
    title: "A quick question turns into a long thread.",
    detail:
      "Agents need clear context, approved answers, and a way to ask follow-up questions without making the customer repeat themselves.",
    icon: MessagesSquare,
  },
  {
    label: "When an issue needs help",
    title: "The next owner receives too little context.",
    detail:
      "Without a concise summary and clear reason for escalation, the customer may have to start the conversation over.",
    icon: LifeBuoy,
  },
];

const responsibilities = [
  [
    "Welcome and understand",
    "Respond to incoming chats during the agreed coverage window, identify the question, and ask for only the context needed to help.",
  ],
  [
    "Use approved answers",
    "Search the client-provided knowledge base and apply current scripts, policies, tone, and response guidelines.",
  ],
  [
    "Handle routine questions",
    "Resolve requests that fit the agent's documented authority, such as explaining a published process or locating an order status.",
  ],
  [
    "Clarify before acting",
    "Confirm relevant details using the client's permitted verification steps; avoid requesting unnecessary personal or payment data.",
  ],
  [
    "Escalate exceptions",
    "Route policy questions, account changes, complaints, or unresolved technical problems to the designated owner with a concise summary.",
  ],
  [
    "Record and close the loop",
    "Apply agreed tags, note the outcome and next owner, and tell the customer what will happen next without promising an unapproved result.",
  ],
] as const;

const chatJourney = [
  {
    speaker: "Customer",
    message: "Could you check whether my order has shipped?",
    type: "customer",
  },
  {
    speaker: "Agent",
    message: "I can check the order status. Could you share the order reference?",
    type: "agent",
  },
  {
    speaker: "Customer",
    message: "It's QX-1842.",
    type: "customer",
  },
  {
    speaker: "Agent",
    message:
      "The order page shows it is being prepared. I’ll share the status from the approved order system and note your question.",
    type: "agent",
  },
] as const;

const workflow = [
  ["Receive", "A new chat enters the assigned queue."],
  ["Understand", "Clarify the request and check relevant context."],
  ["Respond", "Use approved guidance and permitted tools."],
  ["Escalate", "Bring in the right owner when authority or knowledge ends."],
  ["Record", "Log the outcome and any agreed follow-up."],
] as const;

const channels: { title: string; detail: string; icon: LucideIcon }[] = [
  {
    title: "Website or in-app chat",
    detail: "The live queue and chat console you choose.",
    icon: MessageCircle,
  },
  {
    title: "Ticketing",
    detail: "Case tags, status, assignment, and handoff notes.",
    icon: TicketCheck,
  },
  {
    title: "Knowledge base",
    detail: "Approved articles, scripts, and escalation guidance.",
    icon: BookOpen,
  },
  {
    title: "Customer context",
    detail: "Client-authorized CRM, account, or order lookup.",
    icon: Search,
  },
];

const measures = [
  ["First response time", "How long a new chat waits during agreed coverage."],
  ["Resolution or handoff", "Whether the request is resolved or routed with useful context."],
  ["Chat quality", "Whether the conversation follows the approved service guidance."],
  ["Queue follow-through", "Assigned chats and any promised follow-ups are recorded."],
] as const;

const safeguards = [
  "Your team supplies current policies, approved answers, identity checks, and escalation owners.",
  "Access is limited to the platforms and customer information your authorized owner approves.",
  "The agent does not invent policy, guarantee outcomes, or approve refunds or account changes unless you explicitly authorize that work.",
  "Your team retains policy ownership, sensitive decisions, and any required review of customer conversations.",
] as const;

const faqs = [
  [
    "How does an agent learn our products and policies?",
    "Your team provides product context, approved knowledge, tone guidance, common chat scenarios, and escalation rules. Training and access are planned for the specific engagement before customer work begins.",
  ],
  [
    "Can chat coverage overlap with our business hours?",
    "Coverage windows and timezone overlap are discussed against your queue needs, staffing availability, and the engagement terms. No specific schedule is assumed before it is agreed.",
  ],
  [
    "Which chat or ticketing tools can they use?",
    "The agent works within the platforms you select, subject to onboarding, access approval, and the tool's permissions. Share your current chat, ticketing, CRM, and knowledge-base setup when discussing the role.",
  ],
  [
    "What happens when a customer asks for something outside the agent's authority?",
    "The agent follows your escalation path, records relevant context, and explains the next step using language your team approves. Policy exceptions remain with your designated owner.",
  ],
  [
    "How can we review service quality?",
    "Agree the reporting cadence and measures at kickoff. Reviews can use permitted conversation samples, queue status, response and resolution definitions, and documented handoffs.",
  ],
  [
    "Can you provide 24/7 live chat?",
    "Coverage hours are confirmed for each engagement. Continuous 24/7 coverage generally requires a planned rota or team rather than one person working continuously, and is subject to staffing availability and agreement.",
  ],
] as const;

function hireHref() {
  return `/contact?role=${encodeURIComponent("Live Chat Support Agent")}#inquiry`;
}

export function LiveChatSupportAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main data-disable-hero-reveal>
        <section className="live-chat-hero relative isolate overflow-hidden bg-ink px-6 py-10 text-ink-foreground sm:py-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-44 -z-10 size-[34rem] rounded-full border border-ink-border shadow-[0_0_0_55px_rgba(255,255,255,0.02),0_0_0_110px_rgba(255,255,255,0.015)]"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-7 flex flex-wrap items-center gap-2 text-xs text-ink-muted"
              >
                <a className="transition-colors hover:text-ink-foreground" href="/">
                  Home
                </a>
                <span aria-hidden="true">/</span>
                <a
                  className="transition-colors hover:text-ink-foreground"
                  href="/expertise/customer-service"
                >
                  Customer Service
                </a>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-ink-foreground">
                  Live Chat Support Agent
                </span>
              </nav>
              <p className="eyebrow mb-3 text-accent-bright">CUSTOMER SUPPORT / LIVE CHAT</p>
              <h1 className="live-chat-hero__heading max-w-2xl font-display text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
                Live Chat Support Agent
                <span className="mt-2 block text-accent-bright">
                  Turn incoming chats into clear next steps.
                </span>
              </h1>
              <p className="live-chat-hero__description mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                Add a support professional to respond to website or in-app conversations using your
                guidance, tools, and escalation paths. Your team defines policies, permissions, and
                coverage.
              </p>
              <div className="live-chat-hero__actions mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={hireHref()}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Hire This Specialist <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
                <a
                  href="#role-work"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-foreground underline decoration-ink-muted/60 underline-offset-4 transition-colors hover:text-accent-bright"
                >
                  See What They Handle <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </div>
              <p className="live-chat-hero__note mt-6 text-xs text-ink-muted">
                Role scope, working hours, and customer access are agreed with you.
              </p>
            </div>

            <figure className="live-chat-hero__visual relative mx-auto w-full max-w-xl">
              <img
                src="/3.jpg"
                alt="Illustrative customer support team members wearing headsets at their workstations"
                width={1168}
                height={800}
                fetchPriority="high"
                className="h-[19rem] w-full object-cover object-center sm:h-[24rem]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-ink/10"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                  <span className="size-1.5 rounded-full bg-accent-bright" />
                  Illustrative live chat flow
                </div>
                <div className="live-chat-message live-chat-message--customer ml-auto max-w-[88%] bg-white px-3 py-2 text-xs text-slate-800 shadow-lg sm:max-w-[75%] sm:px-4">
                  Can you check my order status?
                </div>
                <div className="live-chat-message live-chat-message--agent mt-2 max-w-[92%] border border-white/20 bg-ink/90 px-3 py-2 text-xs text-white shadow-lg backdrop-blur-sm sm:max-w-[82%] sm:px-4">
                  I can check the approved order system. Do you have your order reference?
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="breakdown-heading">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Where customer experiences break down</p>
              <h2
                id="breakdown-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                Give each chat a clear owner and next step.
              </h2>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-7 md:grid-cols-3">
              {painPoints.map(({ label, title, detail, icon: Icon }) => (
                <article key={label} className="border-t border-border pt-5">
                  <Icon aria-hidden="true" className="size-5 text-accent" />
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                    {label}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="role-work"
          className="scroll-mt-24 bg-secondary/50 px-6 py-12 sm:py-16"
          aria-labelledby="responsibilities-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">Every conversation has a purpose</p>
              <h2
                id="responsibilities-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                Helpful support, within clear boundaries.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The agent handles agreed chat work. Your team retains policy ownership, sensitive
                decisions, and approvals.
              </p>
              <div className="mt-6 flex gap-3 border-l-2 border-accent pl-4">
                <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Requests outside documented authority are routed to the owner you designate—not
                  improvised in the chat.
                </p>
              </div>
            </div>
            <ol className="divide-y divide-border">
              {responsibilities.map(([title, detail], index) => (
                <li key={title} className="flex gap-4 py-4 first:pt-0 last:pb-0 sm:gap-6 sm:py-5">
                  <span className="pt-0.5 font-mono text-xs font-bold tracking-wider text-accent">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="bg-ink px-6 py-12 text-ink-foreground sm:py-16"
          aria-labelledby="interaction-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow mb-3 text-accent-bright">See the support in action</p>
              <h2
                id="interaction-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                One question, a useful response, and a clean record.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Illustrative interaction only—not a real customer transcript. The example assumes
                the client has approved an order-status lookup.
              </p>
            </div>
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-ink-muted">
                <MessagesSquare aria-hidden="true" className="size-4 text-accent-bright" />
                Sample order-status chat
              </div>
              <ol className="space-y-3">
                {chatJourney.map(({ speaker, message, type }, index) => (
                  <li
                    key={`${speaker}-${index}`}
                    className={`live-chat-transcript live-chat-transcript--${type} flex ${type === "customer" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[90%] sm:max-w-[78%] ${type === "customer" ? "border-l-2 border-white/25 pl-4" : "border-l-2 border-accent pl-4"}`}
                    >
                      <p
                        className={`text-[9px] font-bold uppercase tracking-[0.12em] ${type === "agent" ? "text-accent-bright" : "text-ink-muted"}`}
                      >
                        {speaker}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed">{message}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="workflow-heading">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <div>
                <p className="eyebrow mb-3">Behind every response</p>
                <h2
                  id="workflow-heading"
                  className="font-display text-3xl leading-tight sm:text-4xl"
                >
                  A simple workflow, from arrival to follow-up.
                </h2>
              </div>
              <ol className="live-chat-workflow relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {workflow.map(([title, detail], index) => (
                  <li
                    key={title}
                    className="relative border-l border-accent/35 pl-4 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5"
                  >
                    <span className="absolute -left-[5px] top-0 size-2.5 rounded-full bg-accent sm:-top-[5px]">
                      {""}
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 font-semibold">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 px-6 py-12 sm:py-16" aria-labelledby="channels-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
            <div>
              <p className="eyebrow mb-3">Connected to your business</p>
              <h2 id="channels-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Work in the support environment you choose.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Tool access and training are agreed for your setup. These are work categories, not
                claims of native integrations or platform certifications.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {channels.map(({ title, detail, icon: Icon }) => (
                <li key={title} className="flex items-center gap-4 py-4 sm:py-5">
                  <Icon aria-hidden="true" className="size-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="coverage-heading">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Coverage that fits your customers</p>
              <h2 id="coverage-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Choose a staffing model around the queue.
              </h2>
            </div>
            <div className="mt-8 grid gap-8 border-y border-border py-7 md:grid-cols-2 md:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <Headset aria-hidden="true" className="size-5 text-accent" />
                  <h3 className="font-display text-xl">Hire One Agent</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Add an agent to an agreed queue, schedule, and set of support responsibilities.
                  Working hours and timezone overlap are confirmed for the engagement.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <UsersRound aria-hidden="true" className="size-5 text-accent" />
                  <h3 className="font-display text-xl">Build a Support Team</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Plan shared queue coverage, handoffs, and oversight across multiple people when
                  the workload calls for it. 24/7 coverage usually needs a rota or team, not one
                  agent working continuously.
                </p>
              </div>
            </div>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Clock3 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              Business-hours, after-hours, and timezone coverage depend on requirements,
              availability, and the schedule agreed for the engagement.
            </p>
          </div>
        </section>

        <section className="bg-secondary/50 px-6 py-12 sm:py-16" aria-labelledby="measures-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">The difference you can review</p>
              <h2 id="measures-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Track service quality without promising a number.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Your team defines each measure, reporting window, and target. These examples are
                options to agree—not performance guarantees.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {measures.map(([title, detail]) => (
                <li key={title} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-5">
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="industry-heading">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Support across your industry</p>
              <h2 id="industry-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Keep the conversation relevant to the work.
              </h2>
            </div>
            <div className="mt-7 grid gap-x-9 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="border-t border-border pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">E-commerce</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Answer product and order questions using approved catalog and order information.
                </p>
              </article>
              <article className="border-t border-border pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">SaaS</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Guide customers to documented product steps and route technical issues with
                  reproduction context.
                </p>
              </article>
              <article className="border-t border-border pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  Travel and hospitality
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Share approved booking information and direct change or exception requests to the
                  authorized team.
                </p>
              </article>
            </div>
            <p className="mt-6 max-w-4xl text-xs leading-relaxed text-muted-foreground">
              Healthcare, financial, and other sensitive information requires your organization's
              access rules and applicable compliance requirements to be confirmed before work
              begins. No certification or compliance status is implied.
            </p>
          </div>
        </section>

        <section
          className="bg-ink px-6 py-12 text-ink-foreground sm:py-16"
          aria-labelledby="safeguards-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3 text-accent-bright">Confidence in every interaction</p>
              <h2
                id="safeguards-heading"
                className="font-display text-3xl leading-tight sm:text-4xl"
              >
                Your policies remain in your hands.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Onboarding, quality checks, and escalation support follow the process agreed with
                your team.
              </p>
            </div>
            <ul className="space-y-4">
              {safeguards.map((safeguard) => (
                <li
                  key={safeguard}
                  className="flex gap-3 border-b border-ink-border pb-4 text-sm leading-relaxed text-ink-muted last:border-0"
                >
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-bright" />
                  {safeguard}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">Questions before you hire?</p>
              <h2 id="faq-heading" className="font-display text-3xl leading-tight sm:text-4xl">
                Practical details for live chat support.
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
                    {question}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 shrink-0 text-accent transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-ink px-6 py-12 text-ink-foreground sm:py-16"
          aria-labelledby="final-cta-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow mb-3 text-accent-bright">Make every interaction count</p>
              <h2
                id="final-cta-heading"
                className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl"
              >
                Discuss the live chat coverage your customers need.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                Share your chat channels, usual questions, tools, and preferred hours. The enquiry
                form will have this role selected and can capture your support requirements.
              </p>
            </div>
            <a
              href={hireHref()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:bg-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Discuss My Support Needs <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="mx-auto mt-9 flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-border pt-6 text-xs text-ink-muted">
            <span className="flex items-center gap-2">
              <CircleHelp aria-hidden="true" className="size-4 text-accent-bright" />
              Related roles
            </span>
            <a
              className="hover:text-ink-foreground"
              href="/expertise/customer-service/customer-support-representative"
            >
              Customer Support Representative
            </a>
            <a
              className="hover:text-ink-foreground"
              href="/expertise/customer-service/dedicated-receptionist"
            >
              Dedicated Receptionist
            </a>
            <a
              className="hover:text-ink-foreground"
              href="/expertise/customer-service/hotel-and-accommodation-operations-assistant"
            >
              Hotel &amp; Accommodation Operations Assistant
            </a>
            <a
              className="ml-auto inline-flex items-center gap-1 font-semibold text-accent-bright hover:underline"
              href="/expertise/customer-service"
            >
              All Customer Service roles <ArrowRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
