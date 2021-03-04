import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCec1SHFNFuw9OhO9VnyFyv1BPdg1qigk",
    authDomain: "crwn-db-37d4d.firebaseapp.com",
    projectId: "crwn-db-37d4d",
    storageBucket: "crwn-db-37d4d.appspot.com",
    messagingSenderId: "849358176170",
    appId: "1:849358176170:web:332273513489cf1f74f5d3",
    measurementId: "G-BVP0R0HF3Q"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {console.log('signInWithGoogle function');  auth.signInWithPopup(provider); }

export default firebase;