import firebase from "./Firebase";
import { v4 } from 'uuid';

export default CreateUser = (user) => {
    firebase.firestore().collection("users").doc(v4()).set({
        campus: user.campus,
        child: user.child,
        father: user.father,
        mother: user.mother,
    })
};