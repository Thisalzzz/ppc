// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIcEJBiAIbUrtdx9EYkD3V0mPW0v2fo9c",
  authDomain: "ppceylon.firebaseapp.com",
  projectId: "ppceylon",
  storageBucket: "ppceylon.firebasestorage.app",
  messagingSenderId: "462280580119",
  appId: "1:462280580119:web:c7e990cb59375e535c9052",
  measurementId: "G-MRFRKY87B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { collection, addDoc, getDocs, query, orderBy, Timestamp };