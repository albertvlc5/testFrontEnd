import React from 'react';

import { fireEvent } from '@testing-library/react-native';

import { ErrorFeedback } from '../';
import { mountWithAtworkHost } from '../../../__tests__/helpers';
import ERRORS from '../../../constants/errors';

describe('HomeErrorFeedback', () => {
  const onTryAgainPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('When user has network issues', () => {
    it('renders correctly with a network feedback', () => {
      const tree = mountWithAtworkHost(
        <ErrorFeedback
          errorType={ERRORS.NO_INTERNET}
          onTryAgainPress={onTryAgainPress}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('When service issues occur', () => {
    it('renders correctly with a service feedback', () => {
      const tree = mountWithAtworkHost(
        <ErrorFeedback
          errorType={ERRORS.NO_SERVICE}
          onTryAgainPress={onTryAgainPress}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('When user touches the onTryAgain button', () => {
    it('calls the onTryAgainPress function', () => {
      const { getByTestId } = mountWithAtworkHost(
        <ErrorFeedback
          errorType={ERRORS.NO_SERVICE}
          onTryAgainPress={onTryAgainPress}
        />,
      );
      const button = getByTestId('tryAgainButton');
      fireEvent.press(button);
      expect(onTryAgainPress).toHaveBeenCalledTimes(1);
    });
  });
});
