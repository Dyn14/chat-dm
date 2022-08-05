import React from 'react';
import {auth} from '../firebase';
import { Button } from '@mui/material';


function Signout() {
    const exit = () =>{
        auth.signOut();
    }
  return (
    <Button onClick={exit}>Sign out</Button>
  )
}

export default Signout;