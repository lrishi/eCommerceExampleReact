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


export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (userAuth == null) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;