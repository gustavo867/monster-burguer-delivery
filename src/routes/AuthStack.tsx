import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Register from '../screens/Register';

import back from '../assets/icon/back.png';

const { Navigator, Screen } = createStackNavigator();

function AuthStack() {
  return (
    <Navigator
      screenOptions={{
        headerBackImage: () => (
          <Image source={back} style={{ marginRight: 5 }} />
        ),
        title: '',
        headerTransparent: true,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}

export default AuthStack;
