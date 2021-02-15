import firebase from "firebase/app";
import "firebase/firestore";
import Config from "../../config/Config";

firebase.initializeApp(Config);

export default firebase;