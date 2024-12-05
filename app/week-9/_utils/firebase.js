// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBADuB0T49RYxunXkLYO55-GSvCCFkz48",
  authDomain: "week-8-auth.firebaseapp.com",
  projectId: "week-8-auth",
  storageBucket: "week-8-auth.firebasestorage.app",
  messagingSenderId: "675040905513",
  appId: "1:675040905513:web:cff1a34797cbdf0b944f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);