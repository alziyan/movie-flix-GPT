// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcDerpOSyDAewgrP13IGBV48MV8MtN2Rg",
  authDomain: "movieflix-001.firebaseapp.com",
  projectId: "movieflix-001",
  storageBucket: "movieflix-001.appspot.com",
  messagingSenderId: "798626736767",
  appId: "1:798626736767:web:fde1901f574aa3040ced4a",
  measurementId: "G-KTSXM14DRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
