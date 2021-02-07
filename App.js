import React from "react";
import { Button, SafeAreaView } from "react-native";
import Styles from "./utils/Styles";
import Register from "./pages/Register";

export default function App() {
  return (
    <SafeAreaView style={Styles.hyperlink}>
      <Button title="Register" color="#ffffff" />
      <Button title="Sign In" color="#ffffff" />
    </SafeAreaView>
  );
}
