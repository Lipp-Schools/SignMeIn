import firebase from "./Firebase";
import React from "react";
import { db } from "./Firebase";

export default function ReadAndDisplayUsers() {
  const users = [];

  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.forEach((user) => {
        users.push({ id: user.id, data: user.data });
      });
    });
  
    console.log(users);
}
