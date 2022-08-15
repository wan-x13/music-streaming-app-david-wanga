

import { Welcome, LoginContainer,TitlePlatform, Blason, ButtonLink } from "./styleLogin";



const Login = () => {

    const handleClick = ()=>{

        const CLIENT_ID = "b60e4391958140e0adb302ec6a11f6f5"
        const REDIRECT_URI = "http://localhost:5173"
        const AUTH_ENDPOINT ="https://accounts.spotify.com/authorize"
        const RESPONSE_TYPE ="token"

        window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

    }
   
    const hash = window.location.hash;
  

   


    return (
        <LoginContainer>
            
            <Welcome>Bienvenue à</Welcome>
            <TitlePlatform>WanZik</TitlePlatform>
            <Blason>Prêt à vous plonger dans l'inconnue ?</Blason>
            <ButtonLink onClick={handleClick}>Login with spotify</ButtonLink>
           
            
        </LoginContainer>
    );
};

export default Login;