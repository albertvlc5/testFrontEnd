import { AtWorkModule, SalaryAdvanceModule } from './src/modules';

export default {
  ENVIRONMENT: 'production',
  ...AtWorkModule.environment.production,
  ...SalaryAdvanceModule?.environment.production,
};
