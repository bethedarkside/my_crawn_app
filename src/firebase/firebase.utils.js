import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbFFB9-6NdR9F5xcUbjJUKkf9G-mki3TQ",
  authDomain: "todolist-823c4.firebaseapp.com",
  databaseURL: "https://todolist-823c4.firebaseio.com",
  projectId: "todolist-823c4",
  storageBucket: "todolist-823c4.appspot.com",
  messagingSenderId: "763915463914",
  appId: "1:763915463914:web:11ff61ad7e2a35e558fb93",
  measurementId: "G-6Z8EXG7C7N",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  let db = firebase.firestore();
  const userRef = db.doc(`users/${userAuth.uid}`);
  const userSnapshot = userRef.get();
  // console.log(userRef);

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        ...additionalData,
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`errro while adding User: ${error.message}`);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const stotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
