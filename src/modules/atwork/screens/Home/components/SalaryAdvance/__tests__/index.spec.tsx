import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import React from 'react';

import { fireEvent, RenderAPI } from '@testing-library/react-native';

import { SalaryAdvance } from '../';
import { mountWithAtworkHost } from '../../../../../../../__tests__/helpers';
import { Config } from '../../../../../../../ConfigEnvironment';
import componentEvents from '../../../analytics/events';

describe('Salary Advance', () => {
  let tree: RenderAPI;
  const onNavigation = jest.fn();
  const onTrackingEvent = jest.fn();
  const mockData = {
    amountDeductible: 1,
    totalAmountAvailable: 10,
    currency: 'R$',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    tree = mountWithAtworkHost(
      <SalaryAdvance
        salaryAdvance={mockData}
        onNavigation={onNavigation}
        onTrackingEvent={onTrackingEvent}
      />,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeDefined();
  });

  it('should call onNavigation with salary advance url when onPress is fired', () => {
    const salaryAdvanceComponent = tree.getByText(
      'ATWORK.HOME.SALARY_ADVANCE.TITLE',
    );

    fireEvent(salaryAdvanceComponent, 'onPress');
    expect(onNavigation).toHaveBeenCalledTimes(1);
    expect(onNavigation).toHaveBeenCalledWith(V1NavigationRoutes.WEBVIEW, {
      url: Config.ATWORK.SALARY_ADVANCE_URL,
    });
  });

  it('should call onTrackingEvent with salary advance events when onPress is fired', () => {
    const salaryAdvanceComponent = tree.getByText(
      'ATWORK.HOME.SALARY_ADVANCE.TITLE',
    );

    fireEvent(salaryAdvanceComponent, 'onPress');
    expect(onTrackingEvent).toHaveBeenCalledTimes(1);
    expect(onTrackingEvent).toHaveBeenCalledWith(componentEvents.salaryAdvance);
  });
});
