import React from "react";
import { View, Text, TabBarIOS } from "react-native";
import Styles from "./utils/Styles";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ activeTintColor: "#7EC8E3" }}>
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
