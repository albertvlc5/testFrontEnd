import CoreService from '../CoreService';

export function trackEvent(event: any, params: any): void {
  const { customerId, ...restParams } = params || {};
  const data = {
    timestamp: new Date().toISOString(),
    customer_id: customerId || null,
    ...restParams,
  };

  const analytics = CoreService.getInstanceV1().analytics;
  analytics.trackEvent(event, data);
}

export function setCurrentScreen(
  screenName: string,
  screenNameOverride?: string,
): void {
  const { trackCurrentScreen } = CoreService.getInstanceV1().analytics;
  trackCurrentScreen(screenName, screenNameOverride);
}

export const setProperty = ({
  name,
  value,
}: {
  name: string;
  value: string;
}): void => {
  const {
    trackUserId,
    trackUserProperty,
  } = CoreService.getInstanceV1().analytics;

  if (name === 'user_id') {
    trackUserId(value);
  } else {
    trackUserProperty(name, value);
  }
};
