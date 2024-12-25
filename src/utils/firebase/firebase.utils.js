import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAADj8vv4fFwu2ZiTyeM45RT1OcHofuh_k",
  authDomain: "crwn-clothing-db-de85f.firebaseapp.com",
  projectId: "crwn-clothing-db-de85f",
  storageBucket: "crwn-clothing-db-de85f.firebasestorage.app",
  messagingSenderId: "100568193080",
  appId: "1:100568193080:web:9434ccb3606018afc2aecd",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
