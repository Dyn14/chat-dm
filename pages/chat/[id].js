import React from 'react'
import styled from 'styled-components';
import { Avatar, Badge, Container } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { query } from 'firebase/firestore/lite';
import { collection, doc, orderBy } from 'firebase/firestore';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { app, auth } from '../../firebase';
import { getFirestore} from 'firebase/firestore';
import { userAgent } from 'next/server';
import {useAuthState} from "react-firebase-hooks/auth";
import getOtherEmail from '../../utils/getOtherEmail';





function Chat() {
    const router = useRouter();
    const { id } = router.query;
    const [user] = useAuthState(auth);

    const q = query(collection(getFirestore(app), `Chats/${id}/message`), orderBy("time"));
    const [messages] = useCollectionData(q);

    const [chat] = useDocumentData(doc(getFirestore(app), "Chats", id))
    console.log(chat);

    const getMessages = () =>
     messages?.map(msg => {
        const sender = msg.sender === user.email

        if(sender){
            return(
                <UserMessage key={Math.random()}>
                    <Text>{msg.text}</Text>
                </UserMessage>
            )
        }
        if(!sender){
            return(
                <ClientMessage key={Math.random()}>
                    <Text>{msg.text}</Text>
                </ClientMessage>
            )
        }
       
     })

    


  return (
   <Wrap>

        <Head>
            <title>Chat-dm msg</title>
        </Head>

        <Top>
            <Avatar />
            <Text>{getOtherEmail(chat?.users, user)}</Text>
        </Top>
        <ChatBox>
           {getMessages()}
        </ChatBox>
        <BottomBar>
        <Input type="Text" placeholder='ecrivez votre texte ici' width="100%" /> 
        <SendIcon />
        </BottomBar>
   </Wrap>
  )
}

    const Wrap = styled.div`
    height: 100vh;
    width: 100%;
    border: 1px solid black;

    `;

const Top = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 80px;
width: 100%;
`;

const Text = styled.h1`
margin: 1px 60px;
`;


const BottomBar = styled.div`
width: 100%;
background: blue;
position:fixed;
bottom:0;
display: flex;

`;

const Input = styled.input`
min-width: 300px;
width: 60%;
height: 30px;
margin: 5px 8px;
`;


// Dans le ChatBOX

const ChatBox = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow-x: scroll;
`;


const UserMessage = styled.div`
background: #ccc;
width: fit-content;
padding: 20px;
margin: 12px;
border-radius: 5px;
min-width: 100px;
`;

const ClientMessage = styled.div`
background: aliceblue;
width: fit-content;
min-width: 100px;
padding: 20px;
margin: 12px;
border-radius: 5px;
align-self: flex-end;
`;

const TextChat = styled.p`

`;




export default Chat