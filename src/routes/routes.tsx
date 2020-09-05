import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { BottomTabBar } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="BottomTabBar" component={BottomTabBar} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
