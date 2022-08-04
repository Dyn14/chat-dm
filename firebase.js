// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaDG5WUdgi5nRNhBpUiOFtKYk_Ga6F-gQ",
    authDomain: "what-dm.firebaseapp.com",
    projectId: "what-dm",
    storageBucket: "what-dm.appspot.com",
    messagingSenderId: "386631534762",
    appId: "1:386631534762:web:f6c8e071dbd9c8715628d3"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

 
 export {app, db, auth};
 