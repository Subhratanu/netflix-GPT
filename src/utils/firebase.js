// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpYhsan1De1-VCMS8v1My0ZeJKOwesSRw",
  authDomain: "netflixgpt-78095.firebaseapp.com",
  projectId: "netflixgpt-78095",
  storageBucket: "netflixgpt-78095.firebasestorage.app",
  messagingSenderId: "440360517566",
  appId: "1:440360517566:web:78b11e4e8e5488755f03ef",
  measurementId: "G-5ME4X372TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();