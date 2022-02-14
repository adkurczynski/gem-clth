import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJd9aoNKxj8oDGs1p3TMsGm75Q7-CvI40",
    authDomain: "gem-cl.firebaseapp.com",
    projectId: "gem-cl",
    storageBucket: "gem-cl.appspot.com",
    messagingSenderId: "137555048352",
    appId: "1:137555048352:web:3c8f4fd272f99ece8256c5",
    measurementId: "G-VYKP22ECJ7"
  };


  const app = initializeApp(config);
  export const firestore = getFirestore(app);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = doc(firestore,`users/${userAuth.uid}`);
  
    const snapShot = await getDoc(userRef);
    console.log(userRef)
  
    if (!snapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        console.log("add user")
        await setDoc(userRef,{
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

 
  export const auth = getAuth();
  export const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => signInWithPopup(auth, provider)
