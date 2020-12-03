import React from 'react';
import RootNavigationStack from './navigationStack';
import { handleNavigationStateChange } from './navigationHelper';

function RootNavigator() {
  return (
    <RootNavigationStack
      onNavigationStateChange={handleNavigationStateChange}
    />
  );
}

export default RootNavigator;
