import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Register from '../screens/Register';

const { Navigator, Screen } = createStackNavigator();

function AuthStack() {
  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}

export default AuthStack;
