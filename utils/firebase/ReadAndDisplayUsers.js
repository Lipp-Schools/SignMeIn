import firebase from "./Firebase";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { db } from "./Firebase";
import { Text } from "react-native";
import Styles from "../Styles";

export default function ReadAndDisplayUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const list = [];
      let snapshot = await db.collection("users").get();
      snapshot.forEach((user) => {
        id = user.id
        list.push(user.data());
      });
      setUsers([...list]);
      console.log(list);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return users.map((user) => <Text key={user.Object}>{user.Object}</Text>);
}
