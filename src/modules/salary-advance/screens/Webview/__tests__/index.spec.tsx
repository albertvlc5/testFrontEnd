import React from 'react';
import { mockedNavigation } from '../../../../../../src/__tests__/mocks';

import { mountWithAtworkHost } from '../../../../../../src/__tests__/helpers';
import { Webview } from '../index';

jest.mock('../../../../../CoreService', () => ({
  __esModule: true,
  default: {
    getInstanceV1: () => ({
      session: {
        getUserSession: jest.fn().mockReturnValue(
          Promise.resolve({
            profile: {},
            token: {},
            auth: {},
            apiVersion: '1',
          }),
        ),
      },
    }),
  },
}));

describe('Webview Screen', () => {
  it('should render component', () => {
    const wrapper = mountWithAtworkHost(
      <Webview navigation={mockedNavigation} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});