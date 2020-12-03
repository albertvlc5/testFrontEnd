import React from 'react';

import { waitFor } from '@testing-library/react-native';

import { ErrorBoundary } from '../';
import { mountWithAtworkHost } from '../../../__tests__/helpers';
import CoreService from '../../../CoreService';
import { formatException } from '../../../utils/logging';
import { EXCEPTIONS } from '../../../utils/logging/constants';

export interface IChild {
  throwError?: boolean;
}

const ERROR_MESSAGE = 'this is an error';

function Child({ throwError }: IChild) {
  if (throwError) {
    throw new Error(ERROR_MESSAGE);
  } else {
    return null;
  }
}

describe('Error boundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => '');
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const wrapper = mountWithAtworkHost(
      <ErrorBoundary>
        <Child throwError={true} />
      </ErrorBoundary>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should call core service logging logException method when an error occurs', async () => {
    mountWithAtworkHost(
      <ErrorBoundary>
        <Child throwError={true} />
      </ErrorBoundary>,
    );
    await waitFor(() => {
      expect(
        CoreService.getInstanceV1().logging.logException,
      ).toHaveBeenCalledTimes(1);

      expect(
        CoreService.getInstanceV1().logging.logException,
      ).toHaveBeenCalledWith(
        formatException({
          exceptionName: EXCEPTIONS.EXCEPTION_DEFAULT.NAME,
          context: ERROR_MESSAGE,
        }),
      );
    });
  });

  it('should not call core service logging logException method when no error occurs', async () => {
    mountWithAtworkHost(
      <ErrorBoundary>
        <Child throwError={false} />
      </ErrorBoundary>,
    );
    await waitFor(() => {
      expect(
        CoreService.getInstanceV1().logging.logException,
      ).not.toHaveBeenCalled();
    });
  });
});
