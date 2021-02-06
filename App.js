import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [mother, setMother] = useState("Mother");
  const [father, setFather] = useState("Father");
  const [child, setChild] = useState("Child");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <View style={styles.input}>
        <TextInput />
      </View>
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
    fontSize: 50,
    paddingTop: 50,
  },
});
