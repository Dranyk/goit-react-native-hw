import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import * as firebase from "firebase";
// import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgKy79atAKmZHlfxBRegPRCJ6n77saTa0",
    authDomain: "my-goit-react-native-hw.firebaseapp.com",
    projectId: "my-goit-react-native-hw",
    storageBucket: "my-goit-react-native-hw.appspot.com",
    messagingSenderId: "1094750393832",
    appId: "1:1094750393832:web:27014889b5e031d8adc05d",
    measurementId: "G-XLWTD74X94"
  };

const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

// export default firebase.initializeApp(firebaseConfig);