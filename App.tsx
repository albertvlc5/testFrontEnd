import { CoreContext } from '@creditas/mobile-core-api';
import { createCoreAPIMock, Login } from 'mobile-core-api-mock';
import { ThemeContainer } from 'mobile-styles';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

import { Container, initModule } from './module';

/*
 * Don't forget to set the appPrefix and environment to be used by the app
 * Example -> environment: 'homolog' | 'production' | 'staging'
 */
const coreAPIMock = createCoreAPIMock({
  appPrefix: 'Atwork',
  environment: 'homolog',
});
initModule(coreAPIMock);

/* Don't forget to set this class bellow with the appropriate app Name: Example -> {appName}App */
const MiniApp = ({ navigation }: { navigation: NavigationStackProp }) => {
  return (
    <CoreContext.Provider value={coreAPIMock}>
      <ThemeContainer>
        <Container navigation={navigation} />
      </ThemeContainer>
    </CoreContext.Provider>
  );
};

/* Don't forget to define the initialRouterName to be redirected on Login */
const LoginScreen = ({ navigation }: { navigation: NavigationStackProp }) => (
  <Login
    coreApi={coreAPIMock.v1}
    navigation={navigation}
    initialRouteName="MiniApp"
  />
);

const Navigator = createSwitchNavigator({
  LoginScreen,
  MiniApp,
});

export default createAppContainer(Navigator);
