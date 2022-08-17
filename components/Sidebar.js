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
import { app, auth } from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import Signout from './Signout';
import { useCollection } from 'react-firebase-hooks/firestore';
import { CollectionReference } from '@firebase/firestore';
import { db } from '../firebase';
import { collection, addDoc } from '@firebase/firestore';
import { getFirestore } from 'firebase/firestore'
import getOtherEmail from '../utils/getOtherEmail';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import { async } from '@firebase/util';




function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] =  useCollection(
    collection(getFirestore(app), 'Chats'),);
  const chats = snapshot?.docs.map(doc => ({id: doc.id, ...doc.data()}));
  const router = useRouter();


const redirect = (id) => {
  router.push(`/chat/${id}`)
}

  const chatList = () => {
    return(
      chats?.filter(chat => chat.users.includes(user.email)).map(
        chat =>
        <Boxe key={Math.random()} onClick={() => redirect(chat.id)} >
          <Avatar  margin='5px'/>
          <h2>{getOtherEmail(chat.users, user)}</h2>
       </Boxe>
      )
    )
  }



    const chatExist = email => chats?.find(chat => (chat.users.includes(user.email) && chat.users.includes(email)));
    

    const createChat = async() => {
        const input = prompt(
            'Please enter an email adress for the user you with to chat with'
            );
          if (!chatExist(input) && (input != user.email)){
          await addDoc(collection(getFirestore(), "Chats"), {users: [user.email, input]})
          }
         
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
        {chatList()}
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
