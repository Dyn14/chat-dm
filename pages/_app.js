import App from 'next/app'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase"
import Login from "./login";
import React from 'react';



function MyApp({ Component, pageProps }) {
      
       const auth = getAuth();
       const user = auth.currentUser;
       
       if (user) {
              return <Component {...pageProps} />;
       }
       else{
              return <Login />
       }


}
export default MyApp