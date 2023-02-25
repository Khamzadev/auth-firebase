// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAehbN7SED9s1jL7_pcWc2vIfbofkMG148",
  authDomain: "auth-954b4.firebaseapp.com",
  projectId: "auth-954b4",
  storageBucket: "auth-954b4.appspot.com",
  messagingSenderId: "737521404610",
  appId: "1:737521404610:web:ed854e7f868565b14f895b",
  measurementId: "G-EY1L6VTC0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);