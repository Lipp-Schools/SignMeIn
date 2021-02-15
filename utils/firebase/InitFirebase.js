import firebase from "firebase/app";
import Config from "../../config/Config";

export default function InitFirebase() {
    firebase.initializeApp(Config);
}