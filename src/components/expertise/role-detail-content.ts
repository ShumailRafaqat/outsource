export type RoleDetailContent = {
  responsibilities: readonly [string, string, string];
};

export const roleDetailContent: Record<string, RoleDetailContent> = {
  "Lead Generation Assistant": {
    responsibilities: [
      "Build account lists against the agreed industry, company-size, location, and buying-signal filters.",
      "Research decision-makers and verify contact details against reliable public and approved sources.",
      "Record source notes, qualification fields, and list gaps in the team's prospecting workspace.",
    ],
  },
  "CRM Data Entry Assistant": {
    responsibilities: [
      "Normalize account and contact fields to the naming rules used in your CRM.",
      "Log supplied call, email, and meeting notes against the correct records.",
      "Flag duplicates, missing ownership, and incomplete records for review instead of guessing.",
    ],
  },
  "Appointment Setter": {
    responsibilities: [
      "Check each prospect against the qualification criteria agreed with your sales lead.",
      "Offer approved meeting windows, confirm the time zone, and send calendar details.",
      "Log booking context and follow-up status so the meeting owner has a useful handoff.",
    ],
  },
  "Account Executive": {
    responsibilities: [
      "Prepare opportunity briefs, proposal drafts, and follow-up materials from approved inputs.",
      "Track stakeholder questions, decision steps, and requested information in the CRM.",
      "Coordinate internal pricing, solution, and contract reviews before materials are sent.",
    ],
  },
  "Account Manager": {
    responsibilities: [
      "Turn signed-client handoffs into an onboarding checklist with owners and due dates.",
      "Track agreed actions, usage questions, and open requests across client touchpoints.",
      "Prepare renewal-readiness notes and flag service risks early for the account owner.",
    ],
  },
  "Business Development Manager": {
    responsibilities: [
      "Map potential channel, referral, and strategic partners against agreed fit criteria.",
      "Prepare partner briefs and coordinate introductions, follow-ups, and co-selling activity.",
      "Keep partnership stages, next steps, and contribution notes current for leadership review.",
    ],
  },
  "CRM & Automation Specialist": {
    responsibilities: [
      "Map lifecycle stages, handoffs, and trigger conditions before configuring automation.",
      "Build and test CRM workflows, routing rules, and follow-up sequences in a safe test path.",
      "Monitor failed runs and document changes so the team can maintain the system.",
    ],
  },
  "HR Virtual Assistant": {
    responsibilities: [
      "Maintain employee records and onboarding documents using your approved access rules.",
      "Coordinate new-hire checklists, policy acknowledgements, and orientation logistics.",
      "Track recurring HR administration and surface missing information to the HR owner.",
    ],
  },
  "HR Recruiter": {
    responsibilities: [
      "Publish approved openings and keep job descriptions, stages, and owners current.",
      "Screen applications against the role criteria and coordinate interview availability.",
      "Update candidate status and prepare interviewer notes without making hiring decisions.",
    ],
  },
  "Compliance & Credentialing Assistant": {
    responsibilities: [
      "Track required credentials, expiry dates, and supporting documents against the checklist.",
      "Request missing items and verify records against the source requirements you provide.",
      "Escalate exceptions and prepare an audit-ready status view for the compliance owner.",
    ],
  },
  "Staffing Client Account Assistant": {
    responsibilities: [
      "Record incoming job orders, required skills, timing, and client-specific instructions.",
      "Coordinate candidate submission details and placement milestones with the staffing team.",
      "Maintain client activity and follow-up records so account owners see open commitments.",
    ],
  },
  "IT Recruiter": {
    responsibilities: [
      "Translate approved technical role requirements into sourcing and screening criteria.",
      "Review candidate experience and coordinate technical interviews with hiring teams.",
      "Keep applicant stages, feedback requests, and next steps current in the ATS.",
    ],
  },
  "Technical Sourcer": {
    responsibilities: [
      "Identify technical talent through agreed search channels and role-specific keywords.",
      "Review public profiles against required skills, seniority, and location constraints.",
      "Prepare concise candidate briefs and track outreach responses for recruiter handoff.",
    ],
  },
  "Bookkeeping Assistant": {
    responsibilities: [
      "Categorize transaction records against the chart of accounts and supplied rules.",
      "Match statements, receipts, and invoices and flag items that need accountant review.",
      "Prepare reconciliation support and month-end document checklists for approval.",
    ],
  },
  "Accounts Payable Assistant": {
    responsibilities: [
      "Capture vendor invoice details and match them to purchase orders or approval records.",
      "Route exceptions and payment requests through the business's authorization workflow.",
      "Maintain due-date tracking and supplier communication notes for the finance owner.",
    ],
  },
  "Collections / AR Specialist": {
    responsibilities: [
      "Review aging reports and prioritize accounts using the follow-up rules you approve.",
      "Send courteous, documented payment reminders and record customer responses.",
      "Reconcile dispute details and route credit, adjustment, or escalation decisions internally.",
    ],
  },
  "Payroll Processing Assistant": {
    responsibilities: [
      "Collect timesheets, approved adjustments, and employee updates before each payroll cutoff.",
      "Enter verified inputs into the payroll platform and run the agreed completeness checks.",
      "Flag variances for authorized review and maintain a traceable cycle checklist.",
    ],
  },
  "Virtual Assistant for Accountants": {
    responsibilities: [
      "Organize client source documents and label records to the firm's filing conventions.",
      "Coordinate document requests, meeting schedules, and routine client follow-ups.",
      "Prepare workpapers and task status for accountant review without approving financial entries.",
    ],
  },
  "Procurement Assistant": {
    responsibilities: [
      "Collect purchase requests and verify required specifications and approval details.",
      "Request supplier quotes and track order acknowledgements and delivery dates.",
      "Maintain purchase-order status and escalate substitutions or delays for approval.",
    ],
  },
  "Digital Marketing Assistant": {
    responsibilities: [
      "Maintain the campaign calendar, channel owners, asset links, and approval deadlines.",
      "Coordinate launch checklists, approved creative, links, and tracking parameters.",
      "Compile channel activity and campaign results into the reporting format your team uses.",
    ],
  },
  "SEO Specialist": {
    responsibilities: [
      "Group search queries by intent and map them to the pages your team wants to improve.",
      "Implement approved on-page updates, internal links, and metadata changes.",
      "Track crawl issues and ranking or traffic movement without promising a search position.",
    ],
  },
  "Email Marketing Assistant": {
    responsibilities: [
      "Prepare audience segments and suppression lists using the campaign rules you provide.",
      "Build email drafts, links, and layouts in your platform, then run proof and rendering checks.",
      "Schedule approved sends and report delivery, engagement, and unsubscribe signals.",
    ],
  },
  "Social Media Assistant": {
    responsibilities: [
      "Adapt approved copy and assets to each channel's format and publishing calendar.",
      "Schedule posts, check links and tags, and route comments that need an owner response.",
      "Collect post-level engagement signals and note recurring audience questions.",
    ],
  },
  "Content Writer": {
    responsibilities: [
      "Turn briefs into structured outlines that match the audience, format, and search intent.",
      "Draft articles, landing-page copy, or scripts in the agreed brand voice and review workflow.",
      "Check sources, links, and factual claims, then incorporate editorial feedback.",
    ],
  },
  "Graphic Designer": {
    responsibilities: [
      "Translate campaign or product briefs into visual concepts that follow brand guidelines.",
      "Create and revise layouts for the requested placements, formats, and accessibility needs.",
      "Package approved source files and export assets with consistent naming and dimensions.",
    ],
  },
  "Video Editor": {
    responsibilities: [
      "Ingest, label, and organize footage, audio, and references against the edit brief.",
      "Assemble cuts, captions, transitions, and platform-specific versions for review.",
      "Apply time-coded feedback and export final files using the agreed delivery specifications.",
    ],
  },
  "Influencer Marketing Manager": {
    responsibilities: [
      "Research creators using audience fit, content style, and campaign criteria.",
      "Coordinate approved outreach, briefs, deliverable dates, and review checkpoints.",
      "Track published content, usage permissions, and campaign results in one shared record.",
    ],
  },
  "Podcast Operations Assistant": {
    responsibilities: [
      "Coordinate guest availability, recording links, release forms, and preparation notes.",
      "Organize recordings and move approved edits through the host's review process.",
      "Prepare episode descriptions, timestamps, artwork, and publishing details for release.",
    ],
  },
  "Personal Brand Manager": {
    responsibilities: [
      "Translate the subject's positioning and content pillars into a sustainable publishing plan.",
      "Coordinate drafts, approvals, channel scheduling, and responses in the agreed voice.",
      "Review audience and content signals and surface ideas for the next editorial cycle.",
    ],
  },
  "Creative Asset Management Assistant": {
    responsibilities: [
      "Ingest files using the team's naming, tagging, rights, and version conventions.",
      "Maintain searchable folders and collections so approved assets are easy to retrieve.",
      "Flag expired permissions, duplicates, or missing source files for the asset owner.",
    ],
  },
  "Creative Studio Project Coordinator": {
    responsibilities: [
      "Convert incoming creative briefs into deliverables, owners, dependencies, and review dates.",
      "Coordinate handoffs between designers, writers, stakeholders, and production partners.",
      "Keep feedback, versions, and final delivery status visible in the project workspace.",
    ],
  },
  "Production & Crew Coordination Assistant": {
    responsibilities: [
      "Collect crew availability and confirm schedules against the latest production plan.",
      "Prepare call sheets, location notes, contact lists, and logistics for the production lead.",
      "Track day-of changes and circulate the current information to the right crew members.",
    ],
  },
  "Customer Support Representative": {
    responsibilities: [
      "Triage incoming tickets by topic, urgency, and the service rules your team defines.",
      "Resolve routine questions using approved knowledge and escalate exceptions with context.",
      "Update case notes and close the loop with customers through your agreed channels.",
    ],
  },
  "Dedicated Receptionist": {
    responsibilities: [
      "Answer and route calls using your greeting, directory, and escalation instructions.",
      "Capture caller details and messages accurately, then notify the right colleague.",
      "Schedule or confirm appointments and provide approved visitor or meeting information.",
    ],
  },
  "IT Helpdesk Assistant": {
    responsibilities: [
      "Log incidents with affected user, device, impact, and troubleshooting already attempted.",
      "Guide users through approved first-line checks and account steps within granted access.",
      "Escalate unresolved issues with reproducible details and keep requesters updated.",
    ],
  },
  "Content Moderator": {
    responsibilities: [
      "Review posts and reports against the platform rules and decision tree you supply.",
      "Remove, label, or escalate content only within the permissions and policy granted.",
      "Record edge cases and appeal context so policy owners can review consistent decisions.",
    ],
  },
  "Community & Membership Assistant": {
    responsibilities: [
      "Guide new members through welcome steps, access instructions, and community norms.",
      "Answer routine membership questions and route account or billing issues to the owner.",
      "Track renewal dates, event participation, and follow-up requests in the member system.",
    ],
  },
  "Audience & Community Manager": {
    responsibilities: [
      "Plan discussion prompts and channel activity around the community's editorial calendar.",
      "Moderate replies, answer within approved guidelines, and escalate sensitive conversations.",
      "Summarize recurring feedback and participation patterns for the community lead.",
    ],
  },
  "Hotel & Accommodation Operations Assistant": {
    responsibilities: [
      "Reconcile reservation details across the booking platform and property calendar.",
      "Answer guest questions and coordinate arrival, departure, and change requests.",
      "Route housekeeping, maintenance, or booking exceptions to the on-site decision-maker.",
    ],
  },
};
