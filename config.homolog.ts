import { AtWorkModule, SalaryAdvanceModule } from './src/modules';

export default {
  ENVIRONMENT: 'homolog',
  ...AtWorkModule.environment.homolog,
  ...SalaryAdvanceModule?.environment.homolog,
};
