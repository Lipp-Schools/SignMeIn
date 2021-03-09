# SignMeIn

An application that conveniently facilitates simple sign in of children at LIPP.

## Tech Stack

- React Native
- Expo
- Firebase
- Firestore
- Big Query (used to produce CSV records of signins for [DFPS](http://www.dfps.state.tx.us/))

## Setup and Installation

1. Create `config/Config.js`
2. In `Config.js`, create a `Config` Object like so (the keys for each object can be found within your firebase settings): 
```js
export default Config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
}
```
