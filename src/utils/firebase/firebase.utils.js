import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy5ZMlDz9zQp1Mm8YKwr6gFnpcxKczs4Q",
    authDomain: "crwn-clothing-db-e5600.firebaseapp.com",
    projectId: "crwn-clothing-db-e5600",
    storageBucket: "crwn-clothing-db-e5600.appspot.com",
    messagingSenderId: "967308107090",
    appId: "1:967308107090:web:1afb896cbd19f2be7fae8b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
       } catch (error) {
          console.log('Error when trying to create user', error.message)
        }
      }

      return userDocRef;

    };
  
    export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
      
      return await createUserWithEmailAndPassword(auth, email, password);
    };

    export const signInAuthUserWithEmailAndPassword = async (email, password) => {
      if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback);