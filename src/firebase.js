// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvojenWcasq9ozwtV7zpekYcDrxK-xXIQ",
  authDomain: "ecommerce-react-almiron.firebaseapp.com",
  projectId: "ecommerce-react-almiron",
  storageBucket: "ecommerce-react-almiron.firebasestorage.app",
  messagingSenderId: "510171134101",
  appId: "1:510171134101:web:437bda4be716492977039c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)