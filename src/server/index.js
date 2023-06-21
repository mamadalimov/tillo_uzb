import {getFirestore} from '@firebase/firestore'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyARQeakIUl-ER2BAamQQsi2wJTwuU5NjmI",
  authDomain: "uzum-market-2ef60.firebaseapp.com",
  projectId: "uzum-market-2ef60",
  storageBucket: "uzum-market-2ef60.appspot.com",
  messagingSenderId: "134892322486",
  appId: "1:134892322486:web:a1e5fd2cf8958cce587017",
  measurementId: "G-ZPMWM0XP9C"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
