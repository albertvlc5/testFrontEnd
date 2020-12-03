import { CoreAPI, V1CoreAPI } from '@creditas/mobile-core-api';

let _coreApi: CoreAPI;
let _remoteConfigValues: any;

function setCoreApi(coreApi: CoreAPI) {
  _coreApi = coreApi;
}

function getInstanceV1(): V1CoreAPI {
  return _coreApi.v1;
}

async function setRemoteConfigValues() {
  _remoteConfigValues = {
    /*
     * Provide here the access to the objects that the application retrieves
     * from Firebase as shown in the example bellow:
     * segundaVia: await getInstanceV1().remoteConfig.getBoolean('segundaVia'),
     */
  };
}

function getRemoteConfigValues() {
  return _remoteConfigValues;
}

export const i18N = {
  init: (translations: any) => getInstanceV1().i18n.initI18N(translations),
  t: (key: string, args = {}) => getInstanceV1().i18n.getTranslation(key, args),
  language: (language: string) => getInstanceV1().i18n.changeLanguage(language),
  currentLanguage: () => 'pt-br',
};

export default {
  setCoreApi,
  getInstanceV1,
  setRemoteConfigValues,
  getRemoteConfigValues,
};
