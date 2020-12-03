import { NavigationRouteConfigMap } from 'react-navigation';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';

import { Home } from '../screens/Home';

const HomeScreen = {
  screen: Home,
  navigationOptions: {
    headerShown: false,
  },
  showNavbar: true,
};

export const AtWorkRoutes = {
  HOME: 'Home',
};

export const AtWorkNavigationStack: NavigationRouteConfigMap<
  StackNavigationOptions,
  StackNavigationProp
> = {
  HOME: HomeScreen,
};
