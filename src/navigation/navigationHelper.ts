import { NavigationState } from 'react-navigation';
import { navigationTracking } from '../analytics/navigation';
import { hasBottomBarRoutes } from './routers';
import CoreService from '../CoreService';

export const getActiveRouteName = (
  navigationState: NavigationState,
): string => {
  if (!navigationState) return '';
  const route = navigationState.routes[navigationState.index];

  if (route.routes) return getActiveRouteName(route);

  return route.routeName;
};

export const handleNavigationStateChange = (
  prevState: NavigationState,
  currentState: NavigationState,
): void => {
  navigationTracking(prevState, currentState);

  const currentRouteName = getActiveRouteName(currentState);
  const hasBottomBar = hasBottomBarRoutes.some(
    (item) => item === currentRouteName,
  );

  if (hasBottomBar) {
    CoreService.getInstanceV1().ui.bottomBar.show();
  } else {
    CoreService.getInstanceV1().ui.bottomBar.hide();
  }
};
