import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1F5kuVQiCNqpsxLgBrSH2wphZD-M_6J0",
  authDomain: "netflix-clone-3efa6.firebaseapp.com",
  projectId: "netflix-clone-3efa6",
  storageBucket: "netflix-clone-3efa6.appspot.com",
  messagingSenderId: "231761878241",
  appId: "1:231761878241:web:65e46406dcf7e6f81daba0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;