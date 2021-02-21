import firebase from "./Firebase";
import { db } from "./Firebase";

export default CreateUser = (user) => {
  db.collection("users").doc().set({
    campus: user.campus,
    child: user.child,
    father: user.father,
    mother: user.mother,
  });
};
