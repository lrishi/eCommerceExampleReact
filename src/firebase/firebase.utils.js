import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBANQvfPNW5nNax0z2Y0Zs5W2FJvZq8PnM",
    authDomain: "crwn-db-cd835.firebaseapp.com",
    databaseURL: "https://crwn-db-cd835.firebaseio.com",
    projectId: "crwn-db-cd835",
    storageBucket: "crwn-db-cd835.appspot.com",
    messagingSenderId: "760673475655",
    appId: "1:760673475655:web:dd8df56e8eb04a7540a562"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;