// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVQTwf79-MePnFkM-dxiGj3iRU74mdqug",
    authDomain: "fir-authentication-2d3ea.firebaseapp.com",
    projectId: "fir-authentication-2d3ea",
    storageBucket: "fir-authentication-2d3ea.appspot.com",
    messagingSenderId: "989902762531",
    appId: "1:989902762531:web:fef501f386d189ddd73796",
    measurementId: "G-K70SX8QDPV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
