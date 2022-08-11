import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Chat from './chat/id'
import styled from 'styled-components';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Section>
      <Sidebar /> 
      <Chat />
    </Section>  
   
     
    </div>
  )
}

const Section = styled.div`
display: flex;
font-family: sans-serif;
overflow-y: hidden;
padding: 0;
margin: 0;
`;