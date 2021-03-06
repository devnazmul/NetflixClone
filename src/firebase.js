import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAXKB2EAKTh-rFEgXHgfMPc2-s_9hvEjYI",
  authDomain: "devn-netflix.firebaseapp.com",
  projectId: "devn-netflix",
  storageBucket: "devn-netflix.appspot.com",
  messagingSenderId: "42836477071",
  appId: "1:42836477071:web:22a53c235eb04182155cfa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;