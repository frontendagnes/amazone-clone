// import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/functions'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCusgzk2X08QSNJTqrU3YPfEWW7_Kvhk4Y",
    authDomain: "e-clone-eb7a4.firebaseapp.com",
    projectId: "e-clone-eb7a4",
    storageBucket: "e-clone-eb7a4.appspot.com",
    messagingSenderId: "763384590871",
    appId: "1:763384590871:web:57a3d1c16783824f8c6252"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth }