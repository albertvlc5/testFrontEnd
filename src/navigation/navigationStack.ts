import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AtWorkModule, SalaryAdvanceModule } from '../modules/';

export const AppNavigator = createStackNavigator({
  ...AtWorkModule.navigationStack,
  ...SalaryAdvanceModule.navigationStack,
});

const RootNavigationStack = createAppContainer(AppNavigator);

export default RootNavigationStack;
