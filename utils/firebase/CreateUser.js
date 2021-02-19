import firebase from "./Firebase";

export default CreateUser = (user) => {
  if (userFull(user)) {
    firebase.firestore().collection("users").doc().set({
      campus: user.campus,
      child: user.child,
      father: user.father,
      mother: user.mother,
    });
  }
};

const userFull = (user) => {
  if (
    (user.child !== "" && user.father !== "Father") ||
    (user.father !== "" && user.mother !== "Mother") ||
    user.mother !== ""
  ) {
    return true;
  }
};
