import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuOsGA6iI_Bfyy2M-IcDcOMfA1Ec-WYLU",
  authDomain: "blog-with-firebase-e7d98.firebaseapp.com",
  projectId: "blog-with-firebase-e7d98",
  storageBucket: "blog-with-firebase-e7d98.appspot.com",
  messagingSenderId: "180306972358",
  appId: "1:180306972358:web:dadab191df31ea360611c7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };