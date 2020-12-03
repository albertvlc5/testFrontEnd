import React from 'react';
import renderer from 'react-test-renderer';
import { NoNetworkIcon } from './';

describe('NoNetworkIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NoNetworkIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
