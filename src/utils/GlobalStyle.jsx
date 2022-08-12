import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./context";


const StyledGlobale = createGlobalStyle`

    *{
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: ${({isDarkMode}) => (isDarkMode ? 'black' : "white")}
    }
`

const GlobalStyle = ()=>{

     const {theme} = useContext(ThemeContext)

    return(
        <StyledGlobale isDarkMode={theme=== "dark"}/>
    )
}
export  default GlobalStyle