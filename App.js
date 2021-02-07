import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import Styles from "./utils/Styles";

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.hyperlink}>
        <Button title="Register"></Button>
        <Button title="Sign In"></Button>
       </View>
    </SafeAreaView>
  );
}
