import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAW0Msa6923_1Xsd1i06c7V4azzZdI5xXc",
    authDomain: "bartersystem-461b7.firebaseapp.com",
    projectId: "bartersystem-461b7",
    storageBucket: "bartersystem-461b7.appspot.com",
    messagingSenderId: "171172302355",
    appId: "1:171172302355:web:f2ce18b366c405c31539e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()