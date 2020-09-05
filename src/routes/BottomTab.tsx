import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Page from "../screens/Page";

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTab() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? "#8257E5" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Page"
        component={Page}
        options={{
          tabBarLabel: "Page",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-beaker"
                size={size}
                color={focused ? "#8257E5" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default BottomTab;
