// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeFeALQyuhu_jG9qMHeQ3RhDW1-LzKYL4",
    authDomain: "facebookclone-37885.firebaseapp.com",
    projectId: "facebookclone-37885",
    storageBucket: "facebookclone-37885.appspot.com",
    messagingSenderId: "981367121767",
    appId: "1:981367121767:web:98248e193b4f0f86a6f1c2",
    measurementId: "G-JJF2P0NBHD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;