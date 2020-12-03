import React from 'react';

import { HomeSkeleton } from '../';
import { mountWithAtworkHost } from '../../../../../../../__tests__/helpers';

describe('HomeSkeleton', () => {
  it('renders correctly', () => {
    const tree = mountWithAtworkHost(<HomeSkeleton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
