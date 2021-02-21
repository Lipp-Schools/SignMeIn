import { SafeAreaView, View, Text, TextInput } from "react-native";
import Styles from "../utils/Styles";
import React from "react";
import ReadUsers from "../utils/firebase/ReadUsers";

export default function SignIn() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerWrap}>
        <Text style={Styles.header}>Sign In</Text>
      </View>
      <View style={Styles.inputWrap}>
        <TextInput
          style={Styles.input}
          placeholder={"Search"}
          selectionColor="#000000"
        />
      </View>
    </SafeAreaView>
  );
}
