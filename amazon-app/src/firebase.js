import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdQH1KB40gfvu_fe0DRpF8e9SO7EV30v4",
    authDomain: "challenge-d8ee8.firebaseapp.com",
    projectId: "challenge-d8ee8",
    storageBucket: "challenge-d8ee8.appspot.com",
    messagingSenderId: "844286918154",
    appId: "1:844286918154:web:e03d4400d004bcd057a9f3",
    measurementId: "G-GGDEDNM7NB"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth();

  export {db,auth};