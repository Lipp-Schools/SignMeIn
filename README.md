# SignMeIn

An application that conveniently facilitates simple sign in of children at LIPP.

## Tech Stack

- React Native
- Expo
- Firebase
- Firestore
- Big Query (used to produce CSV records of signins for [DFPS](http://www.dfps.state.tx.us/))

## Setup and Installation

1. Clone the repository
2. Create `config/Config.js`
3. In `Config.js`, create a `Config` object like so (the keys for each object can be found within your firebase settings):

```js
const Config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export default Config;
```

4. `npm install --save`
5. `npm start`

## Firestore Schema

### `users`

```js
{
    campus: "",
    child: "",
    father: "",
    mother: "",
}
```

### `signins`

```js
{
    id: "", // id = document ID/key of the user signing in
    timestamp: // Unix timestamp to nearest second
}
```
