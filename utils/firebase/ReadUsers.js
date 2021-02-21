import firebase from "./Firebase";
import React from "react";
import { db } from "./Firebase";

export default function ReadUsers() {
  const users = db.collection("users").doc();

  users.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });
}
