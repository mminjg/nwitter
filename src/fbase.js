import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCi6EjU31zOZ9wbkJiC6iGMjNHb99sqwg4",
    authDomain: "nwitter-637dd.firebaseapp.com",
    databaseURL: "https://nwitter-637dd.firebaseio.com",
    projectId: "nwitter-637dd",
    storageBucket: "nwitter-637dd.appspot.com",
    messagingSenderId: "870360440168",
    appId: "1:870360440168:web:9f11ed42299629b39e0add"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();