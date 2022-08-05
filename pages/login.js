import styled from "styled-components";
import Head from "next/head";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";


function Login() {

  const signIn = () =>{
  
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    
     
  }
  

    return (
      <Container>
        <Head>
            <title>Connection</title>
        </Head>

        <LoginContainer>
            <Logo
            src="https://cdn.dribbble.com/users/295073/screenshots/12079176/media/97afcd31adf21a68c150f2e6b42e22ce.jpg"
            />         
            <Button variant="outline" onClick={signIn}>SIGN IN WITH GOOGLE</Button>   
        </LoginContainer>
      </Container>
    )
};



export default Login;


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;  
height: 100vh;
background: whitesmoke;
`;


const LoginContainer = styled.div`
display: flex;
flex-direction: column;
padding: 90px;
align-items: center;
background: white;
border-radius: 5px;
box-shadow: 0 4px 14px -3px rgba(0, 0, 0, .7);
`;

const Logo = styled.img`
width: 25rem;

`;

const Button = styled.button`
  height: 50px;
  width: 350px;
  cursor: pointer;
  border: 1px solid black; 
  border-radius: 5px;
  background-color: white;
`;
