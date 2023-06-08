// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// IMPORT AUTH 
import { getAuth } from 'firebase/auth';
// IMPORT FIRESTORE 
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3SU6BIsdM5DjczvHumm9JuBMPgrB3p6c",
    authDomain: "qatar-airways-4763d.firebaseapp.com",
    projectId: "qatar-airways-4763d",
    storageBucket: "qatar-airways-4763d.appspot.com",
    messagingSenderId: "77284013146",
    appId: "1:77284013146:web:2e0998e25fef477b025463",
    measurementId: "G-8FED2LKRV0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 

export default app;