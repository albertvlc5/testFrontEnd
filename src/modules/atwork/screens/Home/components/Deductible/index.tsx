import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import CardProductManagement from 'mobile-styles/src/components/CardProductManagement';
import React from 'react';

import { Config } from '../../../../../../ConfigEnvironment';
import { i18N } from '../../../../../../CoreService';
import { getPreviousMonthNameByLocale } from '../../../../../../helpers/date';
import { formatNumberByLocale } from '../../../../../../helpers/number';
import componentEvents from '../../analytics/events';
import { IDeductibleTransformed } from '../../interfaces/deductible.interface';
import ItrackingEvent from '../../interfaces/trackingEvent.interface';

interface Props {
  deductible: IDeductibleTransformed;
  onNavigation: (route: V1NavigationRoutes, params: any) => void;
  onTrackingEvent: (trackingEvent: ItrackingEvent) => void;
}

export const Deductible = ({
  deductible,
  onNavigation,
  onTrackingEvent,
}: Props) => {
  return (
    <CardProductManagement
      variant="primary"
      title={i18N.t('ATWORK.HOME.DEDUCTIBLE.TITLE')}
      textLimit={`${i18N.t(
        'ATWORK.HOME.DEDUCTIBLE.TEXT',
      )} ${getPreviousMonthNameByLocale(deductible.dueDate)}`}
      valueLimit={formatNumberByLocale(deductible.totalDiscounts)}
      isFullWidth={true}
      onPress={() => {
        onNavigation(V1NavigationRoutes.WEBVIEW, {
          url: Config.ATWORK.PAYROLL_DASHBOARD_URL,
        });
        onTrackingEvent(componentEvents.deductible);
      }}
    />
  );
};
