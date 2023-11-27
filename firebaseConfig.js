// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8H1PI0a6Bu4QMvOj-7md9qXCbLwXk64",
  authDomain: "chats-366af.firebaseapp.com",
  projectId: "chats-366af",
  storageBucket: "chats-366af.appspot.com",
  messagingSenderId: "164919283277",
  appId: "1:164919283277:web:d5f53c98eefb37446e9604",
  measurementId: "G-6GKQCTTL28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
