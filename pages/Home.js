import Register from "./Register";
import React from "react";
import { Button } from "react-native";

export default Home = ({ navigation }) => {
  return (
    <Button title="Register" onPress={() => navigation.navigate(Register)} />
  );
};
