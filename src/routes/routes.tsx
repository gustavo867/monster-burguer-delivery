import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './BottomTab';
import AuthStack from './AuthStack';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Authentication" component={AuthStack} />
        <Screen name="Navigation" component={BottomTab} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
