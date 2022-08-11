import React from 'react';
import styled from 'styled-components';
import * as EmailValidator from 'email-validator';
import Button from '@mui/material/Button';
import { Avatar, Badge, Container } from '@mui/material';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { auth } from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import Signout from './Signout';
import { useCollection } from 'react-firebase-hooks/firestore';
import { CollectionReference } from '@firebase/firestore';
import { db } from '../firebase';
import { collection } from '@firebase/firestore';
import { getFirestore } from 'firebase/firestore'


const Chat = () => {
  return(
   <Boxe>
    <Avatar margin='5px'/>
    <h2>user@gmail.com</h2>
   </Boxe>
  )
}



function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] =  useCollection(
    collection(getFirestore(), 'chats'),
  );


  console.log(snapshot);


    const createChat = () => {
        const input = prompt(
            'Please enter an email adress for the user you with to chat with'
            );

            if (!input) return null;
            
            if (EmailValidator.validate(input)) {
                
            };
    
        }
  return (
    <Tainer>

    <AppBar position="static">
        <Wrapper >
            
            <Avatar src={user.photoURL} />
       
                <section>           
                    <Badge color="secondary" badgeContent={0} showZero aria-label="display more actions" className='mail'>
                        <IconButton color="inherit">
                         <MailIcon />
                        </IconButton>
                    </Badge>
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                    <MoreIcon />
                    </IconButton>
                </section>
        </Wrapper>
        <Search>
            <SearchIcon />
            <SearchInput placeholder="Ecrivez votre mail" />
       </Search>

       <SidebarButton onClick={createChat}>Start a new Chat</SidebarButton>

      <ChatContain>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </ChatContain>
     
  </AppBar>
    
 

    </Tainer>
  );
}

export default Sidebar;


// Chat 
const Boxe = styled.div`
  display: flex;
  margin-top: 3px;
`;

const ChatContain = styled.div`
display: flex;
flex-direction: column;
overflow-X: scroll;

`;

const Tainer = styled.div`
min-width: 300px;
overflow-X: scroll;
scroll-behavior: smooth;
height: 100vh;
border: 1px solid black;

`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;


const mail = styled.div`
margin: 344px;
`;  




const SidebarButton = styled(Button)`
width: 100%;

 &&&{
    border: 1px none solid whitesmoke;
 }

`;

const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;
`;

const Search = styled.div`
display: flex;
align-items: center;
padding: 5px;
border-radius: 2px;
cursor: pointer;
`;

// const Header = styled.div`
// display: flex;
// position: sticky;
// top: 0;
// background-color: white;
// z-index: 1;
// justify-content: space-between;
// align-items: center;
// padding: 15px;
// height: 80px;
// border-bottom: solid whitesmoke;
// `;

// const UserAvatar = styled(Avatar)`
//  cursor: pointer;

//  :hover {
//     opacity: .8;
//  }
// `;

// const IconsContainer = styled.div`
// `;
