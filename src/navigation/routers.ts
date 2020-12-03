import { AtWorkModule } from '../modules';
import { SalaryAdvanceModule } from '../modules/salary-advance';

export const ROUTES = {
  ...AtWorkModule.routes,
  ...SalaryAdvanceModule.routes,
};

export const hasBottomBarRoutes = [ROUTES.HOME];
