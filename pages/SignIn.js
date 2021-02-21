import { SafeAreaView, View, Text } from "react-native";
import Styles from "../utils/Styles";
import React from "react";

export default function SignIn() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerWrap}>
        <Text style={Styles.header}>Sign In</Text>
      </View>
      <View style={Styles.inputWrap}>

      </View>
    </SafeAreaView>
  );
}
