import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBlpBj1M6Yo2UaMkHaSFGJNe1AcmEA4UhM",
  authDomain: "rentarig-dab3e.firebaseapp.com",
  projectId: "rentarig-dab3e",
  storageBucket: "rentarig-dab3e.appspot.com",
  messagingSenderId: "586926698268",
  appId: "1:586926698268:web:a1c038c6f74e86897b14d9",
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
