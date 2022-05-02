// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo7N5HASoT_LwNdZTBnUaWASGSAMS9Txw",
  authDomain: "teensysimulator.firebaseapp.com",
  projectId: "teensysimulator",
  storageBucket: "teensysimulator.appspot.com",
  messagingSenderId: "662676869696",
  appId: "1:662676869696:web:c8009fea52ecb7b24485a5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};