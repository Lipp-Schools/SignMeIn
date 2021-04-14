import React from "react";
import Styles from "./utils/Styles";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  activeTintColor: "#7EC8E3",
  inactiveTintColor: "#FFFFFF",
  style: { backgroundColor: "#050A30", height: 40, justifyContent: "center"},
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={tabBarStyle}
        shifting="false"
        activeColor="#fff"
      >
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
