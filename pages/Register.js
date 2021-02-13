import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Styles from "../utils/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Register() {
  const [mother, setMother] = useState("Mother");
  const [father, setFather] = useState("Father");
  const [child, setChild] = useState("Child");
  const [campus, setCampus] = useState("Campus");

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.headerWrap}>
        <Text style={Styles.header}>Register</Text>
      </View>
      <View style={Styles.inputWrap}>
        <TextInput
          style={Styles.input}
          onChangeText={(text) => setMother(text)}
          placeholder={mother}
          selectionColor="#000000"
        />
        <TextInput
          style={Styles.input}
          onChangeText={(text) => setFather(text)}
          placeholder={father}
          selectionColor="#000000"
        />
        <TextInput
          style={Styles.input}
          onChangeText={(text) => setChild(text)}
          placeholder={child}
          selectionColor="#000000"
        />
        <Picker
          selectedValue={campus}
          style={Styles.picker}
          onValueChange={(itemValue, itemIndex) => setCampus(itemValue)}
        >
          <Picker.Item label="Galleria" value="galleria" />
          <Picker.Item label="Upper Kirby" value="upperkirby" />
          <Picker.Item label="Babble" value="babble" />
        </Picker>
        <TouchableOpacity>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
