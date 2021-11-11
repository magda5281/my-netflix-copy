import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    // wasze ustawienia
    apiKey: "AIzaSyA-tzif3hipCgN_OsGje0bkv9L72BiPYfM",
    authDomain: "my-netflix-copy.firebaseapp.com",
    projectId: "my-netflix-copy",
    storageBucket: "my-netflix-copy.appspot.com",
    messagingSenderId: "415324695182",
    appId: "1:415324695182:web:248afb658b15004243b7df"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;

firebase.analytics();
