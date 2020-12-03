import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import { HeaderGhost } from 'mobile-styles';
import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';

import { ErrorFeedback } from '../../../../components/ErrorFeedback';
import { Config } from '../../../../ConfigEnvironment';
import CoreService, { i18N } from '../../../../CoreService';
import { setTrackingToComponent } from './analytics/actions';
import componentEvents from './analytics/events';
import { HomeComponent } from './components/HomeComponent';
import { HomeSkeleton } from './components/HomeSkeleton';
import { useHomeRequests } from './home-requests.hook';
import { Container } from './styles';

interface Props {
  navigation: NavigationStackProp<{}>;
}

export const Home = ({ navigation }: Props) => {
  const {
    retrieveData,
    isLoading,
    hasError,
    perks,
    deductible,
  } = useHomeRequests();

  const { navigation: navigationCore } = CoreService.getInstanceV1();

  return (
    <Container>
      <HeaderGhost
        variantButton="transparent"
        headerTitle={i18N.t('ATWORK.HOME.HEADER.TITLE')}
        variantFont="mockTokenHelveticaParagraphTextSuportBold"
        onGoBack={navigationCore.goBack}
        actions={[
          {
            iconName: 'info',
            onPress: () => {
              navigationCore.navigate(V1NavigationRoutes.WEBVIEW, {
                url: Config.ATWORK.ATWORK_URL,
              });
              setTrackingToComponent(componentEvents.header.info);
            },
          },
        ]}
      />
      {isLoading ? (
        <HomeSkeleton />
      ) : hasError ? (
        <ErrorFeedback
          onTryAgainPress={retrieveData}
          testID="error-feedback-component-id"
        />
      ) : (
        perks && (
          <HomeComponent
            perks={perks}
            deductible={deductible}
            navigation={navigation}
          />
        )
      )}
    </Container>
  );
};
