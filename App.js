import React from "react";
import { Button, SafeAreaView } from "react-native";
import Styles from "./utils/Styles";
import Register from "./pages/Register";
import { readFile } from "fs";
import { info } from "console";
import InitFirebase from "./utils/firebase/Firebase";

export default function App() {
  InitFirebase();
  return (
    <Register />
  );
}
