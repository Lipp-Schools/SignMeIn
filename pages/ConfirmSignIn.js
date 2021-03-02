import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Styles from "../utils/Styles";
import React from "react";
import CreateSignIn from "../utils/firebase/CreateSignIn";

export default function ConfirmSignIn(props) {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerWrap}>
        <Text style={Styles.header}>Confirm Sign In</Text>
      </View>
      <View style={Styles.inputWrap}>
        <TouchableOpacity onPress={() => CreateSignIn(props.id)}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
