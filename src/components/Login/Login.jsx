import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/style";
import { LinkButton ,Welcome, LoginContainer,TitlePlatform, Blason } from "./styleLogin";



const Login = () => {
    const CLIENT_ID = "b60e4391958140e0adb302ec6a11f6f5"
    const REDIRECT_URI = "http://localhost:5173"
    const AUTH_ENDPOINT ="https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE ="token"


    const [token , setToken ] = useState('')

    useEffect(()=>{

        const hash   = window.location.hash
        
        let token  = window.localStorage.getItem("token")
        if(!token && hash){
            token = hash.substring(1).split("&").find(elem=>elem.startsWith("access_token"))?.split('=')[1]
            
           window.location.hash = ""
           window.localStorage.setItem("token" ,token)
           setToken(token)

        }
    },[])


    return (
        <LoginContainer>
            
            <Welcome>Bienvenue à</Welcome>
            <TitlePlatform>WanZik</TitlePlatform>
            <Blason>Prêt à vous plonger dans l'inconnue ?</Blason>
            <LinkButton href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} >
                Login with spotify </LinkButton>
            
        </LoginContainer>
    );
};

export default Login;