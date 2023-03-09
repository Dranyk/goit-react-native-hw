import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgKy79atAKmZHlfxBRegPRCJ6n77saTa0",
  authDomain: "my-goit-react-native-hw.firebaseapp.com",
  projectId: "my-goit-react-native-hw",
  storageBucket: "my-goit-react-native-hw.appspot.com",
  messagingSenderId: "1094750393832",
  appId: "1:1094750393832:web:6a4dd41fd78e23c0adc05d",
  measurementId: "G-TW76G891D4"
};

const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);