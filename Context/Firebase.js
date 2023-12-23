// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "store-37ff0.firebaseapp.com",
  projectId: "store-37ff0",
  storageBucket: "store-37ff0.appspot.com",
  messagingSenderId: "613917496753",
  appId: "1:613917496753:web:bce05b6c21bbd909ec9990",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
