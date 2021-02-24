import firebase from "./Firebase";
import React from "react";
import { db } from "./Firebase";

export default function ReadUsers() {
  const result = [];
  db.collection("users")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((user) => {
        const id = user.id;
        const data = user.data();
        result.push({ id: data });
      });
    });
  return result;
}
