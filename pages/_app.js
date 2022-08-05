import App from 'next/app'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Login from "./login";
import React from 'react';


function MyApp({ Component, pageProps }) {
      
    
       const [user] = useAuthState(auth);
       console.log(user);
       return (
              <div> 
                     {user ? <Component {...pageProps} /> : <Login />}
              </div>
       );
      
       

};

export default MyApp