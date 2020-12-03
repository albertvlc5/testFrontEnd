import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import React from 'react';

import { fireEvent, RenderAPI } from '@testing-library/react-native';

import { Deductible } from '../';
import { mountWithAtworkHost } from '../../../../../../../__tests__/helpers';
import { Config } from '../../../../../../../ConfigEnvironment';
import { getDeductibleTransformedDataMock } from '../../../__tests__/helpers/data/deductible';
import componentEvents from '../../../analytics/events';

describe('Deductible', () => {
  let tree: RenderAPI;
  const onNavigation = jest.fn();
  const onTrackingEvent = jest.fn();
  const deductibleTransformedDataMock = getDeductibleTransformedDataMock();

  beforeEach(() => {
    jest.clearAllMocks();
    tree = mountWithAtworkHost(
      <Deductible
        deductible={deductibleTransformedDataMock}
        onNavigation={onNavigation}
        onTrackingEvent={onTrackingEvent}
      />,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeDefined();
  });

  it('should call onNavigation with payroll dashboard url when onPress is fired', () => {
    const deductibleComponent = tree.getByText('ATWORK.HOME.DEDUCTIBLE.TITLE');

    fireEvent(deductibleComponent, 'onPress');
    expect(onNavigation).toHaveBeenCalledTimes(1);
    expect(onNavigation).toHaveBeenCalledWith(V1NavigationRoutes.WEBVIEW, {
      url: Config.ATWORK.PAYROLL_DASHBOARD_URL,
    });
  });

  it('should call onTrackingEvent with deductible event when onPress is fired', () => {
    const deductibleComponent = tree.getByText('ATWORK.HOME.DEDUCTIBLE.TITLE');

    fireEvent(deductibleComponent, 'onPress');
    expect(onTrackingEvent).toHaveBeenCalledTimes(1);
    expect(onTrackingEvent).toHaveBeenCalledWith(componentEvents.deductible);
  });
});
