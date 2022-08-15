

import Login from './pages/Login/Login'
import { colors } from './utils/style'
import { useState , useEffect} from 'react'
import Home from './pages/Home/Home'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


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

function App() {

  const [token , setToken ] = useState('')
  
  useEffect(()=>{

    const hash  = window.location.hash
  
      if(hash){
        const token = hash.substring(1).split("&")[0].split('=')[1]
        console.log(token)
      }
      
  },[token])

 
  return (
     <BrowserRouter>
       <GlobalStyle/>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/home" element ={<Home/>}/>
       </Routes>

     </BrowserRouter>
  )
}

export default App
