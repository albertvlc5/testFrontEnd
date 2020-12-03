import { trackEvent } from '../../../../../analytics/actions';
import ItrackingEvent from '../interfaces/trackingEvent.interface';

export function setTrackingToComponent(
  trackingEvent: ItrackingEvent,
  payrollId?: string,
): void {
  trackingEvent.params.payrollId = payrollId ? payrollId : undefined;
  trackEvent(trackingEvent.name, trackingEvent.params);
}
