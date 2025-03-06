import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1v3X_OpB0w0mq06p2IZYi_rDP7HjLCEw",
  authDomain: "fir-course-50f3b.firebaseapp.com",
  projectId: "fir-course-50f3b",
  storageBucket: "fir-course-50f3b.firebasestorage.app",
  messagingSenderId: "926907676480",
  appId: "1:926907676480:web:e59621a365d94a35416ca5",
  measurementId: "G-5QSDVW810W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
