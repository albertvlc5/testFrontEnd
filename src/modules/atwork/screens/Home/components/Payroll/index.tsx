import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import CardBalance from 'mobile-styles/src/components/CardBalance';
import React from 'react';

import { Config } from '../../../../../../ConfigEnvironment';
import { i18N } from '../../../../../../CoreService';
import { formatNumberByLocale } from '../../../../../../helpers/number';
import { componentEvents } from '../../analytics/events';
import { IPerkPayroll } from '../../interfaces/perk.interface';
import ItrackingEvent from '../../interfaces/trackingEvent.interface';

interface Props {
  onNavigation: (route: V1NavigationRoutes, params: any) => void;
  onTrackingEvent: (trackingEvent: ItrackingEvent) => void;
  payroll: IPerkPayroll;
}
export const Payroll = ({ onNavigation, onTrackingEvent, payroll }: Props) => {
  return (
    <CardBalance
      title={i18N.t('ATWORK.HOME.PAYROLL.TITLE')}
      onPress={() => {
        onNavigation(V1NavigationRoutes.WEBVIEW, {
          url: Config.ATWORK.PAYROLL_PRIVATE_URL,
        });
        onTrackingEvent(componentEvents.payroll.goToConsignado);
      }}
      value={`${payroll.currency} ${formatNumberByLocale(
        payroll.totalAmountAvailable,
      )}`}
      valueSubtitle={i18N.t('ATWORK.HOME.PAYROLL.RIGHT_TEXT')}
    />
  );
};
