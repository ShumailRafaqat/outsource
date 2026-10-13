import { ExpertiseRolesLayout } from "../expertise-roles-layout";
import { financeAccountingFaqs, financeAccountingFunction } from "../data/finance-accounting";
import type { ExpertisePageConfig } from "../data/types";

const page: ExpertisePageConfig = {
  group: financeAccountingFunction,
  hero: {
    eyebrow: "Finance & Accounting Support",
    headline: ["Finance & Accounting"],
    highlightedHeadline: "Support You Can Count On.",
    description:
      "Books that stay current, invoices that get chased, and financial admin that doesn’t pile up between your priorities.",
    rolesLinkLabel: "View All Finance Roles",
  },
  rolesSection: {
    eyebrow: "Finance & Accounting roles",
    heading: "Financial admin that stays on track.",
  },
  showClientOnboardingStory: false,
  faq: {
    eyebrow: "Finance & Accounting support",
    heading: "Finance & Accounting FAQs",
    description:
      "Answers about finance roles, accounting tools, payroll cycles, and financial data access.",
    items: financeAccountingFaqs,
  },
};

export function FinanceAccountingPage() {
  return <ExpertiseRolesLayout config={page} />;
}
