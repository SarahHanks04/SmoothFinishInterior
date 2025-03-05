// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1v3X_OpB0w0mq06p2IZYi_rDP7HjLCEw",
  authDomain: "fir-course-50f3b.firebaseapp.com",
  projectId: "fir-course-50f3b",
  storageBucket: "fir-course-50f3b.firebasestorage.app",
  messagingSenderId: "926907676480",
  appId: "1:926907676480:web:e59621a365d94a35416ca5",
  measurementId: "G-5QSDVW810W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
