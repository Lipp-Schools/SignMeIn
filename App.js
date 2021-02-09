import React from "react";
import { Button, SafeAreaView } from "react-native";
import Styles from "./utils/Styles";
import Register from "./pages/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Register />
  );
}
