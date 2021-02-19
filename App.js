import React from "react";
import { View } from "react-native";
import Styles from "./utils/Styles";
import Register from "./pages/Register";
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  <NativeRouter>
    <View style={Styles.container}>
      <View style={Styles.inputWrap}>
        <Link to="/register" style={Styles.button}>
          <Text style={Styles.buttonText}>Register</Text>
        </Link>
      </View>
    </View>
  </NativeRouter>;
}
