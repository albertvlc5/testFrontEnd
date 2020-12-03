import { NavigationState } from 'react-navigation';
import { setCurrentScreen, trackEvent } from './actions';

const getActiveRouteName = (navigationState: NavigationState): string => {
  if (!navigationState) return '';
  const route = navigationState.routes[navigationState.index];

  if (route.routes) return getActiveRouteName(route);

  return route.routeName;
};

export const navigationTracking = (
  prevState: NavigationState,
  currentState: NavigationState,
): void => {
  const currentRouteName = getActiveRouteName(currentState);
  const previousRouteName = getActiveRouteName(prevState);

  if (previousRouteName !== currentRouteName) {
    setCurrentScreen(currentRouteName, currentRouteName);
    trackEvent(`view_${currentRouteName}`, { previousView: previousRouteName });
  }
};
