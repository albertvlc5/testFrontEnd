import { fireEvent } from '@testing-library/react-native';
import React from 'react';

import { mountWithAtworkHost } from '../../../../../../src/__tests__/helpers';
import { CheckBox } from '../index';

describe('CheckBox', () => {
  it('should render component', () => {
    const mockOnCheck = jest.fn();
    const wrapper = mountWithAtworkHost(
      <CheckBox value={false} onCheck={mockOnCheck} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  describe('When touch the checkbox', () => {
    it('should call onCheck', () => {
      const mockOnCheck = jest.fn();
      const { getByTestId } = mountWithAtworkHost(
        <CheckBox value={false} onCheck={mockOnCheck} />,
      );
      const comp = getByTestId('box-id');
      fireEvent(comp, 'onTouchEnd');
      expect(mockOnCheck).toHaveBeenCalled();
    });
  });
});
