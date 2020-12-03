import environment from './environment';
import i18n from './i18n';
import { SalaryAdvanceRoutes, SalaryAdvanceStack } from './routes';

export const SalaryAdvanceModule = {
  navigationStack: SalaryAdvanceStack,
  routes: SalaryAdvanceRoutes,
  i18n,
  environment,
};
