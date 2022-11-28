import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWB4zW8WQ34YXKANODAtNrCqUGc--F1Ck",
  authDomain: "disneyplus-clone-185f6.firebaseapp.com",
  projectId: "disneyplus-clone-185f6",
  storageBucket: "disneyplus-clone-185f6.appspot.com",
  messagingSenderId: "1085438019733",
  appId: "1:1085438019733:web:35a29fe4cbed2e6e04b39c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
