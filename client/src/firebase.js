// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "plotpe-905cb.firebaseapp.com",
  projectId: "plotpe-905cb",
  storageBucket: "plotpe-905cb.firebasestorage.app",
  messagingSenderId: "711665542200",
  appId: "1:711665542200:web:4eabba07aaf5d8db1472cd",
  measurementId: "G-C5TZWJK898",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
