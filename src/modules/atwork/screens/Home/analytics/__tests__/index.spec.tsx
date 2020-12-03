import ItrackingEvent from 'src/modules/atwork/screens/Home/interfaces/trackingEvent.interface';

import CoreService from '../../../../../../CoreService';
import { setTrackingToComponent } from '../actions';

describe('Tracking', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const trackingEventService = CoreService.getInstanceV1().analytics.trackEvent;
  const mockEvent: ItrackingEvent = {
    name: 'view_benefitsStatus',
    params: {
      origin: 'atwork_1',
      type: '',
    },
  };

  describe('setTrackingToComponent', () => {
    describe('when called', () => {
      it('should send a tracking event', () => {
        Date.now = jest.fn();
        const { ...restParams } = mockEvent.params;
        const data = {
          timestamp: expect.any(String),
          customer_id: null,
          ...restParams,
        };
        setTrackingToComponent(mockEvent);
        expect(trackingEventService).toHaveBeenCalled();
        expect(trackingEventService).toHaveBeenCalledWith(mockEvent.name, data);
      });
    });
  });
});
