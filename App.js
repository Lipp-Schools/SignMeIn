import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function App() {
  const [mother, setMother] = useState("Mother");
  const [father, setFather] = useState("Father");
  const [child, setChild] = useState("Child");
  const [campus, setCampus] = useState("Campus");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput
        style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050a30",
    alignItems: "center",
  },
  header: {
    color: "#ffffff",
    fontSize: 60,
    paddingTop: 25,
    paddingBottom: 5,
  },
  input: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    height: 60,
    width: 300,
    borderRadius: 10,
    marginBottom: 8,
    fontSize: 30,
  },
  picker: {
    width: 300,
    color: "#ffffff",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
});
