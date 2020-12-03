import React from 'react';
import renderer from 'react-test-renderer';
import { NoServiceIcon } from './';

describe('NoServiceIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NoServiceIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
