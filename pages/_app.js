import App from 'next/app'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Login from "./login";
import React, { useEffect } from 'react';
import Loading from '../components/Loading';


function MyApp({ Component, pageProps }) {
      const [user, loading] = useAuthState(auth);

      useEffect(() => {
       if(user) {
           
       }
      }, [user]);
      
       if (loading) return <Loading />;
     if(user) {
       return <Component {...pageProps} />;
     }
     else{
       return <Login />
     }
      
       

};

export default MyApp