

  import firebase from 'firebase';




 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVHGf_nOnQjZQgYIPMxMKDrzcaPLSYHSI",
    authDomain: "slack-clone-38903.firebaseapp.com",
    databaseURL: "https://slack-clone-38903.firebaseio.com",
    projectId: "slack-clone-38903",
    storageBucket: "slack-clone-38903.appspot.com",
    messagingSenderId: "1045282536004",
    appId: "1:1045282536004:web:e6fe2b5708c58fc8d45a11",
    measurementId: "G-P3DQS4Z1NZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  console.log(db)
  export {db, auth, provider};
