import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
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
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFather(text)}
        placeholder={father}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setChild(text)}
        placeholder={child}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCampus(text)}
        placeholder={campus}
      />
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
    fontSize: 55,
    paddingTop: 50,
  },
  input: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    height: 50,
    width: 300,
    borderColor: "#7ec8e3",
    borderWidth: 3,
    borderRadius: 10,
  },
});
