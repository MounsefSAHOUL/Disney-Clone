//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1DQr7HDZa6cJnmJPT44C5KVBp_JCkLRE",
  authDomain: "disney-clone-1d3ce.firebaseapp.com",
  projectId: "disney-clone-1d3ce",
  storageBucket: "disney-clone-1d3ce.appspot.com",
  messagingSenderId: "1055688287130",
  appId: "1:1055688287130:web:d1d2f7b039d5381bf0d023"
};

// Initialize Firebase
const appFire = firebase.initializeApp(firebaseConfig);
const db = appFire.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage} ;
export default db;
