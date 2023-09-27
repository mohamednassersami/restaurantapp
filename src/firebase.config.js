import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCqfZZU_BHLd72t9sesdxZIQnRbKdpyU4",
  authDomain: "restaurantapp-4f1b5.firebaseapp.com",
  databaseURL: "https://restaurantapp-4f1b5-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-4f1b5",
  storageBucket: "restaurantapp-4f1b5.appspot.com",
  messagingSenderId: "756369129345",
  appId: "1:756369129345:web:b3ecaddcc37455eabb7280",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
