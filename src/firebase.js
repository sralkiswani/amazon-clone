import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBAsu7guwsd9W4G5xyiMuBEd-8yzkUzGuw",
    authDomain: "clone-275c6.firebaseapp.com",
    projectId: "clone-275c6",
    storageBucket: "clone-275c6.appspot.com",
    messagingSenderId: "548824937038",
    appId: "1:548824937038:web:e480c857f28d41ab26c91f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};