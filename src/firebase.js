import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXXdpKmy3UU0YIxn3cnADbUL5Qn-OaCsw",
  authDomain: "challenge-459f3.firebaseapp.com",
  databaseURL: "https://challenge-459f3.firebaseio.com",
  projectId: "challenge-459f3",
  storageBucket: "challenge-459f3.appspot.com",
  messagingSenderId: "1038635484079",
  appId: "1:1038635484079:web:e178075d3b24577ea8255a",
  measurementId: "G-LRZ7WN1MK3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};