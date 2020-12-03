import { V1NavigationRoutes } from '@creditas/mobile-core-api';
import React from 'react';

import { fireEvent, RenderAPI } from '@testing-library/react-native';

import { PayrollLinks } from '../';
import { mountWithAtworkHost } from '../../../../../../../__tests__/helpers';
import { Config } from '../../../../../../../ConfigEnvironment';
import componentEvents from '../../../analytics/events';

describe('Payroll Links', () => {
  let tree: RenderAPI;
  const onNavigation = jest.fn();
  const onTrackingEvent = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    tree = mountWithAtworkHost(
      <PayrollLinks
        onNavigation={onNavigation}
        onTrackingEvent={onTrackingEvent}
      />,
    );
  });

  it('renders correctly', () => {
    expect(tree).toBeDefined();
  });

  describe('store link', () => {
    it('should call onNavigation with store url when store link is pressed', () => {
      const payrollLinks = tree.getByText(
        'ATWORK.HOME.PAYROLL_LINKS.STORE_LINK',
      );

      fireEvent(payrollLinks, 'onPress');
      expect(onNavigation).toHaveBeenCalledTimes(1);
      expect(onNavigation).toHaveBeenCalledWith(V1NavigationRoutes.WEBVIEW, {
        url: Config.ATWORK.STORE_URL,
      });
    });

    it('should call onTrackingEvent with payrollStoreLink event when onPress is fired', () => {
      const payrollLinks = tree.getByText(
        'ATWORK.HOME.PAYROLL_LINKS.STORE_LINK',
      );

      fireEvent(payrollLinks, 'onPress');
      expect(onTrackingEvent).toHaveBeenCalledTimes(1);
      expect(onTrackingEvent).toHaveBeenCalledWith(
        componentEvents.payroll.payrollStoreLink,
      );
    });
  });

  describe('payroll consignado link', () => {
    it('should call to onNavigation with private payroll url when payroll link is pressed', () => {
      const payrollLinks = tree.getByText(
        'ATWORK.HOME.PAYROLL_LINKS.LOAN_LINK',
      );

      fireEvent(payrollLinks, 'onPress');
      expect(onNavigation).toHaveBeenCalledTimes(1);
      expect(onNavigation).toHaveBeenCalledWith(V1NavigationRoutes.WEBVIEW, {
        url: Config.ATWORK.PAYROLL_PRIVATE_URL,
      });
    });

    it('should call onTrackingEvent with payrollConsignadoLink event when onPress is fired', () => {
      const payrollLinks = tree.getByText(
        'ATWORK.HOME.PAYROLL_LINKS.LOAN_LINK',
      );

      fireEvent(payrollLinks, 'onPress');
      expect(onTrackingEvent).toHaveBeenCalledTimes(1);
      expect(onTrackingEvent).toHaveBeenCalledWith(
        componentEvents.payroll.payrollConsignadoLink,
      );
    });
  });
});
