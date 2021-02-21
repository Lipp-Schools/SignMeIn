import React from "react";
import { View, Text } from "react-native";
import Styles from "./utils/Styles";
import Register from "./pages/Register";
import { NativeRouter, Route, Link } from "react-router-native";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Register} />
      <Route exact path="/signin" component={SignIn} />
    </NativeRouter>
  );
}
