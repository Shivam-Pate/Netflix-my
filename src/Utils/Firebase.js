// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiaJOsdg0WhJ2ycsbKQ5iCVkguxr_l16A",
  authDomain: "netflix-d7a9c.firebaseapp.com",
  projectId: "netflix-d7a9c",
  storageBucket: "netflix-d7a9c.appspot.com",
  messagingSenderId: "91618705472",
  appId: "1:91618705472:web:e3b3404da203264e1c9fa5",
  measurementId: "G-V7NV57EQPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  export const auth = getAuth();