import configHomolog from '../config.homolog';
import configProd from '../config.production';
import configStaging from '../config.staging';
import { CoreAPI } from '@creditas/mobile-core-api';

const ENVIRONMENT = {
  homolog: 'homolog',
  production: 'production',
  staging: 'staging',
};

export let Config = configStaging; // Config default

function setConfigEnvironment(coreAPI: CoreAPI) {
  const environment = coreAPI.v1.environment.getName();

  if (environment === ENVIRONMENT.homolog) {
    Config = configHomolog;
  }

  if (environment === ENVIRONMENT.production) {
    Config = configProd;
  }

  if (environment === ENVIRONMENT.staging) {
    Config = configStaging;
  }
}

export default { setConfigEnvironment };
