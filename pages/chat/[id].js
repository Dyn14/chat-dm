import React from 'react'
import styled from 'styled-components';
import { Avatar, Badge, Container } from '@mui/material';
import SendIcon from '@material-ui/icons/Send';
import Head from 'next/head';
import { useRouter } from 'next/router';



function Chat() {
    const router = useRouter();
    const { id } = router.query;
    
    console.log(id);

  return (
   <Wrap>

        <Head>
            <title>Chat-dm msg</title>
        </Head>

        <Top>
            <Avatar />
            <Text>Nom utilisateur</Text>
        </Top>
        <ChatBox>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
            <UserMessage>
                <TextChat>je dis nimp</TextChat>
            </UserMessage>
            <ClientMessage>
            <TextChat>Ah bon comme je suis choque</TextChat>
            </ClientMessage>
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