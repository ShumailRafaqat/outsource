import { adminExecutiveFunction } from "./admin-executive";
import { customerServiceFunction } from "./customer-service";
import { financeAccountingFunction } from "./finance-accounting";
import { hrPeopleOperationsFunction } from "./hr-people-operations";
import { marketingCreativeFunction } from "./marketing-creative";
import { salesGrowthFunction } from "./sales-growth";
import { softwareDevelopmentFunction } from "./software-development";

export { adminExecutiveFunction } from "./admin-executive";
export { customerServiceFunction } from "./customer-service";
export { financeAccountingFunction } from "./finance-accounting";
export { hrPeopleOperationsFunction } from "./hr-people-operations";
export { marketingCreativeFunction } from "./marketing-creative";
export { salesGrowthFunction } from "./sales-growth";
export { softwareDevelopmentFunction } from "./software-development";
export { adminExecutiveFaqs } from "./admin-executive";
export { customerServiceFaqs } from "./customer-service";
export { financeAccountingFaqs } from "./finance-accounting";
export { hrPeopleFaqs } from "./hr-people-operations";
export { marketingCreativeFaqs } from "./marketing-creative";
export { salesGrowthFaqs } from "./sales-growth";
export { softwareDevelopmentFaqs } from "./software-development";
export type { FunctionGroup, Role } from "./types";
export { toRoleSlug } from "./to-role-slug";

export const expertiseFunctions = [
  adminExecutiveFunction,
  salesGrowthFunction,
  marketingCreativeFunction,
  financeAccountingFunction,
  hrPeopleOperationsFunction,
  customerServiceFunction,
  softwareDevelopmentFunction,
];
