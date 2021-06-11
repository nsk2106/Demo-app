import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATpqW18e6NMWCNe-DXDTotIB-Q9Bp1UAQ",
    authDomain: "fir-app-45e68.firebaseapp.com",
    projectId: "fir-app-45e68",
    storageBucket: "fir-app-45e68.appspot.com",
    messagingSenderId: "63242114216",
    appId: "1:63242114216:web:69da1f98881e155a211e9d",
    measurementId: "G-X3QLQ2E391"
};

firebase.initializeApp(firebaseConfig);

export default firebase;