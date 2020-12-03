import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import CardLinks from 'mobile-styles/src/components/CardLinks';
import React from 'react';

import { Config } from '../../../../../../ConfigEnvironment';
import { i18N } from '../../../../../../CoreService';
import { componentEvents } from '../../analytics/events';
import ItrackingEvent from '../../interfaces/trackingEvent.interface';

interface Props {
  onNavigation: (route: V1NavigationRoutes, params: any) => void;
  onTrackingEvent: (trackingEvent: ItrackingEvent) => void;
}
export const PayrollLinks = ({ onNavigation, onTrackingEvent }: Props) => {
  return (
    <CardLinks
      links={[
        {
          title: i18N.t('ATWORK.HOME.PAYROLL_LINKS.STORE_LINK'),
          onPress: () => {
            onNavigation(V1NavigationRoutes.WEBVIEW, {
              url: Config.ATWORK.STORE_URL,
            });
            onTrackingEvent(componentEvents.payroll.payrollStoreLink);
          },
        },
        {
          title: i18N.t('ATWORK.HOME.PAYROLL_LINKS.LOAN_LINK'),
          onPress: () => {
            onNavigation(V1NavigationRoutes.WEBVIEW, {
              url: Config.ATWORK.PAYROLL_PRIVATE_URL,
            });
            onTrackingEvent(componentEvents.payroll.payrollConsignadoLink);
          },
        },
      ]}
    />
  );
};
