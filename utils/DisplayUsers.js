import React from "react";
import ReadUsers from "./firebase/ReadUsers";
import Styles from "../utils/Styles";

export default function DisplayUsers() {
  const users = ReadUsers();
  const display = [];
  for (let user of users) {
    const row = (
      <Text style={Styles.userDisplay}>
        {user.data.father}, {user.data.mother} , {user.data.child},{" "}
        {user.data.campus}
      </Text>
    );
    display.push(row);
  }
  return { display };
}
