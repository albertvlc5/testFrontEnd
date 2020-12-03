import { CoreAPI } from '@creditas/mobile-core-api';
import { Icon } from 'mobile-styles';
import React from 'react';
import { withNavigation } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

import { ErrorBoundary } from './src/components/ErrorBoundary';
import ConfigEnvironment from './src/ConfigEnvironment';
import CoreService from './src/CoreService';
import { AtWorkModule, SalaryAdvanceModule } from './src/modules';
import RootNavigator from './src/navigation';
import { Context } from './src/store/context';
import pt from './src/utils/locales/pt.json';

interface TContainer {
  navigation: NavigationStackProp<{}>;
}

export const Container = ({ navigation }: TContainer) => {
  const navigationParams = navigation?.state.params
    ? navigation?.state.params
    : {};
  return (
    <Context.Provider value={{ params: navigationParams }}>
      <ErrorBoundary>
        <RootNavigator />
      </ErrorBoundary>
    </Context.Provider>
  );
};

export const initModule = async (coreApi: CoreAPI) => {
  CoreService.setCoreApi(coreApi);
  ConfigEnvironment.setConfigEnvironment(coreApi);

  coreApi.v1.broadcaster.listen((/*message*/) => {
    /* Add here any receive message logic */
  });

  await coreApi.v1.remoteConfig.setDefaults({
    /*
     * Add here the default values stored on the
     * Firebase like shown in the example bellow
     * segundaVia: 'false',
     */
  });
  await CoreService.setRemoteConfigValues();

  await coreApi.v1.i18n.initI18N({
    pt: {
      translation: {
        ...pt,
        ATWORK: AtWorkModule.i18n.pt,
        salaryAdvance: SalaryAdvanceModule.i18n.pt,
      },
    },
    en: {
      translation: {
        salaryAdvance: SalaryAdvanceModule.i18n.en,
      },
    },
  });
};

/* Don't forget to provide the Module Name for the App here */
export const moduleKey = 'AtWork_ModuleName';

//export const moduleIcon = Icons;
export const moduleIcon = ({ focused }: { focused: boolean }) => (
  <Icon name="store" color={focused ? 'primary3' : 'neutral5'} />
);

export default withNavigation(Container);
