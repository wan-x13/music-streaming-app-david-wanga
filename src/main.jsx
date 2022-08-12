import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import Login from './components/Login/Login'
import { colors } from './utils/style'



const GlobalStyle = createGlobalStyle`

    *{
      font-family: 'Poppins', sans-serif;
      color :white;
    }
    body{
      height: 100vh;
      margin : 0;
      background : ${colors.bagroundBlack}
    }
`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalStyle/>
   <Login/>
  </React.StrictMode>
)
