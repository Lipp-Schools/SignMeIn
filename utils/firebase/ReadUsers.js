import firebase from "./Firebase";
import React from "react";

export default function ReadUsers() {
  const users = firebase.firestore().collection("users").doc();

  users.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });
}
