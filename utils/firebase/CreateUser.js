import firebase from "./Firebase";

export default CreateUser = (user) => {
    firebase.firestore().collection("users").doc().set({
        campus: user.campus,
        child: user.child,
        father: user.father,
        mother: user.mother,
    })
};