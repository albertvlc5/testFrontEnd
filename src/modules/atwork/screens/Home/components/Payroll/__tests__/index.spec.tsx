import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import React from 'react';

import { fireEvent, RenderAPI } from '@testing-library/react-native';

import { Payroll } from '../';
import { mountWithAtworkHost } from '../../../../../../../__tests__/helpers';
import { Config } from '../../../../../../../ConfigEnvironment';
import componentEvents from '../../../analytics/events';

describe('Payroll', () => {
  let tree: RenderAPI;
  const onNavigation = jest.fn();
  const onTrackingEvent = jest.fn();
  const mockData = {
    amountDeductibleConsignado: 7000,
    amountDeductibleStore: 1000,
    totalAmountAvailable: 20000,
    currency: 'R$',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    tree = mountWithAtworkHost(
      <Payroll
        onNavigation={onNavigation}
        onTrackingEvent={onTrackingEvent}
        payroll={mockData}
      />,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeDefined();
  });

  it('should call onNavigation with private payroll url when onPress is fired', () => {
    const payrollComponent = tree.getByText('ATWORK.HOME.PAYROLL.TITLE');
    fireEvent(payrollComponent, 'onPress');
    expect(onNavigation).toHaveBeenCalledTimes(1);
    expect(onNavigation).toHaveBeenCalledWith(V1NavigationRoutes.WEBVIEW, {
      url: Config.ATWORK.PAYROLL_PRIVATE_URL,
    });
  });

  it('should call onTrackingEvent with goToConsignado event when onPress is fired', () => {
    const payrollComponent = tree.getByText('ATWORK.HOME.PAYROLL.TITLE');

    fireEvent(payrollComponent, 'onPress');
    expect(onTrackingEvent).toHaveBeenCalledTimes(1);
    expect(onTrackingEvent).toHaveBeenCalledWith(
      componentEvents.payroll.goToConsignado,
    );
  });
});
