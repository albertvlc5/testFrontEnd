import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import { mountWithAtworkHost } from '../../../../../../src/__tests__/helpers';

import { FixedBottomButtonView } from '../index';

describe('Fixed Bottom Button View', () => {
  it('should render component', () => {
    const mockOnPress = jest.fn();
    const wrapper = mountWithAtworkHost(
      <FixedBottomButtonView onPress={mockOnPress} children={<View />} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should output onPress event when the button has been pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = mountWithAtworkHost(
      <FixedBottomButtonView onPress={mockOnPress} children={<View />} />,
    );
    const comp = getByTestId('flat-button-id');
    fireEvent(comp, 'onPress');
    expect(mockOnPress).toHaveBeenCalled();
  });
});
