import React, { useState } from 'react';
import { HeaderGhost } from 'mobile-styles';
import { WebView } from 'react-native-webview';
import { NavigationStackProp } from 'react-navigation-stack';

import { Config } from '../../../../ConfigEnvironment';
import CoreService from '../../../../CoreService';

interface Props {
  navigation: NavigationStackProp;
}

const Webview = ({ navigation }: Props) => {
  const [token, setToken] = useState('');
  const { session } = CoreService.getInstanceV1();
  session.getUserSession().then((user) => {
    setToken(user?.token.accessToken || '');
  });
  const addTokenAndStorageAppKey = () => `
  window.localStorage.setItem('fromNativeApp', true);
      window.localStorage.setItem('accessToken', 'Bearer ${token}');`;

  return (
    <>
      <HeaderGhost
        variantButton="transparent"
        variantFont="mockTokenHelveticaLabelRegular"
        onGoBack={() => navigation.goBack()}
      />
      <WebView
        source={{ uri: Config.ATWORK.SALARY_ADVANCE_URL }}
        injectedJavaScriptBeforeContentLoaded={addTokenAndStorageAppKey()}
      />
    </>
  );
};

export { Webview };