import { toRoleSlug } from "./data/to-role-slug";

export type SoftwareRoleContent = {
  headline: string;
  value: string;
  problems: readonly [string, string, string];
  responsibilities: readonly [string, string, string, string, string, string];
  deliverables: readonly [string, string, string, string];
  scenario: {
    before: string;
    assigned: string;
    delivered: string;
    review: string;
  };
  tools: readonly [string, string, string, string];
  industries: readonly [
    { name: string; href: string; task: string },
    { name: string; href: string; task: string },
    { name: string; href: string; task: string },
  ];
  roleFaq: readonly [string, string];
};

export const softwareRoleContent: Record<string, SoftwareRoleContent> = {
  "Mobile App Developer": {
    headline: "Ship app changes your customers can actually use.",
    value:
      "Add a mobile specialist to your product team to implement defined iOS or Android features, test device behavior, and prepare reviewable release builds.",
    problems: [
      "A mobile backlog keeps slipping because the same small product team also owns web and backend work.",
      "A feature behaves differently across device sizes or OS versions, but the reproduction steps are inconsistent.",
      "App-store updates depend on undocumented build settings, signing steps, or release notes.",
    ],
    responsibilities: [
      "Implement prioritized screens and app features from approved designs, acceptance criteria, and product decisions.",
      "Work in the agreed native or cross-platform codebase, such as Swift, Kotlin, Flutter, or React Native.",
      "Connect app views to existing APIs and handle loading, empty, error, and offline states within the agreed scope.",
      "Check layouts, navigation, and device-specific behavior on the agreed simulator and device matrix.",
      "Write or update focused tests and record known gaps for product and engineering review.",
      "Prepare build notes and release materials; your team retains signing, store-account ownership, and release approval unless agreed otherwise.",
    ],
    deliverables: [
      "Reviewed source changes for the agreed mobile features.",
      "Build or test package for the target environment.",
      "Device and OS test notes with defects or known limitations.",
      "Release notes and handoff checklist for your approver.",
    ],
    scenario: {
      before:
        "Customers can browse an account screen, but the product team has not implemented the requested saved-payment view.",
      assigned:
        "The developer receives the approved screen design, API contract, supported OS range, and acceptance criteria.",
      delivered:
        "A reviewable feature branch, tested states, a build for your QA process, and documented edge cases.",
      review:
        "Your product owner approves behavior and copy; your mobile lead reviews the code and your release owner controls publication.",
    },
    tools: ["Swift / Xcode", "Kotlin / Android Studio", "Flutter", "React Native"],
    industries: [
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Implement an order-status view against the store's existing API.",
      },
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        task: "Build a non-clinical appointment reminder screen using client-approved access and data rules.",
      },
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Add account settings to a companion app and test supported devices.",
      },
    ],
    roleFaq: [
      "How do you choose native versus cross-platform?",
      "The choice follows your current codebase, platform requirements, team conventions, and maintenance plan. The developer works within the agreed stack; a rebuild or architecture decision stays with your product and engineering owners.",
    ],
  },
  "API Integration Developer": {
    headline: "Connect the systems your team already depends on.",
    value:
      "Add focused integration capacity for API contracts, data mapping, authentication flows, retries, and documentation inside your existing engineering controls.",
    problems: [
      "Staff copy customer, order, or case details between systems because records do not stay in sync.",
      "An integration fails silently or produces duplicates when a partner API times out or changes its response.",
      "No one can explain which system owns a field, how authentication works, or how to replay a failed request.",
    ],
    responsibilities: [
      "Review the source and destination APIs, schemas, authentication method, rate limits, and ownership boundaries.",
      "Map fields and transformations, documenting required, optional, and rejected values before implementation.",
      "Build the agreed connector or service using the team's languages, deployment path, and secret-handling practices.",
      "Implement bounded retries, idempotency, validation, and useful error handling where supported by the design.",
      "Test normal, invalid, duplicate, and failure responses using approved environments and representative data.",
      "Document endpoints, setup, known limits, and operational checks; production credentials and go-live approval remain with your owners.",
    ],
    deliverables: [
      "Version-controlled connector or integration changes.",
      "Field-mapping and API behavior notes.",
      "Automated or repeatable test cases for success and failure paths.",
      "Setup, retry, and troubleshooting documentation.",
    ],
    scenario: {
      before:
        "A service team exports new leads from a CRM and re-enters them into a scheduling platform each afternoon.",
      assigned:
        "The developer maps the CRM event and scheduling API, confirms duplicate rules, and implements a test-environment sync.",
      delivered:
        "A reviewed integration change with field mapping, failure handling, test evidence, and a replay procedure.",
      review:
        "Your system owners verify field ownership and sample records, then approve credentials and deployment.",
    },
    tools: ["REST / OpenAPI", "Postman", "Node.js", "OAuth 2.0"],
    industries: [
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Route approved enquiry fields from a form into a CRM and scheduling tool.",
      },
      {
        name: "Logistics & Fleet",
        href: "/industries/logistics-fleet",
        task: "Map status updates between a dispatch platform and customer notifications.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Keep order events aligned between storefront and fulfillment systems.",
      },
    ],
    roleFaq: [
      "Who owns the external API relationship?",
      "Your business retains vendor accounts, API subscriptions, and production credentials. The developer can work from approved documentation and test access, and will document vendor-side dependencies or contract limits for your owner.",
    ],
  },
  "CRM Developer": {
    headline: "Make your CRM reflect how your team really works.",
    value:
      "Add configuration and development capacity for CRM data models, pipelines, permissions, and integrations—with your sales or operations owner defining the process.",
    problems: [
      "Teams keep deal or customer context in spreadsheets because CRM fields and stages do not fit the actual handoff.",
      "Users see records they should not, or cannot access the information needed for their assigned work.",
      "Reports disagree because duplicate records and inconsistent field rules make pipeline data hard to interpret.",
    ],
    responsibilities: [
      "Translate approved sales or service workflows into objects, fields, lifecycle stages, and validation rules.",
      "Configure layouts, views, permissions, and role-based access in the CRM platform you use.",
      "Build agreed automations and integrations with clear trigger, exception, and ownership rules.",
      "Clean or migrate supplied data using a documented mapping and test import before production changes.",
      "Test user journeys, reports, and access with representative roles and sample records.",
      "Prepare admin notes and a user handoff; business owners approve process definitions, access policies, and production changes.",
    ],
    deliverables: [
      "Documented object, field, and pipeline configuration.",
      "Tested workflow or integration changes in an approved environment.",
      "Import mapping and data-quality exception list.",
      "Admin guide and user-facing handoff notes.",
    ],
    scenario: {
      before:
        "Sales reps track renewals in personal spreadsheets, and managers cannot see a consistent renewal stage.",
      assigned:
        "The developer maps the agreed renewal steps, required fields, owners, and visibility rules with the sales operations lead.",
      delivered:
        "A tested CRM pipeline, permission setup, sample report, and change notes ready for owner review.",
      review:
        "Sales leadership approves stage definitions and access; representative users validate the workflow before rollout.",
    },
    tools: ["Salesforce", "HubSpot", "Microsoft Dynamics 365", "REST APIs"],
    industries: [
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Configure enquiry-to-proposal stages and a handoff checklist.",
      },
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Align trial, onboarding, and renewal records to agreed lifecycle definitions.",
      },
      {
        name: "Property Management",
        href: "/industries/property-management",
        task: "Organize owner and tenant enquiry records with role-specific visibility.",
      },
    ],
    roleFaq: [
      "Does the developer decide how our sales process should work?",
      "No. Your sales or operations owner defines stages, qualification rules, and approval authority. The developer translates those decisions into the CRM, tests the configuration, and flags gaps that need a business decision.",
    ],
  },
  "QA / Software Tester": {
    headline: "Find the breakpoints before a release reaches users.",
    value:
      "Add hands-on testing capacity to turn requirements into repeatable checks, clear defect evidence, and regression coverage for your existing release process.",
    problems: [
      "A small team tests only the feature that changed, so adjacent flows can regress unnoticed.",
      "Bug reports say something is broken but omit the environment, steps, or evidence needed to reproduce it.",
      "Release confidence depends on one person remembering which scenarios to retest.",
    ],
    responsibilities: [
      "Review acceptance criteria and clarify expected behavior with product and engineering owners.",
      "Design and execute functional, exploratory, compatibility, and regression tests within agreed scope.",
      "Record reproducible defects with environment, steps, expected and actual behavior, and relevant evidence.",
      "Retest fixes and check adjacent workflows against a prioritized test plan.",
      "Validate supported browsers, devices, roles, and test data according to the release matrix you provide.",
      "Summarize test coverage and open risks; product owners decide release readiness and accepted risk.",
    ],
    deliverables: [
      "Role-specific test plan and executed test cases.",
      "Defect reports with reproduction steps and supporting evidence.",
      "Regression checklist for agreed critical flows.",
      "Release test summary with unresolved items and coverage limits.",
    ],
    scenario: {
      before:
        "A checkout update is ready, but the team has no written coverage for discount codes, failed payments, or saved carts.",
      assigned:
        "The tester reviews acceptance criteria, prepares scenarios, and runs them in the approved test environment.",
      delivered:
        "A test record, reproducible defects, retest results, and a summary of untested areas.",
      review:
        "Your product owner confirms expected behavior and your release owner decides whether known issues are acceptable.",
    },
    tools: ["Jira", "TestRail", "BrowserStack", "Postman"],
    industries: [
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Test cart, promotion, checkout, and order-confirmation paths.",
      },
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Check role permissions and key account workflows before a release.",
      },
      {
        name: "Hospitality",
        href: "/industries/hospitality",
        task: "Verify reservation changes and confirmation states across supported devices.",
      },
    ],
    roleFaq: [
      "Does QA approve the release?",
      "The tester supplies evidence about executed checks, defects, and remaining coverage gaps. Your product and release owners decide whether the software is ready and what risk to accept.",
    ],
  },
  "Automation QA Engineer": {
    headline: "Turn repeat release checks into maintainable tests.",
    value:
      "Add automation engineering capacity for stable test suites and CI feedback, while your team retains the release policy and decides which checks block deployment.",
    problems: [
      "The same browser flows are tested manually before every release, slowing feedback on routine changes.",
      "Existing UI tests fail intermittently and teams cannot tell a product defect from a brittle test.",
      "Automation runs locally but is not connected to the team's CI pipeline or test data approach.",
    ],
    responsibilities: [
      "Select candidate checks based on risk, stability, and the cost of maintaining automation.",
      "Implement UI, API, or component tests using the team's existing framework and code conventions.",
      "Create reusable fixtures and isolate test data where the approved environment supports it.",
      "Integrate agreed suites into CI with clear results, artifacts, and failure diagnostics.",
      "Investigate flaky tests and maintain selectors, fixtures, and assertions as the product changes.",
      "Report coverage and suite health; your engineering owner decides merge gates and production release criteria.",
    ],
    deliverables: [
      "Version-controlled automated checks for agreed workflows.",
      "CI configuration updates and readable test artifacts.",
      "Flakiness and maintenance notes with known limitations.",
      "Coverage map showing automated and manual test areas.",
    ],
    scenario: {
      before:
        "A stable account-creation flow is manually repeated for each deployment, while an old browser suite times out unpredictably.",
      assigned:
        "The engineer reviews the flow, selects reliable checkpoints, and connects the suite to a staging CI job.",
      delivered:
        "A maintainable test suite, CI results, and notes separating test infrastructure failures from product defects.",
      review:
        "Your team approves the CI trigger and determines which failures block merge or release.",
    },
    tools: ["Playwright", "Cypress", "GitHub Actions", "Jest"],
    industries: [
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Automate stable sign-in, account, and permission checks.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Run repeatable cart and checkout smoke tests in staging.",
      },
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Exercise role-based product flows in non-production with client-defined test data.",
      },
    ],
    roleFaq: [
      "Will every test run block a deployment?",
      "No. Your engineering and release owners choose which suites run at each stage and which failures block progress. The engineer can propose a staged approach based on execution time, reliability, and the risk each check covers.",
    ],
  },
  "DevOps & Cloud Engineer": {
    headline: "Make deployments and cloud operations easier to follow.",
    value:
      "Add infrastructure and delivery support for documented pipelines, environment configuration, monitoring, and operational runbooks within your cloud governance.",
    problems: [
      "Deployments depend on manual steps that differ between environments or rely on one engineer's memory.",
      "A configuration change is hard to trace, review, or safely roll back.",
      "Alerts identify an incident but do not show the service owner what to inspect next.",
    ],
    responsibilities: [
      "Review the existing deployment flow, cloud boundaries, environments, and approval gates before proposing changes.",
      "Maintain CI/CD pipelines and infrastructure configuration using the team's repository and review process.",
      "Support environment setup, secrets references, and access policies without taking ownership of client credentials.",
      "Configure agreed logs, metrics, alerts, and operational checks for the services in scope.",
      "Test deployment and rollback steps in approved non-production environments and document dependencies.",
      "Prepare runbooks and change records; architecture, production access, budgets, and go-live approval remain with designated owners.",
    ],
    deliverables: [
      "Reviewed pipeline or infrastructure-as-code changes.",
      "Environment and deployment configuration notes.",
      "Monitoring and alert reference for agreed services.",
      "Deployment, verification, and rollback runbook.",
    ],
    scenario: {
      before:
        "A web service deploy requires a developer to run several undocumented commands and manually verify environment settings.",
      assigned:
        "The engineer documents the current flow, moves repeatable steps into the existing pipeline, and tests a rollback in staging.",
      delivered:
        "A reviewed pipeline change, a deployment checklist, and monitoring references for the service owner.",
      review:
        "Your cloud owner approves permissions and production changes; the business retains account, budget, and incident authority.",
    },
    tools: ["AWS", "Microsoft Azure", "Docker", "Terraform"],
    industries: [
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Document and test a service's staging-to-production deployment flow.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Add release checks around storefront services and agreed monitoring.",
      },
      {
        name: "Logistics & Fleet",
        href: "/industries/logistics-fleet",
        task: "Maintain deployment notes for dispatch tools and their connected services.",
      },
    ],
    roleFaq: [
      "Does this role take over our cloud account or incident command?",
      "No. The specialist works within access and change controls your cloud owner approves. Account ownership, emergency authority, production approvals, and incident decisions remain with your designated team.",
    ],
  },
  "IT Support Specialist": {
    headline: "Give everyday technology issues a clear next step.",
    value:
      "Add structured support capacity for user tickets, approved device and account setup, and routine troubleshooting, with escalation paths defined by your IT owner.",
    problems: [
      "Employees wait for help with routine access, setup, or connectivity questions while senior IT staff handle them between projects.",
      "Requests arrive through chat and email without a consistent record, owner, or status.",
      "New starters receive different device and account setup depending on who is available.",
    ],
    responsibilities: [
      "Receive and categorize requests in the ticketing system and capture the user's steps and environment.",
      "Troubleshoot common approved software, device, connectivity, and account issues using documented procedures.",
      "Coordinate account provisioning and device setup only after the authorized owner approves the request.",
      "Track ticket status, user updates, handoffs, and recurring issues in the agreed queue.",
      "Escalate suspected security incidents, privileged access needs, and unresolved technical issues to your IT lead.",
      "Maintain setup checklists and resolution notes; policy decisions, privileged access, and security response remain with your IT owner.",
    ],
    deliverables: [
      "Updated support tickets with category, steps, and resolution notes.",
      "New starter and device setup checklist records.",
      "Escalation notes with impact and troubleshooting already completed.",
      "Recurring issue summary for IT owner review.",
    ],
    scenario: {
      before:
        "New team members message different managers for laptop and account help, and setup steps are not recorded consistently.",
      assigned:
        "The specialist follows the approved onboarding checklist, records requests, and routes any permission requiring owner approval.",
      delivered:
        "A traceable setup record, resolved routine tickets, and clearly escalated access questions.",
      review:
        "Your IT administrator approves accounts and permissions; the employee confirms the device is ready for their work.",
    },
    tools: ["ServiceNow", "Jira Service Management", "Microsoft 365", "Freshservice"],
    industries: [
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Handle routine account and collaboration-tool requests from distributed staff.",
      },
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Triage employee endpoint and access issues using the internal knowledge base.",
      },
      {
        name: "Hospitality",
        href: "/industries/hospitality",
        task: "Coordinate approved workstation and user setup across operational teams.",
      },
    ],
    roleFaq: [
      "Can the specialist approve or grant privileged access?",
      "Access follows your existing approval policy. The specialist can prepare a request and coordinate an authorized setup, but privileged access and exceptions stay with your designated administrator.",
    ],
  },
  "Technical Support Engineer": {
    headline: "Move difficult product issues from report to evidence.",
    value:
      "Add product-focused troubleshooting capacity for reproductions, log review, technical customer updates, and engineering escalations—not general IT administration.",
    problems: [
      "Customer reports reach engineering without version, steps, logs, or a reliable way to reproduce the behavior.",
      "Support cannot distinguish a configuration issue from a product defect or a third-party dependency.",
      "Engineering repeats the same diagnostic questions across tickets and loses time rebuilding context.",
    ],
    responsibilities: [
      "Collect environment, version, configuration, and reproduction details using approved support procedures.",
      "Analyze application logs and request traces that the client has authorized for support use.",
      "Reproduce issues in a safe test environment and identify likely boundaries for investigation.",
      "Write clear escalation notes with evidence, impact, attempted checks, and unanswered questions.",
      "Explain approved workarounds and status updates in language appropriate to the customer and internal owner.",
      "Track resolution and update knowledge notes; product fixes, customer commitments, and incident declarations stay with client owners.",
    ],
    deliverables: [
      "Reproducible issue reports with environment details.",
      "Log and request-trace findings within the authorized scope.",
      "Engineering escalation brief with attempted diagnostics.",
      "Updated support notes for confirmed resolutions and workarounds.",
    ],
    scenario: {
      before:
        "A customer reports that a data export sometimes stalls, but the report includes no file size, job identifier, or time of occurrence.",
      assigned:
        "The engineer gathers permitted diagnostics, recreates the issue with representative test data, and separates observed facts from hypotheses.",
      delivered:
        "A reproducible ticket with timestamps, logs, impact, and a focused engineering question.",
      review:
        "Your product owner approves customer messaging and engineering prioritizes any fix or workaround.",
    },
    tools: ["Jira Service Management", "Datadog", "Postman", "Sentry"],
    industries: [
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Investigate customer-reported API or application errors for engineering handoff.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Trace reported order or payment state issues using authorized logs.",
      },
      {
        name: "Logistics & Fleet",
        href: "/industries/logistics-fleet",
        task: "Reproduce dispatch or tracking discrepancies and attach evidence to support cases.",
      },
    ],
    roleFaq: [
      "Is this the same as an IT help desk role?",
      "No. IT support focuses on employee devices, accounts, and workplace tools. A technical support engineer investigates the behavior of your product or service and prepares technical evidence for product engineering.",
    ],
  },
  "AI Integration Developer": {
    headline: "Connect model capabilities to real product workflows.",
    value:
      "Add implementation capacity for model APIs, application interfaces, evaluation checks, and guardrails agreed with your product and technical owners.",
    problems: [
      "A prototype prompt works in a demo but has no defined input validation, timeout, or error behavior in the product.",
      "Model responses are difficult to evaluate because sample tasks and expected boundaries are not documented.",
      "Teams do not know what information is sent to a provider or how failures are surfaced to users.",
    ],
    responsibilities: [
      "Connect an approved model or provider API to a defined application workflow and environment.",
      "Implement input validation, output handling, timeout behavior, and provider error paths within the approved design.",
      "Apply client-defined system prompts, retrieval context, and refusal boundaries without claiming model guarantees.",
      "Create evaluation examples and integration tests for expected, ambiguous, and out-of-scope inputs.",
      "Document data flow, provider settings, version assumptions, and operational dependencies for review.",
      "Support a staged integration handoff; model selection, data approval, risk acceptance, and production release remain with client owners.",
    ],
    deliverables: [
      "Reviewed model-provider integration changes.",
      "Documented request, response, and error handling.",
      "Evaluation examples and integration test results.",
      "Data-flow and configuration handoff notes.",
    ],
    scenario: {
      before:
        "A support team has a model-backed answer prototype, but application code does not yet handle missing context or provider timeouts.",
      assigned:
        "The developer connects the approved provider in a test environment and implements the agreed fallback and evaluation cases.",
      delivered:
        "A reviewable integration, test evidence, and a documented list of provider and data assumptions.",
      review:
        "Your product, privacy, and engineering owners approve data use, response boundaries, and whether to proceed beyond testing.",
    },
    tools: ["OpenAI API", "Anthropic API", "Python", "LangChain"],
    industries: [
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Connect a model API to an internal product feature using approved test data.",
      },
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Prototype document classification with human review and defined input limits.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Integrate a product-question assistant with a controlled catalog context.",
      },
    ],
    roleFaq: [
      "Does an integration guarantee correct model answers?",
      "No. Model outputs can be incomplete or incorrect. The role can implement agreed validation, evaluation, and fallback behavior, but your team must review the use case, approve data handling, and decide what level of human oversight is appropriate.",
    ],
  },
  "AI Automation Engineer": {
    headline: "Put useful AI steps inside workflows people can supervise.",
    value:
      "Add workflow engineering capacity for model-assisted steps, human approvals, exception handling, and monitoring that fit your existing process and controls.",
    problems: [
      "Staff re-key information between tools even when parts of intake or categorization are repeatable.",
      "A no-review automation can produce changes that are difficult to inspect or reverse.",
      "Failures sit unnoticed because workflow owners cannot see run status, exceptions, or retries.",
    ],
    responsibilities: [
      "Map the current workflow, decision owners, data inputs, and failure cases before changing automation.",
      "Implement agreed AI-assisted steps in the client's supported orchestration and application environment.",
      "Add approval checkpoints for actions that require human judgment or authorization.",
      "Define retries, exception queues, audit notes, and safe stopping behavior for failed or uncertain runs.",
      "Test representative and edge-case inputs and document where outputs need human verification.",
      "Prepare monitoring and handoff notes; process ownership, approval authority, and production activation remain with your team.",
    ],
    deliverables: [
      "Workflow map with decision and approval points.",
      "Tested orchestration changes for the agreed use case.",
      "Exception, retry, and human review procedures.",
      "Monitoring and maintenance notes for the workflow owner.",
    ],
    scenario: {
      before:
        "Operations staff read inbound requests, classify them, and copy the details into a case system.",
      assigned:
        "The engineer maps the existing intake rules and prototypes an AI-assisted classification step that pauses for human confirmation.",
      delivered:
        "A test workflow with an approval queue, exception path, sample evaluations, and operator instructions.",
      review:
        "Your operations owner checks decisions and exception handling before authorizing any live workflow changes.",
    },
    tools: ["n8n", "Make", "Python", "REST APIs"],
    industries: [
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Assist with intake categorization while routing uncertain items for review.",
      },
      {
        name: "Property Management",
        href: "/industries/property-management",
        task: "Sort maintenance requests into approved categories with staff confirmation.",
      },
      {
        name: "Logistics & Fleet",
        href: "/industries/logistics-fleet",
        task: "Extract shipment update details into a review queue for dispatch staff.",
      },
    ],
    roleFaq: [
      "Will this role automate a process without human review?",
      "The page describes supervised, scoped workflow work. Approval checkpoints and exception paths are defined with your process owner; no workflow should take consequential actions until your team has explicitly approved its controls and operating scope.",
    ],
  },
  "AI Chatbot Developer": {
    headline: "Give customers a clearer path through common questions.",
    value:
      "Add chatbot development capacity for conversation design, approved knowledge retrieval, escalation behavior, and practical test coverage.",
    problems: [
      "The same basic questions repeatedly interrupt staff, but existing help content is hard to navigate.",
      "A bot answers beyond its approved knowledge or gives no useful path when it cannot help.",
      "There is no consistent way to test conversation changes before publishing them.",
    ],
    responsibilities: [
      "Map user intents, supported topics, and escalation conditions with your service owner.",
      "Build conversation flows and retrieval connections using content approved for the bot.",
      "Configure clear fallback and human handoff routes for uncertain or sensitive questions.",
      "Test representative phrasings, missing context, out-of-scope requests, and handoff behavior.",
      "Document source content, update ownership, and known limitations of the conversation experience.",
      "Prepare a test or staged release; your business approves customer-facing answers, channels, and launch.",
    ],
    deliverables: [
      "Conversation map and supported-topic boundaries.",
      "Configured chatbot flow and knowledge retrieval.",
      "Test set with expected responses, fallback, and handoff checks.",
      "Content maintenance and escalation handoff notes.",
    ],
    scenario: {
      before:
        "Visitors ask about service areas and booking steps, but the current help page is long and the contact form gets incomplete requests.",
      assigned:
        "The developer uses approved help content to build a short question flow and routes uncertain requests to the service team.",
      delivered:
        "A staged conversation, test transcripts, source references, and a handoff path for review.",
      review:
        "Your support owner approves the knowledge sources, wording, escalation destination, and channel before publishing.",
    },
    tools: ["Dialogflow", "Botpress", "Rasa", "OpenAI API"],
    industries: [
      {
        name: "Hospitality",
        href: "/industries/hospitality",
        task: "Guide visitors to approved reservation and property information.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Answer catalog and order-process questions from approved support content.",
      },
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        task: "Provide non-clinical navigation to client-approved service information with human handoff.",
      },
    ],
    roleFaq: [
      "Can the chatbot give healthcare or financial advice?",
      "The role is scoped to approved information and routing, not professional advice. Any healthcare or financial information access and customer-facing use must follow your requirements, review process, and applicable compliance obligations.",
    ],
  },
  "AI Agent Developer": {
    headline: "Build agent workflows with clear permissions and oversight.",
    value:
      "Add engineering capacity for bounded tool-using agent flows, explicit permission checks, evaluation, and human supervision—not unrestricted autonomous access.",
    problems: [
      "An agent prototype can call tools but does not clearly limit which records or actions it may use.",
      "Teams cannot inspect why a tool was selected or what happened when a step failed.",
      "Evaluation focuses on a few demos instead of repeatable tasks and unsafe or ambiguous cases.",
    ],
    responsibilities: [
      "Define the agent's bounded task, allowed tools, input limits, and prohibited actions with the client owner.",
      "Implement tool schemas and permission checks around the systems approved for the use case.",
      "Add human approval before consequential actions and safe stops for missing or conflicting information.",
      "Create evaluation tasks covering normal, ambiguous, failed-tool, and disallowed requests.",
      "Record tool calls and outcomes in the agreed test environment for inspection and debugging.",
      "Document boundaries and handoff behavior; data authorization, production permissions, and final risk decisions stay with your team.",
    ],
    deliverables: [
      "Agent workflow and allowed-tool specification.",
      "Permission and human-approval implementation for the agreed scope.",
      "Evaluation set with results and known limitations.",
      "Tool-call and exception review notes for handoff.",
    ],
    scenario: {
      before:
        "A team wants an assistant to look up order records and prepare status replies, but it must not change orders or send messages on its own.",
      assigned:
        "The developer builds a read-only lookup flow and presents a draft response for an employee to approve.",
      delivered:
        "A bounded test agent, tool-call logs, evaluation cases, and a documented escalation path.",
      review:
        "Your system owner authorizes data access; operations approves response content and any future action permissions.",
    },
    tools: ["LangGraph", "OpenAI API", "Python", "JSON Schema"],
    industries: [
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Prepare order-status context for staff review without changing orders.",
      },
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Retrieve approved support references and draft a response for an agent.",
      },
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Collect documents from an approved workspace into a reviewable matter summary.",
      },
    ],
    roleFaq: [
      "Can an agent make changes without a person checking?",
      "That is not assumed. The permitted tools, access level, and approval points are explicitly scoped with your owner. Consequential actions should remain subject to the controls and human approvals your business requires.",
    ],
  },
  "Data Analyst": {
    headline: "Turn operational questions into reports people can use.",
    value:
      "Add analytical capacity to define metrics, prepare dashboards, and explain the source and limitations of business reporting.",
    problems: [
      "Different teams report different totals because KPI definitions and date boundaries are unclear.",
      "Managers manually combine exports each week and cannot trace a number back to its source.",
      "Dashboards show activity but do not answer the operational question leaders are asking.",
    ],
    responsibilities: [
      "Clarify the business question, intended audience, reporting cadence, and metric definitions with stakeholders.",
      "Inspect approved data sources and document missing fields, quality limits, and assumptions.",
      "Prepare queries and transformations for analysis within the agreed warehouse or reporting environment.",
      "Build dashboards and recurring reports with labels, filters, and definitions that users can understand.",
      "Check totals against source records and investigate discrepancies before presenting findings.",
      "Explain patterns and limitations without overstating causation; business owners decide actions and KPI targets.",
    ],
    deliverables: [
      "KPI dictionary with agreed definitions and source notes.",
      "Dashboard or recurring report built in the selected tool.",
      "Validated query or workbook with documented assumptions.",
      "Written findings summary with caveats and follow-up questions.",
    ],
    scenario: {
      before:
        "A service manager receives separate weekly spreadsheets and cannot compare unresolved cases across teams.",
      assigned:
        "The analyst confirms what counts as unresolved, checks timestamp and ownership fields, and drafts a shared report.",
      delivered:
        "A dashboard with the agreed filters, definitions, source checks, and known data gaps.",
      review:
        "Your operational owner validates the KPI meaning and decides how the findings should affect staffing or process changes.",
    },
    tools: ["SQL", "Power BI", "Tableau", "Excel"],
    industries: [
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Report support case aging by agreed product and priority definitions.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Summarize order and return patterns from approved commerce data.",
      },
      {
        name: "Logistics & Fleet",
        href: "/industries/logistics-fleet",
        task: "Visualize shipment milestones and exceptions from supplied operational records.",
      },
    ],
    roleFaq: [
      "Does the analyst decide which KPIs the business should use?",
      "The analyst can document candidate definitions and show how data supports them. Your business leaders decide which measures reflect performance and what targets or actions to set.",
    ],
  },
  "Data Engineer": {
    headline: "Keep the data path from source to analysis understandable.",
    value:
      "Add pipeline engineering capacity for ingestion, transformations, quality checks, and documentation within your data platform and access controls.",
    problems: [
      "Analysts repeatedly clean source exports because data arrives in inconsistent formats.",
      "A scheduled pipeline fails without clear status, retry behavior, or ownership.",
      "A changed source field breaks downstream reports and the dependency is not documented.",
    ],
    responsibilities: [
      "Review data sources, refresh needs, dependencies, and access boundaries with the data owner.",
      "Build or maintain ingestion jobs and transformations in the agreed platform and repository.",
      "Add validation checks for required fields, expected ranges, duplicates, and late-arriving records.",
      "Configure failure visibility and rerun procedures appropriate to the pipeline's impact.",
      "Document schema assumptions, lineage, refresh timing, and downstream dependencies.",
      "Test changes with approved data; data governance, sensitive-data permissions, and production schedules stay with your owners.",
    ],
    deliverables: [
      "Version-controlled ingestion or transformation pipeline.",
      "Data quality checks with documented thresholds and exceptions.",
      "Source-to-target mapping and dependency notes.",
      "Run and recovery instructions for the pipeline owner.",
    ],
    scenario: {
      before:
        "A weekly sales report depends on files that arrive with inconsistent column names and are cleaned manually.",
      assigned:
        "The engineer maps the supplied formats, builds a controlled ingestion step, and adds checks for missing and duplicated fields.",
      delivered:
        "A repeatable pipeline, quality exception output, and runbook for failed or late files.",
      review:
        "Your data owner validates field meaning, approved access, and how exceptions should affect downstream reporting.",
    },
    tools: ["dbt", "Apache Airflow", "Python", "Snowflake"],
    industries: [
      {
        name: "Logistics & Fleet",
        href: "/industries/logistics-fleet",
        task: "Combine approved shipment events into a documented reporting dataset.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Transform order and return records for consistent downstream analysis.",
      },
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Build quality-checked product usage data extracts for analytics.",
      },
    ],
    roleFaq: [
      "Does the data engineer set our data retention or governance policy?",
      "No. Your data owner defines retention, access, and governance requirements. The engineer implements scoped pipelines within those rules and documents source, transformation, and exception behavior.",
    ],
  },
  "Database Administrator": {
    headline: "Keep database operations documented and reviewable.",
    value:
      "Add database operations support for routine checks, backup verification, access administration, and performance investigation under your database owner's controls.",
    problems: [
      "Backup jobs report completion but restore readiness has not been checked against a documented procedure.",
      "Slow queries recur, while teams lack a trace of the plan, impact, or previous tuning attempts.",
      "Database access and routine maintenance depend on undocumented one-off requests.",
    ],
    responsibilities: [
      "Review database engine, environment boundaries, maintenance windows, and approval procedures with your owner.",
      "Monitor agreed health indicators and record exceptions for review.",
      "Verify backup job status and participate in restore tests only within an approved non-production or supervised plan.",
      "Investigate query and index behavior using permitted diagnostics and document proposed changes.",
      "Process access requests through authorized approval and least-privilege procedures.",
      "Maintain operational notes and change records; recovery objectives, production changes, and access policy remain client decisions.",
    ],
    deliverables: [
      "Database health and maintenance check records.",
      "Backup verification and supervised restore-test notes.",
      "Query investigation with measured observations and proposed changes.",
      "Access and change records for authorized requests.",
    ],
    scenario: {
      before:
        "A reporting database slows during a scheduled export, but the team has no recent query notes or verified restore exercise.",
      assigned:
        "The administrator reviews permitted query plans, confirms backup job records, and drafts a safe test plan for owner approval.",
      delivered:
        "An investigation record, reviewed tuning proposal, and backup/restore checklist for a supervised test.",
      review:
        "Your database owner approves any production change, access adjustment, or restore exercise and confirms recovery requirements.",
    },
    tools: ["PostgreSQL", "MySQL", "SQL Server", "AWS RDS"],
    industries: [
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Review query performance and maintenance records for an application database.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Check database capacity and backup status around catalog and order workloads.",
      },
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Document approved access requests and database maintenance routines.",
      },
    ],
    roleFaq: [
      "Can the administrator access production data or restore backups independently?",
      "Only within permissions and procedures your database owner explicitly approves. Production access, destructive changes, recovery targets, and restore authorization remain under your organization's control.",
    ],
  },
  "Software Maintenance Specialist": {
    headline: "Keep existing software changes small, tested, and traceable.",
    value:
      "Add ongoing maintenance capacity for scoped bug fixes, dependency updates, monitoring follow-up, and release notes alongside your product engineers.",
    problems: [
      "Small bugs wait behind feature work and accumulate into a backlog with unclear impact.",
      "Dependency updates are deferred because teams cannot see compatibility changes or test coverage.",
      "A release fixes one issue but the change history and follow-up checks are hard to locate.",
    ],
    responsibilities: [
      "Triage assigned maintenance tickets and confirm reproduction, impact, and expected behavior.",
      "Implement focused bug fixes within the existing architecture and coding standards.",
      "Review dependency updates for compatibility notes and run the agreed test suite.",
      "Monitor assigned error reports and summarize recurring patterns for engineering review.",
      "Prepare change notes, tests, and rollback context for the team's normal review process.",
      "Escalate architectural or high-risk changes; maintainers do not unilaterally change product direction or release policy.",
    ],
    deliverables: [
      "Small, reviewable fixes with relevant tests.",
      "Dependency update notes and compatibility findings.",
      "Triage summary for recurring bugs or error patterns.",
      "Release and rollback notes for approved changes.",
    ],
    scenario: {
      before:
        "Users report that a saved filter resets after login, while the product team is focused on a new feature release.",
      assigned:
        "The specialist reproduces the issue, checks the existing test coverage, and proposes a focused fix in a separate branch.",
      delivered:
        "A peer-reviewable change, regression test, and concise release note with the affected behavior.",
      review:
        "Your engineering owner reviews the patch and the product release owner decides when it ships.",
    },
    tools: ["GitHub", "Sentry", "Dependabot", "Jest"],
    industries: [
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Triage application errors and implement scoped maintenance fixes.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Maintain catalog and checkout code with regression checks in staging.",
      },
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Update internal web tools while preserving documented workflows.",
      },
    ],
    roleFaq: [
      "Can this role take over the whole product roadmap?",
      "The role is focused on maintenance work agreed with your team. Priorities, architectural direction, and feature planning remain with your product and engineering owners; larger changes are reviewed and scoped separately.",
    ],
  },
  "Web Application Developer": {
    headline: "Move web product features from design into working software.",
    value:
      "Add web application development capacity for accessible interfaces, service integration, and tested features in your existing repository and deployment workflow.",
    problems: [
      "Product designs are ready, but frontend work competes with backend and maintenance priorities.",
      "A new screen looks correct in one state but fails with real data, validation errors, or smaller viewports.",
      "Frontend changes are disconnected from API behavior and arrive without a clear test or handoff.",
    ],
    responsibilities: [
      "Implement approved responsive interfaces using the project's existing framework and component patterns.",
      "Connect frontend views to agreed APIs and handle loading, empty, validation, and error states.",
      "Coordinate backend contracts and raise mismatches rather than inventing product behavior.",
      "Check accessibility basics, keyboard interaction, and supported browser layouts for assigned features.",
      "Write focused component or integration tests and prepare changes for peer review.",
      "Document assumptions and handoff notes; product decisions, API ownership, and production release approval remain with your team.",
    ],
    deliverables: [
      "Reviewed frontend or full web feature changes.",
      "Responsive implementation aligned with approved designs.",
      "Focused tests and documented known gaps.",
      "API assumptions and handoff notes for the next owner.",
    ],
    scenario: {
      before:
        "An internal portal needs a searchable activity view, but its design, API response, and empty-state behavior are not yet connected.",
      assigned:
        "The developer confirms the contract with the backend owner, implements the view, and covers loading, empty, and error states.",
      delivered:
        "A reviewable feature branch with responsive UI, tests, and a concise list of assumptions.",
      review:
        "Your product owner checks workflow and copy, while engineering reviews API use and merges through the existing process.",
    },
    tools: ["React", "TypeScript", "Next.js", "Playwright"],
    industries: [
      {
        name: "Technology & SaaS",
        href: "/industries/technology-saas",
        task: "Implement a role-aware account or reporting screen against existing APIs.",
      },
      {
        name: "E-commerce",
        href: "/industries/e-commerce",
        task: "Build a responsive product discovery or order-history feature.",
      },
      {
        name: "Professional Services",
        href: "/industries/professional-services",
        task: "Create an internal case or document workflow interface.",
      },
    ],
    roleFaq: [
      "Does a web application developer replace a product designer or backend engineer?",
      "No. The role implements agreed web features and coordinates with the people who own design, APIs, and product decisions. Broader responsibilities need to be explicitly scoped and matched to the required skills.",
    ],
  },
};

export function getSoftwareRoleContent(title: string) {
  return softwareRoleContent[title];
}

export function getSoftwareRoleBySlug(slug: string) {
  return Object.entries(softwareRoleContent).find(([title]) => toRoleSlug(title) === slug);
}
