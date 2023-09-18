// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlpBj1M6Yo2UaMkHaSFGJNe1AcmEA4UhM",
  authDomain: "rentarig-dab3e.firebaseapp.com",
  projectId: "rentarig-dab3e",
  storageBucket: "rentarig-dab3e.appspot.com",
  messagingSenderId: "586926698268",
  appId: "1:586926698268:web:a1c038c6f74e86897b14d9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
