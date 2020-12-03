import { Loading } from 'mobile-styles';
import React, { useEffect } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';

import CoreService from '../../../../CoreService';
import { ClientFlowResponse } from '../../services/interfaces';
import { getClientFlow } from '../../services/salary-advance.service';

interface Props {
  navigation: NavigationStackProp;
}

const SpinnerInterceptor = ({ navigation }: Props) => {
  const { session } = CoreService.getInstanceV1();
  const handleClientFlow = ({ bodyJson }: ClientFlowResponse) => {
    console.log(bodyJson);
    // TODO: Insert validation to continue to Webview or Native Experience
  };
  useEffect(() => {
    session.getUserSession().then((user) => {
      if (!user) {
        navigation.navigate(''); // TODO: Find a route to go back when user doesnt exists
      }
      getClientFlow(user?.profile.authId || '').then(handleClientFlow);
    });
  }, [session, navigation]);
  return <Loading variant="primary3" size={50} />;
};

export { SpinnerInterceptor };
