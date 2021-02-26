import firebase from "./Firebase";
import React from "react";
import { db } from "./Firebase";

export default function ReadAndDisplayUsers() {
  const displayArray = [];
  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.forEach((user) => {
        console.log({
          campus: user.data().campus,
          child: user.data().child,
          father: user.data().father,
          mother: user.data().mother,
        });
        displayArray.push({
          campus: user.data().campus,
          child: user.data().child,
          father: user.data().father,
          mother: user.data().mother,
        });
      });
    });
}
