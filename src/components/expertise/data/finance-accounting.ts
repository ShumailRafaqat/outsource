import { CircleDollarSign } from "lucide-react";

import type { FunctionGroup } from "./types";

export const financeAccountingFunction: FunctionGroup = {
  label: "Finance & Accounting",
  href: "/expertise/finance-accounting",
  icon: CircleDollarSign,
  intro:
    "Books that stay current, invoices that get chased, and financial admin that doesn’t pile up between your priorities.",
  roles: [
    {
      title: "Bookkeeping Assistant",
      description: "Maintains financial records, reconciliations, and expense tracking.",
    },
    {
      title: "Accounts Payable Assistant",
      description: "Processes vendor invoices, tracks payments, and keeps AP current.",
    },
    {
      title: "Collections / AR Specialist",
      description: "Follows up on invoices and keeps receivables from falling behind.",
    },
    {
      title: "Payroll Processing Assistant",
      description: "Collects timesheets, updates payroll platforms, and keeps cycles running.",
    },
    {
      title: "Virtual Assistant for Accountants",
      description: "Supports accounting firms with documents, invoices, and coordination.",
    },
    {
      title: "Procurement Assistant",
      description: "Tracks purchase orders, vendor coordination, and supply follow-ups.",
    },
  ],
};

export const financeAccountingFaqs = [
  [
    "What Finance & Accounting roles can I hire?",
    "Support can include bookkeeping, accounts payable, collections and receivables, payroll processing, accounting firm administration, and procurement coordination.",
  ],
  [
    "Can the assistant work with our accounting or payroll software?",
    "Share your platforms, workflows, and access requirements during planning so the role and onboarding can be matched to your systems.",
  ],
  [
    "How do you protect financial records and account access?",
    "Access, confidentiality, and data-handling requirements should be agreed before work begins. We recommend role-based accounts and only the permissions needed for assigned tasks.",
  ],
  [
    "Can support be scheduled around month-end or payroll cycles?",
    "Coverage can be planned around recurring deadlines and agreed responsibilities, subject to the role requirements and schedule in your engagement.",
  ],
  [
    "Can I start with one finance role and add support later?",
    "Yes. You can begin with a defined set of responsibilities and discuss expanding support as your needs change. Scope, schedule, and fees should be agreed in advance.",
  ],
] as const;
