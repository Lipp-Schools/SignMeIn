import firebase from "firebase/app";
import "firebase/firestore";
import Config from "../../config/Config";

export default function InitFirebase() {
    firebase.initializeApp(Config);
}

function CreateUser(campus, child, father, mother) {
}