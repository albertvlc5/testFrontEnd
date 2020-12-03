import { AtWorkModule, SalaryAdvanceModule } from './src/modules';

export default {
  ENVIRONMENT: 'staging',
  ...AtWorkModule.environment.staging,
  ...SalaryAdvanceModule?.environment.staging,
};
