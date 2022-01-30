

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmmhn7-DowaixNRoSm0yT78MDuedopDA4",
    authDomain: "netflix-clone-24789.firebaseapp.com",
    projectId: "netflix-clone-24789",
    storageBucket: "netflix-clone-24789.appspot.com",
    messagingSenderId: "565650320561",
    appId: "1:565650320561:web:2eeead11768e039615c690",
    measurementId: "G-BNFKRHHC0K"
  };


const firebaseApp= firebase.initializeApp(firebaseConfig);

// firestore is firebase database 
const db= firebaseApp.firestore();

const auth= firebase.auth();
export {auth};

export default db;




