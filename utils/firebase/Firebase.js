import firebase from "firebase/app";
import "firebase/firestore";
import Config from "../../config/Config";

firebase.initializeApp(Config);

export const db = firebase.firestore();

export default firebase;
