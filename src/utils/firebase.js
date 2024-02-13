// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsIr4miEUHrKuWnESXLI6ja1XAz76tYEA",
  authDomain: "netflixgpt-eb478.firebaseapp.com",
  projectId: "netflixgpt-eb478",
  storageBucket: "netflixgpt-eb478.appspot.com",
  messagingSenderId: "664061112480",
  appId: "1:664061112480:web:c83b9ab79c029e3f0799c5",
  measurementId: "G-22TSF7BM5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();