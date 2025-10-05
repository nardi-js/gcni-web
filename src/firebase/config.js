// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgkDR5q6-OhiWyUzy_JeAm_j9TIgSBlBw",
  authDomain: "backend-gcni.firebaseapp.com",
  projectId: "backend-gcni",
  storageBucket: "backend-gcni.firebasestorage.app",
  messagingSenderId: "782610759559",
  appId: "1:782610759559:web:bc797f2b69e7cf1cb9dd22",
  measurementId: "G-5QDPJFBJEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, db, storage, auth, googleProvider };