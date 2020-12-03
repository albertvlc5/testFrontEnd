import { CardBalanceBars } from 'mobile-styles';
import React from 'react';
import { V1NavigationRoutes } from '@creditas/mobile-core-api';

import { Config } from '../../../../../../ConfigEnvironment';
import { i18N } from '../../../../../../CoreService';
import { formatNumberByLocale } from '../../../../../../helpers/number';
import { componentEvents } from '../../analytics/events';
import { IPerkSalaryAdvancement } from '../../interfaces/perk.interface';
import ItrackingEvent from '../../interfaces/trackingEvent.interface';

interface Props {
  salaryAdvance: IPerkSalaryAdvancement;
  onNavigation: (route: V1NavigationRoutes, params: any) => void;
  onTrackingEvent: (trackingEvent: ItrackingEvent) => void;
}

export const SalaryAdvance = ({
  onNavigation,
  onTrackingEvent,
  salaryAdvance,
}: Props) => {
  return (
    <CardBalanceBars
      title={i18N.t('ATWORK.HOME.SALARY_ADVANCE.TITLE')}
      onPress={() => {
        onNavigation(V1NavigationRoutes.WEBVIEW, {
          url: Config.ATWORK.SALARY_ADVANCE_URL,
        });
        onTrackingEvent(componentEvents.salaryAdvance);
      }}
      progressPercentage={[
        (salaryAdvance.amountDeductible * 100) /
          (salaryAdvance.totalAmountAvailable + salaryAdvance.amountDeductible),
      ]}
      leftText={{
        value: `${salaryAdvance.currency} ${formatNumberByLocale(
          salaryAdvance.amountDeductible,
        )}`,
        bottomDescription: i18N.t('ATWORK.HOME.SALARY_ADVANCE.LEFT_TEXT'),
      }}
      rightText={{
        value: `${salaryAdvance.currency} ${formatNumberByLocale(
          salaryAdvance.totalAmountAvailable,
        )}`,
        bottomDescription: i18N.t('ATWORK.HOME.SALARY_ADVANCE.RIGHT_TEXT'),
      }}
    />
  );
};
