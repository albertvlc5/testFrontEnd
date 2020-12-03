import React from 'react';

import { fireEvent } from '@testing-library/react-native';

import { RequestConfirmation } from '../';
import { SalaryAdvanceModule } from '../../..';
import { mountWithAtworkHost } from '../../../../../__tests__/helpers';
import { mockedNavigation } from '../../../../../__tests__/mocks';

describe('Request Confirmation Screen', () => {
  const mountComponent = () =>
    mountWithAtworkHost(<RequestConfirmation navigation={mockedNavigation} />);

  it('should render component', () => {
    const wrapper = mountComponent().toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  describe('When confirm ', () => {
    it('should call navigate with Value Request route', () => {
      const wrapper = mountComponent();
      const { getByTestId } = wrapper;
      const comp = getByTestId('confirmation-btn-id');
      fireEvent(comp, 'onPress');
      expect(mockedNavigation.navigate).toHaveBeenCalledWith(
        SalaryAdvanceModule.routes.SALARY_ADVANCE_VALUE_REQUEST,
      );
    });
  });
});
