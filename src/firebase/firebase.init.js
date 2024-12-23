// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6iijeXXmRVcv4ujGdrTtpzvOy6b7KdFA",
  authDomain: "assignment-11-ebe19.firebaseapp.com",
  projectId: "assignment-11-ebe19",
  storageBucket: "assignment-11-ebe19.firebasestorage.app",
  messagingSenderId: "401544027503",
  appId: "1:401544027503:web:1a9c21f3e7bd2daabc5c9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase authetication and get a reference to the service
const auth = getAuth(app)

export default auth;