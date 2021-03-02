import firebase from "./Firebase";
import { db } from "./Firebase";

export default CreateSignIn = (id) => {
  db.collection("signins")
    .doc()
    .set({
      id: id,
      timestamp: Math.floor(Date.now() / 1000),
    });
};
