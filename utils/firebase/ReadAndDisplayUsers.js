import firebase from "./Firebase";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "./Firebase";
import { Text } from "react-native";
import Styles from "../Styles";
import CreateSignIn from "../firebase/CreateSignIn";

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    let commit = true;

    firebase
      .firestore()
      .collection("users")
      .get()
      .then(({ docs }) => {
        if (!commit) return;
        setUsers(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        if (!commit) return;
        console.error(error);
      });

    return () => {
      commit = false;
    };
  }, [setUsers]);

  const [visible, setVisible] = useState(false);
  return (
    <>
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          style={Styles.modal}
        >
          <View style={Styles.modalWrap}>
            <Text style={Styles.modalText}>You've Signed In!</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <View style={Styles.button}>
                <Text style={Styles.buttonText}>Ok</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View style={Styles.inputWrap}>
        <ScrollView style={Styles.scrollView}>
          {users?.map((user) => (
            <View key={user.id} style={Styles.signInButtonWrap}>
              <TouchableOpacity
                style={Styles.signInButton}
                onPress={() => {
                  CreateSignIn(user.id);
                  setVisible(true);
                }}
              >
                <Text style={Styles.signInButtonText}>
                  {titleCase(user.campus)}: {titleCase(user.child)}{" "}
                  {titleCase(user.father)} {titleCase(user.mother)}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const titleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default Users;
