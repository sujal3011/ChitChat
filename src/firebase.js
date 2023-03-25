import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2N2Gm0_qlHZ10snvdkj39VnMlamTWiO4",
  authDomain: "chat-app-4a490.firebaseapp.com",
  projectId: "chat-app-4a490",
  storageBucket: "chat-app-4a490.appspot.com",
  messagingSenderId: "329779693508",
  appId: "1:329779693508:web:9231e43805b0531c3b4691"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);
