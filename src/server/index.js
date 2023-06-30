



// Import the functions you need from the SDKs you need
import {getFirestore} from '@firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9e2fQV9MsNvbFJbxdGw7XjBxVVGMDsCE",
  authDomain: "exam-5e75c.firebaseapp.com",
  projectId: "exam-5e75c",
  storageBucket: "exam-5e75c.appspot.com",
  messagingSenderId: "981468343286",
  appId: "1:981468343286:web:c3c373640891aa416a35d7",
  measurementId: "G-LKRMQ7QKJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);