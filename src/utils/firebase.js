// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuz_MxcXSZRH_TNreaXPMurM6KSa_NExk",
  authDomain: "netflix-gpt-c67ab.firebaseapp.com",
  projectId: "netflix-gpt-c67ab",
  storageBucket: "netflix-gpt-c67ab.appspot.com",
  messagingSenderId: "1044300694972",
  appId: "1:1044300694972:web:c09bbd9d2758741d9597b9",
  measurementId: "G-26BTBY7GJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();