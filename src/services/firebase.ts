import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBlh30C6P_UyLsqAM8jlMIThW1QlGkZpa4",
  authDomain: "playfor-bdb14.firebaseapp.com",
  projectId: "playfor-bdb14",
  storageBucket: "playfor-bdb14.appspot.com",
  messagingSenderId: "490043812225",
  appId: "1:490043812225:web:563b9b7d9439cc7a87e080",
  measurementId: "G-MF1F8QEX30"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const database = firebase.database();

export { database, firebase }