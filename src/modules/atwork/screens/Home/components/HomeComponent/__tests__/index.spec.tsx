import React from 'react';

import { fireEvent } from '@testing-library/react-native';

import { HomeComponent } from '../';
import {
  mountWithAtworkHost,
  storeMock,
} from '../../../../../../../__tests__/helpers';
import { getDeductibleTransformedDataMock } from '../../../__tests__/helpers/data/deductible';
import { getPerksTransformedDataMock } from '../../../__tests__/helpers/data/perks';
import { mockedNavigation } from '../../../../../../../__tests__/mocks';
import CoreService from '../../../../../../../CoreService';
import * as AnaliticsActions from '../../../analytics/actions';

describe('Home component', () => {
  const perks = getPerksTransformedDataMock();
  const deductible = getDeductibleTransformedDataMock();

  let MountedHomeComponent: any;

  beforeEach(() => {
    jest.clearAllMocks();
    jest
      .spyOn(AnaliticsActions, 'setTrackingToComponent')
      .mockImplementation(() => true);
    MountedHomeComponent = mountWithAtworkHost(
      <HomeComponent
        perks={perks}
        deductible={deductible}
        navigation={mockedNavigation}
      />,
    );
  });

  it('should render correctly', () => {
    expect(MountedHomeComponent.toJSON()).toMatchSnapshot();
  });

  describe('summary component', () => {
    it('should ber rendered ', () => {
      expect(
        MountedHomeComponent.getByTestId('summary-component-test-id'),
      ).toBeDefined();
    });
  });

  describe('salary advance component', () => {
    it('should be rendered ', () => {
      expect(
        MountedHomeComponent.getByText('ATWORK.HOME.SALARY_ADVANCE.TITLE'),
      ).toBeDefined();
    });

    it('should call navigate method when onNavigation is fired', () => {
      const salaryAdvanceComponent = MountedHomeComponent.getByText(
        'ATWORK.HOME.SALARY_ADVANCE.TITLE',
      );
      fireEvent(salaryAdvanceComponent, 'onNavigation');
      expect(
        CoreService.getInstanceV1().navigation.navigate,
      ).toHaveBeenCalledTimes(1);
    });

    it('should call setTrackingToComponent method with payrollId when onTrackingEvent is fired', () => {
      const salaryAdvanceComponent = MountedHomeComponent.getByText(
        'ATWORK.HOME.SALARY_ADVANCE.TITLE',
      );
      fireEvent(salaryAdvanceComponent, 'onTrackingEvent');
      expect(AnaliticsActions.setTrackingToComponent).toHaveBeenCalledTimes(1);
      expect(AnaliticsActions.setTrackingToComponent).toHaveBeenCalledWith(
        undefined,
        storeMock.params.payrollId,
      );
    });
  });

  describe('payroll component', () => {
    it('should be rendered ', () => {
      expect(
        MountedHomeComponent.getByText('ATWORK.HOME.PAYROLL.TITLE'),
      ).toBeDefined();
    });

    it('should call navigate method when onNavigation is fired', () => {
      const payrollComponent = MountedHomeComponent.getByText(
        'ATWORK.HOME.PAYROLL.TITLE',
      );
      fireEvent(payrollComponent, 'onNavigation');
      expect(
        CoreService.getInstanceV1().navigation.navigate,
      ).toHaveBeenCalledTimes(1);
    });

    it('should call setTrackingToComponent method with payrollId when onTrackingEvent is fired', () => {
      const payrollComponent = MountedHomeComponent.getByText(
        'ATWORK.HOME.PAYROLL.TITLE',
      );
      fireEvent(payrollComponent, 'onTrackingEvent');
      expect(AnaliticsActions.setTrackingToComponent).toHaveBeenCalledTimes(1);
      expect(AnaliticsActions.setTrackingToComponent).toHaveBeenCalledWith(
        undefined,
        storeMock.params.payrollId,
      );
    });
  });

  describe('payroll links component', () => {
    it('should be rendered ', () => {
      expect(
        MountedHomeComponent.getByText('ATWORK.HOME.PAYROLL_LINKS.STORE_LINK'),
      ).toBeDefined();
    });

    it('should call navigate method when onNavigation is fired', () => {
      const payrollLinksComponent = MountedHomeComponent.getByText(
        'ATWORK.HOME.PAYROLL_LINKS.STORE_LINK',
      );
      fireEvent(payrollLinksComponent, 'onNavigation');
      expect(
        CoreService.getInstanceV1().navigation.navigate,
      ).toHaveBeenCalledTimes(1);
    });

    it('should call setTrackingToComponent method with payrollId when onTrackingEvent is fired', () => {
      const payrollLinksComponent = MountedHomeComponent.getByText(
        'ATWORK.HOME.PAYROLL_LINKS.STORE_LINK',
      );
      fireEvent(payrollLinksComponent, 'onTrackingEvent');
      expect(AnaliticsActions.setTrackingToComponent).toHaveBeenCalledTimes(1);
      expect(AnaliticsActions.setTrackingToComponent).toHaveBeenCalledWith(
        undefined,
        storeMock.params.payrollId,
      );
    });
  });

  describe('deductible component', () => {
    it('should be rendered when there is deductible data, ', () => {
      expect(
        MountedHomeComponent.getByText('ATWORK.HOME.DEDUCTIBLE.TITLE'),
      ).toBeDefined();
    });

    it('should call navigate method when onNavigation is fired', () => {
      const deductibleComponent = MountedHomeComponent.getByText(
        'ATWORK.HOME.DEDUCTIBLE.TITLE',
      );
      fireEvent(deductibleComponent, 'onNavigation');
      expect(
        CoreService.getInstanceV1().navigation.navigate,
      ).toHaveBeenCalledTimes(1);
    });

    it('should not be rendered when there is no deductible data ', () => {
      const { queryByText } = mountWithAtworkHost(
        <HomeComponent
          navigation={mockedNavigation}
          perks={perks}
          deductible={undefined}
        />,
      );
      expect(queryByText('ATWORK.HOME.DEDUCTIBLE.TITLE')).toBeNull();
    });

    it('should call setTrackingToComponent method with payrollId when onTrackingEvent is fired', () => {
      const deductibleComponent = MountedHomeComponent.getByText(
        'ATWORK.HOME.DEDUCTIBLE.TITLE',
      );
      fireEvent(deductibleComponent, 'onTrackingEvent');
      expect(AnaliticsActions.setTrackingToComponent).toHaveBeenCalledTimes(1);
      expect(AnaliticsActions.setTrackingToComponent).toHaveBeenCalledWith(
        undefined,
        storeMock.params.payrollId,
      );
    });
  });
});
