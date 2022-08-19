

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { initialState } from "../../features/userSlice";
import { Welcome, LoginContainer,TitlePlatform, Blason, ButtonLink } from "./styleLogin";



const Login = () => {

    const {userToken  } = useSelector((state)=>state.user)
   const {TitleApp} = initialState
    console.log(TitleApp)
    const handleClick = ()=>{

        const CLIENT_ID = "f67654206bde49949a78f35942476269"
        const REDIRECT_URI = "https://rainbow-axolotl-031360.netlify.app/"
        const AUTH_ENDPOINT ="https://accounts.spotify.com/authorize"
        const RESPONSE_TYPE ="token&show_dialog=true"

        const scope = ["user-read-email", 
        "ugc-image-upload", 
        "user-read-playback-state","user-top-read", 
        "user-read-recently-played", 
        "user-read-playback-position",
        "user-modify-playback-state",
        "user-library-modify",
        "user-library-read",
        "playlist-modify-public"]

        window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope.join(" ")}&response_type=${RESPONSE_TYPE}`

    }

  
   if(userToken){

     return <Navigate  to= "/wanzik"/>
   }
    return (
        <LoginContainer>
            
            <Welcome>Bienvenue à</Welcome>
            <TitlePlatform>{TitleApp}</TitlePlatform>
            <Blason>Prêt à vous plonger dans l'inconnue ?</Blason>
            <ButtonLink 
            onClick={handleClick}>Login with spotify</ButtonLink>
           
            
        </LoginContainer>
    );
};

export default Login;