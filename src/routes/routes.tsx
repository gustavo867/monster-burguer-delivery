import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import BottomTab from './BottomTab';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Login" component={Login} />
        <Screen name="Navigation" component={BottomTab} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
