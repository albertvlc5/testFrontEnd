import React from 'react';

import { RenderAPI } from '@testing-library/react-native';

import { Summary } from '../';
import { mountWithAtworkHost } from '../../../../../../../__tests__/helpers';

describe('Summary', () => {
  let tree: RenderAPI;
  const totalAmount = 20900;

  beforeEach(() => {
    tree = mountWithAtworkHost(<Summary totalAmount={totalAmount} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeDefined();
  });
});
