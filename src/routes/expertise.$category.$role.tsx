import { createFileRoute, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { ExpertiseScrollMotion } from "@/components/expertise/expertise-scroll-motion";
import {
  expertiseFunctions,
  financeAccountingFunction,
  toRoleSlug,
} from "@/components/expertise/data";
import { RoleDetailExperience } from "@/components/expertise/role-detail-experience";
import { SoftwareRoleDetailPage } from "@/components/expertise/software-role-detail-page";
import { softwareDevelopmentFunction } from "@/components/expertise/data/software-development";
import { marketingCreativeFunction } from "@/components/expertise/data/marketing-creative";
import { LiveChatSupportAgentPage } from "@/components/expertise/pages/live-chat-support-agent";
import { MarketingRolePrototypePage } from "@/components/expertise/marketing-role-prototype-page";
import {
  getMarketingRolePrototype,
  isMarketingPrototypeRole,
} from "@/components/expertise/marketing-role-prototype-content";
import { getSoftwareRoleContent } from "@/components/expertise/software-role-content";
import { AdministrativeAssistantPage } from "@/components/expertise/pages/administrative-assistant";
import { CorporateTravelCoordinatorPage } from "@/components/expertise/pages/corporate-travel-coordinator";
import { DataEntryAssistantPage } from "@/components/expertise/pages/data-entry-assistant";
import { EventCoordinatorPage } from "@/components/expertise/pages/event-coordinator";
import { ExecutiveAssistantPage } from "@/components/expertise/pages/executive-assistant";
import { GeneralVirtualAssistantPage } from "@/components/expertise/pages/general-virtual-assistant";
import { ItSdrPage } from "@/components/expertise/pages/it-sdr";
import { OutboundCallingAgentPage } from "@/components/expertise/pages/outbound-calling-agent";
import { PersonalAssistantPage } from "@/components/expertise/pages/personal-assistant";
import { ProjectManagerPage } from "@/components/expertise/pages/project-manager";
import { SalesDevelopmentRepresentativePage } from "@/components/expertise/pages/sales-development-representative";

export const Route = createFileRoute("/expertise/$category/$role")({
  head: ({ params }) => {
    const role = findRole(params.category, params.role);
    const marketingPrototype =
      role?.group.href === marketingCreativeFunction.href
        ? getMarketingRolePrototype(role.role.title)
        : undefined;
    const roleDescription = role
      ? ((role.group.href === softwareDevelopmentFunction.href
          ? getSoftwareRoleContent(role.role.title)?.value
          : marketingPrototype?.metaDescription) ??
        `${role.role.description} Learn more about this ${role.group.label} role at Quorisx.`)
      : "The requested role could not be found.";

    return {
      meta: [
        {
          title: role
            ? (marketingPrototype?.metaTitle ??
              `${role.role.title} — ${role.group.label} | Quorisx`)
            : "Role Not Found — Quorisx",
        },
        {
          name: "description",
          content: roleDescription,
        },
        {
          property: "og:title",
          content: role
            ? (marketingPrototype?.metaTitle ?? `${role.role.title} — Quorisx`)
            : "Role Not Found — Quorisx",
        },
        {
          property: "og:description",
          content: roleDescription,
        },
      ],
      links: role
        ? [
            {
              rel: "canonical",
              href: `https://quorisx.com/expertise/${params.category}/${params.role}`,
            },
          ]
        : [],
    };
  },
  component: RoleDetailPage,
});

function findRole(category: string, roleSlug: string) {
  // Finance detail URLs remain directly available without adding the category to advertised navigation.
  const detailGroups = [...expertiseFunctions, financeAccountingFunction];
  const group = detailGroups.find(
    (functionGroup) => functionGroup.href === `/expertise/${category}`,
  );
  const role = group?.roles.find((item) => toRoleSlug(item.title) === roleSlug);

  return group && role ? { group, role } : undefined;
}

function RoleDetailPage() {
  const { category, role: roleSlug } = Route.useParams();
  const result = findRole(category, roleSlug);

  if (!result) {
    throw notFound();
  }

  const { group, role } = result;

  if (group.href === softwareDevelopmentFunction.href) {
    return withExpertiseScrollMotion(category, roleSlug, <SoftwareRoleDetailPage role={role} />);
  }

  if (role.title === "Live Chat Support Agent") {
    return withExpertiseScrollMotion(category, roleSlug, <LiveChatSupportAgentPage />);
  }

  if (group.href === marketingCreativeFunction.href && isMarketingPrototypeRole(role.title)) {
    return withExpertiseScrollMotion(
      category,
      roleSlug,
      <MarketingRolePrototypePage role={role.title} />,
    );
  }

  if (role.title === "General Virtual Assistant") {
    return withExpertiseScrollMotion(category, roleSlug, <GeneralVirtualAssistantPage />);
  }

  if (role.title === "Administrative Assistant") {
    return withExpertiseScrollMotion(category, roleSlug, <AdministrativeAssistantPage />);
  }

  if (role.title === "Personal Assistant") {
    return withExpertiseScrollMotion(category, roleSlug, <PersonalAssistantPage />);
  }

  if (role.title === "Executive Assistant") {
    return withExpertiseScrollMotion(category, roleSlug, <ExecutiveAssistantPage />);
  }

  if (role.title === "Corporate Travel Coordinator") {
    return withExpertiseScrollMotion(category, roleSlug, <CorporateTravelCoordinatorPage />);
  }

  if (role.title === "Data Entry Assistant") {
    return withExpertiseScrollMotion(category, roleSlug, <DataEntryAssistantPage />);
  }

  if (role.title === "Project Manager") {
    return withExpertiseScrollMotion(category, roleSlug, <ProjectManagerPage />);
  }

  if (role.title === "Event Coordinator") {
    return withExpertiseScrollMotion(category, roleSlug, <EventCoordinatorPage />);
  }

  if (role.title === "Sales Development Representative") {
    return withExpertiseScrollMotion(category, roleSlug, <SalesDevelopmentRepresentativePage />);
  }

  if (role.title === "Outbound Calling Agent") {
    return withExpertiseScrollMotion(category, roleSlug, <OutboundCallingAgentPage />);
  }

  if (role.title === "IT SDR") {
    return withExpertiseScrollMotion(category, roleSlug, <ItSdrPage />);
  }

  return withExpertiseScrollMotion(
    category,
    roleSlug,
    <RoleDetailExperience group={group} role={role} />,
  );
}

function withExpertiseScrollMotion(category: string, roleSlug: string, page: ReactNode) {
  return <ExpertiseScrollMotion pageKey={`${category}/${roleSlug}`}>{page}</ExpertiseScrollMotion>;
}
