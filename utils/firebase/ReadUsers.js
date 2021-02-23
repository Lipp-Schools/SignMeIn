import firebase from "./Firebase";
import React from "react";
import { db } from "./Firebase";

export default function ReadUsers() {
  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((user) => {
        console.log(user.id, user.data());
      });
    });
}
