// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiVxI8s9761sSYJZRfRz6rVFmHgCks_8c",
  authDomain: "seatr-416422.firebaseapp.com",
  projectId: "seatr-416422",
  storageBucket: "seatr-416422.appspot.com",
  messagingSenderId: "582067681304",
  appId: "1:582067681304:web:f966fe7c29e48795ea2b6d",
  measurementId: "G-JR9L9SVF23",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);