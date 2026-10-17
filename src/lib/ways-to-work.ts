export type WaysToWorkPage = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  headline: string;
  intro: string;
  summary: string;
  content: {
    heroKicker: string;
    heroNote: string;
    primaryCta: string;
    secondaryCta: string;
    mapTitle: string;
    businessNode: string;
    businessCaption: string;
    deliveryNode: string;
    deliveryCaption: string;
    outcomeLabel: string;
    mapStart: string;
    mapEnd: string;
    outcomeSection: {
      eyebrow: string;
      title: string;
      description: string;
      fitLabel: string;
      resultLabel: string;
    };
    ownership: {
      eyebrow: string;
      title: string;
      description: string;
      clientLabel: string;
      clientTitle: string;
      partnerLabel: string;
      partnerTitle: string;
    };
    exampleSection: {
      eyebrow: string;
      title: string;
      description: string;
      situationLabel: string;
      approachLabel: string;
      resultLabel: string;
    };
    process: { eyebrow: string; title: string; description: string };
    comparison: { eyebrow: string; title: string };
    final: { eyebrow: string; title: string; description: string; cta: string };
  };
  bestFor: string;
  outcome: string;
  benefits: { title: string; detail: string }[];
  clientOwns: string[];
  quorisxOwns: string[];
  example: { title: string; situation: string; approach: string; result: string };
  steps: { title: string; detail: string }[];
};

export const waysToWorkPages: WaysToWorkPage[] = [
  {
    slug: "team-extension",
    number: "01",
    title: "Extend Your Team",
    eyebrow: "Dedicated people · Your direction",
    headline: "Add capable people. Keep the work moving your way.",
    intro:
      "Bring in dedicated professionals who work within your priorities, tools, and team rhythm. You stay close to the work while gaining more capacity to move it forward.",
    summary: "A people-first model for ongoing work and skills you need in-house.",
    content: {
      heroKicker: "A seat on your team / 01",
      heroNote:
        "Think of this as adding another capable teammate: your priorities lead, your systems stay central, and their knowledge compounds over time.",
      primaryCta: "Plan your new role",
      secondaryCta: "See the onboarding path",
      mapTitle: "A teammate inside your workflow",
      businessNode: "Your team",
      businessCaption: "sets priorities",
      deliveryNode: "Dedicated talent",
      deliveryCaption: "works in rhythm",
      outcomeLabel: "What gets stronger",
      mapStart: "Your standards stay close",
      mapEnd: "Capacity grows with context",
      outcomeSection: {
        eyebrow: "More hands, still your playbook",
        title: "Add capacity without adding distance.",
        description:
          "A dedicated professional learns the way your team communicates, makes decisions, and serves customers—so support feels connected to the work, not bolted on.",
        fitLabel: "This model clicks when",
        resultLabel: "The day-to-day difference",
      },
      ownership: {
        eyebrow: "A teammate works best with a clear lead",
        title: "You guide the work. We help the right person thrive.",
        description:
          "The role belongs inside your operating rhythm. Clear direction from your side and thoughtful role support from ours give it room to become genuinely useful.",
        clientLabel: "Your leadership / 01",
        clientTitle: "Set the pace and priorities",
        partnerLabel: "Quorisx support / 02",
        partnerTitle: "Make the match stick",
      },
      exampleSection: {
        eyebrow: "A week in the real world",
        title: "Give repeat work a reliable home.",
        description:
          "Picture the work that keeps returning to your best people. Here is how a dedicated role can create breathing room without losing the details.",
        situationLabel: "The overloaded week",
        approachLabel: "A role that fits",
        resultLabel: "Room created",
      },
      process: {
        eyebrow: "From role brief to team rhythm",
        title: "Build a role people can grow into.",
        description:
          "Start with the actual work—not a generic job title. Then align the person, tools, and feedback loop around what your team needs.",
      },
      comparison: {
        eyebrow: "Choose your operating shape",
        title: "Need a teammate, a managed workflow, or a finished project?",
      },
      final: {
        eyebrow: "Start with the work that keeps piling up",
        title: "Let’s shape a role around your team—not the other way around.",
        description:
          "Tell us which responsibilities need a steady owner, what skills matter, and how your team works. We’ll help you map a practical role and first-month plan.",
        cta: "Shape a team role",
      },
    },
    bestFor:
      "Growing teams with recurring work, a clear manager, and a need for dependable capacity.",
    outcome:
      "More room for your existing team to focus, without handing away the decisions or context that make your business yours.",
    benefits: [
      {
        title: "Keep the context",
        detail:
          "Your professional works within your processes and learns how your team actually gets things done.",
      },
      {
        title: "Stay in control",
        detail:
          "You set the priorities, provide direction, and decide how work fits into your operation.",
      },
      {
        title: "Build continuity",
        detail:
          "Consistent support means knowledge can grow with the role instead of restarting with every task.",
      },
      {
        title: "Add capacity with intent",
        detail:
          "Shape the role around the responsibilities you need covered, then refine it as your needs change.",
      },
    ],
    clientOwns: [
      "Day-to-day task priorities and business decisions",
      "Access to the tools, context, and standards the role requires",
      "Feedback that helps the professional align with your team",
    ],
    quorisxOwns: [
      "Role scoping and candidate alignment",
      "A clear onboarding handoff and ongoing account contact",
      "A reliable setup for communication and support",
    ],
    example: {
      title: "When the work is always there",
      situation:
        "Your operations lead spends half the week on repeatable admin and customer follow-up instead of improving the service.",
      approach:
        "Add a dedicated operations assistant, define the recurring responsibilities, and bring them into your existing tools and weekly rhythm.",
      result:
        "The team keeps its working context while your operations lead gets time back for higher-value work.",
    },
    steps: [
      {
        title: "Shape the role",
        detail: "Agree responsibilities, working overlap, and what good support looks like.",
      },
      {
        title: "Meet the match",
        detail: "Review people whose skills and communication fit the work.",
      },
      {
        title: "Set up together",
        detail: "Align tools, access, introductions, and the first priorities.",
      },
      {
        title: "Build the rhythm",
        detail: "Use regular check-ins and feedback to keep the role useful.",
      },
    ],
  },
  {
    slug: "managed-function",
    number: "02",
    title: "Outsource a Function",
    eyebrow: "Managed workflow · Shared accountability",
    headline: "Hand over the process. Keep a clear view of the work.",
    intro:
      "Give a repeatable workflow a defined owner, agreed service boundaries, and a useful reporting rhythm. Your team gets operational support without having to manage every task directly.",
    summary: "A managed service for repeatable work that needs ownership and visibility.",
    content: {
      heroKicker: "An operation with an owner / 02",
      heroNote:
        "This is not a person waiting for a task list. It is a defined service: agreed inputs, a consistent way of working, clear exceptions, and reporting you can act on.",
      primaryCta: "Map a workflow",
      secondaryCta: "Explore the service launch",
      mapTitle: "A managed service loop",
      businessNode: "Your business",
      businessCaption: "sets the rules",
      deliveryNode: "Service team",
      deliveryCaption: "runs the flow",
      outcomeLabel: "What stays visible",
      mapStart: "Exceptions reach the right owner",
      mapEnd: "Routine work keeps moving",
      outcomeSection: {
        eyebrow: "Operations, out of the scramble",
        title: "Move recurring work from inboxes into a system.",
        description:
          "Intake, handoffs, checks, and escalations get designed as one operating flow. Your people spend less time chasing status and more time handling the decisions that need them.",
        fitLabel: "A strong match when",
        resultLabel: "The service-level shift",
      },
      ownership: {
        eyebrow: "Shared service, named responsibilities",
        title: "Set the guardrails once. Run the workflow with confidence.",
        description:
          "A managed function needs business rules and timely decisions from you; delivery, coordination, quality checks, and service visibility sit with the operating partner.",
        clientLabel: "Your governance / 01",
        clientTitle: "Define the rules and exceptions",
        partnerLabel: "Service delivery / 02",
        partnerTitle: "Own the operating rhythm",
      },
      exampleSection: {
        eyebrow: "Trace the customer handoff",
        title: "Turn scattered follow-up into a reliable flow.",
        description:
          "When work arrives in several places, the answer is rarely another reminder. Give each item a route, an owner, and an escalation path.",
        situationLabel: "Where the queue breaks",
        approachLabel: "How the service runs",
        resultLabel: "What becomes measurable",
      },
      process: {
        eyebrow: "Design the service before switching it on",
        title: "From process map to a managed daily run.",
        description:
          "We make the workflow, service boundaries, and exception rules explicit, then use real operating signals to tune the service.",
      },
      comparison: {
        eyebrow: "Pick the right level of ownership",
        title: "Keep task direction, delegate the process, or commission a deliverable?",
      },
      final: {
        eyebrow: "Find the workflow that needs an owner",
        title: "Let’s untangle one process and give it a dependable rhythm.",
        description:
          "Bring us the handoffs, repeat tasks, or customer queues taking too much coordination. We’ll map the flow, decision points, and reporting that could make it run better.",
        cta: "Map my workflow",
      },
    },
    bestFor:
      "Businesses with recurring workflows that need dependable execution, clear responsibilities, and regular reporting.",
    outcome:
      "Less time coordinating routine work and more confidence about what is happening, who owns it, and where attention is needed.",
    benefits: [
      {
        title: "One clear owner",
        detail:
          "Responsibilities and handoffs are agreed up front, so work does not drift between inboxes and teams.",
      },
      {
        title: "A repeatable standard",
        detail:
          "Documented workflows help recurring tasks stay consistent as volume or team members change.",
      },
      {
        title: "Visibility without micromanaging",
        detail:
          "A practical reporting cadence surfaces progress, exceptions, and decisions that need your input.",
      },
      {
        title: "A service that can adapt",
        detail:
          "Review what is working and adjust the scope as your demand, tools, or priorities evolve.",
      },
    ],
    clientOwns: [
      "Business policies, approvals, and decisions that require your authority",
      "Accurate source information and the access needed to perform the workflow",
      "Timely direction when exceptions require a business decision",
    ],
    quorisxOwns: [
      "Agreed workflow execution and day-to-day coordination",
      "Quality checks, issue escalation, and service communication",
      "Progress reporting against the responsibilities defined together",
    ],
    example: {
      title: "When handoffs are slowing customers down",
      situation:
        "New enquiries arrive through several channels, and follow-up depends on whoever happens to see them first.",
      approach:
        "Map the intake and routing process, assign clear ownership, agree escalation rules, and report on open items and exceptions.",
      result:
        "Your team has a more dependable process and a clearer view of the customer work needing attention.",
    },
    steps: [
      {
        title: "Map the workflow",
        detail: "Walk through inputs, handoffs, exceptions, and the intended outcome.",
      },
      {
        title: "Agree ownership",
        detail: "Set responsibilities, approvals, service boundaries, and escalation paths.",
      },
      {
        title: "Launch the routine",
        detail: "Document the process, align the team, and begin with a measured handoff.",
      },
      {
        title: "Review the signal",
        detail: "Use reporting and feedback to improve the workflow over time.",
      },
    ],
  },
  {
    slug: "project-solution",
    number: "03",
    title: "Deliver a Solution",
    eyebrow: "Defined outcome · Milestone-led delivery",
    headline: "Turn an important idea into work you can see taking shape.",
    intro:
      "Bring in specialist delivery for a defined initiative—such as a website, software feature, campaign, or automation. Start with the outcome, agree the scope, then move through visible milestones.",
    summary: "Specialist delivery for a defined project, launch, or improvement.",
    content: {
      heroKicker: "A brief with a finish line / 03",
      heroNote:
        "This is the focused-build route: align on the problem, decide what “done” means, and make progress tangible at each review point.",
      primaryCta: "Scope a project",
      secondaryCta: "Preview the delivery stages",
      mapTitle: "From brief to launch",
      businessNode: "The challenge",
      businessCaption: "sets the goal",
      deliveryNode: "Build team",
      deliveryCaption: "ships milestones",
      outcomeLabel: "What gets delivered",
      mapStart: "A clear brief starts the build",
      mapEnd: "A usable result is handed over",
      outcomeSection: {
        eyebrow: "A result you can point to",
        title: "Turn a business need into something real.",
        description:
          "Bring a clear challenge and the people who can make decisions. A focused delivery team turns that into scoped work, reviewed milestones, and an asset your business can put to use.",
        fitLabel: "Choose this route when",
        resultLabel: "The finish line",
      },
      ownership: {
        eyebrow: "Strong projects need fast decisions",
        title: "Your expertise sets direction. The delivery team makes it tangible.",
        description:
          "Projects move when subject knowledge, approvals, and execution meet at the right moments. Keep the business intent close while specialist work advances against the agreed brief.",
        clientLabel: "Project sponsor / 01",
        clientTitle: "Bring the goal and decisions",
        partnerLabel: "Delivery team / 02",
        partnerTitle: "Build, review, and hand over",
      },
      exampleSection: {
        eyebrow: "From rough idea to first release",
        title: "Make the next customer experience easier.",
        description:
          "A useful project begins when a real customer problem gets translated into a small, clear first release—not an endless wish list.",
        situationLabel: "The customer friction",
        approachLabel: "The first release",
        resultLabel: "Ready for what comes next",
      },
      process: {
        eyebrow: "A visible path to done",
        title: "Brief it. Build it. Put it to work.",
        description:
          "Each stage has a decision point, a concrete review, and a clear next move—so the team can keep momentum without hiding the work.",
      },
      comparison: {
        eyebrow: "Choose by the result you need",
        title: "Do you need more capacity, a run service, or a finished outcome?",
      },
      final: {
        eyebrow: "Bring us the idea that is ready to move",
        title: "Let’s turn your brief into a buildable first milestone.",
        description:
          "Share what you want to launch or improve, who it is for, and what success needs to look like. We’ll help shape the scope, checkpoints, and practical handover.",
        cta: "Scope my project",
      },
    },
    bestFor:
      "Teams with a specific business goal, a meaningful deliverable, and a need for focused expertise.",
    outcome:
      "A clearer path from brief to handover, with decisions, progress, and the next step visible along the way.",
    benefits: [
      {
        title: "Begin with the why",
        detail:
          "Clarify the user or business problem first, so the deliverable solves something meaningful.",
      },
      {
        title: "Know what is in scope",
        detail:
          "Agree deliverables, assumptions, responsibilities, and exclusions before work gets underway.",
      },
      {
        title: "See progress in stages",
        detail:
          "Milestones create useful moments to review work, resolve questions, and confirm direction.",
      },
      {
        title: "Finish with a handover",
        detail:
          "Close with the agreed files, access, documentation, and guidance your team needs to move forward.",
      },
    ],
    clientOwns: [
      "The business objective, subject expertise, and final decisions",
      "Feedback and approvals at the milestones agreed together",
      "Access to content, systems, and stakeholders needed for delivery",
    ],
    quorisxOwns: [
      "A scoped plan, delivery coordination, and specialist execution",
      "Clear communication about progress, dependencies, and risks",
      "The agreed deliverables and practical handover",
    ],
    example: {
      title: "When an idea needs a real launch plan",
      situation:
        "You know customers need a better way to book, but the idea is still spread across conversations and notes.",
      approach:
        "Define the customer journey and launch requirements, agree a first release, then design, build, review, and hand over in milestones.",
      result:
        "A focused launch with clear decisions and a deliverable your team can use and improve.",
    },
    steps: [
      {
        title: "Clarify the outcome",
        detail: "Define who the work helps and what should be different when it is done.",
      },
      {
        title: "Set the boundaries",
        detail: "Agree scope, milestones, dependencies, approvals, and handover needs.",
      },
      {
        title: "Build and review",
        detail: "Deliver in visible stages, with feedback at the decision points.",
      },
      {
        title: "Hand over clearly",
        detail: "Review the completed work, access, documentation, and future options.",
      },
    ],
  },
];

export function getWaysToWorkPage(slug: string) {
  return waysToWorkPages.find((page) => page.slug === slug);
}
