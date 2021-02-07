import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Styles from "../utils/Styles";

export default function Register() {
  const [mother, setMother] = useState("Mother");
  const [father, setFather] = useState("Father");
  const [child, setChild] = useState("Child");
  const [campus, setCampus] = useState("Campus");

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.header}>Register</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(text) => setMother(text)}
        placeholder={mother}
        selectionColor="#000000"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFather(text)}
        placeholder={father}
        selectionColor="#000000"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setChild(text)}
        placeholder={child}
        selectionColor="#000000"
      />
      <Picker
        selectedValue={campus}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setCampus(itemValue)}
      >
        <Picker.Item label="Galleria" value="galleria" />
        <Picker.Item label="Upper Kirby" value="upperkirby" />
        <Picker.Item label="Babble" value="babble" />
      </Picker>
      <Button title="Submit" color={"#ffffff"} />
    </SafeAreaView>
  );
}
