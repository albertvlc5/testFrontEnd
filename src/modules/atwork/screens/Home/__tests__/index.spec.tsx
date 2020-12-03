import React from 'react';

import { fireEvent, waitFor } from '@testing-library/react-native';

import { Home } from '../';
import { mountWithAtworkHost } from '../../../../../__tests__/helpers';
import { getDeductibleDataMock } from './helpers/data/deductible';
import { getPerkDataMock } from './helpers/data/perks';
import { mockedNavigation } from '../../../../../__tests__/mocks';
import CoreService from '../../../../../CoreService';
import { requestErrorException } from '../../../../../utils/exceptions';
import componentEvents from '../analytics/events';
import {
  authenticatedFailedRequestMock,
  authenticatedSuccessRequestMock,
  rejectObject,
} from './helpers';

describe('Home', () => {
  const perkDataMock = getPerkDataMock();
  const deductibleDataMock = getDeductibleDataMock();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    authenticatedSuccessRequestMock(perkDataMock, deductibleDataMock);
    const { toJSON } = mountWithAtworkHost(
      <Home navigation={mockedNavigation} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  describe('when request is not resolved', () => {
    it('should render the skeleton', async () => {
      const { getByTestId, queryByTestId } = mountWithAtworkHost(
        <Home navigation={mockedNavigation} />,
      );
      getByTestId('home-skeleton-id');
      expect(queryByTestId('home-skeleton-id')).not.toBeNull();
    });
  });

  describe('when request success', () => {
    it('should render home component', async () => {
      authenticatedSuccessRequestMock(perkDataMock, deductibleDataMock);

      const { getByTestId } = mountWithAtworkHost(
        <Home navigation={mockedNavigation} />,
      );

      await waitFor(() => {
        expect(getByTestId('home-component-test-id')).toBeDefined();
      });
    });
  });

  describe('when request failed', () => {
    beforeEach(() => {
      authenticatedFailedRequestMock();
    });
    it('should render error feedback component', async () => {
      const { getByTestId } = mountWithAtworkHost(
        <Home navigation={mockedNavigation} />,
      );

      await waitFor(() => {
        expect(getByTestId('error-feedback-component-id')).toBeDefined();
      });
    });

    it('should call core service logging logException method', async () => {
      mountWithAtworkHost(<Home navigation={mockedNavigation} />);
      await waitFor(() => {
        expect(
          CoreService.getInstanceV1().logging.logException,
        ).toHaveBeenCalledTimes(1);
        expect(
          CoreService.getInstanceV1().logging.logException,
        ).toHaveBeenCalledWith(
          requestErrorException({
            context: 'getPerksAndDeductible',
            status: rejectObject.status,
            message: rejectObject.message,
            payload: rejectObject.payload,
          }),
        );
      });
    });
  });

  describe('navigation', () => {
    it('shoud call the navigation goBack method when goBack button is pressed', async () => {
      const { getByText } = mountWithAtworkHost(
        <Home navigation={mockedNavigation} />,
      );
      await waitFor(() => {
        const header = getByText('ATWORK.HOME.HEADER.TITLE');
        fireEvent(header, 'onGoBack');
        expect(
          CoreService.getInstanceV1().navigation.goBack,
        ).toHaveBeenCalled();
      });
    });
  });

  describe('analytics', () => {
    const trackingEventService = CoreService.getInstanceV1().analytics
      .trackEvent;

    it('should send a tracking event when info button is pressed', () => {
      const mockEvent = {
        timestamp: expect.any(String),
        customer_id: null,
        ...componentEvents.header.info.params,
      };
      const { getByTestId } = mountWithAtworkHost(
        <Home navigation={mockedNavigation} />,
      );
      const infoButton = getByTestId('info');

      fireEvent(infoButton, 'onPress');
      expect(trackingEventService).toHaveBeenCalledTimes(1);
      expect(trackingEventService).toHaveBeenCalledWith(
        componentEvents.header.info.name,
        mockEvent,
      );
    });
  });
});
