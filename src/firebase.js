// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4IBPDJDwaKI79nHWK6sbApct9eGLpQB4",
  authDomain: "portfolio-a48e0.firebaseapp.com",
  projectId: "portfolio-a48e0",
  storageBucket: "portfolio-a48e0.firebasestorage.app",
  messagingSenderId: "907335177479",
  appId: "1:907335177479:web:d05a632a3d091bd56d21a2"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
