import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAuSwMQMG7cOtqPVCJgXOv1DPP2CJNigpk",
    authDomain: "todo-ninja-44022.firebaseapp.com",
    databaseURL: "https://todo-ninja-44022.firebaseio.com",
    projectId: "todo-ninja-44022",
    storageBucket: "todo-ninja-44022.appspot.com",
    messagingSenderId: "58238376753"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true })

  export default db;