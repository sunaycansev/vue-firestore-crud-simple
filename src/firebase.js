// Import the functions you need from the SDKs you need

import firebase from "firebase/compat";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoy4Eti_-aAfArdQPyHgAiuv2k8zxp_wY",
  authDomain: "vue-firestore-crud-simple.firebaseapp.com",
  projectId: "vue-firestore-crud-simple",
  storageBucket: "vue-firestore-crud-simple.appspot.com",
  messagingSenderId: "642101929818",
  appId: "1:642101929818:web:c9dfa6081e68bb05da7563",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
