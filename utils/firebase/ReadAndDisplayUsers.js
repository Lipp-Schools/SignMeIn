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

  return (
    <View style={Styles.inputWrap}>
      <ScrollView style={Styles.scrollView}>
        {users?.map((user) => (
          <View style={Styles.signInButtonWrap}>
            <TouchableOpacity style={Styles.signInButton}>
              <Text key={user.id} style={Styles.signInButtonText}>
                {titleCase(user.campus)}: {titleCase(user.child)}{" "}
                {titleCase(user.father)} {titleCase(user.mother)}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const titleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const signInModal = (id) => {
  const [visible, setModalVisible] = useState(false);
  return (
    <Modal
      style={Styles.modal}
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(!visible);
      }}
    />
  );
};

export default Users;
