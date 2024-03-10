// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjSpunDnS9LJhKHCvLz3yjqdK84c4aCDc",
  authDomain: "effort-education.firebaseapp.com",
  projectId: "effort-education",
  storageBucket: "effort-education.appspot.com",
  messagingSenderId: "209704144129",
  appId: "1:209704144129:web:1c8d3eb1f1bed274701f00",
  measurementId: "G-BBQ267BE54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);