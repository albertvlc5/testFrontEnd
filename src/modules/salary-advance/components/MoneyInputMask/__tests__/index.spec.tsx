import React from 'react';
import { fireEvent } from '@testing-library/react-native';

import { mountWithAtworkHost } from '../../../../../__tests__/helpers';
import { MoneyInputMask } from '../index';

describe('Money Input Mask', () => {
  it('should render component', () => {
    const wrapper = mountWithAtworkHost(
      <MoneyInputMask
        currency="BRL"
        onChangeText={jest.fn()}
        value={'4.250,00'}
      />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with BRL currency format', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = mountWithAtworkHost(
      <MoneyInputMask
        currency="BRL"
        onChangeText={onChangeMock}
        value={'22'}
      />,
    );
    const comp = getByTestId('input-mask-test-id');
    fireEvent.changeText(comp, '50.00');
    expect(onChangeMock).toHaveBeenCalledWith('50,00', undefined);
  });
});
