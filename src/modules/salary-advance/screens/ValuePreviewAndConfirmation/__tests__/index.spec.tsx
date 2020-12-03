import React from 'react';
import { mockedNavigation } from '../../../../../../src/__tests__/mocks';

import { mountWithAtworkHost } from '../../../../../../src/__tests__/helpers';
import { ValuePreviewAndConfirmation } from '../index';

describe('Value Preview and Confirmation Screen', () => {
  it('should render component', () => {
    const wrapper = mountWithAtworkHost(
      <ValuePreviewAndConfirmation navigation={mockedNavigation} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
