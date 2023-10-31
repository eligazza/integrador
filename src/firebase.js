// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFLia6XpAmLL3y6AwtM23_hTTPFR5JGwU",
  authDomain: "guider-1aaa8.firebaseapp.com",
  projectId: "guider-1aaa8",
  storageBucket: "guider-1aaa8.appspot.com",
  messagingSenderId: "234227394154",
  appId: "1:234227394154:web:a0bd3ec9978e4bf3a34c13",
  measurementId: "G-9Q9KF52EN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app