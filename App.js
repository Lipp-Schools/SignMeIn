import React from "react";
import { Button, SafeAreaView } from "react-native";
import Styles from "./utils/Styles";
import Register from "./pages/Register";
import { readFile } from "fs";
import { info } from "console";


export default function App() {
  return (
    <Register />
  );
}
