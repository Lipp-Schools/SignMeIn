import React from "react";
import { Button, SafeAreaView } from "react-native";
import Styles from "./utils/Styles";
import Register from "./pages/Register";
import { NavigationContainer, NavigationCotainer, StackActions } from "@react-navigation/native";
import Home from "./pages/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"

        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={Styles.hyperlink}>
    //   <Button title="Register" color="#ffffff" onPress={} />
    //   <Button title="Sign In" color="#ffffff" />
    // </SafeAreaView>
  );
}
