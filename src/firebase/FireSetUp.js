
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectID,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appID
};


firebase.initializeApp(firebaseConfig)
// console.log(firebase.auth())
export const auth = firebase.auth()
export const db = firebase.firestore()

// export const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);



// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export const auth = getAuth(app)