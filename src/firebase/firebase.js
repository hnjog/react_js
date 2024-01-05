import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyBN1cZne8YcStBqy5BM_q2Xvaz8QtyWM",
  authDomain: "reacttest-d4d1f.firebaseapp.com",
  projectId: "reacttest-d4d1f",
  storageBucket: "reacttest-d4d1f.appspot.com",
  messagingSenderId: "891089124185",
  appId: "1:891089124185:web:2d04acd0bb764f31f4ea48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
