import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    // wasze ustawienia
    apiKey: "AIzaSyA-tzif3hipCgN_OsGje0bkv9L72BiPYfM",
    authDomain: "my-netflix-copy.firebaseapp.com",
    projectId: "my-netflix-copy",
    storageBucket: "my-netflix-copy.appspot.com",
    messagingSenderId: "415324695182",
    appId: "1:415324695182:web:248afb658b15004243b7df"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db };