// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, ref, onValue} from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANyk3lVvrAtWPpvgmwuUaE2vS-k8FxxEs",
  authDomain: "petstorevuelearn.firebaseapp.com",
  databaseURL: "https://petstorevuelearn-default-rtdb.firebaseio.com",
  projectId: "petstorevuelearn",
  storageBucket: "petstorevuelearn.appspot.com",
  messagingSenderId: "125634401094",
  appId: "1:125634401094:web:ecdd24bd5d79cf47404b47",
  measurementId: "G-SSQ0R20N0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const productsRef = ref(db, 'products');


