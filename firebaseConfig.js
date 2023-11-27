// Import the necessary libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//TODO: add android support

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj8H1PI0a6Bu4QMvOj-7md9qXCbLwXk64",
  authDomain: "chats-366af.firebaseapp.com",
  projectId: "chats-366af",
  storageBucket: "chats-366af.appspot.com",
  messagingSenderId: "164919283277",
  appId: "1:164919283277:web:d5f53c98eefb37446e9604",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the database
export const db = getFirestore(app);
