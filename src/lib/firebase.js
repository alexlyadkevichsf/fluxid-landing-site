import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASWVx8RTmXgv8Y3kvTZRbcvipHl2nBVjE",
  authDomain: "fluxid.firebaseapp.com",
  projectId: "fluxid",
  storageBucket: "fluxid.firebasestorage.app",
  messagingSenderId: "340094988589",
  appId: "1:340094988589:web:5e667e17e7b86e51e563a4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
