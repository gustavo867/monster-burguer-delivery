import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import profile from '../assets/icon/profile.png';
import square from '../assets/icon/square.png';

import OrderManually from '../screens/OrderManually';
import Profile from '../screens/Profile';
import Historic from '../screens/Historic';

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTab() {
  return (
    <Navigator
      initialRouteName="OrderManually"
      tabBarOptions={{
        style: {
          height: 64,
          borderTopColor: 'transparent',
          elevation: 0,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopRightRadius: 69,
          borderTopLeftRadius: 69,
          borderBottomLeftRadius: 5,
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        inactiveBackgroundColor: '#FFF',
        activeBackgroundColor: '#CA8832',
        showLabel: false,
      }}
    >
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="face-outline"
                size={size}
                color="#FFF"
              />
            ) : (
              <Image source={profile} />
            );
          },
        }}
      />
      <Screen
        name="OrderManually"
        component={OrderManually}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <FontAwesome
                name="opencart"
                size={size}
                color={focused ? '#FFF' : 'rgba(0, 0, 0, 0.5)'}
              />
            );
          },
        }}
      />
      <Screen
        name="Historic"
        component={Historic}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="crop-square"
                size={size}
                color="#FFF"
              />
            ) : (
              <Image source={square} />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default BottomTab;
