import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

const config = {
  apiKey: "AIzaSyCTHDLBcR_f8w4gRCfyw0t6N9GozCvAqKQ",
  authDomain: "coroa-db.firebaseapp.com",
  databaseURL: "https://coroa-db.firebaseio.com",
  projectId: "coroa-db",
  storageBucket: "coroa-db.appspot.com",
  messagingSenderId: "9684667473",
  appId: "1:9684667473:web:fffde8dfae97eb25503c70",
  measurementId: "G-T5SR1BTRLJ"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;