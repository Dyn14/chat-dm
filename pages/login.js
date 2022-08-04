import styled from "styled-components";
import Head from "next/head";

function Login() {
    return (
      <Container>
        <Head>
            <title>Login</title>
        </Head>

        <LoginContainer>
          <h1>page login</h1>
            <Logo
            src=""
            />            
        </LoginContainer>
      </Container>
    )
};

export default Login;


const Container = styled.div``;


const LoginContainer = styled.div``;

const Logo = styled.img``;