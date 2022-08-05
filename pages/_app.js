import App from 'next/app'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Login from "./login";
import React from 'react';
import Loading from '../components/Loading';


function MyApp({ Component, pageProps }) {
      
    
       const [user, loading] = useAuthState(auth);
      
       if (loading) return <Loading />;
     if(user) {
       return <Component {...pageProps} />;
     }
     else{
       return <Login />
     }
      
       

};

export default MyApp