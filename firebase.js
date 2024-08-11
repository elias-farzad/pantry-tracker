// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmEY97s1Qh5UpQ6v5P0xkNHqdduLu05IU",
  authDomain: "inventory-management-350e7.firebaseapp.com",
  projectId: "inventory-management-350e7",
  storageBucket: "inventory-management-350e7.appspot.com",
  messagingSenderId: "326001080071",
  appId: "1:326001080071:web:5e13f34049d285695f37a2",
  measurementId: "G-MG5V9ZTYGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}