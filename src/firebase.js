import firebase from '@firebase/app';
require('firebase/auth');
require('firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyCkgH_NunnndHDNydIWyhF2hxFnf0kytxQ",
    authDomain: "fbclone-4d6d9.firebaseapp.com",
    databaseURL: "https://fbclone-4d6d9.firebaseio.com",
    projectId: "fbclone-4d6d9",
    storageBucket: "fbclone-4d6d9.appspot.com",
    messagingSenderId: "926065359623",
    appId: "1:926065359623:web:1f9cb87fd2b6e913ec63a2"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
//  const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = fb.firestore()
 const auth = firebase.auth()
 const provider = new firebase.auth.GoogleAuthProvider()
//  export {auth,provider}
 export {auth,db,provider}

function onAuthStateChange() {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("The user is logged in");
    } else {
      console.log("The user is not logged in");
    }
  });
}