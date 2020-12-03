import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import { Grid } from 'mobile-styles';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationStackProp } from 'react-navigation-stack';

import CoreService from '../../../../../../CoreService';
import { Context } from '../../../../../../store/context';
import { setTrackingToComponent } from '../../analytics/actions';
import { IDeductibleTransformed } from '../../interfaces/deductible.interface';
import { IPerkTransformed } from '../../interfaces/perk.interface';
import ItrackingEvent from '../../interfaces/trackingEvent.interface';
import { Deductible } from '../Deductible';
import { Payroll } from '../Payroll';
import { PayrollLinks } from '../PayrollLinks';
import { SalaryAdvance } from '../SalaryAdvance';
import { Summary } from '../Summary';

interface Props {
  perks: IPerkTransformed;
  deductible: IDeductibleTransformed | undefined;
  navigation: NavigationStackProp<{}>;
}

export const HomeComponent = ({ perks, deductible }: Props) => {
  const { params: navigationParams } = useContext(Context);
  const { navigation: navigationCore } = CoreService.getInstanceV1();
  const handleNavigation = (route: V1NavigationRoutes, params: any) =>
    navigationCore.navigate(route, params);
  const handleTrackingEvent = (trackingEvent: ItrackingEvent) =>
    setTrackingToComponent(trackingEvent, navigationParams.payrollId);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID="home-component-test-id">
      <Grid>
        <Grid pl={'spacing32px'} pr={'spacing32px'}>
          <Grid pt={'spacing48px'} pb={'spacing32px'}>
            <Summary totalAmount={perks.totalAmount} />
          </Grid>
          <Grid pb={'spacing16px'}>
            <SalaryAdvance
              onNavigation={handleNavigation}
              onTrackingEvent={handleTrackingEvent}
              salaryAdvance={perks.salaryAdvancement}
            />
          </Grid>
          <Grid pb={'spacing24px'}>
            <Payroll
              onNavigation={handleNavigation}
              onTrackingEvent={handleTrackingEvent}
              payroll={perks.payroll}
            />
            <PayrollLinks
              onNavigation={handleNavigation}
              onTrackingEvent={handleTrackingEvent}
            />
          </Grid>

          {deductible && (
            <Grid pb={'spacing24px'}>
              <Deductible
                deductible={deductible}
                onNavigation={handleNavigation}
                onTrackingEvent={handleTrackingEvent}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </ScrollView>
  );
};
