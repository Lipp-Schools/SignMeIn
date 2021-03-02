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

  const [visible, setVisible] = useState(false);
  return (
    <View style={Styles.inputWrap}>
      <View style={Styles.modalWrap}>
        <Modal animationType="slide" transparent={false} visible={visible}>
          <View style={Styles.modalWrap}>
            <View style={Styles.modal}>
              <TouchableOpacity>
                <View style={Styles.button}>
                  <Text style={Styles.buttonText}>Submit</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <View style={Styles.button}>
                  <Text style={Styles.buttonText}>Return</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <ScrollView style={Styles.scrollView}>
        {users?.map((user) => (
          <View style={Styles.signInButtonWrap}>
            <TouchableOpacity
              style={Styles.signInButton}
              onPress={() => setVisible(true)}
            >
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

export default Users;
