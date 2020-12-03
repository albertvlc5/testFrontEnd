import React from 'react';
import { mockedNavigation } from '../../../../../../src/__tests__/mocks';

import { mountWithAtworkHost } from '../../../../../../src/__tests__/helpers';
import { ValueRequest } from '../index';

describe('Value Request Screen', () => {
  it('should render component', () => {
    const wrapper = mountWithAtworkHost(
      <ValueRequest navigation={mockedNavigation} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
