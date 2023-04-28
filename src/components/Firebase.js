import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBii8UBzg9QhsRewb2NvBeDDVq54WMx9Hc",
  authDomain: "insta-clone-d21d3.firebaseapp.com",
  projectId: "insta-clone-d21d3",
  storageBucket: "insta-clone-d21d3.appspot.com",
  messagingSenderId: "284820097256",
  appId: "1:284820097256:web:0c59443cf1acffcfcae15d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const db = app.firestore();
export { auth, storage, db };
