import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { EngagementModelsPage } from "@/components/why-quorisx/engagement-models-page";
import { QualitySecurityPage } from "@/components/why-quorisx/quality-security-page";
import { RecruitmentMethodologyPage } from "@/components/why-quorisx/recruitment-methodology-page";
import { DigitalMarketingSeoPage } from "@/components/solutions/pages/digital-marketing-seo";
import { CustomerSupportPage } from "@/components/solutions/pages/customer-support";
import { PaidAdsLeadGenerationPage } from "@/components/solutions/pages/paid-ads-lead-generation";
import { AiAutomationPage } from "@/components/solutions/pages/ai-automation";
import { WebsiteDevelopmentPage } from "@/components/solutions/pages/website-development";
import { AdminExecutivePage } from "@/components/expertise/pages/admin-executive";
import { CustomerServicePage } from "@/components/expertise/pages/customer-service";
import { FinanceAccountingPage } from "@/components/expertise/pages/finance-accounting";
import { HrPeopleOperationsPage } from "@/components/expertise/pages/hr-people-operations";
import { MarketingCreativePage } from "@/components/expertise/pages/marketing-creative";
import { SalesGrowthPage } from "@/components/expertise/pages/sales-growth";
import { SoftwareDevelopmentPage } from "@/components/expertise/pages/software-development";
import { IndustryDetailPage } from "@/components/industries/industry-detail-page";
import { getIndustryPage } from "@/components/industries/industry-data";
import { comingSoonPage } from "@/lib/site-navigation";
import { getWaysToWorkPage } from "@/lib/ways-to-work";
import { WaysToWorkPage } from "@/components/ways-to-work/ways-to-work-page";

export const Route = createFileRoute("/$category/$slug")({
  beforeLoad: ({ params }) => {
    if (params.category === "why-quorisx" && params.slug === "global-operating-model") {
      throw redirect({
        to: "/",
        hash: "presence",
        replace: true,
      });
    }
  },
  head: ({ params }) => {
    const industry = params.category === "industries" ? getIndustryPage(params.slug) : undefined;
    const page = comingSoonPage(params.category, params.slug);
    const isWebsiteDevelopment =
      params.category === "solutions" && params.slug === "website-development";
    const isDigitalMarketingSeo =
      params.category === "solutions" && params.slug === "digital-marketing-seo";
    const isPaidAdsLeadGeneration =
      params.category === "solutions" && params.slug === "paid-ads-lead-generation";
    const isCustomerSupport = params.category === "solutions" && params.slug === "customer-support";
    const isAiAutomation = params.category === "solutions" && params.slug === "ai-automation";
    const isEngagementModels =
      params.category === "why-quorisx" && params.slug === "engagement-models";
    const isQualitySecurity =
      params.category === "why-quorisx" && params.slug === "quality-security";
    const isRecruitmentMethodology =
      params.category === "why-quorisx" && params.slug === "our-approach";
    const waysToWorkPage =
      params.category === "ways-to-work" ? getWaysToWorkPage(params.slug) : undefined;
    const isAdminRoles = params.category === "expertise" && params.slug === "admin-executive";
    const isSalesGrowthRoles =
      params.category === "expertise" &&
      (params.slug === "sales-growth" || params.slug === "sales-development");
    const isMarketingCreativeRoles =
      params.category === "expertise" && params.slug === "marketing-creative";
    const isFinanceAccountingRoles =
      params.category === "expertise" && params.slug === "finance-accounting";
    const isHrPeopleRoles =
      params.category === "expertise" && params.slug === "hr-people-operations";
    const isCustomerServiceRoles =
      params.category === "expertise" && params.slug === "customer-service";
    const isSoftwareDevelopmentRoles =
      params.category === "expertise" && params.slug === "software-dev";
    const expertiseTitle = isAdminRoles
      ? "Admin & Executive"
      : isSalesGrowthRoles
        ? "Sales & Growth"
        : isMarketingCreativeRoles
          ? "Marketing & Creative"
          : isFinanceAccountingRoles
            ? "Finance & Accounting"
            : isHrPeopleRoles
              ? "HR & People Operations"
              : isCustomerServiceRoles
                ? "Customer Service"
                : "Software & Development";
    const isDedicatedExpertisePage =
      isAdminRoles ||
      isSalesGrowthRoles ||
      isMarketingCreativeRoles ||
      isFinanceAccountingRoles ||
      isHrPeopleRoles ||
      isCustomerServiceRoles ||
      isSoftwareDevelopmentRoles;
    return {
      meta: [
        {
          title: industry
            ? `${industry.name} Support — Quorisx`
            : isWebsiteDevelopment
              ? "Website Development & Search Visibility — Quorisx"
              : isDigitalMarketingSeo
                ? "Digital Marketing & SEO — Quorisx"
                : isPaidAdsLeadGeneration
                  ? "Paid Ads & Lead Generation — Quorisx"
                  : isCustomerSupport
                    ? "24/7 Customer Support — Quorisx"
                    : isAiAutomation
                      ? "AI & Automation — Quorisx"
                      : isEngagementModels
                        ? "Engagement Models — Quorisx"
                        : isQualitySecurity
                          ? "Quality & Security — Quorisx"
                          : isRecruitmentMethodology
                            ? "Our Recruitment Methodology — Quorisx"
                            : waysToWorkPage
                              ? `${waysToWorkPage.title} — How to Work With Quorisx`
                              : isDedicatedExpertisePage
                                ? `${expertiseTitle} Roles — Quorisx`
                                : page
                                  ? `${page.label} — Quorisx`
                                  : "Page Not Found — Quorisx",
        },
        {
          name: "description",
          content: industry
            ? industry.intro
            : isWebsiteDevelopment
              ? "Build a fast, mobile-friendly website with SEO foundations, local search support, integrations, and ongoing improvements."
              : isDigitalMarketingSeo
                ? "SEO, local search, paid campaigns, and useful content to help customers discover your business and take the next step."
                : isPaidAdsLeadGeneration
                  ? "Reach the right audience, turn interest into meaningful enquiries, and build paid advertising campaigns around your business goals."
                  : isCustomerSupport
                    ? "Round-the-clock customer support across agreed channels, with clear workflows, escalation paths, and service visibility."
                    : isAiAutomation
                      ? "Practical AI and automation to streamline customer support, lead follow-up, admin tasks, and business workflows."
                      : isEngagementModels
                        ? "Explore dedicated team, managed function, and project-based engagement models with Quorisx."
                        : isQualitySecurity
                          ? "Learn how Quorisx approaches quality assurance, clear ownership, confidentiality, client access, and delivery oversight."
                          : isRecruitmentMethodology
                            ? "We follow a structured, skills-based recruitment process to connect businesses with qualified professionals who align with their operational needs, company culture, and long-term goals."
                            : waysToWorkPage
                              ? `${waysToWorkPage.title}: ${waysToWorkPage.summary}`
                              : isDedicatedExpertisePage
                                ? `Explore ${expertiseTitle} roles from Quorisx, with dedicated professionals matched to your team's requirements.`
                                : page
                                  ? `${page.label}: dedicated information from Quorisx is coming soon.`
                                  : "The requested page could not be found.",
        },
      ],
    };
  },
  component: ComingSoonPage,
});

function ComingSoonPage() {
  const { category, slug } = Route.useParams();
  const page = comingSoonPage(category, slug);
  const industry = category === "industries" ? getIndustryPage(slug) : undefined;
  const waysToWorkPage = category === "ways-to-work" ? getWaysToWorkPage(slug) : undefined;

  if (waysToWorkPage) {
    return <WaysToWorkPage slug={slug} />;
  }

  if (category === "solutions" && slug === "website-development") {
    return <WebsiteDevelopmentPage />;
  }

  if (category === "solutions" && slug === "digital-marketing-seo") {
    return <DigitalMarketingSeoPage />;
  }

  if (category === "solutions" && slug === "paid-ads-lead-generation") {
    return <PaidAdsLeadGenerationPage />;
  }

  if (category === "solutions" && slug === "customer-support") {
    return <CustomerSupportPage />;
  }

  if (category === "solutions" && slug === "ai-automation") {
    return <AiAutomationPage />;
  }

  if (category === "why-quorisx" && slug === "engagement-models") {
    return <EngagementModelsPage />;
  }

  if (category === "why-quorisx" && slug === "quality-security") {
    return <QualitySecurityPage />;
  }

  if (category === "why-quorisx" && slug === "our-approach") {
    return <RecruitmentMethodologyPage />;
  }

  if (category === "industries") {
    if (!industry) {
      throw notFound();
    }

    return <IndustryDetailPage industry={industry} />;
  }

  if (category === "expertise" && slug === "admin-executive") {
    return <AdminExecutivePage />;
  }

  if (category === "expertise" && (slug === "sales-growth" || slug === "sales-development")) {
    return <SalesGrowthPage />;
  }

  if (category === "expertise" && slug === "marketing-creative") {
    return <MarketingCreativePage />;
  }

  if (category === "expertise" && slug === "finance-accounting") {
    return <FinanceAccountingPage />;
  }

  if (category === "expertise" && slug === "hr-people-operations") {
    return <HrPeopleOperationsPage />;
  }

  if (category === "expertise" && slug === "customer-service") {
    return <CustomerServicePage />;
  }

  if (category === "expertise" && slug === "software-dev") {
    return <SoftwareDevelopmentPage />;
  }

  if (!page) {
    throw notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-4rem)] items-center bg-ink px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="eyebrow mb-5">{page.group}</p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-ink-foreground sm:text-5xl md:text-7xl">
            {page.label}
          </h1>
          <p className="mt-6 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Coming Soon
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            We’re preparing this page. In the meantime, talk with our team about what your business
            needs.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Talk to Our Team
            </a>
            <a
              href="/"
              className="rounded-md border border-ink-border px-5 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/5"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
